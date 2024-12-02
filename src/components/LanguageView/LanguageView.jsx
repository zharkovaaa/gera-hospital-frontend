import View from "../View/View.jsx";
import Logo from "../Logo/Logo.jsx";
import WhiteBox from "../WhiteBox/WhiteBox.jsx";
import Button from "../Button/Button.jsx";
import LanguageSelector from "../LanguageSelector/LanguageSelector.jsx";

import {navigate} from "wouter/use-location";
import CharacterBackground from "../CharacterBackground/CharacterBackground.jsx";
import messages from '../LanguageView/LanguageView.messages.js';
import {FormattedMessage} from "react-intl";

const LanguageView = () => {

    const handleLanguageNext = () =>{
        navigate("/PersonalInformationView")
    }

    const handleLanguageBack = () =>{
        navigate('/WelcomeView')
    }

    return(
        <View>
            <CharacterBackground/>
            <Logo/>
            <WhiteBox>
                <h1 className={"header"}><FormattedMessage {...messages.headline}/></h1>
                <LanguageSelector/>
                <section className={"buttonLocation"}>
                    <Button className={"backButton"} onClick={handleLanguageBack}><FormattedMessage {...messages.btnback}/></Button>
                    <Button className={"nextButton"} onClick={handleLanguageNext}><FormattedMessage {...messages.btnnext}/></Button>
                </section>
            </WhiteBox>
        </View>
    )
}

export default LanguageView;