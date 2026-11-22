import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../pages/home/HomeComponent";
import Education from "../pages/education/EducationComponent";
import Experience from "../pages/experience/Experience";
import Contact from "../pages/contact/ContactComponent";
import Projects from "../pages/projects/Projects";
import Error404 from "../pages/errors/error404/Error";

export default class Main extends Component {
  render() {
    const commonProps = {
      theme: this.props.theme,
      themeName: this.props.themeName,
      onToggleTheme: this.props.onToggleTheme,
    };

    const pathname = window.location.pathname;
    const basename =
      pathname === "/Resume" || pathname.startsWith("/Resume/")
        ? "/Resume"
        : "";

    return (
      <BrowserRouter basename={basename}>
        <Switch>
          <Route
            path="/"
            exact
            render={(props) => <Home {...props} {...commonProps} />}
          />
          <Route
            path="/home"
            exact
            render={(props) => <Home {...props} {...commonProps} />}
          />
          <Route
            path="/experience"
            exact
            render={(props) => <Experience {...props} {...commonProps} />}
          />
          <Route
            path="/education"
            exact
            render={(props) => <Education {...props} {...commonProps} />}
          />
          <Route
            path="/contact"
            exact
            render={(props) => <Contact {...props} {...commonProps} />}
          />

          <Route
            path="/projects"
            exact
            render={(props) => <Projects {...props} {...commonProps} />}
          />
          <Route
            path="*"
            render={(props) => <Error404 {...props} {...commonProps} />}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}
