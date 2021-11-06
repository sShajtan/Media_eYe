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
            link="/hub/rarible"
            img="../../../img/hub_main/Rarible.png"
          />
          <HubMainBlock
            title="Dapper"
            link="/hub/dapper"
            img="../../../img/hub_main/Dapper.png"
          />
          <HubMainBlock
            title="SuperRare"
            link="/hub/superrare"
            img="../../../img/hub_main/SuperRаre.png"
          />
          <HubMainBlock
            title="Foundation"
            link="/hub/foundation"
            img="../../../img/hub_main/Foundation.png"
          />
          <HubMainBlock
            title="KnownOrigin"
            link="/hub/knownorigin"
            img="../../../img/hub_main/KnownOrigin.png"
          />
          <HubMainBlock
            title="Nifti Gаtewаy"
            link="/hub/niftigаtewаy"
            img="../../../img/hub_main/NiftiGаtewаy.png"
          />
          <HubMainBlock
            title="Portion"
            link="/hub/portion"
            img="../../../img/hub_main/Portion.png"
          />
        </div>
      </div>
    </div>
  );
};

export default HubMain;
