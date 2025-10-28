import SidebarData from "./SidebarData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Footer } from "../HomePage/footer";

export const Sidebar = () => {
    // add safe defaults to avoid runtime errors if a section is missing
    const mainSection = SidebarData.find(section => section.id === 'main') || { items: [] };
    const topicsSection = SidebarData.find(section => section.id === 'topics') || { items: [] };
    const toolsSection = SidebarData.find(section => section.id === 'tools') || { items: [] };
    const legalSection = SidebarData.find(section => section.id === 'legal') || { items: [] };
  const [isHidden, setIsHidden] = useState(false);

  return (
    // changed: use top and bottom insets so sidebar stops above footer.
    // bottom uses a CSS variable with fallback (64px). Adjust --footer-height in your global CSS to match your footer.
    <div
      className="sidebar fixed left-0 top-12 p-0 m-0 bg-2f4050 border-r-2 border-gray-700 overflow-y-auto w-64"
      style={{ bottom: "var(--footer-height, 64px)" }}
    > <div>
      <ul className="SidebarList p-0 m-0 list-none h-auto w-full ">
        {mainSection.items.map((val, index) => (
          <li
            key={index}
            className="hover:bg-gray-200 flex flex-direction-row m-0 p-0 w-full h-12 list-none justify-center items-center hover:cursor-pointer"
            style={{ fontFamily: "serif" }}
            onClick={() => {
              if (val.path) window.location.href = val.path;
            }}
          >
            <div className="icon w-[30%] grid place-items-center">
              {val.icon}
            </div>
            <div className="title w-[70%]">{val.title}</div>
          </li>
        ))}
      </ul></div>
      <div className="topics m-2 p-3 border-t-2 border-gray-700">
        <label
          className="block mb-2 font-semibold"
          onClick={() => setIsHidden((prev) => !prev)}
        >
          Topics{" "}
          {isHidden ? (
            <span>
              <FontAwesomeIcon icon={faAngleDown} />
            </span>
          ) : (
            <span>
              <FontAwesomeIcon icon={faAngleUp} />
            </span>
          )}
        </label>
        <ul
          className={`SidebarTopicsList p-0 m-0 list-none w-full ${isHidden ? "hidden" : ""}`}
        >
          {topicsSection.items.map((topic, idx) => (
            <li
              key={topic.path ?? idx}
              className="hover:bg-gray-200 flex flex-direction-row m-0 p-0 w-full h-10 list-none hover:cursor-pointer justify-center items-center"
              style={{ fontFamily: "serif" }}
              onClick={() => {
                if (topic.path) window.location.href = topic.path;
              }}
            >
              <div className="title w-full">{topic.title}</div>
            </li>
          ))}
        </ul>
      </div>
      {/* add top border to create divider like Topics */}
      <div className="m-1 p-0 border-t-2 border-gray-700">
        <ul className="SidebarList p-0 m-0 list-none h-auto w-full ">
          {toolsSection.items.map((val, index) => (
            <li
              key={index}
              className="hover:bg-gray-200 flex flex-direction-row m-0 p-0 w-full h-12 list-none justify-center items-center hover:cursor-pointer"
              style={{ fontFamily: "serif" }}
              onClick={() => {
                if (val.path) window.location.href = val.path;
              }}
            >
              <div className="icon w-[30%] grid place-items-center">
                {val.icon}
              </div>
              <div className="title w-[70%]">{val.title}</div>
            </li>
          ))}
        </ul>
      </div>
      {/* add top border to create divider */}
      <div className="m-1 p-0 border-t-2 border-gray-700">
        <ul className="SidebarList p-0 m-0 list-none h-auto w-full ">
          {legalSection.items.map((val, index) => (
            <li
              key={index}
              className="hover:bg-gray-200 flex flex-direction-row m-0 p-0 w-full h-12 list-none justify-center items-center hover:cursor-pointer"
              style={{ fontFamily: "serif" }}
              onClick={() => {
                if (val.path) window.location.href = val.path;
              }}
            >
              <div className="icon w-[30%] grid place-items-center">
                {val.icon}
              </div>
              <div className="title w-[70%]">{val.title}</div>
            </li>
          ))}
        </ul>
      </div>
      <Footer/>
    </div>
  );
};
