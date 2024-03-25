import { Invoices } from "@components/Invoices";
import { Sidebar } from "@components/Sidebar";
import { useState } from "react";
import { FaFire } from "react-icons/fa";
import { RxAvatar } from "react-icons/rx";

function App() {
  return (
    <div className="flex flex-col md:flex-row h-screen bg-gray-800">
      <Sidebar />
      <Invoices />
    </div>
  );
}

export default App;
