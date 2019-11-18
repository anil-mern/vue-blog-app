<template>
  <div class="d-flex justify-content-center mt-5" v-if="loading">
    <div class="spinner-border" role="status">
      <span class="sr-only">Loading...</span>
    </div>
  </div>
</template>

<script>
export default {
    name: "LoaderView",
    props: {
        loading: {
            type: Boolean,
            required: true
        }
    }
};
</script>

<style scoped>
</style>