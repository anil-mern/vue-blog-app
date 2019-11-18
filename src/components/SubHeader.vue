<template>
  <div>
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb sub-padding">
        <li class="breadcrumb-item" v-for="(breadcrum, index) in breadcrums" :key="breadcrum.path">
          <a :href="breadcrum.path" v-bind:class="index+1 == breadcrums.length ? {textMuted: true}:'' ">
            {{breadcrum.name}}
          </a>
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
    },
    props: {
        breadcrums: {
            type: Array,
            required: true
        }
    },
    data(){
        return {
            textMuted: true
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.sub-padding {
  padding: 10px 30px;
}

.textMuted{
  color: #6c757d!important;
}
</style>
