class Bowling {

    constructor() {
        this._rolls = [];
        this._score = [];
    }

    game() {
        for (let i = 0; i < 9; i++) {
            this.roll();
        }
        //this-_lastRoll ejemplo del ultimo cuadrante, index ( 18 y 19) , elemento 19 y 20
        this._lastRoll();
        this._getScore(this._rolls);
        //this._getFinalScore(this._rolls);
        this._table();

        return this._score;
    }

    _lastRoll() {
        this._rolls.push(this._generateFirstRoll()); //tiro 19
        if (this._rolls[this._rolls.length - 1] == 10) { //si tiro 18 == 10 abre tercer tiro (20)
            this._rolls.push(this._generateFirstRoll()); //tiro 20 genera numero entre 0 y 10
            if (this._rolls[this._rolls.length - 1] == 10) { //tiro == 10
                this._rolls.push(this._generateFirstRoll()); //tiro 21 genera numero entre 0 y 10
            }
            else {
                this._rolls.push(this._generateSecondRoll()); //tiro 20 genera numero entre 10 - tiro anterior y 0
            }
        }
        else {
            this._rolls.push(this._generateSecondRoll()); //tiro 20
            if ((this._rolls[this._rolls.length - 1] + this._rolls[this._rolls.length - 2]) == 10) { //Si tiro 20 + tiro 19 == 10, abre un tercer tiro
                this._rolls.push(this._generateFirstRoll());
            }
        }
    }

    roll() {
        this._rolls.push(this._generateFirstRoll());
        this._rolls.push(this._generateSecondRoll());
    }

    _getScore(rolls) {
        let s = 0;
        for (let i = 0; i < 18; i++) {
            if (rolls[i] == 10 && i != 18) {
                s += 10 + rolls[i + 2] + rolls[i + 3];
            }

            else if ((rolls[i] + rolls[i + 1]) == 10) {
                s = s + 10 + rolls[i + 2];
            }
            else {
                s = s + rolls[i] + rolls[i + 1];
            }
            this._score.push(s);
            i++;
        }
        this._getFinalScore(rolls);
        return this._score;
    }

    /*_getFinalScore() {
        let s = this._score[this._score.length - 1];
        if (this._rolls[18] == 10) {
            s += 10 + this._rolls[19] + this._rolls[20];
        }
        else if ((this._rolls[18] + this._rolls[19]) == 10) {
            s += 10 + this._rolls[20];
        }
        else {
            s += this._rolls[18] + this._rolls[19];
        }   
        this._score.push(s);
    } */

    _getFinalScore(rolls) {
        let s = this._score[this._score.length - 1];
        (rolls[18] == 10) ? s += 10 + rolls[19] + rolls[20] :
            ((rolls[18] + rolls[19]) == 10) ? s += 10 + rolls[20] :
                s += rolls[18] + rolls[19]
        this._score.push(s);
    }

    _generateFirstRoll() {
        return (Math.floor((Math.random() * (11))))

    }

    _generateSecondRoll() {
        let x = this._rolls.length;

        return Math.floor((Math.random() * ((11 - this._rolls[x - 1]))));
    }

    _table() {
        let x = 0;
        for (let i = 0; i < 18; i++) {
            console.log(`|${this._rolls[i]} - ${this._rolls[i + 1]}|
           ${this._score[x]}`);
            i++, x++;
        }

        if (this._rolls.length == 21) {
            console.log(`|${this._rolls[18]} - ${this._rolls[19]} - ${this._rolls[20]}|
            ${this._score[this._score.length - 1]}`);
        }
        else {
            console.log(`|${this._rolls[18]} - ${this._rolls[19]}|
           ${this._score[this._score.length - 1]}`);
        }
    }
}
let b = new Bowling();
b.game();

module.exports = { Bowling };