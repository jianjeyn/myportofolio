(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/i18n/translations.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "translations",
    ()=>translations
]);
const translations = {
    en: {
        nav: {
            home: "Home",
            about: "About",
            portfolio: "Portfolio",
            journey: "Journey"
        },
        hero: {
            greeting: "Hi, Call me Jen!",
            cta: "See Portfolio"
        },
        about: {
            title: "About Me",
            whoIAm: {
                title: "Who I Am",
                content: "I'm a Computer Science student at Universitas Pendidikan Indonesia, focused on building adaptable technology. Living in two distinct Indonesian ecosystems from Makassar to Bandung has shown me how differences in language, digital habits, and local needs demand different kinds of solutions."
            },
            contact: {
                title: "Contact",
                email: "Email",
                phone: "Phone",
                location: "Location",
                locationValue: "Bandung, West Java, Indonesia",
                born: "Born",
                bornValue: "December 13, 2004",
                connect: "Connect with me"
            },
            education: {
                title: "Education",
                current: "B.Sc in Computer Science",
                currentSchool: "Universitas Pendidikan Indonesia",
                previous: "High School Diploma",
                previousSchool: "SMA Negeri 1 Gowa"
            },
            programmingLanguages: {
                title: "Programming Languages",
                python: {
                    name: "Python",
                    desc: "Data analysis, visualization, storytelling"
                },
                javascript: {
                    name: "JavaScript & TypeScript",
                    desc: "Frontend scripting, dynamic interactions"
                },
                others: {
                    name: "Java, C++, PHP, Dart",
                    desc: "Backend & OOP experience"
                },
                database: {
                    name: "SQL & MongoDB",
                    desc: "Relational & non-relational databases"
                }
            },
            frameworks: {
                title: "Frameworks & Tools",
                webDev: "Web Dev",
                dataDevOps: "Data & DevOps",
                development: "Development",
                designData: "Design & Data"
            },
            softSkills: {
                title: "Soft Skills",
                publicSpeaking: {
                    name: "Public Speaking",
                    desc: "Debate, event hosting, intercultural communication"
                },
                leadership: {
                    name: "Leadership & Project Coordination",
                    desc: "Tech teams & intercultural programs"
                },
                communication: {
                    name: "Cross-cultural Communication",
                    desc: "Netzwerk Klima, Sahabat DIA collaborations"
                },
                writing: {
                    name: "Scientific Writing & Research",
                    desc: "Academic training programs"
                }
            }
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
                }
            ]
        },
        portfolio: {
            title: "My Portfolio",
            backToHome: "Back to Home",
            modal: {
                aboutProject: "About Project",
                role: "Role",
                duration: "Duration",
                technologiesUsed: "Technologies Used",
                viewLiveProject: "View Live Project"
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
                            "/assets/p15.png"
                        ],
                        tech: [
                            "React",
                            "Node.js",
                            "MongoDB",
                            "Socket.io"
                        ],
                        role: "Website Developer & Data Researcher",
                        duration: "3 months",
                        link: "https://ecoscha.com"
                    }
                },
                {
                    title: "DIA - Dashboard",
                    description: "Data Visualization | Next.js | TypeScript",
                    image: "/assets/p-dashboard.png",
                    details: {
                        fullDescription: "Developed an interactive dashboard application using TypeScript. This project focuses on visualizing data to provide clear and actionable insights. The dashboard is designed with a user-friendly interface to facilitate data exploration and analysis",
                        images: [
                            "/assets/p25.png",
                            "/assets/p-dashboard.png"
                        ],
                        tech: [
                            "Next.js",
                            "React",
                            "Tailwind CSS",
                            "TypeScript"
                        ],
                        role: "Project Manager",
                        duration: "2 months",
                        link: "#"
                    }
                },
                {
                    title: "Dashboard Saham - Big Data Project",
                    description: "Big Data | Next.js | Web Scraping | Data Pipelines",
                    image: "/assets/p-saham1.png",
                    details: {
                        fullDescription: "An integrated stock market dashboard developed as a Big Data course project. It displays real-time and historical stock prices from BEI, summarizes the latest financial news using LLMs, and includes quarterly financial reports from IDX. The frontend is built using Next.js with a clean, responsive UI, while the backend pipeline is automated using Apache Airflow, scraping data with Selenium, processing it, and storing it in MongoDB.",
                        images: [
                            "/assets/p-saham1.png"
                        ],
                        tech: [
                            "Next.js",
                            "MongoDB",
                            "Web Scraping",
                            "Data Pipelines",
                            "Apache Airflow",
                            "Selenium"
                        ],
                        role: "Project Developer (Big Data Course)",
                        duration: "5 months",
                        link: "https://github.com/jianjeyn/stock-dashboard"
                    }
                },
                {
                    title: "Mobile Recipe App (Frontend + Backend)",
                    description: "Mobile App | Flutter | Node.js | UI/UX",
                    image: "/assets/p-recipe.png",
                    details: {
                        fullDescription: "A cross-platform mobile recipe app built using Flutter (Frontend) and Node.js (Backend). Developed as part of the Proyek Visualisasi course, this app focuses on providing a beautiful, responsive, and user-friendly interface for food recipe exploration.",
                        images: [
                            "/assets/p-recipe.png"
                        ],
                        tech: [
                            "Flutter",
                            "Node.js",
                            "User Interface Design",
                            "User Experience (UX)",
                            "API",
                            "Version Control"
                        ],
                        role: "Full Stack Developer (Course Project)",
                        duration: "4 months",
                        link: "https://github.com/jianjeyn/NodeJS-BackEnd-DelishApp"
                    }
                },
                {
                    title: "Internal Search Engine",
                    description: "Python (Flask) | Web Scraping | Graph Algorithms",
                    image: "/assets/p-search1.png",
                    details: {
                        fullDescription: "A custom-built internal search engine designed to crawl and index pages within a single domain using BFS and DFS graph traversal algorithms. It features a responsive frontend and enables keyword-based search with link route visualization from the homepage to the matched result.",
                        images: [
                            "/assets/p-search1.png"
                        ],
                        tech: [
                            "Python (Flask)",
                            "Web Scraping",
                            "Graph Algorithms",
                            "Tailwind CSS",
                            "Information Retrieval",
                            "BFS",
                            "DFS"
                        ],
                        role: "Project Developer (Course Project)",
                        duration: "1 week",
                        link: "https://github.com/jianjeyn/SearchEngineAndal"
                    }
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
                            "/assets/pjf3.png"
                        ],
                        tech: [
                            "Java",
                            "Object-Oriented Programming (OOP)",
                            "MySQL",
                            "GUI development"
                        ],
                        role: "Project Developer (OOP Course)",
                        duration: "2 months",
                        link: "https://github.com/jianjeyn/Collect-JellyFish-Game"
                    }
                },
                {
                    title: "3D Rural Environment (OpenGL Project)",
                    description: "C++ | OpenGL | Procedural Generation | Dynamic Weather",
                    image: "/assets/p-grafikom.png",
                    details: {
                        fullDescription: "A 3D rural environment simulation built using C++ and OpenGL as a final group project. The scene features a first-person camera (Camera.h), dynamic day/night lighting cycle, and a procedural generation system (houseGenerate.h, treeGenerate.h, cloudGenerate.h) to create a unique landscape. A key component is the dynamic weather system (weather.h), allowing user control to switch between rain, snow, and hail, complete with realistic particle effects. The project integrates over 13 3D models, custom shaders, and advanced camera controls.",
                        images: [
                            "/assets/p-grafikom.png"
                        ],
                        tech: [
                            "C++",
                            "OpenGL",
                            "GLFW",
                            "GLAD",
                            "GLSL",
                            "Procedural Generation",
                            "Particle Systems"
                        ],
                        role: "Group Member (Kelompok 1)",
                        duration: "4 months",
                        link: "#"
                    }
                }
            ]
        }
    },
    id: {
        nav: {
            home: "Beranda",
            about: "Tentang",
            portfolio: "Portofolio",
            journey: "Perjalanan"
        },
        hero: {
            greeting: "Hai, Panggil Aku Jen!",
            cta: "Lihat Portofolio"
        },
        about: {
            title: "Tentang Saya",
            whoIAm: {
                title: "Siapa Saya",
                content: "Saya adalah mahasiswa Ilmu Komputer di Universitas Pendidikan Indonesia, fokus membangun teknologi yang adaptif. Tinggal di dua ekosistem Indonesia yang berbeda dari Makassar ke Bandung telah menunjukkan kepada saya bagaimana perbedaan bahasa, kebiasaan digital, dan kebutuhan lokal memerlukan jenis solusi yang berbeda."
            },
            contact: {
                title: "Kontak",
                email: "Email",
                phone: "Telepon",
                location: "Lokasi",
                locationValue: "Bandung, Jawa Barat, Indonesia",
                born: "Lahir",
                bornValue: "13 Desember 2004",
                connect: "Hubungi saya"
            },
            education: {
                title: "Pendidikan",
                current: "S1 Ilmu Komputer",
                currentSchool: "Universitas Pendidikan Indonesia",
                previous: "Diploma SMA",
                previousSchool: "SMA Negeri 1 Gowa"
            },
            programmingLanguages: {
                title: "Bahasa Pemrograman",
                python: {
                    name: "Python",
                    desc: "Analisis data, visualisasi, storytelling"
                },
                javascript: {
                    name: "JavaScript & TypeScript",
                    desc: "Scripting frontend, interaksi dinamis"
                },
                others: {
                    name: "Java, C++, PHP, Dart",
                    desc: "Backend & pengalaman OOP"
                },
                database: {
                    name: "SQL & MongoDB",
                    desc: "Database relasional & non-relasional"
                }
            },
            frameworks: {
                title: "Framework & Tools",
                webDev: "Web Dev",
                dataDevOps: "Data & DevOps",
                development: "Development",
                designData: "Design & Data"
            },
            softSkills: {
                title: "Soft Skills",
                publicSpeaking: {
                    name: "Public Speaking",
                    desc: "Debat, hosting acara, komunikasi antarbudaya"
                },
                leadership: {
                    name: "Kepemimpinan & Koordinasi Proyek",
                    desc: "Tim teknologi & program antarbudaya"
                },
                communication: {
                    name: "Komunikasi Lintas Budaya",
                    desc: "Kolaborasi Netzwerk Klima, Sahabat DIA"
                },
                writing: {
                    name: "Penulisan Ilmiah & Penelitian",
                    desc: "Program pelatihan akademik"
                }
            }
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
                }
            ]
        },
        portfolio: {
            title: "Portofolio Saya",
            backToHome: "Kembali ke Beranda",
            modal: {
                aboutProject: "Tentang Proyek",
                role: "Peran",
                duration: "Durasi",
                technologiesUsed: "Teknologi yang Digunakan",
                viewLiveProject: "Lihat Proyek Langsung"
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
                            "/assets/p15.png"
                        ],
                        tech: [
                            "React",
                            "Node.js",
                            "MongoDB",
                            "Socket.io"
                        ],
                        role: "Pengembangan Website & Pengolahan Data",
                        duration: "3 bulan",
                        link: "https://ecoscha.com"
                    }
                },
                {
                    title: "DIA - Dashboard",
                    description: "Visualisasi Data | Next.js | TypeScript",
                    image: "/assets/p-dashboard.png",
                    details: {
                        fullDescription: "Mengembangkan aplikasi dashboard interaktif menggunakan TypeScript. Proyek ini berfokus pada visualisasi data untuk memberikan wawasan yang jelas dan dapat ditindaklanjuti. Dashboard dirancang dengan antarmuka yang ramah pengguna untuk memfasilitasi eksplorasi dan analisis data",
                        images: [
                            "/assets/p25.png",
                            "/assets/p-dashboard.png"
                        ],
                        tech: [
                            "Next.js",
                            "React",
                            "Tailwind CSS",
                            "TypeScript"
                        ],
                        role: "Project Manager",
                        duration: "2 bulan",
                        link: "#"
                    }
                },
                {
                    title: "Dashboard Saham - Proyek Big Data",
                    description: "Big Data | Next.js | Web Scraping | Data Pipelines",
                    image: "/assets/p-saham1.png",
                    details: {
                        fullDescription: "Dashboard pasar saham terintegrasi yang dikembangkan sebagai proyek mata kuliah Big Data. Menampilkan harga saham real-time dan historis dari BEI, merangkum berita keuangan terbaru menggunakan LLM, dan menyertakan laporan keuangan kuartalan dari IDX. Frontend dibangun menggunakan Next.js dengan UI yang bersih dan responsif, sedangkan pipeline backend diotomatisasi menggunakan Apache Airflow, melakukan scraping data dengan Selenium, memprosesnya, dan menyimpannya di MongoDB.",
                        images: [
                            "/assets/p-saham1.png"
                        ],
                        tech: [
                            "Next.js",
                            "MongoDB",
                            "Web Scraping",
                            "Data Pipelines",
                            "Apache Airflow",
                            "Selenium"
                        ],
                        role: "Project Developer (Mata Kuliah Big Data)",
                        duration: "5 bulan",
                        link: "https://github.com/jianjeyn/stock-dashboard"
                    }
                },
                {
                    title: "Aplikasi Resep Mobile (Frontend + Backend)",
                    description: "Aplikasi Mobile | Flutter | Node.js | UI/UX",
                    image: "/assets/p-recipe.png",
                    details: {
                        fullDescription: "Aplikasi resep mobile lintas platform yang dibangun menggunakan Flutter (Frontend) dan Node.js (Backend). Dikembangkan sebagai bagian dari mata kuliah Proyek Visualisasi, aplikasi ini berfokus pada penyediaan antarmuka yang indah, responsif, dan ramah pengguna untuk eksplorasi resep makanan.",
                        images: [
                            "/assets/p-recipe.png"
                        ],
                        tech: [
                            "Flutter",
                            "Node.js",
                            "User Interface Design",
                            "User Experience (UX)",
                            "API",
                            "Version Control"
                        ],
                        role: "Full Stack Developer (Proyek Mata Kuliah)",
                        duration: "4 bulan",
                        link: "https://github.com/jianjeyn/NodeJS-BackEnd-DelishApp"
                    }
                },
                {
                    title: "Internal Search Engine",
                    description: "Python (Flask) | Web Scraping | Graph Algorithms",
                    image: "/assets/p-search1.png",
                    details: {
                        fullDescription: "Mesin pencari internal khusus yang dirancang untuk merayapi dan mengindeks halaman dalam satu domain menggunakan algoritma graph traversal BFS dan DFS. Menampilkan frontend yang responsif dan memungkinkan pencarian berbasis kata kunci dengan visualisasi rute tautan dari homepage ke hasil yang cocok.",
                        images: [
                            "/assets/p-search1.png"
                        ],
                        tech: [
                            "Python (Flask)",
                            "Web Scraping",
                            "Graph Algorithms",
                            "Tailwind CSS",
                            "Information Retrieval",
                            "BFS",
                            "DFS"
                        ],
                        role: "Project Developer (Proyek Mata Kuliah)",
                        duration: "1 minggu",
                        link: "https://github.com/jianjeyn/SearchEngineAndal"
                    }
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
                            "/assets/pjf3.png"
                        ],
                        tech: [
                            "Java",
                            "Object-Oriented Programming (OOP)",
                            "MySQL",
                            "GUI development"
                        ],
                        role: "Project Developer (Mata Kuliah OOP)",
                        duration: "2 bulan",
                        link: "https://github.com/jianjeyn/Collect-JellyFish-Game"
                    }
                },
                {
                    title: "3D Rural Environment (Proyek OpenGL)",
                    description: "C++ | OpenGL | Procedural Generation | Dynamic Weather",
                    image: "/assets/p-grafikom.png",
                    details: {
                        fullDescription: "Simulasi lingkungan pedesaan 3D yang dibangun menggunakan C++ dan OpenGL sebagai proyek kelompok akhir. Scene menampilkan kamera first-person (Camera.h), siklus pencahayaan siang/malam yang dinamis, dan sistem generasi prosedural (houseGenerate.h, treeGenerate.h, cloudGenerate.h) untuk menciptakan lanskap yang unik. Komponen utama adalah sistem cuaca dinamis (weather.h), memungkinkan kontrol pengguna untuk beralih antara hujan, salju, dan hujan es, lengkap dengan efek partikel yang realistis. Proyek ini mengintegrasikan lebih dari 13 model 3D, shader kustom, dan kontrol kamera lanjutan.",
                        images: [
                            "/assets/p-grafikom.png"
                        ],
                        tech: [
                            "C++",
                            "OpenGL",
                            "GLFW",
                            "GLAD",
                            "GLSL",
                            "Procedural Generation",
                            "Particle Systems"
                        ],
                        role: "Anggota Kelompok (Kelompok 1)",
                        duration: "4 bulan",
                        link: "#"
                    }
                }
            ]
        }
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/Header.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$i18n$2f$translations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/i18n/translations.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/menu.js [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function Header({ language, setLanguage }) {
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const t = __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$i18n$2f$translations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["translations"][language].nav;
    const [isMobileMenuOpen, setIsMobileMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const scrollToSection = (sectionId)=>{
        const element = document.getElementById(sectionId);
        if (element) {
            const headerOffset = 100;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };
    const handleSectionClick = (e, sectionId)=>{
        if (pathname === '/') {
            e.preventDefault();
            scrollToSection(sectionId);
        }
        setIsMobileMenuOpen(false);
    };
    const handleLinkClick = ()=>{
        setIsMobileMenuOpen(false);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "border-b-4 border-foreground sticky top-0 z-50 relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 z-0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    src: "/assets/header1.png",
                    alt: "Header background",
                    fill: true,
                    className: "object-cover",
                    priority: true
                }, void 0, false, {
                    fileName: "[project]/app/components/Header.js",
                    lineNumber: 45,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/Header.js",
                lineNumber: 44,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "hidden lg:block relative z-10 max-w-6xl mx-auto px-4 py-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-center items-center gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "sketch-box bg-background inline-block",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                className: "flex items-center divide-x-3 divide-foreground",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "px-8 py-4 text-2xl font-black flex items-center gap-2",
                                        children: "✦ Jihan Aqilah Hartono"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/Header.js",
                                        lineNumber: 59,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/",
                                        className: "px-8 py-4 text-base font-bold hover:text-accent transition",
                                        children: t.home
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/Header.js",
                                        lineNumber: 62,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/#about",
                                        onClick: (e)=>handleSectionClick(e, 'about'),
                                        className: "px-8 py-4 text-base font-bold hover:text-accent transition",
                                        children: t.about
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/Header.js",
                                        lineNumber: 68,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/#journey",
                                        onClick: (e)=>handleSectionClick(e, 'journey'),
                                        className: "px-8 py-4 text-base font-bold hover:text-accent transition",
                                        children: t.journey
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/Header.js",
                                        lineNumber: 75,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/portfolio",
                                        className: "px-8 py-4 text-base font-bold hover:text-accent transition",
                                        children: t.portfolio
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/Header.js",
                                        lineNumber: 82,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/Header.js",
                                lineNumber: 58,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/components/Header.js",
                            lineNumber: 57,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "sketch-box bg-background inline-block px-4 py-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setLanguage('id'),
                                        className: `px-3 py-1 text-sm font-bold rounded transition ${language === 'id' ? 'bg-accent text-background' : 'hover:bg-accent/20'}`,
                                        children: "ID"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/Header.js",
                                        lineNumber: 94,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setLanguage('en'),
                                        className: `px-3 py-1 text-sm font-bold rounded transition ${language === 'en' ? 'bg-accent text-background' : 'hover:bg-accent/20'}`,
                                        children: "EN"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/Header.js",
                                        lineNumber: 104,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/Header.js",
                                lineNumber: 93,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/components/Header.js",
                            lineNumber: 92,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/Header.js",
                    lineNumber: 56,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/Header.js",
                lineNumber: 55,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "lg:hidden relative z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between px-4 py-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "sketch-box bg-background px-4 py-3",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-lg font-black",
                                    children: "✦ Jihan"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/Header.js",
                                    lineNumber: 124,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/components/Header.js",
                                lineNumber: 123,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "sketch-box bg-background px-3 py-2",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-1.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setLanguage('id'),
                                                    className: `px-2 py-1 text-xs font-bold rounded transition ${language === 'id' ? 'bg-accent text-background' : 'hover:bg-accent/20'}`,
                                                    children: "ID"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/Header.js",
                                                    lineNumber: 132,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setLanguage('en'),
                                                    className: `px-2 py-1 text-xs font-bold rounded transition ${language === 'en' ? 'bg-accent text-background' : 'hover:bg-accent/20'}`,
                                                    children: "EN"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/Header.js",
                                                    lineNumber: 142,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/Header.js",
                                            lineNumber: 131,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/Header.js",
                                        lineNumber: 130,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setIsMobileMenuOpen(!isMobileMenuOpen),
                                        className: "sketch-box bg-background p-3 hover:bg-accent/10 transition",
                                        "aria-label": "Toggle menu",
                                        children: isMobileMenuOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                            className: "w-6 h-6"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/Header.js",
                                            lineNumber: 162,
                                            columnNumber: 17
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                                            className: "w-6 h-6"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/Header.js",
                                            lineNumber: 164,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/Header.js",
                                        lineNumber: 156,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/Header.js",
                                lineNumber: 128,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/Header.js",
                        lineNumber: 121,
                        columnNumber: 9
                    }, this),
                    isMobileMenuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-full left-0 right-0 bg-background border-b-4 border-foreground shadow-lg",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                            className: "flex flex-col divide-y-2 divide-foreground",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/",
                                    onClick: handleLinkClick,
                                    className: "px-6 py-4 text-base font-bold hover:bg-accent/10 transition active:bg-accent/20",
                                    children: t.home
                                }, void 0, false, {
                                    fileName: "[project]/app/components/Header.js",
                                    lineNumber: 174,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/#about",
                                    onClick: (e)=>handleSectionClick(e, 'about'),
                                    className: "px-6 py-4 text-base font-bold hover:bg-accent/10 transition active:bg-accent/20",
                                    children: t.about
                                }, void 0, false, {
                                    fileName: "[project]/app/components/Header.js",
                                    lineNumber: 181,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/#journey",
                                    onClick: (e)=>handleSectionClick(e, 'journey'),
                                    className: "px-6 py-4 text-base font-bold hover:bg-accent/10 transition active:bg-accent/20",
                                    children: t.journey
                                }, void 0, false, {
                                    fileName: "[project]/app/components/Header.js",
                                    lineNumber: 188,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/portfolio",
                                    onClick: handleLinkClick,
                                    className: "px-6 py-4 text-base font-bold hover:bg-accent/10 transition active:bg-accent/20",
                                    children: t.portfolio
                                }, void 0, false, {
                                    fileName: "[project]/app/components/Header.js",
                                    lineNumber: 195,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/Header.js",
                            lineNumber: 173,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/components/Header.js",
                        lineNumber: 172,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/Header.js",
                lineNumber: 120,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/Header.js",
        lineNumber: 42,
        columnNumber: 5
    }, this);
}
_s(Header, "g4np8q1LY+g6GKLSpS3pKVVL1eg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = Header;
var _c;
__turbopack_context__.k.register(_c, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/Footer.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$linkedin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Linkedin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/linkedin.js [app-client] (ecmascript) <export default as Linkedin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$instagram$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Instagram$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/instagram.js [app-client] (ecmascript) <export default as Instagram>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$github$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Github$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/github.js [app-client] (ecmascript) <export default as Github>");
"use client";
;
;
;
function Footer() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "border-t-2 border-foreground bg-background",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-6xl mx-auto px-4 py-8 md:py-8",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col md:flex-row justify-between items-center gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-xl font-black flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-2xl",
                                        children: "✦"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/Footer.js",
                                        lineNumber: 14,
                                        columnNumber: 15
                                    }, this),
                                    " Jihan Aqilah"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/Footer.js",
                                lineNumber: 13,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-muted-foreground",
                                children: [
                                    "Portfolio ",
                                    new Date().getFullYear()
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/Footer.js",
                                lineNumber: 16,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/Footer.js",
                        lineNumber: 12,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "https://www.instagram.com/jianaqilah",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "hover:text-accent transition group",
                                "aria-label": "Instagram",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$instagram$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Instagram$3e$__["Instagram"], {
                                    className: "w-5 h-5 group-hover:scale-110 transition"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/Footer.js",
                                    lineNumber: 30,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/components/Footer.js",
                                lineNumber: 23,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "https://www.linkedin.com/in/jihan-aqilah-hartono/",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "hover:text-accent transition group",
                                "aria-label": "LinkedIn",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$linkedin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Linkedin$3e$__["Linkedin"], {
                                    className: "w-5 h-5 group-hover:scale-110 transition"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/Footer.js",
                                    lineNumber: 39,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/components/Footer.js",
                                lineNumber: 32,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "https://github.com/jianjeyn",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "hover:text-accent transition group",
                                "aria-label": "GitHub",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$github$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Github$3e$__["Github"], {
                                    className: "w-5 h-5 group-hover:scale-110 transition"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/Footer.js",
                                    lineNumber: 48,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/components/Footer.js",
                                lineNumber: 41,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/Footer.js",
                        lineNumber: 22,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/Footer.js",
                lineNumber: 10,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/components/Footer.js",
            lineNumber: 9,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/components/Footer.js",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
_c = Footer;
var _c;
__turbopack_context__.k.register(_c, "Footer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/portfolio/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Portfolio
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Header$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/Header.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Footer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/Footer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/external-link.js [app-client] (ecmascript) <export default as ExternalLink>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-client] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$i18n$2f$translations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/i18n/translations.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
function Portfolio() {
    _s();
    const [selectedProject, setSelectedProject] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [language, setLanguage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('en');
    const [currentImageIndex, setCurrentImageIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isLoaded, setIsLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Portfolio.useEffect": ()=>{
            setIsLoaded(true);
        }
    }["Portfolio.useEffect"], []);
    const t = __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$i18n$2f$translations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["translations"][language];
    const projects = t.portfolio.projects.map((project, index)=>({
            ...project,
            details: {
                ...project.details,
                images: [
                    [
                        "/assets/p11.png",
                        "/assets/p12.png",
                        "/assets/p13.png",
                        "/assets/p14.png",
                        "/assets/p15.png"
                    ],
                    [
                        "/assets/p25.png",
                        "/assets/p-dashboard.png"
                    ],
                    [
                        "/assets/p-saham1.png"
                    ],
                    [
                        "/assets/p-recipe.png"
                    ],
                    [
                        "/assets/p-search1.png"
                    ],
                    [
                        "/assets/pjf1.png",
                        "/assets/pjf2.png",
                        "/assets/pjf3.png"
                    ],
                    [
                        "/assets/p-grafikom.png"
                    ]
                ][index] || []
            }
        }));
    const handleNextImage = ()=>{
        if (selectedProject) {
            setCurrentImageIndex((prev)=>prev === selectedProject.details.images.length - 1 ? 0 : prev + 1);
        }
    };
    const handlePrevImage = ()=>{
        if (selectedProject) {
            setCurrentImageIndex((prev)=>prev === 0 ? selectedProject.details.images.length - 1 : prev - 1);
        }
    };
    const handleProjectClick = (project)=>{
        setSelectedProject(project);
        setCurrentImageIndex(0);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "jsx-e4c17d11c871766b" + " " + "min-h-screen bg-background",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Header$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        language: language,
                        setLanguage: setLanguage
                    }, void 0, false, {
                        fileName: "[project]/app/portfolio/page.js",
                        lineNumber: 63,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "jsx-e4c17d11c871766b" + " " + "max-w-6xl mx-auto px-4 py-8 md:py-16",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-e4c17d11c871766b" + " " + `transform transition-all duration-500 ease-out ${isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/",
                                    className: "inline-flex items-center gap-2 text-foreground font-bold mb-8 hover:text-accent transition-colors duration-200",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                            className: "w-5 h-5"
                                        }, void 0, false, {
                                            fileName: "[project]/app/portfolio/page.js",
                                            lineNumber: 71,
                                            columnNumber: 15
                                        }, this),
                                        t.portfolio.backToHome
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/portfolio/page.js",
                                    lineNumber: 70,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/portfolio/page.js",
                                lineNumber: 67,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-e4c17d11c871766b" + " " + "space-y-8 md:space-y-12",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-e4c17d11c871766b" + " " + `transform transition-all duration-500 ease-out delay-100 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-e4c17d11c871766b" + " " + "flex items-center gap-3 md:gap-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                    className: "jsx-e4c17d11c871766b" + " " + "text-3xl md:text-5xl lg:text-6xl font-black",
                                                    children: t.portfolio.title
                                                }, void 0, false, {
                                                    fileName: "[project]/app/portfolio/page.js",
                                                    lineNumber: 82,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    src: "/assets/el2.png",
                                                    alt: "Decoration",
                                                    width: 60,
                                                    height: 60,
                                                    className: "object-contain star-decoration w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/portfolio/page.js",
                                                    lineNumber: 83,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/portfolio/page.js",
                                            lineNumber: 81,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/portfolio/page.js",
                                        lineNumber: 78,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-e4c17d11c871766b" + " " + "grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12",
                                        children: projects.map((project, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    transitionDelay: `${200 + index * 100}ms`
                                                },
                                                className: "jsx-e4c17d11c871766b" + " " + `transform transition-all duration-500 ease-out ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>handleProjectClick(project),
                                                    className: "jsx-e4c17d11c871766b" + " " + "group block text-left w-full transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 ease-out focus:outline-none focus:ring-0",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-e4c17d11c871766b" + " " + "relative w-full aspect-[4/3]",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-e4c17d11c871766b" + " " + "absolute inset-0",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                    src: "/assets/portoframe.png",
                                                                    alt: "Frame",
                                                                    fill: true,
                                                                    className: "object-contain",
                                                                    priority: index < 2
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/portfolio/page.js",
                                                                    lineNumber: 112,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/portfolio/page.js",
                                                                lineNumber: 111,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-e4c17d11c871766b" + " " + "absolute inset-0 px-[20%] pt-[9%] pb-[16%] flex flex-col gap-1.5",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "jsx-e4c17d11c871766b" + " " + "relative flex-[4] border-2 border-foreground bg-white overflow-hidden rounded-sm transition-all duration-300 group-hover:border-accent group-hover:shadow-md",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                                src: project.image,
                                                                                alt: project.title,
                                                                                fill: true,
                                                                                className: "object-cover transition-transform duration-300 group-hover:scale-105"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/portfolio/page.js",
                                                                                lineNumber: 124,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "jsx-e4c17d11c871766b" + " " + "absolute inset-0 bg-accent/0 group-hover:bg-accent/10 transition-colors duration-300"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/portfolio/page.js",
                                                                                lineNumber: 132,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/portfolio/page.js",
                                                                        lineNumber: 123,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "jsx-e4c17d11c871766b" + " " + "flex-[1] flex flex-col justify-center",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "jsx-e4c17d11c871766b" + " " + "flex items-center justify-between gap-1 mb-0.5",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                                        className: "jsx-e4c17d11c871766b" + " " + "text-[11px] md:text-xs lg:text-sm font-bold group-hover:text-accent transition-colors duration-200 leading-none truncate",
                                                                                        children: project.title
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/portfolio/page.js",
                                                                                        lineNumber: 138,
                                                                                        columnNumber: 29
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                                                                        className: "w-3 h-3 md:w-3.5 md:h-3.5 flex-shrink-0 group-hover:text-accent transition-colors duration-200"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/portfolio/page.js",
                                                                                        lineNumber: 141,
                                                                                        columnNumber: 29
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/app/portfolio/page.js",
                                                                                lineNumber: 137,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "jsx-e4c17d11c871766b" + " " + "text-[8px] md:text-[9px] lg:text-[10px] text-muted-foreground leading-tight line-clamp-1",
                                                                                children: project.description
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/portfolio/page.js",
                                                                                lineNumber: 143,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/portfolio/page.js",
                                                                        lineNumber: 136,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/portfolio/page.js",
                                                                lineNumber: 122,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/portfolio/page.js",
                                                        lineNumber: 109,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/portfolio/page.js",
                                                    lineNumber: 105,
                                                    columnNumber: 19
                                                }, this)
                                            }, index, false, {
                                                fileName: "[project]/app/portfolio/page.js",
                                                lineNumber: 96,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/portfolio/page.js",
                                        lineNumber: 94,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/portfolio/page.js",
                                lineNumber: 76,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/portfolio/page.js",
                        lineNumber: 65,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/portfolio/page.js",
                lineNumber: 62,
                columnNumber: 7
            }, this),
            selectedProject && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                onClick: ()=>setSelectedProject(null),
                className: "jsx-e4c17d11c871766b" + " " + "fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm transition-all duration-200",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    onClick: (e)=>e.stopPropagation(),
                    className: "jsx-e4c17d11c871766b" + " " + "bg-background border-4 border-foreground rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden sketch-box flex flex-col transform scale-95 animate-modalShow",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-e4c17d11c871766b" + " " + "bg-background border-b-4 border-foreground p-6 flex items-center justify-between flex-shrink-0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "jsx-e4c17d11c871766b" + " " + "text-2xl md:text-3xl font-black",
                                    children: selectedProject.title
                                }, void 0, false, {
                                    fileName: "[project]/app/portfolio/page.js",
                                    lineNumber: 168,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setSelectedProject(null),
                                    className: "jsx-e4c17d11c871766b" + " " + "p-2 hover:bg-accent/10 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-0",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                        className: "w-6 h-6"
                                    }, void 0, false, {
                                        fileName: "[project]/app/portfolio/page.js",
                                        lineNumber: 173,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/portfolio/page.js",
                                    lineNumber: 169,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/portfolio/page.js",
                            lineNumber: 167,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-e4c17d11c871766b" + " " + "overflow-y-auto flex-1 p-6 space-y-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-e4c17d11c871766b" + " " + "relative",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-e4c17d11c871766b" + " " + "relative aspect-video border-2 border-foreground rounded-lg overflow-hidden bg-card",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                src: selectedProject.details.images[currentImageIndex],
                                                alt: `${selectedProject.title} ${currentImageIndex + 1}`,
                                                fill: true,
                                                className: "object-cover"
                                            }, currentImageIndex, false, {
                                                fileName: "[project]/app/portfolio/page.js",
                                                lineNumber: 180,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/portfolio/page.js",
                                            lineNumber: 179,
                                            columnNumber: 17
                                        }, this),
                                        selectedProject.details.images.length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: handlePrevImage,
                                                    className: "jsx-e4c17d11c871766b" + " " + "absolute left-2 top-1/2 -translate-y-1/2 bg-background/90 hover:bg-accent border-2 border-foreground rounded-full p-2 transition-colors duration-200 focus:outline-none focus:ring-0",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                                        className: "w-6 h-6"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/portfolio/page.js",
                                                        lineNumber: 195,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/portfolio/page.js",
                                                    lineNumber: 191,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: handleNextImage,
                                                    className: "jsx-e4c17d11c871766b" + " " + "absolute right-2 top-1/2 -translate-y-1/2 bg-background/90 hover:bg-accent border-2 border-foreground rounded-full p-2 transition-colors duration-200 focus:outline-none focus:ring-0",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                                        className: "w-6 h-6"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/portfolio/page.js",
                                                        lineNumber: 201,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/portfolio/page.js",
                                                    lineNumber: 197,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-e4c17d11c871766b" + " " + "absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2",
                                                    children: selectedProject.details.images.map((_, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>setCurrentImageIndex(idx),
                                                            className: "jsx-e4c17d11c871766b" + " " + `h-2 rounded-full transition-all duration-200 focus:outline-none focus:ring-0 ${idx === currentImageIndex ? 'bg-accent w-6' : 'bg-background/60 hover:bg-background w-2'}`
                                                        }, idx, false, {
                                                            fileName: "[project]/app/portfolio/page.js",
                                                            lineNumber: 206,
                                                            columnNumber: 25
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/app/portfolio/page.js",
                                                    lineNumber: 204,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-e4c17d11c871766b" + " " + "absolute top-4 right-4 bg-background/90 px-3 py-1 rounded-full text-sm font-bold border-2 border-foreground",
                                                    children: [
                                                        currentImageIndex + 1,
                                                        " / ",
                                                        selectedProject.details.images.length
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/portfolio/page.js",
                                                    lineNumber: 218,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/portfolio/page.js",
                                    lineNumber: 178,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-e4c17d11c871766b" + " " + "sketch-box p-4 bg-card",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "jsx-e4c17d11c871766b" + " " + "font-bold text-lg mb-2",
                                            children: t.portfolio.modal.aboutProject
                                        }, void 0, false, {
                                            fileName: "[project]/app/portfolio/page.js",
                                            lineNumber: 226,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "jsx-e4c17d11c871766b" + " " + "text-muted-foreground",
                                            children: selectedProject.details.fullDescription
                                        }, void 0, false, {
                                            fileName: "[project]/app/portfolio/page.js",
                                            lineNumber: 227,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/portfolio/page.js",
                                    lineNumber: 225,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-e4c17d11c871766b" + " " + "grid grid-cols-1 md:grid-cols-2 gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-e4c17d11c871766b" + " " + "sketch-box p-4 bg-card",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "jsx-e4c17d11c871766b" + " " + "font-bold mb-2",
                                                    children: t.portfolio.modal.role
                                                }, void 0, false, {
                                                    fileName: "[project]/app/portfolio/page.js",
                                                    lineNumber: 232,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "jsx-e4c17d11c871766b" + " " + "text-sm text-muted-foreground",
                                                    children: selectedProject.details.role
                                                }, void 0, false, {
                                                    fileName: "[project]/app/portfolio/page.js",
                                                    lineNumber: 233,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/portfolio/page.js",
                                            lineNumber: 231,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-e4c17d11c871766b" + " " + "sketch-box p-4 bg-card",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "jsx-e4c17d11c871766b" + " " + "font-bold mb-2",
                                                    children: t.portfolio.modal.duration
                                                }, void 0, false, {
                                                    fileName: "[project]/app/portfolio/page.js",
                                                    lineNumber: 236,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "jsx-e4c17d11c871766b" + " " + "text-sm text-muted-foreground",
                                                    children: selectedProject.details.duration
                                                }, void 0, false, {
                                                    fileName: "[project]/app/portfolio/page.js",
                                                    lineNumber: 237,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/portfolio/page.js",
                                            lineNumber: 235,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/portfolio/page.js",
                                    lineNumber: 230,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-e4c17d11c871766b" + " " + "sketch-box p-4 bg-card",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "jsx-e4c17d11c871766b" + " " + "font-bold mb-3",
                                            children: t.portfolio.modal.technologiesUsed
                                        }, void 0, false, {
                                            fileName: "[project]/app/portfolio/page.js",
                                            lineNumber: 242,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-e4c17d11c871766b" + " " + "flex flex-wrap gap-2",
                                            children: selectedProject.details.tech.map((tech, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "jsx-e4c17d11c871766b" + " " + "px-3 py-1 bg-accent/20 border-2 border-foreground rounded-full text-sm font-bold hover:bg-accent/30 transition-colors duration-200",
                                                    children: tech
                                                }, idx, false, {
                                                    fileName: "[project]/app/portfolio/page.js",
                                                    lineNumber: 245,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/app/portfolio/page.js",
                                            lineNumber: 243,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/portfolio/page.js",
                                    lineNumber: 241,
                                    columnNumber: 15
                                }, this),
                                selectedProject.details.link !== "#" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: selectedProject.details.link,
                                    target: "_blank",
                                    className: "flex items-center justify-center gap-2 w-full py-3 bg-accent text-background font-bold rounded-lg hover:bg-accent/90 transition-colors duration-200 focus:outline-none focus:ring-0",
                                    children: [
                                        t.portfolio.modal.viewLiveProject,
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/app/portfolio/page.js",
                                            lineNumber: 262,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/portfolio/page.js",
                                    lineNumber: 256,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/portfolio/page.js",
                            lineNumber: 177,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/portfolio/page.js",
                    lineNumber: 163,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/portfolio/page.js",
                lineNumber: 159,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Footer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/portfolio/page.js",
                lineNumber: 270,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "e4c17d11c871766b",
                children: "@keyframes modalShow{0%{opacity:0;transform:scale(.95)translateY(10px)}to{opacity:1;transform:scale(1)translateY(0)}}.animate-modalShow.jsx-e4c17d11c871766b{animation:.2s ease-out modalShow}.jsx-e4c17d11c871766b{-webkit-tap-highlight-color:transparent;-webkit-touch-callout:none}button.jsx-e4c17d11c871766b:focus,button.jsx-e4c17d11c871766b:active,a.jsx-e4c17d11c871766b:focus,a.jsx-e4c17d11c871766b:active{box-shadow:none!important;-webkit-tap-highlight-color:transparent!important;outline:none!important}button.jsx-e4c17d11c871766b{appearance:none}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true);
}
_s(Portfolio, "4aZ6lWLD3e2A1YkfujrxqBbkH5c=");
_c = Portfolio;
var _c;
__turbopack_context__.k.register(_c, "Portfolio");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_16570253._.js.map