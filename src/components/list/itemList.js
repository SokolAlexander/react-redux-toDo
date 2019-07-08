import React from 'react';
import Item from './item.js';
import {compareDates} from '../utils';
import {connect} from 'react-redux';
/**
 * Render a list of items
 * @param {Props} props 
 * @return {Array} of reactComponents
 */
function ItemList(props) {
    const data = props.data.filter((item) => {
        return (item.text.indexOf(props.filterTextValue) !== -1) &&
        ((!props.dateFilterActive) || 
            (compareDates(props.filterDateFromValue, props.filterDateToValue, item.date)));
    });

    if (props.someFlag) {data[0] = data[0]};

    return data.map((item) => {
        return <Item key={item.index} item={item} />
    })
};

const mapStateToProps = (state) => {
    return {
        data: state.data,
        filterTextValue: state.filterTextValue,
        dateFilterActive: state.dateFilterActive,
        filterDateFromValue: state.filterDateFromValue,
        filterDateToValue: state.filterDateToValue,
        someFlag: state.someFlag
    }
}
export default connect(mapStateToProps)(ItemList);