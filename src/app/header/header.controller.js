angular
    .module('portfolio')
    .controller('HeaderController', function () {
        var state = 0;

        $('#header-menu').on('click', function() {
            if(state == 0) {
                $('#container').addClass('pushed');
                state = 1;
            } else {
                $('#container').removeClass('pushed');
                state = 0;
            }
        });
    });