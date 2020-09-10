<template>
    <div class="form">
        <div class="form__wrapper">
            <h1 class="form__title">Добавить нового клиента</h1>
            <form class="form__form" @submit.prevent="handleSubmit">
                <div class="form__block">
                    <label
                        class="form__label"
                        :class="{form__label_error: ($v.patient.surname.$dirty && !$v.patient.surname.required)}"
                    >
                        <div 
                            class="form__subtitle form__subtitle_required"
                        >Фамилия</div>
                        <input
                            class="form__input"
                            placeholder="Введите фамилию"
                            type="text"
                            v-model.trim="patient.surname"
                            :class="{form__input_error: ($v.patient.surname.$dirty && !$v.patient.surname.required)}"
                        >
                    </label>
                    <label
                        class="form__label"
                        :class="{form__label_error: ($v.patient.name.$dirty && !$v.patient.name.required)}"
                    >
                        <div class="form__subtitle form__subtitle_required">Имя</div>
                        <input
                            class="form__input"
                            placeholder="Введите имя"
                            type="text"
                            v-model.trim="patient.name"
                            :class="{form__input_error: ($v.patient.name.$dirty && !$v.patient.name.required)}"
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
                                value="Male"
                                v-model="patient.sex"
                            >
                            <div class="form__subtitle_small">Ж</div>
                            <input
                                class="form__input form__input_radio"
                                type="radio"
                                name="sex"
                                value="Female"
                                v-model="patient.sex"
                            >
                        </div>
                    </label>
                </div>
                <div class="form__block">
                    <label
                        class="form__label"
                        :class="{form__label_error: ($v.patient.birthDate.$dirty && !$v.patient.birthDate.required)}"
                    >
                        <div class="form__subtitle form__subtitle_required">Дата рождения</div>
                        <input 
                            class="form__input"
                            type="date"
                            v-model="patient.birthDate"
                            :class="{form__input_error: ($v.patient.birthDate.$dirty && !$v.patient.birthDate.required)}"
                        >
                    </label>
                    <label
                        class="form__label"
                        :class="{form__label_error: ($v.patient.phone.$dirty && !$v.patient.phone.required), form__label_error_length: ($v.patient.phone.$dirty && !$v.patient.phone.between)}"
                    >
                        <div class="form__subtitle form__subtitle_required">Номер телефона</div>
                        <input
                            class="form__input"
                            placeholder="Введите номер телефона"
                            type="number"
                            maxLength="11"
                            oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
                            v-model="patient.phone"
                            :class="{form__input_error: ($v.patient.phone.$dirty && !$v.patient.phone.required)}"
                        >
                    </label>
                </div>
                <div class="form__block">
                    <label
                        class="form__label"
                        :class="{form__label_error: ($v.patient.typeOfClient.$dirty && !$v.patient.typeOfClient.required)}"
                    >
                        <div class="form__subtitle form__subtitle_required">Группа клиентов</div>
                        <select
                            class="form__input form__select_client"
                            v-model="patient.typeOfClient"
                            :class="{form__input_error: ($v.patient.typeOfClient.$dirty && !$v.patient.typeOfClient.required)}"
                        >
                            <option disabled selected value="">Выбрать группу клиентов</option>
                            <option >VIP</option>
                            <option>Проблемные</option>
                            <option>ОМС</option>
                        </select>
                    </label>
                    <label class="form__label">
                        <div class="form__subtitle">Лечащий врач</div>
                        <select class="form__input form__select_client" v-model="patient.doctor">
                            <option disabled selected value="">Выбрать врача</option>
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
                    <label
                        class="form__label"
                        :class="{form__label_error: ($v.patient.town.$dirty && !$v.patient.town.required)}"
                    >
                        <div class="form__subtitle form__subtitle_required">Город</div>
                        <input
                            class="form__input"
                            placeholder="Введите город"
                            type="text"
                            v-model="patient.town"
                            :class="{form__input_error: ($v.patient.town.$dirty && !$v.patient.town.required)}"
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
                    <label
                        class="form__label"
                        :class="{form__label_error: ($v.patient.documentType.$dirty && !$v.patient.documentType.required)}"
                    >
                        <div class="form__subtitle form__subtitle_required">Тип документа</div>
                        <select
                            class="form__input form__select_client"
                            v-model="patient.documentType"
                            :class="{form__input_error: ($v.patient.documentType.$dirty && !$v.patient.documentType.required)}"
                        >
                            <option disabled selected value="">Выбрать документ</option>
                            <option>Паспорт</option>
                            <option>Свидетельство о рождении</option>
                            <option>Вод.удостоверение</option>
                        </select>
                    </label>
                    <label class="form__label">
                        <div class="form__subtitle_small">Серия</div>
                        <input
                            class="form__input form__input_small"
                            type="text"
                            v-model="patient.documentSeries"
                        >
                        <div class="form__subtitle_small">Номер</div>
                        <input
                            class="form__input"
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
                            placeholder="Введите учреждение"
                            type="text"
                            v-model="patient.issuedBy"
                        >
                    </label>
                    <label
                        class="form__label"
                        :class="{form__label_error: ($v.patient.issuedDate.$dirty && !$v.patient.issuedDate.required)}"
                    >
                        <div class="form__subtitle form__subtitle_required">Дата выдачи</div>
                        <input 
                            class="form__input"
                            type="date"
                            v-model="patient.issuedDate"
                            :class="{form__input_error: ($v.patient.issuedDate.$dirty && !$v.patient.issuedDate.required)}"
                        >
                    </label>
                    <div class="form__notice">* Поле обязательное для заполнения</div>
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
    import { required, between } from 'vuelidate/lib/validators'
    export default {
        data: () => ({
            patient: {
                surname: "",
                name: "",
                patronym: "",
                sex: "",
                birthDate: "",
                phone: 7,
                typeOfClient: "",
                doctor: "",
                sms: false,
                zipCode: null,
                country: "",
                region: "",
                town: "",
                street: "",
                house: "",
                documentType: "",
                documentSeries: "",
                documentNumber: null,
                issuedBy: "",
                issuedDate: ""
            }
        }),
        validations: {
            patient: {
                surname: {required},
                name: {required},
                birthDate: {required},
                phone: {required, between: between(70000000000, 79999999999)},
                typeOfClient: {required},
                town: {required},
                documentType: {required},
                issuedDate: {required}
            }
        },
        methods: {
            handleSubmit() {
                if (this.$v.$invalid) {
                    this.$v.$touch();
                    return;
                };
                console.log(this.patient)
                this.$emit('closeFormSucces');
            },
            handleReset() {
                this.$emit('closeForm');
            }
        }
    }
</script>