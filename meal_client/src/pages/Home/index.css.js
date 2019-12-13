export default {
    container: {
        height: '100vh',
        fontFamily: 'Open Sans',
        display: 'grid',
        gridTemplateRows: '8% 92%',
      },
    nav: {
        gridRow: '1/2',
    },
    content: {
        gridRow: '2/3',
        display: 'grid',
        gridTemplateColumns: '60% 40%',
    },
    info: {
        gridColumn: '1/2',
        display: 'grid',
        gridTemplateRows: '25% 75%',
        overflow: 'scroll'
    },
    restaurant: {
        gridRow: '1/2',
    },
    menu: {
        gridRow: '2/3',
    },
    order: {
        gridColumn: '2/3',
        display: 'grid',
        gridTemplateRows: '10% 80% 10%',
        borderLeft: '1px solid lightgrey', 
        overflowY: 'scroll',
    }
}