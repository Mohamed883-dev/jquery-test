function myfunction() {
    var element = document.body;
    element.classList.toggle('light-mode')
}

$(document).ready(function () {
    $('#myForm').submit(function (event) {
        var isvalid = true;
        $('error').hide;

        if ($("#name").val().trim() === '') {
            $("#name-error").show();
            isvalid = false;
        }
        if ($("#email").val().trim() === '') {
            $("#email-error").show();
            isvalid = false;
        }
        if ($("#age").val().trim() === '') {
            $("#age-error").show();
            isvalid = false;
        }
        if ($("#gender").val().trim() === '') {
            $("#gender-error").show();
            isvalid = false;
        }
        if (!isvalid) {
            event.preventDefault();
        }
    })

})

$.fn.ready(function() {

    // Smooth scroll to top.
    $("a[href=#top]").live("click", function(e) {
        $("html,body").animate({scrollTop:0}, 1000);
        e.preventDefault();
    });
});