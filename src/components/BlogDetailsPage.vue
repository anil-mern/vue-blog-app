<template>
  <div class="min-height">
    <sub-header v-bind:breadcrums="breadcrums"></sub-header>
    <loader-view v-bind:loading="loading"></loader-view>

    <mdb-card border="light" class="mb-3 custom-panel" v-if="blog && blog.title">
      <mdb-card-header class="p-2">
        <img src="../assets/title-banner.jpg" width="30px" />
        <strong class="ml-2">{{blog.title}}</strong>
      </mdb-card-header>
      <mdb-card-body class="pt-2">
        <div class="row mb-3 border-bottom">
          <div class="col-lg-6">
            <div class="text-left font-12 mt-2">
              <i class="fas fa-user-circle"></i>
              Author:
              <strong>{{blog.createdBy}}</strong>
              <i class="fas fa-user-clock ml-3"></i>
              created-at:
              <strong>{{blog.date}}</strong>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="text-right">
              <button class="btn btn-sm btn-info btn-padding">
                <!-- <i class="fas fa-edit"></i>
                Edit-->
                <update-blog v-bind:blogData="blog" :modal="modal" 
                @update-modal="update" @close-modal="closeModal">
                </update-blog>
              </button>
              <button class="btn btn-sm btn-danger btn-padding" @click="deleteBlog()">
                <i class="fas fa-trash"></i>
                Delete
              </button>
              <router-link to="/">
                <button class="btn btn-sm btn-blue-grey btn-padding">
                  <i class="fas fa-arrow-circle-left"></i>
                  Back
                </button>
              </router-link>
            </div>
          </div>
        </div>
        <mdb-card-text class="text-justify">{{blog.description}}</mdb-card-text>
      </mdb-card-body>
    </mdb-card>
  </div>
</template>

<script>
import { mdbCard, mdbCardBody, mdbCardText, mdbCardHeader } from "mdbvue";
import SubHeader from "./SubHeader.vue";
import LoaderView from "./LoaderView.vue";
import UpdateBlog from "./UpdateBlog.vue";

export default {
    name: "BlogDetails",
    data() {
        return {
            blog: null,
            loading: true,
            modal: false,
            breadcrums: [
                {
                    path: "/",
                    name: "Home"
                }
            ]
        };
    },
    components: {
        mdbCard,
        mdbCardBody,
        mdbCardHeader,
        mdbCardText,
        "loader-view": LoaderView,
        "sub-header": SubHeader,
        "update-blog": UpdateBlog
    },
    methods: {
        deleteBlog() {
            this.loading = true;
            const url =
        "https://bomma-app-1.herokuapp.com/delete-blog/" +
        this.$route.params.id;

            this.$http.delete(url).then(
                response => {
                    this.loading = false;
                    this.$router.push("/");
                },
                error => {
                    console.log("error: ", error);
                    this.error = {
                        status: 404,
                        message:
              "unable to delete data from server, please check the server"
                    };
                    this.loading = false;
                }
            );
        },
        updateBlog(data) {
            this.loading = true;
            const url =
        "https://bomma-app-1.herokuapp.com/update-blog/" +
        this.$route.params.id;

            this.$http.post(url).then(
                response => {
                    this.loading = false;
                    this.$router.push("/");
                },
                error => {
                    console.log("error: ", error);
                    this.error = {
                        status: 404,
                        message:
              "unable to delete data from server, please check the server"
                    };
                    this.loading = false;
                }
            );
        },
        update(editModal){
            this.modal = editModal;
        },
        closeModal(editModal){
            this.modal = editModal;
        }
    },
    created() {
        const url = "https://bomma-app-1.herokuapp.com/get-blog";

        this.$http.get(url).then(
            response => {
                console.log(response.body.blog);
                let getBlog = this._.filter(response.body.blog, {
                    id: this.$route.params.id
                });
                this.blog = getBlog[0];
                this.breadcrums.push({
                    path: "#/blog-details/" + this.blog.id,
                    name: this.blog.title
                });
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

<style scoped>
.min-height {
  min-height: 80vh;
}

.custom-panel {
  width: 90%;
  margin: auto;
}

.font-12 {
  font-size: 14px;
}

.btn-padding {
  padding: 7px 17px !important;
}

.text-justify {
  text-align: justify;
}
</style>