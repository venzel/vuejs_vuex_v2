export default {
    state: {
        products: [{ name: 'gol' }],
    },
    mutations: {
        mutationAdd(state, payload) {
            state.products.push(payload);
        },
    },
    actions: {
        actionAdd(context, payload) {
            context.commit('mutationAdd', payload);
        },
    },
};
