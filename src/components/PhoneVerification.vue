<template>
  <div>
    {{ state.code }}
    {{ props.verified }}
    {{ state.code.join("") == props.verified }}
    <div class="verification__title" v-if="state.smsStatus === 'sended'">
      The code was sent. <a @click="changeNumber">Change the number</a>
    </div>
    <div class="verification__title" v-if="state.smsStatus === 'verified'">
      Code verified successfully!
    </div>
    <div class="verification__title" v-if="state.smsStatus === 'failed'">
      Code verification failed. <a @click="changeNumber">Change the number</a>
    </div>

    <div class="verification__container">
      <ul class="verification__container-box">
        <li
          class="verification__container-item"
          :class="[
            state.smsStatus === 'failed'
              ? 'verify__failed'
              : state.smsStatus === 'verified'
              ? 'verify__success'
              : '',
          ]"
        >
          <input
            v-model="state.code[0]"
            @keydown="(event) => handleKeyDown(0, event)"
            max="9"
            min="0"
            maxlength="1"
            pattern="[0-9]"
            type="tel"
          />
        </li>
        <li
          class="verification__container-item"
          :class="[
            state.smsStatus === 'failed'
              ? 'verify__failed'
              : state.smsStatus === 'verified'
              ? 'verify__success'
              : '',
          ]"
        >
          <input
            v-model="state.code[1]"
            @keydown="(event) => handleKeyDown(1, event)"
            type="tel"
            max="9"
            min="0"
            maxlength="1"
            pattern="[0-9]"
          />
        </li>
        <li
          class="verification__container-item"
          :class="[
            state.smsStatus === 'failed'
              ? 'verify__failed'
              : state.smsStatus === 'verified'
              ? 'verify__success'
              : '',
          ]"
        >
          <input
            v-model="state.code[2]"
            @keydown="(event) => handleKeyDown(2, event)"
            type="tel"
            max="9"
            min="0"
            maxlength="1"
            pattern="[0-9]"
          />
        </li>
        <li
          class="verification__container-item"
          :class="[
            state.smsStatus === 'failed'
              ? 'verify__failed'
              : state.smsStatus === 'verified'
              ? 'verify__success'
              : '',
          ]"
        >
          <input
            v-model="state.code[3]"
            @keydown="(event) => handleKeyDown(3, event)"
            type="tel"
            max="9"
            min="0"
            maxlength="1"
            pattern="[0-9]"
          />
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
// eslint-disable-next-line no-unused-vars
import { reactive, defineEmits, defineProps } from "vue";
import { useRouter } from "vue-router";
// eslint-disable-next-line vue/valid-define-emits
const emit = defineEmits(["codeUpdated", "resetValue"]);
const props = defineProps(["verified"]);
const router = useRouter();

const state = reactive({
  smsStatus: "sended",
  code: Array(4).fill(""),
});

const handleKeyDown = (index, event) => {
  if (event.key === "Backspace" && state.code[index] === "") {
    event.preventDefault();
    if (index > 0) {
      state.code[index - 1] = "";
      const prevInput = document.querySelector(
        `.verification__container-item:nth-of-type(${index}) input`
      );
      prevInput && prevInput.focus();
    }
  } else if (index < state.code.length - 1 && state.code[index] !== "") {
    const nextInput = document.querySelector(
      `.verification__container-item:nth-of-type(${index + 2}) input`
    );
    nextInput && nextInput.focus();
  }

  if (index === state.code.length - 2) {
    checkVerificationCode();
  }
};
const childMethod = () => {
  state.code = Array(4).fill("");
  emit("resetValue");
};

const checkVerificationCode = () => {
  setTimeout(() => {
    console.log(props.verified, "props.verified");
    const enteredCode = state.code.join("");
    emit("codeUpdated", enteredCode);
    if (enteredCode == props.verified) {
      state.smsStatus = "verified";
      localStorage.setItem("fake_token", enteredCode);
      setTimeout(() => {
        router.push("/home");
      }, 1000);
    } else {
      state.smsStatus = "failed";
    }
  }, 0);
};
const changeNumber = () => {
  emit("changeNumber");
};
// eslint-disable-next-line no-undef
defineExpose({
  childMethod,
});
</script>

<style scoped lang="scss">
.verification__container {
  display: flex;
  margin-top: 15px;
  &-box {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  &-item {
    width: 80px;
    height: 40px;
    border: 1px solid #7646ff;
    color: #7646ff;
    background-color: #fff;
    border-radius: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
    input {
      width: 100%;
      height: 100%;
      border: none;
      outline: none;
      text-align: center;
      border-radius: 12px;
      font-size: 20px;
    }
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }
}
.verify__failed {
  background-color: #ffebeb;
  color: #ea6361;
  border-color: #ea6361;
}
.verify__success {
  background-color: #e6f4ff;
  color: #7ec07d;
  border-color: #7ec07d;
}
.verification__title {
  font-size: 16px;
  line-height: 20px;
  color: #413663;
  margin-top: 10px;
  & a {
    color: #7646ff;
    text-decoration: underline;
    text-underline-offset: 2px;
    text-decoration-thickness: 1px;
    cursor: pointer;
  }
}
</style>
