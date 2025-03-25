<script lang="ts" setup>
import { ref } from "vue"

const annotationsFormRef = ref()
const currentAnnotations = ref(false)

function handleSubmit () {
  annotationsFormRef.value?.handleSubmit();
  // await nextTick();

  const { customAnnotations, annotations, customFormInvalid, specFormInvalid } =
  annotationsFormRef.value || {};

  // 表单验证不通过
  if (customFormInvalid || specFormInvalid) {
    return;
  }

  // 合并自定义数据和表单提供的数据
  const newAnnotations = {
    ...annotations,
    ...customAnnotations,
  };
}
</script>

<template>
<!--  <section id="plugin-rainbowAggregationLogin">-->
    <AnnotationsForm
      :annotations="false"
      ref="annotationsFormRef"
      :value="currentAnnotations"
      kind="Settings"
      group="rainbowAggregationLogin.ymypay.cn"
    />

    <VButton @click="handleSubmit">提交</VButton>
<!--  </section>-->
</template>

<style lang="scss" scoped>

</style>
