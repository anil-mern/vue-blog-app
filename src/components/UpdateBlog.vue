<template>
  <div class="m-l-auto">
    <!-- <mdb-btn size="sm" color="blue-grey m-0" @click.native="modal = true">Update Blog</mdb-btn> -->
    <div @click="enableModal">
      <i class="fas fa-edit"></i>
      Edit
    </div>
    <mdb-modal :show="modal">
      <mdb-modal-header>
        <mdb-modal-title class="black-text">Update Blog</mdb-modal-title>
      </mdb-modal-header>
      <form class="needs-validation" novalidate @submit="checkForm">
        <mdb-modal-body>
          <div class="form-row">
            <div class="col-sm-12">
              <mdb-input label="Title" class="text-caps" type="text" required v-model="blogData.title" />
              <div class="valid-feedback">Looks good!</div>
              <div class="invalid-feedback">Please enter the title.</div>
            </div>
            <div class="col-sm-12">
              <mdb-input label="Author" class="text-caps" type="text" required v-model="blogData.createdBy" />
            </div>
            <div class="col-sm-12">
              <mdb-textarea
              class="text-caps" 
                type="text"
                label="Update your blog"
                rows="4"
                required
                v-model="blogData.description"
              />
            </div>
          </div>
        </mdb-modal-body>

        <mdb-modal-footer>
          <mdb-btn size="sm" color="danger" @click="closeModal">Cancel</mdb-btn>
          <mdb-btn size="sm" color="success" type="submit" v-on:click="updateBlog()">Save</mdb-btn>
        </mdb-modal-footer>
      </form>
    </mdb-modal>
  </div>
</template>

<script>
import {
    mdbModal,
    mdbModalHeader,
    mdbModalTitle,
    mdbModalBody,
    mdbInput,
    mdbTextarea,
    mdbModalFooter,
    mdbBtn
} from "mdbvue";

export default {
    name: "UpdateBlog",
    props: {
        blogData: {
            type: Object,
            required: true
        },
        modal: {
            type: Boolean,
            required: true
        }
    },
    components: {
        mdbModal,
        mdbModalHeader,
        mdbModalTitle,
        mdbModalBody,
        mdbInput,
        mdbTextarea,
        mdbModalFooter,
        mdbBtn
    },
    methods: {
    // don't use () => {} to create function as it create new this, then you can't access data variable inside methods
        updateBlog() {
            const url =
        "https://bomma-app-1.herokuapp.com/update-blog/" +
        this.$route.params.id;

            let bodyObj = {};
            if (this.blogData && this.blogData.title) {
                bodyObj.title = this.blogData.title;
            }
            if (this.blogData && this.blogData.description) {
                bodyObj.description = this.blogData.description;
            }
            if (this.blogData && this.blogData.createdBy) {
                bodyObj.createdBy = this.blogData.createdBy;
            }

            this.$http.post(url, bodyObj).then(
                response => {
                    console.log("blog updated successfully");
                    this.modal = false;
                    location.reload();
                    // this.$router.push("/blog-details/" + this.$route.params.id);
                    return response.json();
                },
                error => {
                    console.log("error while updating the blog: ", error);
                }
            );
        },

        checkForm(event) {
            event.preventDefault();
            event.target.classList.add("was-validated");
        },

        enableModal() {
            let editModal = this.modal;
            editModal = true;
            this.$emit("update-modal", editModal);
        },

        closeModal(){
            let editModal = this.modal;
            editModal = false;
            this.$emit("close-modal", editModal);
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.m-l-auto {
  margin-left: auto;
}

.black-text {
    color: #222 !important;
}

.text-caps {
    text-transform: capitalize;
}
</style>
