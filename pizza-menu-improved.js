var navMenuItems = document.querySelectorAll('.nav-menu a')
var interval;
// console.log(navMenuItems);

for(var i = 0 ; i < navMenuItems.length ; i++){
    navMenuItems[i].addEventListener('click',function(event){
        event.preventDefault();
        var Target = this.textContent.trim().toLowerCase();
        var targetSection = document.getElementById(Target);
        // console.log(Target);
        // console.log(targetSection);
        
        // if(TargetCoOrds.top<=0){
        //     var TargetCoOrds = targetSection.getBoundingClientRect();
        //     clearInterval(interval);
        //     return;
        // }
        // var interval = setInterval(function(){
        //     window.scrollBy(0,50);
        // },50)
        interval = setInterval(function(){
            scrollVertically(targetSection);
        },40)
    });
}

function scrollVertically(targetSection){
    var TargetCoOrds = targetSection.getBoundingClientRect();
    if (TargetCoOrds.top <= 0) {
        clearInterval(interval);
        return;
    }
    window.scrollBy(0, 50);
}


