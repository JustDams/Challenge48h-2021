<template>
    <main>
        <form action="/" method="post">
            <h2>Création d'utilisateur</h2>
            <label for="email">Votre mail</label>
            <input type="email" name="email" id="email" v-model="email">
            <label for="name">Votre nom</label>
            <input type="text" name="name" id="name" v-model="name">
            <label for="mdp">Mot de passe</label>
            <input type="password" name="mdp" id="mdp" v-model="mdp">
            <label for="mdp">Confirmer le mot de passe</label>
            <input type="password" name="mdp2" id="mdp2" v-model="mdp2">
            <div>
            <input type="radio" id="user" name="drone" value="user" checked v-model="user">
            <label for="user">User</label>
            </div>
            
            <div>
            <input type="radio" id="Admin" name="drone" value="Admin" v-model="admin">
            <label for="Admin">Admin</label>
            </div>
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
            padding: 30px 30px 30px 30px;
            border: 5px solid #53687E;
            position:absolute;
            top:25vh;
            left:35vw;
        }
        form input,
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
        form textarea, form input[type=password], form input[type=text]{
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
        form input:focus
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

        h2 {
            font-size: 3em;
            color: white;
        }
        </style>
    <script type="text/javascript">
        //auto expand textarea
        function adjust_textarea(h) {
            h.style.height = "20px";
            h.style.height = (h.scrollHeight)+"px";
        }
    </script>