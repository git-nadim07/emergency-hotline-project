// html code chunk
// --- ১. হার্ট আইকন ও উইশলিস্ট কাউন্টার লজিক ---
const heartButtons = document.querySelectorAll('.card-heart');
const navHeartCount = document.getElementById('nav-heart');
let currentHeartCount = 0;

for (const button of heartButtons) {
    button.addEventListener('click', function() {
        const icon = this.querySelector('i');
        
        if (icon.classList.contains('fa-regular')) {
            icon.classList.remove('fa-regular');
            icon.classList.add('fa-solid', 'text-red-500');
            currentHeartCount++;
        } else {
            icon.classList.remove('fa-solid', 'text-red-500');
            icon.classList.add('fa-regular');
            currentHeartCount--;
        }
        navHeartCount.textContent = currentHeartCount;
    });
}


// --- ২. কল বাটন এবং কয়েন আপডেট লজিক ---
const callButtons = document.querySelectorAll('.call-btn');
const coinCountEl = document.getElementById('coin');

for (const button of callButtons) {
    button.addEventListener('click', function() {
        // বর্তমান কয়েন সংখ্যা টেক্সট থেকে নাম্বারে রূপান্তর করা
        let currentCoins = parseInt(coinCountEl.textContent);
        
        // কন্ডিশন চেক: ২০ কয়েন এর কম থাকলে অ্যালার্ট দেখাবে
        if (currentCoins < 20) {
            alert("Sorry, you do not have enough coins!");
            return; // কয়েন কম থাকলে কোড এখানেই থেমে যাবে
        }
        
        // ক্লিক করা বাটনের সাপেক্ষে কার্ডের নাম ও নাম্বার খুঁজে বের করা
        const card = this.closest('.card'); 
        const serviceName = card.querySelector('h2').textContent; 
        const serviceNumber = card.querySelector('h1').textContent; 
        
        // প্রথম অ্যালার্ট: নাম ও নাম্বার দেখানো
        alert(`Calling ${serviceName} (${serviceNumber})`);
        
        // ইউজার 'OK' তে ক্লিক করার পর ২০ কয়েন কমবে এবং নেভবারে আপডেট হবে
        currentCoins -= 20;
        coinCountEl.textContent = currentCoins;
    });
}
