import ReactDOM from 'react-dom'
import {BrowserRouter as Routes,Switch,Route,Redirect} from 'react-router-dom'
import {mainRoutes} from './routes/index'
import App from './App'
ReactDOM.render(
    <Routes>
            <Switch>
                <Route path="/admin" render={routeProps => <App {...routeProps}/>}/>
                {mainRoutes.map(route => {
                    return <Route history={Routes.history} key={route.path} {...route}/>
                })}
                <Redirect to="/404"/>
            </Switch>
   </Routes>
    ,document.getElementById('root')
);

