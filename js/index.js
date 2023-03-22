// change button's colour when mouse hover over it
$('button').hover(function() {
    // Update button color to red when mouse enters
    $(this).css('background-color', '#3e8e41');
    }, function() {
        // Update button color to its original color when mouse leaves
        $(this).css('background-color', '');
    }
);

//animate the grid when mouse hover over it
$('.workGrid div').hover(function() {
    $(this).css({
        // add transition to the grid container
        'transform': 'translateY(-8px)',
        'transition': 'transform 0.3s ease-in-out' 
        });
    }, function() {
        $(this).css({
            // add transition to the grid container
            'transform': 'translateY(0)',
            'transition': 'transform 0.3s ease-in-out' 
        });
    }
);
