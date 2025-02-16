import { Outlet } from "react-router-dom";
import Header from "../UI components/Header";
import Footer from "../UI components/Footer";

function MainLayout() {
  return (
    <div className="h-screen w-screen flex flex-col justify-between">
      <Header />
      <main className="grow mt-10">
        {/* Adjust margin if needed */}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default MainLayout;
