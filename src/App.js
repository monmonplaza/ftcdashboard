import React from "react";
import "./app.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ChildrenList from "./Pages/ChildrenList";
import UsersList from "./Pages/UsersList.js";
import DonorsList from "./Pages/DonorsList.js";
import DonorDetails from "./Pages/DonorDetails.js";
import Overview from "./Pages/Overview";
import ManualDonations from "./Pages/ManualDonations";
import DonationDesignation from "./Pages/DonationDesignation";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Overview} />
          <Route path="/childrenlist" component={ChildrenList} />
          <Route path="/userslist" component={UsersList} />
          <Route path="/donorslist" component={DonorsList} />
          <Route path="/donor-details" component={DonorDetails} />
          <Route path="/manual-donations" component={ManualDonations} />
          <Route path="/donation-designation" component={DonationDesignation} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
