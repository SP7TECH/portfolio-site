import { createRoot } from "react-dom/client";
import "./App.css";

function App() {
  return (
    <>
      <header className="container">
        <div>
          <span className="green-dot"></span>
          <h2>
            SUMIT_PANDEY
            <span>.sh</span>
          </h2>
        </div>

        <nav>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>

            <li>
              <a href="#">Experience</a>
            </li>

            <li>
              <a href="#">Systems</a>
            </li>

            <li>
              <a href="#">Capabilities</a>
            </li>
          </ul>
        </nav>

        <div>
          <div className="sde-4">
            <span className="green-fot-small"></span>
            <p>SDE IV</p>
          </div>

          <button className="mail-cta">spandey19012001@gmail.com</button>
        </div>
      </header>

      <section className="hero">
        <div className="container">
          <div className="hero-row">
            {/* left part  */}
            <div className="">
              <div className="hero-highlight">
                <span className="blut-fot"></span>
                <p>AVAILABLE FOR SENIOR SDE ROLES</p>
              </div>

              <h1>
                Architecting High-Performance Systems & Scalable AI Solutions
              </h1>

              <p className="hero-desc">
                I am Sumit Pandey, a Senior Software Development Engineer (SDE
                IV) with 5+ years of experience building elite frontend
                architectures, distributed backends, and AI-enabled software
                systems. Currently driving key initiatives at Simplilearn.
              </p>

              <div className="hero-cta">
                <div>
                  <p>spandey19012001@gmail.com</p>
                </div>

                <div>
                  <p>+91-9325839163</p>
                </div>

                <div>
                  <p>GitHub</p>
                </div>

                <div>
                  <p>LeetCode</p>
                </div>
              </div>
            </div>

            {/* right part  */}
            <div>
              <div className="json">
                <div className="json-header">
                  <div className="json-header-window">
                    <span className="red"></span>
                    <span className="yellow"></span>
                    <span className="green"></span>
                  </div>

                  <p>sumit-pandey.json</p>
                </div>

                <div className="json-content">
                  <p>
                    <span className="opening-brace">{"{"}</span>
                    <span>"name": "Sumit Pandey",</span>
                    <span>
                      {" "}
                      "title": "Senior Software Development Engineer (SDE IV)",
                    </span>
                    <span> "current_employer": "Simplilearn",</span>
                    <span> "experience_years": "5+",</span>
                    <span>
                      {" "}
                      "stack": ["React", "Next.js", "NestJS", "Node.js"],
                    </span>
                    <span>
                      {" "}
                      "cloud_and_ops": ["AWS", "Terraform", "Jenkins",
                      "Docker"],
                    </span>
                    <span>
                      {" "}
                      "ai_domain": ["LLMs", "RAG", "VectorDBs", "AI Agents"],
                    </span>
                    <span>
                      {" "}
                      "active_status": "Leading 10+ engineers at Simplilearn"
                    </span>
                    <span className="closing-brace">
                      <span>{"{"}</span>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
