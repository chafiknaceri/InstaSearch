import React from 'react';
import axios from 'axios';

import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';
import AddMore from './AddMore';

class App extends React.Component {
    state = {images : [] };
    
     onSearchSubmit = async (term) => {
        const response = await unsplash.get('/search/photos',{
            params :{ query : term,per_page:40}
        });
        console.log(response.data.results);
        this.setState({images: response.data.results});
        
               
    }
    componentDidMount(){
        
    }
    render(){

        
        return(
            <div className="ui container" style={{marginTop:'10px'}}>
        
            <SearchBar onSubmit={this.onSearchSubmit}  images={this.state.images}/>
            <ImageList images={this.state.images}/>
            
            
            </div>
        );

}
}

export default App;