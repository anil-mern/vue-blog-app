<template>
  <div>
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb sub-padding">
        <li class="breadcrumb-item active">
          <a href="#">Home</a>
        </li>
        <!-- <li class="breadcrumb-item active" aria-current="page">Library</li> -->
        <add-blog></add-blog>
      </ol>
    </nav>
  </div>
</template>

<script>
import AddBlog from "./AddBlog";

export default {
  name: "SubHeader",
  components: {
    "add-blog": AddBlog
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.sub-padding {
  padding: 10px 30px;
}
</style>
