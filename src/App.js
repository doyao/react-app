import Farme from './components/Farme/index'
import {Switch,Route,Redirect} from 'react-router-dom'
import {adminRoutes} from './routes/index'
import './App.css'
function App() {
  return(
    <Farme>
    <Switch>
      {adminRoutes.map(route=>{
        return(
          <Route
            key={route.path}
            path={route.path}
            exact={route.exact}
            render={routeProps=>{
              return <route.component {...routeProps}/>
            }}
          />
        )
      })}
      <Redirect to="/404"/>
    </Switch>
  </Farme>
  )
}
export default App;