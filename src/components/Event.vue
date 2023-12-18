<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="event-container">
    <div class="header-container">
      <div class="category-label">Offline</div>
      <div class="category-tag">Cardiology</div>
    </div>
    <div class="event-title">
      Patient with AF and diabetes mellitus. How to improve the life prognosis
      of a comorbid patient?
    </div>
    <div class="event-description">
      Webinar: "Direct line with an expert". The influence of the modern nature
      of nutrition on cardiovascular complications: Russian accents of the
      section "Epidemiology and prevention"
    </div>
    <div class="event-details">
      <div class="event-date">3 September</div>
      <div class="event-time">10:00 – 18:00</div>
    </div>
    <div class="view-details-button">View details</div>
  </div>
</template>
<script setup></script>
<style lang="scss" scoped>
.event-container {
  align-items: flex-start;
  align-self: stretch;
  border-radius: 16px;
  background-color: var(--neutral-white, #fff);
  display: flex;
  flex-direction: column;
  padding: 25px;
  margin-top: 25px;
}

.header-container {
  align-content: flex-start;
  flex-wrap: wrap;
  display: flex;
  justify-content: space-between;
  gap: 12px;
}

.category-label {
  color: var(--primary-600, #7646ff);
  text-transform: uppercase;
  border-radius: 12px;
  background-color: var(--primary-200, #f1ecff);
  flex-grow: 1;
  justify-content: center;
  padding: 6px 10px;
  font: 400 14px/114% Open Sans, sans-serif;
}

.category-tag {
  color: var(--neutral-500, #9d9dbb);
  text-transform: uppercase;
  border-radius: 12px;
  background-color: var(--neutral-200, #f4f4f9);
  flex-grow: 1;
  justify-content: center;
  padding: 6px 10px;
  font: 400 14px/114% Open Sans, sans-serif;
}

.event-title {
  align-self: stretch;
  color: #413663;
  margin-top: 20px;
  font: 500 20px/28px Ubuntu, sans-serif;
}

.event-description {
  align-self: stretch;
  color: #9f98b3;
  margin-top: 20px;
  font: 400 16px/20px Open Sans, sans-serif;
}

.event-details {
  padding-top: 20px;
  align-self: stretch;
  display: flex;
  margin-top: 20px;
  justify-content: space-between;
  gap: 12px;
}

.event-date {
  color: var(--text-300, #968fa9);
  text-align: center;
  font: 400 16px/125% Open Sans, sans-serif;
}

.event-time {
  color: var(--text-300, #968fa9);
  text-align: center;
  justify-content: center;
  flex-grow: 1;
  padding-left: 28px;
  font: 400 16px/125% Open Sans, sans-serif;
}

.view-details-button {
  color: var(--text-500, #413663);
  text-align: center;
  white-space: nowrap;
  justify-content: center;
  border-radius: 12px;
  border: 1px solid var(--neutral-300, #e5e5f8);
  align-self: start;
  margin-top: 20px;
  padding: 12px 20px;
  font: 400 16px/125% Open Sans, sans-serif;
}
</style>
