
document.body.style.background = "yellow";              /* заменим цвет фона на желтьій, */


let timerId = setInterval(() => {                        /* каждую 1 сек изменим цвет фона на ...*/
   if (document.body.style.background === "yellow") {
      document.body.style.background = "red";
   } else if (document.body.style.background === "red") {
      document.body.style.background = "blue";
   } else if (document.body.style.background === "blue") {
      document.body.style.background = "green";
   } else {
      document.body.style.background = "yellow";
   }
}, 1000
);

let timerId1 = setTimeout(() => {                        /* а через 12 секунд вернём как было*/
   clearInterval(timerId);
   document.body.style.background = "purple";
   alert("Stop");
}, 15000
);




let x = document.querySelector("h1");

x.setAttribute("id", "MyID");

x.style.color = 'blue';

let z = document.querySelector("#MyID");

z.style.color = 'Coral ';
z.style.fontSize = '55px'




let v = document.createElement("div");
v.textContent = "priveeeet"
v.classList.add("myClass")
x.appendChild(v)