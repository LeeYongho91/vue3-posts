<template>
	<AppCard>
		<template v-slot:header>헤더</template>
		<div class="card-body">
			<h5 class="card-title">{{ title }}</h5>
			<p class="card-text">
				{{ content }}
			</p>
			<p class="text-muted">{{ createdAt }}</p>
		</div>
		<template v-slot:footer>푸터</template>
	</AppCard>
</template>

<script setup>
import AppCard from '@/components/AppCard.vue';
defineProps({
	title: {
		type: String,
		required: true,
	},
	content: {
		type: String,
	},
	createdAt: {
		type: [String, Number, Date],
	},
});
</script>

<style lang="scss" scoped></style>
