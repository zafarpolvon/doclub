<template>
  <div class="mobile__menu">
    <div class="mobile__menu-box">
      <ul class="mobile__menu-container">
        <li class="mobile__menu-item">
          <a href="#">
            <img src="../../assets/icon/menu.svg" alt="" />
          </a>
        </li>
        <li class="mobile__menu-item">
          <a href="#">
            <img src="../../assets/icon/home.svg" alt="" />
          </a>
        </li>
        <li class="mobile__menu-item">
          <a href="#">
            <img src="../../assets/icon/Calendar 2.svg" alt="" />
          </a>
        </li>
        <li class="mobile__menu-item">
          <a href="#">
            <img src="../../assets/icon/person.svg" alt="" />
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.mobile__menu {
  display: none;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 999999;
  &-container {
    width: 100%;
    padding: 0 25px;
    flex-direction: row;
    justify-content: space-between;
    display: flex;
  }
}
.mobile__menu-box {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f9f9fb;
  height: 60px;
  border-radius: 16px 16px 0px 0px;
  fill: var(--Gray-100, #dfdddd);

  filter: drop-shadow(0px 0px 20px rgba(200, 227, 236, 0.5));
}
</style>
