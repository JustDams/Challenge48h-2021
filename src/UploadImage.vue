<template>
  <div
    class="container d-flex justify-content-center h-100vh align-items-center"
  >
    <form @submit.prevent="sendToStrapi" ref="uploadForm" action="/Index">
      <div class="form-group">
        <label for="nom">Nom de l'image</label>
        <input type="text" name="nom" class="form-control" />
      </div>

      <div class="form-group">
        <label for="credits">Credits de l'image</label>
        <input type="text" name="credits" class="form-control" />
      </div>

      <div class="form-group">
        <label for="date_droits_fin">Date de fin de droits d'utilisation</label>
        <input type="date" name="date_droits_fin" class="form-control" />
      </div>

      <div class="form-group">
        <input type="file" name="image" />
      </div>

      <TagComponent class="form-group" />

      <input type="submit" name="Submit" />
    </form>
  </div>
</template>

<script>
import axios from "axios";
import { apiUrl } from "../config.json";
import TagComponent from "./components/TagComponent.vue";

export default {
  name: "UploadImage",
  components: {
    TagComponent,
  },
  methods: {
    sendToStrapi() {
      const form = this.$refs["uploadForm"];
      const formData = new FormData();
      const formElem = form.elements;
      const data = {};

      formElem.forEach((e) => {
        if (!["submit", "file"].includes(e.type)) data[e.name] = e.value;
        else if (e.type === "file") {
          const file = e.files[0];
          formData.append(`files.${e.name}`, file, file.name);
        }
      });
      formData.append("data", JSON.stringify(data));
      axios.post(`${apiUrl}/images`, formData).then((r) => {
        const formData = new FormData();
        const formElem = document.querySelectorAll(".tag_name");
        const data = {};
        formElem.forEach((e) => {
          data["id_image"] = r.data.id;
          data["tag"] = e.textContent.trim();
          formData.append("data", JSON.stringify(data));
          console.log(data)
          axios.post(`${apiUrl}/images-tags`, formData).then((r) => {
            console.log(r);
          });
        });
      });
    },
  },
};
</script>

<style scoped>
.h-100vh {
  height: 100vh;
}
</style>