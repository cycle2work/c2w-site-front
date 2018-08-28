import * as colors from "../../../commons/colors";
import gradient from "../../../assets/images/gradient_facts.png";

export const style = {
    container: {
        backgroundImage: `url(${gradient})`,
        backgroundSize: "contain",
        backgroundRepeat: "repeat-y",
        padding: "100px 15px",
        margin: "50px 0"
    },
    customRow: {
        textAlign: "center",
        margin: "0 auto",
        maxWidth: 1200
    },
    sectionTitle: {
        fontSize: "calc(22px + 0.8vw)",
        color: colors.black,
        paddingBottom: "30px"
    },
    paragraph: {
        fontSize: "calc(14px + 0.3vw)",
        color: colors.grey
    }
};
