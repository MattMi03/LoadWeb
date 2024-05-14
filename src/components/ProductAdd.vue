<template>
    <input type="text" v-model="product_name" placeholder="Product Name" />
    <input type="text" v-model="product_introduction" placeholder="Product Introduction" />
    <input type="text" v-model="product_information" placeholder="Product Information" />
    <button @click="addProduct">Add Product</button>
</template>

<script>

export default {
    data() {
        return {
            product_id: '',
            product_name: '',
            product_introduction: '',
            product_information: ''
        };
    },
    mounted() {
        console.log('id: '+ this.product_id);
    },
    methods: {
        addProduct() {
            if (!this.product_name || !this.product_introduction || !this.product_information) {
                alert('Product Name, Product Introduction and Product Information are required');
                return;
            }
            else {
                fetch('http://localhost:3000/productadd', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        product_name: this.product_name,
                        product_introduction: this.product_introduction,
                        product_information: this.product_information
                    })
                })
                    .catch(error => console.error('Error:', error))
            }
            window.location.href = '/homepage';
        }
    }
};
</script>