
    $(document).ready(function(){

        $(".logo").click(function(event){          
            event.preventDefault();
            $('html,body').animate({scrollTop: $("#video").offset().top},'slow');
        })  


        $(".video").click(function(event){          
            event.preventDefault();
            $('html,body').animate({scrollTop: $("#video").offset().top},'slow');
        })  


        $(".intro").click(function(event){        
            event.preventDefault();
            $('html,body').animate({scrollTop: $("#content-ui").offset().top},'slow');
        })  

        $(".service").click(function(event){        
            event.preventDefault();
            $('html,body').animate({scrollTop: $("#service-bg").offset().top},'slow');
        })  

        $(".concept").click(function(event){        
            event.preventDefault();
            $('html,body').animate({scrollTop: $("#design-concept").offset().top},'slow');
        })  
    });

