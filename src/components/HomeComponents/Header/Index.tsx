import React, { useState } from "react";
import Container from "../../CommenComponents/Container";
import { assets } from "../../../helpers/AssetsProvider";
import { icons } from "../../../helpers/IconsProvider";

const Header = () => {
  const [headIcons] = useState([
    icons.arrowRight,
    icons.twitter,
    icons.facebook,
    icons.pinterest,
    icons.reddit,
    icons.youtube,
    icons.instagram,
  ]);
  return (
    <div className=" bg-gray-900">
      <Container>
        <div className=" grid grid-cols-3 py-4! items-center">
          <div>
            <img src={assets.Logo} alt={assets.Logo} />
          </div>
          <div className=" items-center grid auto-cols-max gap-x-6 grid-flow-col justify-center">
            <div className=" grid auto-cols-max grid-flow-col items-center gap-x-2">
              <span className="body-small-500 text-gray-100">Up to</span>
              <h2 className=" display4 text-Warning-500">59%</h2>
              <p className="body-xl-600 text-gray-00">OFF</p>
            </div>
          </div>
          <div className="bg-green-300 flex items-center justify-end">
            <button>
              <div className="grid grid-flow-col auto-cols-max items-center gap-x-1">
                <span className="heading2 text-gray-900">SHOP NOW </span>
                <span>{icons.arrowRight}</span>
              </div>
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
