// var navMenuItems = document.querySelectorAll('.nav-menu a')
// console.log(navMenuItems);

// for(var i = 0 ; i < 8 ; i++){
//     navMenuItems[i].addEventListener('click',function(event){
//         event.preventDefault();
//         var Target = this.textContent.trim().toLowerCase();
//         var targetSection = document.getElementById(Target);
//         console.log(Target);
//         console.log(targetSection);
        
//         // if(TargetCoOrds.top<=0){
//         //     var TargetCoOrds = targetSection.getBoundingClientRect();
//         //     clearInterval(interval);
//         //     return;
//         // }
//         // var interval = setInterval(function(){
//         //     window.scrollBy(0,50);
//         // },50)
//         interval = setInterval(function(){
//             scrollVertically(targetSection);
//         },50)
//     })
// }

// function scrollVertically(){
//     var TargetCoOrds = targetSection.getBoundingClientRect();
//     if (TargetCoOrds.top <= 0) {
//         clearInterval(interval);
//         return;
//     }
//     window.scrollBy(0, 50);
// }


var navMenuAnchorTags = document.querySelectorAll('.nav-menu a');
var interval;


for (var i = 0; i < navMenuAnchorTags.length; i++) {
    navMenuAnchorTags[i].addEventListener('click', function (event) {
        event.preventDefault();
        var targetSectionID = this.textContent.trim().toLowerCase();
        console.log(this.textContent);
        var targetSection = document.getElementById(targetSectionID);
        console.log(targetSection);
        //    interval = setInterval(scrollVertically, 20, targetSection);

        interval = setInterval(function () {
            scrollVertically(targetSection);
        }, 44);
    });
}


function scrollVertically(targetSection) {
    var targetSectionCoordinates = targetSection.getBoundingClientRect();
    if (targetSectionCoordinates.top <= 0) {
        clearInterval(interval);
        return;
    }
    window.scrollBy(0, 50);
}