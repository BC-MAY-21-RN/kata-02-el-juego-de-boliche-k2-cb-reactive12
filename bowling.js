export default class Bowling {

    constructor(){
        this._rolls = [];
        this._score = [];
    }

    game(){
        for (let i = 0; i < 10; i++) {
            this.roll();
        }
        this._getScore();
        return [this._rolls , this._score];
    }

    //Generates the rolls
    roll(){
        this._rolls.push(this._generateFirstRoll());
        this._rolls.push(this._generateSecondRoll());   
        return this._rolls , this._score;
    }

    //Print Table Format
    _table(){
        let x = 0;
        for(let i = 0; i < 20; i++){
            console.log(`
            |${this._rolls[i]} - ${this._rolls[i + 1]}|
               ${this._score[0]}        
        `);
        i++, x++;
        }
    }

    _getScore(){
        for(let i = 0; i < this._rolls.length; i++){
            this._score.push((this._rolls[i]) + (this._rolls[i + 1]));
            i++;
        }
    }

    _generateFirstRoll(){
        return Math.floor((Math.random() * (11 - 0)) + 0);
    }

    _generateSecondRoll(){
        let x = this._rolls.length;
        return Math.floor((Math.random() * ((11 - this._rolls[x - 1]) - 0)) + 0);
    }

}