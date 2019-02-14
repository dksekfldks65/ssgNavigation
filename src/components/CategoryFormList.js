import React, { Component } from 'react';
import CategoryForm from './CategoryForm';

class CategoryFormList extends Component {

    static defaultProps = {
        data:[]
    }

    state = {
        listDataId: null,
        childState: null
    };    

    myCallback = (id, dataFromChild) => {
        this.setState({ listDataId : id });
        this.setState({ childState: dataFromChild });
    }

    render() {
        const {data} =this.props;
        const stat = this.state.listDataId;
        const list = data.map(
            info => 
            {  
                if(this.state.listDataId === info.ID){
                    return <CategoryForm info={info} key={info.ID} callbackFromParent={this.myCallback}/>
                }
                return <CategoryForm info={info} key={info.ID} callbackFromParent={this.myCallback}/>
            }
        );

        return (
            <div>
                {list}
            </div>
        );
    }
}

export default CategoryFormList;