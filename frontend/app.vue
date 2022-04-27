<template>
	<div>
		<NuxtPage />
	</div>
</template>

<script setup>
	useHead({
		title: "Gaming Masters",
		meta: [
			{
				name: "description",
				content: "Gaming Masters - Let us play",
			},
			{
				property: "og:title",
				content: "Gaming Masters",
			},
			{
				property: "og:description",
				content: "Gaming Masters - Let us play",
			},
			{
				property: "og:image",
				content: "/gamer.jpg",
			},
			{
				property: "og:type",
				content: "website",
			},
			{
				property: "og:site_name",
				content: "Gaming Masters",
			},
		],
	});
</script>

