$('#start').on('click,' function(){
   

var questions = [{
question: "What was one of the best movies of Batman ever made?",
answers:["Batman","Batman Returns","Batman: Mask of the Phantasm","Batman Forever", "Batman & Robin","Batman Begins", "The Dark Knigt"],
correctAnswer:"The Dark Knight"
}, {
question:"In What movie did Marlon Brando play Don Corleone?",
answers:["Apocaly Now","The Godfather","Last Tango in Paris","One Eyed Jacks","The Score","The Island of Dr. Moreau","The Night of the Following"],
correctAnswer:"The Godfather"
}, {
question:"In What movie did Tom Hanks play Captain John H. Miller was a thirty year old American serving in the 2nd Rangers Battalion of the United States Army?",
answers:["Cast Away","Forrest Gump","Big","The Green Mile","The Terminal", "The Da Vinci Code","Saving Private Ryan"],
correctAnswer:"Saving Private Ryan"
}, {
question:"In what movie did Martin Sheen play Captain L. Willard?",
answers:["The Way","The Departed","Badlands","Catch Me If You Can","Gettysburg","The Subject Was Roses","Apacalypse Now"],
correctAnswer:"Apacalypse Now"
}, {
question:"In what movie did Humphrey Bogart play a role as Rick Blaine?",
answers:["To Have and Have Not","The Maltese Falcon","The Big Slepp","The African Queen","Key Largo","Sabrina"],
correctAnswer:"CasaBlanca"
}, {
question:"What movie is a Booker Prize-winning historical Novel by Thomas Keneally?",
answers:["The Zookeeper's Wife","The Pianist","Saving Private Ryan","The Grey Zone","Sunshine","The Last Train","The Truce","In Darkness","Schindler's List"],
correctAnswer:"Schindler's List"
}, {
question:"What movie has the best gun battle's right now?",
answers:["The Matrix", "Point Break","Speed", "Bill and Ted's Excellent Adventure","Replicas", "Constantine", "John Wick"],
correctAnswer:"John Wick"
}, {
questions:"In what movie did Uma Thurman play the role of a sexy wife of a LA mobster?",
answers:["Gattica","Batman and Robin","Kill Bill: Vol 1","Kill Bill: Vol 2","Kill Bill: Vol 3","Pulp Fiction"],
correctAnswer:"Pulp Fiction"
}, {

}];

var game = {
    correct: 0,
    incorrect: 0,
    counter: 120,
    countdown: function(){
        game.counter--;
        $('#counter').html(game.counter);
        if(game.counter<=0){
            console.log("Time's a Runnin out Buckoo's);
            game.done();
        }


    },
    start: function(){
        for(var i=0; i<question.length;i++){
            $('#sub-container').append('<h2>'+questions[i].question+'</h2>')
            for(var j=0;j<questions[i]).answers.length;j++){
                $('#sub-container').append("<input type='radio' name='question-"+i+"' value='"+questions[i].answers[j]+"'>"+questions[i].answers[j])
            }
        }
    }
}

    


    



































}]