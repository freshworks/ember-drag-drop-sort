This is a fork of https://github.com/venkateshg5887/ember-sortable updated to support freshservice's use cases.
In the future we will try to merge this with the parent branch.
ember-drag-drop-sort
==============================================================================

Ember addon to drag drop sort within swinlanes.


Compatibility
------------------------------------------------------------------------------

* Ember.js v3.12 or above
* Ember CLI v2.13 or above
* Node.js v10 or above


Installation
------------------------------------------------------------------------------

```
ember install ember-drag-drop-sort
```


Usage
------------------------------------------------------------------------------

template file
```hbs
  <SortPane @group={{1}} @onDrop={{this.test}} @items={{this.model.squadA}} as |sortable|>
    <sortable.item as |item|>
      {{item.content}}
    </sortable.item>
  </SortPane>
  <SortPane @group={{1}} @containment=".kanban-board" @items={{this.model.squadB}} as |sortable|>
    <sortable.item as |item|>
      {{item.content}}
    </sortable.item>
  </SortPane>
```

component.js file
```js
get model()  {
	return {
		squadA: A(['Ghanesh', 'Shyam', 'Karthick Kalyanasundaram', 'Rajesh']),
		squadB: A(['Prathees', 'Venkatesh', 'Albert', 'Ramya', 'Prathees', 'Venkatesh', 'Albert', 'Ramya')
	}
}
```

Improvements done to support freshservice
1. Converted the addon to Octane.
2. Introduced "appendTo" to append the dragged card to the passed element instead of the body to afford some CSS styling.
3. Introduced "preventDragClasses"(array of classes) so on clicking any of these elements within a card, the drag will not be initiated. This is done to accommodate quick actions within the card.
4. Renamed sortable-item component to sortable-card, since ember-sortable has the same name for one of its components and conflicts with our addon.
5.  Added "addon-test-support/drag.js" to support writing test cases in the host application for drag & drop. => inspired from https://github.com/adopted-ember-addons/ember-sortable/blob/master/addon-test-support/helpers/drag.js
6. We introduced horizontal sort of swimlanes as well. but it had heavy efforts to get rid of the mouse event conflicts with a card sort. So the dev done for this is commented for now in the PR. Might visit in future.

Bugs and performance fixes done
1) Dragging a card from the bottom seems to set the placeholder in the wrong position.
2) as soon as the mouse down happens cloning of the element is done. Moving this to only on start dragging happens, since we have quick actions on the card.
