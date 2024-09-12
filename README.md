# TIA: The Invocable App

The Invocable App, TIA, is a Salesforce managed package for Salesforce developed by Benjamin Lörincz. The main goal of TIA is to provide admins, architects, consultants, developers and any persona that customizes or develops solutions on the Salesforce platform a huge set of standard Apex methods in a bulkified manner that can be used in Flows, Lightning Components and Apex. These bulkified methods are also exposed as custom Apex web services, i.e. REST and SOAP, so the methods can be used in integrations as well.

## What does TIA offer / what is the content of TIA?

As of today TIA has a set of 227 Apex classes that expose methods of the classes Blob, Boolean, Date, Datetime, Decimal, Double, Id, Integer, Long, String and Time of the System namespace. Additionally, TIA has another 227 Apex classes being Apex test classes.

The Apex classes expose standard Apex methods as

-   bulkified [SOAP](https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_web_services.htm) methods,
-   bulkified [REST](https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_rest.htm) methods (if applicable),
-   bulkified [Invocable methods](https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_classes_annotation_InvocableMethod.htm) (and automatically as [Apex Actions](https://developer.salesforce.com/docs/atlas.en-us.api_action.meta/api_action/actions_obj_apex.htm) as well),
-   bulkified [Aura Enabled and Aura Enabled (cacheable)](https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_classes_annotation_AuraEnabled.htm) methods.

## What is this repository about?

This repository will serve as a hub for documentation, showcasing examples, reporting issues, requesting new features, and providing a roadmap.
