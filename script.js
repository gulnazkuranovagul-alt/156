// Бастапқы оқушылар массиві
let students = [
    { id: 1, name: "Айша Серікова", attendance: 95, currentScore: 88, weakTopic: "Тригонометрия" },
    { id: 2, name: "Арафат Нұрланұлы", attendance: 60, currentScore: 45, weakTopic: "Алгебра" },
    { id: 3, name: "Диас Ахметов", attendance: 80, currentScore: 72, weakTopic: "Функциялар" }
];

document.addEventListener("DOMContentLoaded", () => {
    refreshApp();
    updateSimulation();
});

// Аппликацияны жаңарту (Кесте, Есептер, Статистика)
function refreshApp() {
    calculateAIAndRisk();
    renderTable(students);
    updateStats();
    populateSelect();
}

// AI Болжамын және Қауіп деңгейін автоматты есептеу алгоритмі
function calculateAIAndRisk() {
    students.forEach(s => {
        // AI Формуласы: Қатысуы (30%) + Ағымдағы бағасы (70%)
        let predicted = Math.round((s.attendance * 0.3) + (s.currentScore * 0.7));
        s.predictedScore = predicted;

        if (predicted < 60) {
            s.risk = "High";
        } else if (predicted < 75) {
            s.risk = "Medium";
        } else {
            s.risk = "Low";
        }
    });
}

// Кестені экранға шығару
function renderTable(data) {
    const tbody = document.getElementById("studentTableBody");
    tbody.innerHTML = "";

    if (data.length === 0) {
        tbody.innerHTML = `<tr><td colspan="6" class="text-center py-4 text-gray-500">Оқушылар тізімі бош. Жаңа оқушы қосыңыз.</td></tr>`;
        return;
    }

    data.forEach(s => {
        let riskBadge = s.risk === "High" 
            ? `<span class="bg-red-500/20 text-red-400 border border-red-500/30 px-2.5 py-1 rounded-full text-xs font-semibold">Жоғары (High)</span>`
            : s.risk === "Medium"
            ? `<span class="bg-yellow-500/20 text-yellow-400 border border-yellow-500/30 px-2.5 py-1 rounded-full text-xs font-semibold">Орташа (Medium)</span>`
            : `<span class="bg-green-500/20 text-green-400 border border-green-500/30 px-2.5 py-1 rounded-full text-xs font-semibold">Төмен (Low)</span>`;

        tbody.innerHTML += `
            <tr class="hover:bg-gray-800/50 transition">
                <td class="py-3 px-3 font-medium text-white">${s.name}</td>
                <td class="py-3 px-3">${s.attendance}%</td>
                <td class="py-3 px-3 font-semibold">${s.currentScore}%</td>
                <td class="py-3 px-3 text-blue-400 font-bold">${s.predictedScore}%</td>
                <td class="py-3 px-3">${riskBadge}</td>
                <td class="py-3 px-3 text-center">
                    <button onclick="deleteStudent(${s.id})" class="text-red-400 hover:text-red-300 p-1">
                        <i class="fa-solid fa-trash"></i>
                    </button>
                </td>
            </tr>
        `;
    });
}

// ЖАҢА ОҚУШЫ ҚОСУ
function addStudent(e) {
    e.preventDefault();

    const name = document.getElementById("inputName").value;
    const attendance = parseInt(document.getElementById("inputAttendance").value);
    const score = parseInt(document.getElementById("inputScore").value);
    const weakTopic = document.getElementById("inputWeakTopic").value;

    const newStudent = {
        id: Date.now(),
        name: name,
        attendance: attendance,
        currentScore: score,
        weakTopic: weakTopic
    };

    students.push(newStudent);
    document.getElementById("addStudentForm").reset();
    refreshApp();
}

// ОҚУШЫНЫ ӨШІРУ
function deleteStudent(id) {
    students = students.filter(s => s.id !== id);
    refreshApp();
}

// СТАТИСТИКАНЫ ЖАҢАРТУ
function updateStats() {
    const total = students.length;
    document.getElementById("stat-total").innerText = total;

    if (total === 0) {
        document.getElementById("stat-avg").innerText = "0%";
        document.getElementById("stat-risk").innerText = "0";
        return;
    }

    const avg = Math.round(students.reduce((acc, s) => acc + s.currentScore, 0) / total);
    const highRiskCount = students.filter(s => s.risk === "High").length;

    document.getElementById("stat-avg").innerText = avg + "%";
    document.getElementById("stat-risk").innerText = highRiskCount;
}

// ӨЗГЕРТІЛГЕН ОҚУШЫЛАРДЫ СЕЛЕКТОРҒА ЖҮКТЕУ
function populateSelect() {
    const select = document.getElementById("reportStudentSelect");
    select.innerHTML = "";
    students.forEach(s => {
        select.innerHTML += `<option value="${s.id}">${s.name}</option>`;
    });
}

// ІЗДЕУ
function filterStudents() {
    const query = document.getElementById("studentSearch").value.toLowerCase();
    const filtered = students.filter(s => s.name.toLowerCase().includes(query));
    renderTable(filtered);
}

// НАВИГАЦИЯ
function switchTab(tabName) {
    document.querySelectorAll("main > section").forEach(sec => sec.classList.add("hidden"));
    document.getElementById(`tab-${tabName}`).classList.remove("hidden");

    document.querySelectorAll(".tab-btn").forEach(btn => {
        btn.classList.remove("bg-blue-600", "text-white");
        btn.classList.add("bg-gray-800", "text-gray-300");
    });

    const activeBtn = document.getElementById(`btn-${tabName}`);
    activeBtn.classList.remove("bg-gray-800", "text-gray-300");
    activeBtn.classList.add("bg-blue-600", "text-white");
}

// СИМУЛЯТОР
function updateSimulation() {
    const att = parseInt(document.getElementById("sim-attendance").value);
    const hw = parseInt(document.getElementById("sim-homework").value);
    const test = parseInt(document.getElementById("sim-tests").value);

    document.getElementById("val-attendance").innerText = att + "%";
    document.getElementById("val-homework").innerText = hw + "%";
    document.getElementById("val-tests").innerText = test + "%";

    const predicted = Math.round((att * 0.2) + (hw * 0.3) + (test * 0.5));
    const scoreElem = document.getElementById("sim-result-score");
    const badgeElem = document.getElementById("sim-risk-badge");
    const recElem = document.getElementById("sim-recommendation");

    scoreElem.innerText = predicted + "%";

    if (predicted < 60) {
        scoreElem.className = "text-5xl font-extrabold text-red-400 my-3";
        badgeElem.className = "px-4 py-1.5 rounded-full text-xs font-bold bg-red-500/20 text-red-400 border border-red-500/30 mb-4";
        badgeElem.innerText = "ЖОҒАРЫ ҚАУІП";
        recElem.innerText = "Оқушыға қосымша сабақтар мен жеке тапсырмалар қажет!";
    } else if (predicted < 75) {
        scoreElem.className = "text-5xl font-extrabold text-yellow-400 my-3";
        badgeElem.className = "px-4 py-1.5 rounded-full text-xs font-bold bg-yellow-500/20 text-yellow-400 border border-yellow-500/30 mb-4";
        badgeElem.innerText = "ОРТАША ҚАУІП";
        recElem.innerText = "Үй тапсырмасының орындалуын бақылау ұсынылады.";
    } else {
        scoreElem.className = "text-5xl font-extrabold text-green-400 my-3";
        badgeElem.className = "px-4 py-1.5 rounded-full text-xs font-bold bg-green-500/20 text-green-400 border border-green-500/30 mb-4";
        badgeElem.innerText = "ТӨМЕН ҚАУІП";
        recElem.innerText = "Үлгерімі өте жақсы!";
    }
}

// AI Есеп құрастыру
function generateAIReport() {
    const id = parseInt(document.getElementById("reportStudentSelect").value);
    const student = students.find(s => s.id === id);

    if (!student) {
        alert("Алдымен оқушы таңдаңыз!");
        return;
    }

    const report = `Құрметті ата-ана!

${student.name} есімді оқушының сабақ үлгерімі бойынша AI-аналитикалық есебі:

• Сабаққа қатысу көрсеткіші: ${student.attendance}%
• Ағымдағы орташа ұпайы: ${student.currentScore}%
• AI Болжамды тоқсандық нәтижесі: ${student.predictedScore}%

💡 AI Ұсынысы: Оқушыға "${student.weakTopic}" тақырыбы бойынша қосымша дайындық жасау ұсынылады.

Құрметпен, сынып жетекшісі.`;

    document.getElementById("aiReportText").value = report;
}

function copyReport() {
    const text = document.getElementById("aiReportText");
    text.select();
    document.execCommand("copy");
    alert("Есеп көшірілді!");
}