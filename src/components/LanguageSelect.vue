<template>
  <div>
    <div class="select__relative">
      <div class="language__box">
        <div
          @click="openToggle"
          class="language__select"
          :class="{ rotated: state.toggle }"
        >
          <button>
            <span>{{ state.language }}</span>
          </button>
          <img src="../assets/icon/Dropdown.svg" alt="" />
        </div>
      </div>
      <div
        v-show="state.toggle"
        v-click-outside="methodToInvoke"
        :class="{ opened: state.toggle }"
        class="select__box"
      >
        <div class="select__box-header">
          <h5>🏳️ Select a language</h5>
        </div>
        <div>
          <ul class="select__list">
            <li
              v-for="(item, index) in state.languages"
              :key="index"
              class="select__list-item"
              @click="setLanguage(item)"
            >
              {{ item }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";

const state = reactive({
  language: "English",
  toggle: false,
  languages: ["English", "Russian"],
});

const methodToInvoke = () => {
  if (state.toggle) {
    openToggle();
  }
};

const openToggle = () => {
  if (state.toggle) {
    state.toggle = !state.toggle;
    return;
  }
  setTimeout(() => {
    state.toggle = !state.toggle;
  }, 0);
};

const setLanguage = (language) => {
  state.language = language;
  openToggle();
  // You can add logic here to handle language change, if needed
};
</script>
<style scoped lang="scss">
.select__relative {
  position: relative;
  width: 100%;
}

.language__box {
  display: flex;
  align-items: center;
  justify-content: end;
  border-radius: 12px;
  padding: 12px 16px 12px 16px;
}

.language__select {
  min-width: fit-content;
  max-width: 180px;
  display: flex;
  flex-direction: row;
  align-self: center;
  cursor: pointer;

  & button {
    font-size: 16px;
    line-height: 20px;
    color: #413663;
  }

  & img {
    margin-left: 10px;
  }

  img {
    transition: transform 0.3s ease;
  }

  &.rotated img {
    transform: rotate(180deg);
  }
}
.select__box {
  box-shadow: 0px 0px 15px 0px rgba(153, 153, 153, 0.2);
  background: rgba(255, 255, 255, 1);

  border-radius: 12px;
  padding: 10px;
  margin-top: 10px;
  transition: max-height 0.3s ease;
  &.opened {
    width: auto;
    right: 0;
    max-height: 280px;
    position: absolute;
  }

  &-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 10px;
    h5 {
      font-size: 20px;
      line-height: 28px;
      font-weight: 500;
      color: #413663;
    }
    button {
      background-color: transparent;
      border: none;
      outline: none;
      img {
        width: 16px;
        height: 16px;
      }
    }
  }
}

.select__list {
  /* Add your additional styles here */
  &-item {
    padding: 5px 10px;
    cursor: pointer;
  }
}

.language__select-list {
  /* Add your additional styles here */
}

.language__select-item {
  /* Add your additional styles here */
}
</style>
