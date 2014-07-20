


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

           var review_form = $('#review_form').children()
           var review_form_btn = $('#review_form').children().children().eq(2)
           var title = $('#title').val();
           var review = $('#review_input').val();

          

             review_form_btn.on('click',function(ev){
                   
                if ($('#title').val() == "") {
                    $('#title').css('border', '1px solid red');
                    $('#review_input').css('border', '1px solid red');
                    $('#title').attr('placeholder', 'Please enter a title');
                    $('.alert_review').fadeIn();
                    ev.preventDefault();
                } else if ($('#review_input').val() == "") {
                    $('#title').css('border', '1px solid red');
                    $('#review_input').css('border', '1px solid red');
                    $('#review').attr('placeholder', 'Please enter a review');
                    $('.alert_review').fadeIn();
                    ev.preventDefault();                 
                } else {
                    review_form.text('Thank You for your review');
                    $('.alert_review').hide();

                }
                                    
            });



      });