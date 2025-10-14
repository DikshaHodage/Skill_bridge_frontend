export const roadmapModules = {
  // --- Tech Domains ---
  'web-development': [
    { 
      id: 'internet-basics', 
      title: 'Internet Basics', 
      level: 'beginner', 
      description: 'Understand how the internet, browsers, DNS, and hosting work.', 
      icon: '🌐',
      brief: 'Before building for the web, it is crucial to understand the underlying infrastructure. This includes learning what happens when you type a URL into a browser, how DNS resolves domain names to IP addresses, and the roles of clients and servers.',
      resources: [
        { type: 'Article', title: 'How Does the Internet Work?', link: 'https://developer.mozilla.org/en-US/docs/Learn/Common_questions/How_does_the_Internet_work' },
        { type: 'Video', title: 'The Internet: Wires, Cables & Wifi', link: 'https://www.youtube.com/watch?v=i_tP-0NFw_w' }
      ]
    },
    { 
      id: 'html', 
      title: 'HTML', 
      level: 'beginner', 
      description: 'Learn the fundamental structure of web pages with HyperText Markup Language.', 
      icon: '뼈',
      brief: 'HTML provides the essential skeleton for all web content. Mastering semantic HTML is key to creating accessible, SEO-friendly, and well-structured websites.',
      resources: [
        { type: 'Course', title: 'HTML Full Course - freeCodeCamp', link: 'https://www.youtube.com/watch?v=kUMe1FH4CHE' }
      ]
    },
    { 
      id: 'css', 
      title: 'CSS', 
      level: 'beginner', 
      description: 'Style your web pages with Cascading Style Sheets to control layout, colors, and fonts.', 
      icon: '🎨',
      brief: 'CSS brings your HTML to life. Learn about the box model, Flexbox, Grid, and responsive design to create beautiful and functional layouts that work on all devices.',
      resources: [
        { type: 'Game', title: 'Flexbox Froggy', link: 'https://flexboxfroggy.com/' },
        { type: 'Game', title: 'CSS Grid Garden', link: 'https://cssgridgarden.com/' }
      ]
    },
    { 
      id: 'javascript-basics', 
      title: 'JavaScript Basics', 
      level: 'beginner', 
      description: 'Master variables, data types, functions, and DOM manipulation.', 
      icon: '🟨',
      brief: 'JavaScript is the programming language of the web. Start by learning the core concepts, then move on to interacting with the HTML and CSS on a page through the Document Object Model (DOM).',
      resources: [
        { type: 'Course', title: 'JavaScript for Beginners', link: 'https://www.udemy.com/course/javascript-for-beginners-introduction-to-javascript/' }
      ]
    },
    { 
      id: 'version-control', 
      title: 'Version Control with Git', 
      level: 'intermediate', 
      description: 'Learn to track and manage your code using Git and platforms like GitHub.', 
      icon: '️',
      brief: 'Git is an essential tool for every developer. It allows you to save snapshots of your code, revert to previous versions, and collaborate effectively with a team using platforms like GitHub or GitLab.',
      resources: [
        { type: 'Article', title: 'Git Handbook', link: 'https://guides.github.com/introduction/git-handbook/' }
      ]
    },
    { 
      id: 'js-framework', 
      title: 'Pick a JS Framework', 
      level: 'intermediate', 
      description: 'Deepen your skills by learning a modern framework like React, Vue, or Svelte.', 
      icon: '⚛️',
      brief: 'Frameworks provide structure and tools to build complex, interactive applications more efficiently. React is the most popular, followed by Vue and the newer, performance-focused Svelte.',
      resources: [
        { type: 'Course', title: 'React Official Tutorial', link: 'https://react.dev/learn' }
      ]
    },
    { 
      id: 'backend-basics', 
      title: 'Backend Basics', 
      level: 'advanced', 
      description: 'Explore server-side development with Node.js and Express to build full-stack applications.', 
      icon: '⚙️',
      brief: 'Go beyond the browser and learn how servers work. Node.js allows you to use JavaScript on the backend. Combined with a framework like Express, you can build powerful APIs and web applications.',
      resources: [
        { type: 'Course', title: 'The Odin Project - Node.js', link: 'https://www.theodinproject.com/paths/full-stack-javascript/courses/nodejs' }
      ]
    },
    { 
      id: 'databases', 
      title: 'Databases', 
      level: 'advanced', 
      description: 'Learn how to store and manage data using SQL (like PostgreSQL) or NoSQL (like MongoDB) databases.', 
      icon: '🗃️',
      brief: 'Applications need to store data persistently. Learn the difference between relational (SQL) and non-relational (NoSQL) databases and when to use each.',
      resources: [
        { type: 'Video', title: 'SQL vs NoSQL Explained', link: 'https://www.youtube.com/watch?v=cODCpXt-L_s' }
      ]
    },
  ],
  'backend-development': [
    { 
      id: 'backend-lang', 
      title: 'Choose a Language', 
      level: 'beginner', 
      description: 'Select a primary backend language like Node.js, Python, Go, or Java.', 
      icon: '🗣️',
      brief: 'The backend is powered by a programming language that runs on a server. Node.js is great for JavaScript developers, Python is excellent for data and simplicity, Go is known for performance, and Java is a robust choice for large enterprise systems.',
      resources: [
        { type: 'Video', title: 'Backend Development Explained', link: 'https://www.youtube.com/watch?v=XBu54nfYv_4' },
        { type: 'Article', title: 'Choosing a Backend Language in 2025', link: '#' }
      ]
    },
    { 
      id: 'backend-db', 
      title: 'Learn Databases', 
      level: 'beginner', 
      description: 'Understand both SQL (e.g., PostgreSQL) and NoSQL (e.g., MongoDB) databases.', 
      icon: '🗃️',
      brief: 'Databases are where your application\'s data lives. SQL databases are structured and reliable for transactions (like finance), while NoSQL databases are flexible and scale well for large, unstructured data (like social media).',
      resources: [
        { type: 'Course', title: 'SQL for Beginners - Khan Academy', link: 'https://www.khanacademy.org/computing/computer-programming/sql' },
        { type: 'Video', title: 'SQL vs NoSQL Explained', link: 'https://www.youtube.com/watch?v=cODCpXt-L_s' },
        { type: 'Article', title: 'MongoDB Official Docs', link: 'https://www.mongodb.com/docs/' }
      ]
    },
    { 
      id: 'backend-apis', 
      title: 'Master APIs', 
      level: 'intermediate', 
      description: 'Learn to build and interact with RESTful APIs and understand GraphQL concepts.', 
      icon: '🔄',
      brief: 'APIs (Application Programming Interfaces) are how the frontend and backend communicate. REST is the most common standard, using HTTP methods (GET, POST, PUT, DELETE) to manage resources. GraphQL is a newer, more flexible alternative.',
      resources: [
        { type: 'Course', title: 'Postman: The Complete Guide', link: 'https://www.udemy.com/course/postman-the-complete-guide/' },
        { type: 'Article', title: 'What is a REST API?', link: 'https://www.redhat.com/en/topics/api/what-is-a-rest-api' }
      ]
    },
    { 
      id: 'backend-auth', 
      title: 'Authentication', 
      level: 'intermediate', 
      description: 'Implement secure user login and session management using JWT, OAuth, and cookies.', 
      icon: '🔐',
      brief: 'Authentication is the process of verifying a user\'s identity. Common methods include session cookies for traditional web apps and JSON Web Tokens (JWT) for modern APIs and single-page applications. OAuth is used for third-party logins (e.g., "Login with Google").',
      resources: [
         { type: 'Article', title: 'An Introduction to JSON Web Tokens (JWT)', link: 'https://jwt.io/introduction' }
      ]
    },
    { 
      id: 'backend-ci-cd', 
      title: 'CI/CD', 
      level: 'advanced', 
      description: 'Set up continuous integration and deployment pipelines to automate testing and releases.', 
      icon: '🚀',
      brief: 'CI/CD stands for Continuous Integration and Continuous Deployment. It\'s a practice that automates the steps of software delivery, such as building, testing, and deploying.',
      resources: [
        { type: 'Article', title: 'What is CI/CD?', link: 'https://aws.amazon.com/devops/what-is-cicd/' }
      ]
    },
    { 
      id: 'backend-containers', 
      title: 'Containers & Orchestration', 
      level: 'advanced', 
      description: 'Learn Docker for containerizing applications and Kubernetes for orchestration.', 
      icon: '🐳',
      brief: 'Docker packages your application and its dependencies into a portable "container." Kubernetes is an orchestration tool that manages, scales, and deploys these containers automatically across many servers.',
      resources: [
        { type: 'Course', title: 'Docker for Beginners', link: 'https://www.youtube.com/watch?v=3c-iBn73dDE' }
      ]
    },
  ],
  'data-science': [
    { 
      id: 'python-basics', 
      title: 'Python Basics', 
      level: 'beginner', 
      description: 'Learn the fundamentals of Python, the primary language for Data Science.', 
      icon: '🐍',
      brief: 'Master Python\'s core concepts: variables, data structures (lists, dictionaries), loops, functions, and object-oriented principles. This is the foundation for everything else in data science.',
      resources: [
        { type: 'Course', title: 'Python for Everybody', link: 'https://www.coursera.org/specializations/python' }
      ]
    },
    { 
      id: 'numpy-pandas', 
      title: 'NumPy & Pandas', 
      level: 'beginner', 
      description: 'Master the essential libraries for data manipulation and numerical computation.', 
      icon: '📊',
      brief: 'NumPy provides powerful tools for numerical operations on arrays. Pandas introduces the DataFrame, a crucial tool for cleaning, transforming, and analyzing tabular data.',
      resources: [
        { type: 'Article', title: 'Pandas 10 minute tutorial', link: 'https://pandas.pydata.org/docs/user_guide/10min.html' }
      ]
    },
    { 
      id: 'data-viz', 
      title: 'Data Visualization', 
      level: 'intermediate', 
      description: 'Learn to create insightful charts and graphs with Matplotlib and Seaborn.', 
      icon: '📈',
      brief: 'Communicating your findings is a key skill. Learn to create various plot types like bar charts, line plots, scatter plots, and heatmaps to tell a story with your data.',
      resources: [
        { type: 'Course', title: 'Data Visualization with Python', link: 'https://www.coursera.org/learn/python-for-data-visualization' }
      ]
    },
    { 
      id: 'ml-basics', 
      title: 'Machine Learning Basics', 
      level: 'advanced', 
      description: 'Understand core ML concepts like regression, classification, and clustering with Scikit-learn.', 
      icon: '🤖',
      brief: 'Machine learning allows computers to learn from data. This step involves understanding different types of algorithms, how to train a model, and how to evaluate its performance.',
      resources: [
        { type: 'Course', title: 'Machine Learning by Andrew Ng', link: 'https://www.coursera.org/learn/machine-learning' }
      ]
    },
  ],
  'cybersecurity': [
    { 
      id: 'cs-net-basics', 
      title: 'Networking Fundamentals', 
      level: 'beginner', 
      description: 'Understand TCP/IP, OSI model, DNS, and other core networking concepts.', 
      icon: '🔌',
      brief: 'Cybersecurity is built on a deep understanding of how networks communicate. Mastering these fundamentals is non-negotiable for a career in this field.',
      resources: [
        { type: 'Course', title: 'Google Cybersecurity Certificate', link: 'https://www.coursera.org/professional-certificates/google-cybersecurity' }
      ]
    },
    { 
      id: 'cs-sec-principles', 
      title: 'Security Principles', 
      level: 'beginner', 
      description: 'Learn the CIA triad (Confidentiality, Integrity, Availability) and risk management.', 
      icon: '🛡️',
      brief: 'These core principles govern all of information security. Understanding them helps you make better decisions when designing and defending systems.',
      resources: [
        { type: 'Article', title: 'The CIA Triad', link: 'https://www.forcepoint.com/cyber-edu/cia-triad' }
      ]
    },
    { 
      id: 'cs-ethical-hacking', 
      title: 'Ethical Hacking', 
      level: 'intermediate', 
      description: 'Explore penetration testing methodologies and tools like Metasploit and Nmap.', 
      icon: '🎩',
      brief: 'To defend a system, you must first understand how to attack it. Ethical hacking involves legally and ethically trying to break into systems to find vulnerabilities before malicious hackers do.',
      resources: [
        { type: 'Course', title: 'TryHackMe', link: 'https://tryhackme.com/' }
      ]
    },
    { 
      id: 'cs-crypto', 
      title: 'Cryptography', 
      level: 'advanced', 
      description: 'Understand symmetric/asymmetric encryption, hashing algorithms, and public key infrastructure (PKI).', 
      icon: '🔑',
      brief: 'Cryptography is the science of secure communication. It provides the mathematical foundations for keeping data confidential and verifying its integrity.',
      resources: [
        { type: 'Video', title: 'Cryptography - Computerphile', link: 'https://www.youtube.com/watch?v=1psu_pMO-2I' }
      ]
    },
  ],
  'cloud-computing': [
    { 
      id: 'cc-fundamentals', 
      title: 'Cloud Fundamentals', 
      level: 'beginner', 
      description: 'Learn the basics of IaaS, PaaS, SaaS, and the different cloud deployment models.', 
      icon: '☁️',
      brief: 'Understand the core concepts of cloud computing, including the shared responsibility model and the benefits of cloud over traditional on-premise infrastructure.',
      resources: [
        { type: 'Article', title: 'What is Cloud Computing?', link: 'https://aws.amazon.com/what-is-cloud-computing/' }
      ]
    },
    { 
      id: 'cc-provider', 
      title: 'Pick a Provider', 
      level: 'beginner', 
      description: 'Choose a major cloud provider to focus on, such as AWS, Azure, or Google Cloud.', 
      icon: '🏢',
      brief: 'While concepts are similar, each cloud provider has its own unique services and interfaces. AWS is the market leader, followed by Microsoft Azure and Google Cloud Platform (GCP).',
      resources: [
        { type: 'Course', title: 'AWS Cloud Practitioner Essentials', link: 'https://aws.amazon.com/training/digital/aws-cloud-practitioner-essentials/' }
      ]
    },
    { 
      id: 'cc-core-services', 
      title: 'Core Services', 
      level: 'intermediate', 
      description: 'Master core services like compute (EC2, VMs), storage (S3, Blob), and networking (VPC, VNet).', 
      icon: '⚙️',
      brief: 'These are the bread-and-butter services of any cloud platform. Learn how to launch virtual servers, store files reliably, and create secure, isolated virtual networks.',
      resources: [
        { type: 'Course', title: 'AWS Solutions Architect Associate', link: 'https://aws.amazon.com/certification/certified-solutions-architect-associate/' }
      ]
    },
    { 
      id: 'cc-serverless', 
      title: 'Serverless Architecture', 
      level: 'advanced', 
      description: 'Build and deploy applications using serverless functions (Lambda, Azure Functions).', 
      icon: '⚡',
      brief: 'Serverless allows you to run code without provisioning or managing servers. You only pay for the compute time you consume, making it a highly efficient and scalable architecture for many applications.',
      resources: [
        { type: 'Article', title: 'What is Serverless?', link: 'https://www.cloudflare.com/learning/serverless/what-is-serverless/' }
      ]
    },
  ],
  'devops': [
    { 
      id: 'devops-linux', 
      title: 'Linux & Scripting', 
      level: 'beginner', 
      description: 'Master the Linux command line and write shell scripts for automation.', 
      icon: '🐧',
      brief: 'The vast majority of servers run on Linux. A deep understanding of the command line and the ability to automate tasks with scripts (like Bash) is a fundamental DevOps skill.',
      resources: [
        { type: 'Course', title: 'The Linux Command Line', link: 'https://www.udacity.com/course/linux-command-line-basics--ud595' }
      ]
    },
    { 
      id: 'devops-git', 
      title: 'Git for DevOps', 
      level: 'beginner', 
      description: 'Understand branching strategies and how to use Git in a team environment.', 
      icon: '️',
      brief: 'In DevOps, Git is more than just code storage; it\'s the source of truth. GitOps is a popular practice where the state of infrastructure is managed through Git repositories.',
      resources: [
        { type: 'Article', title: 'Git Branching Strategies', link: 'https://www.atlassian.com/git/tutorials/comparing-workflows' }
      ]
    },
    { 
      id: 'devops-ci-cd', 
      title: 'CI/CD Pipelines', 
      level: 'intermediate', 
      description: 'Learn to build automated pipelines with tools like Jenkins, GitHub Actions, or GitLab CI.', 
      icon: '🚀',
      brief: 'Automating the build, test, and deployment process is the heart of DevOps. A CI/CD pipeline ensures that code changes are delivered to users quickly and reliably.',
      resources: [
        { type: 'Article', title: 'GitHub Actions Documentation', link: 'https://docs.github.com/en/actions' }
      ]
    },
    { 
      id: 'devops-iac', 
      title: 'Infrastructure as Code', 
      level: 'advanced', 
      description: 'Manage infrastructure with code using tools like Terraform and Ansible.', 
      icon: '📜',
      brief: 'Instead of manually configuring servers and networks, IaC allows you to define your infrastructure in configuration files. This makes your setup repeatable, version-controlled, and automated.',
      resources: [
        { type: 'Course', title: 'Terraform - Up & Running', link: 'https://www.udemy.com/course/terraform-up-and-running/' }
      ]
    },
    { 
      id: 'devops-containers', 
      title: 'Containers & Kubernetes', 
      level: 'advanced', 
      description: 'Master Docker for containerization and Kubernetes for large-scale orchestration.', 
      icon: '🐳',
      brief: 'Docker and Kubernetes are foundational technologies in modern DevOps. They provide a standardized way to package, deploy, and manage applications at any scale.',
      resources: [
        { type: 'Video', title: 'Kubernetes Explained in 100 Seconds', link: 'https://www.youtube.com/watch?v=PziYfl8q_wE' }
      ]
    },
  ],
  'investing': [
    { 
      id: 'inv-basics', 
      title: 'Basics of Stocks & Bonds', 
      level: 'beginner', 
      description: 'Understand the fundamental differences between stocks and bonds and their role in a portfolio.', 
      icon: '📜',
      brief: 'Stocks represent ownership in a company, offering growth potential. Bonds are essentially loans to a company or government, providing fixed income. Understanding this balance is the first step in investing.',
      resources: [
        { type: 'Course', title: 'Investing 101 - Investopedia', link: 'https://www.investopedia.com/articles/basics/06/investing101.asp' }
      ]
    },
    { 
      id: 'inv-indexes', 
      title: 'Market Indexes', 
      level: 'beginner', 
      description: 'Learn about major market indexes like the S&P 500 and NASDAQ and what they represent.', 
      icon: '🏢',
      brief: 'Indexes are baskets of stocks that represent a section of the market (e.g., the 500 largest US companies). Index funds are a popular, low-cost way for beginners to invest in a diversified portfolio.',
      resources: [
        { type: 'Article', title: 'What Is the S&P 500?', link: 'https://www.nerdwallet.com/article/investing/what-is-the-sp-500' }
      ]
    },
    { 
      id: 'inv-analysis', 
      title: 'Fundamental Analysis', 
      level: 'intermediate', 
      description: 'Analyze a company\'s financial health by looking at its balance sheet, income statement, and cash flow.', 
      icon: '🔍',
      brief: 'This approach involves evaluating a company\'s intrinsic value based on its financial performance and economic conditions. It\'s about investing in good businesses, not just stock tickers.',
      resources: [
        { type: 'Book', title: 'The Intelligent Investor by Benjamin Graham', link: 'https://www.amazon.com/Intelligent-Investor-Definitive-Investing-Practical/dp/0060555661' }
      ]
    },
    { 
      id: 'inv-technical', 
      title: 'Technical Analysis', 
      level: 'intermediate', 
      description: 'Learn to use charts and other technical indicators to identify market patterns and trends.', 
      icon: '💹',
      brief: 'Technical analysis focuses on historical price movements and trading volumes to predict future price action. It uses tools like moving averages, RSI, and chart patterns.',
      resources: [
        { type: 'Course', title: 'Technical Analysis - TradingView', link: 'https://www.tradingview.com/education/technical-analysis/' }
      ]
    },
    { 
      id: 'inv-portfolio', 
      title: 'Portfolio Management', 
      level: 'advanced', 
      description: 'Understand asset allocation, diversification, and rebalancing strategies to manage risk.', 
      icon: '⚖️',
      brief: 'Building a successful investment strategy is about more than picking winners. It involves constructing a portfolio that aligns with your risk tolerance and long-term goals.',
      resources: [
        { type: 'Article', title: 'Principles of Portfolio Management', link: 'https://www.investopedia.com/terms/p/portfoliomanagement.asp' }
      ]
    },
    { 
      id: 'inv-options', 
      title: 'Options & Derivatives', 
      level: 'advanced', 
      description: 'Explore advanced financial instruments for hedging, speculation, and income generation.', 
      icon: '🎲',
      brief: 'Options are contracts that give the holder the right, but not the obligation, to buy or sell an asset at a set price. They are complex and risky but offer powerful strategies for advanced investors.',
      resources: [
        { type: 'Course', title: 'Options Trading for Beginners - Tastytrade', link: 'https://tastytrade.com/learn-courses/options-trading-for-beginners' }
      ]
    },
  ],
  'business-management': [
    { 
      id: 'biz-fundamentals', 
      title: 'Business Fundamentals', 
      level: 'beginner', 
      description: 'Learn the core concepts of a business, including structure, strategy, and value creation.', 
      icon: '🏢',
      brief: 'Every business, from a startup to a multinational corporation, operates on a set of core principles. This module covers business models, market positioning, and competitive analysis.',
      resources: [
        { type: 'Book', title: 'The Personal MBA by Josh Kaufman', link: 'https://personalmba.com/' }
      ]
    },
    { 
      id: 'biz-marketing', 
      title: 'Principles of Marketing', 
      level: 'beginner', 
      description: 'Understand the 4 Ps of marketing (Product, Price, Place, Promotion) and customer segmentation.', 
      icon: '📢',
      brief: 'Marketing is the art and science of creating demand for a product or service. Learn how to identify your target audience, craft a compelling message, and choose the right channels to reach them.',
      resources: [
        { type: 'Course', title: 'Introduction to Marketing - Coursera', link: 'https://www.coursera.org/learn/wharton-marketing' }
      ]
    },
    { 
      id: 'biz-ops', 
      title: 'Operations Management', 
      level: 'intermediate', 
      description: 'Learn how to manage the processes that produce and deliver goods and services efficiently.', 
      icon: '🔄',
      brief: 'Operations is the engine of a business. This field focuses on optimizing processes, managing supply chains, ensuring quality control, and improving productivity.',
      resources: [
        { type: 'Article', title: 'What is Operations Management?', link: 'https://www.investopedia.com/terms/o/operations-management.asp' }
      ]
    },
    { 
      id: 'biz-finance', 
      title: 'Corporate Finance', 
      level: 'advanced', 
      description: 'Dive into investment analysis, capital budgeting, and financial planning for corporations.', 
      icon: '💰',
      brief: 'Corporate finance deals with the capital structure of a corporation, including its funding and the actions managers take to increase the value of the firm to the shareholders.',
      resources: [
        { type: 'Course', title: 'Corporate Finance Essentials - Coursera', link: 'https://www.coursera.org/learn/corporate-finance-essentials' }
      ]
    },
  ],
  'project-management': [
    { 
      id: 'pm-principles', 
      title: 'Project Management Principles', 
      level: 'beginner', 
      description: 'Learn the five stages of the project lifecycle: initiation, planning, execution, monitoring, and closure.', 
      icon: '📝',
      brief: 'A project is a temporary endeavor with a defined beginning and end. This module covers the foundational framework for managing any project successfully, regardless of size or industry.',
      resources: [
        { type: 'Article', title: 'A Beginner\'s Guide to Project Management', link: 'https://www.wrike.com/project-management-guide/faq/what-is-project-management/' }
      ]
    },
    { 
      id: 'pm-agile', 
      title: 'Agile & Scrum Methodologies', 
      level: 'intermediate', 
      description: 'Master the iterative approach of Agile and the Scrum framework for flexible project management.', 
      icon: '🏃',
      brief: 'Agile is a mindset focused on delivering value in small, incremental steps. Scrum is the most popular framework for implementing Agile, using roles, events, and artifacts to manage complex work.',
      resources: [
        { type: 'Guide', title: 'The Scrum Guide', link: 'https://scrumguides.org/scrum-guide.html' }
      ]
    },
    { 
      id: 'pm-risk', 
      title: 'Risk Management', 
      level: 'intermediate', 
      description: 'Learn to identify, assess, and mitigate potential risks that could impact your project.', 
      icon: '⚠️',
      brief: 'Every project has risks. Professional project managers proactively identify what could go wrong and create plans to either avoid the risk, reduce its impact, or accept it.',
      resources: [
        { type: 'Article', title: 'Project Risk Management: A Complete Guide', link: 'https://asana.com/resources/project-risk-management' }
      ]
    },
    { 
      id: 'pm-certification', 
      title: 'PMP/PRINCE2 Prep', 
      level: 'advanced', 
      description: 'Prepare for professional certification exams like PMP (Project Management Professional).', 
      icon: '🎓',
      brief: 'Certifications like the PMP are globally recognized standards that validate your knowledge and experience in project management. This step involves in-depth study of the PMBOK (Project Management Body of Knowledge).',
      resources: [
        { type: 'Course', title: 'PMP Certification Exam Prep - Udemy', link: 'https://www.udemy.com/course/pmp-certification-exam-prep-course-pmbok-6th-edition/' }
      ]
    },
  ]
};