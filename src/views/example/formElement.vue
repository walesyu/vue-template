<template>
  <div class="form-elements">
    <div class="va-row">
      <div class="flex md12">
        <vuestic-widget header-text="Inputs">
          <form>
            <div class="va-row">
              <div class="flex md4">
                <fieldset>
                  <div class="form-group">
                    <div class="input-group">
                      <input id="simple-input" required>
                      <label class="control-label" for="simple-input">
                        textInput
                      </label><i class="bar" />
                    </div>
                  </div>
                  <div class="form-group with-icon-right" :class="{'has-error': errors.has('successfulEmail'), 'valid': isSuccessfulEmailValid}">
                    <div class="input-group">
                      <input id="successfulEmail" v-model="successfulEmail" v-validate="'required|email'" name="successfulEmail" required>
                      <i class="fa fa-exclamation-triangle error-icon icon-right input-icon" />
                      <i class="fa fa-check valid-icon icon-right input-icon" />
                      <label class="control-label" for="successfulEmail">
                        email Validated Success
                      </label><i class="bar" />
                      <small v-show="errors.has('successfulEmail')" class="help text-danger">
                        {{ errors.first('successfulEmail') }}
                      </small>
                    </div>
                  </div>
                  <div class="form-group with-icon-right" :class="{'has-error': errors.has('wrongEmail')}">
                    <div class="input-group">
                      <input id="wrongEmail" v-model="wrongEmail" v-validate="'required|email'" name="wrongEmail" required>
                      <i v-show="errors.has('wrongEmail')" class="fa fa-exclamation-triangle icon-right input-icon" />
                      <label class="control-label" for="wrongEmail">
                        email Validated
                      </label><i class="bar" />
                      <small v-show="errors.has('wrongEmail')" class="help text-danger">
                        {{ errors.first('wrongEmail') }}
                      </small>
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="input-group">
                      <textarea id="simple-textarea" type="text" required />
                      <label class="control-label" for="simple-textarea">
                        textArea
                      </label><i class="bar" />
                    </div>
                  </div>
                </fieldset>
              </div>
              <div class="flex md4">
                <fieldset>
                  <div class="form-group with-icon-left">
                    <div class="input-group">
                      <input id="input-icon-left" name="input-icon-left" required>
                      <i class="fa fa-envelope-o icon-left input-icon" />
                      <label class="control-label" for="input-icon-left">
                        inputWithIcon
                      </label><i class="bar" />
                    </div>
                  </div>
                  <div class="form-group with-icon-right">
                    <div class="input-group">
                      <input
                        id="clear-input"
                        v-model="clearableText"
                        name="clear-input"
                        required
                      >
                      <i class="fa fa-times icon-right input-icon pointer" @click="clear('clearableText')" />
                      <label class="control-label" for="clear-input" role="button">
                        inputWithClearButton
                      </label><i class="bar" />
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="input-group">
                      <input id="inputWithDescription" required title="">
                      <label class="control-label" for="simple-input">
                        textInputWithDescription
                      </label><i class="bar" />
                      <small class="help text-secondary">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed
                        do eiusmod tempor incididunt ut labore et dolore magna
                        aliqua.
                      </small>
                    </div>
                  </div>
                </fieldset>
              </div>
              <div class="flex md4">
                <fieldset>
                  <div class="form-group form-group-w-btn">
                    <div class="input-group">
                      <input id="input-w-btn" required>
                      <label class="control-label" for="input-w-btn">
                        inputWithButton
                      </label><i class="bar" />
                    </div>
                    <div class="btn btn-micro btn-primary">
                      upload
                    </div>
                  </div>
                  <div class="form-group form-group-w-btn">
                    <div class="input-group">
                      <input id="input-w-btn-round" required>
                      <label class="control-label" for="input-w-btn-round">
                        inputWithRoundButton
                      </label><i class="bar" />
                    </div>
                    <div
                      class="btn btn-primary btn-with-icon btn-micro rounded-icon"
                    >
                      <div class="btn-with-icon-content">
                        <i class="ion-md-cloud-outline ion" />
                      </div>
                    </div>
                  </div>
                </fieldset>
              </div>
            </div>
          </form>
        </vuestic-widget>
      </div>
    </div>
    <div class="va-row">
      <div class="flex md12">
        <vuestic-widget :header-text="$t('forms.dateTimePicker.title')">
          <vuestic-widget :header-text="$t('forms.dateTimePicker.title')">
            d
            <form>
              <div class="va-row">
                <div class="flex md4">
                  <fieldset>
                    <div class="form-group">
                      <div class="input-group">
                        <vuestic-date-picker id="date-picker-basic" v-model="datepicker.simple" />
                        <label class="control-label" for="date-picker-basic">
                          {{ $t('forms.dateTimePicker.basic') }}
                        </label>
                        <i class="bar" />
                      </div>
                    </div>
                    <div class="form-group">
                      <div class="input-group">
                        <vuestic-date-picker id="date-picker-time" v-model="datepicker.time" :config="{enableTime: true}" />
                        <label class="control-label" for="date-picker-time">
                          {{ $t('forms.dateTimePicker.time') }}
                        </label>
                        <i class="bar" />
                      </div>
                    </div>
                    <div class="form-group">
                      <div class="input-group">
                        <vuestic-date-picker id="date-picker-custom-first-day" v-model="datepicker.customFirstDay" :config="{locale: {firstDayOfWeek: 1}}" />
                        <label class="control-label" for="date-picker-custom-first-day">
                          {{ $t('forms.dateTimePicker.customFirstDay') }}
                        </label>
                        <i class="bar" />
                      </div>
                    </div>
                  </fieldset>
                </div>
                <div class="flex md4">
                  <fieldset>
                    <div class="form-group">
                      <div class="input-group">
                        <vuestic-date-picker id="date-picker-disabled" v-model="datepicker.disabled" :config="{disable: datePickerDisabled}" />
                        <label class="control-label" for="date-picker-disabled">
                          {{ $t('forms.dateTimePicker.disabled') }}
                        </label>
                        <i class="bar" />
                      </div>
                    </div>
                    <div class="form-group">
                      <div class="input-group">
                        <vuestic-date-picker id="date-picker-multiple" v-model="datepicker.multiple" :config="{mode: 'multiple'}" />
                        <label class="control-label" for="date-picker-multiple">
                          {{ $t('forms.dateTimePicker.multiple') }}
                        </label>
                        <i class="bar" />
                      </div>
                    </div>
                    <div class="form-group">
                      <div class="input-group">
                        <vuestic-date-picker id="date-picker-custom-date-format" v-model="datepicker.customDate" :config="{altInput: true, altFormat: 'F j, Y'}" />
                        <label class="control-label" for="date-picker-custom-date-format">
                          {{ $t('forms.dateTimePicker.customDateFormat') }}
                        </label>
                        <i class="bar" />
                      </div>
                    </div>
                  </fieldset>
                </div>
                <div class="flex md4">
                  <fieldset>
                    <div class="form-group">
                      <div class="input-group">
                        <vuestic-date-picker id="date-picker-range" v-model="datepicker.range" :config="{mode: 'range', inline: true}" />
                        <label class="control-label" for="date-picker-range">
                          {{ $t('forms.dateTimePicker.range') }}
                        </label>
                      </div>
                    </div>
                  </fieldset>
                </div>
              </div>
            </form>
          </vuestic-widget>
        </vuestic-widget>
      </div>
    </div>

    <div class="va-row">
      <div class="flex md12">
        <vuestic-widget header-text="title">
          <form>
            <div class="va-row">
              <div class="flex md3">
                <fieldset>
                  <vuestic-checkbox v-model="checkbox.unselected" :label="$t('forms.controls.unselected')" />
                  <vuestic-checkbox v-model="checkbox.selected" :label="$t('forms.controls.selected')" />
                  <vuestic-checkbox v-model="checkbox.readonly" :label="$t('forms.controls.readonly')" :readonly="true" />
                  <vuestic-checkbox v-model="checkbox.disabled" :label="$t('forms.controls.disabled')" :disabled="true" />
                  <vuestic-checkbox v-model="checkbox.error" :label="$t('forms.controls.error')" error />
                  <vuestic-checkbox v-model="checkbox.errorMessages" :label="$t('forms.controls.errorMessage')" :error-messages="errorMessages" :error-count="2" />
                </fieldset>
              </div>
              <div class="flex md3">
                <fieldset>
                  <vuestic-radio-button v-model="radioSelectedOption" option="option1" label="Radio" />
                  <vuestic-radio-button v-model="radioSelectedOption" option="option2" label="Radio" />
                </fieldset>
                <fieldset>
                  <vuestic-radio-button v-model="radioSelectedDisableOption" option="option1" disabled label="Disabled Radio" />
                  <vuestic-radio-button v-model="radioSelectedDisableOption" option="option2" disabled label="Disabled Radio" />
                </fieldset>
              </div>
              <div class="flex md3">
                <fieldset>
                  <vuestic-switch v-model="isMale">
                    <span slot="trueTitle">
                      male
                    </span>
                    <span slot="falseTitle">
                      female
                    </span>
                  </vuestic-switch>
                </fieldset>
              </div>
            </div>
          </form>
        </vuestic-widget>
      </div>
    </div>
  </div>
</template>

<script>
import CountriesList from '@/data/CountriesList'

export default {
  name: 'FormElements',
  data() {
    return {
      isMale: true,
      countriesList: CountriesList,
      chosenCountry: '',
      clearableText: '',
      successfulEmail: 'andrei@dreamsupport.io',
      wrongEmail: 'andrei@dreamsupport',
      simpleOptions: [
        {
          id: 1,
          description: 'First option'
        },
        {
          id: 2,
          description: 'Second option'
        },
        {
          id: 3,
          description: 'Third option'
        }
      ],
      simpleSelectModel: '',
      multiSelectModel: [],
      multiSelectCountriesModel: [],
      radioSelectedOption: 'option1',
      radioSelectedDisableOption: 'option1',
      checkbox: {
        unselected: false,
        selected: true,
        readonly: true,
        disabled: true,
        error: false,
        errorMessages: true
      },
      errorMessages: ['error message 1', 'error message 2'],
      datepicker: {
        simple: '2018-05-09',
        time: '2018-05-08 14:10',
        range: '2018-05-08 to 2018-05-23',
        disabled: '2018-05-09',
        multiple: '2018-04-25, 2018-04-27',
        customFirstDay: '2018-05-09',
        customDate: '2018-05-09'
      }
    }
  },
  computed: {
    datePickerDisabled: () => [date => !(date.getDate() % 5)],
    isSuccessfulEmailValid() {
      let isValid = false
      if (this.formFields.successfulEmail) {
        isValid = this.formFields.successfulEmail.validated && this.formFields.successfulEmail.valid
      }
      return isValid
    }
  },
  created() {
    this.$nextTick(() => {
      this.$validator.validateAll()
    })
  },
  methods: {
    clear(field) {
      this[field] = ''
    }
  }
}
</script>
