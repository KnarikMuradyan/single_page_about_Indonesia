
document.addEventListener('DOMContentLoaded', function () {

// sections animation

document.addEventListener('scroll', function () {
    let sections = document.querySelectorAll('.slide div');
    sections.forEach(item => {
        if (item.getBoundingClientRect().top <= window.innerHeight - 200) {
            if (item.className.includes('left')) {
                item.classList.add('animate__animated', 'animate__bounceInLeft');
            } else if (item.className.includes('right')) {
                item.classList.add('animate__animated', 'animate__bounceInRight');
            } else {
                item.classList.add('animate__animated', 'animate__bounceIn');
            }

            item.style.opacity = 1;
        }

        if (item.getBoundingClientRect().top >= window.innerHeight) {
            item.classList.remove('animate__animated', 'animate__bounceIn', 'animate__bounceInRight', 'animate__bounceInLeft');
            item.style.opacity = 0;
        }
    });

});

// sections animation



// slider 


    document.querySelector('.video .rightt').addEventListener('click', function () {
        let current = document.querySelector('.active');
        let next = current.nextElementSibling;
        if (next) {
            current.classList.remove('active');
            next.classList.add('active');
        } else {
            current.classList.remove('active');
            document.querySelector('.imagee:first-child').classList.add('active');
        }
    });

    document.querySelector('.video .lefft').addEventListener('click', function () {
        let current = document.querySelector('.active');
        let prev = current.previousElementSibling;
        if (prev) {
            current.classList.remove('active');
            prev.classList.add('active');
        } else {
            current.classList.remove('active');
            document.querySelector('.imagee:last-child').classList.add('active');
        }
    });


setInterval(function () {
    let current = document.querySelector('.active');
    let next = current.nextElementSibling;
    if (next) {
        current.classList.remove('active');
        next.classList.add('active');
    } else {
        current.classList.remove('active');
        document.querySelector('.imagee:first-child').classList.add('active');
    }
}, 1000);




// slider 

});