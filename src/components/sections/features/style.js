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
        paddingBottom: '60px',
        maxWidth: 1200,
        backgroundColor: colors.white,
        borderRadius: '20px',
        WebkitBoxShadow: '0px 8px 60px -9px rgba(28, 27, 41, 0.3)',
        MozBoxShadow: '0px 8px 60px -9px rgba(28, 27, 41, 0.3)',
        boxShadow: '0px 8px 60px -9px rgba(28, 27, 41, 0.3)'
    },
    iconBox: {
        maxWidth: 300,
        margin: '20px auto'
    },
    sectionTitle: {
        fontSize: 'calc(18px + 0.8vw)',
        color: colors.black,
        padding: '40px 0'
    },
    paragraph: {
        fontSize: 'calc(12px + 0.3vw)'
    }
};
