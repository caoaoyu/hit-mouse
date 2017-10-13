var Mole = (function() {
    function Mole(normalState, hitState, downY, hitCallBackHd, scoreNumber) {
        this.normalState = normalState;
        this.hitState = hitState;
        this.downY = downY;
        this.upY = this.normalState.y;
        this.normalState.on(Laya.Event.CLICK, this, this.hit);
        this.hitCallBackHd = hitCallBackHd;
        this.scoreNumber = scoreNumber;
        this.reset();
    };

    var _proto = Mole.prototype;

    _proto.reset = function () {
        this.isActive = false;
        this.isShow = false;
        this.isHit = false;
        this.hitState.visible = false;
        this.normalState.visible = false;
        this.scoreNumber.dataSource = { "item9": { visible: true, index: 0 } }

    }

    _proto.show = function () {
        if (this.isActive) return
        this.isActive = true;
        this.isShow = true;
        this.type = Math.random() < 0.3 ? 1 : 2;
        this.normalState.skin = "comp/mouse_normal_" + this.type + ".png";
        this.hitState.skin = "comp/mouse_hit_" + this.type + ".png";
        this.normalState.y = this.downY;
        this.normalState.visible = true;
        Laya.Tween.to(this.normalState, {y: this.upY}, 500, Laya.Ease.backOut, Laya.Handler.create(this, this.showComplete))

    }

    _proto.showComplete = function () {
        if (this.isActive && !this.isHit) {
            Laya.timer.once(2000, this, this.hide)
        }
    }

    _proto.hide = function () {
        if(this.isShow && !this.isHit){
            this.isShow = false;
            Laya.Tween.to(this.normalState, { y: this.downY }, 200, Laya.Ease.backIn, Laya.Handler.create(this, this.reset))
        }
    }

    _proto.hit = function () {
        if (this.isShow && !this.isHit) {
            this.isShow = false;
            this.isHit = true;
            Laya.timer.clear(this, this.hide);
            this.normalState.visible = false;
            this.hitState.visible = true;
            this.hitCallBackHd.runWith(this.type);
            Laya.timer.once(500, this, this.reset);
        }
    }
    return Mole;
})();