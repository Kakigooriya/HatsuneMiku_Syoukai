
var element = document.querySelector('[data-id="5"]');
element.style.height = '205px'; // 将高度设置为 250px

var items = document.querySelectorAll(".item");
console.log(items);

for (var i = 0; i < items.length; i++) {
  items[i].addEventListener('mouseover', function(event) {
    var id = event.target.dataset.id;
    var caption = document.querySelector('.caption[data-id="' + id + '"]');
    if (caption) {
      caption.classList.add('hovered'+id+'');
    }
  });

  items[i].addEventListener('mouseout', function(event) {
    var id = event.target.dataset.id;
    var caption = document.querySelector('.caption[data-id="' + id + '"]');
    if (caption) {
      caption.classList.remove('hovered'+id+'');
    }
  });
}


var btn = document.querySelector('.button')

btn.addEventListener('mouseover',(event)=>{
    const x =(event.pageX - btn.offsetLeft)
    const y =(event.pageY - btn.offsetTop)

    btn.style.setProperty("--xPos",x + "px")
    btn.style.setProperty("--yPos",y + "px")
})






// function changeColor3(hovered){
//     var caption = document.getElementById("caption3");
//     if(hovered){
//         caption.classList.add('hovered')
//     }else{
//         caption.classList.remove('hovered')
//     }
// }