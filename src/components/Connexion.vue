<template>
    <main>
        <form action="">
            <label for="email">Votre mail</label>
            <input type="email" name="email" id="email">
            <label for="mdp">Mot de passe</label>
            <input type="password" name="mdp" id="mdp">
            <input type="submit" value="Se connecter">
        </form>
    </main>
</template>

<style type="text/css">
        form {
            width: 25vw;
            min-width: 300px;
            font-size: 1vh;
            background: #495C70;
            padding: 30px 30px 15px 30px;
            border: 5px solid #53687E;
            position:absolute;
            top:45vh;
            left:35vw;
        }
        form input[type=submit],
        form input[type=email],
        form label
        {
            font-family: Georgia, "Times New Roman", Times, serif;
            font-size: 16px;
            color: #fff;
        
        }
        form label {
            display:block;
            margin-bottom: 10px;
        }
        form input[type=email] 
        {
            background: transparent;
            border: none;
            border-bottom: 1px dashed #83A4C5;
            width: 275px;
            outline: none;
            padding: 0px 0px 0px 0px;
            font-style: italic;
        }
        form textarea, form input[type=password]{
            font-style: italic;
            padding: 0px 0px 0px 0px;
            background: transparent;
            outline: none;
            border: none;
            border-bottom: 1px dashed #83A4C5;
            width: 275px;
            overflow: hidden;
            resize:none;
            height:20px;
        }
        
        form textarea:focus, 
        form input[type=password]:focus,
        form input[type=email]:focus,
        form input[type=email] :focus
        {
            border-bottom: 1px dashed #D9FFA9;
        }
        
        form input[type=submit]{
            background: #576E86;
            border: none;
            padding: 8px 10px 8px 10px;
            border-radius: 5px;
            color: #A8BACE;
        }
        form input[type=submit]:hover{
        background: #394D61;
        }
        </style>
    <script type="text/javascript">
        //auto expand textarea
        function adjust_textarea(h) {
            h.style.height = "20px";
            h.style.height = (h.scrollHeight)+"px";
        }
    </script>