  
 // Close after clicking on a li
 $(document).ready(function() {
    $('.navigation__list li a').on('click', function(){
        $("#navi-toggle:checkbox:checked").prop('checked', false);
    });
 })
