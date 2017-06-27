# Test framework for writing BDD tests using Protractor and Cucumber

It is ready to use framework for writing BDD tests using Protractor and Cucumber. It uses latest versions of Protractor, Cucumber.js and Protractor-Cucumber-Framework which are compatible with each other. This is self installable project and you need not have Protractor etc. installed before.

# Pre-requisites

As Protractor is a Node.js program built on top of WebDriverJS, you should have Node.js installed with version 6.11 (LTS) and above.

Node.js can be downloaded using below URL:

	https://nodejs.org/en/download/

For Mac users, node.js can be installed using brew as below:
	
	brew install node

Windows users, please add installation path to system path.

After installing node.js, Node Package Manager (npm) will also be installed. please verify installation using below commands:  
	
	node -v
	
  	npm -v

# Getting started

After cloning this project into your system folder, use below steps:

1) Install protractor, cucumber and dependencies
	
		npm install

2) Update WebDriver-Manager to get latest binaries

		node_modules/protractor/bin/webdriver-manager update
	 
3) Launch test directly with protractor
   	
		grunt protractor:test
	 
4) Set directConnect to false in conf.js, start webdriver-manager in another terminal and launch tests using grunt
	
		node_modules/protractor/bin/webdriver-manager start
		grunt protractor:test
	
5) To run tests without grunt, uncomment below lines from conf.js:

   /*	// configuration parameters
	params: {
		testEnv: 'test'
    },*/
    
    Run tests using protractor installed locally as below:
    
    	node_modules/protractor/bin/protractor conf.js

Note: Windows users, use node at start of command to update/start webdriver-manager like below:

	node node_modules/protractor/bin/webdriver-manager update
	node node_modules/protractor/bin/webdriver-manager start
