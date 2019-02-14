import React, { Component } from 'react';
import SubCategoryFormList from './SubCategoryFormList';

class CategoryForm extends Component {

    state = {
        isHidden: false,
        data: [],
    }

    displayToggle (id) {
        this.setState({
            isHidden: !this.state.isHidden
        })
        this.props.callbackFromParent(id, this.state.isHidden);
    }


    render() {
        
        const {
            NM, L, ID
        } = this.props.info;
        
        const state = this.props.myCallback;

        return (      

            <div>
                <li className="clnb_item">
                    <a className="clnb_item_link folder selected" aria-expanded="true" onClick={() => this.displayToggle({ID})}>
                        <span className="clnb_item_tx">{NM}</span>
                        <span className="clnb_item_ic">[-]</span>
                    </a>
                    <ul style={{display:this.state.isHidden? 'block' : 'none' }}>
                        <SubCategoryFormList data={L}/>
                    </ul>
                </li>
            </div>
        );
    }
}

export 
default CategoryForm;