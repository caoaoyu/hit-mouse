var GameOver = function (_super) {
    function GameOver() {
        GameOver.super(this);
        this.scoreOver.centerX = 0;
        this.againBtn.on(Laya.Event.CLICK, this, this.onAgainGame)
    }
    Laya.class(GameOver, "GameOver", _super)
    var _proto = GameOver.prototype;

    _proto.onAgainGame = function () {
        this.removeSelf();
        index.game.removeSelf();

        index.game = new Game();
        index.game.gameReset();
        Laya.stage.addChild(index.game)
    }

    _proto.updateOverScore = function (nums) {
        this.data = {};
        this.num = nums;
        this.temp = this.num;
        this.numsLength = (this.num).toString().length
        
        for(var i = 0; i < this.numsLength; i++) {
            this.data["item" + ((this.numsLength - i) - 1)] = {
                visible: true,
                index: Math.floor(this.temp % 10),
            }
            this.temp /= 10;
        }
        this.scoreOver.dataSource = this.data;
    }

    return GameOver;
}(ui.GameOverUI);