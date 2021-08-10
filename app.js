const app = Vue.createApp({
  data() {
    return {
      inputVal: '',
      confirmedInputVal: ''
    };
  },
  methods: {
    showAlert() {
      alert('This is an alert!');
    },
    userInput(event) {
      this.inputVal = event.target.value;
    },
    confirmInput() {
      this.confirmedInputVal = this.inputVal;
    }
  }
});

app.mount('#assignment');
