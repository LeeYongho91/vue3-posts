<template>
	<div>
		<h2>게시글 목록</h2>
		<hr class="my-4" />
		<div class="row g-3">
			<div class="col-4" v-for="post in posts" :key="post.id">
				<PostItem
					:title="post.title"
					:content="post.content"
					:createdAt="post.createdAt"
					@click="goPage(post.id)"
				></PostItem>
			</div>
		</div>
		<hr class="my-4" />
		<AppCard> <PostDetailView id="2"></PostDetailView></AppCard>
	</div>
</template>

<script setup>
import PostItem from '@/components/posts/PostItem.vue';
import PostDetailView from '@/views/posts/PostDetailView.vue';
import AppCard from '@/components/AppCard.vue';
import { getPosts } from '@/api/posts';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const posts = ref([]);
const router = useRouter();

const fetchPosts = () => {
	posts.value = getPosts();
};

const goPage = id => {
	router.push({
		name: 'PostDetail',
		params: {
			id,
		},
	});
};

fetchPosts();
</script>

<style lang="scss" scoped></style>
