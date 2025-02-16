import { Image, PencilRuler } from "lucide-react";
import { useState } from "react";

const SideNav = () => {
  const menuList = [
    {
      id: 1,
      name: "Icon Edit",
      icon: PencilRuler,
    },
    {
      id: 2,
      name: "Background Edit",
      icon: Image,
    },
  ];
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    //once u click on the icon make sure that the icon get selected
    <div>
      <div className="border shadow-sm h-screen ">
        {menuList.map((menu, index) => (
          <h2
            onClick={() => setActiveIndex(index)}
            className={`rounded-lg m-1 p-2 text-lg px-7 text-gray-500 cursor-pointer hover:bg-slate-900 hover:text-white flex items-center gap-2 ${
              activeIndex == index && `bg-slate-900 text-white`
            }`}
            key={index}
          >
            <menu.icon />
            {menu.name}
          </h2>
        ))}
      </div>
    </div>
  );
};

export default SideNav;
