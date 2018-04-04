
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
    });

    $('.contact_item').on('click', function() {
        // if($(this).attr('name') === 'github') {
        //     console.log("Github");
        //     window.location = 'https://github.com/MikaelFeher';
        //     window.location = 'https://www.linkedin.com/in/mikael-feher-79b324105';
        // }

        switch($(this).attr('name')) {
            case 'github':
                window.location = 'https://github.com/MikaelFeher';
                break;
            case 'linkedin':
                window.location = 'https://www.linkedin.com/in/mikael-feher-79b324105';
                break;
            case 'email':
                window.location = 'mailto: mikael.feher@gmail.com?subject=Hej, jag klickade på email-länken på din sida';
                break;
        }       
    })
});
