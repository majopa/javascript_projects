// Person Model
var Person = Backbone.Model.extend( {

    defaults: {
        name: 'Guest User',
        age: 23,
        occupation: 'worker'

    },

    // call {validate:true} on declaration to check validations
    // example:     person.set('age', -1, {validate:true});
    validate: function(attributes) {

        if ( attributes.age <= 0 ){
            return 'Age must be positive.';
        }

        if ( !attributes.name ){
            return 'Every person must have a name.';
        }

    },

    work: function() {

        return this.get('name') + ' is working.';

    }

});

// A List of People
var PeopleCollection = Backbone.Collection.extend({
    model: Person
});

// View for all people
var PeopleView = Backbone.View.extend({
    tagName: 'ul',

    render: function(){
        this.collection.each(function(person){
            var personView = new PersonView({ model: person });
            this.$el.append(personView.render().el);
        }, this);
        return this;
    }
});

// The view for a Person
var PersonView = Backbone.View.extend({
    tagName: 'li',

    template: _.template($('#personTemplate').html()),

    render: function(){
        this.$el.html( this.template(this.model.toJSON()));
        return this;
    }
});

// Sample Data
var peopleCollection = new PeopleCollection([
    {
        name: 'Mohit Jain',
        age: 26
    },
    {
        name: 'Taroon Tyagi',
        age: 25,
        occupation: 'web designer'
    },
    {
        name: 'Rahul Narang',
        age: 26,
        occupation: 'Java Developer'
    }
]);

// in Chrome console

// var peopleView = new PeopleView({ collection: peopleCollection });
// $(document.body).append(peopleView.render().el);