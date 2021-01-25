import React from 'react';
import Blackpink from './BP_page';
import Nav from './Nav';
import Home from './Home';
import About from './About';
import DetailProfile from './BP_details';
import Fans from './BP_fans';
import Contributor from './Contributor';
import ContributorDetail from './Contributor_detail';
import Counter from './Counter';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function BP(){
    return(
        <Router>
      <div className='App'>
        <Nav/>
        <Switch>
        <Route path='/' exact component={Home} />
        <Route path= '/about' component={About} />
        <Route path='/blackpink' component={Blackpink} />
        <Route path='/detail-profile/:id' component={DetailProfile}/>
        <Route path='/fans' component={Fans}/>
        <Route path='/contributor' component={Contributor}/>
        <Route path='/detail-contributor/:id' component={ContributorDetail}/>
        <Route path='/counter' component={Counter} />
        </Switch>
        
      </div>
    </Router>
    )
}

export default BP;