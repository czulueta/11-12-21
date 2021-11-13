import React, { useContext } from "react"
import Navbar from "./components/Navbar.js"
import Auth from "./components/Auth.js"
import Profile from "./components/Profile.js"
import Public from "./components/Public.js"
import { UserContext } from "./context/UserProvider.js"

export default function App(){
  const { } = useContext(UserContext)
  return(
    <div>
      <Navbar />
      <Switch>
        <Route
          exact path="/"
          render={() => <Auth />} />
        <Route
          path="/profile"
          render={() => <Profile />} />
        <Route
          path="/public"
          render={() => <Public />} />
      </Switch>
    </div>
  )
}