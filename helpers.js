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