var FormView = require('ampersand-form-view');
var InputView = require('ampersand-input-view');
var templates = require('../templates');
var ExtendedInput = InputView.extend({
    template: templates.includes.formInput()
});

module.exports = FormView.extend({
    fields: function () {
        return [
            new ExtendedInput({
                label: 'Winner',
                name: 'winner',
                value: this.model && this.model.winner,
                placeholder: 'Champion',
                parent: this
            }),
            new ExtendedInput({
                label: 'loser',
                name: 'loser',
                value: this.model && this.model.loser,
                placeholder: 'Looooooser',
                parent: this
            })
        ];
    }
});
