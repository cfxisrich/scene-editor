<template>
  <div class="TorusGeometry-container">
    <de-collapse-layout
      label="形状"
      icon="#iconjichubianhuan"
      arrow-position="left"
    >
      <template #container>
        <de-controller-number
          v-model="config.radius"
          :keyframe="false"
          label="环面半径"
          :step="1"
          :drag-multply="2"
          :min="0"
        />
        <de-controller-number
          v-model="config.tube"
          :keyframe="false"
          label="管道半径"
          :step="1"
          :drag-multply="2"
          :min="0"
        />
        <de-controller-number
          v-model="config.radialSegments"
          :keyframe="false"
          label="半径分段"
          :step="1"
          :drag-multply="2"
          :min="0"
        />
        <de-controller-number
          v-model="config.tubularSegments"
          :keyframe="false"
          label="管道分段"
          :step="1"
          :drag-multply="2"
          :min="0"
        />
        <de-controller-number
          v-model="arc"
          :keyframe="false"
          label="圆心角"
          :step="1"
          :drag-multply="5"
          :min="0"
          :max="360"
          unit="°"
          :display-accuracy="0"
        />
      </template>
    </de-collapse-layout>
  </div>
</template>

<script>
export default {
  props: {
    config: {
      type: Object,
      required: true,
    },
  },
  computed: {
    arc: {
      get() {
        return (this.config.arc * 180) / Math.PI;
      },
      set(value) {
        this.config.arc = (value * Math.PI) / 180;
      },
    },
  },
};
</script>

<style lang="less" scoped></style>
