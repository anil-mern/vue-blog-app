<template>
  <mdb-footer color="blue" class="font-small pt-4 mt-4">
    <div class="text-left p-sm">
      <mdb-row>
        <mdb-col sm="12">
          <h5 class="title">
            Blog
            <span class="f-13">Express Yourself and Share Your Passions.</span>
            <div class="float-right">
              <mdb-tooltip material email trigger="hover" :options="{placement: 'top'}">
                <span slot="tip">Google Sheets</span>
                <i slot="reference" class="far fa-file-powerpoint m-l-sm"></i>
              </mdb-tooltip>
              <a target="_" href="https://github.com/anil-bomma/vue-blog-app">
                <mdb-tooltip material email trigger="hover" :options="{placement: 'left'}">
                  <span slot="tip">GitHub Source</span>
                  <i id="github" slot="reference" class="fab fa-github-square m-l-sm"></i>
                </mdb-tooltip>
              </a>
            </div>
          </h5>
        </mdb-col>
      </mdb-row>
    </div>
    <div class="footer-copyright text-center py-3">
      <mdb-container fluid>&copy; 2018-2019 Copyright</mdb-container>
    </div>
  </mdb-footer>
</template>

<script scoped>
import { mdbFooter, mdbContainer, mdbTooltip, mdbRow, mdbCol } from "mdbvue";
export default {
    name: "AppFooter",
    components: {
        mdbFooter,
        mdbContainer,
        mdbTooltip,
        mdbRow,
        mdbCol
    }
};
</script>

<style scoped>
.f-13 {
  font-size: 13px;
}

.m-l-sm {
  margin: 0px 5px;
}

.p-sm {
  padding: 0px 20px;
}
</style>