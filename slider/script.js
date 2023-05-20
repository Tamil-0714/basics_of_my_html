const people = [
    {
        name: "Tamil",
        job: "Developer",
        TitleA: "Compuer ",
        TitleB: "Science",
        profile: "https://randomuser.me/api/portraits/men/9.jpg",
        content: "lorem is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
        name: "Wednsday adams",
        job: "Editor",
        TitleA: "keyboard",
        TitleB: "Science",
        profile: "https://randomuser.me/api/portraits/men/54.jpg",
        content: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,"
    },
    {
        name: "Losifer",
        job: "Traveler",
        TitleA: "Space",
        TitleB: "Science",
        profile: "https://randomuser.me/api/portraits/women/54.jpg",
        content: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you "
    },
    {
        name: "Keliya Fedrose",
        job: "Gamer",
        TitleA: "Food",
        TitleB: "Science",
        profile: "https://randomuser.me/api/portraits/women/34.jpg",
        content: `The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.`
    }
]
const img = document.querySelector('#pic');
const btnLeft = document.querySelector('#btn-left' );
const btnRight = document.querySelector('#btn-right')
const name = document.querySelector("#name");
const roel = document.querySelector("#role");
const text = document.querySelector("#text");
const tittle = document.querySelector("#tittle");
const container = document.querySelector('.container');
let idx = 0;
window.addEventListener('DOMContentLoaded',()=>{
    const firstData = people[0];
    loadTextimodial(firstData)
})
btnLeft.addEventListener('click',()=>{
    idx--;
    if(idx<0)
        idx = people.length-1;
    loadTextimodial(people[idx]);;
})
btnRight.addEventListener('click',()=>{
    idx++;
    if(idx>=people.length)
        idx = 0;
    loadTextimodial(people[idx]);;
})


function loadTextimodial(data){
    container.classList.add('fadeOut'); // Add fadeOut class to container

    // Wait for the fadeOut animation to complete
    setTimeout(() => {
        img.src = data.profile;
        name.textContent = data.name;
        roel.textContent = data.job;
        text.innerHTML = `<i class="fa fa-quote-left"></i>
        ${data.content}
        <i class="fa fa-quote-right"></i>`
        tittle.innerHTML = `${data.TitleA}  <span>${data.TitleB}</span>`

        container.classList.remove('fadeOut'); // Remove fadeOut class to trigger fadeIn animation
    }, 500);
}

// function loadTextimodial(data){
//     img.src = data.profile;
//     name.textContent = data.name;
//     roel.textContent = data.job;
//     text.innerHTML = `<i class="fa fa-quote-left"></i>
//     ${data.content}
//     <i class="fa fa-quote-right"></i>`
//     tittle.innerHTML = `${data.TitleA}  <span>${data.TitleB}</span>`
// }
