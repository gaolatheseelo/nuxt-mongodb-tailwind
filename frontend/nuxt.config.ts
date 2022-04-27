import { defineNuxtConfig } from 'nuxt'
import i18n from './config/i18n'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    css: ["~/assets/css/main.css"],
	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {},
		},
	},
	plugins: [
		{ src: '~plugins/vs-datepicker', mode: 'client' }
		
	  ],
	  buildModules: [
		/* language module */
		[
		 'nuxt-i18n',
		 {
		   vueI18nLoader: true,
		   defaultLocale: 'en',
			locales: [
			 {
				code: 'en',
				name: 'English'
			 },
			 {
				code: 'fr',
				name: 'Français'
			 },
			 {
				code: 'es',
				name: 'Español'
			 }
		   ],
		   vueI18n: i18n
		 }
		]
	   ]

})
