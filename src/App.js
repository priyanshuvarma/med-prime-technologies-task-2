import {useState} from 'react'
import {Route, Routes} from 'react-router-dom'
import BrowserHistory from './Components/BrowserHistory'
import LogDetail from './Components/LogDetail'
import './App.css'

const initialHistoryList = [
  {
    id: 0,
    timeAccessed: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
    title: 'Instagram',
    domainUrl: 'https://www.instagram.com/accounts/login/',
    date: '2 July 2022',
  },
  {
    id: 1,
    timeAccessed: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
    title: 'Twitter. It’s what’s happening / Twitter',
    domainUrl: 'https://twitter.com/explore',
    date: '2 July 2022',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook – log in or sign up',
    domainUrl: 'https://www.facebook.com/watch/live/?ref=live_delegate',
    date: '1 July 2022',
  },
  {
    id: 3,
    timeAccessed: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
    title: 'LinkedIn: Log In or Sign Up',
    domainUrl: 'https://www.linkedin.com/company/linkedin',
    date: '1 July 2022',
  },
  {
    id: 4,
    timeAccessed: '04:00 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
    title: 'Hashnode: Everything you need to start blogging as a developer!',
    domainUrl: 'https://hashnode.com/onboard',
    date: '1 July 2022',
  },
  {
    id: 5,
    timeAccessed: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
    title: 'GitHub: Where the world builds software · GitHub',
    domainUrl: 'https://github.com/priyanshuvarma/Assignment4-IPL-Dashboard',
    date: '1 July 2022',
  },

  {
    id: 6,
    timeAccessed: '02:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'https://reactjs.org/docs/create-a-new-react-app.html',
    date: '31 June 2022',
  },
  {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'https://stackoverflow.com/users/17523322/priyanshu-varma',
    date: '31 June 2022',
  },

  {
    id: 8,
    timeAccessed: '09:25 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
    title: 'Gmail',
    domainUrl: 'https://www.gmail.com/mail/help/intl/en/promos/blue/',
    date: '31 June 2022',
  },
  {
    id: 9,
    timeAccessed: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    title: 'Google',
    domainUrl: 'google.com',
    date: '25 June 2022',
  },
]

const App = () => {
  const [historyList, setHistoryList] = useState(initialHistoryList)

  const deleteHistory = id => {
    // console.log(`id : ${id}`)
    // const updatedList = historyList.filter(item => item.id !== +id)
    // console.log(updatedList)
    // setHistoryList(updatedList)
    // console.log(historyList)

    setHistoryList(prevState => prevState.filter(item => item.id !== +id))
  }

  return (
    <Routes>
      <Route
        exact
        path="/"
        element={<BrowserHistory initialHistoryList={historyList} />}
      />
      <Route
        path="/detail/:logId"
        element={
          <LogDetail
            initialHistoryList={historyList}
            updateList={deleteHistory}
          />
        }
      />
    </Routes>
  )
}

export default App
