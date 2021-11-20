import Pay from './Pay'
import Success from './Success'
import {Route, Router, Switch} from 'react'

const App = () =>{
 return(
  <Router>
   <Switch>
    <Route path='/pay'>
     <Pay/>
    </Route>
    <Route path='/success'>
     <Success/>
    </Route>
   </Switch>
  </Router>
 )
}

export default App
