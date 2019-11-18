<template>
  <div class="h-500px">
    <sub-header v-bind:breadcrums="breadcrums"></sub-header>
    <loader-view v-bind:loading="loading"></loader-view>
    
    <mdb-container>
      <mdb-row>
        <div class="m-auto" v-if="error">
          <h3 v-if="error">{{error.message}}</h3>
        </div>
        <mdb-col md="4" class="m-b-5" v-for="(blogItem, index) in blogData" :key="blogItem.id">
          <blog-card :blogObj="blogItem" :itemIndex="`img${index}`"></blog-card>
        </mdb-col>
      </mdb-row>
    </mdb-container>
  </div>
</template>

<script>
import { mdbContainer, mdbRow, mdbCol } from "mdbvue";
import SubHeader from "./SubHeader.vue";
import LoaderView from "./LoaderView.vue";
import BlogCard from "./BlogCard.vue";

export default {
    name: "BlogsView",
    components: {
        "mdb-container": mdbContainer,
        "mdb-row": mdbRow,
        "mdb-col": mdbCol,
        "loader-view": LoaderView,
        "blog-card": BlogCard,
        "sub-header": SubHeader
    },
    data(params) {
        return {
            blogData: {},
            loading: true,
            breadcrums: [
                {
                    path: "/",
                    name: "Home"
                }
            ],
            error: null
        };
    },
    props: {
        msg: String
    },
    created() {
        this.error = null;
        const url = "https://bomma-app-1.herokuapp.com/get-blog";

        this.$http.get(url).then(
            response => {
                this.blogData = response.body.blog;
                this.loading = false;
            },
            error => {
                console.log("error: ", error);
                this.error = {
                    status: 404,
                    message: "unable to fetch data from server, please check the server"
                };
                this.loading = false;
            }
        );
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.h-500px {
  min-height: 500px;
}

.m-b-5 {
  margin-bottom: 10px;
}

.m-auto {
  margin: auto;
}
</style>
