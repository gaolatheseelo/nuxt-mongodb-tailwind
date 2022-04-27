<template>
  <div>
    <br />
    <h2>Category</h2>
    <v-form>
      <v-text-field  v-model="id" label="Id"></v-text-field>
      <v-text-field v-model="slug" label="Slug"></v-text-field>
      <v-text-field v-model="product" label="Product"></v-text-field>
      <v-text-field v-model="path" label="Path"></v-text-field>
      <v-btn @click="submit({ id, slug, product, path })">{{
        id ? "Edit" : "Submit"
      }}</v-btn>
        <v-btn @click="submit({  })">{{ "Media" }}</v-btn>
        <v-btn @click="submit({  })">{{ "Settings" }}</v-btn>
    </v-form>
  </div>
</template>

<script>
export default {
  computed: {
    id: {
      get() {
        return this.$store.state.category.id;
      },
      set(value) {
        this.$store.commit("category/setId", value);
      },
    },
    slug: {
      get() {
        return this.$store.state.category.slug;
      },
      set(value) {
        this.$store.commit("category/setSlug", value);
      },
    },
    product: {
      get() {
        return this.$store.state.category.product;
      },
      set(value) {
        this.$store.commit("category/setProduct", value);
      },
    },
    path: {
      get() {
        return this.$store.state.category.path;
      },
      set(value) {
        this.$store.commit("category/setPath", value);
      },
    },
  },
  methods: {
    async submit(category) {
      if (category.id) {
        await this.$axios.put("http://localhost:4000/category/" + category.id, {
          slug: category.slug,
          product: category.product,
          path: category.path,
           
        });
      } else {
        await this.$axios.post("http://localhost:4000/category/", {
          slug: category.slug,
          product: category.product,
          path: category.path,
        });
      }
      this.resetcategory({ id: 0, slug: "", product: "", path: "" });
      this.$store.commit(
        "categorys/storeData",
        (await this.$axios.get("http://localhost:4000/category")).data
      );
    },
    resetcategory(category) {
      this.$store.commit("category/setId", category.id);
      this.$store.commit("category/setSlug", category.slug);
      this.$store.commit("category/setProduct", category.product);
      this.$store.commit("category/setPath", category.path);
    },
  },
};
</script>

<style>
</style>