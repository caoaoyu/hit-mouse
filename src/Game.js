var Game = (function(_super){
    function Game() {
        Game.super(this);
        this.moles = [];
        this.molesNum = 9;
        for(var i = 0; i < this.molesNum; i++) {
            this.box = this.getChildByName("item" + i)
            this.mole = new Mole(this.box.getChildByName("normal"), this.box.getChildByName("hit"), 10)
            this.moles.push(this.mole);
        }
    
        Laya.timer.loop(1000, this, this.onLoop);
    }
    Laya.class(Game, "Game", _super)

    var _proto = Game.prototype;

    _proto.onLoop = function() {
        this.index = Math.floor(Math.random()*this.molesNum)
        this.moles[this.index].show();
    }

    return Game;
})(ui.GameUI)