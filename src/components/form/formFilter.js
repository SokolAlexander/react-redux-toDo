import React from 'react';
import {connect} from 'react-redux';
import {
    filterTextChange,
    filterDateToChange,
    filterDateFromChange,
    filterSubmit,
    filterDrop
} from '../store/formFilter/actions';
import './form.css';

/**
 * rendering a form
 * @param {props} props
 * @return {ReactComponent}
 */
function FormFilter(props) {
    return (
        <form onSubmit={(e) => {e.preventDefault(); props.filterSubmit()}}>
            <input type="text"
                placeholder="filter"
                value={props.filterTextValue}
                onChange={(e) => props.filterTextChange(e.target.value)}/>
            <input type="date"
                required
                value={props.filterDateFromValue}
                onChange={(e) => props.filterDateFromChange(e.target.value)}/>
            <input type="date"
                required
                value={props.filterDateToValue}
                onChange={(e) => props.filterDateToChange(e.target.value)}/>
            <input type="submit"
                value="Filter"/>
            <input type="button"
                value="Drop"
                onClick={() => props.filterDrop()}/>
        </form>
    )
}

const mapStateToProps = (state) => {
    return {
    filterTextValue: state.formFilter.filterTextValue,
    filterDateToValue: state.formFilter.filterDateToValue,
    filterDateFromValue: state.formFilter.filterDateFromValue
    }
}

const mapDispatchToProps = {
    filterTextChange,
    filterDateToChange,
    filterDateFromChange,
    filterSubmit,
    filterDrop
}

export default connect(mapStateToProps, mapDispatchToProps)(FormFilter);