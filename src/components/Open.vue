<template>
    <div class="open">
        <button 
            class="button button__submit"
            @click="handleOpen"
        >Добавить нового клиента</button>
    </div>
</template>

<script>
    export default {
        methods: {
            handleOpen() {
                this.$emit('openForm');
            }
        }
    }
</script>