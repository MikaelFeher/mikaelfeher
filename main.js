
$(document).ready(function () {



    $('.nav_list_item').on('click', function () {
        if ($(this).attr('id') === 'contact_link') {
            $(this).addClass('active_link')
            $('#contact').show();
            $('#project').hide();
            $('#project_link').removeClass('active_link');
            $('#main').hide()
            $('#home_link').removeClass('active_link');
        } else if ($(this).attr('id') === 'project_link') {
            $(this).addClass('active_link');
            $('#project').show();
            $('#contact').hide();
            $('#contact_link').removeClass('active_link');
            $('#main').hide()
            $('#home_link').removeClass('active_link');
        } else {
            $('home_link').addClass('active_link');
            $('#main').show();
            $('#contact').hide();
            $('#contact_link').removeClass('active_link');
            $('#project').hide()
            $('#project_link').removeClass('active_link');
        }
    })
});
