import * as React from "react"
import "./experience.scss"


const experienceData = [
  {
    "company": "Logitech Singapore",
    "url": "https://www.logitech.com/",
    "time": "Jan 2024 - Present",
    "position": "Lead Audio AI/ML Engineer"
  },
  {
    "company": "Echolair",
    "url": "#",
    "time": "April 2023 - Jan 2024",
    "position": "Co-Founder & CTO"
  },
  {
    "company": "The Sound of AI Accelerator",
    "url": "https://thesoundofai.com/",
    "time": "April 2023 - July 2023",
    "position": "Founder-in-Residence"
  },
  {
    "company": "Teredo Analytics Pte Ltd",
    "url": "https://teredo.sg/",
    "time": "July 2023 - Dec 2023",
    "position": "Audio AI Engineer (Founding Team)"
  },
  {
    "company": "Audio Collaboration Company [NDA]",
    "url": "#",
    "time": "April 2023 - June 2023",
    "position": "AI Consultant"
  },
  {
    "company": "Zoom Video Communications",
    "url": "https://zoom.us/",
    "time": "Oct 2021 - June 2023",
    "position": "Audio AI Engineer"
  },
  {
    "company": "Shopee Singapore",
    "url": "https://shopee.sg/",
    "time": "July 2020 - Sept 2021",
    "position": "Machine Learning Research Engineer"
  },
  {
    "company": "Panasonic Industrial Devices Singapore",
    "url": "https://industrial.panasonic.com/",
    "time": "July 2019 - June 2020",
    "position": "Machine Learning Research Engineer"
  },
  {
    "company": "National University of Singapore",
    "url": "https://www.nus.edu.sg/",
    "time": "Aug 2018 - June 2019",
    "position": "Graduate Researcher"
  },
  {
    "company": "Indian Institute of Technology Ropar",
    "url": "https://www.iitrpr.ac.in/",
    "time": "July 2014 -  2018",
    "position": "B.Tech. in Computer Science"
  },
]

const Experience = () => (
  <section className="section experience">
    <div className="section__title">Experience</div>
    <div className="section__content">
      <div className="jobs">
        {
          experienceData.map((data) => (
            <div className="job">
              <div className="time-place">
                <div className="job__company">
                  <a href={data.url} target="_blank" rel="noreferrer">{data.company}</a>
                </div>
                <div className="job__time">{data.time}</div>
              </div>
              <div className="job__position">{data.position}</div>
            </div>
          ))
        }
      </div>

      {/* <a href="https://ssrp.github.io/docs/SaiSamarthRPhaye_Resume.pdf" target="_blank" rel="noreferrer" className="arrow-link">View My Resume</a> */}
    </div>
  </section>
)

export default Experience
