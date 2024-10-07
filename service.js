// Example: Dynamic fetching of live service alerts (simulated here with a timeout)
// You can replace this with an actual API call if available

function fetchServiceAlerts() {
    const alerts = [
        {
            title: "Maintenance Alert: Red Line",
            message: "The Red Line will undergo maintenance on Oct 10th, 2024, from 10:00 PM to 4:00 AM."
        },
        {
            title: "Delay: Blue Line",
            message: "The Blue Line is currently experiencing delays due to a signal issue. Expected delay time: 20 minutes."
        },
        {
            title: "Green Line Closure",
            message: "Green Line will be temporarily closed from 12:00 AM to 5:00 AM on Oct 15th for scheduled repairs."
        }
    ];

    const alertContainer = document.querySelector('.alert-container');
    alertContainer.innerHTML = ''; // Clear existing alerts

    // Simulating an API delay with setTimeout (replace with actual fetch request)
    setTimeout(() => {
        alerts.forEach(alert => {
            const alertDiv = document.createElement('div');
            alertDiv.classList.add('alert');
            
            const alertTitle = document.createElement('h4');
            alertTitle.textContent = alert.title;

            const alertMessage = document.createElement('p');
            alertMessage.textContent = alert.message;

            alertDiv.appendChild(alertTitle);
            alertDiv.appendChild(alertMessage);
            alertContainer.appendChild(alertDiv);
        });
    }, 1000); // Simulate 1 second delay for fetching data
}

// Call the function to fetch alerts when the page loads
document.addEventListener('DOMContentLoaded', fetchServiceAlerts);
