import {useNavigate, useParams} from 'react-router-dom'

import './index.css'

const LogDetail = props => {
  const params = useParams()
  const navigate = useNavigate()
  const {updateList, initialHistoryList} = props

  const detailData = initialHistoryList.filter(
    item => item.id === +params.logId,
  )

  const onDeleteHistory = () => {
    const result = window.confirm('Want to delete?') // eslint-disable-line no-alert

    if (result) {
      updateList(params.logId)
      navigate('/')
    }
  }
  return (
    <div className="detail-page">
      <h1 className="detail-page-heading">Browsing URL Detail</h1>
      <div className="detail-container">
        <div className="time-logo-container">
          <p className="time">
            {`${detailData[0].timeAccessed}, ${detailData[0].date}`}
          </p>
          <div className="logo-name-container">
            <img
              alt="domain logo"
              className="icon"
              src={detailData[0].logoUrl}
            />
            <p className="title">{detailData[0].title}</p>
            <p className="domainUrl">{detailData[0].domainUrl}</p>
          </div>
        </div>

        <button
          testid="delete"
          type="button"
          className="delete-button"
          onClick={onDeleteHistory}
        >
          <img
            alt="delete"
            className="delete-icon"
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          />
        </button>
      </div>
    </div>
  )
}

export default LogDetail
