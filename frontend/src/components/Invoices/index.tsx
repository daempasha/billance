import { BiPlus } from "react-icons/bi";
import { PiPlusCircleFill } from "react-icons/pi";

export const Invoices = () => {
  return (
    <div className="text-gray-100 w-full">
      <div className="max-w-5xl mx-auto mt-20">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-5xl font-bold font-rounded">Invoices</h1>
            <p className="text-gray-300 mt-2">There are n total invoices</p>
          </div>
          <div>
            <button className="flex items-center gap-2 bg-purple-500 text-gray-300 pr-5 py-2 pl-2  rounded-l-full rounded-r-full">
              <PiPlusCircleFill size={40} />
              New Invoice
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
