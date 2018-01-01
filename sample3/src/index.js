import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route, Switch
} from 'react-router-dom'
import SNSUsers from './sns_users'
import SNSTimeline from './sns_timeline'
import SNSLogin from './sns_login'
import Timeline from './timeline'

const SNSApp = () => (
  <Router>
    <div>
      <Switch>
        <Route path='/users' component={SNSUsers} />
        <Route path='/timeline' component={SNSTimeline} />
        <Route path='/login' component={SNSLogin} />
        <Route path='/timelineall' component={Timeline} />
        <Route component={SNSLogin} />
      </Switch>
    </div>
  </Router>
)

ReactDOM.render(
  <SNSApp />,
  document.getElementById('root'))
