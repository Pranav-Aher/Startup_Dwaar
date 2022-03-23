import React from "react";
import NavigationBar from "./components/Navigation/NavigationBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

import PreSignup from "./components/Screens/SignupPages/Signup";
import SignupMain from "./components/Screens/SignupPages/SignupMain";
import Login from "./components/Screens/LoginPages/Login";

import Home from "./components/Home/Home.js";

import Footer from "./components/Footer/Footer";
/////////////////////////
import FounderDashboard from "./components/Screens/Founder/FounderDashboard/FounderDashboard";
import InvestorDashboard from "./components/Screens/Investor/InvestorDashboard/InvestorDashboard";
import MentorDashboard from "./components/Screens/Mentor/MentorDashboard/MentorDashboard";
import IncubatorDashboard from "./components/Screens/Incubator/IncubatorDashboard/IncubatorDashboard";
import JobSeekerDashboard from "./components/Screens/JobSeeker/JobSeekerDashboard/JobSeekerDashboard";
//////////////////////////////////////////////
import InvestorForm from "./components/Screens/Investor/InvestorForm/InvestorForm";
import FounderForm from "./components/Screens/Founder/FounderForm/FounderForm";
import MentorForm from "./components/Screens/Mentor/MentorForm/MentorForm";
import IncubatorForm from "./components/Screens/Incubator/IncubatorForm/IncubatorForm";
import JobSeekerForm from "./components/Screens/JobSeeker/JobSeekerForm/JobSeekerForm";
//////////////////////////////////////////////////////////////
import FounderDetails from "./components/Screens/Founder/FounderDetails/FounderDetails";
import InvestorDetails from "./components/Screens/Investor/InvestorDetails/InvestorDetails";
import IncubatorDetails from "./components/Screens/Incubator/IncubatorDetails/IncubatorDetails";
import MentorDetails from "./components/Screens/Mentor/MentorDetails/MentorDetails";
import JobSeekerDetails from "./components/Screens/JobSeeker/JobSeekerDetails/JobSeekerDetails";
import NotFound from "./components/Error/NotFound";

const App = () => {
  return (
    <div className="bg-secondary">
      <Router>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* //////////////    Dashboards     ////////////*/}
          <Route path="/founder/dashboard" element={<FounderDashboard />} />
          <Route path="/investor/dashboard" element={<InvestorDashboard />} />
          <Route path="/incubator/dashboard" element={<IncubatorDashboard />} />
          <Route path="/mentor/dashboard" element={<MentorDashboard />} />
          <Route path="/jobseeker/dashboard" element={<JobSeekerDashboard />} />

          {/*///////////////      Forms  ///////////// */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<PreSignup />} />
          <Route path="signup/:user/" element={<SignupMain />} />

          <Route path="signup/investor/join" element={<InvestorForm />} />
          <Route path="signup/founder/join" element={<FounderForm />} />
          <Route path="signup/mentor/join" element={<MentorForm />} />
          <Route path="signup/incubator/join" element={<IncubatorForm />} />
          <Route path="signup/jobseeker/join" element={<JobSeekerForm />} />

          {/* ////////////    Details  ////////////////*/}
          <Route path="/founder/details" element={<FounderDetails />} />
          <Route path="/investor/details" element={<InvestorDetails />} />
          <Route path="/incubator/details" element={<IncubatorDetails />} />
          <Route path="/mentor/details" element={<MentorDetails />} />
          <Route path="/jobseeker/details" element={<JobSeekerDetails />} />

          {/* ////////////////   404 not Found  /////////////////// */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
