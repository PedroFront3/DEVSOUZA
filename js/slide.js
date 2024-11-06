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
            slidesToShow:3,
          }
        },

        {
          breakpoint:1197,
          settings: {
            arrows:false,
            centerMode:true,
            slidesToShow:3,
          }
        },

        {
          breakpoint:1130,
          settings: {
            arrows:false,
            centerMode:true,
            slidesToShow:3,
          }
        },

        {
          breakpoint:1050,
          settings: {
            arrows:false,
            centerMode:true,
            slidesToShow:3,
          }
        },

        {
          breakpoint:1030,
          settings: {
            arrows:false,
            centerMode:true,
            slidesToShow:2,
          }
        },
        
        {
          breakpoint:830,
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
            slidesToShow:2,
          }
        },

        {
          breakpoint:580,
          settings: {
            arrows:false,
            centerMode:true,
            slidesToShow:1,
          }
        },

       

      ]
  });
 
});