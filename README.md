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




## Future considerations / not implemented

- Might re-arrange to be more like Rancid Tomatillos (like other students apparently have done).  I wanted to try something different, but formatting has become tricky.
- More robust Cypress testing.
- More refactoring, especially making importable API utility call files.
- More CSS formatting; especially better aligning of boxes (lists vs details and resizing based on amount of text / content)


-HomeContainer: this is the main view for a 'guest' user (i.e. someone who does not have an account / is not logged in).  This means that the main state var `user` is set to `''` during this time.  HomeContainer displays appropriate navigation links (which track active status / location) to SearchContainer (in case desiring to return) and the LoginContainer.  Within it is housed the SearchContainer and the ResultsContainer.  Please see detailed descriptions below.
- SearchContainer: this has a form that once filled out, sends a request to the backend (BE) with the user specified parameters. Basic validation and error handling occurs in the form, some during the form and some during an attempt at submission (when the button is clicked).  Crucially, the 'nickname' value must be unique for a user (if a guest, it is irrelevant).  Upon submission and successful processing, the BE will respond with a lot of data, captured in the state variable `results`.  This is then passed onto the ResultsContainer.
- ResultsContainer: this handles dynamic displaying of all received results.  Crucial information that is communicated here includes:
  - Basic text message with `'nickname` is present at the top
  - Two dropdown menus (handled by DropdownMenuContainer) allow for selecting timeframe (annual vs monthly) and type of utility rates (residential / commercial / industrial).  Based on the selections made here, different information is provided for the guest/user.
  - There is a save button at the bottom.  If a user is logged in, 


 The HomeContainer holds the SearchContainer and the ResultsContainer, with navLinks (tabs) to the SearchContainer and the LoginContainer.

The SearchContainer has a form that once filled out, sends a request to the backend with the user specified parameters. The results are displayed in the ResultsContainer, and state is updated upon each form submission.

The LoginContainer, '/login', has a dropdown list of users. Selecting a user and logging in will replace the HomeContainer with the UserContainer. This will contain another SearchContainer and ResultsContainer, but with a navLink to the UserReportsContainer and a 'save report' button. '/:user_id'.

The UserReportsContainer holds a list of buttons corresponding with the saved reports from the user. Clicking each button will update the ResultsContainer with the saved results. '/:user_id/:userReportsId'.

The UserContainer has a Logout button that returns the page back to the HomeContainer, '/'.



This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules. This repo also includes Cypress and Router.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
