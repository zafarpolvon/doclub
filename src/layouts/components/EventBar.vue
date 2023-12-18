<template>
  <div class="eventbar__container">
    <div>
      <Calendar />
      <div class="event__info">
        <h4 class="event__title">Events</h4>
        <span class="event__date">17 december</span>
      </div>
      <Event />
      <div class="event__info">
        <h4 class="event__title">Coming events</h4>
        <span class="event__date">4 september</span>
      </div>
      <Event />
      <Event />
    </div>
  </div>
</template>
<script setup>
import Calendar from "../../components/Calendar.vue";
import Event from "../../components/Event.vue";
</script>
<style lang="scss" scoped>
.eventbar__container {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f9f9fb;
  padding: 25px;
  border-radius: 16px;
  margin-right: 25px;
}
.eventbar__container div {
  width: 100%;
}
.event__info {
  margin-top: 30px;
}
.event__title {
  font-family: Ubuntu;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 28px;
  color: #413663;
  margin-bottom: 10px;
}
.event__date {
  font-family: Ubuntu;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
  color: #413663;
}
</style>
