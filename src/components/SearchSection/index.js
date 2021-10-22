import {BsSearch} from 'react-icons/bs'
import './index.css'

const SearchSection = props => {
  const onEnterSearchInput = event => {
    const {enterSearchInput} = props
    if (event.key === 'Enter') {
      enterSearchInput()
    }
  }
  const onClickSearchButton = () => {
    const {enterSearchInput} = props
    enterSearchInput()
  }
  const onChangeSearchInput = event => {
    const {changeSearchInput} = props
    changeSearchInput(event.target.value)
  }
  const renderSearchContainer = () => {
    const {searchInput} = props
    return (
      <div className="search-input-container">
        <input
          value={searchInput}
          type="search"
          placeholder="Search"
          className="search-input"
          onChange={onChangeSearchInput}
          onKeyDown={onEnterSearchInput}
        />
        <div className="search-icon-container">
          <button
            type="button"
            testid="searchButton"
            className="search-button"
            onClick={onClickSearchButton}
          >
            <BsSearch className="search-icon" />
          </button>
        </div>
      </div>
    )
  }

  return <div className="search-section">{renderSearchContainer()}</div>
}

export default SearchSection
