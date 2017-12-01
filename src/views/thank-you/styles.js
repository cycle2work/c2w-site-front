import gradient from "../../assets/images/gradient_mondora.png";
import { grey } from "../../commons/colors";

export const styles = {
    container: {
        height: "100vh",
        color: grey,
        backgroundImage: `url(${gradient})`,
        backgroundSize: "contain",
        backgroundRepeat: "repeat-y"
    },
    row: {
        height: "80%",
        textAlign: "center"
    },
    text: {
        fontSize: "16px"
    }
};
