<template>
    <div class="list">
        <h1>List</h1>
        <table>
            <tbody>
                <tr v-for="product in products" :key="product.name">
                    <td>{{ product.name }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    computed: {
        products() {
            return this.$store.state.product.products;
        },
    },
};
</script>
