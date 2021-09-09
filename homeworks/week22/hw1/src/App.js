import "./App.css";

import { getMe } from "./WebAPI";
import { AuthContext } from "./contexts";
import React, { useState, useEffect } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages";
import PayPage from "./pages/PayPage";
import PosPage from "./pages/PosPage";
import SignPage from "./pages/SignPage";
import AboutPage from "./pages/AboutPage";
import SignUpPage from "./pages/SignUpPage";
import NewPostPage from "./pages/NewPostPage";
import CommentsPage from "./pages/CommentsPage";
import ArticlesPage from "./pages/ArticlesPage";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // 此處待辦：有 token 才 call API
    getMe().then((response) => {
      if (response.ok) {
        setUser(response.data);
      }
    });
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <Router>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/pay" component={PayPage} exact />
          <Route path="/about" component={AboutPage} exact />
          <Route path="/sign-in" component={SignPage} exact />
          <Route path="/posts/:id" component={PosPage} exact />
          <Route path="/sign-up" component={SignUpPage} exact />
          <Route path="/new-post" component={NewPostPage} exact />
          <Route path="/article" component={ArticlesPage} exact />
          <Route path="/comments" component={CommentsPage} exact />
        </Switch>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
