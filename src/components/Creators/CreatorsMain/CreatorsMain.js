import React from 'react';
import CreatorsBlock from '../CreatorsBlock/CreatorsBlock';
import './CreatorsMain.css';

const CreatorsMain = (props) => {
  const { title, showLoadMore } = props;

  return (
    <div className="creators_main">
      <div className="container">
        {title ? <h4>{title}</h4> : null}
        <div className="creators_main_main">
          <CreatorsBlock link={'/creator/on-sale'} />
          <CreatorsBlock link={'/creator/on-sale'} />
          <CreatorsBlock link={'/creator/on-sale'} />
          <CreatorsBlock link={'/creator/on-sale'} />
          <CreatorsBlock link={'/creator/on-sale'} />
          <CreatorsBlock link={'/creator/on-sale'} />
          <CreatorsBlock link={'/creator/on-sale'} />
          <CreatorsBlock link={'/creator/on-sale'} />
          <CreatorsBlock link={'/creator/on-sale'} />
          <CreatorsBlock link={'/creator/on-sale'} />
        </div>
        {showLoadMore ? <button className="load_more">Load more</button> : null}
      </div>
    </div>
  );
};

export default CreatorsMain;
