import React from "react";

// Iconos
import CarbonTaskAdd from "./../../assets/CarbonTaskAdd";

const Inscribir = ({titulo}) => {
  return (
    <div className="fixed bottom-0 w-full py-4 sm:py-8 flex justify-center">
      <button className="btn btn-wide w-1/2 justify-center place-items-center">
        <CarbonTaskAdd className="w-5 h-5 mx-2" />
        <span className="hidden sm:block">{titulo}</span>
      </button>
    </div>
  );
};

export default Inscribir;
