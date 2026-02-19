   
Template(
    GetTable("test.csv").setGroupColumn( "Group" ),
    // "LocativesStimuli.csv", row => 
    row => 
    newTrial( "test_phase1",
        newText("instructions", "<i><b>Please read the following story and then answer the questions below.</b></i>")
            .css("text-align", "center")
            .css('font-family', 'Arial, Helvetica, sans-serif')
            .css("font-size", "16pt")
            .center()
            .print()
        ,
        newText("break0", "<br><br>")
            .center()
            .print()
        ,  
        newText("Vignette", row.Vignette)
            .css("font-size", "20pt")
            .css('font-family', 'Arial, Helvetica, sans-serif')
            .css("text-align", "center")
            .center()
            .print()
        ,
        newText("break1", "<br><br><br>")
            .center()
            .print()
        ,
        // Question 1
        newText("Q1", "<b>How would you judge this person's actions?</b>")
            .css("font-size", "16pt")
            .css('font-family', 'Arial, Helvetica, sans-serif')
            .center()
            .print()
        ,
        newText("break2", "<br>")
            .center()
            .print()
        ,
        newScale("R1A",
                "Very wrong",
                "Wrong",
                "Somewhat wrong",
                "Somewhat right",
                "Right",
                "Very right"
            )
            .radio()
            .css("font-size", "16pt")
            .css('font-family', 'Arial, Helvetica, sans-serif')
            .labelsPosition("right")  // ← labels appear to the RIGHT of buttons
            .vertical()
            .size("auto")  // forces proper label display
            .log()
            .print()
            // .wait()
        ,
        newText("break4", "<br><br><br>")
            .center()
            .print()
        ,
        // Question 2
        newText("Q2", "<b>Do you think there is a correct answer about how to judge the person's actions in the story?</b>")
            .css("font-size", "16pt")
            .css('font-family', 'Arial, Helvetica, sans-serif')
            .center()
            .print()
        ,
        newText("break5", "<br>")
            .center()
            .print()
        ,
        newScale("R2", 
                "Definitely no correct answer",
                "Probably no correct answer",
                "Maybe no correct answer",
                "Maybe there is a correct answer",
                "Probably there is a correct answer",
                "Definitely there is a correct answer"
            )
            .radio()
            .css("font-size", "16pt")
            .css('font-family', 'Arial, Helvetica, sans-serif')
            .labelsPosition("right")  // ← labels appear to the RIGHT of buttons
            .vertical()
            .size("auto")  // forces proper label display
            .log()
            .print()
            // .wait()
        ,
        newText("break6", "<br><br><br>")
            .center()
            .print()
        ,
        // Question 3
        newText("Q3", "<b>Indicate the percentage of people in your community that would agree with your judgement.</b>")
            .css("font-size", "16pt")
            .css('font-family', 'Arial, Helvetica, sans-serif')
            .center()
            .print()
        ,
        newText("break7", "<br>")
            .center()
            .print()
        ,
        newScale("R3",
                "Almost everyone would agree with me",
                "Most of them would agree with me",
                "Some of them would agree with me",
                "Some of them would disagree with me",
                "Most of them would disagree with me",
                "Almost everyone would disagree with me"
            )
            .radio()
            .css("font-size", "16pt")
            .css('font-family', 'Arial, Helvetica, sans-serif')
            .labelsPosition("right")  // ← labels appear to the RIGHT of buttons
            .vertical()
            .size("auto")  // forces proper label display
            .log()
            .print()
            // .wait()
        ,
        newText("break8", "<br><br><br>")
            .center()
            .print()
        ,
        // Question 4
        newText("Q4", "<b>How easy was it for you to make this judgment?</b>")
            .css("font-size", "16pt")
            .css('font-family', 'Arial, Helvetica, sans-serif')
            .center()
            .print()
        ,
        newText("break9", "<br>")
            .center()
            .print()
        ,
        newScale("R4",
                "Very easy",
                "Somewhat easy",
                "A little easy",
                "A little difficult",
                "Somewhat difficult",
                "Very difficult"
            )
            .radio()
            .css("font-size", "16pt")
            .css('font-family', 'Arial, Helvetica, sans-serif')
            .labelsPosition("right")  // ← labels appear to the RIGHT of buttons
            .vertical()
            .size("auto")  // forces proper label display
            .log()
            .print()
            // .wait()
        ,
        // Error message (starts hidden)
        newText("error", "Please answer all the questions to progress to the next story")
            .color("red")
            .css('font-family', 'Arial, Helvetica, sans-serif')
            .center()
            .print()
            .hidden()
        ,

        // Next button with error logic
        newButton("next", "Next")
            .center()
            .print()
            .wait(
                getScale("R1A").test.selected()
                .and(getScale("R2").test.selected())
                .and(getScale("R3").test.selected())
                .and(getScale("R4").test.selected())
                .failure(
                    getText("error").visible()
                )
            )

    )
    .log( "Phase" , "1" )  // distinguish this phase
    .log( "TrialType", row.TrialType)
    .log( "Number" , row.Number )
    .log( "Valence", row.Val)
    .log( "Group", row.Group )

);

Template(
    GetTable("fillers.csv"),
    row => 
    newTrial( "fillers",
        newText("instructions", "<i><b>Please read the following story and then answer the questions below.<b></i>")
            .css("text-align", "center")
            .css("font-size", "16pt")
            .css('font-family', 'Arial, Helvetica, sans-serif')
            .center()
            .print()
        ,
        newText("break0", "<br><br>")
            .center()
            .print()
        ,  
        newText("Vignette", row.Vignette)
            .css("font-size", "20pt")
            .css('font-family', 'Arial, Helvetica, sans-serif')
            .css("text-align", "center")
            .center()
            .print()
        ,
        newText("break1", "<br><br><br>")
            .center()
            .print()
        ,
        // Question 1
        newText("Q1", "<b>How would you judge this person's actions?</b>")
            .css("font-size", "16pt")
            .css('font-family', 'Arial, Helvetica, sans-serif')
            .center()
            .print()
        ,
        newText("break2", "<br>")
            .center()
            .print()
        ,
        newScale("R1A",
                "Very wrong",
                "Wrong",
                "Somewhat wrong",
                "Somewhat right",
                "Right",
                "Very right"
            )
            .radio()
            .css("font-size", "16pt")
            .css('font-family', 'Arial, Helvetica, sans-serif')
            .labelsPosition("right")  // ← labels appear to the RIGHT of buttons
            .vertical()
            .size("auto")  // forces proper label display
            .log()
            .print()
            // .wait()
        ,
        newText("break4", "<br><br><br>")
            .center()
            .print()
        ,
        // Question 2
        newText("Q2", "<b>Do you think there is a correct answer about how to judge the person's actions in the story?</b>")
            .css("font-size", "16pt")
            .css('font-family', 'Arial, Helvetica, sans-serif')
            .center()
            .print()
        ,
        newText("break5", "<br>")
            .center()
            .print()
        ,
        newScale("R2", 
                "Definitely no correct answer",
                "Probably no correct answer",
                "Maybe no correct answer",
                "Maybe there is a correct answer",
                "Probably there is a correct answer",
                "Definitely there is a correct answer"
            )
            .radio()
            .css("font-size", "16pt")
            .css('font-family', 'Arial, Helvetica, sans-serif')
            .labelsPosition("right")  // ← labels appear to the RIGHT of buttons
            .vertical()
            .size("auto")  // forces proper label display
            .log()
            .print()
            // .wait()
        ,
        newText("break6", "<br><br><br>")
            .center()
            .print()
        ,
        // Question 3
        newText("Q3", "<b>Indicate the percentage of people in your community that would agree with your judgement.</b>")
            .css("font-size", "16pt")
            .css('font-family', 'Arial, Helvetica, sans-serif')
            .center()
            .print()
        ,
        newText("break7", "<br>")
            .center()
            .print()
        ,
        newScale("R3",
                "Almost everyone would agree with me",
                "Most of them would agree with me",
                "Some of them would agree with me",
                "Some of them would disagree with me",
                "Most of them would disagree with me",
                "Almost everyone would disagree with me"
            )
            .radio()
            .css("font-size", "16pt")
            .css('font-family', 'Arial, Helvetica, sans-serif')
            .labelsPosition("right")  // ← labels appear to the RIGHT of buttons
            .vertical()
            .size("auto")  // forces proper label display
            .log()
            .print()
            // .wait()
        ,
        newText("break8", "<br><br><br>")
            .center()
            .print()
        ,
        // Question 4
        newText("Q4", "<b>How easy was it for you to make this judgment?</b>")
            .css("font-size", "16pt")
            .css('font-family', 'Arial, Helvetica, sans-serif')
            .center()
            .print()
        ,
        newText("break9", "<br>")
            .center()
            .print()
        ,
        newScale("R4",
                "Very easy",
                "Somewhat easy",
                "A little easy",
                "A little difficult",
                "Somewhat difficult",
                "Very difficult"
            )
            .radio()
            .css("font-size", "16pt")
            .css('font-family', 'Arial, Helvetica, sans-serif')
            .labelsPosition("right")  // ← labels appear to the RIGHT of buttons
            .vertical()
            .size("auto")  // forces proper label display
            .log()
            .print()
            // .wait()
        ,
        // Error message (starts hidden)
        newText("error", "Please answer all the questions to progress to the next story")
            .color("red")
            .css("font-size", "16pt")
            .css('font-family', 'Arial, Helvetica, sans-serif')
            .center()
            .print()
            .hidden()
        ,

        // Next button with error logic
        newButton("next", "Next")
            .center()
            .print()
            .wait(
                getScale("R1A").test.selected()
                .and(getScale("R2").test.selected())
                .and(getScale("R3").test.selected())
                .and(getScale("R4").test.selected())
                .failure(
                    getText("error").visible()
                )
            )

    )
    .log( "Phase" , "1" )  // distinguish this phase
    .log( "TrialType", row.TrialType)
    .log( "Number" , row.Number )
    .log( "Valence", "none" )
    .log( "Group", "none" )
);

Template(
    GetTable("test.csv").setGroupColumn("Group"),  // SAME table
    row => newTrial("test_phase2",
        newText("instructions", "<i><b>Another participant of this study has disagreed significantly with your judgement on this story.</b></i>")
            .css("text-align", "center")
            .css("font-size", "16pt")
            .css('font-family', 'Arial, Helvetica, sans-serif')
            .center()
            .print()
        ,
        newText("break0", "<br><br>")
            .center()
            .print()
        , 
        newText("Vignette", row.Vignette)
            .css("font-size", "20pt")
            .css('font-family', 'Arial, Helvetica, sans-serif')
            .css("text-align", "center")
            .center()
            .print()
        ,
        newText("break1", "<br><br><br>")
            .center()
            .print()
        ,
        // Question 5
        newText("Q5", "<b>Do you think the other person is mistaken?</b>")
            .css("font-size", "16pt")
            .css('font-family', 'Arial, Helvetica, sans-serif')
            .center()
            .print()
        ,
        newText("break11", "<br>")
            .center()
            .print()
        ,
        newScale("R5",
                "Neither of us needs to be mistaken",
                "Probably neither of us needs to be mistaken",
                "Maybe neither of us needs to be mistaken",
                "The other person is maybe mistaken",
                "The other person is likely mistaken",
                "The other person is clearly mistaken"
            )
            .radio()
            .css("font-size", "16pt")
            .css('font-family', 'Arial, Helvetica, sans-serif')
            .labelsPosition("right")  // ← labels appear to the RIGHT of buttons
            .vertical()
            .size("auto")  // forces proper label display
            .log()
            .print()
            // .wait()
        ,
        newText("break12", "<br><br><br>")
            .center()
            .print()
        ,
        // Question 4
        newText("Q6", "<b>How comfortable would you be to have the person who disagrees with you as a house-mate?</b>")
            .css("font-size", "16pt")
            .css('font-family', 'Arial, Helvetica, sans-serif')
            .center()
            .print()
        ,
        newText("break13", "<br>")
            .center()
            .print()
        ,
        newScale("R6",
                "Extremely uncomfortable",
                "Very uncomfortable",
                "Mildly uncomfortable",
                "Mildly comfortable",
                "Very comfortable",
                "Extremely comfortable"
            )
            .radio()
            .css("font-size", "16pt")
            .css('font-family', 'Arial, Helvetica, sans-serif')
            .labelsPosition("right")  // ← labels appear to the RIGHT of buttons
            .vertical()
            .size("auto")  // forces proper label display
            .log()
            .print()
            // .wait()
        ,
        // Error message (starts hidden)
        newText("error", "Please answer all the questions to progress to the next story")
            .color("red")
            .css("font-size", "16pt")
            .css('font-family', 'Arial, Helvetica, sans-serif').center()
            .print()
            .hidden()
        ,

        // Next button with error logic
        newButton("next", "Next")
            .center()
            .print()
            .wait(
                getScale("R5").test.selected()
                .and(getScale("R6").test.selected())
                .failure(
                    getText("error").visible()
                )
            )

    )
    .log( "Phase", "2")  // distinguish this phase
    .log("TrialType", row.TrialType)
    .log("Number", row.Number)
    .log("Valence", row.Val)
    .log("Group", row.Group)  // same Group as phase 1
);
