<template>
	<fixed>
		<iframe
			src="https://docs.google.com/forms/d/e/1FAIpQLScHIrrdLHayB8kvMgS_tQhxLZXNacMnwxNiOD0vfYDODDT8Wg/viewform?embedded=true"
			class="w-full"
			height="2000"
			frameborder="0"
			marginheight="0"
			marginwidth="0"
		>
			Loading…
		</iframe>
	</fixed>
</template>

<script>
	export default {
		metaInfo() {return {title: this.title}},
		data() {return {title: 'Submit a Movie'}},
	};
</script>
