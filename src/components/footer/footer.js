import * as React from "react"
import "./footer.scss"

const socialData = [
  {
    "title": "email",
    "url": "phaye.samarth@gmail.com",
    "isEmail": true
  },
  {
    "title": "linkedin",
    "url": "https://www.linkedin.com/in/ssrp/"
  },
  {
    "title": "github",
    "url": "https://github.com/ssrp/"
  },
  {
    "title": "youtube",
    "url": "https://www.youtube.com/channel/UCGx6F_XKD2JS-NJQl7liszw"
  },
  {
    "title": "scholar",
    "url": "https://scholar.google.com/citations?hl=sv&user=Ds047PsAAAAJ"
  },
]
const Footer = () => {
  const copyEmailToClipboard = (email) => {
    navigator.clipboard.writeText(email).then(() => {
      alert("Email copied! (Because mailto is annoying.)");
    }).catch(() => {
      // Fallback for older browsers
      const textArea = document.createElement("textarea");
      textArea.value = email;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      alert("Email copied! (Because mailto is annoying.)");
    });
  };

  return (
    <footer className="footer">
      <div className="footer__copyright">
        <div className="top">
          <span>Portfolio by Sai, 2025</span>
        </div>
        <div className="bottom credits">
          <small>
            Coded by
            <a href="https://github.com/skavinvarnan/kavin.varnan.me" rel="noreferrer" target="_blank"> Kavin Varnan</a>
            &nbsp;<br></br>
            Designed by
            <a href="https://github.com/bchiang7/bchiang7.github.io" rel="noreferrer" target="_blank"> Brittany Chiang</a>
          </small>
        </div>
      </div>
      <div className="footer__links">
        {
          socialData.map((social) => (
            social.isEmail ? (
              <button
                key={social.title}
                onClick={() => copyEmailToClipboard(social.url)}
                className="footer-email-button"
                title={social.title}
              >
                <span className="text">{social.title}</span>
              </button>
            ) : (
              <a
                key={social.title}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                title={social.title}
              >
                <span className="text">{social.title}</span>
              </a>
            )
          ))
        }
      </div>
    </footer>
  )
}

export default Footer
