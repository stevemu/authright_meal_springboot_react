export default {
    modal: {
        font: 'inherit',
        borderRadius: '10px',
        width: '40%',
        maxWidth: '40% !important',
        left: '30%',
    },
    context: {
        display: 'grid',
        gridTemplateColumns: '20% auto 35%',
        alignItems: 'center',
        borderBottom: '1px solid lightgrey',
    },
    quantity: {
        gridColumn: '1/2',
        display: 'inline-grid',
        padding: '0px',
        overflowY: 'auto',
        alignItems: 'center',
    },
    control: {
        gridColumn: '3/3',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
    },
    controlBtn: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: '5px',
        fontSize: '1.2rem',
        width: '45px',
        color: 'black',
        backgroundColor: 'transparent',
        border: '1px solid black',
        borderRadius: '65%',
    },
    quantityDisplay: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    footer: {
        display: 'grid',
        gridTemplateColumns: '40% auto 20%',
        padding: '16px',
        overflowY: 'auto',
        alignItems: 'center',
    },
    footerBtn: {
        gridColumn: '3/3',
    }
}