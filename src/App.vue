<script setup>
import Layout from '@/containers/Layout.vue'
import ThemedSuspense from '@/components/ThemedSuspense.vue'
</script>

<template>
  <Suspense fallback="{}">
    <div v-if="$route.meta.layout">
      <RouterView />
    </div>
    <Layout v-else>
      <RouterView />
    </Layout>
    <template #fallback>
      <ThemedSuspense />
    </template>
  </Suspense>
</template>
