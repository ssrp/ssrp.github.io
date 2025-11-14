import * as React from "react"
import "./featured-projects.scss"

const FeaturedProjects = () => (
  <section className="section featured-projects">
    <div className="section__title">Featured Projects</div>
    <div className="section__content">
      <div className="project logitech-audio">
        <figure className="project__pic">
          <iframe
            src="https://www.youtube.com/embed/1jkHToiYSIQ?si=72s1vwtJTkD7TEpA&start=4062"
            title="Not Final Cut Pro - AI Video Mashup"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen>
          </iframe>
        </figure>
        <figcaption className="project__caption">
          <div className="project__name">
            <a href="https://youtu.be/1jkHToiYSIQ?si=OUGdFJZhF4QAEUTW&t=3960" rel="noreferrer" target="_blank">Not Final Cut Pro</a>
          </div>
          <p>Winner of 'Most Interesting Use of AI' at 1st Sound of AI Hackathon 2022. AI-based video mashup application that creates mashup videos using favorite videos and songs.</p>
        </figcaption>
      </div>

      {/* <div className="project echolair">
        <figure className="project__pic">
          <a href="#" rel="noreferrer" target="_blank">
            <img src="https://ssrp.github.io/img/featured/music/childs-play.png" alt="Echolair Music AI Startup"/>
          </a>
        </figure>
        <figcaption className="project__caption">
          <div className="project__name">
            <a href="#" rel="noreferrer" target="_blank">Echolair - Music AI Startup</a>
          </div>
          <p>Co-founded Echolair, transforming music samples into countless unique variations. Developed fast AI models generating variations in 0.35s on common laptops, empowering music creators to break constraints of their sound libraries.</p>
        </figcaption>
      </div> */}

      {/* <div className="project zoom-aec">
        <figure className="project__pic">
          <a href="https://image-ppubs.uspto.gov/dirsearch-public/print/downloadPdf/11321620" rel="noreferrer" target="_blank">
            <img src="https://ssrp.github.io/img/featured/aec/aec-system.png" alt="AI-Powered AEC at Zoom"/>
          </a>
        </figure>
        <figcaption className="project__caption">
          <div className="project__name">
            <a href="https://image-ppubs.uspto.gov/dirsearch-public/print/downloadPdf/11321620" rel="noreferrer" target="_blank">AI-Powered AEC at Zoom</a>
          </div>
          <p>Developed the first AI-powered Acoustic Echo Cancellation system for Zoom platform, successfully deployed in Zoom Rooms for DTEN meetings. Includes US Patent for novel neural networks handling real-time meeting scenarios.</p>
        </figcaption>
      </div> */}
    </div>
  </section>
)

export default FeaturedProjects
