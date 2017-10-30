import * as colors from '../../../commons/colors';

export const style = {
    footerWrp: {
        backgroundColor: colors.backgroundFooter
    },
    footerCol: {
        color: colors.lighterGrey,
        fontSize: 14,
        padding: '15px 0'
    },
    customRow: {
        paddingTop: '20px',
        paddingBottom: '20px',
        maxWidth: 1200,
        margin: '0 auto'
    },
    bottomFooterWrp: {
        backgroundColor: colors.backgroundBottomFooter,
        color: colors.lighterGrey,
        fontSize: 12,
        fontWeight: 300
    },
    textWrp: {
        '@media screen and (maxWidth: 991px)': {
            border: 'none',
            height: 'auto',
            marginBottom: 20
        },
        '@media screen and (minWidth: 991px)': {
            borderRight: `1px solid ${colors.grey}`,
            minHeight: 100
        }
    }
};