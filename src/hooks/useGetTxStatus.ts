import { useEffect, useState } from "react";

//2-way GMP have two different transactions with the same status fields.
//Merged both using steps to update UI as one single transaction.

const useGetTxStatus = (txHash: string) => {
  //send call status
  const [txStatus, setTxStatus] = useState<string>("");
  //receive call status
  const [callBackTxStatus, setCallBackTxStatus] = useState<string>("");
  const [url, setUrl] = useState<string>(
    `${process.env.NEXT_PUBLIC_APP_URL}/api/get-tx-status?hash=${txHash}`
  );
  //merge send/receive steps
  const [step, setStep] = useState<number>(0);
  const [isReceiving, setIsReceiving] = useState<boolean>(false);

  useEffect(() => {
    const refetch = setInterval(() => {
      isReceiving ? fetchResponseStatus() : fetchRequestStatus();
    }, 5000);

    //terminate on success
    if (step == 8) {
      console.log("clearing interval");
      clearInterval(refetch);
    }

    return () => clearInterval(refetch);
  }, [isReceiving]);

  const fetchRequestStatus = async () => {
    const res = await fetch(url);
    const data = await res.json();

    //check if callback is initiated then update url
    const callbackTxHash = data?.txStatus?.callback?.transactionHash;
    console.log(callbackTxHash);
    if (callbackTxHash) {
      setUrl(
        `${process.env.NEXT_PUBLIC_APP_URL}/api/get-tx-status?hash=${callbackTxHash}`
      );

      setIsReceiving(true);
    }

    //update the state for send transaction
    switch (data?.txStatus?.status) {
      case "cannot_fetch_status":
        setTxStatus(data?.txStatus?.status);
        break;

      case "source_gateway_called":
        setStep(1);
        setTxStatus(data?.txStatus?.status);
        break;

      case "confirmed":
        setStep(2);
        setTxStatus(data?.txStatus?.status);
        break;

      case "executing":
        setStep(3);
        setTxStatus(data?.txStatus?.status);
        break;

      case "destination_executed":
        setStep(4);
        setTxStatus(data?.txStatus?.status);
        break;
    }
  };

  const fetchResponseStatus = async () => {
    const res = await fetch(url);
    const data = await res.json();
    console.log("response called");
    //update the state for send transaction
    switch (data?.txStatus?.status) {
      case "cannot_fetch_status":
        setTxStatus(data?.txStatus?.status);
        break;

      case "source_gateway_called":
        setStep(5);
        setCallBackTxStatus(data?.txStatus?.status);
        break;

      case "confirmed":
        setStep(6);
        setCallBackTxStatus(data?.txStatus?.status);
        break;

      case "executing":
        setStep(7);
        setCallBackTxStatus(data?.txStatus?.status);
        break;

      case "destination_executed":
        setStep(8);
        setCallBackTxStatus(data?.txStatus?.status);
        break;
    }
  };

  return { txStatus, callBackTxStatus, step };
};
export default useGetTxStatus;
