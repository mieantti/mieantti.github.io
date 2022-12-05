// Strings
import Configuration from '../../strings/Configuration'
import CssClass from '../../strings/CssClass'
import CssId from '../../strings/CssId'

// Static
import './Navigation.css'

export const Navigation = () => {
  return (
    <header>
      <nav id={CssId.Navigation} className={CssClass.BaseMaxWidth}>
        <h1 id={CssId.NavigationH1}>
          <p>{Configuration.SiteName}</p>
        </h1>
      </nav>
    </header>
  )
}
