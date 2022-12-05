// Strings
import Configuration from '../../strings/Configuration'
import CssClass from '../../strings/CssClass'
import CssId from '../../strings/CssId'

// Static
import './Footer.css'

export const Footer = () => {
  return (
    <footer>
      <div id={CssId.FooterContent} className={CssClass.BaseMaxWidth}>
        <p>
          &copy;
          {` ${new Date().getUTCFullYear()} ${Configuration.SiteName}`}
        </p>
      </div>
    </footer>
  )
}
