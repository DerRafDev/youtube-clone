export { default as SearchBar } from './SearchBar';
export { default as VideoDetail } from './VideoDetail';
export { default as VideoList } from './VideoList';

/* 
    Imagine that the Application have to import like 30 components,
    instead of having like for example: 
    import SearchBar from './components/SearchBar';
    import VideoDetail from './components/VideoDetail';
    import VideoList from './components/VideoList';

    this index.js is for unify all in one import for more simplicity:
    
    import { SearchBar, VideoDetail, videoList } from './components';

    Ps: When you have index.js you don't need to specify like 
    import SearchBar from './components/index';

    You can write just as before.
*/