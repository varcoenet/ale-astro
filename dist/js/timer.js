    setInterval(function time() {
        var d = new Date();
        var hours = 24 - d.getHours();
        var min = 60 - d.getMinutes();
        if ((min + '').length == 1) {
            min = '0' + min;
        }
        var sec = 60 - d.getSeconds();
        if ((sec + '').length == 1) {
            sec = '0' + sec;
        }
        if ((hours + '').length == 1) {
            hours = '0' + hours;
        }
        jQuery('#clock').html('<h2>0<small>days</small></h2><h2>' + hours + '<small>hours</small></h2><h2>' + min + '<small>mins</small></h2><h2>' + sec + '<small>secs</small></h2>')
    }, 1000);

    if (jQuery(".toggle .toggle-title").hasClass('active')) {
        jQuery(".toggle .toggle-title.active").closest('.toggle').find('.toggle-inner').show();
    }
    jQuery(".toggle .toggle-title").click(function() {
        if (jQuery(this).hasClass('active')) {
            jQuery(this).removeClass("active").closest('.toggle').find('.toggle-inner').slideUp(200);
        } else {
            jQuery(this).addClass("active").closest('.toggle').find('.toggle-inner').slideDown(200);
        }
    });