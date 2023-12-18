<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="sidebar__container">
    <div>
      <div class="sidebar__logo">
        <h3>docmed.space</h3>
      </div>
      <div class="sidebar__menu">
        <span class="sidebar__menu-title">Navigation</span>
        <ul>
          <li>
            <router-link to="/home">
              <span>Home</span>
            </router-link>
          </li>
          <li>
            <router-link to="/profile">
              <span>Profile</span>
            </router-link>
          </li>
          <li>
            <router-link to="/settings">
              <span>Settings</span>
            </router-link>
          </li>
          <li>
            <router-link to="/logout">
              <span>Logout</span>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script setup></script>
<style lang="scss" scoped>
.sidebar__container {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 270px;
  padding: 20px 10px 32px 10px;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  flex-shrink: 0;
  align-self: stretch;
  background: #f9f9fb;
  height: 100%;
  z-index: 100;
  transition: all 0.5s ease;
}
.sidebar__logo {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 10px;
  margin-bottom: 30px;
  & h3 {
    font-size: 24px;
    line-height: 32px;
    font-weight: 700;
    color: #000000;
  }
}
.sidebar__menu {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  &-title {
    font-family: Open Sans;
    color: #968fa9;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 1px;
    text-transform: uppercase;
    padding-left: 16px;
    margin-bottom: 16px;
  }
  & ul {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    & li {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;
      margin-bottom: 16px;
      padding: 8px 16px;
      border-radius: 12px;
      & a {
        font-family: Open Sans;
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: 24px;
        color: #413663;
        text-decoration: none;
      }
    }
    & li:hover {
      border-radius: 12px;
      background: #f1ecff;
      & a {
        color: #7646ff;
      }
    }
  }
}
</style>
