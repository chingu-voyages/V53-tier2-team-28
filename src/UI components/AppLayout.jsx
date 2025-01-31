import FlexibleContent from "./FlexibleContent";
import Footer from "./Footer";

function AppLayout() {
  return (
    <>
      {/* // ! APP CONTAINER (regardless of who's logged in)... TO BE STYLED */}
      <div className="">
        <FlexibleContent />
        {/* // ! ADD FOOTER LAURA */}
        <Footer />
      </div>
    </>
  );
}

export default AppLayout;
