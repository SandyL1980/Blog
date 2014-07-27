


$(document).ready(function() {

        
           $('#review').on('click',function(e){
                console.log('u cliked')
                e.preventDefault()
                $('#review_form').slideToggle(300);
                                   
            });

           var newsletter = $('.newsletter').find('input').eq(1)
           var newsletter_content = $('.newsletter').children().eq(1)
           

           newsletter.on('click',function(ev){
                ev.preventDefault()
                newsletter_content.text('Thank You for signing up to our Newsletter!')
                                   
            });

           var review_form = $('#review_form').children();
           var review_form_btn =  $('#review_form_btn');
           var review = $('#review_comment').val();  

             review_form_btn.on('click',function(ev){
                       
              if ($('#review_comment').val() == "") {       
                    $('#review_comment').css('border', '1px solid red');
                    $('#review_comment').attr('placeholder', 'Please enter a review');
                    $('.alert_review').fadeIn();
                    ev.preventDefault();                 
              } 
                                    
            });



      });