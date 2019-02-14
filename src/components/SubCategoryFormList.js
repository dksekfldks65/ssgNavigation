import React, { Component } from 'react';
import SubCategoryForm from './SubCategoryForm';

class SubCategoryFormList extends Component {

    static defaultProps = {
        data:[]
    }

    render() {

        const {data} =this.props;
        const list = data.map(
            info => (<SubCategoryForm info={info} key={info.ID}/>)
        );

        return (
            <div>
                {list}
            </div>
        );
    }
}

export default SubCategoryFormList;