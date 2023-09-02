import langIcon from '../../assets/icons/lang-icon.svg'
import searchIcon from '../../assets/icons/search.svg'
import './header.css'

export default function Header() {
  return (
    <header>
      <div className="header-logo">
        <img src="./images/logo.svg" alt="BEAUTYA logo" />
      </div>
      <nav>
        <ul>
          <li>women make up</li>
          <li>woman skincare</li>
          <li>gifts & sets</li>
          <li>branches</li>
          <li>our brand</li>
        </ul>
      </nav>
      <div className="header-actions">
        <div className="header-actions__search">
          <img src={searchIcon} alt="search icon" />
        </div>
        <div className="header-actions__vertical-line"></div>
        <div className="header-actions__lang">
          <img src={langIcon} alt="language icon" />
          <p>US</p>
          <sub>(EN)</sub>
        </div>
      </div>
    </header>
  )
}
