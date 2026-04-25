const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("min");
const secondsEl = document.getElementById("sec");
const amPmEl = document.getElementById("am");
const dateEl = document.getElementById("date-string");

function updateClock() {
    const now = new Date();
    
    // Get Time components
    let h = now.getHours();
    const m = now.getMinutes();
    const s = now.getSeconds();
    const ampm = h >= 12 ? 'PM' : 'AM';

    // Convert to 12-hour format for a professional feel
    h = h % 12;
    h = h ? h : 12; 

    // Pad with zeros using modern JS padding
    hoursEl.textContent = h.toString().padStart(2, '0');
    minutesEl.textContent = m.toString().padStart(2, '0');
    secondsEl.textContent = s.toString().padStart(2, '0');
    amPmEl.textContent = ampm;

    // Update Date
    const options = { weekday: 'long', month: 'long', day: 'numeric' };
    dateEl.textContent = now.toLocaleDateString('en-US', options);
}

// Initial call and set interval
setInterval(updateClock, 1000);
updateClock();