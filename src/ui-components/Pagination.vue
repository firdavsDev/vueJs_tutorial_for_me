<template>
<div class="mt-5">
    <nav aria-label="Page navigation">
        <ul class="pagination justify-content-center">
            <li class="page-item page-item" v-for="page_number in total" :key='page_number' :class="{'active': page_number === page}">
                <a class="page-link"  @click="change_page(page_number)">{{page_number}}
                </a>
            </li>
        </ul>
    </nav>
</div>
</template>
<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Pagination',
    props: {
        total: {
            type: Number,
            required: true
        },
        page: {
            type: Number,
            required: true
        }
    },
    methods: {
        change_page(page_number) { 
            this.$emit('change_page', page_number)
        }
    }
}
</script>

<style>
.page-item {
    cursor: pointer;
}
</style>