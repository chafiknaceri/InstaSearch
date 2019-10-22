import React from 'react';
import './searchBar.css';
class SearchBar extends React.Component{
    state = {term:''};
    constructor(props){
        super(props);
    }

    onFormSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state.term);
    };
    showresultCount = ()=>{
        if (this.props.images.length>0 ){
            return <h3>{this.props.images.length}  Results Found for: {this.state.term}</h3>
        }else{
            return <h4>Please Search for an image on the Search Bar</h4>
        }
    }
    render(){
        return(
            
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <h2 style={{textAlign:"center"}}>InstaSearch</h2>
                        <input className="search" type="text" placeholder="Search For an image..."
                        value={this.state.term}
                        onChange={ e => this.setState({term:e.target.value})}  />
                    </div>
                    {this.showresultCount()}
                   
                </form>
            </div>
        );
    }
}

export default SearchBar;