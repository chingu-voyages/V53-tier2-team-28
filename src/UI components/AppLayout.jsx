// import FlexibleContent from "./FlexibleContent";
import Footer from "./Footer";
import Cal from "../components/MenuCalendar";

function AppLayout() {
  return (
    <>
      {/* // ! APP CONTAINER (regardless of who's logged in)... TO BE STYLED */}
      <div className="">
        {/* <FlexibleContent /> */}
        {/* // ! ADD FOOTER LAURA */}
        <Cal />
        <Footer />
      </div>
    </>
  );
}

export default AppLayout;
