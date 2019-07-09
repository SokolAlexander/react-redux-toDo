import React from 'react';
import {connect} from 'react-redux';
import {
    addTextChange,
    addDateChange,
    addItem
    } from '../store/formAdd/actions';
import './form.css';

/**
 * rendering a form
 * @param {props} props
 * @return {ReactComponent}
 */
class FormAdd extends React.Component {
    /**
     * render form
     * @return {ReactComponent}
     */
    render() {
        return (
            <form onSubmit={(e) => {e.preventDefault(); this.props.addItem({
                text: this.props.addTextValue,
                date: this.props.addDateValue
            })}}>
                <input type="text"
                    required
                    placeholder="add"
                    value={this.props.addTextValue}
                    onChange={(e) => this.props.addTextChange(e.target.value)}/>
                <input type="date"
                    required
                    value={this.props.addDateValue}
                    onChange={(e) => this.props.addDateChange(e.target.value)}/>
                <input type="submit"/>
            </form>
        )
    }

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