
<template>
  <mdb-card>
    <mdb-view hover cascade>
      <!-- https://mdbootstrap.com/img/Photos/Others/photo6.jpg -->

      <a href="#!">
        <!-- <mdb-card-image src="img1" alt="blog-image" class="img-thumbnail img-responsive img-card"></mdb-card-image> -->
        <img
          :src="require(`../assets/blog-image.png`)"
          alt="blog-image"
          class="img-thumbnail img-responsive img-card"
        />
        <mdb-mask flex-center waves overlay="white-slight"></mdb-mask>
      </a>
    </mdb-view>
    <mdb-card-body class="text-center pb-0" cascade>
      <mdb-card-title>
        <img src="../assets/title-banner.jpg" width="30px" />
        <strong>{{blogObj.title}}</strong>
      </mdb-card-title>
      <h5 class="blue-text">
        <strong>{{blogObj.createdBy}}</strong>
      </h5>
      <mdb-card-text class="text1">{{blogObj.description}}</mdb-card-text>
      <a class="px-2 fa-lg tw-ic">
        <mdb-icon fab icon="linkedin" />
      </a>
      <a class="px-2 fa-lg tw-ic">
        <mdb-icon fab icon="twitter" />
      </a>
      <a class="px-2 fa-lg fb-ic">
        <mdb-icon fab icon="facebook" />
      </a>
      <mdb-card-footer class="text-muted mt-4">{{blogObj.time}}</mdb-card-footer>
      <!-- {{itemIndex}} -->
    </mdb-card-body>
  </mdb-card>
</template>

<script>
import {
    mdbIcon,
    mdbCard,
    mdbView,
    mdbMask,
    // mdbCardImage,
    mdbCardTitle,
    mdbCardText,
    mdbCardFooter,
    mdbCardBody
} from "mdbvue";

export default {
    name: "BlogCard",
    components: {
        mdbIcon,
        mdbCard,
        mdbView,
        mdbMask,
        // mdbCardImage,
        mdbCardTitle,
        mdbCardText,
        mdbCardFooter,
        mdbCardBody
    },
    props: {
        blogObj: {
            type: Object,
            required: true
        },
        itemIndex: {
            type: String,
            required: true
        }
    },
    data() {
        return {};
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.img-card {
  min-height: 200px;
  max-height: 200px;
  max-width: 350px;
  min-width: 350px;
}

.text1 {
  overflow: hidden;
  min-height: 35px;
  text-overflow: ellipsis;
  display: -webkit-box;
  line-height: 16px;
  max-height: 32px;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
</style>
