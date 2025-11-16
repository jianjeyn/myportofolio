module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/app/hire-me/page.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MyJourney
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
;
function MyJourney() {
    const [activeGallery, setActiveGallery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [expandedItem, setExpandedItem] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [flippedCard, setFlippedCard] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [activeSkill, setActiveSkill] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const galleries = [
        {
            id: "diplomasi",
            title: "🤝 Diplomasi & Komunitas",
            subtitle: "Wings of Connection",
            narasi: "Ini adalah galeri tentang kekuatan komunikasi. Dari memimpin debat di English Club hingga menghubungkan mahasiswa internasional di Sahabat DIA, pameran ini adalah tentang membangun jembatan antar manusia.",
            color: "from-pink-100 to-pink-50",
            artefak: [
                {
                    title: "Sang Presiden",
                    year: "2019",
                    yearNum: 2019,
                    subtitle: "President English Club - SMAN 1 Gowa",
                    description: "Memimpin klub debat dan meningkatkan partisipasi siswa dalam kompetisi bahasa Inggris",
                    details: "Tantangan pertama: Bagaimana membuat English Club menjadi ruang yang inklusif? Saat itu, hanya ada 15 anggota aktif. Aku mulai dengan ice breaker yang fun, speaker dari native English, dan debate competition bulanan. Hasilnya? Anggota tumbuh jadi 50+, dan beberapa siswa lolos kompetisi tingkat provinsi. Dari sini aku belajar: leadership bukan hanya tentang bicara, tapi tentang menginspirasi.",
                    type: "event"
                },
                {
                    title: "Der Sprach-Enthusiast",
                    year: "2021",
                    yearNum: 2021,
                    subtitle: "Runner-up Lomba Kuis Bahasa Jerman",
                    description: "Menunjukkan passion pada pembelajaran bahasa",
                    details: "Bahasa Jerman bukan yang paling mudah, tapi aku senang dengan tantangannya. Ikut kompetisi kuis bahasa Jerman dan sampai final, lolos sebagai runner-up. Ini bukan tentang menang, tapi tentang love for language. Setiap kosa kata baru adalah dunia baru.",
                    type: "award"
                },
                {
                    title: "Duta Kampus",
                    year: "2022",
                    yearNum: 2022,
                    subtitle: "Volunteer Sahabat DIA Batch 8",
                    description: "International Event Organizer - 'Culture N Chill' dan event internasional lainnya",
                    details: "Saat diminta jadi volunteer, aku tidak tahu apa itu 'inklusivitas digital'. Tapi setelah mengorganisir 'Culture N Chill', sebuah event yang menghadirkan mahasiswa dari 20+ negara, aku mengerti: teknologi adalah bahasa universal. Event itu bukan sekadar gathering—kami membantu mahasiswa internasional merasa 'at home' di Indonesia. Setiap feedback positif yang aku terima membuatku yakin bahwa impact sosial adalah motivasi terbesar.",
                    type: "event"
                },
                {
                    title: "Jembatan Akademik",
                    year: "2023",
                    yearNum: 2023,
                    subtitle: "Academic Visit Volunteer - USIM to UPI",
                    description: "Memfasilitasi visitasi akademik internasional",
                    details: "Bekerja dalam tim international events untuk welcome delegasi dari University Sains Islam Malaysia (USIM) ke UPI. Tanggung jawab: koordinasi logistik, tour guide, dan memastikan experience mereka memorable. Momen yang paling berkesan? Ketika mahasiswa dari USIM bilang 'Ini universitas yang paling welcomming'. Simple, but powerful.",
                    type: "event"
                }
            ],
            renderType: "timeline"
        },
        {
            id: "inovasi",
            title: "🌍 Inovasi untuk Bumi & Masyarakat",
            subtitle: "Wings of Impact",
            narasi: "Teknologi adalah alat. Di galeri ini, kamu akan melihat bagaimana aku mencoba menggunakan alat itu untuk dampak sosial dan lingkungan—dari kamp iklim di Thailand hingga membangun platform edukasi di Indonesia.",
            color: "from-green-100 to-green-50",
            artefak: [
                {
                    title: "Titik Balik: Thailand",
                    year: "2023",
                    yearNum: 2023,
                    subtitle: "Youth Climate Volunteer - Netzwerk Klima",
                    description: "Pengalaman yang mengubah perspektif tentang climate action",
                    details: "Thailand 2023 adalah titik balik dalam hidup aku. Dalam camp iklim yang diikuti 150+ youth dari 10 negara, aku belajar bahwa climate change bukan hanya angka—tapi tentang kehidupan nyata. Aku lihat langsung dampak banjir di Thailand, dengar cerita dari farmer lokal yang kehilangan panen. Dari situ, passion aku untuk 'tech for climate' menjadi crystal clear. Pulang ke Indonesia dengan komitmen: 'Aku harus membuat sesuatu yang meaningful.'",
                    type: "experience"
                },
                {
                    title: "Karya Utama: EcoSCha",
                    year: "2024",
                    yearNum: 2024,
                    subtitle: "PKM-RSH Grant Winner - Web-Based Card Game",
                    description: "Platform gamified untuk environmental education",
                    details: "EcoSCha adalah hasil dari obsesi aku tentang sustainable change. Idenya simpel: bagaimana membuat learning tentang sustainability jadi FUN? Kami develop web-based card game yang gamified—setiap kartu berisi challenge lingkungan, dan player harus make smart choices.\n\n🎯 Journey:\n- Bulan 1: Brainstorm & research user behavior\n- Bulan 2: Design phase, create card mechanics\n- Bulan 3: Development dengan React & Node.js\n- Bulan 4: Testing & refinement\n- Bulan 5: Grant proposal & presentation\n\n✅ Hasil: LOLOS PKM-RSH funding, 500+ users di soft launch, dan feature di 3 sustainability platforms lokal.\n\nYang paling bangga? Bukan hanya teknologinya, tapi positive feedback dari user yang bilang 'Sekarang aku sadar dampak pilihan makananku'.",
                    type: "project"
                },
                {
                    title: "Pemberdayaan Digital",
                    year: "2025",
                    yearNum: 2025,
                    subtitle: "UNESCO WIDE 2025 Participant",
                    description: "Sertifikasi Women in Entrepreneurship Digital",
                    details: "UNESCO WIDE (Women in Digital Entrepreneurship) 2025 adalah validasi dari journey aku. Dalam program 3-bulan ini, aku explore deeper tentang: bagaimana women tech founders bisa scale impact? Dari sini, aku apply lessons tentang sustainable business model, community building, dan fundraising ke EcoSCha. Plus, network aku dengan 50+ women founders lokal yang juga fighting untuk 'tech for good'.",
                    type: "certification"
                }
            ],
            renderType: "timeline"
        },
        {
            id: "kode",
            title: "💻 Laboratorium Kode & Data",
            subtitle: "Wings of Creation",
            narasi: "Selamat datang di bengkelku. Ini adalah tempat di mana ide-ide diuji, error adalah teman, dan baris-baris kode berubah menjadi solusi. Lihat evolusi skill-ku dari game sederhana hingga dashboard data yang kompleks.",
            color: "from-purple-100 to-purple-50",
            artefak: [
                {
                    title: "Collect-Jellyfish-Game",
                    year: "2020",
                    yearNum: 2020,
                    subtitle: "First Game Project - Java/OOP",
                    skills: [
                        "Java",
                        "OOP",
                        "Game Development",
                        "Graphics"
                    ],
                    description: "Game pertama - Jellyfish collection game",
                    details: "Project awal yang mengajarkan banyak tentang OOP principles dan game development fundamentals. Simple tapi penuh pembelajaran."
                },
                {
                    title: "Internal Search Engine",
                    year: "2023",
                    yearNum: 2023,
                    subtitle: "Algorithm & NLP",
                    skills: [
                        "Python",
                        "NLP",
                        "BFS/DFS",
                        "TF-IDF",
                        "Information Retrieval"
                    ],
                    description: "Search engine menggunakan algorithm fundamental CS",
                    details: "Implement search engine dari 0, dengan TF-IDF untuk relevance ranking dan graph algorithms untuk related documents discovery."
                },
                {
                    title: "Resep Mobile App",
                    year: "2023",
                    yearNum: 2023,
                    subtitle: "Flutter & Node.js Backend",
                    skills: [
                        "Flutter",
                        "Node.js",
                        "REST API",
                        "UI/UX Design"
                    ],
                    description: "Mobile app untuk discover dan share resep",
                    details: "Cross-platform mobile app dengan beautiful UI, backend API dengan Node.js, dan database yang scalable."
                },
                {
                    title: "Dashboard Saham",
                    year: "2024",
                    yearNum: 2024,
                    subtitle: "Real-time Stock Market Data",
                    skills: [
                        "Selenium",
                        "Web Scraping",
                        "Next.js",
                        "MongoDB",
                        "Real-time Data"
                    ],
                    description: "Platform untuk tracking dan analisis saham real-time",
                    details: "Full-stack project dengan web scraping dari multiple sources, real-time data update, dan interactive charts untuk market analysis."
                },
                {
                    title: "DIA-Dashboard",
                    year: "2024",
                    yearNum: 2024,
                    subtitle: "Data Visualization & Analytics",
                    skills: [
                        "TypeScript",
                        "React",
                        "Data Visualization",
                        "Dashboard Design"
                    ],
                    description: "Dashboard analytics untuk Sahabat DIA",
                    details: "Menggunakan TypeScript untuk type safety, React untuk interaktivitas, dan library visualisasi data untuk membuat insights menjadi visual yang mudah dipahami."
                }
            ],
            renderType: "timeline"
        }
    ];
    const getTimelinePosition = (artefak)=>{
        if (!artefak || !artefak.yearNum) return 0;
        const minYear = 2020;
        const maxYear = 2025;
        return (artefak.yearNum - minYear) / (maxYear - minYear) * 100;
    };
    const getYearMarkers = (gallery)=>{
        const yearNumbers = gallery.artefak.map((a)=>a.yearNum || 2020);
        const minYear = Math.min(...yearNumbers);
        const maxYear = Math.max(...yearNumbers);
        const years = [];
        for(let i = minYear; i <= maxYear; i++){
            years.push(i);
        }
        return years;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen bg-background text-foreground",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "border-b-4 border-foreground sticky top-0 bg-background/95 z-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-6xl mx-auto px-4 py-6",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "sketch-box p-4 inline-block",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                            className: "flex items-center justify-between gap-8 px-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/",
                                    className: "text-xl font-bold hover:text-accent transition",
                                    children: "✦ Jihan Aqilah"
                                }, void 0, false, {
                                    fileName: "[project]/app/hire-me/page.js",
                                    lineNumber: 193,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-6 text-sm font-semibold",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/about",
                                            className: "hover:text-accent transition",
                                            children: "About //"
                                        }, void 0, false, {
                                            fileName: "[project]/app/hire-me/page.js",
                                            lineNumber: 197,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/portfolio",
                                            className: "hover:text-accent transition",
                                            children: "Portfolio"
                                        }, void 0, false, {
                                            fileName: "[project]/app/hire-me/page.js",
                                            lineNumber: 200,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/myjourney",
                                            className: "text-accent font-black",
                                            children: "My Journey"
                                        }, void 0, false, {
                                            fileName: "[project]/app/hire-me/page.js",
                                            lineNumber: 203,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/hire-me/page.js",
                                    lineNumber: 196,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/hire-me/page.js",
                            lineNumber: 192,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/hire-me/page.js",
                        lineNumber: 191,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/hire-me/page.js",
                    lineNumber: 190,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/hire-me/page.js",
                lineNumber: 189,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "max-w-6xl mx-auto px-4 py-20",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center mb-20",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-6xl font-black mb-4",
                                children: "🏛️ Peta Museum Jihan"
                            }, void 0, false, {
                                fileName: "[project]/app/hire-me/page.js",
                                lineNumber: 216,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xl text-muted-foreground mb-8",
                                children: "Versi 2.0 - 3 Wings of Journey"
                            }, void 0, false, {
                                fileName: "[project]/app/hire-me/page.js",
                                lineNumber: 217,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-lg mb-12 max-w-2xl mx-auto",
                                children: "Jelajahi tiga galeri utama yang menceritakan perjalanan menjadi seorang teknolog, entrepreneur, dan change maker"
                            }, void 0, false, {
                                fileName: "[project]/app/hire-me/page.js",
                                lineNumber: 218,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-3 gap-6 mb-12",
                                children: galleries.map((gallery)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>{
                                            setActiveGallery(gallery.id);
                                            setExpandedItem(null);
                                            setFlippedCard(null);
                                            setActiveSkill(null);
                                        },
                                        className: `sketch-box p-8 hover:shadow-lg transition transform hover:scale-105 text-left ${activeGallery === gallery.id ? "ring-4 ring-accent" : "bg-card"}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-2xl font-black mb-2",
                                                children: gallery.title
                                            }, void 0, false, {
                                                fileName: "[project]/app/hire-me/page.js",
                                                lineNumber: 238,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-muted-foreground mb-3 italic font-semibold",
                                                children: gallery.subtitle
                                            }, void 0, false, {
                                                fileName: "[project]/app/hire-me/page.js",
                                                lineNumber: 239,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs leading-relaxed",
                                                children: [
                                                    gallery.narasi.substring(0, 80),
                                                    "..."
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/hire-me/page.js",
                                                lineNumber: 240,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, gallery.id, true, {
                                        fileName: "[project]/app/hire-me/page.js",
                                        lineNumber: 226,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/hire-me/page.js",
                                lineNumber: 224,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/hire-me/page.js",
                        lineNumber: 215,
                        columnNumber: 9
                    }, this),
                    galleries.map((gallery)=>activeGallery === gallery.id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-16",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `sketch-box p-12 bg-gradient-to-br ${gallery.color}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-4xl font-black mb-3",
                                        children: gallery.title
                                    }, void 0, false, {
                                        fileName: "[project]/app/hire-me/page.js",
                                        lineNumber: 252,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-lg text-foreground/80 mb-12 italic",
                                        children: gallery.narasi
                                    }, void 0, false, {
                                        fileName: "[project]/app/hire-me/page.js",
                                        lineNumber: 253,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-12",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative h-16 mb-8",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "absolute top-1/2 w-full h-1 bg-foreground/20 border-t-4 border-foreground"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/hire-me/page.js",
                                                        lineNumber: 258,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "relative h-full flex justify-between items-center",
                                                        children: getYearMarkers(gallery).map((year)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex flex-col items-center",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "w-4 h-4 bg-foreground rounded-full border-4 border-background relative z-10"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/hire-me/page.js",
                                                                        lineNumber: 262,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-sm font-bold mt-2",
                                                                        children: year
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/hire-me/page.js",
                                                                        lineNumber: 263,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, year, true, {
                                                                fileName: "[project]/app/hire-me/page.js",
                                                                lineNumber: 261,
                                                                columnNumber: 27
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/hire-me/page.js",
                                                        lineNumber: 259,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/hire-me/page.js",
                                                lineNumber: 257,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative space-y-8",
                                                children: gallery.artefak.map((item, idx)=>{
                                                    const position = getTimelinePosition(item);
                                                    const isEven = idx % 2 === 0;
                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "relative",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "absolute",
                                                                style: {
                                                                    left: `${position}%`,
                                                                    top: isEven ? "-40px" : "100%",
                                                                    width: "2px",
                                                                    height: "40px",
                                                                    backgroundColor: "rgba(0,0,0,0.2)"
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/hire-me/page.js",
                                                                lineNumber: 278,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "absolute w-6 h-6 bg-accent rounded-full border-4 border-background z-10",
                                                                style: {
                                                                    left: `${position}%`,
                                                                    top: isEven ? "-65px" : "calc(100% + 40px)",
                                                                    transform: "translateX(-50%)",
                                                                    cursor: "pointer"
                                                                },
                                                                onClick: ()=>setExpandedItem(expandedItem === idx ? null : idx)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/hire-me/page.js",
                                                                lineNumber: 290,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: `ml-0 ${isEven ? "mr-auto" : "ml-auto"} w-full md:w-5/12`,
                                                                style: {
                                                                    marginLeft: isEven ? "0" : "auto",
                                                                    marginRight: isEven ? "auto" : "0"
                                                                },
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>setExpandedItem(expandedItem === idx ? null : idx),
                                                                    className: "w-full text-left sketch-box p-6 bg-white hover:bg-gray-50 transition transform hover:scale-102",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex justify-between items-start gap-4",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "flex-1",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                            className: "text-sm font-bold text-accent mb-1",
                                                                                            children: item.year
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/app/hire-me/page.js",
                                                                                            lineNumber: 315,
                                                                                            columnNumber: 37
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                                            className: "text-lg font-black mb-1",
                                                                                            children: item.title
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/app/hire-me/page.js",
                                                                                            lineNumber: 316,
                                                                                            columnNumber: 37
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                            className: "text-xs text-muted-foreground mb-2 italic",
                                                                                            children: item.subtitle
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/app/hire-me/page.js",
                                                                                            lineNumber: 317,
                                                                                            columnNumber: 37
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                            className: "text-sm text-foreground/80",
                                                                                            children: item.description
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/app/hire-me/page.js",
                                                                                            lineNumber: 318,
                                                                                            columnNumber: 37
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/app/hire-me/page.js",
                                                                                    lineNumber: 314,
                                                                                    columnNumber: 35
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: `text-2xl transition-transform flex-shrink-0 ${expandedItem === idx ? "rotate-180" : ""}`,
                                                                                    children: "▼"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/hire-me/page.js",
                                                                                    lineNumber: 320,
                                                                                    columnNumber: 35
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/hire-me/page.js",
                                                                            lineNumber: 313,
                                                                            columnNumber: 33
                                                                        }, this),
                                                                        expandedItem === idx && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "mt-4 pt-4 border-t-2 border-accent/30",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    className: "text-sm text-foreground/90 whitespace-pre-wrap leading-relaxed",
                                                                                    children: item.details
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/hire-me/page.js",
                                                                                    lineNumber: 331,
                                                                                    columnNumber: 37
                                                                                }, this),
                                                                                item.skills && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "flex flex-wrap gap-2 mt-4",
                                                                                    children: item.skills.map((skill, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            className: "text-xs bg-accent/10 px-3 py-1 rounded-full font-semibold",
                                                                                            children: skill
                                                                                        }, i, false, {
                                                                                            fileName: "[project]/app/hire-me/page.js",
                                                                                            lineNumber: 337,
                                                                                            columnNumber: 43
                                                                                        }, this))
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/hire-me/page.js",
                                                                                    lineNumber: 335,
                                                                                    columnNumber: 39
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/hire-me/page.js",
                                                                            lineNumber: 330,
                                                                            columnNumber: 35
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/hire-me/page.js",
                                                                    lineNumber: 309,
                                                                    columnNumber: 31
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/hire-me/page.js",
                                                                lineNumber: 302,
                                                                columnNumber: 29
                                                            }, this)
                                                        ]
                                                    }, idx, true, {
                                                        fileName: "[project]/app/hire-me/page.js",
                                                        lineNumber: 276,
                                                        columnNumber: 27
                                                    }, this);
                                                })
                                            }, void 0, false, {
                                                fileName: "[project]/app/hire-me/page.js",
                                                lineNumber: 270,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/hire-me/page.js",
                                        lineNumber: 255,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/hire-me/page.js",
                                lineNumber: 251,
                                columnNumber: 17
                            }, this)
                        }, gallery.id, false, {
                            fileName: "[project]/app/hire-me/page.js",
                            lineNumber: 250,
                            columnNumber: 15
                        }, this)),
                    !activeGallery && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center text-muted-foreground",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-lg",
                            children: "Pilih salah satu galeri di atas untuk mulai menjelajahi museum saya ✨"
                        }, void 0, false, {
                            fileName: "[project]/app/hire-me/page.js",
                            lineNumber: 362,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/hire-me/page.js",
                        lineNumber: 361,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/hire-me/page.js",
                lineNumber: 213,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/hire-me/page.js",
        lineNumber: 187,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__6aa88ab6._.js.map