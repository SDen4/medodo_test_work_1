<template>
    <div class="form">
        <div class="form__wrapper">
            <h1 class="form__title">Добавить нового клиента</h1>
            <form class="form__form" @submit.prevent="handleSubmit">
                <div class="form__block">
                    <label class="form__label">
                        <div class="form__subtitle form__subtitle_required">Фамилия</div>
                        <input
                            class="form__input"
                            placeholder="Введите фамилию"
                            type="text"
                            v-model="patient.surname"
                        >
                    </label>
                    <label class="form__label">
                        <div class="form__subtitle form__subtitle_required">Имя</div>
                        <input
                            class="form__input"
                            placeholder="Введите имя"
                            type="text"
                            v-model="patient.name"
                        >
                    </label>
                    <label class="form__label">
                        <div class="form__subtitle">Отчество</div>
                        <input
                            class="form__input"
                            placeholder="Введите Отчество"
                            type="text"
                            v-model="patient.patronym"
                        >
                    </label>
                    <label class="form__label">
                        <div class="form__subtitle">Пол</div>
                        <div class="form__input_block">
                            <div class="form__subtitle_small">М</div>
                            <input
                                class="form__input form__input_radio"
                                type="radio"
                                name="sex"
                                v-model="patient.sexM"
                            >
                            <div class="form__subtitle_small">Ж</div>
                            <input
                                class="form__input form__input_radio"
                                type="radio"
                                name="sex"
                                v-model="patient.sexW"
                            >
                        </div>
                    </label>
                </div>
                <div class="form__block">
                    <label class="form__label">
                        <div class="form__subtitle form__subtitle_required">Дата рождения</div>
                        <input 
                            class="form__input"
                            type="date"
                            v-model="patient.birthDate"
                        >
                    </label>
                    <label class="form__label">
                        <div class="form__subtitle form__subtitle_required">Номер телефона</div>
                        <input
                            class="form__input"
                            placeholder="Введите номер телефона"
                            type="number"
                            v-model="patient.phone"
                        >
                    </label>
                </div>
                <div class="form__block">
                    <label class="form__label">
                        <div class="form__subtitle form__subtitle_required">Группа клиентов</div>
                        <select class="form__input form__select_client" v-model="patient.type">
                            <option >VIP</option>
                            <option>Проблемные</option>
                            <option>ОМС</option>
                        </select>
                    </label>
                    <label class="form__label">
                        <div class="form__subtitle">Лечащий врач</div>
                        <select class="form__input form__select_client" v-model="patient.doctor">
                            <option>Иванов</option>
                            <option>Захаров</option>
                            <option>Чернышева</option>
                        </select>
                    </label>
                    <label class="form__label form__label_checkbox">
                        <div class="form__subtitle">Не отправлять SMS</div>
                        <input 
                            type="checkbox"
                            class="form__input form__input_checkbox"
                            v-model="patient.sms"
                        >
                    </label>
                </div>
                <div class="form__block">
                    <label class="form__label">
                        <div class="form__subtitle">Индекс</div>
                        <input
                            class="form__input"
                            placeholder="Введите индекс"
                            type="number"
                            v-model="patient.zipCode"
                        >
                    </label>
                    <label class="form__label">
                        <div class="form__subtitle">Страна</div>
                        <input
                            class="form__input"
                            placeholder="Введите страну"
                            type="text"
                            v-model="patient.country"
                        >
                    </label>
                    <label class="form__label">
                        <div class="form__subtitle">Область</div>
                        <input
                            class="form__input"
                            placeholder="Введите область"
                            type="text"
                            v-model="patient.region"
                        >
                    </label>
                </div>
                <div class="form__block">
                    <label class="form__label">
                        <div class="form__subtitle form__subtitle_required">Город</div>
                        <input
                            class="form__input"
                            placeholder="Введите город"
                            type="text"
                            v-model="patient.town"
                        >
                    </label>
                    <label class="form__label">
                        <div class="form__subtitle">Улица</div>
                        <input
                            class="form__input"
                            placeholder="Введите улицу"
                            type="text"
                            v-model="patient.street"
                        >
                    </label>
                    <label class="form__label">
                        <div class="form__subtitle">Дом</div>
                        <input
                            class="form__input"
                            placeholder="Введите номер дома"
                            type="text"
                            v-model="patient.house"
                        >
                    </label>
                </div>
                <div class="form__block">
                    <label class="form__label">
                        <div class="form__subtitle form__subtitle_required">Тип документа</div>
                        <select class="form__input form__select_client" v-model="patient.document">
                            <option>Паспорт</option>
                            <option>Свидетельство о рождении</option>
                            <option>Вод.удостоверение</option>
                        </select>
                    </label>
                    <label class="form__label">
                        <div class="form__subtitle_small">Серия</div>
                        <input
                            class="form__input"
                            type="text"
                            v-model="patient.documentSeries"
                        >
                        <div class="form__subtitle_small">Номер</div>
                        <input
                            class="form__input form__input_small"
                            type="number"
                            v-model="patient.documentNumber"
                        >
                    </label>
                </div>
                <div class="form__block">
                    <label class="form__label">
                        <div class="form__subtitle">Кем выдан</div>
                        <input
                            class="form__input"
                            placeholder="Введите номер дома"
                            type="text"
                            v-model="patient.issuedBy"
                        >
                    </label>
                    <label class="form__label">
                        <div class="form__subtitle form__subtitle_required">Дата выдачи</div>
                        <input 
                            class="form__input"
                            type="date"
                            v-model="patient.issuedDate"
                        >
                    </label>
                    <div class="form__button_wrapper">
                        <button
                            class="button button__reset"
                            type="Reset"
                            @click="handleReset"
                        >Отмена</button>
                        <button
                            class="button button__submit"
                            type="submit"
                        >Сохранить</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                patient: {
                    surname: "",
                    name: "",
                    patronym: "",
                    sexM: false,
                    sexW: false,
                    birthDate: "",
                    phone: null,
                    type: "",
                    doctor: "",
                    sms: false,
                    zipCode: null,
                    country: "",
                    region: "",
                    town: "",
                    street: "",
                    house: "",
                    document: "",
                    documentSeries: "",
                    documentNumber: null,
                    issuedBy: "",
                    issuedDate: ""
                }
            }
        },
        methods: {
            handleSubmit() {
                console.log('submit!')
                console.log(this.patient)
                this.$emit('closeFormSucces');
            },
            handleReset() {
                console.log('reset!');
                this.$emit('closeForm');
            }
        }
    }
</script>