<template>
  <section :class="reminderWrapClassName" ref="reminderWrap" @click="hiddenReminder">
    <div class="reminder-container">{{word}}</div>
  </section>
</template>

<script>
import { getScreenHeight } from '../utils/utils';

export default {
  props: ['word', 'ifShow', 'callback'],
  computed: {
    reminderWrapClassName() {
      return this.ifShow
        ? 'reminder-wrap'
        : 'reminder-wrap hidden';
    },
  },
  methods: {
    hiddenReminder() {
      this.callback();
    },
  },
  mounted() {
    this.$refs.reminderWrap.style.height = getScreenHeight();
  },
};
</script>

<style scoped lang='less'>
.reminder-wrap {
  background: rgba(0, 0, 0, 0.7);
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1000;
  width: 100%;
  &.hidden {
    display: none;
  }
  .reminder-container {
    position: absolute;
    left: 50%;
    top: 50%;
    box-sizing: border-box;
    width: 1rem;
    height: 0.6rem;
    margin: -0.3rem 0 0 -0.5rem;
    padding: 0.2rem 0;
    text-align: center;
    color: #000;
    box-shadow: 0 0 1rem #000;
    border-radius: 0.03rem;
    background: rgba(255, 255, 255, 0.5);
  }
}
</style>
