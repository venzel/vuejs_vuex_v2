<template>
    <div class="product">
        <Form />
        <List />
    </div>
</template>

<script>
import Form from '../components/product/Form.vue';
import List from '../components/product/List.vue';

export default {
    components: { Form, List },
};
</script>
