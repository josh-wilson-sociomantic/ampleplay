/*global app*/
var PageView = require('./base');
var templates = require('../templates');
var MatchForm = require('../forms/match');

console.log( ' THISISHAPPENING' );

module.exports = PageView.extend({
    pageTitle: 'add match',
    template: templates.pages.matchAdd,
    initialize: function (spec) {
        var self = this;
        app.people.getOrFetch(spec.id, {all: true}, function (err, model) {
            if (err) alert('couldnt find a model with id: ' + spec.id);
            self.model = model;
        });
    },
    subviews: {
        form: {
            container: 'form',
            prepareView: function (el) {
                return new MatchForm({
                    el: el,
                    submitCallback: function (data) {
                        app.match.create(data, {
                            wait: true,
                            success: function () {
                                app.navigate('/collections');
                                app.people.fetch();
                            }
                        });
                    }
                });
            }
        }
    }
});
