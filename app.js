const healingQuotes = [
    "每一个不曾起舞的日子，都是对生命的辜负。",
    "生活不是等待风暴过去，而是学会在雨中翩翩起舞。",
    "你不需要变得完美，你只需要变得真实。",
    "所有的失去，都会以另一种方式归来。",
    "温柔的人，最后都会被世界温柔以待。",
    "不要因为结束而哭泣，要为曾经发生而微笑。",
    "你的善良，必须有点锋芒。",
    "生活明朗，万物可爱。",
    "慢慢来，比较快。",
    "你值得被这世界温柔以待。",
    "愿你眼中总有光芒，活成你想要的模样。",
    "所有的运气，都是你积攒的温柔。",
    "做一个温暖的人，不求大富大贵，只求生活简单快乐。",
    "愿你被这个世界温柔以待，即使生命总以刻薄荒芜相欺。",
    "最好的时光，是一个人坐在某处，安静地读书。",
    "生活原本沉闷，但跑起来就有风。",
    "你若盛开，清风自来。",
    "不必太纠结于当下，也不必太忧虑未来。",
    "人生没有白走的路，每一步都算数。",
    "愿你历尽千帆，归来仍是少年。"
];

const healingFeedbackQuotes = [
    { icon: '💫', text: '每一次记录，都是与内心的温柔对话' },
    { icon: '🌸', text: '你的情绪值得被看见，你的感受很重要' },
    { icon: '✨', text: '记录此刻，让心情得到释放与疗愈' },
    { icon: '🌿', text: '接纳自己的情绪，是成长的第一步' },
    { icon: '🌙', text: '夜深了，感谢你愿意与自己对话' },
    { icon: '🌈', text: '所有的情绪都会过去，你依然是你' },
    { icon: '🍃', text: '深呼吸，感受此刻的平静' },
    { icon: '☀️', text: '新的一天，新的开始，你值得更好的' },
    { icon: '🎈', text: '让心情像气球一样，轻盈地飘向天空' },
    { icon: '🌊', text: '情绪如潮水，来来去去，终归平静' }
];

let selectedEmotion = null;
let energyChart = null;
let currentPeriod = 'day';

const STORAGE_KEY = 'emotionEnergyDiary';
const EMOTIONS_KEY = 'emotionEnergyDiary_emotions';

const defaultEmotions = [
    { name: '开心', emoji: '😊' },
    { name: '平静', emoji: '😌' },
    { name: '焦虑', emoji: '😰' },
    { name: '愤怒', emoji: '😠' },
    { name: '悲伤', emoji: '😢' },
    { name: '疲惫', emoji: '😴' },
    { name: '兴奋', emoji: '🤩' },
    { name: '困惑', emoji: '😕' }
];

let customEmotions = [];

function init() {
    loadQuote();
    loadEmotions();
    setupEventListeners();
    loadHistory();
    initChart();
    loadTheme();
    updateHomeStatus();
}

function loadQuote() {
    const randomIndex = Math.floor(Math.random() * healingQuotes.length);
    document.getElementById('dailyQuote').textContent = healingQuotes[randomIndex];
}

function setupEventListeners() {
    const energySlider = document.getElementById('energyValue');
    const energyNumber = document.getElementById('energyNumber');
    energySlider.addEventListener('input', (e) => {
        energyNumber.textContent = e.target.value;
        energyNumber.classList.remove('pulse');
        void energyNumber.offsetWidth;
        energyNumber.classList.add('pulse');
    });

    document.getElementById('saveBtn').addEventListener('click', saveRecord);
    document.getElementById('newQuoteBtn').addEventListener('click', loadQuote);
    document.getElementById('exportCSV').addEventListener('click', exportToCSV);
    document.getElementById('exportJSON').addEventListener('click', exportToJSON);
    document.getElementById('importBtn').addEventListener('click', () => document.getElementById('importFile').click());
    document.getElementById('importFile').addEventListener('change', importFromJSON);
    document.getElementById('themeToggle').addEventListener('click', toggleTheme);

    const quickRecordBtn = document.getElementById('quickRecordBtn');
    if (quickRecordBtn) {
        quickRecordBtn.addEventListener('click', () => {
            const navTabs = document.querySelectorAll('.nav-tab');
            navTabs.forEach(tab => {
                tab.classList.remove('active');
                if (tab.dataset.tab === 'record') {
                    tab.classList.add('active');
                }
            });
            document.querySelectorAll('.tab-pane').forEach(pane => {
                pane.classList.remove('active');
            });
            document.getElementById('tab-record').classList.add('active');
        });
    }

    const exportCSVBtn = document.getElementById('exportCSVBtn');
    if (exportCSVBtn) {
        exportCSVBtn.addEventListener('click', exportToCSV);
    }

    const darkModeToggle = document.getElementById('darkModeToggle');
    if (darkModeToggle) {
        darkModeToggle.addEventListener('change', (e) => {
            if (e.target.checked) {
                document.body.classList.add('dark-mode');
                localStorage.setItem('emotionEnergyDiary_theme', 'dark');
            } else {
                document.body.classList.remove('dark-mode');
                localStorage.setItem('emotionEnergyDiary_theme', 'light');
            }
        });
    }

    const viewHistoryBtn = document.getElementById('viewHistoryBtn');
    if (viewHistoryBtn) {
        viewHistoryBtn.addEventListener('click', () => {
            const navTabs = document.querySelectorAll('.nav-tab');
            navTabs.forEach(tab => {
                tab.classList.remove('active');
                if (tab.dataset.tab === 'history') {
                    tab.classList.add('active');
                }
            });
            document.querySelectorAll('.tab-pane').forEach(pane => {
                pane.classList.remove('active');
            });
            document.getElementById('tab-history').classList.add('active');
        });
    }

    const backToSettingsBtn = document.getElementById('backToSettingsBtn');
    if (backToSettingsBtn) {
        backToSettingsBtn.addEventListener('click', () => {
            const navTabs = document.querySelectorAll('.nav-tab');
            navTabs.forEach(tab => {
                tab.classList.remove('active');
                if (tab.dataset.tab === 'settings') {
                    tab.classList.add('active');
                }
            });
            document.querySelectorAll('.tab-pane').forEach(pane => {
                pane.classList.remove('active');
            });
            document.getElementById('tab-settings').classList.add('active');
        });
    }

    const manageEmotionsBtn = document.getElementById('manageEmotionsBtn');
    if (manageEmotionsBtn) {
        manageEmotionsBtn.addEventListener('click', openEmotionModal);
    }

    const closeEmotionModalBtn = document.getElementById('closeEmotionModal');
    if (closeEmotionModalBtn) {
        closeEmotionModalBtn.addEventListener('click', closeEmotionModal);
    }

    const addEmotionBtn = document.getElementById('addEmotionBtn');
    if (addEmotionBtn) {
        addEmotionBtn.addEventListener('click', addEmotion);
    }

    const navTabs = document.querySelectorAll('.bottom-nav-item');
    navTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            navTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            const tabId = tab.dataset.tab;
            document.querySelectorAll('.tab-pane').forEach(pane => {
                pane.classList.remove('active');
            });
            document.getElementById(`tab-${tabId}`).classList.add('active');

            if (tabId === 'trend') {
                setTimeout(() => {
                    updateChart();
                }, 100);
            }
        });
    });

    const chartBtns = document.querySelectorAll('.chart-btn');
    chartBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            chartBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentPeriod = btn.dataset.period;
            updateChart();
        });
    });
}

function saveRecord() {
    if (!selectedEmotion) {
        alert('请选择一个情绪标签');
        return;
    }

    const energyValue = parseInt(document.getElementById('energyValue').value);
    const triggerReason = document.getElementById('triggerReason').value.trim();

    if (!triggerReason) {
        alert('请输入触发原因');
        return;
    }

    const record = {
        id: Date.now(),
        emotion: selectedEmotion,
        energy: energyValue,
        reason: triggerReason,
        date: Date.now()
    };

    const records = getRecords();
    records.unshift(record);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(records));

    resetForm();
    loadHistory();
    updateChart();
    updateHomeStatus();

    showHealingFeedback();
}

function showHealingFeedback() {
    const feedback = document.getElementById('healingFeedback');
    const randomQuote = healingFeedbackQuotes[Math.floor(Math.random() * healingFeedbackQuotes.length)];

    feedback.innerHTML = `
        <span class="icon">${randomQuote.icon}</span>
        <span class="text">${randomQuote.text}</span>
    `;

    feedback.classList.add('show');

    setTimeout(() => {
        feedback.classList.remove('show');
    }, 4000);
}

function getRecords() {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
}

function resetForm() {
    selectedEmotion = null;
    document.querySelectorAll('.emotion-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.getElementById('energyValue').value = 5;
    document.getElementById('energyNumber').textContent = '5';
    document.getElementById('triggerReason').value = '';
}

function loadHistory() {
    const records = getRecords();
    const historyList = document.getElementById('historyList');

    if (records.length === 0) {
        historyList.innerHTML = '<p class="empty-message">还没有记录，开始记录你的情绪吧~</p>';
        updateStats([]);
        return;
    }

    historyList.innerHTML = records.map(record => {
        const date = new Date(record.date);
        const dateStr = date.toLocaleDateString('zh-CN', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit'
        });

        return `
            <div class="history-item" data-id="${record.id}">
                <div class="history-info">
                    <div class="history-date">${dateStr}</div>
                    <div class="history-emotion">${getEmotionEmoji(record.emotion)} ${record.emotion}</div>
                    <div class="history-reason">${record.reason}</div>
                </div>
                <div class="history-energy">
                    <div class="value">${record.energy}</div>
                    <div class="label">能量</div>
                </div>
                <button class="delete-btn" onclick="deleteRecord(${record.id})">×</button>
            </div>
        `;
    }).join('');

    updateStats(records);
}

function deleteRecord(id) {
    if (!confirm('确定要删除这条记录吗？')) {
        return;
    }

    const records = getRecords();
    const filteredRecords = records.filter(r => r.id !== id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(filteredRecords));

    loadHistory();
    updateChart();
}

function initChart() {
    const ctx = document.getElementById('energyChart').getContext('2d');

    energyChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: [],
            datasets: [{
                label: '能量值',
                data: [],
                borderColor: '#667eea',
                backgroundColor: 'rgba(102, 126, 234, 0.05)',
                borderWidth: 2,
                fill: true,
                tension: 0.4,
                pointRadius: 4,
                pointBackgroundColor: '#667eea',
                pointBorderColor: '#fff',
                pointBorderWidth: 2,
                pointHoverRadius: 6
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    backgroundColor: 'rgba(0, 0, 0, 0.75)',
                    padding: 10,
                    titleFont: {
                        size: 13
                    },
                    bodyFont: {
                        size: 12
                    },
                    callbacks: {
                        label: function (context) {
                            if (currentPeriod === 'day') {
                                const record = window.dailyChartData[context.dataIndex];
                                if (record) {
                                    const time = record.time.toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' });
                                    return `${time} - ${record.emotion}: ${record.energy}`;
                                }
                            } else {
                                const dateStr = context.label;
                                const dailyRecords = window.dailyChartData[dateStr];
                                if (dailyRecords && dailyRecords.length > 0) {
                                    const sortedRecords = dailyRecords.sort((a, b) => a.time - b.time);
                                    const avgEnergy = (sortedRecords.reduce((sum, r) => sum + r.energy, 0) / sortedRecords.length).toFixed(1);
                                    let result = [`平均能量: ${avgEnergy}`];
                                    if (sortedRecords.length > 1) {
                                        result.push(`记录数: ${sortedRecords.length}条`);
                                        sortedRecords.forEach(r => {
                                            const time = r.time.toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' });
                                            result.push(`  ${time} - ${r.emotion}: ${r.energy}`);
                                        });
                                    }
                                    return result;
                                }
                            }
                            return `能量值: ${context.parsed.y}`;
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: 10,
                    grid: {
                        color: 'rgba(0, 0, 0, 0.03)',
                        drawBorder: false
                    },
                    ticks: {
                        stepSize: 2,
                        font: {
                            size: 11
                        }
                    },
                    border: {
                        display: false
                    }
                },
                x: {
                    grid: {
                        display: false,
                        drawBorder: false
                    },
                    ticks: {
                        maxRotation: 0,
                        minRotation: 0,
                        maxTicksLimit: 7,
                        font: {
                            size: 11
                        },
                        color: 'rgba(0, 0, 0, 0.5)'
                    },
                    border: {
                        display: false
                    }
                }
            },
            interaction: {
                intersect: false,
                mode: 'index'
            }
        }
    });

    updateChart();
}

function updateChart() {
    const records = getRecords();
    const now = new Date();
    let filteredRecords = [];
    let labels = [];

    if (currentPeriod === 'day') {
        const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
        const tomorrow = new Date(today.getTime() + 24 * 60 * 60 * 1000);
        filteredRecords = records.filter(r => {
            const recordDate = new Date(r.date);
            return recordDate >= today && recordDate < tomorrow;
        });

        filteredRecords.sort((a, b) => a.date - b.date);

        filteredRecords.forEach(record => {
            const recordDate = new Date(record.date);
            labels.push(recordDate.toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' }));
        });

        document.getElementById('chartInfo').textContent = `显示今天的数据（${filteredRecords.length}条记录）`;
    } else if (currentPeriod === 'week') {
        const weekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
        filteredRecords = records.filter(r => new Date(r.date) >= weekAgo);

        for (let i = 6; i >= 0; i--) {
            const date = new Date(now.getTime() - i * 24 * 60 * 60 * 1000);
            labels.push(date.toLocaleDateString('zh-CN', { month: '2-digit', day: '2-digit' }));
        }

        document.getElementById('chartInfo').textContent = `显示最近7天的数据（${filteredRecords.length}条记录）`;
    } else {
        const monthAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
        filteredRecords = records.filter(r => new Date(r.date) >= monthAgo);

        for (let i = 29; i >= 0; i--) {
            const date = new Date(now.getTime() - i * 24 * 60 * 60 * 1000);
            labels.push(date.toLocaleDateString('zh-CN', { month: '2-digit', day: '2-digit' }));
        }

        document.getElementById('chartInfo').textContent = `显示最近30天的数据（${filteredRecords.length}条记录）`;
    }

    const data = new Array(labels.length).fill(null);

    if (currentPeriod === 'day') {
        filteredRecords.forEach((record, index) => {
            data[index] = record.energy;
        });

        const todayStr = now.toLocaleDateString('zh-CN', { month: '2-digit', day: '2-digit' });
        window.dailyChartData = {};
        window.dailyChartData[todayStr] = filteredRecords.map(r => ({
            energy: r.energy,
            time: new Date(r.date),
            emotion: r.emotion
        }));
    } else {
        const dailyRecords = {};
        filteredRecords.forEach(record => {
            const recordDate = new Date(record.date);
            const dateStr = recordDate.toLocaleDateString('zh-CN', { month: '2-digit', day: '2-digit' });

            if (!dailyRecords[dateStr]) {
                dailyRecords[dateStr] = [];
            }
            dailyRecords[dateStr].push({
                energy: record.energy,
                time: recordDate,
                emotion: record.emotion
            });
        });

        labels.forEach((dateStr, index) => {
            if (dailyRecords[dateStr]) {
                const records = dailyRecords[dateStr].sort((a, b) => a.time - b.time);
                const avgEnergy = (records.reduce((sum, r) => sum + r.energy, 0) / records.length).toFixed(1);
                data[index] = parseFloat(avgEnergy);
            }
        });

        window.dailyChartData = dailyRecords;
    }

    energyChart.data.labels = labels;
    energyChart.data.datasets[0].data = data;
    energyChart.update('active');
}

function exportToCSV() {
    const records = getRecords();

    if (records.length === 0) {
        alert('没有数据可以导出');
        return;
    }

    const headers = ['日期', '情绪', '能量值', '触发原因'];
    const csvContent = [
        headers.join(','),
        ...records.map(record => {
            const date = new Date(record.date).toLocaleDateString('zh-CN', {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',
                hour: '2-digit',
                minute: '2-digit'
            });
            return [
                `"${date}"`,
                `"${record.emotion}"`,
                record.energy,
                `"${record.reason.replace(/"/g, '""')}"`
            ].join(',');
        })
    ].join('\n');

    const blob = new Blob(['\ufeff' + csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);

    link.setAttribute('href', url);
    link.setAttribute('download', `情绪能量日记_${new Date().toLocaleDateString('zh-CN').replace(/\//g, '-')}.csv`);
    link.style.visibility = 'hidden';

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function exportToJSON() {
    const records = getRecords();

    if (records.length === 0) {
        alert('没有数据可以导出');
        return;
    }

    const data = {
        version: '1.0',
        exportDate: new Date().toISOString(),
        records: records
    };

    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);

    link.setAttribute('href', url);
    link.setAttribute('download', `情绪能量日记_${new Date().toLocaleDateString('zh-CN').replace(/\//g, '-')}.json`);
    link.style.visibility = 'hidden';

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function importFromJSON(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function (e) {
        try {
            const data = JSON.parse(e.target.result);

            if (!data.records || !Array.isArray(data.records)) {
                alert('无效的数据格式');
                return;
            }

            if (!confirm(`确定要导入${data.records.length}条记录吗？这将覆盖现有数据。`)) {
                return;
            }

            localStorage.setItem(STORAGE_KEY, JSON.stringify(data.records));

            loadHistory();
            updateChart();
            alert('数据导入成功！');
        } catch (error) {
            alert('导入失败：' + error.message);
        }
    };

    reader.readAsText(file);
    event.target.value = '';
}

function updateStats(records) {
    if (records.length === 0) {
        document.getElementById('avgEnergy').textContent = '--';
        document.getElementById('commonEmotion').textContent = '--';
        document.getElementById('streakDays').textContent = '--';
        document.getElementById('totalRecords').textContent = '0';
        return;
    }

    const totalRecords = records.length;
    const avgEnergy = (records.reduce((sum, r) => sum + r.energy, 0) / totalRecords).toFixed(1);

    const emotionCount = {};
    records.forEach(r => {
        emotionCount[r.emotion] = (emotionCount[r.emotion] || 0) + 1;
    });
    const commonEmotion = Object.entries(emotionCount).sort((a, b) => b[1] - a[1])[0][0];

    const streakDays = calculateStreakDays(records);

    document.getElementById('avgEnergy').textContent = avgEnergy;
    document.getElementById('commonEmotion').textContent = commonEmotion;
    document.getElementById('streakDays').textContent = streakDays + '天';
    document.getElementById('totalRecords').textContent = totalRecords;
}

function calculateStreakDays(records) {
    if (records.length === 0) return 0;

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const dates = records.map(r => {
        const date = new Date(r.date);
        date.setHours(0, 0, 0, 0);
        return date.getTime();
    });

    const uniqueDates = [...new Set(dates)].sort((a, b) => b - a);

    if (uniqueDates.length === 0) return 0;

    const latestDate = uniqueDates[0];
    const daysDiff = Math.floor((today.getTime() - latestDate) / (1000 * 60 * 60 * 24));

    if (daysDiff > 1) return 0;

    let streak = 1;
    for (let i = 0; i < uniqueDates.length - 1; i++) {
        const current = uniqueDates[i];
        const next = uniqueDates[i + 1];
        const diff = (current - next) / (1000 * 60 * 60 * 24);

        if (diff === 1) {
            streak++;
        } else {
            break;
        }
    }

    return streak;
}

function loadTheme() {
    const savedTheme = localStorage.getItem('emotionEnergyDiary_theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        document.getElementById('themeToggle').textContent = '☀️';
    }

    const darkModeToggle = document.getElementById('darkModeToggle');
    if (darkModeToggle) {
        darkModeToggle.checked = savedTheme === 'dark';
    }
}

function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    document.getElementById('themeToggle').textContent = isDark ? '☀️' : '🌙';
    localStorage.setItem('emotionEnergyDiary_theme', isDark ? 'dark' : 'light');

    const darkModeToggle = document.getElementById('darkModeToggle');
    if (darkModeToggle) {
        darkModeToggle.checked = isDark;
    }
}

function loadEmotions() {
    const savedEmotions = localStorage.getItem(EMOTIONS_KEY);
    if (savedEmotions) {
        customEmotions = JSON.parse(savedEmotions);
    }
    renderEmotionTags();
}

function renderEmotionTags() {
    const allEmotions = [...defaultEmotions, ...customEmotions];
    const emotionTags = document.getElementById('emotionTags');

    emotionTags.innerHTML = allEmotions.map(e => `
        <button class="emotion-btn" data-emotion="${e.name}">
            ${e.emoji} ${e.name}
        </button>
    `).join('');

    const emotionBtns = emotionTags.querySelectorAll('.emotion-btn');
    emotionBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            emotionBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            selectedEmotion = btn.dataset.emotion;
        });
    });
}

function openEmotionModal() {
    document.getElementById('emotionModal').classList.add('show');
    renderEmotionList();
}

function closeEmotionModal() {
    document.getElementById('emotionModal').classList.remove('show');
}

function renderEmotionList() {
    const emotionList = document.getElementById('emotionList');

    if (customEmotions.length === 0) {
        emotionList.innerHTML = '<p style="text-align: center; color: #999; padding: 20px;">暂无自定义情绪</p>';
        return;
    }

    emotionList.innerHTML = customEmotions.map((e, index) => `
        <div class="emotion-item">
            <div class="emotion-item-info">
                <span class="emotion-item-emoji">${e.emoji}</span>
                <span class="emotion-item-name">${e.name}</span>
            </div>
            <button class="emotion-item-delete" onclick="deleteEmotion(${index})">×</button>
        </div>
    `).join('');
}

function addEmotion() {
    const name = document.getElementById('newEmotionName').value.trim();
    const emoji = document.getElementById('newEmotionEmoji').value.trim();

    if (!name || !emoji) {
        alert('请填写情绪名称和表情');
        return;
    }

    if (customEmotions.some(e => e.name === name)) {
        alert('该情绪已存在');
        return;
    }

    customEmotions.push({ name, emoji });
    localStorage.setItem(EMOTIONS_KEY, JSON.stringify(customEmotions));

    document.getElementById('newEmotionName').value = '';
    document.getElementById('newEmotionEmoji').value = '';

    renderEmotionList();
    renderEmotionTags();
    alert('情绪添加成功！');
}

function deleteEmotion(index) {
    if (!confirm('确定要删除这个情绪吗？')) {
        return;
    }

    customEmotions.splice(index, 1);
    localStorage.setItem(EMOTIONS_KEY, JSON.stringify(customEmotions));

    renderEmotionList();
    renderEmotionTags();
}

function getEmotionEmoji(emotionName) {
    const allEmotions = [...defaultEmotions, ...customEmotions];
    const emotion = allEmotions.find(e => e.name === emotionName);

    if (!emotion) {
        console.log('未找到情绪:', emotionName, '可用情绪:', allEmotions.map(e => e.name));
    }

    return emotion ? emotion.emoji : '😊';
}

function updateHomeStatus() {
    const records = getRecords();
    const today = new Date().toDateString();

    const todayRecords = records.filter(r => {
        const recordDate = new Date(r.date).toDateString();
        return recordDate === today;
    });

    const todayRecordStatus = document.getElementById('todayRecordStatus');
    const todayAvgEnergy = document.getElementById('todayAvgEnergy');

    if (todayRecords.length > 0) {
        todayRecordStatus.textContent = '已记录';
        todayRecordStatus.classList.remove('unrecorded');
        todayRecordStatus.classList.add('recorded');

        const avgEnergy = todayRecords.reduce((sum, r) => sum + r.energy, 0) / todayRecords.length;
        todayAvgEnergy.textContent = avgEnergy.toFixed(1);
    } else {
        todayRecordStatus.textContent = '未记录';
        todayRecordStatus.classList.remove('recorded');
        todayRecordStatus.classList.add('unrecorded');
        todayAvgEnergy.textContent = '--';
    }
}

document.addEventListener('DOMContentLoaded', init);
