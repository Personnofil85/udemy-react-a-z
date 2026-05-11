import { useState } from "react";
import ShadowList from "./ShadowList/ShadowList.jsx";
import BoxPanel from "./BoxPanel/BoxPanel.jsx";

export default function LeftContainer() {
  const [tabs, setTabs] = useState(0);

  const tabList = [
    { name: "Shadow", component: <ShadowList /> },
    { name: "BoxPanel", component: <BoxPanel /> },
  ];

  return (
    <div className="relative mt-20 w- h- border rounded-b rounded-tr border-gray-300 shadow-xl bg-gray-50 md:mt-0 w-[600px] h-[550px]">
      <div className="flex absolute -translate-y-full -left-[1px]">
        {tabList.map((tab, index) => {
          console.log("tab ", tab, "index ", index);
          console.log("tab actif avec setTabs() ", tabs);

          return (
            <button
              key={index}
              onClick={() => setTabs(index)}
              className="min-w-[125px] py-2 px-3 mr-4 font-bold border-t border-x border-gray-300 bg-slate-50 hover:bg-slate-200 text-slate-700 rounded-t focus:outline-none focus:ring-2 ring-inset focus:ring-blue-300"
            >
              {tab.name}
            </button>
          );
        })}
      </div>
      <div>{tabList[tabs].component}</div>
    </div>
  );
}
