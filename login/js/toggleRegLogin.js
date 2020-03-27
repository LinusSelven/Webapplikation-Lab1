$(function() {
    $('#register').on('click', function (e) {
        $('.login-form').css('display', 'none')
        $('.register-form').css('display', 'inline');
        e.preventDefault();
    });
});  $(function() {
    $('#login').on('click', function (e) {
        $('.register-form').css('display', 'none');
        $('.login-form').css('display', 'inline')
        e.preventDefault();
    });
});
