<template>
  <div id="app" class="container">
    <div class="d-flex flex-wrap justify-content-center">
      <ImageComponent
        :imageId="i.id"
        v-for="i in images"
        :key="i.image[0].id"
      />
    </div>
  </div>
</template>

<script>
import ImageComponent from "./components/ImageComponent.vue";
import axios from "axios";
import { apiUrl } from "../config.json";
export default {
  name: "App",
  components: {
    ImageComponent,
  },
  data() {
    return {
      images: null,
    };
  },
  mounted() {
    axios.get(`${apiUrl}/images`).then((res) => {
      this.images = res.data;
    });
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>