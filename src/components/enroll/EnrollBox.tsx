import DatePicker from "react-datepicker";
import { useState, forwardRef } from "react";
import {
  useContractWrite,
  usePrepareContractWrite,
  useWaitForTransaction,
} from "wagmi";
import chains from "../../chains";
import "react-datepicker/dist/react-datepicker.css";
import ImgUploader from "../../components/enroll/ImgUploader";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import Loader from "../../components/icons/Loader";

const EnrollBox = () => {
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [isUploaded, setIsUploaded] = useState<boolean>(false);
  const [imgLink, setImgLink] = useState<string>("");
  const [expiryDate, setExpiryDate] = useState(new Date());

  const ExpiryDatePicker = forwardRef(({ value, onClick }, ref) => (
    <input
      className="w-full text-gray-800 p-2 rounded-sm focus:outline-none"
      value={value}
      onClick={onClick}
      ref={ref}
      readOnly
    />
  ));

  const { config } = usePrepareContractWrite({
    //@ts-ignore
    address: chains.enrollService.address,
    abi: chains.enrollService.abi,
    functionName: "enrollVaccine",
    args: [name, description, imgLink, expiryDate.getTime()],
    onError(e) {
      console.log(e);
    },
  });

  const {
    isLoading: isWriting,
    write: enroll,
    data,
  } = useContractWrite(config);

  const { isLoading } = useWaitForTransaction({
    hash: data?.hash,
    onSuccess(tx) {
      setName("");
      setDescription(""), setImgLink(""), setExpiryDate(new Date());
      setIsUploaded(false);
    },
  });

  const handleEnroll = () => {
    if (name && description && imgLink && expiryDate) {
      enroll?.();
    } else {
      console.log("data not complete");
    }
  };
  return (
    <div className="lg:col-span-4">
      <div className="flex flex-col rounded-md space-y-5 p-5  bg-gray-800">
        <h3 className="font-paytone text-lg">Enroll Vaccine</h3>
        <div>
          <span className="text-sm lg:text-base text-gray-100">Name</span>
          <input
            type="text"
            placeholder="Covid-19 Booster"
            className="w-full text-gray-800 p-2 rounded-sm focus:outline-none"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <span className="text-sm lg:text-base text-gray-100">
            Description
          </span>
          <textarea
            className="w-full text-gray-800
                p-2 rounded-sm focus:outline-none"
            placeholder="A short description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <ThirdwebProvider>
          <ImgUploader
            imgLink={imgLink}
            setImgLink={setImgLink}
            isUploaded={isUploaded}
            setIsUploaded={setIsUploaded}
          />
        </ThirdwebProvider>
        <div>
          <span className="text-sm lg:text-base text-gray-100">
            Expiry date
          </span>
          <DatePicker
            selected={expiryDate}
            customInput={<ExpiryDatePicker />}
            //@ts-ignore
            onChange={(date) => setExpiryDate(date)}
          />
        </div>
        <button
          className="bg-black hover:bg-black/50 active:bg-black p-3 flex justify-center items-center rounded-sm disabled:bg-gray-400"
          onClick={() => handleEnroll()}
          disabled={isLoading || isWriting}
        >
          {isLoading || isWriting ? (
            <>
              <Loader /> <span>Enrolling</span>
            </>
          ) : (
            "Enroll"
          )}
        </button>
      </div>
    </div>
  );
};
export default EnrollBox;
