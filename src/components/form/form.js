import React from 'react';
import {connect} from 'react-redux';
import {
    filterTextChange,
    filterDateFromChange,
    filterDateToChange,
    addTextChange,
    addDateChange,
    addItem
} from '../store/actions';
import './form.css';

/**
 * rendering a form
 * @param {props} props
 * @return {ReactComponent}
 */
function Form(props) {
    const inputs = props.inputs;

    const res = [];
    for (const key in inputs) {
        const attributes = inputs[key];
        res.push(
            <input key={key} {...attributes} />
        )
    }

    return (
        <form onSubmit={(e) => {e.preventDefault(); props.onSubmit(e)}}>
            {res}
        </form>
    )
}

const mapStateToProps = (state) => {
    return {
    filterTextValue: state.filterTextValue,
    filterDateToValue: state.filterDateToValue,
    filterDateFromValue: state.filterDateFromValue,
    addTextValue: state.addTextValue,
    addDateValue: state.addDateValue
    }
}

const mapActionsToProps = {
    filterTextChange,
    filterDateFromChange,
    filterDateToChange,
    addTextChange,
    addDateChange,
    addItem
}

export default connect(mapStateToProps, mapActionsToProps)(Form);