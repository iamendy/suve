import VaccineContext from "../../context/VaccineContext";
import { useContext } from "react";
import formatDate from "../../helpers/formatDate";

const VaccineCard = () => {
  const { vaccine } = useContext(VaccineContext);
  return (
    <div className="verified shadow relative flex flex-col rounded-sm space-y-5 mt-6 p-5 bg-gray-800">
      <div className="flex justify-center items-center rounded-sm min-h-[200px] h-[100px] overflow-clip">
        <img
          src={vaccine?.imageLink}
          alt={vaccine?.name}
          className="w-full h-full object-cover"
        />
      </div>
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
  );
};
export default VaccineCard;
