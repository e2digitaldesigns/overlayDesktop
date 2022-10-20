import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import SocialNetworks from "../socials/socialNetworks";
import Header from "../header/header";
import HostListing from "../hosts/hostListing";
import HostNew from "../hosts/hostNew";
import HostProfile from "../hosts/hostProfile";

const ApplicationWrapper: React.FC = () => {
  return (
    <>
      <Router>
        <Header />

        <Routes>
          <Route path="/home" element={<>home</>} />
          <Route path="/episodes" element={<>episodes</>} />
          <Route path="/hosts" element={<HostListing />} />
          <Route path="/hosts/new" element={<HostNew />} />
          <Route path="/hosts/:id" element={<HostProfile />} />
          <Route path="/social-networks" element={<SocialNetworks />} />
        </Routes>
      </Router>
    </>
  );
};

export default ApplicationWrapper;
