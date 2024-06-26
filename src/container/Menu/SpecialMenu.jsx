import React from 'react';

import { SubHeading, MenuItem } from '../../components';
import { data, images } from '../../constants';
import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className="app__specialMenu flex__center section__padding" id="menu">
    <div className="app__specialMenu-title">
      <SubHeading title="Menu that fits your palatte" />
      <h1 className="headtext__cormorant">Jholpattey&apos;s Menu</h1>
    </div>

    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_wine  flex__center">
        <p className="app__specialMenu-menu_heading">Jholpattey&apos;s Special</p>
        <div className="app__specialMenu_menu_items">
          {data.jholpatteys.map((jholpattey, index) => (
            <MenuItem key={jholpattey.title + index} title={jholpattey.title} price={jholpattey.price} tags={jholpattey.tags} />
          ))}
        </div>
      </div>

      <div className="app__specialMenu-menu_img">
        <img src={images.menu} alt="menu__img" />
      </div>

      <div className="app__specialMenu-menu_cocktails  flex__center">
        <p className="app__specialMenu-menu_heading">Others</p>
        <div className="app__specialMenu_menu_items">
          {data.normals.map((normal, index) => (
            <MenuItem key={normal.title + index} title={normal.title} price={normal.price} tags={normal.tags} />
          ))}
        </div>
      </div>
    </div>

    <div style={{ marginTop: 15 }}>
      <button type="button" className="custom__button">View More</button>
    </div>
  </div>
);

export default SpecialMenu;