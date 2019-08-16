$(() => {
    'use strict';

    $('#trSidebarMenu').click((e) => {
        if (window.matchMedia('(min-width: 900px)').matches) {
            $('body').toggleClass('tr-hide-sidebar');
        } else {
            $('body').toggleClass('tr-show-sidebar');
        }
    });
});