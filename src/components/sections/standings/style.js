import * as colors from "../../../commons/colors";
import bgSection from "../../../assets/images/bg_standings.png";

export const style = {
    container: {
        backgroundImage: `url('${bgSection}')`,
        backgroundPosition: "center bottom",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        padding: "100px 0px"
    },
    customRow: {
        textAlign: "center",
        margin: "0 auto",
        maxWidth: 1200
    },
    sectionTitle: {
        fontSize: "calc(22px + 0.8vw)",
        color: colors.black,
        paddingBottom: "40px"
    },
    graphWrp: {
        backgroundColor: colors.white,
        borderRadius: 10,
        WebkitBoxShadow: "0px 8px 60px -9px rgba(28, 27, 41, 0.3)",
        MozBoxShadow: "0px 8px 60px -9px rgba(28, 27, 41, 0.3)",
        boxShadow: "0px 8px 60px -9px rgba(28, 27, 41, 0.3)",
        padding: 20,
        marginBottom: 60
    },
    graph: {
        marginLeft: 40,
        width: "calc(100% - 40px)",
        position: "relative",
        minHeight: 430,
        borderLeft: `1px solid ${colors.lightGrey}`,
        borderBottom: `1px solid ${colors.lightGrey}`
    },
    graphLine: {
        padding: "8px 5px",
        textAlign: "left",
        position: "absolute",
        width: 80,
        fontWeight: 400,
        color: colors.white
    },
    li: {
        width: 30,
        textAlign: "right",
        height: "calc(400px / 4.8)"
    },
    cyclist: {
        position: "absolute",
        right: -25,
        top: -5,
        height: 45
    }
};
