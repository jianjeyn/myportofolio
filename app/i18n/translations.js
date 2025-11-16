export const translations = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      portfolio: "Portfolio",
      journey: "Journey",
    },
    hero: {
      greeting: "Hi, Call me Jen!",
      cta: "See Portfolio",
    },
    about: {
      title: "About Me",
      whoIAm: {
        title: "Who I Am",
        content: "I'm a Computer Science student at Universitas Pendidikan Indonesia, focused on building adaptable technology. Living in two distinct Indonesian ecosystems from Makassar to Bandung has shown me how differences in language, digital habits, and local needs demand different kinds of solutions.",
      },
      contact: {
        title: "Contact",
        email: "Email",
        phone: "Phone",
        location: "Location",
        locationValue: "Bandung, West Java, Indonesia",
        born: "Born",
        bornValue: "December 13, 2004",
        connect: "Connect with me",
      },
      education: {
        title: "Education",
        current: "B.Sc in Computer Science",
        currentSchool: "Universitas Pendidikan Indonesia",
        previous: "High School Diploma",
        previousSchool: "SMA Negeri 1 Gowa",
      },
      programmingLanguages: {
        title: "Programming Languages",
        python: {
          name: "Python",
          desc: "Data analysis, visualization, storytelling",
        },
        javascript: {
          name: "JavaScript & TypeScript",
          desc: "Frontend scripting, dynamic interactions",
        },
        others: {
          name: "Java, C++, PHP, Dart",
          desc: "Backend & OOP experience",
        },
        database: {
          name: "SQL & MongoDB",
          desc: "Relational & non-relational databases",
        },
      },
      frameworks: {
        title: "Frameworks & Tools",
        webDev: "Web Dev",
        dataDevOps: "Data & DevOps",
        development: "Development",
        designData: "Design & Data",
      },
      softSkills: {
        title: "Soft Skills",
        publicSpeaking: {
          name: "Public Speaking",
          desc: "Debate, event hosting, intercultural communication",
        },
        leadership: {
          name: "Leadership & Project Coordination",
          desc: "Tech teams & intercultural programs",
        },
        communication: {
          name: "Cross-cultural Communication",
          desc: "Netzwerk Klima, Sahabat DIA collaborations",
        },
        writing: {
          name: "Scientific Writing & Research",
          desc: "Academic training programs",
        },
      },
    },
    journey: {
    title: "My Journey",
    items: [
      {
        id: 1,
        title: "President of the English Club",
        category: "Leadership",
        description: "Led a debate-focused English community and expanded learning opportunities at school",
        details: "Grew the English Club from 15 to more than 50 active members while strengthening the school’s academic competition culture."
      },
      {
        id: 2,
        title: "Runner-up – German Language Quiz Competition",
        category: "Achievement",
        description: "Demonstrated strong dedication to foreign language learning",
        details: "Secured second place in a province-wide German competition, excelling in vocabulary, grammar, and cultural knowledge."
      },
      {
        id: 3,
        title: "Outstanding Student Scholarship Recipient – Governor of South Sulawesi",
        category: "Achievement",
        description: "Official recognition for academic and extracurricular excellence at the provincial level",
        details: "Awarded for consistent academic success and meaningful contributions in language and leadership initiatives."
      },
      {
        id: 4,
        title: "Indonesian Delegate – Netzwerk Klima, Thailand",
        category: "Impact",
        description: "Represented Indonesia in a regional youth climate camp",
        details: "Selected as one of 24 young participants from six countries to design sustainable solutions using German as the primary working language."
      },
      {
        id: 5,
        title: "Sahabat DIA Batch 8 – International Event Organizer",
        category: "Community",
        description: "Part of a campus-based multicultural events organizing team",
        details: "Contributed to coordinating the ‘Culture N Chill’ program involving participants from more than 20 countries."
      },
      {
        id: 6,
        title: "Academic Visit Coordination – USIM x UPI",
        category: "International",
        description: "Engaged in facilitating and supporting an international academic visit",
        details: "Handled documentation and coordination across multiple faculties as part of strengthening international collaboration prospects."
      },
      {
        id: 7,
        title: "PKM-RSH Grant Recipient",
        category: "Innovation",
        description: "Developer of EcoSCha — an environmental education web-based game",
        details: "Integrated ethnopedagogy with gamified digital learning to enhance ecological literacy among students."
      },
      {
        id: 8,
        title: "UNESCO WIDE 2025",
        category: "Certification",
        description: "Women in Digital Entrepreneurship Program",
        details: "Built digital literacy, innovation skills, and entrepreneurial capacity for aspiring women founders."
      },
    ],
  },
    portfolio: {
      title: "My Portfolio",
      backToHome: "Back to Home",
      modal: {
        aboutProject: "About Project",
        role: "Role",
        duration: "Duration",
        technologiesUsed: "Technologies Used",
        viewLiveProject: "View Live Project",
      },
      projects: [
        {
          title: "EcoSCha Game Card - Environmental Ethnopedagogy",
          description: "UI design - User research - webflow develop",
          image: "/assets/p12.png",
          details: {
            fullDescription: "Interactive web-based card game that integrates an ethnopedagogical approach to environmental education. This project was successfully funded under the PKM-RSH (Social Humanities Research) scheme by BELMAWA, part of Indonesia's Ministry of Education, Culture, Research, and Technology. The game bridges modern technology with traditional values of environmental stewardship by using a culturally relevant social deduction game to foster ecological literacy and community-based problem-solving.",
            images: [
              "/assets/p11.png",
              "/assets/p12.png",
              "/assets/p13.png",
              "/assets/p14.png",
              "/assets/p15.png",
            ],
            tech: ["React", "Node.js", "MongoDB", "Socket.io"],
            role: "Website Developer & Data Researcher",
            duration: "3 months",
            link: "https://ecoscha.com",
          },
        },
        {
          title: "DIA - Dashboard",
          description: "Data Visualization | Next.js | TypeScript",
          image: "/assets/p-dashboard.png",
          details: {
            fullDescription: "Developed an interactive dashboard application using TypeScript. This project focuses on visualizing data to provide clear and actionable insights. The dashboard is designed with a user-friendly interface to facilitate data exploration and analysis",
            images: [
              "/assets/p25.png",
              "/assets/p-dashboard.png",
            ],
            tech: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
            role: "Project Manager",
            duration: "2 months",
            link: "#",
          },
        },
        {
          title: "Dashboard Saham - Big Data Project",
          description: "Big Data | Next.js | Web Scraping | Data Pipelines",
          image: "/assets/p-saham1.png",
          details: {
            fullDescription: "An integrated stock market dashboard developed as a Big Data course project. It displays real-time and historical stock prices from BEI, summarizes the latest financial news using LLMs, and includes quarterly financial reports from IDX. The frontend is built using Next.js with a clean, responsive UI, while the backend pipeline is automated using Apache Airflow, scraping data with Selenium, processing it, and storing it in MongoDB.",
            images: [
              "/assets/p-saham1.png",
            ],
            tech: ["Next.js", "MongoDB", "Web Scraping", "Data Pipelines", "Apache Airflow", "Selenium"],
            role: "Project Developer (Big Data Course)",
            duration: "5 months",
            link: "https://github.com/jianjeyn/stock-dashboard",
          },
        },
        {
          title: "Mobile Recipe App (Frontend + Backend)",
          description: "Mobile App | Flutter | Node.js | UI/UX",
          image: "/assets/p-recipe.png",
          details: {
            fullDescription: "A cross-platform mobile recipe app built using Flutter (Frontend) and Node.js (Backend). Developed as part of the Proyek Visualisasi course, this app focuses on providing a beautiful, responsive, and user-friendly interface for food recipe exploration.",
            images: [
              "/assets/p-recipe.png",
            ],
            tech: ["Flutter", "Node.js", "User Interface Design", "User Experience (UX)", "API", "Version Control"],
            role: "Full Stack Developer (Course Project)",
            duration: "4 months",
            link: "https://github.com/jianjeyn/NodeJS-BackEnd-DelishApp",
          },
        },
        {
          title: "Internal Search Engine",
          description: "Python (Flask) | Web Scraping | Graph Algorithms",
          image: "/assets/p-search1.png",
          details: {
            fullDescription: "A custom-built internal search engine designed to crawl and index pages within a single domain using BFS and DFS graph traversal algorithms. It features a responsive frontend and enables keyword-based search with link route visualization from the homepage to the matched result.",
            images: [
              "/assets/p-search1.png",
            ],
            tech: ["Python (Flask)", "Web Scraping", "Graph Algorithms", "Tailwind CSS", "Information Retrieval", "BFS", "DFS"],
            role: "Project Developer (Course Project)",
            duration: "1 week",
            link: "https://github.com/jianjeyn/SearchEngineAndal",
          },
        },
        {
          title: "Collect-JellyFish-Game",
          description: "Java | Object-Oriented Programming (OOP) | MySQL",
          image: "/assets/pjf.png",
          details: {
            fullDescription: "A simple 2D game built using Java, where players control SpongeBob to catch falling jellyfish and score points. The game features a life system, a persistent high score scoreboard, and engaging graphics and sounds. Designed for both fun and educational purposes in object-oriented programming and database integration.",
            images: [
              "/assets/pjf1.png",
              "/assets/pjf2.png",
              "/assets/pjf3.png",
            ],
            tech: ["Java", "Object-Oriented Programming (OOP)", "MySQL", "GUI development"],
            role: "Project Developer (OOP Course)",
            duration: "2 months",
            link: "https://github.com/jianjeyn/Collect-JellyFish-Game",
          },
        },
        {
          title: "3D Rural Environment (OpenGL Project)",
          description: "C++ | OpenGL | Procedural Generation | Dynamic Weather",
          image: "/assets/p-grafikom.png",
          details: {
            fullDescription: "A 3D rural environment simulation built using C++ and OpenGL as a final group project. The scene features a first-person camera (Camera.h), dynamic day/night lighting cycle, and a procedural generation system (houseGenerate.h, treeGenerate.h, cloudGenerate.h) to create a unique landscape. A key component is the dynamic weather system (weather.h), allowing user control to switch between rain, snow, and hail, complete with realistic particle effects. The project integrates over 13 3D models, custom shaders, and advanced camera controls.",
            images: [
              "/assets/p-grafikom.png",
            ],
            tech: ["C++", "OpenGL", "GLFW", "GLAD", "GLSL", "Procedural Generation", "Particle Systems"],
            role: "Group Member (Kelompok 1)",
            duration: "4 months",
            link: "#",
          },
        },
      ],
    },
  },
  id: {
    nav: {
      home: "Beranda",
      about: "Tentang",
      portfolio: "Portofolio",
      journey: "Perjalanan",
    },
    hero: {
      greeting: "Hai, Panggil Aku Jen!",
      cta: "Lihat Portofolio",
    },
    about: {
      title: "Tentang Saya",
      whoIAm: {
        title: "Siapa Saya",
        content: "Saya adalah mahasiswa Ilmu Komputer di Universitas Pendidikan Indonesia, fokus membangun teknologi yang adaptif. Tinggal di dua ekosistem Indonesia yang berbeda dari Makassar ke Bandung telah menunjukkan kepada saya bagaimana perbedaan bahasa, kebiasaan digital, dan kebutuhan lokal memerlukan jenis solusi yang berbeda.",
      },
      contact: {
        title: "Kontak",
        email: "Email",
        phone: "Telepon",
        location: "Lokasi",
        locationValue: "Bandung, Jawa Barat, Indonesia",
        born: "Lahir",
        bornValue: "13 Desember 2004",
        connect: "Hubungi saya",
      },
      education: {
        title: "Pendidikan",
        current: "S1 Ilmu Komputer",
        currentSchool: "Universitas Pendidikan Indonesia",
        previous: "Diploma SMA",
        previousSchool: "SMA Negeri 1 Gowa",
      },
      programmingLanguages: {
        title: "Bahasa Pemrograman",
        python: {
          name: "Python",
          desc: "Analisis data, visualisasi, storytelling",
        },
        javascript: {
          name: "JavaScript & TypeScript",
          desc: "Scripting frontend, interaksi dinamis",
        },
        others: {
          name: "Java, C++, PHP, Dart",
          desc: "Backend & pengalaman OOP",
        },
        database: {
          name: "SQL & MongoDB",
          desc: "Database relasional & non-relasional",
        },
      },
      frameworks: {
        title: "Framework & Tools",
        webDev: "Web Dev",
        dataDevOps: "Data & DevOps",
        development: "Development",
        designData: "Design & Data",
      },
      softSkills: {
        title: "Soft Skills",
        publicSpeaking: {
          name: "Public Speaking",
          desc: "Debat, hosting acara, komunikasi antarbudaya",
        },
        leadership: {
          name: "Kepemimpinan & Koordinasi Proyek",
          desc: "Tim teknologi & program antarbudaya",
        },
        communication: {
          name: "Komunikasi Lintas Budaya",
          desc: "Kolaborasi Netzwerk Klima, Sahabat DIA",
        },
        writing: {
          name: "Penulisan Ilmiah & Penelitian",
          desc: "Program pelatihan akademik",
        },
      },
    },
    journey: {
  title: "Perjalanan Saya",
  items: [
    {
      id: 1,
      title: "Ketua English Club",
      category: "Kepemimpinan",
      description: "Menggerakkan komunitas debat dan memperluas ruang belajar bahasa Inggris di sekolah",
      details: "Meningkatkan jumlah anggota English Club dari 15 menjadi lebih dari 50 pelajar aktif serta memperkuat budaya kompetisi akademik."
    },
    {
      id: 2,
      title: "Runner-up Lomba Kuis Bahasa Jerman",
      category: "Pencapaian",
      description: "Menunjukkan dedikasi kuat pada pembelajaran bahasa asing",
      details: "Meraih posisi kedua pada kompetisi Jerman tingkat provinsi, menonjol dalam kosakata, tata bahasa, hingga pengetahuan budaya."
    },
    {
      id: 3,
      title: "Penerima Beasiswa Siswa Berprestasi – Gubernur Sulawesi Selatan",
      category: "Pencapaian",
      description: "Pengakuan resmi atas prestasi akademik dan non-akademik tingkat provinsi",
      details: "Diberikan sebagai bentuk apresiasi terhadap konsistensi prestasi sekolah serta kontribusi positif di bidang bahasa dan kepemimpinan."
    },
    {
      id: 4,
      title: "Delegasi Indonesia – Netzwerk Klima, Thailand",
      category: "Dampak",
      description: "Mewakili Indonesia dalam camp iklim tingkat regional",
      details: "Dipilih sebagai 1 dari 24 peserta muda dari 6 negara untuk merancang solusi berkelanjutan menggunakan bahasa Jerman sebagai bahasa kerja."
    },
    {
      id: 5,
      title: "Sahabat DIA Batch 8 – International Event Organizer",
      category: "Komunitas",
      description: "Bagian dari tim penyelenggara acara lintas budaya di lingkungan kampus",
      details: "Berperan dalam koordinasi program 'Culture N Chill' bersama peserta dari lebih dari 20 negara."
    },
    {
      id: 6,
      title: "Academic Visit Coordination – USIM x UPI",
      category: "Internasional",
      description: "Terlibat dalam penyambutan dan pendampingan kunjungan akademik internasional",
      details: "Mendukung dokumentasi dan koordinasi visitasi akademik lintas fakultas sebagai bagian dari eksplorasi kerja sama internasional."
    },
    {
      id: 7,
      title: "Penerima Grant PKM-RSH",
      category: "Inovasi",
      description: "Pengembang EcoSCha – platform edukasi lingkungan berbasis gim",
      details: "Mengintegrasikan etnopedagogi dan teknologi gamifikasi untuk meningkatkan literasi ekologi di kalangan pelajar."
    },
    {
      id: 8,
      title: "UNESCO WIDE 2025",
      category: "Sertifikasi",
      description: "Women in Digital Entrepreneurship Program",
      details: "Mendalami literasi digital, inovasi, dan pengembangan kapasitas bagi women founders."
    },
  ],
},
    portfolio: {
      title: "Portofolio Saya",
      backToHome: "Kembali ke Beranda",
      modal: {
        aboutProject: "Tentang Proyek",
        role: "Peran",
        duration: "Durasi",
        technologiesUsed: "Teknologi yang Digunakan",
        viewLiveProject: "Lihat Proyek Langsung",
      },
      projects: [
        {
          title: "EcoSCha Game Card - Environmental Ethnopedagogy",
          description: "Desain UI - Riset pengguna - pengembangan webflow",
          image: "/assets/p12.png",
          details: {
            fullDescription: "Game kartu berbasis web interaktif yang mengintegrasikan pendekatan etnopedagogi untuk pendidikan lingkungan. Proyek ini berhasil didanai di bawah skema PKM-RSH (Penelitian Sosial Humaniora) oleh BELMAWA, bagian dari Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi Indonesia. Game ini menjembatani teknologi modern dengan nilai-nilai tradisional pengelolaan lingkungan dengan menggunakan permainan deduksi sosial yang relevan secara budaya untuk memupuk literasi ekologis dan pemecahan masalah berbasis komunitas.",
            images: [
              "/assets/p11.png",
              "/assets/p12.png",
              "/assets/p13.png",
              "/assets/p14.png",
              "/assets/p15.png",
            ],
            tech: ["React", "Node.js", "MongoDB", "Socket.io"],
            role: "Pengembangan Website & Pengolahan Data",
            duration: "3 bulan",
            link: "https://ecoscha.com",
          },
        },
        {
          title: "DIA - Dashboard",
          description: "Visualisasi Data | Next.js | TypeScript",
          image: "/assets/p-dashboard.png",
          details: {
            fullDescription: "Mengembangkan aplikasi dashboard interaktif menggunakan TypeScript. Proyek ini berfokus pada visualisasi data untuk memberikan wawasan yang jelas dan dapat ditindaklanjuti. Dashboard dirancang dengan antarmuka yang ramah pengguna untuk memfasilitasi eksplorasi dan analisis data",
            images: [
              "/assets/p25.png",
              "/assets/p-dashboard.png",
            ],
            tech: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
            role: "Project Manager",
            duration: "2 bulan",
            link: "#",
          },
        },
        {
          title: "Dashboard Saham - Proyek Big Data",
          description: "Big Data | Next.js | Web Scraping | Data Pipelines",
          image: "/assets/p-saham1.png",
          details: {
            fullDescription: "Dashboard pasar saham terintegrasi yang dikembangkan sebagai proyek mata kuliah Big Data. Menampilkan harga saham real-time dan historis dari BEI, merangkum berita keuangan terbaru menggunakan LLM, dan menyertakan laporan keuangan kuartalan dari IDX. Frontend dibangun menggunakan Next.js dengan UI yang bersih dan responsif, sedangkan pipeline backend diotomatisasi menggunakan Apache Airflow, melakukan scraping data dengan Selenium, memprosesnya, dan menyimpannya di MongoDB.",
            images: [
              "/assets/p-saham1.png",
            ],
            tech: ["Next.js", "MongoDB", "Web Scraping", "Data Pipelines", "Apache Airflow", "Selenium"],
            role: "Project Developer (Mata Kuliah Big Data)",
            duration: "5 bulan",
            link: "https://github.com/jianjeyn/stock-dashboard",
          },
        },
        {
          title: "Aplikasi Resep Mobile (Frontend + Backend)",
          description: "Aplikasi Mobile | Flutter | Node.js | UI/UX",
          image: "/assets/p-recipe.png",
          details: {
            fullDescription: "Aplikasi resep mobile lintas platform yang dibangun menggunakan Flutter (Frontend) dan Node.js (Backend). Dikembangkan sebagai bagian dari mata kuliah Proyek Visualisasi, aplikasi ini berfokus pada penyediaan antarmuka yang indah, responsif, dan ramah pengguna untuk eksplorasi resep makanan.",
            images: [
              "/assets/p-recipe.png",
            ],
            tech: ["Flutter", "Node.js", "User Interface Design", "User Experience (UX)", "API", "Version Control"],
            role: "Full Stack Developer (Proyek Mata Kuliah)",
            duration: "4 bulan",
            link: "https://github.com/jianjeyn/NodeJS-BackEnd-DelishApp",
          },
        },
        {
          title: "Internal Search Engine",
          description: "Python (Flask) | Web Scraping | Graph Algorithms",
          image: "/assets/p-search1.png",
          details: {
            fullDescription: "Mesin pencari internal khusus yang dirancang untuk merayapi dan mengindeks halaman dalam satu domain menggunakan algoritma graph traversal BFS dan DFS. Menampilkan frontend yang responsif dan memungkinkan pencarian berbasis kata kunci dengan visualisasi rute tautan dari homepage ke hasil yang cocok.",
            images: [
              "/assets/p-search1.png",
            ],
            tech: ["Python (Flask)", "Web Scraping", "Graph Algorithms", "Tailwind CSS", "Information Retrieval", "BFS", "DFS"],
            role: "Project Developer (Proyek Mata Kuliah)",
            duration: "1 minggu",
            link: "https://github.com/jianjeyn/SearchEngineAndal",
          },
        },
        {
          title: "Collect-JellyFish-Game",
          description: "Java | Object-Oriented Programming (OOP) | MySQL",
          image: "/assets/pjf.png",
          details: {
            fullDescription: "Game 2D sederhana yang dibangun menggunakan Java, di mana pemain mengontrol SpongeBob untuk menangkap ubur-ubur yang jatuh dan mencetak poin. Game ini memiliki sistem nyawa, papan skor tinggi yang persisten, serta grafik dan suara yang menarik. Dirancang untuk tujuan hiburan dan edukatif dalam pemrograman berorientasi objek dan integrasi database.",
            images: [
              "/assets/pjf1.png",
              "/assets/pjf2.png",
              "/assets/pjf3.png",
            ],
            tech: ["Java", "Object-Oriented Programming (OOP)", "MySQL", "GUI development"],
            role: "Project Developer (Mata Kuliah OOP)",
            duration: "2 bulan",
            link: "https://github.com/jianjeyn/Collect-JellyFish-Game",
          },
        },
        {
          title: "3D Rural Environment (Proyek OpenGL)",
          description: "C++ | OpenGL | Procedural Generation | Dynamic Weather",
          image: "/assets/p-grafikom.png",
          details: {
            fullDescription: "Simulasi lingkungan pedesaan 3D yang dibangun menggunakan C++ dan OpenGL sebagai proyek kelompok akhir. Scene menampilkan kamera first-person (Camera.h), siklus pencahayaan siang/malam yang dinamis, dan sistem generasi prosedural (houseGenerate.h, treeGenerate.h, cloudGenerate.h) untuk menciptakan lanskap yang unik. Komponen utama adalah sistem cuaca dinamis (weather.h), memungkinkan kontrol pengguna untuk beralih antara hujan, salju, dan hujan es, lengkap dengan efek partikel yang realistis. Proyek ini mengintegrasikan lebih dari 13 model 3D, shader kustom, dan kontrol kamera lanjutan.",
            images: [
              "/assets/p-grafikom.png",
            ],
            tech: ["C++", "OpenGL", "GLFW", "GLAD", "GLSL", "Procedural Generation", "Particle Systems"],
            role: "Anggota Kelompok (Kelompok 1)",
            duration: "4 bulan",
            link: "#",
          },
        },
      ],
    },
  },
}