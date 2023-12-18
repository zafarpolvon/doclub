<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable prettier/prettier -->
<template>
  <div>
    <div class="grid grid-cols-3">
      <div class="col-span-3 xl:col-span-1 md:col-span-1 login__container">
        <div class="login__box">
          <div class="login__box-body">
            <div class="login__box-header">
              <div class="project__name">
                <h2>docmed.space</h2>
              </div>
              <LanguageSelect />
            </div>
            
            <div class="project">
              <div class="project__title">
                <h4>Closed</h4>
                <h4>Evidence-based</h4>
                <h4>Medicine Club</h4>
              </div>
            </div>
            <div class="input__number">
              <PhoneNumer
                v-if="state.smsStatus == 'new'"
                v-model="phoneValue"
              />
              <PhoneVerification
                ref="myChild"
                v-if="
                  state.smsStatus == 'sended' || state.smsStatus == 'resend'
                "
                @codeUpdated="eventVerifyCode"
                @changeNumber="changeNumber"
                :verified="state.random"
              />
            </div>
            <div
              class="verfication__button"
              v-if="state.smsStatus == 'new'"
              :class="[
                phoneValue.length > 12 && state.smsStatus == 'new'
                  ? 'verfication__button-active'
                  : '',
              ]"
            >
              <button @click="sendCode">Send code</button>
            </div>
            <div
              v-if="state.smsStatus == 'sended' || state.smsStatus == 'resend'"
              class="verfication__button"
              :class="[
                state.smsStatus == 'sended'
                  ? 'verfication__button-pending'
                  : state.smsStatus == 'resend'
                  ? 'verfication__button-active'
                  : '',
              ]"
            >
              <button @click="sendCode">{{ buttonLabel }}</button>
            </div>
            <div v-if="state.smsStatus == 'new'" class="verification__footer">
              <span
                >I hereby agree to the
                <span>Terms of processing of my personal data.</span></span
              >
            </div>
          </div>
          <div class="login__footer">
            <div class="login__footer-connection">
              <ul class="login__footer-box">
                <li class="login__footer-item">
                  <img src="../../assets/icon/mail.svg" alt="" />
                  <span>help@decmed.space</span>
                </li>
                <li class="login__footer-item">
                  <img src="../../assets/icon/tg.svg" alt="" />
                  <span>Chatbot</span>
                </li>
              </ul>
            </div>
            <div class="login__info">
              <span>ООО МЕДТЕХ</span>
              <span>Personal data protection</span>
            </div>
          </div>
        </div>
      </div>
      <div
        class="sm:hidden hidden xl:block md:block xl:col-span-2 md:col-span-2"
      >
        <div class="login__background"></div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, reactive, onUnmounted } from "vue";

import PhoneNumer from "@/components/PhoneNumer.vue";
import PhoneVerification from "@/components/PhoneVerification.vue";
import LanguageSelect from "@/components/LanguageSelect.vue";

const phoneValue = ref("");
const buttonLabel = ref("Send code");
const myChild = ref(null);

const state = reactive({
  smsStatus: "new",
  codeVerifier: "",
  timer: ref(null),
  timerDuration: 10,
  isTimerRunning: ref(false),
  random: "",
});

const sendCode = () => {
  if (state.smsStatus === "new") {
    state.smsStatus = "sended";
    state.random = generateRandomNumber();
    alert(state.random);
  } else if (state.smsStatus === "sended") {
    state.smsStatus = "resend";
    state.random = generateRandomNumber();
    alert(state.random);
    resetCode();
  } else if (state.smsStatus === "resend") {
    state.smsStatus = "sended";
    state.random = generateRandomNumber();
    alert(state.random);
    resetCode();
  }
  startTimer();
};
const resetCode = () => {
  myChild.value.childMethod();
};
const eventVerifyCode = (event) => {
  state.codeVerifier = event;
};

const startTimer = () => {
  state.isTimerRunning = true;
  buttonLabel.value = `Resend code (${state.timerDuration}s)`;

  state.timer = setInterval(() => {
    state.timerDuration--;
    if (state.timerDuration <= 0) {
      stopTimer();
      buttonLabel.value = "Send code";
    } else {
      buttonLabel.value = `Resend code (${state.timerDuration}s)`;
    }
  }, 1000);
};

const stopTimer = () => {
  clearInterval(state.timer);
  state.timer = null;
  state.timerDuration = 10;
  state.isTimerRunning = false;
  state.smsStatus = "resend";
};
const changeNumber = () => {
  phoneValue.value = "";
  stopTimer();
  resetCode();
  state.smsStatus = "new";
};
const generateRandomNumber = () => {
  return Math.floor(1000 + Math.random() * 9000);
};

onUnmounted(() => {
  if (state.isTimerRunning) {
    stopTimer();
  }
});
</script>

<style scoped lang="scss">
.login__background {
  background-image: url("../../assets/image/login.png");
  background-size: cover;
  background-position: center;
  height: 100vh;
}
.login__box {
  padding: 20px 10%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  &-body {
    display: flex;
    flex-direction: column;
  }
  &-header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
}
.project__name {
  & h2 {
    font-size: 24px;
    line-height: 28px;
    font-weight: 700;
    font-family: "Ubuntu", sans-serif;
  }
}
.project__title {
  margin-top: 30px;
  & h4 {
    font-size: 40px;
    line-height: 44px;
    font-weight: 700;
    font-family: "Ubuntu", sans-serif;
  }
  & h4:first-child {
    color: #7646ff;
  }
}
.input__number {
  margin-top: 30px;
}
.verfication__button {
  margin-top: 30px;
  cursor: not-allowed;
  & button {
    width: 100%;
    height: 50px;
    background: #f1ecff;
    border-radius: 12px;
    font-size: 16px;
    line-height: 20px;
    color: #d8d1ff;
    font-weight: 400;
    font-family: "Ubuntu", sans-serif;
    cursor: not-allowed;
    pointer-events: none;
  }
  &-active button {
    cursor: pointer;
    pointer-events: all;
    color: #fff;
    background: #7646ff;
    border-radius: 12px;
  }
  &-pending {
    background: #f1ecff;
    cursor: not-allowed;
    pointer-events: none;
    & button {
    }
    color: #d8d1ff;
    border-radius: 12px;
  }
}
.verification__footer {
  margin-top: 30px;
  & span {
    color: #78708f;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    & span {
      text-decoration: underline;
      text-underline-offset: 2px;
      text-decoration-thickness: 1px;
    }
  }
}
.login__footer {
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  &-item {
    display: flex;
    flex-direction: row;
    cursor: pointer;
    & img {
      width: 24px;
      height: 24px;
      margin-right: 10px;
    }
    & span {
      font-size: 16px;
      line-height: 20px;
      font-weight: 400;
      color: #968fa9;
    }
  }
  &-item:first-child {
    margin-right: 30px;
  }
  &-box {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  &-connection {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .login__info {
    margin-top: 30px;
    display: flex;
    flex-direction: row;
    & span {
      font-size: 16px;
      line-height: 20px;
      font-weight: 400;
      color: #968fa9;
      &:first-child {
        margin-right: 10px;
      }
    }
  }
}
</style>
