// $('.change1').click(function() {
//     $(".wsio").toggleClass('first');
//     $( ".wsio" ).removeClass( 'second' );
// });
// $('.change2').click(function() {

//     $(".wsio").toggleClass('second');
//     $( ".wsio" ).removeClass( 'first' );
// });

// $('#change1').on('click',function(){
//     if($('wsio').css('display')!='none'){
//     $('wsio2').html('Here is my dynamic content').show().siblings('div').hide();
//     }else if($('wsio2').css('display')!='none'){
//         $('wsio').show().siblings('div').hide();
//     }
// });

var group1 = document.getElementsByClassName('editing');
var group2 = document.getElementsByClassName('animating');
var group3 = document.getElementsByClassName('vector');
var group4 = document.getElementsByClassName('golden');
var group5 = document.getElementsByClassName('web');
var del = document.getElementsByClassName('del');
function g1 () {
	$(del).removeClass("active");
	$(group1).addClass("active");
}
function g2 () {
	
	$(del).removeClass("active");
	$(group2).addClass("active");
}
function g3 () {
	
	$(del).removeClass("active");
	$(group3).addClass("active");
}
function g4 () {
	$(del).removeClass("active");
	$(group4).addClass("active");
	
}
function g5 () {
	$(del).removeClass("active");
	$(group5).addClass("active");
}
