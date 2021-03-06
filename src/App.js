import React, { useContext } from "react"
import Navbar from "./components/Navbar.js"
import Auth from "./components/Auth.js"
import Profile from "./components/Profile.js"
import Public from "./components/Public.js"
import { UserContext } from "./context/UserProvider.js"
import { Switch, Route, Redirect } from "react-router-dom"
import ProtectedRoute from "./components/ProtectedRoute.js"

export default function App(){
  const { logout, token } = useContext(UserContext)
  return(
    <div>
      <Navbar logout={logout}/>
      <Switch>
        <Route
          exact path="/"
          render={() => token ? <Redirect path="/profile"/> : <Auth />} />
        <ProtectedRoute
          path="/profile"
          component={Profile}
          redirectTo="/"
          token={token} />
        <ProtectedRoute
          path="/public"
          component={Public}
          redirectTo="/"
          token={token} />
      </Switch>
    </div>
  )
}