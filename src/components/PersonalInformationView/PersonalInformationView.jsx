import View from "../View/View.jsx";
import './PersonalInformationView.css'
import WhiteBox from "../WhiteBox/WhiteBox.jsx";
import Login from "../Login/Login.jsx";
import Button from "../Button/Button.jsx";
import ProgressBar from "../ProgressBar/ProgressBar.jsx";
import Avatar from "../Avatar/Avatar.jsx";
import BasicBackground from "../BasicBackground/BasicBackground.jsx";

import {navigate} from "wouter/use-location";
import patientAtom from "../../patientAtom.js";
import {useAtom} from "jotai";
import {FormattedMessage} from "react-intl";
import messages from '../PersonalInformationView/PersonalInformationView.messages.js'


const PersonalInformationView = () => {
    const [patient, setPatient] = useAtom(patientAtom);

    const handlePersonalNextSubmit = (values) =>{
        setPatient({...patient, ...values})
        //console.log(values)
        navigate("/ContactInformationView")
    }

    const handlePersonalBackSubmit = () =>{
        navigate("/LanguageView")
    }
    return(
        <View>
            <BasicBackground/>
            <p className={"counter"}>1 out of 2</p>
            <ProgressBar value={50}/>

            <WhiteBox>
                <Avatar/>
                <h1 className={"header"}><FormattedMessage {...messages.headline}/></h1>
                <Login onSubmit={handlePersonalNextSubmit}>
                    <section className={"buttonLocation"}>
                        <Button className={"backButton"} onClick={handlePersonalBackSubmit}><FormattedMessage {...messages.btnback}/></Button>
                        <Button className={"nextButton"} type={'submit'}><FormattedMessage {...messages.btnnext}/></Button>
                    </section>
                </Login>
            </WhiteBox>

        </View>
    )
}

export default PersonalInformationView;