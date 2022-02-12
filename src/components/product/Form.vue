<template>
    <div class="form">
        <h1>Form add product</h1>
        <form>
            <input type="text" name="name" id="name" v-model="name" />
            <button type="submit" @click.prevent="addProduct">Adicionar</button>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: '',
        };
    },
    methods: {
        addProduct() {
            const data = {
                name: this.name,
            };

            this.$store.dispatch('actionAdd', data);
        },
    },
};
</script>
