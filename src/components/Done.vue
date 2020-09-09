<template>
    <div class="done">
        <div class="done__window">
            <div class="done__text">
                Клиент успешно создан!
            </div>
            <div class="done__text done__text_note">
                *данные отображены в консоли
            </div>
            <div class="done__buttons_wrapper">
                <button 
                    class="button button__submit"
                    @click="handleBack"
                >Назад</button>
                <button 
                    class="button button__submit"
                    @click="handleAgain"
                >Добавить ещё одного клиента</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        methods: {
            handleBack() {
                console.log("return to open window");
                this.$emit('returnToOpen');
            },
            handleAgain() {
                console.log("return to new clear form");
                this.$emit('returnToForm');
            }
        }
    }
</script>