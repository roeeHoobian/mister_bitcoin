import './App.css';
import {ContactPage} from './pages/ContactPage/ContactPage.jsx';
import HomePage from './pages/HomePage/HomePage'
import ContactDetailsPage from './pages/ContactDetailsPage/ContactDetailsPage.jsx'
import { AppHeader } from './cmps/AppHeader/AppHeader';
import { ContactEditPage } from './pages/ContactEditPage/ContactEditPage';
import { StatisticsPage } from './pages/StatisticsPage/StatisticsPage';
import { ProfilePage } from './pages/ProfilePage/ProfilePage';

import {
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { SignupPage } from './pages/SignupPage/SignupPage';

function App() {
  return (
    <div className="App">
      <Router>
        <AppHeader />
        <div>
          <Switch>
            <Route path="/contact/edit/:id?" component={ContactEditPage} />
            <Route path="/contact/:id" component={ContactDetailsPage} />
            <Route path="/signup" component={SignupPage}/>
            <Route path="/about" component="" />
            <Route path="/contacts" component={ContactPage} />
            <Route path="/statistics" component={StatisticsPage} />
            <Route path="/profile" component={ProfilePage}/>
            <Route path="/" component={HomePage} />
          </Switch>
        </div>
      </Router>

    </div>
  );
}

export default App;
