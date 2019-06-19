var candidate = function(name, partyColor)
{

  var politician = {};
  politician.name = name;
  politician.electionResults = null;
  politician.totalVotes = 0;
  politician.partyColor = partyColor;
  politician.announceCandidate = function()
  {
  console.log(this.name + " has announced her candidacy.")
  }; 

  politician.announceCandidate();
  
  politician.tallyOfTotalVotes = function() {
    
    this.totalVotes = 0;

    for (var i = 0; i < this.electionResults.length; i++)
  
    {this.totalVotes = this.totalVotes + this.electionResults[i];}
    
  }; 
 return politician;  
}; 

var elizabeth = candidate("Elizabeth \"Jake\" Feinler", [132, 17, 11]);
var katherine = candidate("Katherine Johnson", [245, 141, 136]);

//election Results
elizabeth.electionResults = [5, 1, 7, 2, 33, 6, 4, 2, 1, 14, 8, 3, 1, 11, 11, 0, 5, 3, 3, 3, 7, 8, 9, 3, 7, 2, 2, 4, 2, 8, 3, 1, 5, 15, 2, 12, 0, 4, 13, 1, 3, 2, 8, 21, 3, 2, 11, 1, 3, 7, 2];


katherine.electionResults = [4, 2, 4, 4, 22, 3, 3, 1, 2, 15, 8, 1, 3, 9, 0, 6, 1, 5, 5, 1, 3, 7, 8, 1, 3, 3, 1, 3, 2, 2, 6, 2, 14, 0, 1, 6, 7, 3, 7, 3, 6, 1, 3, 17, 3, 1, 2, 11, 2, 3, 1];

//updated results
elizabeth.electionResults[9] = 1;
katherine.electionResults[9] = 28;

elizabeth.electionResults[4] = 17;
katherine.electionResults[4] = 38;

elizabeth.electionResults[43] = 11;
katherine.electionResults[43] = 27;

console.log(elizabeth.electionResults);
console.log(katherine.electionResults);


//state result winner with color
var setStateResults = function(state) {
  
  theStates[state].winner = null;

if (elizabeth.electionResults[state] > katherine.electionResults[state]) {
  theStates[state].winner = elizabeth;
} else if (katherine.electionResults[state] > elizabeth.electionResults[state]){ 
  theStates[state].winner = katherine;
} 
  console.log(theStates[state].winner);
  
  var stateWinner = theStates[state].winner
  
  if (stateWinner !== null) {
  theStates[state].rgbColor = stateWinner.partyColor;
} else {
   theStates[state].rgbColor = [11, 32, 57]; 
}   
//State table data
var stateInfoTable = document.getElementById("stateResults");

//table header
var header = stateInfoTable.children[0].children[0];
var stateName = header.children[0];
var abbreviation = header.children[1];
  
stateName.innerText = theStates[state].nameFull;
abbreviation.innerText = "(" + theStates[state].nameAbbrev + ")";

//table body
var body = stateInfoTable.children[1];             
var name1 = body.children[0].children[0];
var results1 = body.children[0].children[1];  
var name2 = body.children[1].children[0];
var results2 = body.children[1].children[1]; 
var winnersName = body.children[2].children[1];
 
name1.innerText = elizabeth.name; 
results1.innerText = elizabeth.electionResults[state];
name2.innerText = katherine.name;
results2.innerText = katherine.electionResults[state];
  
  if (theStates[state].winner === null) {
     winnersName.innerText = "DRAW"; 
  } else {
   winnersName.innerText = theStates[state].winner.name;
  }
  
};  
  

//tally of total votes
elizabeth.tallyOfTotalVotes();
katherine.tallyOfTotalVotes();

console.log(elizabeth.totalVotes);
console.log(katherine.totalVotes);

//Winner of most votes
var winner = "???";

  if (elizabeth.totalVotes > katherine.totalVotes) {
  winner = elizabeth.name;
} else if (katherine.totalVotes > elizabeth.totalVotes){
  winner = katherine.name;
} else {
  winner = "it's a DRAW"; 
}
console.log("And the winner is... " + winner + "!");

console.log("Elizabeth's color is " + elizabeth.partyColor);
console.log("Katherine's color is " + katherine.partyColor); 

//country table data
var countryTable = document.getElementById("countryResults");
var row = countryTable.children[0].children[0];
                        
row.children[0].innerText = elizabeth.name;
row.children[1].innerText = elizabeth.totalVotes;
row.children[2].innerText = katherine.name;   
row.children[3].innerText = katherine.totalVotes;
row.children[5].innerText = winner;






