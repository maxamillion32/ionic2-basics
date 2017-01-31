- ionic lifecycle methods will only run on components used as pages and pushed through navCtrl
- angular lifecycle methods runs on every component, whereas ionic on pages
- ionic will call it's own methods below


ionViewCanEnter()
    - ionic 2 - navigation guard 
    - promise that resolves to true/false

ionViewDidLoad()
    - page has loaded
    - not fired when cached (in stack of pages)
    - runs only when page is being created
    - setup code for page

ionViewWillEnter()
    - page is about enter and become active page
    - fires also when cached

ionViewDidEnter()
    - page has fully entered and now is active page
    - fires also when cached

ionViewCanLeave()
    - navigation guard
    - may the page be left?

ionViewWillLeave()
    - page is about leave and become inactive

ionViewDidLeave()
    - page finished leaving and is not active

ionViewWillUnload()
    - page is about to be destroyed
    - removes cache here