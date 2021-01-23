//create a node-list of the nums
const nums = document.querySelectorAll('.nums span');
const counter = document.querySelector('.counter');
const finalMessage = document.querySelector('.final');
const replay = document.querySelector('#replay');
const nextButton = document.querySelector('#next');
runAnimation();

function resetDOM() {
    counter.classList.remove('hide')
    finalMessage.classList.remove('show');

    nums.forEach((num) => {
        num.classList.value = '';
    })
    nums[0].classList.add('in');
}

function runAnimation() {
    nums.forEach(function (num, index) {
        const nextToLast = nums.length - 1;

        num.addEventListener('animationend', (e) => {
            if (e.animationName === 'goIn' && index !== nextToLast) {
                num.classList.remove('in');
                num.classList.add('out');
            } else if (e.animationName === 'goOut' && num.nextElementSibling) {
                num.nextElementSibling.classList.add('in')
            } else {
                counter.classList.add('hide')
                finalMessage.classList.add('show');
            }
        })
    })
}

nextButton.addEventListener('click',() => {
    location.href = "pageThree.html"
})

replay.addEventListener('click', () => {
    resetDOM()
    runAnimation()
})