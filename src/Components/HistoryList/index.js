import {Link} from 'react-router-dom'
import './index.css'

const HistoryList = props => {
  const {suggestionDetails} = props

  const {id, domainUrl} = suggestionDetails

  return (
    <li className="list-item">
      <Link className="list-domainUrl" to={`/detail/${id}`}>
        <p className="list-domainUrl">{domainUrl}</p>
      </Link>
    </li>
  )
}

export default HistoryList
