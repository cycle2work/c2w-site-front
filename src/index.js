import React from "react";
import { render } from "react-dom";
import { IntlProvider } from "react-intl";

import Views from "./views";
import momentIt from "moment/locale/it";
import en from "./localization/messages/en.json";
import it from "./localization/messages/it.json";
import { getLanguage } from "./localization";
import "./index.css";
import moment from "moment";

// setting up moment locales
moment.locale("it", momentIt);

const language = getLanguage("en");
const messages = {
    en,
    it
};

render(
    <IntlProvider locale={language} messages={messages[language]}>
        <Views />
    </IntlProvider>,
    document.getElementById("root")
);
