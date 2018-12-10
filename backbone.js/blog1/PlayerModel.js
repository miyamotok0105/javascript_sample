class PlayerModel extends Backbone.Model {
  constructor(lastName, firstName, number) {
    super();
    if (lastName) {
      this.set('lastName', lastName);
    }
    if (firstName) {
      this.set('firstName', firstName);
    }
    if (number) {
      this.set('number', number);
    }
  }

  defaults() {
    return {
      lastName: '緒方',
      firstName: '孝市',
      number: 79
    }
  }

  getName() {
    return this.get('lastName') + ' ' + this.get('firstName');
  }
}
