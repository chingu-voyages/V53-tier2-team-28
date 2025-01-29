function FlexibleNav({ children }) {
  // ! get currentAccount.typeOfUser from URL PARAMS!!!!

  // ! currentAccount.typeOfUser === 'manager' ? MANAGER TABS as children : EMPLOYEE TABS as children

  // ! NOTES ABOUT STYLING: - navigation to be on left side;

  return <nav>{children}</nav>;
}

export default FlexibleNav;
