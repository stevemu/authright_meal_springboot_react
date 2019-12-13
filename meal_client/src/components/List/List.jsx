import React, { Component } from 'react'

export default class List extends Component {

    render() {
        const { data, start, end } = this.props;

        return (
            <>
                <tbody>
                    {Object.keys(data).slice(start, end).map((key) => (
                        <tr
                            key={key}
                            data-price={data[key].price}
                            data-item={data[key].name}
                            data-id={data[key].itemId}
                            onClick={(event) => {
                                this.props.setModalShow(true);
                                this.props.fetchDetails(event);
                            }}>
                            <td>{data[key].itemId}</td>
                            <td>{data[key].name}</td>
                            <td>{data[key].price}</td>
                        </tr>
                    ))}
                </tbody>
            </>
        )
    }
}
