<!-- eslint-disable vue/no-parsing-error -->
<template>
  <div>
    <span>Phone number</span>
    <div class="select__reletive">
      <div class="phone__box">
        <div class="phone__select" :class="{ rotated: state.toggle }">
          <button @click="openToggle">
            <span> {{ state.region }}</span>
          </button>
          <img src="../assets/icon/Dropdown.svg" alt="" />
        </div>
        <div class="phone__input">
          <input
            v-model="phoneValue"
            @input="handleUpdate"
            v-mask="'(##) ###-##-##'"
            type="tel"
            pattern="[0-9]*"
            inputmode="numeric"
            ref="phoneInput"
          />
        </div>
      </div>
      <div
        v-show="state.toggle"
        v-click-outside="methodToInvoke"
        :class="{ opened: state.toggle }"
        class="select__box"
      >
        <div class="select__box-header">
          <div>
            <h5>☎️ Select a region</h5>
          </div>
          <div>
            <button @click="state.toggle = false">
              <img src="../assets/icon/Vector.svg" alt="" />
            </button>
          </div>
        </div>
        <div>
          <ul class="select__list">
            <li
              v-for="(item, index) in state.countries"
              :key="index"
              class="select__list-item"
              @click="
                state.region = item.name;
                openToggle();
              "
            >
              {{ item.name }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, reactive, defineEmits, defineProps } from "vue";

const phoneInput = ref(null);
// eslint-disable-next-line vue/no-setup-props-destructure
const { modelValue } = defineProps(["modelValue"]);
// eslint-disable-next-line vue/valid-define-emits
const emit = defineEmits();
const phoneValue = ref(modelValue);

const state = reactive({
  region: "UZ (+998)",
  phone: "",
  toggle: false,
  countries: [
    {
      name: "UAE (+971)",
      code: "+971",
    },
    {
      name: "RU(+7)",
      code: "+7",
    },
    {
      name: "UZ (+998)",
      code: "+998",
    },
    {
      name: "USA (+1)",
      code: "+1",
    },
    {
      name: "KZ (+7)",
      code: "+7",
    },
    {
      name: "UAE (+971)",
      code: "+971",
    },
    {
      name: "RU (+7)",
      code: "+7",
    },
    {
      name: "UZ (+998)",
      code: "+998",
    },
    {
      name: "USA (+1)",
      code: "+1",
    },
    {
      name: "KZ (+7)",
      code: "+7",
    },
  ],
});
const methodToInvoke = () => {
  if (state.toggle) {
    openToggle();
  }
};
const openToggle = () => {
  if (state.toggle) {
    state.toggle = !state.toggle;
    if (phoneInput.value) {
      phoneInput.value.focus();
    }
    return;
  }
  setTimeout(() => {
    state.toggle = !state.toggle;
    if (phoneInput.value) {
      phoneInput.value.focus();
    }
  }, 0);
};
const handleUpdate = () => {
  emit("update:modelValue", phoneValue.value);
};
</script>
<style scoped lang="scss">
.phone__box {
  display: flex;
  align-items: center;
  border: 1px solid #c8c8e3;
  border-radius: 12px;
  padding: 12px 16px 12px 16px;
  margin-top: 10px;
}
.phone__select {
  min-width: fit-content;
  max-width: 180px;
  display: flex;
  flex-direction: row;
  align-self: center;
  cursor: pointer;
  &button {
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
.phone__input {
  width: 100%;
  padding-left: 10px;
}
.phone__input input {
  width: 100%;
  padding: 0 10px 0 0px;
  font-size: 16px;
  line-height: 20px;
  color: #413663;
  border: none;
  outline: none;
}

.select__reletive {
  position: relative;
  width: 100%;
}
.select__box {
  border: 1px solid #c8c8e3;
  box-shadow: 0px 0px 15px 0px #99999933;
  background-color: #fff;
  border-radius: 12px;
  padding: 10px;
  margin-top: 10px;
  transition: max-height 0.3s ease;
  &.opened {
    width: 100%;
    max-height: 250px;
    position: absolute;
  }

  &-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 15px;
    h5 {
      font-size: 20px;
      line-height: 20px;
      font-weight: 600;
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
  display: block;
  max-height: 180px;
  overflow-y: auto;
  transition: overflow-y 0.3s ease;

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-thumb {
    height: 80px;
    background-color: #f4f4f9;
    border-radius: 9.999px;
  }

  -webkit-overflow-scrolling: touch;

  &:hover {
    overflow-y: scroll;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
}

.select__list-item {
  font-size: 16px;
  line-height: 24px;
  padding: 8px 15px;
  color: #78708f;
  cursor: pointer;
  border-radius: 12px;
  margin-right: 10px;
  transition: color 0.3s ease, background-color 0.3s ease;
}

.select__list-item:hover {
  color: #413663;
  background-color: #f1ecff;
}
</style>
