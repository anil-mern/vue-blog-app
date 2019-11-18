import BlogsView from "../components/BlogsView.vue";
import BlogsDetail from "../components/BlogDetailsPage.vue";

export default [
    { path: "/", component: BlogsView },
    { path: "/blog-details/:id", component: BlogsDetail }

]