import {ErrorMessage, Field, Form, Formik} from "formik";
import messages from '../ContactInformationView/ContactInformationView.messages.js';
import {FormattedMessage} from "react-intl";

const ContactLogin = ({children, onSubmit}) => {
    return (
        <Formik
            initialValues={{email: '', phoneNumber: ''}}
            validate={values => {
                const errors = {};
                if (!values.email) {
                    errors.email = 'Email is required';
                }
                if ((!values.phoneNumber)) {
                    errors.phoneNumber = 'Phone number is required';
                }
                return errors;
            }}
            onSubmit={(values) => {
                if (onSubmit) {
                    onSubmit(values);
                }
            }}
        >
            {(
                <Form className={"input"}>
                    <div>
                        <label htmlFor="email"><FormattedMessage {...messages.email}/></label>
                        <Field type="email" name="email" className={"inputText"} placeholder={"example@domain.com"} />
                        <ErrorMessage className={"errorMessage"} name="email" component="div"/>
                    </div>
                    <div>
                        <label htmlFor="phoneNumber"><FormattedMessage {...messages.phone}/></label>
                        <Field type="tel" name="phoneNumber" className={"inputText"} placeholder={"+49 XXXXXXXXX"}/>
                        <ErrorMessage className={"errorMessage"}  name="phoneNumber" component="div"/>
                    </div>
                    {children}
                </Form>
        )}
    </Formik>
)
}

export default ContactLogin;