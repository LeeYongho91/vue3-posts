<template>
	<div>
		<h2>게시글 목록</h2>
		<hr class="my-4" />
		<PostFilter
			v-model:title="params.title_like"
			v-model:limit="params._limit"
		/>
		<hr class="my-4" />

		<AppLoading v-if="loading" />
		<AppError v-else-if="error" :message="error.message" />
		<template v-else>
			<AppGrid :items="posts" v-slot="{ item }">
				<PostItem
					:title="item.title"
					:content="item.content"
					:createdAt="item.createdAt"
					@click="goPage(item.id)"
					@modal="openModal(item)"
				></PostItem
			></AppGrid>

			<AppPagination
				:current-page="params._page"
				:page-count="pageCount"
				@page="page => (params._page = page)"
			/>
		</template>

		<Teleport to="#modal">
			<PostModal
				v-model="show"
				:title="modalTitle"
				:content="modalContent"
				:createdAt="modalCreatedAt"
			/>
		</Teleport>
	</div>
</template>

<script setup>
import PostItem from '@/components/posts/PostItem.vue';
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import PostFilter from '@/components/posts/PostFilter.vue';
import PostModal from '@/components/posts/PostModal.vue';
import { useAxios } from '@/hooks/useAxios';

const router = useRouter();

const params = ref({
	_sort: 'createdAt',
	_order: 'desc',
	_page: 1,
	_limit: 3,
	title_like: '',
});

const {
	data: posts,
	error,
	loading,
	response,
} = useAxios('/posts', { method: 'get', params });

const totalCount = computed(() => response.value.headers['x-total-count']);
const pageCount = computed(() =>
	Math.ceil(totalCount.value / params.value._limit),
);

// const fetchPosts = async () => {
// 	try {
// 		loading.value = true;
// 		const { data, headers } = await getPosts(params.value);
// 		posts.value = data;
// 		totalCount.value = headers['x-total-count'];
// 	} catch (err) {
// 		error.value = err;
// 	} finally {
// 		loading.value = false;
// 	}
// };

// fetchPosts();

// watchEffect(fetchPosts);

const goPage = id => {
	router.push({
		name: 'PostDetail',
		params: {
			id,
		},
	});
};

const show = ref(false);
const modalTitle = ref('');
const modalContent = ref('');
const modalCreatedAt = ref('');

const openModal = ({ title, content, createdAt }) => {
	show.value = true;
	modalTitle.value = title;
	modalContent.value = content;
	modalCreatedAt.value = createdAt;
};
</script>

<style lang="scss" scoped></style>
