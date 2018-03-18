<template>
  <div class="gif mdl-card mdl-shadow--2dp">
    <div class="mdl-card__title mdl-card--expand"></div>
    <div class="mdl-card__actions">
      <span class="filename">Title</span>
    </div>
  </div>
</template>

<style>
.gif {
  margin: 0 auto;
  width: 60%;
  display: flex;
  justify-content:space-between;
  margin-bottom: 60px;
}
.gif.mdl-card {
  width: 256px;
  height: 256px;
}
.gif> .mdl-card__actions {
  height: 52px;
  padding: 16px;
  background: rgba(0, 0, 0, 0.2);
}
.filename {
  color: #fff;
  font-size: 14px;
  font-weight: 500;
}

</style>
