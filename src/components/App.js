
import React, { Component } from 'react';
import Home from './Home';
import  EmployeeList from "./employeeList";
// import route Components here
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom'
class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <div className="container">
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route exact path = "/employeeList" component ={EmployeeList} />
                        </Switch>
                    </div>
                </div>
            </Router>


        );
    }
}

export default App;
