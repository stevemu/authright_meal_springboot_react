export default {
    container: {
        padding: '0rem 2rem',
        display: 'grid',
        gridTemplateRows: '10% 90%',
    },
    nav: {
        backgroundColor: 'transparent',
        gridRow: '1/2',
    },
    body: {
        paddingTop: '5px',
        gridRow: '2/3',
        overflowY: 'scroll'
    },
    dropdown: {
        position: 'relative',
        // left: '100%',
        // marginTop: '-6px',
        // marginLeft: '-1px',
    }
}