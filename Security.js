class Security
{
    constructor()
    {

        this.input1 = createInput('Answer');
        this.input2 = createInput('Answer');
        this.input3 = createInput('Answer');

        this.input1.position(displayWidth/20,displayHeight/6);
        this.input2.position(displayWidth/1.8,displayHeight/6.4);
        this.input3.position(displayWidth/2.5,displayHeight/2);

        this.check1 = createButton('Check');
        this.check1.position(displayWidth/20,displayHeight/4.8);

        this.check2 = createButton('Check');
        this.check2.position(displayWidth/1.8,displayHeight/5);

        this.check3 = createButton('Check');
        this.check3.position(displayWidth/2.5,displayHeight/1.8);

    }
    display()
    {
    this.check1.mousePressed(()=>{
        if(system.authenticate(accessCode1,this.input1.value()))
        {
            this.check1.hide();
            this.input1.hide();
            score++;
        }
    });
    this.check2.mousePressed(()=>{
        if(system.authenticate(accessCode2,this.input2.value()))
        {
            this.check2.hide();
            this.input2.hide();
            score++;
        }
    });
    this.check3.mousePressed(()=>{
        if(system.authenticate(accessCode3,this.input3.value()))
        {
            this.check3.hide();
            this.input3.hide();
            score++;
        }
    });
    
        
}   
    
}