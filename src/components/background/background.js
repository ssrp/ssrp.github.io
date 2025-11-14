import * as React from "react"


const backgroundData = {
  title: "Background",
};
const Background = () => (
  <section className="section background">
    <div className="section__title">{backgroundData.title}</div>
    <div className="section__content">
      <p>
        I'm currently a Lead Audio AI/ML Engineer at&nbsp;
        <a className="underline-link" href="https://www.logitech.com/" target="_blank" rel="noreferrer"> Logitech</a>, where I work on the Echo Cancellation project for our video-conferencing devices. I also help manage the audio pipeline for an upcoming flagship product. In addition, I’ve co-led the development of our Speech Enhancement algorithm for denoising and dereverberation, and I was fortunate to publish a paper on our training method at&nbsp;
        <a className="underline-link" href="https://arxiv.org/abs/2505.21156" target="_blank" rel="noreferrer">Interspeech 2025</a>.
      </p>

      <p>
        Previously, I co-founded&nbsp;
        <strong>Echolair</strong>, a music AI startup that transforms samples into unique variations, and served as Founder-in-Residence at&nbsp;
        <a className="underline-link" href="https://thesoundofai.com/" target="_blank" rel="noreferrer">The Sound of AI Accelerator</a>. I also developed the first AI-powered Acoustic Echo Cancellation system at&nbsp;
        <a className="underline-link" href="https://zoom.us/" target="_blank" rel="noreferrer"> Zoom</a>, successfully deployed in Zoom Rooms, and built NLP models for recommendation systems at&nbsp;
        <a className="underline-link" href="https://shopee.sg/" target="_blank" rel="noreferrer">Shopee</a> serving eight countries.
      </p>

      <p>
        I graduated from&nbsp;
        <a className="underline-link" href="https://www.iitrpr.ac.in/" target="_blank" rel="noreferrer">Indian Institute of Technology Ropar</a> in 2018 and conducted graduate research at&nbsp;
        <a className="underline-link" href="https://www.nus.edu.sg/" target="_blank" rel="noreferrer">National University of Singapore</a> on Computational Sound Scene Analysis, publishing in IEEE ICASSP 2019.
      </p>

      <p>
        <strong>When I'm not at my desk</strong>, I'm composing music and creating original pieces such as&nbsp;
        <a className="underline-link" href="https://www.youtube.com/watch?v=58SS6Z-6Ymc" target="_blank" rel="noreferrer">Child's Play</a>. I'm an ex-member of the NUS Guitar Ensemble and have performed across 14+ countries, combining my technical expertise with artistic expression. I also play badminton, run, and climb rocks.
      </p>
    </div>
  </section>
)

export default Background
