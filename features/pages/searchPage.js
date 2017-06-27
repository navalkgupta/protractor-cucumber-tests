// Page class for search page

var SearchPage = function() {

	this.searchBox = element(by.css('.input_search'));
	this.suggestions = element.all(by.css('.dropdown_list_item.suggestion'));
	this.itemTitle = by.css('.dropdown_list_item_title');
	
	this.name = element(by.css('.name>h1'));
	this.getDirections = element(by.css('.btn.btn_block.btn_directions_cta'));
	this.fromLocation = element(by.id('itinerary_item_input_0'));
	
	this.recommendedRoutes = element(by.css('routes_list_label'));
	this.routeList = element.all(by.css('.route_list_result'));
	this.saveRoute = element(by.css('#saveRoute>button'));
	this.closeRoute = element(by.css('.close_button'));
	
	this.locationMarkers = element.all(by.css('div.container_marker'));
	this.placeMarkers = element.all(by.css('div.domMarker'));
	
	this.nearbyPlaces = element(by.css('.arrow_down'));
	
	this.selectPlace = function(place_type){
		return element(by.cssContainingText('.source_title', place_type));
	};
};

module.exports = new SearchPage();
