import React, { Component } from 'react';
import CategoryFormList from './components/CategoryFormList';

class App extends Component {
  
  constructor(){
    super();
    this.state={
      loading: true,
      categoryInfo: null,
    }
  }

  async componentDidMount() {
    const url      = "http://dev-static.ssgcdn.com/common/ui/json/ctg/ctg_6005_mo.json";
    const response = await fetch(url);
    const data     = await response.json();
    this.setState({categoryInfo: data.CTG, loading:false})
  };

  render() {

    if(this.state.loading){
      return <div>loading..</div>
    }

    if(!this.state.categoryInfo){
      return <div>Didn't get a data</div>
    }

    return (
    <div>
      <nav id="_clnb_nav" className="clnb_nav">
        <ul role="navigation" aria-label="공통 카테고리">
          <CategoryFormList data={this.state.categoryInfo}/>
        </ul>
      </nav>
    </div>
    );
  }
}

export 
default App;