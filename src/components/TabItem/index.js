// Write your code here
import './index.css'

const TabItem = props => {
  const {tabsList, changeTab, isActive} = props
  const {tabId, displayText} = tabsList

  const activeTab = isActive ? 'tab-btn active' : 'tab-btn'

  const onChangeTab = () => {
    changeTab(tabId)
  }

  return (
    <li className="tab-item-container">
      <button type="button" className={activeTab} onClick={onChangeTab}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
