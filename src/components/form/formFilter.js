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
class FormFilter extends React.Component {
    /**
     * renders form
     * @return {ReactComponent}
     */
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