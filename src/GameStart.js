var GameStart = function (_super) {
    function GameStart() {
        GameStart.super(this)
        this.startBtn.on(Laya.Event.CLICK, this, this.onString)
    }
    Laya.class(GameStart, "GameStart", _super)
    var _proto = GameStart.prototype;

    _proto.onString = function () {
        this.removeSelf();
        index.game = new Game();
        Laya.stage.addChild(index.game)
    }
    return GameStart;
}(ui.GameStartUI)