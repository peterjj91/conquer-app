$(document).ready(function() {
    $('select').selectpicker();
});

$(document).ready(function() {
    var slideout = new Slideout({
        'panel': document.getElementById('panel-body'),
        'menu': document.getElementById('menu-body'),
        'padding': 294,
        'tolerance': 0,
        'easing': false,
        'side' : 'right'
    });

    $('.toggle-menu').click(function () {
        slideout.open();
    });

    $('.toggle-menu--inside').click(function () {
        $('.slideout-open').removeClass('slideout-open');
        slideout.close();
    });

    function close(eve) {
        eve.preventDefault();
        slideout.close();
    }

    slideout
        .on('beforeopen', function() {
            this.panel.classList.add('panel-open');
        })
        .on('open', function() {
            this.panel.addEventListener('click', close);
        })
        .on('beforeclose', function() {
            this.panel.classList.remove('panel-open');
            this.panel.removeEventListener('click', close);
        });
});
