const heartButton = document.querySelectorAll('.card-heart');
const heartCount = document.getElementById('nav-heart');
let currentCount = 0;

for(const button of heartButton){
    button.addEventListener('click', function(){

        const icon = this.querySelector('i');

        if(icon.classList.contains('fa-regular')){
            icon.classList.remove('fa-regular');
            icon.classList.add('fa-solid', 'text-red-500');
            currentCount++;
        }
        else{
            icon.classList.remove('fa-solid', 'text-red-500');
            icon.classList.add('fa-regular');
            currentCount--;
        }

        heartCount.textContent = currentCount;
    })
}

const callButtons = document.querySelectorAll('.call-btn');
const coin = document.getElementById('coin');
const historyList = document.getElementById('history-list');



for(const button of callButtons){
    button.addEventListener('click', function(){

        const card = this.closest('.card');
        const serviceTitle = card.querySelector('h2').textContent;
        const service = card.querySelector('.subtitle').textContent;
        const serviceNum = card.querySelector('h1').textContent;
        const now = new Date();
        const exactTime = now.toLocaleTimeString('en-US', {
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: true
            });

        if(parseInt(coin.textContent) < 20){
            alert("You don't have enough coins");
            return;
        }

        alert(`📞 Calling ${service} ${serviceNum} ....`);
        coin.textContent -= 20;

        const div = document.createElement('div');
        div.className = 'flex justify-between items-center p-3 my-3 bg-[#FAFAFA] rounded-lg';
        div.innerHTML = `
                        <div>
                            <h2 class="roboto font-semibold text-[16px]">${serviceTitle}</h2>
                            <p class="font-normal text-[18px] text-gray-500">${serviceNum}</p>
                        </div>
                        <div>
                            ${exactTime}
                        </div>
        `
        historyList.prepend(div);
    })
}

document.getElementById('clear-btn')
    .addEventListener('click', function(){
        historyList.innerHTML = ``;
    })


const copyButtons = document.querySelectorAll('.copy-btn');
const copyCount = document.getElementById('nav-copy');
let currentCopy = 0;

for(const button of copyButtons){
    button.addEventListener('click', function(){

        const card = this.closest('.card');
        const textElement = card.querySelector('.hotline-number');
        const textToCopy = textElement.innerText;
        navigator.clipboard.writeText(textToCopy).then(() => {
            button.innerHTML = `<i class="fa-regular fa-clipboard"></i>Copied`

            setTimeout(() => {
                button.innerHTML = `<i class="fa-regular fa-copy mr-1"></i>Copy`
            }, 2000);
        })

        currentCopy++;
        copyCount.textContent = currentCopy;
    })
}