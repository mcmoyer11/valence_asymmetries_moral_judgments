newTrial("instructions1",

    newText("Thank you for participating in our research.")
        .css("font-size", "16pt")
        .css('font-family', 'Arial, Helvetica, sans-serif')
        .center()
        .print()
    ,
    newText("<br>")
        .center()
        .print() 
    ,
    newText("For the next 20 minutes, you will be presented with a range of stories about different people. You will be asked to read these stories and then answer questions about them.")
        .css('font-family', 'Arial, Helvetica, sans-serif')
        .css("font-size", "16pt")
        .center()
        .print()
    ,
    newText("<br>")
        .center()
        .print() 
    ,
    newText("We will ask you questions about whether the actions are morally right or wrong. We ask that you answer honestly based on what you think. There are no right or wrong answers.")
        .css('font-family', 'Arial, Helvetica, sans-serif')
        .css("font-size", "16pt")
        .center()
        .print()
    ,
    newText("<br>")
        .center()
        .print() 
    ,
    newText("We will also ask you a few questions about yourself at the end. Your answers are completely anonymous.")
        .css('font-family', 'Arial, Helvetica, sans-serif')
        .css("font-size", "16pt")
        .center()
        .print()
    ,
    newText("<br>")
        .center()
        .print() 
    ,
    newButton("continue")
        .center()
        .print()
        .wait()
    );
    
newTrial("instructions2",

    newText("We compared some of your responses to the responses of other people who participated in this study, and we want to know your thoughts.")
        .css('font-family', 'Arial, Helvetica, sans-serif')
        .css("font-size", "16pt")
        .center()
        .print()
    ,
    newText("<br>")
        .center()
        .print() 
    ,
    newText("You will now see again some of the stories you saw earlier. Please answer some additional questions about them.")
        .css('font-family', 'Arial, Helvetica, sans-serif')
        .css("font-size", "16pt")
        .center()
        .print()
    ,
    newText("<br>")
        .center()
        .print() 
    ,
    newButton("continue")
        .center()
        .print()
        .wait()
    );