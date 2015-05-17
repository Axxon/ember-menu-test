import DS from "ember-data";

var Category = DS.Model.extend({
  text: DS.attr('string'),
  parent: DS.belongsTo('category', {inverse: 'children'}),
  children: DS.hasMany('category', {inverse: 'parent'})
});

Category.reopenClass({
  FIXTURES: [
    {
      id: 1,
      text: 'category_test1',
      children: [2,3],
      parent: null
    },
    {
      id: 2,
      text: 'category_sub1',
      parent: 1,
      children: null
    },
    {
      id: 3,
      text: 'category_sub2',
      parent: 1,
      children: null
    }
  ]
});

export default Category;