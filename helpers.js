function is_group(layer) {
  return [layer isMemberOfClass:[MSLayerGroup class]] || [layer isMemberOfClass:[MSArtboardGroup class]]
}

function is_invisible_selectit(layer) {
	if([layer isVisible] == false) {
		[layer select:true byExpandingSelection:true]
	}
}

function searchChilds(layers) {
	for (var x=0; x < [layers count]; x++) {
		var childLayer = layers.array()[x];

		is_invisible_selectit(childLayer);

		if (is_group(childLayer)) {
			searchChilds([childLayer layers]);
		}
	}
}