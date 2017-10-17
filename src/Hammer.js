var Hammer = function (_super) {
    function Hammer () {
       Hammer.super(this);
    }
    Laya.class(Hammer, "Hammer", _super)

    var _proto = Hammer.prototype;

    _proto.hammerStart = function () {
        Laya.Mouse.hide();
        Laya.stage.on(Laya.Event.MOUSE_DOWN, this, this.onMouseDown)
        Laya.stage.on(Laya.Event.MOUSE_MOVE, this, this.onMouseMove)
    }

     _proto.onMouseDown = function () {
        this.hit.play(0, false);
    }

    _proto.onMouseMove = function () {
        this.pos(Laya.stage.mouseX - this.width / 2, Laya.stage.mouseY - this.height / 3 )
    }

    _proto.hammerEnd = function () {
        this.hit.visible = false;
        Laya.Mouse.show();
        Laya.stage.off(Laya.Event.MOUSE_DOWN, this, this.onMouseDown)
        Laya.stage.off(Laya.Event.MOUSE_MOVE, this, this.onMouseMove)
    }

    return Hammer;
}(ui.HammerUI);