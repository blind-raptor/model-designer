$(document).ready(function() {
    var fieldListCollection = new App.Collections.List([
        {name: 'integer'},
        {name: 'tinyint'},
        {name: 'char'},
        {name: 'varchar'},
        {name: 'text'}
    ]);
    var fieldListView = new FieldListView({
        el: '#field-list-group',
        collection: fieldListCollection
    });
});