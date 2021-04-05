import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import SignIn from '../components/Login/SignIn'
import SignUp from '../components/Login/SignUp'
import ChangePass from '../components/Login/ChangePass'
import Admin from '../pages/Admin'
import adminContent from '../components/adminContent'

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path = "/adminContent" component ={adminContent}/>
        <Route exact path="/admin" component={Admin} />
        <Route path="/signin" component={SignIn} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/change-password" component={ChangePass} />
      </Switch>
    </Router>
  )
}
export default Routes