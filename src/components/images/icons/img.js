function Logo() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="16" fill="#3751FF" />
      <path
        d="M11 10C11 9.44772 11.4477 9 12 9H15.9905C18.2127 9 19.9333 9.60955 21.1524 10.8287C22.3841 12.0478 23 13.765 23 15.9803C23 18.2088 22.3841 19.9391 21.1524 21.1713C19.9333 22.3904 18.2127 23 15.9905 23H12C11.4477 23 11 22.5523 11 22V10Z"
        fill="url(#paint0_linear_303_2518)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_303_2518"
          x1="11"
          y1="9"
          x2="23"
          y2="23"
          gradientUnits="userSpaceOnUse">
          <stop stop-color="white" stop-opacity="0.7" />
          <stop offset="1" stop-color="white" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function Chart() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path
        opacity="0.4"
        d="M15.5233 8.94116H8.54418L13.1921 13.5891C13.3698 13.7667 13.6621 13.7812 13.8448 13.6091C14.983 12.5367 15.7659 11.0912 15.9957 9.46616C16.0351 9.18793 15.8042 8.94116 15.5233 8.94116V8.94116ZM15.0577 7.03528C14.8154 3.52176 12.0077 0.714119 8.49418 0.471767C8.22595 0.453237 8.00006 0.679413 8.00006 0.948236V7.5294H14.5815C14.8504 7.5294 15.0762 7.30352 15.0577 7.03528ZM6.5883 8.94116V1.96206C6.5883 1.68118 6.34153 1.45029 6.06359 1.48971C2.55859 1.985 -0.120524 5.04705 0.00418193 8.71675C0.132417 12.4856 3.37742 15.5761 7.148 15.5288C8.63036 15.5103 10.0001 15.0326 11.1262 14.2338C11.3586 14.0691 11.3739 13.727 11.1724 13.5256L6.5883 8.94116Z"
        fill="#9FA2B4"
      />
    </svg>
  );
}

const Tickets = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path
        d="M3.55556 5.33341H12.4444V10.6667H3.55556V5.33341ZM14.6667 8.00008C14.6667 8.73647 15.2636 9.33341 16 9.33341V12.0001C16 12.7365 15.4031 13.3334 14.6667 13.3334H1.33333C0.596944 13.3334 0 12.7365 0 12.0001V9.33341C0.736389 9.33341 1.33333 8.73647 1.33333 8.00008C1.33333 7.26369 0.736389 6.66675 0 6.66675V4.00008C0 3.26369 0.596944 2.66675 1.33333 2.66675H14.6667C15.4031 2.66675 16 3.26369 16 4.00008V6.66675C15.2636 6.66675 14.6667 7.26369 14.6667 8.00008ZM13.3333 5.11119C13.3333 4.743 13.0349 4.44453 12.6667 4.44453H3.33333C2.96514 4.44453 2.66667 4.743 2.66667 5.11119V10.889C2.66667 11.2572 2.96514 11.5556 3.33333 11.5556H12.6667C13.0349 11.5556 13.3333 11.2572 13.3333 10.889V5.11119Z"
        fill="#DDE2FF"
      />
    </svg>
  );
};

const Ideas = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
      <g clipPath="url(#clip0_303_2494)">
        <path
          opacity="0.4"
          d="M5.50187 14.1985C5.50219 14.395 5.56031 14.5875 5.66937 14.7513L6.20344 15.5541C6.29467 15.6913 6.41841 15.8039 6.56366 15.8817C6.7089 15.9596 6.87114 16.0003 7.03594 16.0003H8.96438C9.12917 16.0003 9.29141 15.9596 9.43665 15.8817C9.5819 15.8039 9.70564 15.6913 9.79688 15.5541L10.3309 14.7513C10.44 14.5875 10.4982 14.3952 10.4984 14.1985L10.4997 13H5.50031L5.50187 14.1985ZM2.5 5.50003C2.5 6.88659 3.01406 8.15159 3.86125 9.11815C4.3775 9.70721 5.185 10.9378 5.49281 11.976C5.49406 11.9841 5.495 11.9922 5.49625 12.0003H10.5037C10.505 11.9922 10.5059 11.9844 10.5072 11.976C10.815 10.9378 11.6225 9.70721 12.1388 9.11815C12.9859 8.15159 13.5 6.88659 13.5 5.50003C13.5 2.45659 11.0284 -0.00934836 7.98281 2.66431e-05C4.795 0.00971414 2.5 2.59284 2.5 5.50003ZM8 3.00003C6.62156 3.00003 5.5 4.12159 5.5 5.50003C5.5 5.77628 5.27625 6.00003 5 6.00003C4.72375 6.00003 4.5 5.77628 4.5 5.50003C4.5 3.57003 6.07 2.00003 8 2.00003C8.27625 2.00003 8.5 2.22378 8.5 2.50003C8.5 2.77628 8.27625 3.00003 8 3.00003Z"
          fill="#9FA2B4"
        />
      </g>
      <defs>
        <clipPath id="clip0_303_2494">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

const Contacts = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path
        opacity="0.4"
        d="M2.4 7.1999C3.2825 7.1999 4 6.4824 4 5.5999C4 4.7174 3.2825 3.9999 2.4 3.9999C1.5175 3.9999 0.8 4.7174 0.8 5.5999C0.8 6.4824 1.5175 7.1999 2.4 7.1999ZM13.6 7.1999C14.4825 7.1999 15.2 6.4824 15.2 5.5999C15.2 4.7174 14.4825 3.9999 13.6 3.9999C12.7175 3.9999 12 4.7174 12 5.5999C12 6.4824 12.7175 7.1999 13.6 7.1999ZM14.4 7.9999H12.8C12.36 7.9999 11.9625 8.1774 11.6725 8.4649C12.68 9.0174 13.395 10.0149 13.55 11.1999H15.2C15.6425 11.1999 16 10.8424 16 10.3999V9.5999C16 8.7174 15.2825 7.9999 14.4 7.9999ZM8 7.9999C9.5475 7.9999 10.8 6.7474 10.8 5.1999C10.8 3.6524 9.5475 2.3999 8 2.3999C6.4525 2.3999 5.2 3.6524 5.2 5.1999C5.2 6.7474 6.4525 7.9999 8 7.9999ZM9.92 8.7999H9.7125C9.1925 9.0499 8.615 9.1999 8 9.1999C7.385 9.1999 6.81 9.0499 6.2875 8.7999H6.08C4.49 8.7999 3.2 10.0899 3.2 11.6799V12.3999C3.2 13.0624 3.7375 13.5999 4.4 13.5999H11.6C12.2625 13.5999 12.8 13.0624 12.8 12.3999V11.6799C12.8 10.0899 11.51 8.7999 9.92 8.7999ZM4.3275 8.4649C4.0375 8.1774 3.64 7.9999 3.2 7.9999H1.6C0.7175 7.9999 0 8.7174 0 9.5999V10.3999C0 10.8424 0.3575 11.1999 0.8 11.1999H2.4475C2.605 10.0149 3.32 9.0174 4.3275 8.4649Z"
        fill="#9FA2B4"
      />
    </svg>
  );
};
const Agents = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path
        opacity="0.4"
        d="M8 8C10.2094 8 12 6.20937 12 4C12 1.79063 10.2094 0 8 0C5.79063 0 4 1.79063 4 4C4 6.20937 5.79063 8 8 8ZM10.9937 9.01875L9.5 15L8.5 10.75L9.5 9H6.5L7.5 10.75L6.5 15L5.00625 9.01875C2.77812 9.125 1 10.9469 1 13.2V14.5C1 15.3281 1.67188 16 2.5 16H13.5C14.3281 16 15 15.3281 15 14.5V13.2C15 10.9469 13.2219 9.125 10.9937 9.01875Z"
        fill="#9FA2B4"
      />
    </svg>
  );
};
const Articles = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path
        opacity="0.4"
        d="M15 11.25V0.75C15 0.334375 14.6656 0 14.25 0H4C2.34375 0 1 1.34375 1 3V13C1 14.6562 2.34375 16 4 16H14.25C14.6656 16 15 15.6656 15 15.25V14.75C15 14.5156 14.8906 14.3031 14.7219 14.1656C14.5906 13.6844 14.5906 12.3125 14.7219 11.8313C14.8906 11.6969 15 11.4844 15 11.25ZM5 4.1875C5 4.08437 5.08437 4 5.1875 4H11.8125C11.9156 4 12 4.08437 12 4.1875V4.8125C12 4.91563 11.9156 5 11.8125 5H5.1875C5.08437 5 5 4.91563 5 4.8125V4.1875ZM5 6.1875C5 6.08437 5.08437 6 5.1875 6H11.8125C11.9156 6 12 6.08437 12 6.1875V6.8125C12 6.91563 11.9156 7 11.8125 7H5.1875C5.08437 7 5 6.91563 5 6.8125V6.1875ZM12.9187 14H4C3.44688 14 3 13.5531 3 13C3 12.45 3.45 12 4 12H12.9187C12.8594 12.5344 12.8594 13.4656 12.9187 14Z"
        fill="#9FA2B4"
      />
    </svg>
  );
};
const Settings = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
      <g clipPath="url(#clip0_303_2510)">
        <path
          opacity="0.4"
          d="M15.2307 9.86546L13.8994 9.09671C14.0338 8.37171 14.0338 7.62796 13.8994 6.90296L15.2307 6.13421C15.3838 6.04671 15.4525 5.86546 15.4025 5.69671C15.0557 4.58421 14.465 3.57796 13.6932 2.74046C13.5744 2.61233 13.3807 2.58108 13.2307 2.66858L11.8994 3.43733C11.34 2.95608 10.6963 2.58421 9.9994 2.34046V0.806084C9.9994 0.631084 9.87753 0.477959 9.70566 0.440459C8.55878 0.184209 7.38378 0.196709 6.29316 0.440459C6.12128 0.477959 5.99941 0.631084 5.99941 0.806084V2.34358C5.30566 2.59046 4.66191 2.96233 4.09941 3.44046L2.77128 2.67171C2.61816 2.58421 2.42753 2.61233 2.30878 2.74358C1.53691 3.57796 0.946285 4.58421 0.59941 5.69983C0.546285 5.86858 0.61816 6.04983 0.771285 6.13733L2.10253 6.90608C1.96816 7.63108 1.96816 8.37483 2.10253 9.09983L0.771285 9.86858C0.61816 9.95608 0.54941 10.1373 0.59941 10.3061C0.946285 11.4186 1.53691 12.4248 2.30878 13.2623C2.42753 13.3905 2.62128 13.4217 2.77128 13.3342L4.10253 12.5655C4.66191 13.0467 5.30566 13.4186 6.00253 13.6623V15.1998C6.00253 15.3748 6.12441 15.528 6.29628 15.5655C7.44316 15.8217 8.61816 15.8092 9.70878 15.5655C9.88066 15.528 10.0025 15.3748 10.0025 15.1998V13.6623C10.6963 13.4155 11.34 13.0436 11.9025 12.5655L13.2338 13.3342C13.3869 13.4217 13.5775 13.3936 13.6963 13.2623C14.4682 12.428 15.0588 11.4217 15.4057 10.3061C15.4525 10.1342 15.3838 9.95296 15.2307 9.86546ZM7.99941 10.4998C6.62128 10.4998 5.49941 9.37796 5.49941 7.99983C5.49941 6.62171 6.62128 5.49983 7.99941 5.49983C9.37753 5.49983 10.4994 6.62171 10.4994 7.99983C10.4994 9.37796 9.37753 10.4998 7.99941 10.4998Z"
          fill="#9FA2B4"
        />
      </g>
      <defs>
        <clipPath id="clip0_303_2510">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
const Subscription = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
      <g clipPath="url(#clip0_303_2514)">
        <path
          opacity="0.4"
          d="M5.03506 11.3322C4.7635 11.0606 4.90506 11.1372 4.25006 10.9619C3.95287 10.8822 3.69162 10.7291 3.45537 10.5456L2.03756 14.0219C1.90037 14.3584 2.15662 14.7241 2.51975 14.7103L4.16631 14.6475L5.29881 15.8438C5.54881 16.1075 5.98756 16.0253 6.12475 15.6888L7.75131 11.7006C7.41256 11.8894 7.03662 12 6.64787 12C6.0385 12 5.466 11.7628 5.03506 11.3322ZM13.9626 14.0219L12.5447 10.5456C12.3085 10.7294 12.0472 10.8822 11.7501 10.9619C11.0916 11.1381 11.236 11.0613 10.9651 11.3322C10.5341 11.7628 9.96131 12 9.35194 12C8.96319 12 8.58725 11.8891 8.2485 11.7006L9.87506 15.6888C10.0122 16.0253 10.4513 16.1075 10.701 15.8438L11.8338 14.6475L13.4804 14.7103C13.8435 14.7241 14.0997 14.3581 13.9626 14.0219ZM10.2188 10.625C10.6963 10.1391 10.751 10.1809 11.431 9.99563C11.8651 9.87719 12.2044 9.53188 12.3207 9.09001C12.5544 8.20251 12.4938 8.3097 13.1316 7.66032C13.4494 7.33688 13.5735 6.86532 13.4572 6.42345C13.2238 5.53657 13.2235 5.66032 13.4572 4.77251C13.5735 4.33063 13.4494 3.85907 13.1316 3.53563C12.4938 2.88626 12.5544 2.99313 12.3207 2.10595C12.2044 1.66407 11.8651 1.31876 11.431 1.20032C10.5597 0.962508 10.6647 1.0247 10.0263 0.375008C9.7085 0.0515703 9.24506 -0.0749922 8.811 0.0434453C7.94006 0.280945 8.06162 0.281258 7.18912 0.0434453C6.75506 -0.0749922 6.29162 0.0512578 5.97381 0.375008C5.336 1.02438 5.441 0.962508 4.56944 1.20032C4.13537 1.31876 3.796 1.66407 3.67975 2.10595C3.44631 2.99313 3.50662 2.88626 2.86881 3.53563C2.551 3.85907 2.42662 4.33063 2.54319 4.77251C2.77662 5.65876 2.77694 5.53501 2.54319 6.42313C2.42694 6.86501 2.551 7.33657 2.86881 7.66032C3.50662 8.3097 3.446 8.20251 3.67975 9.09001C3.796 9.53188 4.13537 9.87719 4.56944 9.99563C5.26881 10.1863 5.321 10.1563 5.78131 10.625C6.19475 11.0459 6.83881 11.1213 7.33569 10.8069C7.53438 10.6807 7.76487 10.6138 8.00022 10.6138C8.23557 10.6138 8.46606 10.6807 8.66475 10.8069C9.16131 11.1213 9.80537 11.0459 10.2188 10.625ZM5.05194 5.49876C5.05194 3.84157 6.37194 2.49813 8.00006 2.49813C9.62819 2.49813 10.9482 3.84157 10.9482 5.49876C10.9482 7.15595 9.62819 8.49938 8.00006 8.49938C6.37194 8.49938 5.05194 7.15595 5.05194 5.49876Z"
          fill="#9FA2B4"
        />
      </g>
      <defs>
        <clipPath id="clip0_303_2514">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export { Logo, Chart, Tickets, Ideas, Contacts, Agents, Articles, Settings, Subscription };
