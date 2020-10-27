
$(document).ready(function () {
    
    $('.row').hide();
    $('.row').slideDown(2000);


    let resultat = true;

    $('#form').submit(function(e){
        resultat = true;

        if($('#email').val() == ''){
            $('#email').attr('placeholder','Veuillez remplir le champ...').parent().addClass('error')
            $('#helpEmail').text('Ce champs est requis');
            resultat = false;
        }

        if($('#password').val() == ''){
            $('#password').attr('placeholder','Veuillez remplir le champ...').parent().addClass('error')
            $('#helpPassword').text('Ce champs est requis');
            resultat = false;
        }

        if($('#password').val().length < 6){
            resultat = false;
        }

        else{
            $('#validation').text('Connexion validée !');
            $('#theEmail').text('Votre email est : '+ $('#email').val());
            // console.log($('#email').val())

            e.preventDefault();

            // alert('Formulaire validé')
        }

        return resultat;


    });



    $('#email').keyup(function(){
        if($('#email').val() == ''){
            $('#email').attr('placeholder','Veuillez remplir le champ...').parent().addClass('error')
            $('#helpEmail').text('Ce champs est requis');

        }else{
            $('#email').parent().removeClass('error');
            $('#helpEmail').text('');
        
        }
    });


    $('#password').keyup(function(){
        if($('#password').val() == ''){
            $('#password').attr('placeholder','Veuillez remplir le champ...').parent().addClass('error')
            $('#helpPassword').text('Ce champs est requis');

        }else{
            $('#password').parent().removeClass('error');
            $('#helpPassword').text('');
        }

        if($('#password').val().length < 6){
            $('#password').parent().addClass('error');
            $('#helpPassword').text('Le mot de passe est trop court');
        }

    });


});