const container = document.querySelector(".container");
const courses = [
    {course : 'C' , percent: 93 , color: "#25CCF7"},
    {course : 'DCF' , percent: 68 , color: "#F97F51"},
    {course : 'C++' , percent: 92 , color: "#25CCF7"},
    {course : 'DSA' , percent: 73 , color: "#F97F51"}
];
// console.log(courses)
courses.forEach(course =>{
    container.innerHTML += 
    `<div class="progress-group">
        <div class="progress-bar" >
            <span class="course-value" style = 'color: ${course.color};'>0%</span>
        </div>
        <label for="" class="text" style = 'color: ${course.color};'>${course.course}</label>
    </div>`
})
// style = 
//  style = 'background : conic-gradient(${course.color} ${3.6* course.percent}deg , #ccc 0deg) ;'
const progressgropup = document.querySelectorAll(".progress-group")
progressgropup.forEach((progres, idx) =>{
    let percentvalueStart  = 0;
    let percentvalueEnd  = courses[idx].percent;
    // console.log(percentvalueEnd);
    let speed = 400;
    let progresTimmer = setInterval(()=>{
        percentvalueStart++;
        if(percentvalueStart == percentvalueEnd)
            clearInterval(progresTimmer)
        progres.querySelector('.progress-bar').style.background = `conic-gradient(${courses[idx].color} ${3.6* percentvalueStart}deg , #ccc 
        0deg) `;
        progres.querySelector(".course-value").innerHTML = `${percentvalueStart}%`
    },speed) 
    // console.log(progres);
})
