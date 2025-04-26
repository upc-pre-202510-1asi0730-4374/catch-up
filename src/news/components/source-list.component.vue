<script>
import {Source} from "@/news/model/source.entity.js";
import SourceItem from "@/news/components/source-item.component.vue";

export default {
  name: "source-list",
  components: {SourceItem},
  props: {
    visible: Boolean,
    sources: Array[Source]
  }
}
</script>

<template>
  <pv-drawer v-bind:visible="visible">
    <source-item v-for="source in sources" :source="source" :key="source.id" />
  </pv-drawer>
</template>

<style scoped>

</style>