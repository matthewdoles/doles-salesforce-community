# doles-salesforce-community

### Description

Having spent time on a couple Salesforce Community projects in my role as a Salesforce Developer at Johnson &amp; Johnson, it felt appropriate to put my knowledge to practice and create myself my very own personal community.

The community largely serves as my online resume, and replaces the original online resume I created at [matthewdoles.github.io](https://matthewdoles.github.io). In fact, I reused, updated, and transposed much of its original content over to my new community.

### Design

#### URL

- [matthewdoles.com](http://matthewdoles.com/)
- [matthew-doles-developer-edition.na139.force.com/matthew/s/](https://matthew-doles-developer-edition.na139.force.com/matthew/s/)

Since I am hosting my community in a Developer Edition Salesforce org, I am not able to setup [Custom URLs](https://help.salesforce.com/articleView?id=custom_url_add.htm&type=5). However, I am still able to configure [matthewdoles.com](http://matthewdoles.com/) to forward to my community's static URL.

#### Continuous Integration

[![Build Status](https://travis-ci.com/matthewdoles/doles-salesforce-community.svg?branch=master)](https://travis-ci.com/matthewdoles/doles-salesforce-community)

One of the fun and new areas I explored as a part of this project was setting up a Salesforce specific Travis CI build. Deployments themselves are done against the production environment and published when ready. Thus, this CI build is not entirely necessary and probably a bit overkill. However, I liked the idea that the project could be packagable and deployed to other environments which is what this build theoretically does.

Using the [Continuous Integration Using Salesforce DX](https://trailhead.salesforce.com/content/learn/modules/sfdx_travis_ci) Trailhead module as guidance, I was able to configure my own build. Looking at the [.travis.yml](./.travis.yml) file, you can see the first thing the build does is create our certificates, install sfdx-cli, and then authenticate with my Salesforce org. After that, the script then uses sfdx to create a scratch org, create a community with the correct parameters in the newly created scratch org, deploy metadata, run tests, then cleanup by deleting the scratch org.

For this build to work with other envrionments the steps involving authentication would need some reconfiguring. However, one could pull down this repo and deploy my community to their own scratch org following just the sfdx commands. Thus, the Travis CI build is validating that the community is in a packagable state.
