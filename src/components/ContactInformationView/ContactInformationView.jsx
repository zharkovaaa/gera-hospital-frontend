import './ContactInformationView.css'
import View from "../View/View.jsx";
import WhiteBox from "../WhiteBox/WhiteBox.jsx";
import ContactLogin from "../ContactLogin/ContactLogin.jsx";
import {useAtom} from "jotai";
import patientAtom from "../../patientAtom.js";
import {navigate} from "wouter/use-location";
import Button from "../Button/Button.jsx";
import ProgressBar from "../ProgressBar/ProgressBar.jsx";
import ky from "ky";
import Avatar from "../Avatar/Avatar.jsx";
import BasicBackground from "../BasicBackground/BasicBackground.jsx";
import messages from '../ContactInformationView/ContactInformationView.messages.js';
import {FormattedMessage} from "react-intl";


const ContactInformationView = () =>{

    const [patient, setPatient] = useAtom(patientAtom);

    const handleContactNextSubmit  = async (values) =>{
        const updatePatient = {...patient, ...values}
        const username = 'api';
        const password = '123';
        const response =await ky.post('http://localhost:8000/patients/do-admiss',{
            json: updatePatient,
            headers: {
                Authorization: `Basic ${btoa(`${username}:${password}`)}`,
            },
        }).json();
        setPatient({...updatePatient, ...response})
        navigate("/PrintView")
    }

    const handleContactBackSubmit = (values) =>{
        setPatient({...patient, ...values})
        //console.log(values)
        navigate("/PersonalInformationView")
    }

    return(
        <View>
            <BasicBackground/>
            <p className={"counter"}>2 out of 2</p>
            <ProgressBar value={95}/>
            <WhiteBox>
                <Avatar/>
                <h1 className={"header"}><FormattedMessage {...messages.headline}/></h1>
                <ContactLogin onSubmit={handleContactNextSubmit}>
                    <section className={"buttonLocation"}>
                        <Button className={"backButton"} onClick={handleContactBackSubmit}><FormattedMessage {...messages.btnback}/></Button>
                        <Button className={"nextButton"} type={'submit'}><FormattedMessage {...messages.btnnext}/></Button>
                    </section>
                </ContactLogin>
            </WhiteBox>
        </View>
    );
}

export default ContactInformationView;