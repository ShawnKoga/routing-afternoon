import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home.js';
import About from './components/About/About.js';
import History from './components/History/History.js';
import Contact from './components/Contact/Contact.js';
import ClassList from './components/ClassList/ClassList.js';
import Student from './components/Student/Student.js'

export default (
    <Switch>
        <Route exact path="/" component={ Home } />
        <Route path="/about" render={() => {
            return(
                <About>
                    <Switch>
                        <Route path='/about/history' component={ History } />
                        <Route path='/about/contact' component={ Contact } />
                    </Switch>
                </About>
            )
        }}/>
        <Route path="/classlist" component={ ClassList } />
        <Route path="/student/:id" component={ Student } />
    </Switch>
)