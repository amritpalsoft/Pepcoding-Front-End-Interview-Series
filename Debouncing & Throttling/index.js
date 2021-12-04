// Debounce & Throttling

// In general when a user gives an event, a network call is needed to be sent to the
// server, but if we sent network request for every event , then it will slows down the 
// response of website and also bandwidth of the server is wasted , so to solve this problem 
// we started using debouncing and throttling

// in Debouncing we wait for the user to pause, and as the user stops we sent a network 
// request 

// but in case of Throttling we sets an interval after which we make a network request
// irrespective of user activity 