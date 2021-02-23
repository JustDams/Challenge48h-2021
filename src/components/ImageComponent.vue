<template>
  <div class="m-2" style="width: 20%">
    <!-- images -->
    <img
      class="card-img-top"
      style="cursor: pointer"
      :src="imageSrc"
      :id="imageId"
      v-on:click="toggleActive(imageId)"
    />
    <!-- Selected picture + close button   -->
    <div class="picture-container" :id="'popup' + imageId">
      <span
        class="closebtn rounded-circle d-flex justify-content-center align-items-end"
        v-on:click="toggleActive(imageId)"
      >
        &times;
      </span>
      <img :src="imageSrc" />

      <!-- description of the picture -->
      <p>Description</p>
    </div>
  </div>
</template>

<script>
import { apiUrl } from "../../config.json";
import axios from "axios";

export default {
  name: "ImageComponent",
  props: {
    imageId: Number,
  },
  data() {
    return {
      image: null,
      imageSrc: null,
    };
  },
  mounted() {
    //  display the picture and it description
    axios.get(`${apiUrl}/images/${this.imageId}`).then((res) => {
      this.image = res.data;
      this.imageSrc = apiUrl + res.data.image[0].url;
    });
  },
  methods: {
    toggleActive: (id) => {
      document.getElementById(`popup${id}`).classList.toggle("active");
    },
  },
};
</script>

<style>
/* picture selected */
.picture-container {
  display: none;
  width: 50%;
  position: absolute;
  top: 10%;
}

.picture-container img {
  height: 50vh;
}

/* button "x" */
.closebtn {
  position: absolute;
  top: 2px;
  right: 8px;
  color: white;
  background-color: gray;
  width: 25px;
  height: 25px;
  cursor: pointer;
}

/* show the description and the button*/
.active {
  display: block;
}
</style>

