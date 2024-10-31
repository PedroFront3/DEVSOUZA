$(function(){
  $('.project .container .slide-wraper').slick({
      centerMode:false,
      slidesToShow:3,
      arrows:false,
      responsive:[
        {
          breakpoint:1200,
          settings: {
            arrows:false,
            centerMode:true,
            slidesToShow:2,
          }
        },

        {
          breakpoint:768,
          settings: {
            arrows:false,
            centerMode:true,
            slidesToShow:1,
          }
        }

      ]
  });
 
});