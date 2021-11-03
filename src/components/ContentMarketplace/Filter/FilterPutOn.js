import React, { useState } from 'react';
import './Filter.css';
import { Collapse } from 'react-collapse';

const FilterPutOn = (props) => {
  const [showFilter, setShowFilter] = useState(false);
  const [activeFilter, setActiveFilter] = useState(null);

  const toggleFilter = () => {
    setShowFilter(!showFilter);
  };

  return (
    <div className="filter_wrapper">
      <button
        className={showFilter ? 'filter_button open' : 'filter_button'}
        onClick={toggleFilter}
      >
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0)">
            <path
              d="M5.7136 7.08807C5.87101 7.25937 5.95743 7.48314 5.95743 7.71462V14.5357C5.95743 14.9462 6.45281 15.1546 6.74602 14.866L8.64883 12.6854C8.90346 12.3798 9.0439 12.2286 9.0439 11.9261V7.71617C9.0439 7.48468 9.13186 7.26091 9.28773 7.0896L14.7477 1.16514C15.1566 0.72069 14.8418 0 14.2369 0H0.764441C0.159494 0 -0.156868 0.719147 0.253631 1.16514L5.7136 7.08807Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0">
              <rect width="15" height="15" fill="white" />
            </clipPath>
          </defs>
        </svg>
        &nbsp;Filters
      </button>
      <Collapse isOpened={showFilter}>
        <div
          className="filter_block"
          onClick={(event) => event.stopPropagation()}
        >
          <ul>
            <li>
              <div className="filter_title">
                <button
                  className={activeFilter === 'Creator' ? 'active' : null}
                  onClick={() => setActiveFilter('Creator')}
                >
                  Creator
                </button>
              </div>
            </li>
            <li>
              <div className="filter_title">
                <button
                  className={activeFilter === 'Owner' ? 'active' : null}
                  onClick={() => setActiveFilter('Owner')}
                >
                  Owner
                </button>
              </div>
            </li>
            <li>
              <div className="filter_title">
                <button
                  className={
                    activeFilter === 'Recently Listed' ? 'active' : null
                  }
                  onClick={() => setActiveFilter('Recently Listed')}
                >
                  Recently Listed
                </button>
              </div>
            </li>
            <li>
              <div className="filter_title">
                <button
                  className={
                    activeFilter === 'Recently Created' ? 'active' : null
                  }
                  onClick={() => setActiveFilter('Recently Created')}
                >
                  Recently Created
                </button>
              </div>
            </li>
            <li>
              <div className="filter_title">
                <button
                  className={
                    activeFilter === 'Recently Received' ? 'active' : null
                  }
                  onClick={() => setActiveFilter('Recently Received')}
                >
                  Recently Received
                </button>
              </div>
            </li>
            <li>
              <div className="filter_title">
                <button
                  className={activeFilter === 'Oldest' ? 'active' : null}
                  onClick={() => setActiveFilter('Oldest')}
                >
                  Oldest
                </button>
              </div>
            </li>
          </ul>
        </div>
      </Collapse>
    </div>
  );
};

export default FilterPutOn;
