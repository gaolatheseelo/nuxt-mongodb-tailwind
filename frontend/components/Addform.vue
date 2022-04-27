<template>
<div class="flex justify-center">
<form class="w-full max-w-sm">
  <div class="flex flex-wrap -mx-3 mb-6 justify-center">
    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-slug">
        Slug
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-slug" type="text" placeholder="Category Slug">
      
    </div>
    <div class="w-full md:w-1/2 px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-product">
        Product
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-product" type="text" placeholder="Category Product">
    </div>
  </div>
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-path">
        Path
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-path" type="text" placeholder="Category Path">
     
    </div>
  </div>
  <div class="w-full px-3">
    <div class="w-full md:w-1/2 px-3">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-product">
          Publish Date
        </label>
          <vs-datepicker
            label="Date"
            id="deliveryDate"
            v-model="form.date"
            placeholder="DD-MM-YYYY"
            format="DD-MM-YYYY"
          ></vs-datepicker>
      </div>
  </div>

  <div class="flex flex-wrap -mx-3 mb-6">
   
    <div class="md:w-1/2 px-3 mb-6 md:mb-0">
        <button @click="showModal = true" class="bg-transparent border border-purple-500 hover:bg-purple-400 hover:border-purple-500 text-gray-700 hover:text-white font-bold py-2 px-4 rounded-md">
            Media
        </button>

        <AddMedia :show="showModal"  @close="showModal=false"> </AddMedia>
    </div> 
  </div> 

    <div class="form-check">
    <input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckIndex">
    <label class="form-check-label inline-block text-gray-800" for="flexCheckIndex">
      Indexed
    </label>
  </div>
      
 
 

</form>
</div>
</template>

<script>
    
    import AddMedia from "./forms/AddMedia.vue"
    

    export default {
        name: "App",

        components: {
           
            AddMedia,
            
        },

        data() {
            return {
                showModal: true
            }
        }
    }
</script>