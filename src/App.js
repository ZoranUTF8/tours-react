import "./App.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import "react-toastify/dist/ReactToastify.css";

import { Footer, SingleTourCard } from "./Components";
import { Routes, Route } from "react-router-dom";
import {
  Error,
  Landing,
  ProtectedRoute,
  AboutUsPage,
  ContactUs,
} from "./Pages";
import { Register, NavbarComponent } from "./Components";
import { ToastContainer } from "react-toastify";
import {
  AddTour,
  AllTours,
  GlobalStats,
  Profile,
  SharedLayout,
} from "./Pages/Dashboard";

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <Routes>
        {/* PUBLIC */}
        <Route path="/landing" element={<Landing />} />
        <Route path="/register" element={<Register />} />
        <Route path="/aboutus" element={<AboutUsPage />} />
        <Route path="contactus" element={<ContactUs />} />

        <Route path="tour/:slug" element={<SingleTourCard />} />
        {/* PROTECTED  */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <SharedLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<GlobalStats />} />
          <Route path="alltours" element={<AllTours />} />
          <Route path="addtour" element={<AddTour />} />
          <Route path="me" element={<Profile />} />
        </Route>

        {/* Not found route */}
        <Route path="*" element={<Error />} />
      </Routes>

      {/* Toast messages */}
      <ToastContainer />
      {/* FOOTER */}

      {/* <Footer /> */}
    </div>
  );
}

export default App;
