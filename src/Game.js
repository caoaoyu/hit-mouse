var Game = (function(_super){
    function Game() {
        Game.super(this);
        this.moles = [];
        this.molesNum = 9;
        this.hitCallBackHd = Laya.Handler.create(this, this.setScore, null, false)
        
        for(var i = 0; i < this.molesNum; i++) {
            this.box = this.getChildByName("item" + i);
            this.mole = new Mole(
                this.box.getChildByName("normal"),
                this.box.getChildByName("hit"),
                this.box.getChildByName("scoreText"),
                this.box.getChildByName("scoreLost"),
                21,
                this.hitCallBackHd,
                this.scoreNumber
             );
            this.moles.push(this.mole);
        }

        this.hammer = new Hammer()
        this.addChild(this.hammer);
        this.hammer.visible = false;
    }
    Laya.class(Game, "Game", _super)

    var _proto = Game.prototype;

    _proto.onLoop = function() {
        this.timeBar.value -= (1 / 5);

        if (this.timeBar.value <= 0) return this.gameOver();

        this.index = Math.floor(Math.random()*this.molesNum)
        this.moles[this.index].show();
    }
    _proto.gameReset = function () {
        this.score = 0;
        this.updateScoreUI();

        this.timeBar.value = 1;

        this.hammer.visible = true;
        this.hammer.hammerStart();

         Laya.timer.loop(1000, this, this.onLoop);

    }

    _proto.setScore = function (type) {
        this.score += type === 2 ? 10 : -10
        if (this.score <= 0) this.score = 0;

        this.updateScoreUI();
    }

    _proto.updateScoreUI = function () {
        this.data = {};
        this.temp = this.score;
        this.numsLength = (this.score).toString().length
        
        for(var i = 0; i < this.numsLength; i++) {
            this.data["item" + (9 - i)] = {
                visible: true,
                index: Math.floor(this.temp % 10),
            }
            this.temp /= 10;
        }

        this.scoreNumber.dataSource = this.data;
    }

    _proto.gameOver = function () {
        Laya.timer.clear(this, this.onLoop)
        this.hammer.visible = false;
        this.hammer.hammerEnd();

        index.gameOver = new GameOver();
        index.gameOver.centerX = 0;
        index.gameOver.centerY =  30;
        index.gameOver.updateOverScore(this.score)
        Laya.stage.addChild(index.gameOver);
    }
    return Game;
})(ui.GameUI)