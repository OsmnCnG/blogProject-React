import Home from "./components/home/Home"
import Navbar from "./components/navbar/Navbar"
import './app.scss'
import Create from "./components/create/Create"
import { BrowserRouter as Router,Route,Switch} from "react-router-dom"
import BlogDetail from "./components/blogDetail/BlogDetail"
import NotFound from "./components/notFount/NotFound"

function App() {

  return (
    
    <Router>
        <Navbar/>
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route path="/create">
              <Create/>
            </Route>
            <Route path="/blogs/:id">
              <BlogDetail/>
            </Route>
            <Route>
              <NotFound path="*"/>
            </Route>
          </Switch>
        </div>
    </Router>
    
  )
}

export default App
