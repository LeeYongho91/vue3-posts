<template>
	<div>homewVIew</div>

	<AppGrid :items="items" v-slot="{ item }" colClass="col-6">
		<AppCard>{{ item }}</AppCard>
	</AppGrid>
	<button class="btn btn-primary">say Hello</button>
</template>

<!-- <script>
export default {
	created() {
		console.log(this.$person.name);
	},
};
</script> -->

<script setup>
import { ref } from 'vue';
const items = ref(['사과', '딸기', '포도', '바나나']);
// const person = inject('person');
// console.log(person);
</script>

<style lang="scss" scoped></style>
