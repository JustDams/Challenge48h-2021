<template>
<div class="body">
  <div class="h-100vh d-flex justify-content-center align-items-center flex-column text-center">

    <h1 class="error-404">
      <span>404</span>
    </h1>
    
    <h2 class="title">Page non trouvée</h2>
    <p class="text-center">
      La page que vous avez demandée n'existe pas.
      <br />
      <a href="/">Acceuil</a>
    </p>
  </div>
</div>
</template>

<style>
.body {
	font: normal 13px/20px Arial;
	color: gray;
	background-color: white;
}
.h-100vh {
    height: 100vh;
}
.error-404 {
    margin:0;
	font-size: 200px;
	line-height: 200px;
	font-weight: bold;
}
h1, h2 {
	color: grey;
}
h2 {
	font-size: 24px;
	line-height: 24px;
}

</style>

<script>
export default {
    name: "Error"
}
</script>