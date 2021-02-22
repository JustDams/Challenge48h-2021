<template>
  <div class="body">
    <article class="lesimgs">
      <img src="/a/test.jpg" style="width: 20%" onclick="myFunction(this);" />
    </article>

    <div class="container" id="popup">
      <span onclick="this.parentElement.style.display='none'" class="closebtn"
        >&times;</span
      >
      <img id="expandedImg" style="width: 50%" />
      <p>Description</p>
      <a href="/a/test.jpg" download>Télécharger l'image</a>
    </div>
  </div>
</template>

<style>
.body {
  background-color: gray;
  flex-wrap: wrap;
}

.closebtn {
  position: absolute;
  top: 10px;
  right: 10px;
  color: white;
  font-size: 35px;
  cursor: pointer;
}

.container {
  position: absolute;
  visibility: hidden;
  top: 10vh;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-right: 2%;
}

.active {
  visibility: visible;
}

.lesimgs {
  cursor: pointer;
}
</style>

<script>
export default {
  name: "ImageComponent",
};
function myFunction(imgs) {
  var expandImg = document.getElementById("expandedImg");
  expandImg.src = imgs.src;
  expandImg.parentElement.style.display = "";
  document.getElementById("popup").classList.toggle("active");
}
</script>
