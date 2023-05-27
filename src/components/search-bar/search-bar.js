import './search-bar.css';

const SearchBar = ({location, setLocation, searchLocation}) => {
    return(
        <div className="search">
            <div className="search-container">
                <input
                value={location}
                onChange={event => setLocation(event.target.value)}
                placeholder="Enter the location"
                onKeyPress={searchLocation} 
                type="text" />
                <i className="fa-solid fa-magnifying-glass"></i>
            </div>
        </div>
)
} 

export default SearchBar;