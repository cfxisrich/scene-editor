<template>
  <div
    v-tooltip.top="'相机视角'"
    class="camera-viewpoint-container"
  >
    <el-select
      v-model="cameraView"
      size="mini"
      placeholder="请选择"
    >
      <el-option
        v-for="(item, index) in cameraList"
        :key="index"
        :label="item.label"
        :value="item.value"
      />
    </el-select>
  </div>
</template>

<script>
import { engine } from "@/editor/assets/js/vis";

export default {
  props: {
    viewpoint: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      cameraView: "",
    };
  },
  computed: {
    cameraList() {
      const list = [
        {
          label: "默认",
          value: "",
        },
      ];

      Object.values(this.$store.getters["camera/get"]).forEach((config) => {
        list.push({
          label: config.name,
          value: config.vid,
        });
      });

      return list;
    },
  },
  watch: {
    cameraView: {
      handler(newVal) {
        if (newVal) {
          const camera = VIS.engine.compilerManager.getObjectBySymbol(newVal);
          engine.setCamera(camera);
        } else {
          engine.setViewpoint(this.viewpoint);
        }

        this.$emit("changeCamera", newVal);
      },
    },
  },
  mounted() {},
};
</script>

<style lang="less" scoped>
.camera-viewpoint-container {
  .flexLayout(row, center, center);
  width: 100px;
  background: @brighterTheme-backgroundColor;
}
</style>
