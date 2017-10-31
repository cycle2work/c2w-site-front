import * as colors from '../../../commons/colors';

export const style = {
    container: {
        marginBottom: '50px',
        padding: '60px 15px',
        textAlign: 'center'
    },
    titleWrp: {
        margin: '0 auto',
        padding: '40px 0',
        textAlign: 'center'
    },
    sectionTitle: {
        color: colors.black,
        fontSize: 'calc(22px + 0.8vw)',
        paddingBottom: '20px'
    },
    paragraph: {
        color: colors.black,
        display: 'inline-block',
        fontSize: 'calc(12px + 0.3vw)',
        margin: '0 auto',
        paddingBottom: '10px',
        paddingLeft: '15px',
        position: 'relative',
        textAlign: 'left',
        width: '90%'
    },
    box: {
        background: colors.backgroundJoin,
        borderRadius: '10px',
        maxHeight: 380,
        maxWidth: 380,
        padding: '40px'
    },
    icon: {
        color: colors.primaryColor,
        display: 'inline-block',
        fontSize: 'calc(18px + 0.3vw)',
        fontWeight: 'bold',
        position: 'relative',
        verticalAlign:'top',
        width: '10%'
    },
    button: {
        paddingTop: '30px',
        textAlign: 'center'
    },
    row: {
        alignItems: 'center',
        display: 'flex',
        margin: '0 auto',
        maxWidth: 1200,
        textAlign: 'center'
    },
    imageContainer: {
        textAlign: 'right'
    }
};
