<template>
  <v-container class="home-component" fluid>
    <Slider class="animate__animated animate__fadeInDown" />

    <SectionComponent />
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "vuex";
import Slider from "@/components/SliderComponent.vue";
import SectionComponent from "@/components/SectionComponent.vue";

export default defineComponent({
  name: "HomeComponent",
  components: {
    Slider,
    SectionComponent,
  },
  setup() {
    const store = useStore();
    const userPersonalData = store.getters["userPersonalData"];

    return {
      userPersonalData,
    };
  },
});
</script>

<style scoped lang="scss"></style>
