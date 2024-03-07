            $(document).ready(function(){
                $('.open').click(function(){
                    var link = $(this);
                    $('.showpanel').slideToggle('slow', function() {
                        if ($(this).is(":visible")) {
                             link.text('Hide Full Timeline');                
                        } else {
                             link.text('Show Full Timeline');                
                        }        
                    });

                });
            });