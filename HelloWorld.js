//checking to-dos
$('ul').on("click" , "li" , function(){
    $(this).toggleClass('selected');
});
//removing to-dos
$('ul').on( "click" , "span" , function(e){
    $(this).parent().fadeOut(500,function(){
 $(this).remove();       
    });
    e.stopPropagation();
});
//adding to-dos
$('input').keypress( function(e){
    if(e.which === 13)
    { var input = $(this).val();
       $(this).val("");
       $('ul').append("<li class=list-group-item><span> <i class='fas fa-trash-alt'></i></span>"  +input+  "</li>");
       
    }
        });
        
 $('ul').on("mouseenter" ,"li", function(){
     
    $(this).addClass('bold');
 });  
  $('ul').on("mouseleave" ,"li", function(){
     
    $(this).removeClass('bold');
 });  
 $('.fa-pencil-alt').click(function(){
     
    $('input').fadeToggle();
 });