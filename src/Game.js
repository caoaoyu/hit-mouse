var Game = (function(_super){
    function Game() {
        Game.super(this);
        this.mole = new Mole(this.normal, this.hit, 21)
    
        Laya.timer.loop(2000, this, this.onLoop);
    }
    Laya.class(Game, "Game", _super)

    var _proto = Game.prototype;

    _proto.onLoop = function() {
        this.mole.show();
    }

    return Game;
})(ui.GameUI)