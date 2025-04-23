<script>
import {defineComponent} from "vue";
import FooterContent from "@/public/footer-content.component.vue";
import LanguageSwitcher from "@/public/language-switcher.component.vue";

export default defineComponent({
  components: {LanguageSwitcher, FooterContent}
})
</script>

<template>
  <div>
    <div>
      <pv-menubar>
        <template #start>
          <pv-button icon="pi pi-bars" label="CatchUp" text />
        </template>
        <template #end>
          <language-switcher></language-switcher>
        </template>
      </pv-menubar>
    </div>
  </div>
  <div>
    // contenido
  </div>
  <footer-content></footer-content>
</template>

<style scoped>
</style>
