import { createRoot } from "react-dom/client";
import "./App.css";

function App() {
  return (
    <>
      <header>
        <div className="container">
          <div className="sp7tech">
            <div className="green-dot"></div>
            <h2>
              SUMIT_PANDEY
              <span>.sh</span>
            </h2>
          </div>

          <nav>
            <ul>
              <li>
                <a className="active" href="#home">
                  Home
                </a>
              </li>

              <li>
                <a href="#experience">Experience</a>
              </li>

              <li>
                <a href="#systems">Systems</a>
              </li>

              <li>
                <a href="#capabilities">Capabilities</a>
              </li>
            </ul>
          </nav>

          <div className="header-ctas">
            <div className="sde-4">
              <span className="green-dot-small"></span>
              <p>SDE IV</p>
            </div>

            <button className="mail-cta">spandey19012001@gmail.com</button>
          </div>
        </div>
      </header>

      <section className="hero" id="home">
        <div className="container">
          <div className="hero-row">
            {/* left part  */}
            <div className="left">
              <div className="chip-highlight">
                <span></span>
                <p>AVAILABLE FOR SENIOR SDE ROLES</p>
              </div>

              <h1 className="font-outfit">
                Architecting High-Performance Systems &amp; Scalable AI
                Solutions
              </h1>

              <p className="hero-desc font-outfit">
                I am Sumit Pandey, a{" "}
                <span>Senior Software Development Engineer (SDE IV)</span> with
                5+ years of experience building elite frontend architectures,
                distributed backends, and AI-enabled software systems. Currently
                driving key initiatives at Simplilearn.
              </p>

              <div className="hero-cta">
                <a href="mailto:spandey19012001@gmail.com">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <rect
                      x="2.5"
                      y="4.5"
                      width="19"
                      height="15"
                      rx="2"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                    />
                    <path
                      d="M3 6.5l9 6 9-6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                    />
                  </svg>
                  <p>spandey19012001@gmail.com</p>
                </a>

                <a href="tel:+919325839163">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      d="M6.5 3.5h3l1.5 4-2 1.5a12 12 0 0 0 6 6l1.5-2 4 1.5v3a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 4.5 5.7 2 2 0 0 1 6.5 3.5z"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <p>+91-9325839163</p>
                </a>

                <a
                  href="https://github.com/SP7TECH"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      d="M12 2.2a9.8 9.8 0 0 0-3.1 19.1c.5.1.7-.2.7-.5v-1.8c-2.7.6-3.3-1.3-3.3-1.3-.5-1.1-1.1-1.4-1.1-1.4-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.3 1.1 2.9.8.1-.6.3-1.1.6-1.3-2.2-.3-4.5-1.1-4.5-4.9 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.7 0 0 .8-.3 2.7 1a9.4 9.4 0 0 1 5 0c1.9-1.3 2.7-1 2.7-1 .5 1.4.2 2.4.1 2.7.6.7 1 1.6 1 2.7 0 3.8-2.3 4.6-4.5 4.9.3.3.7 1 .7 1.9v2.8c0 .3.2.6.7.5A9.8 9.8 0 0 0 12 2.2z"
                      fill="currentColor"
                    />
                  </svg>
                  <p>GitHub</p>
                </a>

                <a
                  href="https://leetcode.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      d="M9.5 8.5L6 12l3.5 3.5M14.5 8.5L18 12l-3.5 3.5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <p>LeetCode</p>
                </a>
              </div>
            </div>

            {/* right part  */}
            <div className="right">
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
                  <pre>
                    <span className="brace">{"{"}</span>
                    {"\n  "}
                    <span className="key">"name"</span>
                    <span className="punc">: </span>
                    <span className="str">"Sumit Pandey"</span>
                    <span className="punc">,</span>
                    {"\n  "}
                    <span className="key">"title"</span>
                    <span className="punc">: </span>
                    <span className="str">
                      "Senior Software Development Engineer (SDE IV)"
                    </span>
                    <span className="punc">,</span>
                    {"\n  "}
                    <span className="key">"current_employer"</span>
                    <span className="punc">: </span>
                    <span className="str">"Simplilearn"</span>
                    <span className="punc">,</span>
                    {"\n  "}
                    <span className="key">"experience_years"</span>
                    <span className="punc">: </span>
                    <span className="str">"5+"</span>
                    <span className="punc">,</span>
                    {"\n  "}
                    <span className="key">"stack"</span>
                    <span className="punc">: [</span>
                    <span className="str">"React"</span>
                    <span className="punc">, </span>
                    <span className="str">"Next.js"</span>
                    <span className="punc">, </span>
                    <span className="str">"NestJS"</span>
                    <span className="punc">, </span>
                    <span className="str">"Node.js"</span>
                    <span className="punc">],</span>
                    {"\n  "}
                    <span className="key">"cloud_and_ops"</span>
                    <span className="punc">: [</span>
                    <span className="str">"AWS"</span>
                    <span className="punc">, </span>
                    <span className="str">"Terraform"</span>
                    <span className="punc">, </span>
                    <span className="str">"Jenkins"</span>
                    <span className="punc">, </span>
                    <span className="str">"Docker"</span>
                    <span className="punc">],</span>
                    {"\n  "}
                    <span className="key">"ai_domain"</span>
                    <span className="punc">: [</span>
                    <span className="str">"LLMs"</span>
                    <span className="punc">, </span>
                    <span className="str">"RAG"</span>
                    <span className="punc">, </span>
                    <span className="str">"VectorDBs"</span>
                    <span className="punc">, </span>
                    <span className="str">"AI Agents"</span>
                    <span className="punc">],</span>
                    {"\n  "}
                    <span className="key">"active_status"</span>
                    <span className="punc">: </span>
                    <span className="str-alt">
                      "Leading 10+ engineers at Simplilearn"
                    </span>
                    {"\n"}
                    <span className="brace">{"}"}</span>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="stats">
        <div className="container">
          <div className="card-stats">
            <div className="stat-card">
              <h2>1M+</h2>
              <h6>Monthly Active Users</h6>
              <p>
                High-traffic consumer pages optimized for Simplilearn's main
                platform.
              </p>
            </div>

            <div className="stat-card">
              <h2>80 / 100</h2>
              <h6>Lighthouse Score</h6>
              <p>
                Engineered a major performance overhaul, rising from an initial
                score of 33.
              </p>
            </div>

            <div className="stat-card">
              <h2>40%</h2>
              <h6>Manual Effort Reduced</h6>
              <p>Architected an automated quotation-to-invoice workflow.</p>
            </div>

            <div className="stat-card">
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

      <section className="deep-dives" id="systems">
        <div className="container">
          <div className="section-head">
            <h6 className="section-label">
              <span className="label-line"></span>ENGINEERING DEEP DIVES
            </h6>
            <h2 className="font-outfit">
              Production Systems &amp; Enterprise Solutions
            </h2>
            <p className="font-outfit">
              A selective view of architectures built with solid methodologies,
              verified against exact specifications.
            </p>
          </div>

          <div className="card-container">
            {/* first  */}
            <div className="deep-dive-card">
              <span className="card-label">FRONTEND PLATFORM ARCHITECTURE</span>
              <h3 className="font-outfit">
                Preview-Enabled Enterprise Next.js/NestJS CMS
              </h3>
              <p className="font-outfit">
                Designed and implemented a headless CMS integration enabling
                live content drafts, rich template schemas, publication
                controls, and automated deployment structures for 70+ users.
              </p>

              <div className="impact">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <circle
                    cx="12"
                    cy="12"
                    r="9"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                  />
                  <path
                    d="M8 12.3l2.6 2.6L16 9.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
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
              <span className="card-label">REAL-TIME MICROSERVICES</span>
              <h3 className="font-outfit">
                Socket.io &amp; RabbitMQ Notification Engine
              </h3>
              <p className="font-outfit">
                Constructed a high-throughput, horizontally scalable messaging
                pipeline. Features robust connection fallback mechanisms, atomic
                delivery rules, and decoupled processing channels.
              </p>

              <div className="impact">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <circle
                    cx="12"
                    cy="12"
                    r="9"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                  />
                  <path
                    d="M8 12.3l2.6 2.6L16 9.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
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
              <span className="card-label">
                BUSINESS SOLUTIONS &amp; INFRASTRUCTURE
              </span>
              <h3 className="font-outfit">
                Automated Quotation-to-Invoice Workflow
              </h3>
              <p className="font-outfit">
                Engineered full stack automation mapping quotations cleanly to
                invoicing, utilizing the MVVM architectural design pattern to
                optimize React state transitions.
              </p>

              <div className="impact">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <circle
                    cx="12"
                    cy="12"
                    r="9"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                  />
                  <path
                    d="M8 12.3l2.6 2.6L16 9.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
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

            {/* fourth  */}
            <div className="deep-dive-card">
              <span className="card-label">FINANCIAL OPERATIONS</span>
              <h3 className="font-outfit">
                Prepaid Card Issuance &amp; Accounts Payable Module
              </h3>
              <p className="font-outfit">
                Owned Vue.js core design for Pazy's expense management platform.
                Delivered secure transaction interfaces, custom reporting
                modules, and granular access rule definitions.
              </p>

              <div className="impact">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <circle
                    cx="12"
                    cy="12"
                    r="9"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                  />
                  <path
                    d="M8 12.3l2.6 2.6L16 9.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
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

      <section className="experience" id="experience">
        <div className="container">
          <div className="section-head">
            <h6 className="section-label">
              <span className="label-line"></span>ENGINEERING CHRONOLOGY
            </h6>
            <h2 className="font-outfit">Professional Experience</h2>
            <p className="font-outfit">
              A timeline highlighting technical growth, leadership scope, and
              concrete business outcomes.
            </p>
          </div>

          <div className="timeline">
            {/* Simplilearn  */}
            <div className="experience-card current">
              <div className="experience-marker">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    d="M4 20V9.5l8-5.5 8 5.5V20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9.5 20v-5h5v5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <div className="experience-body">
                {/* top bar  */}
                <div className="experience-card-header">
                  <div>
                    <h4 className="font-outfit">
                      Software Development Engineer IV (SDE 4)
                    </h4>
                    <div className="experience-meta">
                      <p className="company">Simplilearn</p>
                      <span className="grey-dot"></span>
                      <p>Bengaluru, IN (Remote)</p>
                    </div>
                  </div>

                  <div className="experience-card-highlight">
                    01/2026 – Present
                  </div>
                </div>

                {/* content  */}
                <ul>
                  <li>
                    Lead a highly collaborative engineering team of 10+ software
                    professionals to deliver enterprise learning systems.
                  </li>
                  <li>
                    Improved 20+ core pages serving over 1M+ active monthly
                    users, modernizing performance and legacy codebases.
                  </li>
                  <li>
                    Successfully raised Lighthouse Performance baseline from a
                    critical 33 up to an efficient 80, resolving deep visual
                    shift and script issues.
                  </li>
                  <li>
                    Architected and deployed a Next.js/NestJS CMS with rich live
                    preview modules, reusable page templates, draft/publish
                    flows, and automation scripts for 70+ operational users.
                  </li>
                  <li>
                    Pioneered WCAG web accessibility standards, delivering
                    AI-assisted learning modules and modernizing AWS
                    infrastructure utilizing S3, CloudFront, ECS, EC2, Load
                    Balancers, Secrets Manager, Jenkins, and Terraform.
                  </li>
                </ul>
              </div>
            </div>

            {/* Pazy  */}
            <div className="experience-card">
              <div className="experience-marker">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    d="M4 20V9.5l8-5.5 8 5.5V20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9.5 20v-5h5v5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <div className="experience-body">
                {/* top bar  */}
                <div className="experience-card-header">
                  <div>
                    <h4 className="font-outfit">Software Engineer</h4>
                    <div className="experience-meta">
                      <p className="company">Pazy</p>
                      <span className="grey-dot"></span>
                      <p>Bengaluru, IN</p>
                    </div>
                  </div>

                  <div className="experience-card-highlight-past">
                    08/2025 – 12/2025
                  </div>
                </div>

                {/* content  */}
                <ul>
                  <li>
                    Led the technical buildout of the prepaid credit cards
                    issuance module with complex multi-tenant routing.
                  </li>
                  <li>
                    Spearheaded accounts payable features and enterprise-grade
                    expense management reporting components in Vue.js.
                  </li>
                </ul>
              </div>
            </div>

            {/* Juntrax  */}
            <div className="experience-card">
              <div className="experience-marker">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    d="M4 20V9.5l8-5.5 8 5.5V20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9.5 20v-5h5v5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <div className="experience-body">
                {/* top bar  */}
                <div className="experience-card-header">
                  <div>
                    <h4 className="font-outfit">
                      Software Development Engineer
                    </h4>
                    <div className="experience-meta">
                      <p className="company">Juntrax Solutions</p>
                      <span className="grey-dot"></span>
                      <p>Bengaluru, IN</p>
                    </div>
                  </div>

                  <div className="experience-card-highlight-past">
                    07/2023 – 08/2025
                  </div>
                </div>

                {/* content  */}
                <ul>
                  <li>
                    Built comprehensive quotation-to-invoice automation flows
                    that directly eliminated manual business operations by 40%.
                  </li>
                  <li>
                    Designed and deployed a highly reliable real-time
                    notifications service utilizing Socket.io, RabbitMQ, and
                    Redis.
                  </li>
                  <li>
                    Constructed custom React Likert scale UI libraries and
                    designed high-density payroll visualization dashboards under
                    clean MVVM / Dependency Injection paradigms.
                  </li>
                </ul>
              </div>
            </div>

            {/* Medorn  */}
            <div className="experience-card">
              <div className="experience-marker">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    d="M4 20V9.5l8-5.5 8 5.5V20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9.5 20v-5h5v5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <div className="experience-body">
                {/* top bar  */}
                <div className="experience-card-header">
                  <div>
                    <h4 className="font-outfit">
                      Co-Founder &amp; Technical Lead
                    </h4>
                    <div className="experience-meta">
                      <p className="company">Medorn Ventures</p>
                      <span className="grey-dot"></span>
                      <p>Bhopal, IN (Remote)</p>
                    </div>
                  </div>

                  <div className="experience-card-highlight-past">
                    02/2022 – 06/2023
                  </div>
                </div>

                {/* content  */}
                <ul>
                  <li>
                    Engineered the database models, REST API layer, and secure
                    administration dashboards for a complex pharmaceutical ERP.
                  </li>
                  <li>
                    Built predictive supply metrics and automated Daily Call
                    Reporting (DCR) templates for field representatives.
                  </li>
                </ul>
              </div>
            </div>

            {/* Webenza  */}
            <div className="experience-card">
              <div className="experience-marker">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    d="M4 20V9.5l8-5.5 8 5.5V20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9.5 20v-5h5v5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <div className="experience-body">
                {/* top bar  */}
                <div className="experience-card-header">
                  <div>
                    <h4 className="font-outfit">Frontend Developer</h4>
                    <div className="experience-meta">
                      <p className="company">Webenza</p>
                      <span className="grey-dot"></span>
                      <p>Remote</p>
                    </div>
                  </div>

                  <div className="experience-card-highlight-past">
                    08/2021 – 01/2022
                  </div>
                </div>

                {/* content  */}
                <ul>
                  <li>
                    Identified and resolved critical loading bottlenecks by
                    implementing image optimization pipelines, asset deferral,
                    and smart caching.
                  </li>
                  <li>
                    Achieved measurable SEO visibility jumps and raised
                    PageSpeed scores globally across digital assets.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="capabilities" id="capabilities">
        <div className="container">
          <div className="section-head">
            <h6 className="section-label">
              <span className="label-line"></span>CAPABILITIES MATRIX
            </h6>
            <h2 className="font-outfit">Technical Expertise</h2>
            <p className="font-outfit">
              A map of technologies and paradigms utilized to build
              high-availability products and AI applications.
            </p>
          </div>

          <div className="capability-grid">
            {/* languages  */}
            <div className="capability-card">
              <h5>
                <span>//</span> LANGUAGES &amp; RUNTIMES
              </h5>

              <div className="chips">
                <div className="chip">
                  <span className="blue-dot"></span>
                  <p>TypeScript</p>
                </div>
                <div className="chip">
                  <span className="blue-dot"></span>
                  <p>JavaScript</p>
                </div>
                <div className="chip">
                  <span className="blue-dot"></span>
                  <p>Python</p>
                </div>
                <div className="chip">
                  <span className="blue-dot"></span>
                  <p>Node.js</p>
                </div>
                <div className="chip">
                  <span className="blue-dot"></span>
                  <p>NestJS</p>
                </div>
                <div className="chip">
                  <span className="blue-dot"></span>
                  <p>Express.js</p>
                </div>
                <div className="chip">
                  <span className="blue-dot"></span>
                  <p>HTML</p>
                </div>
                <div className="chip">
                  <span className="blue-dot"></span>
                  <p>CSS</p>
                </div>
              </div>
            </div>

            {/* frontend  */}
            <div className="capability-card">
              <h5>
                <span>//</span> FRONTEND FRAMEWORKS
              </h5>

              <div className="chips">
                <div className="chip">
                  <span className="blue-dot"></span>
                  <p>React</p>
                </div>
                <div className="chip">
                  <span className="blue-dot"></span>
                  <p>Next.js</p>
                </div>
                <div className="chip">
                  <span className="blue-dot"></span>
                  <p>Vue.js</p>
                </div>
                <div className="chip">
                  <span className="blue-dot"></span>
                  <p>Redux</p>
                </div>
                <div className="chip">
                  <span className="blue-dot"></span>
                  <p>Tailwind CSS</p>
                </div>
                <div className="chip">
                  <span className="blue-dot"></span>
                  <p>Material UI</p>
                </div>
                <div className="chip">
                  <span className="blue-dot"></span>
                  <p>Frontend Architecture</p>
                </div>
              </div>
            </div>

            {/* cloud  */}
            <div className="capability-card">
              <h5>
                <span>//</span> CLOUD &amp; INFRASTRUCTURE
              </h5>

              <div className="chips">
                <div className="chip">
                  <span className="blue-dot"></span>
                  <p>AWS</p>
                </div>
                <div className="chip">
                  <span className="blue-dot"></span>
                  <p>Docker</p>
                </div>
                <div className="chip">
                  <span className="blue-dot"></span>
                  <p>Jenkins</p>
                </div>
                <div className="chip">
                  <span className="blue-dot"></span>
                  <p>Terraform</p>
                </div>
                <div className="chip">
                  <span className="blue-dot"></span>
                  <p>S3</p>
                </div>
                <div className="chip">
                  <span className="blue-dot"></span>
                  <p>CloudFront</p>
                </div>
                <div className="chip">
                  <span className="blue-dot"></span>
                  <p>ECS</p>
                </div>
                <div className="chip">
                  <span className="blue-dot"></span>
                  <p>EC2</p>
                </div>
                <div className="chip">
                  <span className="blue-dot"></span>
                  <p>ALB</p>
                </div>
                <div className="chip">
                  <span className="blue-dot"></span>
                  <p>Git</p>
                </div>
              </div>
            </div>

            {/* databases  */}
            <div className="capability-card">
              <h5>
                <span>//</span> DATABASES &amp; NETWORKING
              </h5>

              <div className="chips">
                <div className="chip">
                  <span className="blue-dot"></span>
                  <p>MongoDB</p>
                </div>
                <div className="chip">
                  <span className="blue-dot"></span>
                  <p>SQL</p>
                </div>
                <div className="chip">
                  <span className="blue-dot"></span>
                  <p>REST APIs</p>
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
                  <p>Microservices</p>
                </div>
                <div className="chip">
                  <span className="blue-dot"></span>
                  <p>System Design</p>
                </div>
                <div className="chip">
                  <span className="blue-dot"></span>
                  <p>DSA</p>
                </div>
              </div>
            </div>

            {/* ai  */}
            <div className="capability-card full">
              <h5>
                <span>//</span> AI APPLICATION ARCHITECTURE
              </h5>

              <div className="chips">
                <div className="chip">
                  <span className="blue-dot"></span>
                  <p>LLM APIs</p>
                </div>
                <div className="chip">
                  <span className="blue-dot"></span>
                  <p>Prompt Engineering</p>
                </div>
                <div className="chip">
                  <span className="blue-dot"></span>
                  <p>RAG</p>
                </div>
                <div className="chip">
                  <span className="blue-dot"></span>
                  <p>Embeddings</p>
                </div>
                <div className="chip">
                  <span className="blue-dot"></span>
                  <p>Vector Databases</p>
                </div>
                <div className="chip">
                  <span className="blue-dot"></span>
                  <p>Tool Calling</p>
                </div>
                <div className="chip">
                  <span className="blue-dot"></span>
                  <p>MCP</p>
                </div>
                <div className="chip">
                  <span className="blue-dot"></span>
                  <p>AI Agents</p>
                </div>
                <div className="chip">
                  <span className="blue-dot"></span>
                  <p>Evaluation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ethos">
        <div className="container">
          <div className="ethos-row">
            <div className="ethos-left">
              <h6 className="section-label">
                <span className="label-line"></span>ENGINEERING ETHOS
              </h6>
              <h2 className="font-outfit">
                Systems Thinking over Pixel Pushing
              </h2>
              <p className="font-outfit">
                I approach product development from an infrastructure and
                architectural perspective. Whether structuring a component
                library, implementing Dependency Injection in an ERP framework,
                or modernizing AWS load balancers, I ensure scalability and
                resilience.
              </p>

              <ul className="ethos-list">
                <li>
                  <span className="blue-dot"></span>
                  <p className="font-outfit">
                    Performance first: optimizing for sub-second rendering and
                    high Lighthouse marks.
                  </p>
                </li>
                <li>
                  <span className="blue-dot"></span>
                  <p className="font-outfit">
                    Decoupled, event-driven integrations utilizing queues and
                    state machines.
                  </p>
                </li>
                <li>
                  <span className="blue-dot"></span>
                  <p className="font-outfit">
                    Modern AI stack familiarity, building advanced LLM agentic
                    tool flows safely.
                  </p>
                </li>
              </ul>
            </div>

            <div className="ethos-right">
              <div className="ethos-badge">
                <h3>&lt;SDE_4&gt;</h3>
                <p>
                  Combining Frontend Precision with AWS Infrastructure
                  Management.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="container">
          <div className="contact-row">
            <div className="contact-left">
              <h2 className="font-outfit">
                Let's build something exceptional together
              </h2>
              <p className="font-outfit">
                I am open to discussions regarding SDE IV, Senior Software
                Engineer, and Technical Lead roles. Let's trace out your next
                system scaling journey.
              </p>
            </div>

            <div className="contact-right">
              <h6>DIRECT CONNECTION</h6>
              <a className="contact-phone" href="tel:+919325839163">
                +91-9325839163
              </a>
              <a
                className="contact-mail"
                href="mailto:spandey19012001@gmail.com"
              >
                spandey19012001@gmail.com
              </a>
            </div>
          </div>

          <div className="contact-meta">
            <div className="education">
              <h6>EDUCATION</h6>
              <h4 className="font-outfit">
                Rajiv Gandhi Proudyogiki Vishwavidyalaya
              </h4>
              <p>B.Tech in Computer Science &amp; Engineering</p>
            </div>

            <div className="index">
              <h6>INDEX</h6>
              <div className="index-links">
                <a
                  href="https://github.com/SP7TECH"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
                <a
                  href="https://leetcode.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LeetCode
                </a>
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          <p>© 2026 SUMIT PANDEY. ALL RIGHTS RESERVED.</p>
          <p>BUILT WITH GEOMETRIC PRECISION &amp; CRITICAL METHODS</p>
        </div>
      </footer>
    </>
  );
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
