<template>
    <div class="form">
        <div class="form__wrapper">
            <h1 class="form__title">Добавить нового клиента</h1>
            <form class="form__form">
                <label class="form__label">
                    <div class="form__subtitle form__subtitle_required">Фамилия</div>
                    <input 
                        class="form__input" 
                        placeholder="Введите фамилию"
                        type="text"
                    >
                </label>
                <label class="form__label">
                    <div class="form__subtitle form__subtitle_required">Имя</div>
                    <input 
                        class="form__input" 
                        placeholder="Введите имя"
                        type="text"
                    >
                </label>
                <label class="form__label">
                    <div class="form__subtitle">Отчество</div>
                    <input 
                        class="form__input" 
                        placeholder="Введите Отчество"
                        type="text"
                    >
                </label>
                <label class="form__label">
                    <div class="form__subtitle form__subtitle_required">Дата рождения</div>
                    <input 
                        class="form__input" 
                        type="date"
                    >
                </label>
                <label class="form__label">
                    <div class="form__subtitle form__subtitle_required">Номер телефона</div>
                    <input 
                        class="form__input" 
                        placeholder="Введите номер телефона"
                        type="number"
                    >
                </label>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        // data() {
        //     return {
        //         message: "message!!!"
        //     }
        // }
    }
</script>