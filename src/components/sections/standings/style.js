import * as colors from '../../../commons/colors';
import bgSection from '../../../assets/images/bg_standings.png';

export const style = {
    container: {
        backgroundImage: `url('${bgSection}')`,
        backgroundPosition: 'center bottom',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        padding: '100px 0px'
    },
    customRow: {
        textAlign: 'center',
        margin: '0 auto',
        maxWidth: 1200
    },
    tableWrp: {
        textAlign: 'center',
        margin: '50px auto',
        padding: '10px',
        backgroundColor: colors.white,
        borderRadius: '10px',
        WebkitBoxShadow: '0px 8px 60px -9px rgba(28, 27, 41, 0.3)',
        MozBoxShadow: '0px 8px 60px -9px rgba(28, 27, 41, 0.3)',
        boxShadow: '0px 8px 60px -9px rgba(28, 27, 41, 0.3)'
    },
    sectionTitle: {
        fontSize: 'calc(22px + 0.8vw)',
        color: colors.black,
        paddingBottom: '40px'
    }
};
