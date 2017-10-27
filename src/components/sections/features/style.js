import * as colors from '../../../commons/colors';
import bgSection from '../../../assets/images/bg_features.png';

export const style = {
    container: {
        backgroundImage: `url('${bgSection}')`,
        backgroundPosition: 'left top',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        padding: '100px 15px'
    },
    featureBox: {
        textAlign: 'center',
        margin: '50px auto',
        padding: '80px 0',
        maxWidth: 1200,
        backgroundColor: colors.white,
        borderRadius: '10px',
        WebkitBoxShadow: '0px 8px 60px -9px rgba(28, 27, 41, 0.3)',
        MozBoxShadow: '0px 8px 60px -9px rgba(28, 27, 41, 0.3)',
        boxShadow: '0px 8px 60px -9px rgba(28, 27, 41, 0.3)'
    },
    iconBox: {
        maxWidth: 300,
        margin: '20px auto'
    },
    sectionTitle: {
        fontSize: 'calc(22px + 0.8vw)',
        color: colors.black,
        paddingBottom: '40px'
    },
    paragraph: {
        fontSize: 'calc(12px + 0.3vw)',
        color: colors.grey
    }
};
