<template>
  <div class="body">
        <!-- images -->
    <article class="lesimgs">
      <img
        src="/assets/logo.jpg"
        style="width: 20%"
        v-on:click="myFunction(this);"
      />
    </article>
        <!-- Selected picture + close button   -->
    <div class="container" id="popup">
      <span onclick="this.parentElement.style.display='none'" class="closebtn"
        >&times;</span
      >
      <img id="expandedImg" style="width: 50%" />
        <!-- description of the picture -->
      <p>Description</p>
        <!-- downlaod link for the picture-->
      <a href="/assets/logo.jpg" download>Télécharger l'image</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "ImageComponent",
};
//  for select a picture 
const myFunction = (imgs) => {
  const expandImg = document.getElementById("expandedImg");
  expandImg.src = imgs.src;
  expandImg.parentElement.style.display = "";
  document.getElementById("popup").classList.toggle("active");
};
</script>

<style>

/* backgroud */
.body {
  background-color: gray;
  flex-wrap: wrap;
}
/* button "x" */
.closebtn {
  position: absolute;
  top: 10px;
  right: 10px;
  color: white;
  font-size: 35px;
  cursor: pointer;
}

/* picture selected */
.container {
  position: absolute;
  visibility: hidden;
  top: 10vh;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-right: 2%;
}

/* show the description and the button*/
.active {
  visibility: visible;
}

/* change the form of the cursor on clickable things */
.lesimgs {
  cursor: pointer;
}
</style>

