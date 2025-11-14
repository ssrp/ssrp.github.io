import * as React from "react"
import "./skills.scss"

const skillsData = {
  "languagesTitle": "Languages",
  "languages": ["Python", "Golang", "JavaScript", "JAVA", "C", "C++", "SQL", "MATLAB"],
  "frameworksTitle": "Frameworks",
  "frameworks": ["PyTorch", "Keras", "TensorFlow", "scikit-learn", "OpenCV", "ONNX", "Librosa", "NumPy/Pandas"],
  "toolsTitle": "Tools",
  "tools": ["Hadoop", "Jupyter Notebook", "MATLAB", "LaTeX", "Git & GitHub", "Docker", "Linux/Unix"],
  "designTitle": "Specializations",
  "design": ["Speech Enhancement", "Acoustic Echo Cancellation", "Generative Speech Synthesis", "Sound Scene Analysis", "Music Information Retrieval", "Face Analytics", "Multimedia Processing", "Anomaly Detection"],
}

const Skills = () => (
  <section className="section skills">
    <div className="section__title">Skills</div>
    <div className="section__content">
      <div className="skillz">
        <div className="skillz__category">
          <div className="skillz__category__label">{skillsData.languagesTitle}</div>
          <ul>
            {skillsData.languages.map((data) => <li className="skillz__category__item">{data}</li>)}
          </ul>
        </div>
        <div className="skillz__category">
          <div className="skillz__category__label">{skillsData.frameworksTitle}</div>
          <ul>
            {skillsData.frameworks.map((data) => <li className="skillz__category__item">{data}</li>)}
          </ul>
        </div>
        {/* <div className="skillz__category">
          <div className="skillz__category__label">{skillsData.toolsTitle}</div>
          <ul>
            {skillsData.tools.map((data) => <li className="skillz__category__item">{data}</li>)}
          </ul>
        </div> */}
        <div className="skillz__category">
          <div className="skillz__category__label">{skillsData.designTitle}</div>
          <ul>
            {skillsData.design.map((data) => <li className="skillz__category__item">{data}</li>)}
          </ul>
        </div>
      </div>
    </div>
  </section>
)

export default Skills
