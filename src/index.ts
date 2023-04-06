import {
  addClickEventListenersToAddToQuoteButtons,
  addClickEventListenerToNavCartClose,
  addClickEventListenerToNavCartOpen,
  onRequestFormSubmit,
  setUpCartFromLocalStorage,
} from './utils/functions';

window.Webflow ||= [];
window.Webflow.push(async () => {
  // All cart items are stored in local storage,
  // so get stored items and place in cart div.
  setUpCartFromLocalStorage();
  // Add click event handler for nav cart open link.
  addClickEventListenerToNavCartOpen();
  // Add click event handler for nav cart close link.
  addClickEventListenerToNavCartClose();
  // Add event handlers for each add to quote button the page.
  addClickEventListenersToAddToQuoteButtons();
  onRequestFormSubmit();
});
