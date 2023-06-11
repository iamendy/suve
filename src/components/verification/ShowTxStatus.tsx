import Link from "../icons/Link";

const ShowTxStatus = ({ txStatus, step, callBackTxStatus, hash }) => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <span>
          {txStatus == "source_gateway_called" && step < 4
            ? "Pinging Source.."
            : txStatus == "confirmed" && step < 4
            ? "submitting.."
            : txStatus == "executing" && step < 4
            ? "Validating hash.."
            : txStatus == "destination_executed" && step < 4
            ? "Source Executed ✅"
            : txStatus == "cannot_fetch_status"
            ? "Nextwork busy. retrying.."
            : callBackTxStatus == "cannot_fetch_status"
            ? "Nextwork busy. retrying.."
            : callBackTxStatus == "confirmed" && step > 4
            ? "Receiving.."
            : callBackTxStatus == "executing" && step > 4
            ? "Validating hash.."
            : callBackTxStatus == "destination_executed" && step > 4
            ? "Compiling Vaccine ✅"
            : "Initiating Axelar Magic ✨"}
        </span>
        <a href={`https://testnet.axelarscan.io/gmp/${hash}`} target="_blank">
          <Link />
        </a>
      </div>
      <div className="flex space-x-2 mt-2">
        <div className="bg-green-700 w-5 h-5"></div>
        <div
          className={`${
            step >= 1 ? "bg-green-700" : "animate-pulse bg-gray-700"
          } w-5 h-5`}
        ></div>
        <div
          className={`${
            step >= 2 ? "bg-green-700" : "animate-pulse bg-gray-700"
          } w-5 h-5`}
        ></div>
        <div
          className={`${
            step >= 3 ? "bg-green-700" : "animate-pulse bg-gray-700"
          } w-5 h-5`}
        ></div>
        <div
          className={`${
            step >= 4 ? "bg-green-700" : "animate-pulse bg-gray-700"
          } w-5 h-5`}
        ></div>
        <div
          className={`${
            step >= 5 ? "bg-green-700" : "animate-pulse bg-gray-700"
          } w-5 h-5`}
        ></div>
        <div
          className={`${
            step >= 6 ? "bg-green-700" : "animate-pulse bg-gray-700"
          } w-5 h-5`}
        ></div>
        <div
          className={`${
            step >= 7 ? "bg-green-700" : "animate-pulse bg-gray-700"
          } w-5 h-5`}
        ></div>
        <div
          className={`${
            step >= 8 ? "bg-green-700" : "animate-pulse bg-gray-700"
          } w-5 h-5`}
        ></div>
      </div>
    </div>
  );
};
export default ShowTxStatus;
