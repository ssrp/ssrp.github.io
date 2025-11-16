import * as React from "react"


const backgroundData = {
  title: "Background",
};
const Background = () => (
  <section className="section background">
    <div className="section__title">{backgroundData.title}</div>
    <div className="section__content">
      <p>
        I'm a Lead Audio AI/ML Engineer at&nbsp;
        <a className="underline-link" href="https://www.logitech.com/en-eu/products/video-conferencing.html" target="_blank" rel="noreferrer"> Logitech</a>, where I work on Echo Cancellation for our video-conferencing devices and manage the audio pipeline for an upcoming flagship product. I’ve also co-led the development of a Speech Enhancement algorithm for real-time denoising and dereverberation, and our training approach was recently published at&nbsp;
        <a className="underline-link" href="https://arxiv.org/abs/2505.21156" target="_blank" rel="noreferrer">Interspeech 2025</a>.
      </p>

      <p>
        Previously, I co-founded&nbsp;
        <strong>Echolair</strong>, a music AI startup that transforms samples into unique variations, and served as Founder-in-Residence at&nbsp;
        <a className="underline-link" href="https://thesoundofai.com/" target="_blank" rel="noreferrer">The Sound of AI Accelerator</a>. I also co-developed the first AI-powered Acoustic Echo Cancellation system at&nbsp;
        <a className="underline-link" href="https://zoom.us/" target="_blank" rel="noreferrer"> Zoom</a>, successfully deployed in Zoom Rooms, and built NLP models for recommendation systems at&nbsp;
        <a className="underline-link" href="https://shopee.sg/" target="_blank" rel="noreferrer">Shopee</a> serving eight countries.
      </p>

      <p>
        I graduated from&nbsp;
        <a className="underline-link" href="https://www.iitrpr.ac.in/" target="_blank" rel="noreferrer">Indian Institute of Technology Ropar</a> in 2018 and conducted graduate research at&nbsp;
        <a className="underline-link" href="https://www.nus.edu.sg/" target="_blank" rel="noreferrer">National University of Singapore</a> on Computational Sound Scene Analysis, publishing in&nbsp;
        <a className="underline-link" href="https://arxiv.org/abs/1810.12642" target="_blank" rel="noreferrer">IEEE ICASSP 2019</a>.
      </p>

      <p>
        <strong>When I'm not at my desk</strong>, I enjoy composing music and creating original pieces such as&nbsp;
        <a className="underline-link" href="https://www.youtube.com/watch?v=58SS6Z-6Ymc" target="_blank" rel="noreferrer">Child's Play</a>. 
        I'm also a former member of the NUS Guitar Ensemble. Outside of music, I’ve traveled to over 23 countries, and I like to play badminton, run, and climb rocks.
      </p>
    </div>
  </section>
)

export default Background
