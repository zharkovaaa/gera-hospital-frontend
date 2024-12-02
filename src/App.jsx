import './App.css';
import PersonalInformationView from "./components/PersonalInformationView/PersonalInformationView.jsx";
import ContactInformationView from "./components/ContactInformationView/ContactInformationView.jsx";
import {Route, Switch} from 'wouter';
import WelcomeView from "./components/WelcomeView/WelcomeView.jsx";
import PrintView from "./components/PrintView/PrintView.jsx";
import LanguageView from "./components/LanguageView/LanguageView.jsx";

function App() {
    return (
        <Switch>
            <Route path="/" component={WelcomeView}/>
            <Route path="/LanguageView" component={LanguageView}/>
            <Route path="/PersonalInformationView" component={PersonalInformationView}/>
            <Route path="/ContactInformationView" component={ContactInformationView}/>
            <Route path="/PrintView" component={PrintView}/>
        </Switch>
    )
}

export default App