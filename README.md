# README

## Overview

This frontend application provides an 'administrator' view of tea subscriptions for customers.  Specifically, the user is provided with a default view with a welcome, and a list of tea subscriptions (as buttons).  The user may choose to filter results in the search bar above, which in real-time retains only subscriptions containing the filter text.  When a user clicks on the tea subscription, a box appears on the right with detailed information about the subscrition, including status and other information, as well as information about the tea used in the subscription and information about the subscribing customer.  The user may change the activation status from here.

This application is written in React and JS, on a Vite server.  To configure, run a typical `npm install`.  To launch the server, execute `npm run dev` for a development environment at `http://localhost:5173`.

## Structure of components / hierarchy and functionality

- MainContainer: this comprises the main view for the user.  It is housed directly under App (which primarily just handles the title and routing).  Within this view, SearchContainer and SubscriptionsListsContainer are displayed on the left hand side, while SubscriptionDetailsContainer is displayed on the right hand side (when details have been looked up).

- SearchFilterContainer: here, the user may begin typing text in the box (set up as a controlled form with local state var `filterText`), which is checked (case-insensitive) against the existing list of subscriptions; from this, it constructs a filtered subscriptions list (state var `filteredSubscriptions`) to be used in actual rendering.

- SubscriptionsListContainer: this provides a container for organizing; it makes a BE API call to determine all subscriptions, then generates a list of buttons for each subscription (state var `subscriptions`).  If no subscriptions are present, a message will be displayed.

- SubscriptionListButton: each button within SubscriptionsListContainer is described here.  Clicking on the button runs a BE API call for detailed subscription information (stored in state var `detailedInfo`).  Assuming success, the state var will be used in the SubscriptionDetailsContainer.

- SubscriptionDetailsContainer: this variable-size box renders if `detailedInfo` is defined.  `<details>` tags are used to group useful information, and has context-sensitive displaying of `status`.  At the bottom is the status button.

- StatusButtonContainer: this button uses multiple state vars (interally, `currentStatus`, and externally, `detailedInfo`) to provide context-aware status.  Specifically, it allows for toggling (both functionally and based on display) between 'active' and 'cancelled' status by the user, which is subsequently re-rendered in the DOM.

## Error handling / user experience

The UI/UX is designed to minimize errors that a user may run into (deliberately or accidentally).  Major instances include:
- Helpful messaging / information present to provide context and current 'state' on page (such as if no subscriptions exist, what the current status is, the update status button being appropriately labeled).  The update status button in particular will always toggle appropriately, as well as briefly display an updated message when the status has been changed for confirmation.
- Error handling: several BE API calls are made; the BE is designed to provide precise error messages; the FE in turn is designed to catch and forward these into the state var `currentError`.
- Anytime such an error is made, navigation is made to the page/route `/error`, so that the user can clearly see the detailed message, and then return to the home page, which forces a full re-render (in the hopes of also clearing the error).
- Note: error handling is only partially functional when a user manually types a route with an id that doesn't exist (e.g. `/10000`).


## Future considerations / not implemented - more notes

- Cypress testing is not implemented (based on prioritizing other features / aspects).  While I manually tested many arrangements for the site, this would allow for a more robust and consistent setup.
- Might re-arrange to be more like Rancid Tomatillos (like other students apparently have done).  I wanted to try something different, but formatting has become tricky.
- One API call is moved to a utility file (due to re-use).  However, this comes at the expense of many parameters needing to be passed, and therefore a little bit of prop drilling.  More optimized / cleaner solutions would be appreciated.
- More CSS formatting; especially better aligning of boxes (lists vs details and resizing based on amount of text / content).  This affects the UX.
- More strategic / minimized use of state variables, especially in 'tangled' arrangements.  I suspect this FE has more than necessary, and they are causing (as a result of this, and other factors) an uncessary number of re-renders.  At least there aren't any infinite loops.

## Contact information

Author: Mark Kendall  
LinkedIn: [Profile](https://www.linkedin.com/in/markkendall496/)