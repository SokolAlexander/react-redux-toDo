import React from 'react';
import {connect} from 'react-redux';
import {
    addTextChange,
    addDateChange,
    addItem
    } from '../store/formAdd/actions';
import './form.css';

function FormAdd(props) {
    return (
        <form onSubmit={(e) => {e.preventDefault(); props.addItem({
            text: props.addTextValue,
            date: props.addDateValue
        })}}>
            <input type="text"
                required
                placeholder="add"
                value={props.addTextValue}
                onChange={(e) => props.addTextChange(e.target.value)}/>
            <input type="date"
                required
                value={props.addDateValue}
                onChange={(e) => props.addDateChange(e.target.value)}/>
            <input type="submit"
                value="Add"/>
        </form>
    )
}

const mapStateToProps = (state) => {
    return {
    addTextValue: state.formAdd.addTextValue,
    addDateValue: state.formAdd.addDateValue
    }
}

const mapDispatchToProps = {
    addTextChange,
    addDateChange,
    addItem
}

export default connect(mapStateToProps, mapDispatchToProps)(FormAdd);