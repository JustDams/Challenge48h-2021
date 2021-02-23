<template>
  <main>
    <form class="form" action="/" ref="auth" @submit.prevent="sendToStrapi">
      <label for="identifier">Username</label>
      <input type="text" name="identifier" />
      <label for="password">Mot de passe</label>
      <input type="password" name="password" />
      <input type="submit" name="submit" value="Se connecter" />
    </form>
  </main>
</template>


<script>
import axios from "axios";
import { apiUrl } from "../config.json";

export default {
  name: "Connexion",
  mounted() {
    this.redirectToIndex();
  },
  methods: {
    // Request API.
    sendToStrapi() {
      const form = this.$refs["auth"];
      const formElem = form.elements;
      const data = {};
      formElem.forEach((e) => {
        if (e.name !== "submit") data[e.name] = e.value;
      });
      axios
        .post(`${apiUrl}/auth/local`, data)
        .then((res) => {
          document.cookie = `jwt=${res.data.jwt}`;
          document.location.href = "/";
        })
        .catch((error) => {
          // Handle error.
          console.log("An error occurred:", error.response);
        });
    },
    redirectToIndex() {
      if (document.cookie.includes("jwt")) document.location.href = "/";
    },
  },
};
</script>

<style type="text/css">
.form {
  width: 25vw;
  min-width: 300px;
  font-size: 1vh;
  background: #495c70;
  padding: 30px 30px 15px 30px;
  border: 5px solid #53687e;
  position: absolute;
  top: 45vh;
  left: 35vw;
}
.form input[type="submit"],
.form input[type="text"],
.form label {
  font-family: Georgia, "Times New Roman", Times, serif;
  font-size: 16px;
  color: #fff;
}
.form label {
  display: block;
  margin-bottom: 10px;
}
.form input[type="text"] {
  background: transparent;
  border: none;
  border-bottom: 1px dashed #83a4c5;
  width: 275px;
  outline: none;
  padding: 0px 0px 0px 0px;
  font-style: italic;
}
.form textarea,
.form input[type="password"] {
  font-style: italic;
  padding: 0px 0px 0px 0px;
  background: transparent;
  outline: none;
  border: none;
  border-bottom: 1px dashed #83a4c5;
  width: 275px;
  overflow: hidden;
  resize: none;
  height: 20px;
}

.form textarea:focus,
.form input[type="password"]:focus,
.form input[type="text"]:focus,
.form input[type="text"] :focus {
  border-bottom: 1px dashed #d9ffa9;
}

.form input[type="submit"] {
  background: #576e86;
  border: none;
  padding: 8px 10px 8px 10px;
  border-radius: 5px;
  color: #a8bace;
}
.form input[type="submit"]:hover {
  background: #394d61;
}
</style>