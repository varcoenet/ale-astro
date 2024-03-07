jQuery(document).ready(function (e) {
    
if (jQuery(".toggle .toggle-title").hasClass('active')) {
    jQuery(".toggle .toggle-title.active").closest('.toggle').find('.toggle-inner').show();
}

});