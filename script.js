```javascript
// ==========================================
// SMART TEACHER ANALYTICS
// Student Performance Analytics & Predictive AI
// ==========================================


// ==========================================
// DEMO DATA
// ==========================================

const demoStudents = [
    {
        id: 1,
        name: "Айдана Ермек",
        className: "7А",
        subject: "Информатика",
        scores: [82, 85, 88, 90],
        homework: 92,
        attendance: 96,
        activity: 90,
        topics: {
            "Алгоритмдер": 90,
            "Циклдер": 84,
            "Шартты операторлар": 91,
            "Python": 87,
            "Ақпараттық қауіпсіздік": 94
        }
    },

    {
        id: 2,
        name: "Нұрсұлтан Али",
        className: "7А",
        subject: "Информатика",
        scores: [70, 73, 76, 78],
        homework: 75,
        attendance: 88,
        activity: 76,
        topics: {
            "Алгоритмдер": 74,
            "Циклдер": 65,
            "Шартты операторлар": 78,
            "Python": 72,
            "Ақпараттық қауіпсіздік": 80
        }
    },

    {
        id: 3,
        name: "Аружан Бек",
        className: "7А",
        subject: "Информатика",
        scores: [91, 93, 92, 95],
        homework: 96,
        attendance: 98,
        activity: 94,
        topics: {
            "Алгоритмдер": 95,
            "Циклдер": 92,
            "Шартты операторлар": 94,
            "Python": 93,
            "Ақпараттық қауіпсіздік": 96
        }
    },

    {
        id: 4,
        name: "Данияр Сапар",
        className: "7А",
        subject: "Информатика",
        scores: [64, 68, 65, 70],
        homework: 68,
        attendance: 82,
        activity: 65,
        topics: {
            "Алгоритмдер": 70,
            "Циклдер": 58,
            "Шартты операторлар": 67,
            "Python": 62,
            "Ақпараттық қауіпсіздік": 73
        }
    },

    {
        id: 5,
        name: "Мадина Асқар",
        className: "7А",
        subject: "Информатика",
        scores: [78, 80, 84, 86],
        homework: 87,
        attendance: 92,
        activity: 85,
        topics: {
            "Алгоритмдер": 82,
            "Циклдер": 76,
            "Шартты операторлар": 85,
            "Python": 83,
            "Ақпараттық қауіпсіздік": 90
        }
    },

    {
        id: 6,
        name: "Әлихан Нұр",
        className: "7А",
        subject: "Информатика",
        scores: [55, 60, 62, 59],
        homework: 60,
        attendance: 75,
        activity: 58,
        topics: {
            "Алгоритмдер": 61,
            "Циклдер": 50,
            "Шартты операторлар": 58,
            "Python": 55,
            "Ақпараттық қауіпсіздік": 65
        }
    },

    {
        id: 7,
        name: "Айсұлу Қанат",
        className: "7А",
        subject: "Информатика",
        scores: [86, 84, 89, 91],
        homework: 91,
        attendance: 95,
        activity: 88,
        topics: {
            "Алгоритмдер": 90,
            "Циклдер": 82,
            "Шартты операторлар": 92,
            "Python": 88,
            "Ақпараттық қауіпсіздік": 91
        }
    },

    {
        id: 8,
        name: "Бекзат Мұрат",
        className: "7А",
        subject: "Информатика",
        scores: [72, 70, 68, 74],
        homework: 72,
        attendance: 84,
        activity: 70,
        topics: {
            "Алгоритмдер": 75,
            "Циклдер": 61,
            "Шартты операторлар": 72,
            "Python": 69,
            "Ақпараттық қауіпсіздік": 78
        }
    },

    {
        id: 9,
        name: "Жансая Болат",
        className: "7А",
        subject: "Информатика",
        scores: [88, 90, 91, 93],
        homework: 94,
        attendance: 97,
        activity: 92,
        topics: {
            "Алгоритмдер": 93,
            "Циклдер": 87,
            "Шартты операторлар": 94,
            "Python": 90,
            "Ақпараттық қауіпсіздік": 95
        }
    },

    {
        id: 10,
        name: "Ерасыл Дәурен",
        className: "7А",
        subject: "Информатика",
        scores: [67, 65, 70, 72],
        homework: 70,
        attendance: 80,
        activity: 68,
        topics: {
            "Алгоритмдер": 71,
            "Циклдер": 60,
            "Шартты операторлар": 69,
            "Python": 65,
            "Ақпараттық қауіпсіздік": 75
        }
    }
];


// ==========================================
// LOCAL STORAGE
// ==========================================

let students = JSON.parse(localStorage.getItem("smartStudents"));

if (!students || students.length === 0) {
    students = demoStudents;
    saveStudents();
}

function saveStudents() {
    localStorage.setItem("smartStudents", JSON.stringify(students));
}


// ==========================================
// NAVIGATION
// ==========================================

function showSection(sectionId, button) {

    document.querySelectorAll(".section").forEach(section => {
        section.classList.remove("active-section");
    });

    const section = document.getElementById(sectionId);

    if (section) {
        section.classList.add("active-section");
    }

    document.querySelectorAll(".nav-item").forEach(item => {
        item.classList.remove("active");
    });

    if (button) {
        button.classList.add("active");
    }

    updateAll();
}


function showSectionById(id) {

    document.querySelectorAll(".section").forEach(section => {
        section.classList.remove("active-section");
    });

    document.getElementById(id).classList.add("active-section");

    document.querySelectorAll(".nav-item").forEach(item => {
        item.classList.remove("active");

        if (item.getAttribute("onclick")?.includes(id)) {
            item.classList.add("active");
        }
    });

    updateAll();
}


// ==========================================
// CALCULATIONS
// ==========================================

function getAverage(student) {

    const values = [
        ...student.scores,
        student.homework,
        student.activity
    ];

    return Math.round(
        values.reduce((a,b) => a+b, 0) / values.length
    );
}


function getDynamics(student) {

    const scores = student.scores;

    if (scores.length < 2) {
        return 0;
    }

    return scores[scores.length - 1] - scores[0];
}


function getStatus(student) {

    const average = getAverage(student);
    const attendance = student.attendance;

    if (average < 65 || attendance < 75) {
        return {
            key: "support",
            text: "Қосымша қолдау қажет"
        };
    }

    if (average < 75 || attendance < 85) {
        return {
            key: "attention",
            text: "Назар аудару қажет"
        };
    }

    return {
        key: "stable",
        text: "Тұрақты"
    };
}


// ==========================================
// DASHBOARD STATISTICS
// ==========================================

function updateStatistics() {

    const total = students.length;

    const average =
        total === 0
            ? 0
            : Math.round(
                students.reduce(
                    (sum, student) => sum + getAverage(student),
                    0
                ) / total
            );

    const dynamics =
        total === 0
            ? 0
            : Math.round(
                students.reduce(
                    (sum, student) => sum + getDynamics(student),
                    0
                ) / total
            );

    const support = students.filter(
        student => getStatus(student).key === "support"
    ).length;


    document.getElementById("totalStudents").textContent = total;

    document.getElementById("averageScore").textContent =
        average + "%";

    document.getElementById("averageDynamics").textContent =
        (dynamics >= 0 ? "+" : "") + dynamics + "%";

    document.getElementById("supportCount").textContent =
        support;
}


// ==========================================
// STUDENTS TABLE
// ==========================================

function renderStudents() {

    const table = document.getElementById("studentsTable");

    if (!table) return;

    const search =
        document.getElementById("searchStudent")?.value
        .toLowerCase() || "";

    const filter =
        document.getElementById("statusFilter")?.value || "all";


    const filtered = students.filter(student => {

        const matchesSearch =
            student.name.toLowerCase().includes(search);

        const status =
            getStatus(student).key;

        const matchesStatus =
            filter === "all" || status === filter;

        return matchesSearch && matchesStatus;
    });


    table.innerHTML = "";


    filtered.forEach((student, index) => {

        const average = getAverage(student);
        const dynamics = getDynamics(student);
        const status = getStatus(student);

        const row = document.createElement("tr");

        row.innerHTML = `

            <td>${index + 1}</td>

            <td>
                <strong>${student.name}</strong>
            </td>

            <td>${student.className}</td>

            <td>${student.subject}</td>

            <td>${average}%</td>

            <td>${student.attendance}%</td>

            <td>${student.activity}%</td>

            <td>
                ${dynamics >= 0 ? "📈 +" : "📉 "}
                ${dynamics}%
            </td>

            <td>
                <span class="status status-${status.key}">
                    ${status.text}
                </span>
            </td>

            <td>
                <button
                    class="action-btn"
                    onclick="openStudent(${student.id})">
                    Толығырақ
                </button>
            </td>
        `;

        table.appendChild(row);
    });
}


// ==========================================
// ADD STUDENT
// ==========================================

document
    .getElementById("studentForm")
    .addEventListener("submit", function(event) {

        event.preventDefault();


        const newStudent = {

            id: Date.now(),

            name:
                document.getElementById("studentName").value,

            className:
                document.getElementById("studentClass").value,

            subject:
                document.getElementById("studentSubject").value,

            scores: [

                Number(
                    document.getElementById("score1").value
                ),

                Number(
                    document.getElementById("score2").value
                ),

                Number(
                    document.getElementById("bzb").value
                ),

                Number(
                    document.getElementById("tjb").value
                )
            ],

            homework:
                Number(
                    document.getElementById("homework").value
                ),

            attendance:
                Number(
                    document.getElementById("attendance").value
                ),

            activity:
                Number(
                    document.getElementById("activity").value
                ),

            topics: {

                "Алгоритмдер":
                    Number(
                        document.getElementById("topicAlgorithm").value
                    ),

                "Циклдер":
                    Number(
                        document.getElementById("topicLoops").value
                    ),

                "Шартты операторлар":
                    Number(
                        document.getElementById("topicConditions").value
                    ),

                "Python":
                    Number(
                        document.getElementById("topicPython").value
                    ),

                "Ақпараттық қауіпсіздік":
                    Number(
                        document.getElementById("topicSecurity").value
                    )
            }
        };


        students.push(newStudent);

        saveStudents();

        this.reset();

        showToast("Оқушы сәтті қосылды!");

        updateAll();

        showSectionById("students");
    });


// ==========================================
// STUDENT MODAL
// ==========================================

function openStudent(id) {

    const student =
        students.find(s => s.id === id);

    if (!student) return;


    const average = getAverage(student);
    const dynamics = getDynamics(student);
    const status = getStatus(student);


    const topicEntries =
        Object.entries(student.topics);


    const strengths =
        topicEntries
            .filter(([topic, score]) => score >= 85)
            .map(([topic]) => topic);


    const difficulties =
        topicEntries
            .filter(([topic, score]) => score < 70)
            .map(([topic]) => topic);


    document.getElementById("studentDetails").innerHTML = `

        <h2>👨‍🎓 ${student.name}</h2>

        <p>
            ${student.className} • ${student.subject}
        </p>

        <hr style="margin:20px 0;border-color:rgba(255,255,255,.1)">

        <h3>📊 Негізгі көрсеткіштер</h3>

        <p>Орташа нәтиже: <strong>${average}%</strong></p>

        <p>Қатысу: <strong>${student.attendance}%</strong></p>

        <p>Белсенділік: <strong>${student.activity}%</strong></p>

        <p>
            Динамика:
            <strong>
                ${dynamics >= 0 ? "+" : ""}
                ${dynamics}%
            </strong>
        </p>

        <p>
            Статус:
            <span class="status status-${status.key}">
                ${status.text}
            </span>
        </p>

        <hr style="margin:20px 0;border-color:rgba(255,255,255,.1)">

        <h3>💪 Күшті тақырыптар</h3>

        <p>
            ${strengths.length
                ? strengths.join(", ")
                : "Айқын жоғары нәтиже анықталған жоқ"}
        </p>

        <h3 style="margin-top:20px">
            ⚠️ Қиындық байқалған тақырыптар
        </h3>

        <p>
            ${difficulties.length
                ? difficulties.join(", ")
                : "Маңызды қиындық байқалмайды"}
        </p>

        <h3 style="margin-top:20px">
            🎯 Мұғалімге ұсыныс
        </h3>

        <p>
            ${generateStudentRecommendation(student)}
        </p>
    `;


    document
        .getElementById("studentModal")
        .classList.add("show");
}


function closeModal() {

    document
        .getElementById("studentModal")
        .classList.remove("show");
}


function generateStudentRecommendation(student) {

    const average = getAverage(student);

    if (average < 65) {

        return `
            Негізгі тақырыптарды қысқа түсіндіру,
            деңгейлік тапсырмалар беру және
            жеке қолдау ұйымдастыру ұсынылады.
        `;
    }

    if (average < 75) {

        return `
            Қиындық байқалған тақырыптарды қайталап,
            практикалық тапсырмалар санын арттыру ұсынылады.
        `;
    }

    return `
        Оқушының тұрақты нәтижесін сақтап,
        күрделілігі жоғары шығармашылық тапсырмалар
        ұсынуға болады.
    `;
}


// ==========================================
// TOPIC ANALYTICS
// ==========================================

function calculateTopics() {

    const topics = {};

    students.forEach(student => {

        Object.entries(student.topics)
            .forEach(([topic, score]) => {

                if (!topics[topic]) {
                    topics[topic] = [];
                }

                topics[topic].push(score);
            });
    });


    return Object.entries(topics).map(
        ([topic, scores]) => {

            const average =
                Math.round(
                    scores.reduce((a,b) => a+b, 0)
                    / scores.length
                );

            return {
                topic,
                average
            };
        }
    );
}


function renderTopics() {

    const table =
        document.getElementById("topicsTable");

    if (!table) return;

    const topics = calculateTopics();

    table.innerHTML = "";


    topics.forEach(item => {

        let status = "";

        if (item.average < 65) {

            status =
                `<span class="status status-support">
                    Қайталау қажет
                </span>`;

        } else if (item.average < 75) {

            status =
                `<span class="status status-attention">
                    Назар аудару қажет
                </span>`;

        } else {

            status =
                `<span class="status status-stable">
                    Жақсы
                </span>`;
        }


        table.innerHTML += `

            <tr>

                <td>${item.topic}</td>

                <td>${item.average}%</td>

                <td>${status}</td>

            </tr>
        `;
    });
}


// ==========================================
// PREDICTIVE AI
// ==========================================

function updatePrediction() {

    if (!students.length) return;


    const averages =
        students.map(student => getAverage(student));


    const currentAverage =
        Math.round(
            averages.reduce((a,b) => a+b, 0)
            / averages.length
        );


    const averageDynamics =
        Math.round(
            students.reduce(
                (sum, student) =>
                    sum + getDynamics(student),
                0
            ) / students.length
        );


    const predictedMin =
        Math.max(
            0,
            Math.min(
                100,
                currentAverage + averageDynamics - 3
            )
        );


    const predictedMax =
        Math.max(
            0,
            Math.min(
                100,
                currentAverage + averageDynamics + 3
            )
        );


    document.getElementById("predictionNumber")
        .textContent =
        `${predictedMin}–${predictedMax}%`;


    document.getElementById("predictionText")
        .textContent =
        `Қазіргі орташа нәтиже ${currentAverage}%.
        Соңғы нәтижелер динамикасы негізінде
        келесі кезеңге болжамдық диапазон есептелді.`;


    let trend = "Тұрақты";

    if (averageDynamics > 3) {
        trend = "📈 Өсу байқалады";
    }

    if (averageDynamics < -3) {
        trend = "📉 Төмендеу байқалады";
    }


    document.getElementById("trendBox")
        .textContent = trend;


    let confidence = "Орташа";

    if (students.length >= 8) {
        confidence = "Жоғары";
    }

    if (students.length < 4) {
        confidence = "Төмен";
    }


    document.getElementById("confidence")
        .textContent = confidence;
}


// ==========================================
// SUPPORT STRATEGY
// ==========================================

function updateSupportStrategy() {

    const container =
        document.getElementById("supportContent");

    if (!container) return;


    const topics =
        calculateTopics()
        .sort((a,b) => a.average - b.average);


    const weakest =
        topics[0];


    const supportStudents =
        students.filter(
            student =>
                getStatus(student).key === "support"
        );


    container.innerHTML = `

        <div class="recommendation-card">

            <div class="icon">📚</div>

            <h3>Қайталау</h3>

            <p>
                ${
                    weakest
                    ? weakest.topic
                    : "Тақырып"
                }
                тақырыбының нәтижесі төмен болғандықтан,
                келесі сабақтың алғашқы бөлігінде
                осы тақырыпты қысқаша қайталау ұсынылады.
            </p>

        </div>


        <div class="recommendation-card">

            <div class="icon">🧩</div>

            <h3>Практикалық тапсырма</h3>

            <p>
                Теорияны бекіту үшін
                деңгейлік және практикалық тапсырмалар
                қолдану ұсынылады.
            </p>

        </div>


        <div class="recommendation-card">

            <div class="icon">👥</div>

            <h3>Қосымша қолдау</h3>

            <p>
                ${supportStudents.length}
                оқушыға қосымша түсіндіру,
                жеке тапсырма немесе жұптық жұмыс
                ұйымдастыруға болады.
            </p>

        </div>
    `;
}


// ==========================================
// NEXT LESSON
// ==========================================

function updateNextLesson() {

    const container =
        document.getElementById("lessonContent");

    if (!container) return;


    const topics =
        calculateTopics()
        .sort((a,b) => a.average - b.average);


    const weakest =
        topics[0];


    if (!weakest) return;


    container.innerHTML = `

        <h2>
            📚 Келесі сабақтың негізгі бағыты
        </h2>

        <p>
            <strong>${weakest.topic}</strong>
            тақырыбы бойынша орташа нәтиже:
            <strong>${weakest.average}%</strong>.
        </p>


        <div class="lesson-item">
            📌 <strong>1. Қайталау:</strong>
            тақырыптың негізгі ұғымдарын
            қысқаша түсіндіру.
        </div>


        <div class="lesson-item">
            🧩 <strong>2. Практика:</strong>
            3 деңгейлі тапсырма беру:
            базалық, орта және күрделі.
        </div>


        <div class="lesson-item">
            👥 <strong>3. Қосымша қолдау:</strong>
            қиындық байқалған оқушылармен
            жұптық немесе шағын топтық жұмыс жүргізу.
        </div>


        <div class="lesson-item">
            📝 <strong>4. Кері байланыс:</strong>
            сабақ соңында қысқа тест немесе
            exit-ticket қолдану.
        </div>
    `;
}


// ==========================================
// AI TEACHER ASSISTANT
// ==========================================

function askAI(question) {

    const answer =
        generateAIAnswer(question);

    addChatMessage(
        question,
        "user"
    );

    setTimeout(() => {

        addChatMessage(
            answer,
            "ai"
        );

    }, 300);
}


function sendAIQuestion() {

    const input =
        document.getElementById("aiInput");

    const question =
        input.value.trim();

    if (!question) return;

    askAI(question);

    input.value = "";
}


function addChatMessage(text, type) {

    const messages =
        document.getElementById("chatMessages");


    const div =
        document.createElement("div");


    div.className =
        type === "ai"
            ? "ai-message"
            : "user-message";


    div.textContent =
        type === "ai"
            ? "🤖 " + text
            : text;


    messages.appendChild(div);

    messages.scrollTop =
        messages.scrollHeight;
}


function generateAIAnswer(question) {

    const q =
        question.toLowerCase();


    const average =
        Math.round(
            students.reduce(
                (sum, student) =>
                    sum + getAverage(student),
                0
            ) / students.length
        );


    const topics =
        calculateTopics()
        .sort((a,b) => a.average - b.average);


    const weakest =
        topics[0];


    const supportStudents =
        students.filter(
            s => getStatus(s).key === "support"
        );


    const decreasing =
        students.filter(
            s => getDynamics(s) < 0
        );


    if (
        q.includes("орташа") ||
        q.includes("орташасы")
    ) {

        return `
            Сыныптың орташа оқу нәтижесі
            шамамен ${average}%.
        `;
    }


    if (
        q.includes("тақырып") &&
        (
            q.includes("төмен") ||
            q.includes("қиын")
        )
    ) {

        return `
            Қазіргі деректер бойынша ең төмен
            нәтиже байқалған тақырып —
            ${weakest.topic} (${weakest.average}%).
            Осы тақырыпты қайталау ұсынылады.
        `;
    }


    if (
        q.includes("қолдау") ||
        q.includes("оқушы")
    ) {

        return `
            Қосымша қолдау қажет деп анықталған
            оқушылар саны: ${supportStudents.length}.
            Оларға деңгейлік тапсырмалар мен
            жеке түсіндіру ұйымдастыруға болады.
        `;
    }


    if (
        q.includes("динамика") ||
        q.includes("төмендеді")
    ) {

        return `
            Нәтижесі төмендеген оқушылар саны:
            ${decreasing.length}.
            Соңғы бағаларды жеке қарастырып,
            қиындық туындаған тақырыптарды
            анықтау ұсынылады.
        `;
    }


    if (
        q.includes("келесі сабақ") ||
        q.includes("қайталау")
    ) {

        return `
            Келесі сабақта ${weakest.topic}
            тақырыбына қысқаша қайталау,
            практикалық тапсырма және
            сабақ соңында қысқа қалыптастырушы
            бағалау қолдану ұсынылады.
        `;
    }


    return `
        Сұрағыңызды оқу нәтижелері,
        тақырыптар, динамика немесе
        қосымша қолдау бойынша нақтылап
        жазсаңыз, қолжетімді деректерге
        сүйеніп талдау жасаймын.
    `;
}


// ==========================================
// CHARTS
// ==========================================

let trendChart;
let studentChart;
let performanceChart;
let attendanceChart;


function createCharts() {

    const labels =
        students.map(student => student.name);


    const averages =
        students.map(student => getAverage(student));


    // TREND CHART

    const trendCanvas =
        document.getElementById("trendChart");

    if (trendCanvas) {

        if (trendChart) trendChart.destroy();

        trendChart =
            new Chart(
                trendCanvas,
                {
                    type: "line",

                    data: {

                        labels: ["1", "2", "3", "4"],

                        datasets: [

                            {
                                label: "Орташа нәтиже",

                                data: [
                                    averageScoreByPosition(0),
                                    averageScoreByPosition(1),
                                    averageScoreByPosition(2),
                                    averageScoreByPosition(3)
                                ],

                                borderWidth: 3,

                                tension: .4
                            }

                        ]
                    },

                    options: {

                        responsive: true,

                        plugins: {
                            legend: {
                                labels: {
                                    color: "#cbd5e1"
                                }
                            }
                        },

                        scales: {

                            x: {
                                ticks: {
                                    color: "#94a3b8"
                                }
                            },

                            y: {
                                beginAtZero: true,
                                max: 100,

                                ticks: {
                                    color: "#94a3b8"
                                }
                            }
                        }
                    }
                }
            );
    }


    // STUDENT CHART

    const studentCanvas =
        document.getElementById("studentChart");

    if (studentCanvas) {

        if (studentChart) studentChart.destroy();

        studentChart =
            new Chart(
                studentCanvas,
                {
                    type: "bar",

                    data: {

                        labels,

                        datasets: [

                            {
                                label: "Орташа нәтиже",

                                data: averages,

                                borderRadius: 8
                            }

                        ]
                    },

                    options: {

                        responsive: true,

                        scales: {

                            x: {
                                ticks: {
                                    color: "#94a3b8"
                                }
                            },

                            y: {
                                beginAtZero: true,
                                max: 100,

                                ticks: {
                                    color: "#94a3b8"
                                }
                            }
                        }
                    }
                }
            );
    }


    // PERFORMANCE

    const performanceCanvas =
        document.getElementById("performanceChart");

    if (performanceCanvas) {

        if (performanceChart)
            performanceChart.destroy();


        const excellent =
            students.filter(
                s => getAverage(s) >= 85
            ).length;


        const good =
            students.filter(
                s =>
                    getAverage(s) >= 70 &&
                    getAverage(s) < 85
            ).length;


        const support =
            students.filter(
                s => getAverage(s) < 70
            ).length;


        performanceChart =
            new Chart(
                performanceCanvas,
                {
                    type: "doughnut",

                    data: {

                        labels: [
                            "Жоғары",
                            "Орташа",
                            "Қосымша қолдау"
                        ],

                        datasets: [
                            {
                                data: [
                                    excellent,
                                    good,
                                    support
                                ]
                            }
                        ]
                    }
                }
            );
    }


    // ATTENDANCE

    const attendanceCanvas =
        document.getElementById("attendanceChart");


    if (attendanceCanvas) {

        if (attendanceChart)
            attendanceChart.destroy();


        attendanceChart =
            new Chart(
                attendanceCanvas,
                {
                    type: "scatter",

                    data: {

                        datasets: [

                            {
                                label:
                                    "Қатысу → Нәтиже",

                                data:
                                    students.map(
                                        s => ({
                                            x: s.attendance,
                                            y: getAverage(s)
                                        })
                                    ),

                                pointRadius: 7
                            }

                        ]
                    },

                    options: {

                        responsive: true,

                        scales: {

                            x: {
                                min: 0,
                                max: 100,
                                title: {
                                    display: true,
                                    text: "Қатысу %",
                                    color: "#cbd5e1"
                                }
                            },

                            y: {
                                min: 0,
                                max: 100,
                                title: {
                                    display: true,
                                    text: "Нәтиже %",
                                    color: "#cbd5e1"
                                }
                            }
                        }
                    }
                }
            );
    }
}


function averageScoreByPosition(position) {

    if (!students.length) return 0;


    const values =
        students
            .map(s => s.scores[position])
            .filter(v => v !== undefined);


    if (!values.length) return 0;


    return Math.round(
        values.reduce((a,b) => a+b, 0)
        / values.length
    );
}


// ==========================================
// CSV EXPORT
// ==========================================

function exportCSV() {

    let csv =
        "Аты-жөні,Сыныбы,Пәні,Орташа нәтиже,Қатысу,Белсенділік,Динамика,Статус\n";


    students.forEach(student => {

        const row = [

            student.name,

            student.className,

            student.subject,

            getAverage(student),

            student.attendance,

            student.activity,

            getDynamics(student),

            getStatus(student).text

        ];


        csv += row.join(",") + "\n";
    });


    const blob =
        new Blob(
            ["\uFEFF" + csv],
            { type: "text/csv;charset=utf-8;" }
        );


    const url =
        URL.createObjectURL(blob);


    const link =
        document.createElement("a");


    link.href = url;

    link.download =
        "student-performance-report.csv";


    link.click();

    URL.revokeObjectURL(url);


    showToast("CSV есеп дайын!");
}


// ==========================================
// DARK MODE
// ==========================================

function toggleDarkMode() {

    document.body.classList.toggle("light-mode");

    const isLight =
        document.body.classList.contains("light-mode");

    localStorage.setItem(
        "lightMode",
        isLight
    );
}


// ==========================================
// TOAST
// ==========================================

function showToast(message) {

    const toast =
        document.getElementById("toast");

    toast.textContent = message;

    toast.classList.add("show");


    setTimeout(() => {

        toast.classList.remove("show");

    }, 2500);
}


// ==========================================
// UPDATE ALL
// ==========================================

function updateAll() {

    updateStatistics();

    renderStudents();

    renderTopics();

    updatePrediction();

    updateSupportStrategy();

    updateNextLesson();

    createCharts();
}


// ==========================================
// INITIALIZATION
// ==========================================

document.addEventListener(
    "DOMContentLoaded",
    () => {

        if (
            localStorage.getItem("lightMode")
            === "true"
        ) {
            document.body.classList.add(
                "light-mode"
            );
        }

        updateAll();
    }
);
```
