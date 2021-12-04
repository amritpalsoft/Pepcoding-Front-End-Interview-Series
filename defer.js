// normally we can put our script file anywhere in html file
// but script file is placed at wrong place then it may happen that script 
// file prevent the loading of html file

// So to solve this problem we start using defer & async with script file

// by adding Async in script file:
// as the script file is loading then loading happens parallely without
// stopping the DOM tree formation but as it gets loaded, execution of 
// script file starts by stopping DOM tree 
// so it is also not preferable

// now com Defer in which loading happens parallely and then it waits 
// for complete DOM tree formation and as DOM formation completes it
// start script execution

// Defer follow sequence of execution i.e. if 10 script files
// are included then they executes in order in which they are placed

// whereas Async does not follow any order of execution 