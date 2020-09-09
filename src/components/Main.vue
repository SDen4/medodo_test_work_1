<template>
    <div class="main__wrapper">
        <open-component
            v-if="showOpen"
            @openForm="handleOpenForm"
        ></open-component>
        <form-component
            v-if="showForm"
            @closeForm="handleCloseForm"
            @closeFormSucces="handleOpenDone"
        ></form-component>
        <done-component
            v-if="showDone"
            @returnToOpen="handleCloseForm"
            @returnToForm="handleOpenForm"
        ></done-component>
    </div>
</template>

<script>
    export default {
        components: {
            openComponent: ()=> import('./Open.vue'),
            formComponent: ()=> import('./Form.vue'),
            doneComponent: ()=> import('./Done.vue')
        },
        data() {
            return {
                showOpen: true,
                showForm: false,
                showDone: false
            }
        },
        methods: {
            handleOpenForm() {
                this.showOpen = false;
                this.showForm = true;
                this.showDone = false;
            },
            handleCloseForm() {
                this.showOpen = true;
                this.showForm = false;
                this.showDone = false;
            },
            handleOpenDone() {
                this.showOpen = false;
                this.showForm = false;
                this.showDone = true;
            }
        }
    }
</script>