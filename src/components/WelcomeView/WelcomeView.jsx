import "./WelcomeView.css"

import View from "../View/View.jsx";
import Logo from "../Logo/Logo.jsx";
import WhiteBox from "../WhiteBox/WhiteBox.jsx";
import Button from "../Button/Button.jsx";
import CharacterBackground from "../CharacterBackground/CharacterBackground.jsx";
import messages from '../WelcomeView/WelcomeView.messages.js';
import {navigate} from "wouter/use-location";
import {FormattedMessage} from "react-intl";


const WelcomeView = () => {

    const handlePersonalClick = () =>{
        navigate("/LanguageView")
    }

    return(
        <View className={"avatar_background"}>
            <CharacterBackground/>
            <Logo/>
            <WhiteBox>
                <h1 className={"header"}><FormattedMessage {...messages.headline}/></h1>
                <section>
                    <p><FormattedMessage {...messages.intro1}/></p>
                    <p><FormattedMessage {...messages.intro2}/>.</p>
                </section>
                <Button className={"startButton"} onClick={handlePersonalClick}><FormattedMessage {...messages.btnStart}/></Button>
            </WhiteBox>
        </View>
    )
}

export default WelcomeView;