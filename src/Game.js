var Game = (function(_super){
    function Game() {
        Game.super(this);
        this.moles = [];
         this.molesNum = 9;
        this.score = 0;
        this.timeBar.value = 1;
        this.hitCallBackHd = Laya.Handler.create(this, this.setScore, null, false)
        
        for(var i = 0; i < this.molesNum; i++) {
            this.box = this.getChildByName("item" + i);
            this.mole = new Mole(this.box.getChildByName("normal"), this.box.getChildByName("hit"), 10, this.hitCallBackHd);
            this.moles.push(this.mole);
        }

        Laya.timer.loop(1000, this, this.onLoop);
    }
    Laya.class(Game, "Game", _super)

    var _proto = Game.prototype;

    _proto.onLoop = function() {
        this.timeBar.value -= (1 / 90);

        if (this.timeBar.value <= 0) return this.gameOver();

        this.index = Math.floor(Math.random()*this.molesNum)
        this.moles[this.index].show();
    }

    _proto.setScore = function (type) {
        this.score += type === 2 ? 10 : -10
        if (this.score <= 0) this.score = 0;

        this.updateScoreUI();
    }

    _proto.updateScoreUI = function () {
        this.data = {};
        this.temp = this.score;
        
        for(var i = 9; i >= 0; i--) {
            this.data["item" + i] = {index: Math.floor(this.temp % 10)}
            this.temp /= 10;
        }
        this.scoreNumber.dataSource = this.data;
    }

    _proto.gameOver = function () {
        Laya.timer.clear(this, this.onLoop)
        console.log("over")
    }
    return Game;
})(ui.GameUI)