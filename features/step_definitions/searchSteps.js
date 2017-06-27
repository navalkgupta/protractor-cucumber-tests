// Step definitions

var search = require('../pages/searchPage.js');
var {defineSupportCode} = require('cucumber');

defineSupportCode(function({Given, When, Then}) {

	When(/^I search for location (.*)$/, function (name, done){
		browser.wait(EC.visibilityOf(search.searchBox), 100000);
		search.searchBox.sendKeys(name);
		expect(search.suggestions.count()).to.eventually.to.above(2).and.notify(done);
	});
	
	When('I enter from location {name}', function(name, done){
		search.fromLocation.sendKeys(name);
		expect(search.suggestions.count()).to.eventually.to.above(2).and.notify(done);
	});
	
	When(/^I select first result "([^"]*)" from suggestions$/, function(location, done){
		var firstSuggestion = search.suggestions.first();
		expect(firstSuggestion.element(search.itemTitle).getText()).to.eventually.to.equal(location);
		firstSuggestion.click();
		done();
	});
	
	When('I navigate to get Directions', function(done){
		search.getDirections.click();
		done();
	});
	
	Then('I should see {int} location marker on map', function(count, done){
		expect(search.locationMarkers.count()).to.eventually.to.equal(count).and.notify(done);
	});
	
	Then('I should see many place markers on map', function(done){
		expect(search.placeMarkers.count()).to.eventually.to.above(10).and.notify(done);
	});
	
	Then('I select first route from route results', function(done){
		expect(search.routeList.count()).to.eventually.to.above(2);
		search.routeList.first().click();
		done();
	});
	
	Then('I save the route and close route details', function(done){
		search.saveRoute.click();
		search.closeRoute.click();
		done();
	});
	
	When(/^I navigate to nearby "([^"]*)" places$/, function(place, done){
		search.nearbyPlaces.click();
		search.selectPlace(place).click();
		done();
	});
	
});
