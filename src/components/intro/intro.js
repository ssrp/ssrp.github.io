import * as React from "react"
import "./intro.scss"


const introData = {
  title: "Hello! ",
  beforeName: "I'm ",
  name: "Saisamarth Rajesh (Sai) Phaye",
  afterName: ", I build AI for real-time audio, speech, and sound understanding — bringing intelligence & clarity to sound ",
  contact: "Get in touch ",
  email: "phaye.samarth@gmail.com",
  mailTo: "mailto:phaye.samarth@gmail.com",
};
const Intro = () => {
  const [isHovering, setIsHovering] = React.useState(false);
  const [profileImage, setProfileImage] = React.useState("");
  
  const onMouseOver = _ => {
    setIsHovering(true);
  };
  const onMouseOut = _ => {
    setIsHovering(false);
  };

  // Randomly select a profile image on component mount
  React.useEffect(() => {
    const randomImageNumber = Math.floor(Math.random() * 8) + 1; // Random number 1-8
    setProfileImage(`/images/profiles/${randomImageNumber}.jpg`);
  }, []);

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(introData.email).then(() => {
      alert("Email copied! (Because mailto is annoying.)");
    }).catch(() => {
      // Fallback for older browsers
      const textArea = document.createElement("textarea");
      textArea.value = introData.email;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      alert("Email copied! (Because mailto is annoying.)");
    });
  };

  React.useEffect(() => {
    setTimeout(() => {
      setIsHovering(true);
      setTimeout(() => {
        setIsHovering(false);
      }, 2000);
    }, 1000);
  }, []);

  return <header className="intro">
    <div className="intro__content">
      <div className="intro__text">
        <h1 className="intro__hello">{introData.title}
          <span className={isHovering ? "emoji wave-hand animated wave" : "emoji wave-hand animated"} onMouseOver={onMouseOver} onMouseOut={onMouseOut} onFocus={onMouseOver} onBlur={onMouseOut} role="button" tabIndex={0} aria-label="wave hand"></span>
        </h1>

        <h2 className="intro__tagline">{introData.beforeName}
          <span className="name">{introData.name}</span>{introData.afterName}
          <span className="emoji technologist"></span>
        </h2>

        <h3 className="intro__contact">
          <span>{introData.contact}</span>
          <span className="emoji pointer"></span>
          <span>
          <button onClick={copyEmailToClipboard}
             className="highlight-link email-button">{introData.email}</button>
        </span>
        </h3>
      </div>
      
      <div className="intro__image">
        <img src={profileImage} alt="404: a thousand words lost" className="intro__profile-pic" />
      </div>
    </div>
  </header>
};

export default Intro
