<template>
	<div>
		<h2>게시글 등록</h2>
		<hr class="my-4" />
		<PostForm
			v-model:title="form.title"
			v-model:content="form.content"
			@submit.prevent="save"
		>
			<template #actions>
				<button
					type="button"
					class="btn btn-outline-dark me-2"
					@click="goListPage"
				>
					목록
				</button>
				<button class="btn btn-primary">저장</button>
			</template>
		</PostForm>
	</div>
	<AppAlert :items="alerts" />
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { createPost } from '@/api/posts';
import PostForm from '@/components/posts/PostForm.vue';
import { useAlert } from '@/composables/alert.js';

const router = useRouter();
const form = ref({
	title: null,
	content: null,
});

const { alerts, vAlert, vSuccess } = useAlert();

const goListPage = () => router.push({ name: 'PostList' });
const save = () => {
	try {
		const data = {
			...form.value,
			createdAt: Date.now(),
		};
		createPost(data);
		vSuccess('등록이 완료되었습니다.');
		// router.push({ name: 'PostList' });
	} catch (error) {
		console.log(error.response.data);
		vAlert(error.message);
	}
};
</script>

<style lang="scss" scoped></style>
