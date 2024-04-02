import React from 'react'

import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import PrivateRoute from "./utils/PrivateRoute"
import { AuthProvider } from './context/AuthContext'

import Homepage from './views/Homepage'
import Registerpage from './views/Registerpage'
import Loginpage from './views/Loginpage'
import Dashboard from './views/Dashboard'
import AdminDashboard from './views/AdminDashboard'
import CoachDashboard from './views/CoachDashboard'
import HirbodDashboard from './views/HirbodDashboard'
import ProvinceBossDashboard from './views/ProvinceBossDashboard'
import ProvinceMasterDashboard from './views/ProvinceMasterDashboard'
import GuestDashboard from './views/GuestDashboard'
import Navbar from './views/Navbar'
import PasswordResetForm from './views/PasswordResetForm';


function App() {
  return (
    <Router>
      <AuthProvider>
        < Navbar/>
        <Switch>
          <PrivateRoute component={Dashboard} path="/dashboard" exact />
          <PrivateRoute component={AdminDashboard} path="/admin_dashboard" exact />
          <PrivateRoute component={CoachDashboard} path="/coach_dashboard" exact />
          <PrivateRoute component={HirbodDashboard} path="/hirbod_dashboard" exact />
          <PrivateRoute component={ProvinceBossDashboard} path="/province_boss_dashboard" exact />
          <PrivateRoute component={ProvinceMasterDashboard} path="/province_master_dashboard" exact />
          <PrivateRoute component={GuestDashboard} path="/guest_dashboard" exact />
          
          <Route component={Registerpage} path="/register" exact />
          <Route component={PasswordResetForm} path="/resetpassword" exact />
          <Route component={Loginpage} path="/" />
          {/* <Route component={Homepage} path="/" exact /> */}
        </Switch>
      </AuthProvider>
    </Router>
  )
}

export default App