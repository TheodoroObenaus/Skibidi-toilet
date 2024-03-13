<script setup>
import { useMonitor } from '@/composables/monitor';
import { useMobile } from '@/composables/mobile';

const { menu } = useMonitor();
const { footer } = useMobile();

</script>

<template>
   <div>
    <component :is="menu" />
    <main>
      <router-view />
    </main>
    <component :is="footer" />
      <footer>
        <p>Copyright &copy; 2024</p>
      </footer>
  </div>
</template>

<style scoped>
</style>
