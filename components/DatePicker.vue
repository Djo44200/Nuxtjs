<template>
  <v-layout class="date-picker-ctn">
    <v-menu
      v-model="fromDateMenu"
      :close-on-content-click="false"
      :nudge-right="40"
      transition="scale-transition"
      offset-y
      max-width="290px"
      min-width="290px"
    >
      <template v-slot:activator="{ on }">
        <span class="title-datepicker">{{ title }} : </span>
        <v-text-field
          class="input-date"
          readonly
          :value="fromDateDisp"
          v-on="on"
        ></v-text-field>
      </template>
      <v-date-picker
        locale="fr-fr"
        :min="minDate"
        :max="maxDate"
        v-model="fromDateVal"
        no-title
        @input="fromDateMenu = false"
      ></v-date-picker>
    </v-menu>
  </v-layout>
</template>
<script>
export default {
  name: 'DatePicker',
  props: {
    title: { type: String, default: '' },
    minDate: { type: String, default: '' },
    maxDate: { type: String, default: '' },
  },
  data() {
    return {
      fromDateMenu: false,
      fromDateVal: null,
    }
  },
  computed: {
    fromDateDisp() {
      this.$emit('newDatePicker', this.fromDateVal)
      return this.fromDateVal
      // format date, apply validations, etc. Example below.
      // return this.fromDateVal ? this.formatDate(this.fromDateVal) : "";
    },
  },
}
</script>
<style lang="scss">
.date-picker-ctn {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  input {
    padding-top: 3vh !important;
  }
  .title-datepicker {
    display: flex;
    align-items: center;
    margin-right: 1vw;
  }
  .input-date {
    max-width: 50%;
    margin-top: 0px !important;
  }
}
</style>
