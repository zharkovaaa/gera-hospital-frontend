import View from "../View/View.jsx";
import WhiteBox from "../WhiteBox/WhiteBox.jsx";
import CharacterBackground from "../CharacterBackground/CharacterBackground.jsx";
import Button from "../Button/Button.jsx";
import {atom, useAtom} from "jotai";
import patientAtom from "../../patientAtom.js";
import messages from '../PrintView/PrintView.messages.js';
import {FormattedMessage} from "react-intl";


const PrintView = () =>{

    const [patient] =useAtom(patientAtom)

    return(
        <View>
            <CharacterBackground/>
            <WhiteBox>
                <h1 className={"header"}><FormattedMessage {...messages.headline}/> {patient.queueNumber}</h1>
                <section>
                    <p>
                        <FormattedMessage {...messages.intro1}/><br/> <FormattedMessage {...messages.intro2}/>
                    </p>
                </section>
                <Button className={"startButton"}><FormattedMessage {...messages.btnprint}/></Button>
            </WhiteBox>
        </View>
    );
}

export default PrintView;