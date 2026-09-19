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

      <section className="stats">
        <div className="container">
          <div className="card-stats">
            <div>
              <h2>1M+</h2>
              <h6>Monthly Active Users</h6>
              <p>
                High-traffic consumer pages optimized for Simplilearn's main
                platform.
              </p>
            </div>

            <div>
              <h2>80 / 100</h2>
              <h6>Lighthouse Score</h6>
              <p>
                Engineered a major performance overhaul, rising from an initial
                score of 33.
              </p>
            </div>

            <div>
              <h2>40%</h2>
              <h6>Manual Effort Reduced</h6>
              <p>Architected an automated quotation-to-invoice workflow.</p>
            </div>

            <div>
              <h2>10+ Eng</h2>
              <h6>Engineering Leadership</h6>
              <p>
                Direct SDE IV leadership, mentoring, and technical architecture
                ownership.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="deep-dives">
        <div className="container">
          <h6>
            &dash;<span></span>ENGINEERING DEEP DIVES
          </h6>
          <h2>Production Systems & Enterprise Solutions</h2>
          <p>
            A selective view of architectures built with solid methodologies,
            verified against exact specifications.
          </p>

          <div className="card-container">
            {/* first  */}
            <div className="deep-dive-card">
              <span>FRONTEND PLATFORM ARCHITECTURE</span>
              <h3>Preview-Enabled Enterprise Next.js/NestJS CMS</h3>
              <p>
                Designed and implemented a headless CMS integration enabling
                live content drafts, rich template schemas, publication
                controls, and automated deployment structures for 70+ users.
              </p>

              <div>
                <span>some icon</span>
                <p>
                  Eliminated development dependency for publishing content,
                  speeding cycles by 80%.
                </p>
              </div>

              <div className="chips">
                <div className="chip">
                  <span className="blue-dot"></span>
                  <p>Next.js</p>
                </div>

                <div className="chip">
                  <span className="blue-dot"></span>
                  <p>NestJS</p>
                </div>

                <div className="chip">
                  <span className="blue-dot"></span>
                  <p>Tailwind CSS</p>
                </div>

                <div className="chip">
                  <span className="blue-dot"></span>
                  <p>S3</p>
                </div>

                <div className="chip">
                  <span className="blue-dot"></span>
                  <p>Cloudfront</p>
                </div>
              </div>
            </div>

            {/* second  */}
            <div className="deep-dive-card">
              <span>REAL-TIME MICROSERVICES</span>
              <h3>Socket.io & RabbitMQ Notification Engine</h3>
              <p>
                Constructed a high-throughput, horizontally scalable messaging
                pipeline. Features robust connection fallback mechanisms, atomic
                delivery rules, and decoupled processing channels.
              </p>

              <div>
                <span>some icon</span>
                <p>
                  Guaranteed sub-100ms push dispatching under massive simulation
                  loads.
                </p>
              </div>

              <div className="chips">
                <div className="chip">
                  <span className="blue-dot"></span>
                  <p>Node.js</p>
                </div>

                <div className="chip">
                  <span className="blue-dot"></span>
                  <p>Socket.io</p>
                </div>

                <div className="chip">
                  <span className="blue-dot"></span>
                  <p>RabbitMQ</p>
                </div>

                <div className="chip">
                  <span className="blue-dot"></span>
                  <p>Express.js</p>
                </div>

                <div className="chip">
                  <span className="blue-dot"></span>
                  <p>Redis</p>
                </div>
              </div>
            </div>

            {/* third  */}
            <div className="deep-dive-card">
              <span>BUSINESS SOLUTIONS & INFRASTRUCTURE</span>
              <h3>Automated Quotation-to-Invoice Workflow</h3>
              <p>
                Engineered full stack automation mapping quotations cleanly to
                invoicing, utilizing the MVVM architectural design pattern to
                optimize React state transitions.
              </p>

              <div>
                <span>some icon</span>
                <p>
                  Reduced operational manual invoice overhead by 40% globally.
                </p>
              </div>

              <div className="chips">
                <div className="chip">
                  <span className="blue-dot"></span>
                  <p>React</p>
                </div>

                <div className="chip">
                  <span className="blue-dot"></span>
                  <p>Material UI</p>
                </div>

                <div className="chip">
                  <span className="blue-dot"></span>
                  <p>Node.js</p>
                </div>

                <div className="chip">
                  <span className="blue-dot"></span>
                  <p>MongoDB</p>
                </div>

                <div className="chip">
                  <span className="blue-dot"></span>
                  <p>MVVM</p>
                </div>
              </div>
            </div>

            <div className="deep-dive-card">
              <span>FINANCIAL OPERATIONS</span>
              <h3>Prepaid Card Issuance & Accounts Payable Module</h3>
              <p>
                Owned Vue.js core design for Pazy's expense management platform.
                Delivered secure transaction interfaces, custom reporting
                modules, and granular access rule definitions.
              </p>

              <div>
                <span>some icon</span>
                <p>
                  Secured corporate financial flows across highly regulated
                  account schemes.
                </p>
              </div>

              <div className="chips">
                <div className="chip">
                  <span className="blue-dot"></span>
                  <p>Vue.js</p>
                </div>

                <div className="chip">
                  <span className="blue-dot"></span>
                  <p>Nuxt</p>
                </div>

                <div className="chip">
                  <span className="blue-dot"></span>
                  <p>REST APIs</p>
                </div>

                <div className="chip">
                  <span className="blue-dot"></span>
                  <p>System Design</p>
                </div>

                <div className="chip">
                  <span className="blue-dot"></span>
                  <p>Node.js</p>
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
