import React from 'react';
import FormFilter from '../form/formFilter';
import FormAdd from '../form/formAdd';
import List from '../list/list';
import { 
    filterTextChange,
    filterDateFromChange,
    filterDateToChange,
    addTextChange,
    addDateChange
     } from '../store/actions';
import { connect } from 'react-redux';

class Container extends React.Component {
    render() {
        return (
        <div className="App">
                <FormAdd />
                <List className="list" data={this.props.data} onClick={(e) => this.handleListClick(e)}/>
                <FormFilter />
            </div>
        )}
}

const mapStateToProps = (state) => {
    return {
        data: state.data,
        filterDateFromValue: state.filterDateFromValue,
        filterDateToValue: state.filterDateToValue,
        filterTextValue: state.filterTextValue,
        addDateValue: state.addDateValue,
        addTextValue: state.addTextValue
    }
};

const mapActionsToProps = {
    filterTextChange,
    filterDateFromChange,
    filterDateToChange,
    addTextChange,
    addDateChange,
};

export default connect(mapStateToProps, mapActionsToProps)(Container);