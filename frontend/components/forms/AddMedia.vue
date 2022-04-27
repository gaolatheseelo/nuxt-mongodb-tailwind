<template>

    <div v-if="show" class="modal fixed w-full h-full top-0 left-0 flex items-center justify-center">
        <div @click.self="close_modal()" class="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"></div>

        <div class="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">

           
            <div class="modal-content py-4 text-left px-6">

                <div class="flex justify-center items-center pb-3">
                    <p class="text-2xl font-bold text-center">Add Locale</p>
                </div>

                <form class="mt-6">
                    <div>
                        <label for="icon" class="block text-sm text-gray-800 dark:text-gray-200">Icon</label>
                        <input type="text" v-model="icon" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
                    </div>

                    <div class="mt-4">
                        <div class="flex items-center justify-between">
                            <label for="potrait" class="block text-sm text-gray-800 dark:text-gray-200">Potrait</label>
                        </div>

                        <input type="text" v-model="potrait" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
                    </div>

                    <div class="mt-4">
                        <div class="flex items-center justify-between">
                            <label for="landscape" class="block text-sm text-gray-800 dark:text-gray-200">Landscape</label>
                        </div>

                        <input type="text" v-model="landscape" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
                    </div>

                    <div class="mt-4">
                        <div class="flex items-center justify-between">
                            <label for="square" class="block text-sm text-gray-800 dark:text-gray-200">Square</label>
                        </div>

                        <input type="text" v-model="square" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
                    </div>
                    
                   

                    <div class="mt-6">
                        <button type="submit"   class="flex items-center justify-center w-full px-6 py-2 text-sm font-medium text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:bg-blue-400 focus:outline-none">
                        
                        <span class="m-2  text-white" @click="close_modal()">Add Media</span>
                    </button>
                    </div>


                </form>
            
            </div>
        </div>
    </div>
    
</template>

<script>
    export default {
        name: "AddMedia",

        props: {
            show: Boolean
        },
        data() {
            return{
                 icon: "",
                 potrait: "",
                 landscape: "",
                 square: ""

            }
        },

        methods:{
            close_modal() {
                this.$emit("close")
            }

        }
    }
</script> 