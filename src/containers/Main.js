import React, { Component } from "react";
import { Route, Switch, HashRouter } from "react-router-dom";
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

    return (
      <HashRouter>
        <Switch>
          <Route
            path="/"
            exact
            render={(props) => <Home {...props} {...commonProps} />}
          />
          <Route
            path="/home"
            render={(props) => <Home {...props} {...commonProps} />}
          />
          <Route
            path="/experience"
            exact
            render={(props) => <Experience {...props} {...commonProps} />}
          />
          <Route
            path="/education"
            render={(props) => <Education {...props} {...commonProps} />}
          />
          <Route
            path="/contact"
            render={(props) => <Contact {...props} {...commonProps} />}
          />

          <Route
            path="/projects"
            render={(props) => <Projects {...props} {...commonProps} />}
          />
          <Route
            path="*"
            render={(props) => <Error404 {...props} {...commonProps} />}
          />
        </Switch>
      </HashRouter>
    );
  }
}
