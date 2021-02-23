<template>
  <div class="tag-input position-relative">
    <div v-for="(tag, index) in tags" :key="tag.id" class="tag-input__tag">
      <span v-on:click="removeTag(index)">x</span>
      <span class="tag_name" :id="tag.id"> {{ tag.name }}</span>
    </div>
    <input
      type="text"
      placeholder="Entrez un tag"
      class="tag-input__text"
      @keydown.enter="addTag"
      @keydown.188="addTag"
      @keydown.delete="removeLastTag"
    />
    <ul
      class="list-group position-absolute"
      style="overflow: scroll; height: 100px; right: 0; cursor: pointer"
    >
      <li
        v-for="t in tagsRegister"
        :key="t.id"
        class="list-group-item"
        v-on:click="addTagFromList(t)"
      >
        {{ t.name }}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
import { apiUrl } from "../../config.json";

export default {
  name: "TagComponent",
  data() {
    return {
      tags: [],
      tagsRegister: [],
    };
  },
  mounted() {
    axios.get(`${apiUrl}/tags`).then((res) => {
      res.data.forEach((e) => {
        this.tagsRegister.push({ name: e.nom_tag, id: e.id });
      });
    });
  },
  methods: {
    addTag(event) {
      event.preventDefault();
      let val = event.target.value.trim();
      let exists = false;
      this.tagsRegister.forEach((e) => {
        if (e.name === val && !exists) {
          exists = true;
          val = e;
        }
      });
      if (exists && !this.tags.includes(val)) {
        this.tags.push(val);
        event.target.value = "";
      }
    },
    removeTag(index) {
      this.tags.splice(index, 1);
    },
    removeLastTag(event) {
      event.target.value.length === 0
        ? this.removeTag(this.tags.length - 1)
        : null;
    },
    addTagFromList(t) {
      this.tags.includes(t) ? null : this.tags.push(t);
    },
  },
};
</script>

<style scoped>
.tag-input {
  width: 100%;
  border: 1px solid #eee;
  font-size: 0.9em;
  height: 50px;
  box-sizing: border-box;
  padding: 0 10px;
}

.tag-input__tag {
  height: 30px;
  float: left;
  margin-right: 10px;
  background-color: #eee;
  margin-top: 10px;
  line-height: 30px;
  padding: 0 5px;
  border-radius: 5px;
}

.tag-input__tag > span {
  cursor: pointer;
  opacity: 0.75;
}

.tag-input__text {
  border: none;
  outline: none;
  font-size: 0.9em;
  line-height: 50px;
  background: none;
}
</style>