$(document).on('click', '[data-toggle="lightbox"]', function(event) {
                event.preventDefault();
                $(this).ekkoLightbox({
                    alwaysShowClose: true
                });
            });



$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip(); 
});


var skillsquare = document.getElementsByClassName("skillicon");

for(var i = 0; i<skillsquare.length; i++){
    skillsquare[i].addEventListener("mouseover", function(){
        this.classList.add("bounce");
    });
    skillsquare[i].addEventListener("mouseout", function(){
        this.classList.remove("bounce");
    });
    
}
