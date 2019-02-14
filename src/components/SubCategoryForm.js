import React, { Component } from 'react';

class SubCategoryForm extends Component {
    
    showSCategoryId = (data) => {
        console.log(data);
    }   
    
    render() {

        const {
            ID, NM
        } = this.props.info;

        return (
            <div>
                <li className="clnb_sub_item" onClick={ () => this.showSCategoryId({ID})}>
                    <a className="clnb_item_link">
                        <span className="clnb_item_tx">{NM}</span>
                    </a>
                </li>
            </div>
        );
    }
}

export default SubCategoryForm;