import React from 'react';
import ColorTrack from '../colorTrack/component';

export default class colorGrid extends React.Component {
    constructor(props) {
        super(props);
        this.colorGrid = React.createRef();
        this.state = {colorTracks: 6*40}
    }

    componentDidMount() {
        const thisComponent = this;
        window.addEventListener('scroll', function() {
            var scrollTop = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
            var scrollHeight = (document.documentElement && document.documentElement.scrollHeight) || document.body.scrollHeight;
            var clientHeight = document.documentElement.clientHeight || window.innerHeight;
            var scrolledToBottom = Math.ceil(scrollTop + clientHeight) >= scrollHeight;
            
            if (scrolledToBottom) {
                thisComponent.setState(prevState => ({ colorTracks: prevState.colorTracks + 6}));
            }
        });
    }

    componentWillUnmount() {
        window.removeEventListener('scroll');
    }

    getColorTracks() {
        var numTracks = this.state.colorTracks;
        var tracks = [];
        for (var i = 0; i < numTracks; i++) {
            tracks.push(<ColorTrack key={i} />);
        }
        return tracks;
    }

    render() {
        var tracks = this.getColorTracks();

        return (
            <div className='color-grid' ref={this.colorGrid} >
                {tracks}
            </div>
        );
    }
}