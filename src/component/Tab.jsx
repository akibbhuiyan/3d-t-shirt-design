import React from "react";
import { useSnapshot } from "valtio";
import state from "../store";

const Tab = ({ tab, handleClick, isFilterTab, isActiveTab }) => {
  const snap = useSnapshot(state);
  const activeStyles =
    isFilterTab && isActiveTab
      ? { backgroundColor: snap.color, opacity: 0.5 }
      : { backgroundColor: "transparent", opacity: 1 };
  return (
    <div
      className={`tab-btn ${
        isFilterTab ? "rounded-full glassmorhin" : "rounded-4"
      } `}
      key={tab.name}
      onClick={handleClick}
      style={activeStyles}
    >
      <img
        src={tab.icon}
        alt={tab.name}
        className={`${
          isFilterTab ? "w-2/3 h-2/3" : "w-11/12 h-11/12 object-contain"
        }`}
      />
    </div>
  );
};

export default Tab;