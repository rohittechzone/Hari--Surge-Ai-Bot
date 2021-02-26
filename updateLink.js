class getLink {
    constructor(){
      this.Ques = createInput("Question");
      this.Ques.position(displayWidth/2-200,displayHeight/2-50);
      this.Ques.size(200,25);
      this.Answer = createInput("Answer");
      this.Answer.position(displayWidth/2-50,displayHeight/2-50);
      this.Answer.size(200,25);
      this.submitButton = createButton('Add');
      this.submitButton.position(displayWidth/2-50,displayHeight/2);
      this.submitButton.size(100,25);
    }
    display(){
      this.submitButton.mousePressed(()=>{
        this.update_link(this.Ques.value(),this.Answer.value());
      });
    }
    update_link(Ques,ans){
        database.ref('/data/' + Ques.toLowerCase() + '/').set({
          answer : ans.toLowerCase(),
        });
        
    }

}
