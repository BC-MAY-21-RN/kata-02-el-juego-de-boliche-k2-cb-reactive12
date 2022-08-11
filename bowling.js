export default class Bowling {

    constructor() {
        this._rolls = [];
        this._score = [];
    }

    game() {
        for (let i = 0; i < 9; i++) {
            this.roll();
        }
        this._lastRoll();
        this._getScore();
        this._getFinalScore();

        return [this._rolls, this._score];
    }

    _lastRoll() {
        this._rolls.push(this._generateFirstRoll()); //tiro 18
        if (this._rolls[this._rolls.length - 1] == 10) { //si tiro 18 == 10 abre tercer tiro (20)
            this._rolls.push(this._generateFirstRoll()); //tiro 19 genera numero entre 0 y 10
            if (this._rolls[this._rolls.length - 1] == 10) { //tiro == 10
                this._rolls.push(this._generateFirstRoll()); //tiro 20 genera numero entre 0 y 10
            }
            else {
                this._rolls.push(this._generateSecondRoll()); //tiro 20 genera numero entre 10 - tiro anterior y 0
            }
        }
        else {
            this._rolls.push(this._generateSecondRoll()); //tiro 19 
            if ((this._rolls[this._rolls.length] + this._rolls[this._rolls.length - 1]) == 10) { //Si tiro 19 + tiro 18 == 10, abre un tercer tiro
                this._rolls.push(this._generateFirstRoll());
            }
        }
    }

    roll() {
        this._rolls.push(this._generateFirstRoll());
        this._rolls.push(this._generateSecondRoll());
    }

    _table() {
        let x = 0;
        for (let i = 0; i < 18; i++) {
            console.log(`|${this._rolls[i]} - ${this._rolls[i + 1]}|
   ${this._score[x]}`);
            i++, x++;
        }
        if (this._rolls.length == 21) {
            console.log(`|${this._rolls[18]} - ${this._rolls[19] - this._rolls[20]}
    ${this._score[this._score.length - 1]}`);
        }
        else {
            console.log(`|${this._rolls[18]} - ${this._rolls[19]}|
   ${this._score[this._score.length - 1]}`);
        }
    }

    _getScore() {
        let s = 0;
        for (let i = 0; i < 18; i++) {
            if (this._rolls[i] == 10 && i != 18) {
                s += 10 + this._rolls[i + 2] + this._rolls[i + 3];
            }

            else if ((this._rolls[i] + this._rolls[i + 1]) == 10) {
                s = s + 10 + this._rolls[i + 2];
            }
            else {
                s = s + this._rolls[i] + this._rolls[i + 1];
            }
            this._score.push(s);
            i++;
        }
    }

    _getFinalScore() {
        let s = this._score[this._score.length - 1];
        if (this._rolls[18] == 10) {
            s += 10 + this._rolls[19] + this._rolls[20];
        }
        else if (this._rolls[18] + this._rolls[19] == 10) {
            s += 10 + this._rolls[20];
        }
        else {
            s += this._rolls[18] + this._rolls[19];
        }
        this._score.push(s);
    }

    _generateFirstRoll() {
        return Math.floor((Math.random() * (11 - 0)) + 0);
    }

    _generateSecondRoll() {
        let x = this._rolls.length;
        return Math.floor((Math.random() * ((11 - this._rolls[x - 1]) - 0)) + 0);
    }

}