<script setup lang="ts">
import confetti from "canvas-confetti";
import { onMounted } from "vue";
import RiShareCircleLine from "~icons/ri/share-circle-line";
import RiCodeBoxLine from "~icons/ri/code-box-line";
import RiBookReadLine from "~icons/ri/book-read-line";
import RiComputerLine from "~icons/ri/computer-line";
import RiArrowRightSLine from "~icons/ri/arrow-right-s-line";

onMounted(() => {
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6, x: 0.58 },
  });
});
</script>

<template>
  <section id="plugin-starter">
    <div>
      
    </div>
  </section>
</template>

<style lang="scss" scoped>

</style>
