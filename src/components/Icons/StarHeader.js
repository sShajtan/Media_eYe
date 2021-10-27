import React from 'react';

export default function StarHeader() {
  return (
    <svg
      width="41"
      height="41"
      viewBox="0 0 41 41"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_b_601:1197)">
        <path
          className="bg_star_svg"
          d="M3 14.1248C3 12.7397 3.57451 11.4167 4.58657 10.4712L11.1422 4.34644C12.0682 3.48125 13.2883 3 14.5556 3H33C35.7614 3 38 5.23858 38 8V27.4193C38 28.7235 37.4904 29.9761 36.5799 30.9099L31.1384 36.4906C30.1974 37.4557 28.9065 38 27.5585 38H8C5.23857 38 3 35.7614 3 33V14.1248Z"
          fill="#fff"
        />
      </g>
      <g filter="url(#filter1_b_601:1197)">
        <path
          d="M40.5 5V28.9542C40.5 30.128 40.0414 31.2553 39.2219 32.0957L32.3518 39.1415C31.5049 40.0102 30.3431 40.5 29.1299 40.5H5C2.51472 40.5 0.5 38.4853 0.5 36V12.6596C0.5 11.4131 1.01706 10.2224 1.92791 9.37144L10.1264 1.7118C10.9598 0.933128 12.0579 0.5 13.1985 0.5H36C38.4853 0.5 40.5 2.51472 40.5 5Z"
          stroke="#616161"
        />
      </g>
      <path
        className="star_path"
        d="M30.9274 17.7323C30.7532 17.1979 30.2897 16.8083 29.7318 16.7275L23.925 15.8865L21.328 10.6415C21.0786 10.1374 20.5638 9.81836 19.9999 9.81836C19.4362 9.81836 18.9213 10.1374 18.6717 10.6414L16.0752 15.8863L10.2682 16.7273C9.71019 16.8081 9.24669 17.1977 9.0725 17.7321C8.89832 18.2666 9.04367 18.8533 9.44733 19.2455L13.6494 23.3281L12.6572 29.0923C12.5619 29.6461 12.7903 30.206 13.2464 30.5363C13.5044 30.7232 13.8101 30.8183 14.1172 30.8183C14.3529 30.8183 14.5895 30.7623 14.8062 30.6487L20 27.9275L25.1942 30.6488C25.4109 30.7624 25.6475 30.8184 25.8833 30.8184H25.8882C26.7049 30.8168 27.3665 30.1564 27.3665 29.342C27.3665 29.2286 27.3537 29.1182 27.3294 29.0121L26.3512 23.3281L30.5527 19.2457C30.9564 18.8535 31.1018 18.2668 30.9274 17.7323ZM23.7259 21.7555C23.3769 22.0947 23.2176 22.5833 23.2999 23.0623L23.9162 26.6435L20.6892 24.9528C20.4734 24.8398 20.2367 24.7832 20 24.7832C19.7632 24.7832 19.5267 24.8397 19.3108 24.9528L16.0844 26.6433L16.7008 23.0624C16.7833 22.5833 16.6239 22.0947 16.2747 21.7555L13.6643 19.2193L17.2719 18.6968C17.7543 18.6269 18.1713 18.3248 18.3871 17.889L20.0001 14.6308L21.6134 17.8891C21.8292 18.3248 22.2463 18.6269 22.7286 18.6968L26.3361 19.2193L23.7259 21.7555Z"
        fill="#060028"
      />
      <defs>
        <filter
          id="filter0_b_601:1197"
          x="-19"
          y="-19"
          width="79"
          height="79"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImage" stdDeviation="11" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_601:1197"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_601:1197"
            result="shape"
          />
        </filter>
        <filter
          id="filter1_b_601:1197"
          x="-22"
          y="-22"
          width="85"
          height="85"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImage" stdDeviation="11" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_601:1197"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_601:1197"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}
