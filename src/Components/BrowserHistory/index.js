import {useState} from 'react'
import './index.css'
import HistoryList from '../HistoryList'

const BrowserHistory = props => {
  const [searchInput, setSearchInput] = useState('')

  const {initialHistoryList} = props

  const onChangeSearchInput = event => {
    setSearchInput(event.target.value)
  }

  const listItem = () => {
    const searchResults = initialHistoryList.filter(eachSuggestion =>
      eachSuggestion.title.toLowerCase().includes(searchInput.toLowerCase()),
    )

    const lengthOfSearchResults = searchResults.length

    const lengthOfList = initialHistoryList.length
    if (lengthOfList === 0 || lengthOfSearchResults === 0) {
      return <p className="empty-view">There is no history to show</p>
    }

    return (
      <ul className="suggestions-list">
        {searchResults.map(eachSuggestion => (
          <HistoryList
            key={eachSuggestion.id}
            suggestionDetails={eachSuggestion}
          />
        ))}
      </ul>
    )
  }

  return (
    <div className="app-container">
      <div className="header-container">
        <img
          alt="app logo"
          className="history"
          src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png "
        />

        <div className="search-container">
          <div className="search-icon-bg">
            <img
              alt="search"
              className="search-icon"
              src="https://assets.ccbp.in/frontend/react-js/search-img.png "
            />
          </div>
          <div className="search-input-bg">
            <input
              type="search"
              className="search-input"
              placeholder="Search history"
              onChange={onChangeSearchInput}
              value={searchInput}
            />
          </div>
        </div>
      </div>
      {listItem()}
    </div>
  )
}

export default BrowserHistory
