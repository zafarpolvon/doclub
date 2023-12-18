<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <VCalendar class="calendar" :trim-weeks="true" :theme="themeStyles" />
  </div>
</template>

<script setup>
import { ref } from "vue";
const themeStyles = ref({
  dayNotInMonth: "not-in-month",
});
</script>

<style>
.calendar {
  width: 100% !important;
}
.vc-weekday {
  border-top: 1px solid #e5e5f8 !important;
  border-left: 1px solid #e5e5f8 !important;
  border-bottom: 1px solid #e5e5f8 !important;
  padding-top: 8px !important;
}
.vc-weekday-1 {
  border-left: 0px !important;
}

.vc-weeks {
  padding: 0 !important;
}
.vc-bordered {
  border-radius: 12px !important;
  border: 1px solid #e5e5f8 !important;
}
.vc-day {
  border-left: 1px solid #e5e5f8 !important;
  border-bottom: 1px solid #e5e5f8 !important;
  padding: 0 !important;
}

.date-week-picker {
  .vc-day.is-not-in-month {
    * {
      opacity: 1;
      pointer-events: auto;
      color: rgba(25, 24, 26, 0.4);
    }
  }
}
.not-in-month {
  color: rgba(0, 0, 0, 0.5) !important;
}
.on-bottom {
  border-bottom: 0px !important;
}
.on-left {
  border-left: 0px !important;
}
.vc-weekday {
  font-weight: 400;
  color: #9d9dbb;
}
.vc-header .vc-title {
  color: #413663;
}
.vc-header .vc-arrow {
  color: #413663;
}
.is-not-in-month div {
  color: #e6e4ec !important;
  opacity: 1 !important;
}
</style>
