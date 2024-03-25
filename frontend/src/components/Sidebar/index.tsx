import { FaFire } from "react-icons/fa";
import { RxAvatar } from "react-icons/rx";

export const Sidebar = () => {
  return (
    <div className="flex md:flex-col items-center justify-between bg-gray-900 text-white rounded-tr-3xl rounded-br-3xl pr-10 md:pb-10 md:pr-0">
      <div className="flex md:flex-col items-center gap-5 md:gap-2 logo p-5 bg-gray-950 rounded-tr-3xl rounded-br-3xl">
        <FaFire size={40} />
        <p className="text-sm uppercase font-thin">Billance</p>
      </div>
      <div>
        <img
          className="rounded-full outline outline-gray-500 min-w-12 min-h-12"
          src={"https://i.pravatar.cc/50"}
        />
      </div>
    </div>
  );
};
