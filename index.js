function BoardMember (name, homeState, training){
  this.homeState = homeState
  this.name = name
  this.training = training
  this.veto = function() {
    console.log("No, I must disagree");
  }

}
