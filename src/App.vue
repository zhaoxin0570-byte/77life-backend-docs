<template>
  <DocLayout>
    <router-view />
  </DocLayout>
</template>

<script>
import DocLayout from '@/views/DocLayout.vue'

export default {
  name: 'App',
  components: { DocLayout }
}
</script>
