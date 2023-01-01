<template>
	<div>
		<h2>게시글 수정</h2>
		<hr class="my-4" />
		<form @submit.prevent="edit">
			<div class="mb-3">
				<label for="title" class="form-label">제목</label>
				<input
					type="text"
					v-model="form.title"
					class="form-control"
					id="title"
				/>
			</div>
			<div class="mb-3">
				<label for="content" class="form-label">내용</label>
				<textarea
					class="form-control"
					id="content"
					rows="3"
					v-model="form.content"
				></textarea>
			</div>
			<div class="pt-4">
				<button
					type="button"
					class="btn btn-outline-danger me-2"
					@click="goDetailPage"
				>
					취소
				</button>
				<button class="btn btn-primary">수정</button>
			</div>
		</form>
	</div>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { getPostById, updatePost } from '@/api/posts';

const route = useRoute();
const router = useRouter();
const id = route.params.id;

const form = ref({
	title: null,
	content: null,
});

const fetchPost = async () => {
	try {
		const { data } = await getPostById(id);
		setPost(data);
	} catch (error) {
		console.error(error);
	}
};

const setPost = ({ title, content }) => {
	form.value.title = title;
	form.value.content = content;
};

fetchPost();
const edit = async () => {
	try {
		await updatePost(id, { ...form.value });
		router.push({ name: 'PostDetail', params: { id } });
	} catch (error) {
		console.error(error);
	}
};

const goDetailPage = () => router.push({ name: 'PostDetail', params: { id } });
</script>

<style lang="scss" scoped></style>
