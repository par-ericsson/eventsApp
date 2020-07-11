import React, { Component, Fragment } from "react";
import EventDashboard from '../../features/events/EventDashboard/EventDashboard'
import NavBar from "../../features/nav/NavBar/NavBar";
import { Container } from "semantic-ui-react";
import { Route, Switch, withRouter } from "react-router-dom";
import HomePage from '../../features/events/home/HomePage';
import EventDetailedPage from '../../features/events/EventDetailed/EventDetailedPage';
import PeopleDashboard from '../../features/events/user/PeopleDashboard/PeopleDashboard';
import SettingsDashboard from '../../features/events/user/Settings/SettingsDashboard';
import UserDetailedPage from '../../features/events/user/UserDetailed/UserDetailedPage';
import EventForm from '../../features/events/EventForm/EventForm';
import TestComponent from "../../features/testArea/TestComponent";


class App extends Component {
  render() {
    return (
      <Fragment>
        <Route exact path='/' component={HomePage} />
        <Route path='/(.+)' render={() => (
          <Fragment>
            <NavBar />
            <Container className="main">           
              <Switch key={this.props.location.key}>
                <Route  exact path='/events' component={EventDashboard} />
                <Route  path='/events/:id' component={EventDetailedPage} />
                <Route  path='/people' component={PeopleDashboard} />
                <Route  path='/profile/:id' component={UserDetailedPage} />
                <Route  path='/settings' component={SettingsDashboard} />
                <Route  path={['/createEvent', '/manage/:id']} component={EventForm} />
                <Route  path='/test' component={TestComponent} />
              </Switch>
          </Container>
        </Fragment>
        )} />
      </Fragment>  
    );
  }
}

export default withRouter(App);
