var GameOver = function (_super) {
    function GameOver(nums) {
        GameOver.super(this);
        this.num = nums;
        this.updateOverScore();
        this.scoreOver.centerX = 0;
        this.againBtn.on(Laya.Event.CLICK, this, this.onAgainGame)
    }
    Laya.class(GameOver, "GameOver", _super)
    var _proto = GameOver.prototype;

    _proto.onAgainGame = function () {
        this.removeSelf();
         index.game = new Game();
         Laya.stage.addChild(index.game)
    }

    _proto.updateOverScore = function () {
        this.data = {};
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