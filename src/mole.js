var Mole = (function() {
    function Mole(normalState, hitState, downY) {
        this.normalState = normalState;
        this.hitState = hitState;
        this.downY = downY;
        this.upY = this.normalState.y;
        this.reset();
        this.normalState.on(Laya.Event.CLICK, this, this.hit);
    };

    var _proto = Mole.prototype;

    _proto.reset = function () {
        this.normalState.visible = false;
        this.hitState.visible = false;
        this.isActive = false;
        this.isShow = false;
        this.isHit = false;

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
            Laya.timer.once(500, this, this.reset);
        }
    }
    return Mole;
})();