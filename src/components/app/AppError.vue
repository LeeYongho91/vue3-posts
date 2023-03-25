<template>
	<div class="text-center text-danger py-44">
		{{ message }}
	</div>
</template>

<script setup>
defineProps({
	message: String,
});
</script>

<style lang="scss" scoped></style>
