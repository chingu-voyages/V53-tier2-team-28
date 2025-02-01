import { Outlet } from "react-router-dom";
import Header from "../UI components/Header";
import Footer from "../UI components/Footer";

function MainLayout() {
  return (
    <>
      <Header />
      <main className="mt-[headerHeight]">
        {" "}
        {/* Adjust margin if needed */}
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default MainLayout;
