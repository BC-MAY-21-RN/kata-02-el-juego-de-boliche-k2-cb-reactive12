export default class Bowling {

    constructor(){
        this._rolls = [];
        this._score = [];
    }

    //Generates the rolls
    roll(){
        //First roll of the set
        for (let i = 0; i < 20; i++) {
            if(((this._rolls.length + 1) % 2) != 0){
                this._rolls.push(this._generateFirstRoll());
            }
            else{
                this._rolls.push(this._generateSecondRoll())
            }
        }
        return this._rolls;
    }

    //Print Table Format
    _table(){
        console.log(`
            |${this._rolls[0]} - ${this._rolls[1]}|
               ${this._score[0]}        
        `)
    }

    _getScore(){

    }

    _generateFirstRoll(){
        return Math.floor((Math.random() * (11 - 0)) + 0);
    }

    _generateSecondRoll(){
        let x = this._rolls.length;
        return Math.floor((Math.random() * ((11 - this._rolls[x - 1]) - 0)) + 0);
    }

}