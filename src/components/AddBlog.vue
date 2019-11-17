<template>
  <div class="m-l-auto">
    <mdb-btn size="sm" color="blue-grey m-0" @click.native="modal = true">Add Blog</mdb-btn>

    <mdb-modal :show="modal" @close="modal = false">
      <mdb-modal-header>
        <mdb-modal-title>Add Blog</mdb-modal-title>
      </mdb-modal-header>
      <form class="needs-validation" novalidate @submit="checkForm">
        <mdb-modal-body>
          <!-- <mdb-input type="text" label="Title" v-model="blogData.title" />
          <mdb-input type="text" label="Author" v-model="blogData.author" />
          <mdb-textarea
            type="text"
            label="Write your blog"
            rows="4"
            v-model="blogData.blogContent"
          />-->

          <div class="form-row">
            <div class="col-sm-12">
              <mdb-input label="Title" type="text" required v-model="blogData.title" />
              <div class="valid-feedback">Looks good!</div>
              <div class="invalid-feedback">Please enter the title.</div>
            </div>
            <div class="col-sm-12">
              <mdb-input label="Author" type="text" required v-model="blogData.author" />
            </div>
            <div class="col-sm-12">
              <mdb-textarea
                type="text"
                label="Write your blog"
                rows="4"
                required
                v-model="blogData.blogContent"
              />
            </div>
          </div>
        </mdb-modal-body>

        <mdb-modal-footer>
          <mdb-btn size="sm" color="danger" @click.native="modal = false">Cancel</mdb-btn>
          <mdb-btn size="sm" color="success" type="submit" v-on:click="saveBlog()">Save</mdb-btn>
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
    name: "AddBlog",
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
    data() {
        return {
            modal: false,
            blogData: {}
        };
    },
    methods: {
    // don't use () => {} to create function as it create new this, then you can't access data variable inside methods
        saveBlog() {
            if (
                this.blogData.title &&
        this.blogData.author &&
        this.blogData.blogContent
            ) {
                const url = "https://bomma-app-1.herokuapp.com/save-blog";

                let bodyObj = {
                    title: this.blogData.title,
                    description: this.blogData.blogContent,
                    createdBy: this.blogData.author
                };

                this.$http.post(url, bodyObj).then(
                    response => {
                        console.log("blog added successfully");
                        this.modal = false;
                        return response.json();
                    },
                    error => {
                        console.log("error while posting the blog: ", error);
                    }
                );
            } else {
                console.log("missing required fields");
            }
        },

        checkForm(event) {
            event.preventDefault();
            event.target.classList.add("was-validated");
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.m-l-auto {
  margin-left: auto;
}
</style>
