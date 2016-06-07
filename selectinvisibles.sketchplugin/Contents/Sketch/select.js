// check the layer, it is a group or a layer
function is_group(layer) {
  return [layer isMemberOfClass:[MSLayerGroup class]] || [layer isMemberOfClass:[MSArtboardGroup class]]
}

// if the layer is a invisible, select it
function is_invisible_selectit(layer) {
	if([layer isVisible] == false) {
		[layer select:true byExpandingSelection:true]
	}
}

// if the layer has a child, search its invisible children.
function searchChilds(layers) {
	for (var x=0; x < [layers count]; x++) {
		var childLayer = layers.array()[x];

		is_invisible_selectit(childLayer);

		if (is_group(childLayer)) {
			searchChilds([childLayer layers]);
		}
	}
}

var onRun = function(context) {
  // select the document
  var doc = context.document

  // deselect all layers of the document
  [[doc currentPage] deselectAllLayers]

  // get all layers in the document
  var all_layers = [[doc currentPage] layers]

  // a loop for all layers of the document
  for(var i=0; i < [all_layers count]; i++) {

  	// get the layer with 'i' variable of the loop
  	var layer = all_layers.objectAtIndex(i)

  	// if it is a invis layer, select it -function
  	is_invisible_selectit(layer)

  	// if the layer is a group, check children objects of that
  	if (is_group(layer)) {
  		// call the recursive function to find the children of that
  		searchChilds([layer layers])
  	}
  }
}
