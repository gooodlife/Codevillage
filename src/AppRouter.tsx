import React, { Component } from 'react'
import { Route, Switch } from 'react-router';
import Dashboard from '../src/components/Dashboard';
import Student from '../src/components/Student';





const AppRouter = () => {
    return (
        <>
              <Switch>
              <Route exact path="/" component={Dashboard} />     
              <Route exact path="/a" component={Student} />    
           
            <Route path="/b" exact render={() => <h1>Hello /b</h1>} />
            <Route path="/c" exact render={() => <h1>Hello /c</h1>} />
            <Route path="/d" exact render={() => <h1>Hello /d</h1>} />
            <Route path="/e" exact render={() => <h1>Hello /e</h1>} />
            <Route path="/f" exact render={() => <h1>Hello /f</h1>} />
            <Route path="/g" exact render={() => <h1>Hello /g</h1>} />
            <Route path="/h" exact render={() => <h1>Hello /h</h1>} />
            <Route path="/i" exact render={() => <h1>Hello /i</h1>} />

        </Switch>
        </>
    )
}

export default AppRouter
