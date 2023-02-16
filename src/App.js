import "mapbox-gl/dist/mapbox-gl.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "react-toastify/dist/ReactToastify.css";

import "./App.css";

import {
  Footer,
  SingleTourCard,
  Register,
  NavbarComponent,
} from "./Components";
import { Routes, Route } from "react-router-dom";
import {
  Error,
  Landing,
  ProtectedRoute,
  AboutUsPage,
  ContactUs,
  Settings,
  MyBookings,
  MyReviews,
  GlobalStats,
  AllTours,
  AddTour,
  SharedLayout,
  SharedDashboard,
} from "./Pages";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App">
      <NavbarComponent />

      <Routes>
        {/* PUBLIC */}
        <Route path="/" element={<Landing />} />
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
          <Route path="alltours" element={<AllTours />} />
          <Route path="addtour" element={<AddTour />} />
          {/* Personal dashboard */}
          <Route path="me" element={<SharedDashboard />}>
            <Route index element={<GlobalStats />} />
            <Route path="settings" element={<Settings />} />
            <Route path="mybookings" element={<MyBookings />} />
            <Route path="myreviews" element={<MyReviews />} />
          </Route>
          {/* End Personal dashboard */}
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
