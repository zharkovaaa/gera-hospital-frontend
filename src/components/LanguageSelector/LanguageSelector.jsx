import {FormattedMessage} from "react-intl";
import messages from './LanguageSelector.messages.js';

import React from "react";
import {useAtom} from "jotai";
import {localeAtom} from "../Localized/localeAtom.js";
import './LanguageSelector.css'


function LanguageSelector() {

    const [locale, setLocale] = useAtom(localeAtom);

    const handleChange = (value) => {
        setLocale(value);
    }

    return (
        <div className={'buttonLocation box'}>
            <div>
                <button className={'languageButton'} onClick={()=> handleChange("en")}><span><FormattedMessage {...messages.english}/></span></button>
            </div>
            <div>
                <button className={'languageButton'} onClick={()=> handleChange("de")}><span><FormattedMessage {...messages.german}/></span></button>
            </div>
        </div>

        )
}

export default LanguageSelector;