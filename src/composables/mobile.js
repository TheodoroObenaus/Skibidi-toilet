import {
    defineAsyncComponent,
    onMounted,
    onUnmounted,
    ref,
    shallowRef,
  } from 'vue';
  
  export function useMobile() {
    const breakpoint = ref('sm');
    const footer = shallowRef(
      defineAsyncComponent(() => import('../components/FooterDescktop.vue')),
    );
  
    const updateBreakpoint = () => {
      const width = window.innerWidth;
      if (width < 576) {
        breakpoint.value = 'xs';
        footer.value = defineAsyncComponent(() =>
          import('../components/FooterMobile.vue'),
        );
      } else if (width < 768) {
        breakpoint.value = 'sm';
        footer.value = defineAsyncComponent(() =>
          import('../components/FooterMobile.vue'),
        );
      } else if (width < 992) {
        breakpoint.value = 'md';
        footer.value = defineAsyncComponent(() =>
          import('../components/FooterMobile.vue'),
        );
      } else if (width < 1200) {
        breakpoint.value = 'lg';
        footer.value = defineAsyncComponent(() =>
          import('../components/FooterDescktop.vue'),
        );
      } else {
        breakpoint.value = 'xl';
        footer.value = defineAsyncComponent(() =>
          import('../components/FooterDescktop.vue'),
        );
      }
    };
  
    onMounted(() => {
      updateBreakpoint();
      window.addEventListener('resize', updateBreakpoint);
    });
  
    onUnmounted(() => {
      window.removeEventListener('resize', updateBreakpoint);
    });
  
    return {
      breakpoint,
      footer,
    };
  }