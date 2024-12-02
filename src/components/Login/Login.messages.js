import {defineMessages} from "react-intl";

export default defineMessages({
    placeholder1: {
        id: 'input.firstName',
        description: 'Place holder for first name input',
        defaultMessage: 'First name',
    },
    placeholder2: {
        id: 'input.lastName',
        description: 'Place holder for last name input',
        defaultMessage: 'Last name',
    },
    headline: {
        id: 'personalInfo.sex',
        description: 'headline for sex question',
        defaultMessage: 'Biological sex',
    },
    male: {
        id: 'personalInfo.sex1',
        description: 'Option Male',
        defaultMessage: 'Male',
    },
    female: {
        id: 'personalInfo.sex2',
        description: 'Option Female',
        defaultMessage: 'Female',
    },
    btnnext:{
        id:'btn.next',
        description: 'Sign for next button',
        defaultMessage: 'Next'
    },
    btnback:{
        id:'btn.back',
        description: 'Sign for back button',
        defaultMessage: 'Back'
    }
})