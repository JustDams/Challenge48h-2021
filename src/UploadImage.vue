<template>
  <div id="app" style="margin: 0">
    <Header class="position-fixed w-100" />
    <div
      class="container d-flex justify-content-center h-100vh align-items-center"
    >
      <form @submit.prevent="sendToStrapi" ref="uploadForm">
        <div class="form-group">
          <label for="nom">Nom de l'image</label>
          <input type="text" name="nom" class="form-control" />
        </div>

        <div class="form-group">
          <label for="credits">Credits de l'image</label>
          <input type="text" name="credits" class="form-control" />
        </div>

        <div class="form-group">
          <label for="date_droits_fin"
            >Date de fin de droits d'utilisation</label
          >
          <input type="date" name="date_droits_fin" class="form-control" />
        </div>

        <div class="form-group">
          <input type="file" name="image" />
        </div>

        <TagComponent class="form-group" />

        <input type="submit" name="Submit" style="float: left" />
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Header from "./components/Header";
import { apiUrl } from "../config.json";
import TagComponent from "./components/TagComponent.vue";

export default {
  name: "UploadImage",
  components: {
    TagComponent,
    Header,
  },
  mounted() {
    if (!document.cookie.includes("jwt")) document.location.href = "/Connexion";
  },
  methods: {
    sendToStrapi() {
      const form = this.$refs["uploadForm"];
      const formData = new FormData();
      const formElem = form.elements;
      const data = {};
      const config = {
        headers: {
          Authorization: `Bearer ${this.getCookie("jwt")}`,
        },
      };

      formElem.forEach((e) => {
        if (!["submit", "file"].includes(e.type)) data[e.name] = e.value;
        else if (e.type === "file") {
          const file = e.files[0];
          formData.append(`files.${e.name}`, file, file.name);
        }
      });
      formData.append("data", JSON.stringify(data));
      axios.post(`${apiUrl}/images`, formData, config).then((r) => {
        const formElem = document.querySelectorAll(".tag_name");
        formElem.forEach((e) => {
          const formData = new FormData();
          const data = {};
          data["id_image"] = r.data.id;
          data["tag"] = e.id;
          formData.append("data", JSON.stringify(data));
          axios.post(`${apiUrl}/images-tags`, formData, config).then((r) => {
            console.log(r);
            document.location.href = "/"
          });
        });
      });
    },
    getCookie(name) {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop().split(";").shift();
    },
  },
};
</script>

<style scoped>
.h-100vh {
  height: 100vh;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>