import React from 'react';

import { Grid } from '@material-ui/core';

import { SearchBar, VideoDetail, VideoList } from './components';

import youtube from './api/youtube';

class App extends React.Component {
    state = {
        videos: [],
        selectedVideo: null,
    }

    // this is for the user can click on the list of videos
    onVideoSelect = (video) => {
        this.setState({ selectedVideo: video });
    }

    handleSubmit = async (searchTerm) => {
        //to see what this do, look on SearchBar
        const response = await youtube.get('search', {
            params: {
                //this is for the search of the videos
                part: 'snippet',  
                // to the application don't be to slow, we are returning just the first 5 videos
                maxResults: 5,
                key: 'AIzaSyDT8IBnkQ-qJDCCFZVV7OKKAefZsYUuNN0',
                //ps: I deactivated this key, but you can get one in Google APIs
                q: searchTerm,
              }
        });

        this.setState({ videos: response.data.items, selectedVideo: response.data.items[0] });
    }

    render(){
        const { selectedVideo, videos } = this.state;

        return (
            /* I could create another file for the style, but as this application 
               have almost no style, i will do it here instead of creating a new 
               file for that
            */
            <Grid justify="center" container spacing={10}>
                <Grid item xs={12}>
                    <Grid container spacing={10}>
                        <Grid item xs={12}>
                            {/* Here will be the search bar*/}
                            <SearchBar onFormSubmit={this.handleSubmit} />
                        </Grid>
                        <Grid item xs={8}>
                            {/* Here will be the video detail*/}
                            <VideoDetail Video={selectedVideo}/>
                        </Grid>
                        <Grid item xs={4}>
                            {/* Here will be the video list*/}
                            <VideoList videos={videos} onVideoSelect={this.onVideoSelect}/>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

export default App;