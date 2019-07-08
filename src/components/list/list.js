import React from 'react';
import Header from './header.js';
import ItemList from './itemList.js';
import {connect} from 'react-redux';
import {
    checkItem, 
    removeItem
    } from '../store/actions';
import './list.css';

/**
 * a react component rendering
 * @param {props} props
 * @return {ReactComponent}
 */
class List extends React.Component {
    constructor(props) {
        super(props);

        this.handleListClick = this.handleListClick.bind(this);
        this.actions = {
            'delete': (index) => this.props.removeItem(index),
            'check': (index) => this.props.checkItem(index)
        }
    }

    handleListClick(e) {
        const action = e.target.dataset.action
        if (action === undefined) return;
        this.actions[action](e.target.parentNode.dataset.index);
    }

    render() {
        return (
            <div onClick={(e) => this.handleListClick(e)} className="list">
                <Header />
                    <ItemList />
                </div>
        )
    }
}

const mapStateToProps = () => ({});
const mapActionsToProps = {
    removeItem,
    checkItem
};

export default connect(mapStateToProps, mapActionsToProps)(List);