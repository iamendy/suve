import VaccineContext from "../context/VaccineContext";
import { useContext } from "react";
import formatDate from "../helpers/formatDate";

const VaccineCard = ({ vaccine, enroll }) => {
  return (
    <>
      {vaccine && vaccine.name ? (
        <div
          className={`${
            enroll ? "border border-gray-400 rounded-lg " : "verified"
          }  shadow relative flex flex-col rounded-sm space-y-5 mt-6 p-5 bg-gray-800`}
        >
          <div className="flex justify-center items-center rounded-sm min-h-[200px] h-[100px] overflow-clip">
            <img
              src={vaccine?.imageLink}
              alt={vaccine?.name}
              className="w-full h-full object-cover"
            />
          </div>
          {enroll ? (
            <div>
              <span className="text-sm font-bold">Hash</span>
              <h3 className="break-words text-sm">{vaccine?.hash}</h3>
            </div>
          ) : null}
          <div>
            <span className="text-sm font-bold">Name</span>
            <h3>{vaccine?.name}</h3>
          </div>
          <div>
            <span className="text-sm font-bold">Description</span>
            <p>{vaccine?.description}</p>
          </div>
          <div>
            <span className="text-sm font-bold">Registered</span>
            <p>{formatDate(vaccine?.registeredAt)}</p>
          </div>
          <div>
            <span className="text-sm font-bold">Expires</span>
            <p>{formatDate(vaccine?.expiresAt)}</p>
          </div>
        </div>
      ) : (
        <div className="rounded-sm mt-6 p-5 bg-gray-800 text-center">
          <div className="flex justify-center items-center">
            <img
              src="/img/fake.png"
              alt="fake"
              className="w-[100px] object-contain"
            />
          </div>
          <h3 className=" mt-2 text-xl text-red-600 font-bold font-paytone">
            BEWARE!
          </h3>
          <span className="font-bold font-maven">
            We could not verify the authenticity
          </span>
        </div>
      )}
    </>
  );
};
export default VaccineCard;
