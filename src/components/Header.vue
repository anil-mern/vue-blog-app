<template>
  <mdb-navbar color="blue" dark>
    <img src="../../public/blog.png" width="30px" />
    <mdb-navbar-brand href="/" class="m-l-5">Blog</mdb-navbar-brand>
    <mdb-navbar-toggler>
      <mdb-navbar-nav>
        <!-- <mdb-nav-item href="/" active>Home</mdb-nav-item> -->
      </mdb-navbar-nav>
      <!-- <mdb-btn size="sm" color="blue-grey">Add Blog</mdb-btn> -->
    </mdb-navbar-toggler>
  </mdb-navbar>
</template>

<script>
import {
  mdbNavbar,
  mdbNavbarBrand,
  mdbNavbarToggler,
  mdbNavbarNav,
  mdbNavItem,
  mdbDropdown,
  mdbDropdownMenu,
  mdbDropdownToggle,
  mdbInput,
  mdbDropdownItem
} from "mdbvue";

export default {
  name: "AppHeader",
  components: {
    mdbNavbar,
    mdbNavbarBrand,
    mdbNavbarToggler,
    mdbNavbarNav,
    mdbNavItem,
    mdbDropdown,
    mdbDropdownMenu,
    mdbDropdownToggle,
    mdbDropdownItem,
    mdbInput,
    // mdbBtn
  }
};
</script>


<style scoped>
.m-l-5 {
  margin-left: 5px;
}

img {
  background-color: white;
  border-radius: 30%;
  margin-left: 7px;
}
</style>

