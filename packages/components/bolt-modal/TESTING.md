# Modal component testing steps

## Modal component render as expected (functionally and visually)

The `bolt-modal` component requires JS to function. Perform all tests with JS on.

# Modal component functional testing steps

Functional testing should be performed manually by the QA team across the standard compliment of browsers. In each scenario, browser-type is specified when necessary. If browser type is not specified, the test applies to both "desktop" and "mobile" browsers.

## Feature: modal

    In order to present content in a modal window over the main window
    As a UX designer, developer or content administrator
    I need to ensure the "bolt-modal" component renders and functions as expected

## Scenario: basic

1. Given I am viewing the [basic modal page](http://localhost:3000/pattern-lab/patterns/02-components-modal-05-modal/02-components-modal-05-modal.html)
1. And I see a button with the text "Open Modal"
1. When I click on the button
1. A modal overlay appears
1. And the focus (i.e. the glowing outline) is on the modal close button (x)
1. And I press 'enter/return' key or click off of the modal or click the close button (x)
1. Then the modal closes

   Note: The behavior outlined above should be true for all subsequent tests unless otherwise noted. It will be referred to as the "default modal bahavior".

## Scenario: width variations

`// This is a purely visual test, use VRT`

## Scenario: spacing variations

`// This is a purely visual test, use VRT`

## Scenario: theme variations

`// This is a purely visual test, use VRT`

## Scenario: scroll variations

1. Given I am viewing the [scroll variations page](http://localhost:3000/pattern-lab/patterns/02-components-modal-25-modal-scroll-variations/02-components-modal-25-modal-scroll-variations.html)
1. And I see a button under the heading "Scroll Area: Overall"
1. When I click on that button
1. Then a very tall modal opens
1. When I scroll to the bottom of the modal
1. Then the modal should slide up and the modal close button scrolls out of view
1. And when I close that modal
1. And click on the button under the heading "Scroll Area: Container"
1. Then a modal opens
1. And when I scroll to the bottom of that modal
1. Then the modal container and close button remain fixed
1. And only the inner content of the modal slides up out of view

## Scenario: content variations

`// This is a purely visual test, use VRT`

## Scenario: advanced usage

1. Given I am viewing the [advanced usage page](http://localhost:3000/pattern-lab/patterns/02-components-modal-35-modal-advanced-usage/02-components-modal-35-modal-advanced-usage.html)
1. And I see a button with the text "Activate Timed Modal JS"
1. When I click on that button
1. Then the page reloads
1. And after 3 seconds
1. Then a modal appears

## Scenario: trigger variations

1. Given I am viewing the [advanced usage page](http://localhost:3000/patterns/02-components-modal-40-modal-trigger-variations/02-components-modal-40-modal-trigger-variations.html)
1. And I click on the button and link modal trigger buttons
1. Then a modal should appear
1. And when I hover over the image
1. Then the mouse becomes a magnifying glass (+)
1. And when I click on the image
1. Then the image opens in a modal
1. And the mouse becomes a magnifying glass (-) as I hover over the image inside the modal
1. And I click on the image inside the modal
1. Then the modal closes

## Scenario: web component

1. Given I am viewing the [web component page](http://localhost:3000/pattern-lab/patterns/02-components-modal-999-modal-with-web-component/02-components-modal-999-modal-with-web-component.html)
1. And I click on each modal trigger button
1. Then a modal should appear and behave according to the default modal behavior
1. And each modal should have the same visual style as its Twig-rendered counterpart
