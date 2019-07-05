import React from 'react';
import Item from './item.js';
/**
 * Render a list of items
 * @param {Props} props 
 * @return {Array} of reactComponents
 */
export default function ItemList(props) {
    return props.data.map((item) => {
        return <Item key={item.index} data={item} />
    })
};