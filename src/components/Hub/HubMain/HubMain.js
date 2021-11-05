import React from 'react';
import HubMainBlock from '../HubMainBlock/HubMainBlock';
import './HubMain.css';

const HubMain = (props) => {
  return (
    <div className="hub_main_page">
      <div className="container">
        <div className="hub_main_page_header">
          <img src="../../img/hub_header.png" alt="hub_title" />
        </div>
        <div className="hub_main_page_content">
          <HubMainBlock
            link="/hub/treasureland"
            title="Treasureland"
            img="../../../img/hub_main/treasureland.png"
          />
          {/* <HubMainBlock
            title="Open Sea"
            img="../../../img/hub_main/OpenSea.png"
          /> */}
          <HubMainBlock
            title="Rarible"
            img="../../../img/hub_main/Rarible.png"
          />
          <HubMainBlock title="Dapper" img="../../../img/hub_main/Dapper.png" />
          <HubMainBlock
            title="SuperRare"
            img="../../../img/hub_main/SuperRаre.png"
          />
          <HubMainBlock
            title="Foundation"
            img="../../../img/hub_main/Foundation.png"
          />
          <HubMainBlock
            title="KnownOrigin"
            img="../../../img/hub_main/KnownOrigin.png"
          />
          <HubMainBlock
            title="Nifti Gаtewаy"
            img="../../../img/hub_main/NiftiGаtewаy.png"
          />
          <HubMainBlock
            title="Portion"
            img="../../../img/hub_main/Portion.png"
          />
        </div>
      </div>
    </div>
  );
};

export default HubMain;
