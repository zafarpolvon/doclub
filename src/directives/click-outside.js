/* eslint-disable no-unused-vars */
export default {
  beforeMount: function (el, binding) {
    binding.event = function (event) {
      if (!(el === event.target || el.contains(event.target))) {
        if (binding.value instanceof Function) {
          binding.value(event);
        }
      }
    };
    document.body.addEventListener("click", binding.event);
  },
  unmounted: function (el, binding) {
    document.body.removeEventListener("click", binding.event);
  },
};
