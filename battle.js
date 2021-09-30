class Battle{
    constructor(){
        this.fight=createButton('FIGHT')
        this.talk=createButton('TALK')
        this.action=createButton('ACTION')
        this.item=createButton('iTEM')
        this.spare=createButton('SP4RE')
    }

    hide(){
        this.fight.hide()
        this.talk.hide()
        this.action.hide()
        this.item.hide()
        this.spare.hide()
    }


    display(){
        this.fight.mousePressed(()=>{
        this.fight.hide()
        })
            
    }
}