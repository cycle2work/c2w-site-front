import * as colors from '../../../commons/colors';
import homeCyclist from '../../../assets/images/home_cyclist.png';

export const style = {
    container: {
        backgroundImage: `url('${homeCyclist}')`,
        backgroundPosition: 'right top',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        padding: '100px 15px'
    },
    contentRow: {
        maxWidth: 1200,
        margin: '0 auto'
    },
    sectionTitle: {
        fontSize: 'calc(18px + 0.8vw)',
        color: colors.black,
        padding: '40px 0'
    },
    paragraph: {
        fontSize: 'calc(12px + 0.3vw)',
        color: colors.grey
    }
};
