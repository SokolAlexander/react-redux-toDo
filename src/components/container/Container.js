import React from 'react';
import Form from '../form/form';
import List from '../list/list';
import { checkItem, 
    removeItem, 
    addItem,
    filterTextChange,
    filterDateFromChange,
    filterDateToChange,
    addTextChange,
    addDateChange
     } from '../store/actions';
import { connect } from 'react-redux';

class Container extends React.Component {
    render() {
        console.log(this.props)
        return (
        <div className="App">
                <Form className="form-add" inputs={{
                    inputText: {
                    value: this.props.addTextValue,
                    placeholder: 'add',
                    type: 'text',
                    required: true,
                    onChange: (e) => {this.props.addTextChange(e.target.value)}
                    },
                    inputDate: {
                    value: this.props.addDateValue,
                    type: 'date',
                    required: true,
                    onChange: (e) => {this.props.addDateChange(e.target.value)}
                    },
                    inputSubmit: {
                    value: 'Submit',
                    type: 'submit'
                    }
                }} onSubmit={(e) => this.handleFormAddSubmit(e)}/>
                <List className="list" data={this.props.data} onClick={(e) => this.handleListClick(e)}/>
                <Form className="form-filter" inputs={{
                    inputText: {
                    value: this.props.filterTextValue,
                    placeholder: 'filter',
                    type: 'text',
                    onChange: (e) => {this.props.filterTextChange(e.target.value)}
                    },
                    inputDateFrom: {
                    value: this.props.filterDateFromValue,
                    type: 'date',
                    onChange: (e) => {this.props.filterDateFromChange(e.target.value)}
                    },
                    inputDateTo: {
                    value: this.props.filterDateToValue,
                    type: 'date',
                    onChange: (e) => {this.props.filterDateToChange(e.target.value)}
                    },
                    inputSubmitFilters: {
                    value: 'Filter',
                    type: 'submit'
                    },
                    inputDropFilters: {
                    value: 'Drop',
                    type: 'button',
                    onClick: this.handleFiltersDrop
                    }
                }} onSubmit={(e) => {e.preventDefault(); this.handleFiltersSubmit(e)}}
                />
            </div>
        )}
}

const mapStateToProps = (state) => {
    console.log(state)
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
    addItem,
    removeItem,
    checkItem
};

export default connect(mapStateToProps, mapActionsToProps)(Container);