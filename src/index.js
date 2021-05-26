import React from "react";
import { render } from "react-dom";
import { IntlProvider } from "react-intl";
import moment from "moment";

import momentIt from "moment/locale/it";
import en from "./localization/messages/en.json";
import it from "./localization/messages/it.json";
import { getLanguage } from "./localization";

import { LocaleProvider } from "antd";
import antdEn from "antd/lib/locale-provider/en_US";
import antdIt from "antd/lib/locale-provider/it_IT";

import Views from "./views";

import "./index.css";

// setting up moment locales
moment.locale("it", momentIt);

const language = getLanguage("en");
const messages = {
    en,
    it,
};

const antdLocale = {
    en: antdEn,
    it: antdIt,
};

render(
    <IntlProvider locale={language} messages={messages[language]}>
        <LocaleProvider locale={antdLocale[language]}>
            <Views />
        </LocaleProvider>
    </IntlProvider>,
    document.getElementById("root")
);
