<template>
  <div class="m-2" style="width: 20%">
    <!-- images -->
    <div
      class="block-image"
      :style="'background-image: url(' + imageSrc + ')'"
      v-on:click="toggleActive(imageId)"
    ></div>
    <!-- Selected picture + close button   -->
    <div :id="'popupbackground' + imageId" class="picture-background"></div>
    <div :id="'popup' + imageId" class="picture-container" style="z-index: 1">
      <span
        class="closebtn rounded-circle d-flex justify-content-center align-items-end"
        v-on:click="toggleActive(imageId)"
      >
        &times;
      </span>
      <img :src="imageSrc" style="max-width: 50%" />

      <!-- description of the picture -->
      <p class="picture-description">
        {{ image !== null ? image.nom : "" }}
      </p>
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
    axios
      .get(`${apiUrl}/images/${this.imageId}`, {
        headers: {
          Authorization: `Bearer ${this.getCookie("jwt")}`,
        },
      })
      .then((res) => {
        this.image = res.data;
        this.imageSrc = apiUrl + res.data.image[0].url;
      });
  },
  methods: {
    toggleActive: (id) => {
      document.getElementById(`popup${id}`).classList.toggle("active");
      document
        .getElementById(`popupbackground${id}`)
        .classList.toggle("active");
    },
    getCookie(name) {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop().split(";").shift();
    },
  },
};
</script>

<style>
/* picture selected */
.picture-container {
  display: none;
  width: 50%;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.picture-background {
  display: none;
  background-color: rgba(128, 128, 128, 0.4);
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
}

.picture-description {
  background-color: white;
  max-width: 50%;
  margin-left: auto;
  margin-right: auto;
}

/* button "x" */
.closebtn {
  position: absolute;
  top: 2px;
  right: 8px;
  color: gray;
  background-color: white;
  width: 25px;
  height: 25px;
  cursor: pointer;
}

/* show the description and the button*/
.active {
  display: block;
}

.block-image {
  height: 250px;
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: center;
  transition: 0.3s ease-in-out;
}

.block-image:hover {
  background-size: 110%;
  transition: 0.3s ease-in-out;
}
</style>

