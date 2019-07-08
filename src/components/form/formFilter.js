import React from 'react';
import {connect} from 'react-redux';
import {
    filterTextChange,
    filterDateToChange,
    filterDateFromChange,
    filterSubmit,
    filterDrop
} from '../store/actions';
import './form.css';

/**
 * rendering a form
 * @param {props} props
 * @return {ReactComponent}
 */
class FormFilter extends React.Component {
    render() {
        return (
            <form onSubmit={(e) => {e.preventDefault(); this.props.filterSubmit()}}>
                <input type="text"
                    placeholder="filter"
                    value={this.props.filterTextValue}
                    onChange={(e) => this.props.filterTextChange(e.target.value)}/>
                <input type="date"
                    required
                    value={this.props.filterDateFromValue}
                    onChange={(e) => this.props.filterDateFromChange(e.target.value)}/>
                <input type="date"
                    required
                    value={this.props.filterDateToValue}
                    onChange={(e) => this.props.filterDateToChange(e.target.value)}/>
                <input type="submit"
                    value="Boom"/>
                <input type="button"
                    value="Zhmyak"
                    onClick={() => this.props.filterDrop()}/>
            </form>
        )
    }

}

const mapStateToProps = (state) => {
    return {
    filterTextValue: state.filterTextValue,
    filterDateToValue: state.filterDateToValue,
    filterDateFromValue: state.filterDateFromValue
    }
}

const mapActionsToProps = {
    filterTextChange,
    filterDateToChange,
    filterDateFromChange,
    filterSubmit,
    filterDrop
}

export default connect(mapStateToProps, mapActionsToProps)(FormFilter);