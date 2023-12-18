<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="navbar__container">
    <h2 class="navbar__title">Main page</h2>
    <div class="navbar__info">
      <div class="navbar__name">Giselle Saint Claire</div>
      <a href="#">
        <img
          class="navbar__image"
          loading="lazy"
          src="../../assets/image/avatar.png"
        />
      </a>
      <a href="#">
        <img class="navbar__notif" src="../../assets/icon/bell.svg" />
      </a>
    </div>
  </div>
</template>

<style scoped>
.navbar__container {
  display: flex;
  align-items: start;
  justify-content: space-between;
  gap: 20px;
  padding: 16px 25px;
}
@media (max-width: 991px) {
  .div {
    flex-wrap: wrap;
  }
}
.navbar__title {
  color: var(--text-500, #413663);
  width: 1324px;
  font-size: 28px;
  font-weight: 700;
  font-family: Ubuntu, sans-serif;
}
.navbar__info {
  display: flex;
  align-self: center;
  gap: 16px;
  & a {
    display: flex;
    align-self: center;
  }
}
@media (max-width: 991px) {
  .navbar__info {
    justify-content: center;
  }
}
.navbar__name {
  color: var(--text-500, #413663);
  text-align: right;
  align-self: center;
  flex-grow: 1;
  white-space: nowrap;
  margin: auto 0;
  font: 400 16px/125% Open Sans, sans-serif;
}
@media (max-width: 991px) {
  .navbar__name {
    white-space: initial;
  }
}
.navbar__image {
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 40px;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  max-width: 100%;
}
.navbar__notif {
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 30px;
  overflow: hidden;
  align-self: center;
  max-width: 100%;
  margin: auto 0;
}
</style>
