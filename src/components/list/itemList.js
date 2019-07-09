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
    if (!props.data[0]) return null;
    const data = props.data.filter((item) => {
        return (item.text.indexOf(props.filterTextValue) !== -1) &&
        ((!props.dateFilterActive) || 
            (compareDates(props.filterDateFromValue, props.filterDateToValue, item.date)));
    });
    
    if (props.someFlag) {//eslint-disable-next-line
        data[0] = data[0]
    };

    return data.map((item) => {
        return <Item key={item.index} item={item} />
    })
};

const mapStateToProps = (state) => {
    return {
        data: state.list.data,
        filterTextValue: state.formFilter.filterTextValue,
        dateFilterActive: state.formFilter.dateFilterActive,
        filterDateFromValue: state.formFilter.filterDateFromValue,
        filterDateToValue: state.formFilter.filterDateToValue,
        someFlag: state.list.someFlag
    }
}
export default connect(mapStateToProps)(ItemList);