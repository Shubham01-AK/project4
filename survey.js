// Chart 1 (Bar chart)
const ctx1 = document.getElementById('graph1').getContext('2d');
new Chart(ctx1, {
    type: 'bar',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May'],
        datasets: [{
            label: 'Survey Data 1',
            data: [12, 19, 3, 5, 2],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
    }
});

// Chart 2 (Line chart)
const ctx2 = document.getElementById('graph2').getContext('2d');
new Chart(ctx2, {
    type: 'line',
    data: {
        labels: ['June', 'July', 'August', 'September', 'October'],
        datasets: [{
            label: 'Survey Data 2',
            data: [15, 12, 10, 8, 5],
            borderColor: 'rgba(153, 102, 255, 1)',
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
    }
});

// Chart 3 (Pie chart)
const ctx3 = document.getElementById('graph3').getContext('2d');
new Chart(ctx3, {
    type: 'pie',
    data: {
        labels: ['Positive', 'Negative', 'Neutral'],
        datasets: [{
            label: 'Survey Data 3',
            data: [55, 30, 15],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
    }
});
