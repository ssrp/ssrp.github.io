import * as React from "react"
import Parser from 'html-react-parser';
import "./other-projects.scss"

const otherProjectsData = [
  {
  "name": "Shortcut Flow Matching for Speech Enhancement (Submitted to ICASSP 2026)",
  "url": "https://arxiv.org/pdf/2509.21522",
  "description": "Introduced a one-stage, step-invariant flow-matching model for speech enhancement (SFMSE) that enables high-quality denoising in a single step while matching perceptual performance of diffusion-based baselines with ~60 neural evaluations.",
  "used": [
    {"thing": "Diffusion"},
    {"thing": "Flow Matching"},
    {"thing": "Speech Signal Processing"}
  ]
  },
  {
  "name": "Model-as-Loss: A Self-Consistent Training Paradigm (Interspeech 2025)",
  "url": "https://arxiv.org/pdf/2505.21156",
  "description": "Proposed a novel paradigm that uses a model's own encoder as the loss function for speech enhancement, improving performance over traditional handcrafted or deep-feature losses.",
  "used": [
    {"thing": "Deep Learning"},
    {"thing": "Speech Enhancement"}
  ]
  },
  {
    "name": "Similarity Detector in AI datasets (US Patent 2025)",
    "url": "https://patents.google.com/patent/US20230222360A1/en",
    "description": "Created a metric which evaluates statistical similarity between two data sources (for example, \"does your training data match the deployment conditions?\").",
    "used": [
      {"thing": "Python"},
      {"thing": "PyTorch"},
      {"thing": "Deep Learning"},
      {"thing": "Audio Signal Processing"},
    ]
  },
  {
    "name": "LLM-Based Claim Verification System (FEVER @ ACL 2024)",
    "url": "https://aclanthology.org/2024.fever-1.6.pdf",
    "description": "Built a two-stage system for claim verification that improves evidence retrieval using enriched question generation, achieving strong results on the AVeriTeC benchmark.",
    "used": [
      {"thing": "PyTorch"},
      {"thing": "Large Language Models"},
      {"thing": "Prompt Engineering"},
    ]
  },
  {
    "name": "Anomaly Detection System (US Patent 2022)",
    "url": "https://patentimages.storage.googleapis.com/44/4d/94/521700c960e341/US11321620.pdf",
    "description": "End-to-end unsupervised anomaly detection system for CCTV factory videos at Panasonic. Novel ML algorithm for real-time detection of unauthorized access and machine anomalies.",
    "used": [
      {"thing": "Machine Learning"},
      {"thing": "Edge Computing"},
      {"thing": "Computer Vision"},
      {"thing": "Anomaly Detection"},
    ]
  },
  {
    "name": "SubSpectralNet - Acoustic Scene Classification (IEEE ICASSP 2019)",
    "url": "https://arxiv.org/abs/1810.12642",
    "description": "Novel deep learning architecture for acoustic scene classification. Leverages band-wise temporal information achieving 14% relative improvement over DCASE 2018 baseline. <br> <a class='small' href='https://github.com/ssrp/SubSpectralNet'>👨🏻‍💻Github Source Code👨🏻‍💻</a>",
    "used": [
      {"thing": "TensorFlow"},
      {"thing": "PyTorch"},
      {"thing": "Sound Scene Analysis"},
    ]
  },
  {
    "name": "REFUGE Challenge (Medical Image Analysis Journal 2019)",
    "url": "https://www.sciencedirect.com/science/article/pii/S1361841519301100",
    "description": "Top-10 team in REFUGE Challenge for glaucoma assessment from fundus photographs. Developed 2-level model for optic disc localization and cup/disc segmentation.",
    "used": [
      {"thing": "TensorFlow"},
      {"thing": "Medical Imaging"},
      {"thing": "Computer Vision"},
    ]
  },
  {
    "name": "Multi-level Dense Capsule Networks (ACCV 2018 and WiML @ NeuRIPS 2019)",
    "url": "https://arxiv.org/abs/1805.04001",
    "description": "Enhanced Capsule Networks with multiple capsule levels and DenseNet integration. Published in ACCV 2018 and WiML NeurIPS 2019. Achieved state-of-the-art on MNIST with 20-fold reduction in training iterations. <br> <a class='small' href='https://github.com/ssrp/Multi-level-DCNet'>👨🏻‍💻Github Source Code👨🏻‍💻</a>",
    "used": [
      {"thing": "TensorFlow"},
      {"thing": "Deep Learning"},
      {"thing": "Capsule Networks"},
    ]
  },
  {
    "name": "The One Man Show (IEEE ISM 2017)",
    "url": "http://ieeexplore.ieee.org/document/8241637/",
    "description": "Multi-modal system using SVMs for audio and MLP for image processing to create synchronized multi-instrument videos, deployed as an android application.",
    "used": [
      {"thing": "Machine Learning"},
      {"thing": "Multimedia Processing"},
      {"thing": "Audio Processing"},
    ]
  }
]

const FeaturedProjects = () => (
  <section className="section other-projects">
    <div className="section__title">Research Work</div>
    <div className="section__content">
      {
        otherProjectsData.map((project) => (
          <div className="project">
            <div className="project__name">
              <a href={project.url} target="_blank" rel="noreferrer" className="arrow-link">{project.name}</a>
            </div>
            <p>{Parser(project.description)}</p>
            <div className="project__used">
              {
                project.used.map((item) => (
                  <span className="project__used__item">{item.thing}</span>
                ))
              }
            </div>
          </div>
        ))
      }
    </div>
  </section>
)

export default FeaturedProjects
