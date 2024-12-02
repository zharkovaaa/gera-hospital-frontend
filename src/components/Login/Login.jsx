import './Login.css'
import {ErrorMessage, Field, Form, Formik} from "formik";
import messages from '../Login/Login.messages.js'
import {FormattedMessage} from "react-intl";


const Login = ({children, onSubmit}) => {
    return (
        <Formik
            initialValues={{firstName: '', lastName: '', sex:''}}
            validate={values => {
                const errors = {};
                if (!values.firstName) {
                    errors.firstName = 'First name is required';
                }
                if (!values.lastName) {
                    errors.lastName = 'Last name is required';
                }
                if (!values.sex) {
                    errors.sex = 'Choose a gender'
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
                        <Field type="text" name="firstName" className={"inputText"} placeholder={'First name'}/>
                        <ErrorMessage className={"errorMessage"} name="firstName" component="div"/>
                    </div>
                    <div>
                        <Field type="text" name="lastName" className={"inputText"} placeholder={'Last name'}/>
                        <ErrorMessage className={"errorMessage"} name="lastName" component="div"/>
                    </div>
                    <div className={"sex"}><FormattedMessage {...messages.headline}/></div>
                    <div className={"button buttonLocation"}>
                        <div>
                            <Field type="radio" name="sex" id={"male"} value={"male"}/>
                            <label htmlFor={"male"}><FormattedMessage {...messages.male}/></label>
                            <ErrorMessage className={"errorMessage"} name="sex" component="div"/>
                        </div>
                        <div>
                           <Field type="radio" name="sex" id={"female"} value={"female"}/>
                            <label htmlFor={"female"}><FormattedMessage {...messages.female}/></label>
                        </div>
                    </div>
                    {children}
                </Form>
            )}
        </Formik>
    );
};

export default Login;