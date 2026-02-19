   
Template(GetTable("practice.csv"),//.setGroupColumn( "Group" ),
    // "LocativesStimuli.csv", row => 
    row => newTrial( "practice",
        newText("instructions", "<i><b>Please read the following story and then answer the questions below.</b></i>")
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
        newText("break3", "<br>")
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
        newText("break4", "<br><br>")
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
        newText("break6", "<br><br>")
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
        newText("break8", "<br><br>")
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
    .log( "TrialType", row.TrialType)
    .log( "Number" , row.Number )
    .log( "Valence", "none")
    .log( "Group", "none")

);