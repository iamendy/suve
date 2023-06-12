import { useRef, useState } from "react";
import { useStorageUpload } from "@thirdweb-dev/react";
import Loader from "../icons/Loader";
const ImgUploader = ({ imgLink, setImgLink, isUploaded, setIsUploaded }) => {
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const imgFile = useRef<HTMLInputElement | null>(null);

  const { mutateAsync: upload } = useStorageUpload();

  const handleUpload = async (e) => {
    const file = e.target?.files[0];

    //upload files
    setIsUploading(true);
    const [url] = await upload({
      data: [file],
      options: { uploadWithGatewayUrl: true, uploadWithoutDirectory: true },
    });
    setIsUploading(false);
    setIsUploaded(true);
    setImgLink(url);
  };

  return (
    <div>
      <input
        type="file"
        ref={imgFile}
        hidden
        onChange={(e) => handleUpload(e)}
      />
      <span className="text-sm lg:text-base text-gray-100">Image</span>
      <div
        className="h-[100px] overflow-clip border border-slate-700 flex items-center justify-center rounded-sm cursor-pointer"
        onClick={() => imgFile.current.click()}
      >
        {isUploading ? (
          <Loader />
        ) : isUploaded ? (
          <img
            src={imgLink}
            alt="Vaccine Image"
            className="w-full object-cover"
          />
        ) : (
          <span>click to upload</span>
        )}
      </div>
    </div>
  );
};
export default ImgUploader;
