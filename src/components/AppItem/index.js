// Write your code here
import './index.css'

const AppItem = props => {
  const {appsList} = props
  const {appName, imageUrl} = appsList

  return (
    <li className="app-item-container">
      <img src={imageUrl} className="image" alt={appName} />
      <p className="name">{appName}</p>
    </li>
  )
}

export default AppItem
