<template>
  <div class="h-500px">
    <sub-header></sub-header>
    <mdb-container>
      <h1>{{ msg }}</h1>
      <mdb-row>
        <mdb-col md="4" class="m-2" v-for="(blogItem, index) in blogData">
          <blog-card :blogObj="blogItem" :itemIndex="`img${index}`"></blog-card>
        </mdb-col>
      </mdb-row>
    </mdb-container>
  </div>
</template>

<script>
import { mdbContainer, mdbRow, mdbCol } from "mdbvue";
import SubHeader from "./SubHeader.vue";
import BlogCard from "./BlogCard.vue";
// import blogJson from "../data/blog.json";

// console.log("blogJson", blogJson);

export default {
  name: "BlogsView",
  components: {
    "mdb-container": mdbContainer,
    "mdb-row": mdbRow,
    "mdb-col": mdbCol,
    "blog-card": BlogCard,
    "sub-header": SubHeader
  },
  data: function(params) {
    return {
      blogData: {}
    };
  },
  props: {
    msg: String
  },
  created() {
    const url = "https://bomma-app-1.herokuapp.com/get-blog";
    fetch(url)
      .then(response => response.json())
      .then(blogs => {
        this.blogData = blogs.blog;
      })
      .catch(() =>
        console.log("Can’t access " + url + " response. Blocked by browser?")
      );
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.h-500px {
  min-height: 500px;
}
</style>
