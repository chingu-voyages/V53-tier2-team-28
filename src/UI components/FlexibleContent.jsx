import { Outlet } from "react-router-dom";

function FlexibleContent() {
  // ! get currentAccount.typeOfUser from URL PARAMS!!!!

  return (
    <>
      {/* // ! ADD NAVIGATION ... employee: 1) allergies/preferences; 2) favorite meals; 3)... . manager: 1) view/edit all dishes; 2) next 7 days; 3) manage employee list; 4) ... */}
      {/* <FlexibleNav>
      // ! ADD DIFFERENT NAV TABS DEPENDING ON typeOfUser
        </FlexibleNav> */}
      {/* // ?  FlexibleNav will take children element and be different for empl. and manag.*/}

      <Outlet />
    </>
  );
}

export default FlexibleContent;
