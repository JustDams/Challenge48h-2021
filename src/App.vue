<template>
  <div id="app" style="margin: 0">
    <Header class="position-fixed w-100" />
    <div class="container-fluid" style="padding-top: 70px">
      <div class="check form-check-inline">
        <div v-for="t in tags" :key="t.id">
          <input
            class="checkb"
            type="checkbox"
            :value="t.id"
            v-model="checkedTags"
          />
          <label for="tags">{{ t.nom_tag }}</label>
        </div>
      </div>
      <div class="d-flex flex-wrap justify-content-center">
        <ImageComponent
          :imageId="i.id"
          v-for="i in imageFomated"
          :key="i.image[0].id"
        />
      </div>
    </div>
    <nav aria-label="Page navigation example">
      <ul class="pagination d-flex justify-content-center">
        <li class="page-item" v-if="page - 1 > 0">
          <a class="page-link" href="#" v-on:click="changePage(page - 1)"
            >Previous</a
          >
        </li>
        <li
          class="page-item"
          v-if="checkPage(page === 1 ? page : page - 1) > 0"
        >
          <a
            class="page-link"
            href="#"
            v-on:click="changePage(page === 1 ? page : page - 1)"
            >{{ page === 1 ? page : page - 1 }}</a
          >
        </li>
        <li
          class="page-item"
          v-if="checkPage(page === 1 ? page + 1 : page) > 0"
        >
          <a
            class="page-link"
            href="#"
            v-on:click="changePage(page === 1 ? page + 1 : page)"
            >{{ page === 1 ? page + 1 : page }}</a
          >
        </li>
        <li
          class="page-item"
          v-if="checkPage(page === 1 ? page + 2 : page + 1) > 0"
        >
          <a
            class="page-link"
            href="#"
            v-on:click="changePage(page === 1 ? page + 2 : page + 1)"
            >{{ page === 1 ? page + 2 : page + 1 }}</a
          >
        </li>
        <li class="page-item" v-if="checkPage(page + 1) > 0">
          <a class="page-link" href="#" v-on:click="changePage(page + 1)"
            >Next</a
          >
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import Header from "./components/Header";
import ImageComponent from "./components/ImageComponent.vue";
import axios from "axios";
import { apiUrl } from "../config.json";
export default {
  name: "App",
  components: {
    ImageComponent,
    Header,
  },
  data() {
    return {
      images: [],
      page: 1,
      itemsPerPage: 39,
      imageFomated: null,
      checkedTags: [],
      tags: [],
    };
  },
  mounted() {
    if (document.cookie.includes("jwt"))
      axios.get(`${apiUrl}/images`).then((res) => {
        this.images = res.data;
        this.changePage(1);
        this.getTags();
      });
    else document.location.href = "/Connexion";
  },
  methods: {
    changePage(page) {
      this.page = page;
      this.imageFomated = this.formatPage(page);
    },
    formatPage(page) {
      const array = [];
      let start = 0;
      if (page !== 1) start = page - 1 + this.itemsPerPage * (page - 1);
      for (let i = start; i < this.images.length; i++)
        if (i <= start + this.itemsPerPage) array.push(this.images[i]);
      return array;
    },
    checkPage(page) {
      while (this.formatPage(page) !== null)
        return this.formatPage(page).length;
    },
    getTags() {
      axios.get(`${apiUrl}/tags`).then((res) => {
        this.tags = res.data;
      });
    },
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
.check {
  z-index: 0;
}

.checkb {
  margin-left: 50px;
  margin-right: 5px;
}
</style>