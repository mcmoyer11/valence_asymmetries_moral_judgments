PennController.ResetPrefix(null);
// DebugOff();

Sequence(
    "welcome",
    "consent",
    "instructions1",
    "practice-intro",
    rshuffle("practice"),
    "endinstructions",
    
    // Phase 1
    rshuffle("test_phase1"),
    rshuffle("fillers"),
        
    "instructions2",
    rshuffle("test_phase2"),
        
    "demo",
    "send",
    // "prolific",
    "end");


// What is in Header happens at the beginning of every single trial
Header(
    //We will use this global Var element later to store the participant's name
    newVar("ParticipantName")
       .global()
   ,
    newTimer(250)
       .start()
       .wait()
);


newTrial( "welcome" ,
    newImage("spanish-labs.png")
        .size( 600,100 )
        .center()
        .print()
    ,
    newText("<b>WELCOME</b>")
        .css("font-size","30")
        .css('font-family', 'Arial, Helvetica, sans-serif')
        .center()
        .print()
    ,
    newText("<p>The following experiment is conducted by the Universitat Pompeu Fabra.</p>")
        .css('font-family', 'Arial, Helvetica, sans-serif')
        .css("font-size","20")
        .css("text-align", "center")
        .center()
        .print()
    ,
    newButton("next", "Continue")
        .center()
        .print()
        .wait()
    );
    


// End screen
PennController("end",
    newText("Thank you for your participation!<br><br>")
        .css('font-family', 'Arial, Helvetica, sans-serif')
        .center()
        .print()
        ,
    newText("link",'<a href="https://app.prolific.com/submissions/complete?cc=CDAJP16M">Click here if you do not automatically redirect.</a><br><br>')
        .center()
        .print()
    ,
    newText("Or, enter this completion code: CDAJP16M")
        .center()
        .print()
    ,
    newKey("end", " ")
        .wait()
).setOption("countsForProgressBar", false);

// Send results at the end of the experiment
PennController.SendResults("send");