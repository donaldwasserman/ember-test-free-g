6 lines (4 sloc)  107 Bytes
import DS from 'ember-data';

export default DS.Model.extend({
<%= attrs.length ? '  ' + attrs : '' %>
});
