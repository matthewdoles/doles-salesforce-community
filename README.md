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

#### Contact Form

On the community's home page is a Contact Form that any visitors are welcomed to fill out to get in contact with me. This was a neat feature I was able to add that wasn't possible on my previous static HTML website.

For the feature I setuped a new custom object ([Community_Contact_Form\_\_c](src/main/default/objects/Community_Contact_Form__c/Community_Contact_Form__c.object-meta.xml)) and opened up permissions to public/read write to grant external users/visitors access. The component itself is a custom built LWC ([contactForm](src/main/default/lwc/contactForm)) which utilizes the [lightning-record-edit-form](https://developer.salesforce.com/docs/component-library/bundle/lightning-record-edit-form/documentation) component. I was also able to introduce some automation by setting up a simple process builder ([Community_Contact_Form_Processing](src/main/default/flows/Community_Contact_Form_Processing.flow-meta.xml)) that forwards new submissions to me using the [New_Contact_Me_Email_Template](src/main/default/email/unfiled$public/New_Contact_Me_Email_Template.email) email template.

#### Pages

##### Home

- Tile Menu component pointing at the default navigation menu ([Default_Navigation.navigationMenu-meta.xml](src/main/default/navigationMenus/Default_Navigation.navigationMenu-meta.xml)). A nice out of the box grid menu that oultines the community's content.
- 'Who am I?' rich content editor. A simple about me section which details some non-resume/personal things about me.
- Contact form allowing guest users to contact me. See [Contact Form](####contact-form) section for more information.

##### Experience

- [contentHeader](src/main/default/lwc/contentHeader). Each section uses this custom built LWC header. When the component is placed into the builder the component takes a 'Content Title' parameter which is used to display the correct image and title.
- There are two other LWCs on the page: [jjSalesforceDeveloper](src/main/default/lwc/jjSalesforceDeveloper) and [applicationSupportAnalyst](src/main/default/lwc/applicationSupportAnalyst). Details on projects I have worked on in each role were put into LWCs to utilize the [lightning-accordion](https://developer.salesforce.com/docs/component-library/bundle/lightning:accordion) component to help save on page space. All other page details/content is using the out of the box rich content editor.

##### Salesforce

- [contentHeader](src/main/default/lwc/contentHeader). Each section uses this custom built LWC header. When the component is placed into the builder the component takes a 'Content Title' parameter which is used to display the correct image and title.
- All text content is stored in rich content editors.
- [salesforceCertifications](src/main/default/lwc/salesforceCertifications). Displays the current Salesforce Certifications I hold. Leveraging the [lightning-layout](https://developer.salesforce.com/docs/component-library/bundle/lightning-layout) component to apply dynamic sizes to different device sizes.

##### Projects

- Tile Menu component pointing at the project navigation menu ([Project_Navigation_Menu.navigationMenu-meta](src/main/default/navigationMenus/Project_Navigation_Menu.navigationMenu-meta)). Each project is given its own unqie page to utilize the out of the box Tile Menu.

##### Education

- [myEducation](src/main/default/lwc/myEducation). Custom built LWC to display information related to my education. Applies mobile specific CSS to better display and wrap the header content.

##### All Pages

- [communityFooter](src/main/default/lwc/communityFooter). Custom built LWC to display my contact and profile information on every page footer. Applies mobile specific CSS to change from inline-flex (row) to block (column).
