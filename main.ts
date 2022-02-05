namespace SpriteKind {
    export const podloga = SpriteKind.create()
    export const dziura = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.podloga, function (sprite, otherSprite) {
    if (ludzik.vy >= 0) {
        ludzik.vy = 0
        ludzik.bottom = otherSprite.top
    } else if (ludzik.vy < 0) {
        ludzik.vy = 0
        ludzik.top = otherSprite.bottom
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (ludzik.vy == 0) {
        ludzik.ay = 50
        ludzik.vy = -400
    }
})
function doGenerujpodloge (y: number) {
    podloga2 = sprites.create(img`
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        `, SpriteKind.podloga)
    podloga2.y = y
}
function doGenerujdziure (predkosc: number, x: number, y: number, lewoprawo: number) {
    dziura2 = sprites.create(img`
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        `, SpriteKind.dziura)
    dziura2.y = y
    dziura2.x = x
    dziura2.setVelocity(predkosc, 0)
    dziura2.setBounceOnWall(false)
    dziura2.z = lewoprawo
}
let dziura2: Sprite = null
let podloga2: Sprite = null
let ludzik: Sprite = null
ludzik = sprites.create(img`
    . . 4 4 4 . . . . 4 4 4 . . . . 
    . 4 5 5 5 e . . e 5 5 5 4 . . . 
    4 5 5 5 5 5 e e 5 5 5 5 5 4 . . 
    4 5 5 4 4 5 5 5 5 4 4 5 5 4 . . 
    e 5 4 4 5 5 5 5 5 5 4 4 5 e . . 
    . e e 5 5 5 5 5 5 5 5 e e . . . 
    . . e 5 f 5 5 5 5 f 5 e . . . . 
    . . f 5 5 5 4 4 5 5 5 f . . f f 
    . . f 4 5 5 f f 5 5 6 f . f 5 f 
    . . . f 6 6 6 6 6 6 4 4 f 5 5 f 
    . . . f 4 5 5 5 5 5 5 4 4 5 f . 
    . . . f 5 5 5 5 5 4 5 5 f f . . 
    . . . f 5 f f f 5 f f 5 f . . . 
    . . . f f . . f f . . f f . . . 
    `, SpriteKind.Player)
ludzik.y = 106
ludzik.ay = 50
controller.moveSprite(ludzik, 40, 0)
animation.runImageAnimation(
ludzik,
[img`
    . . 4 4 4 . . . . 4 4 4 . . . . 
    . 4 5 5 5 e . . e 5 5 5 4 . . . 
    4 5 5 5 5 5 e e 5 5 5 5 5 4 . . 
    4 5 5 4 4 5 5 5 5 4 4 5 5 4 . . 
    e 5 4 4 5 5 5 5 5 5 4 4 5 e . . 
    . e e 5 5 5 5 5 5 5 5 e e . . . 
    . . e 5 f 5 5 5 5 f 5 e . . . . 
    . . f 5 5 5 4 4 5 5 5 f . . f f 
    . . f 4 5 5 f f 5 5 6 f . f 5 f 
    . . . f 6 6 6 6 6 6 4 4 f 5 5 f 
    . . . f 4 5 5 5 5 5 5 4 4 5 f . 
    . . . f 5 5 5 5 5 4 5 5 f f . . 
    . . . f 5 f f f 5 f f 5 f . . . 
    . . . f f . . f f . . f f . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . 4 4 4 . . . . 4 4 4 . . . . 
    . 4 5 5 5 e . . e 5 5 5 4 . . . 
    4 5 5 5 5 5 e e 5 5 5 5 5 4 . . 
    4 5 5 4 4 5 5 5 5 4 4 5 5 4 . . 
    e 5 4 4 5 5 5 5 5 5 4 4 5 e . . 
    . e e 5 5 5 5 5 5 5 5 e e . . . 
    . . e 5 f 5 5 5 5 f 5 e . . . . 
    . . f 5 5 5 4 4 5 5 5 f . f f . 
    . . . 4 5 5 f f 5 5 6 f f 5 f . 
    . . . f 6 6 6 6 6 6 4 4 4 5 f . 
    . . . f 5 5 5 5 5 5 5 f f f . . 
    . . . f 5 4 5 f f f 5 f . . . . 
    . . . f f f f f . . f f . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . 4 4 4 . . . . 4 4 4 . . . . 
    . 4 5 5 5 e . . e 5 5 5 4 . . . 
    4 5 5 5 5 5 e e 5 5 5 5 5 4 . . 
    4 5 5 4 4 5 5 5 5 4 4 5 5 4 . . 
    e 5 4 4 5 5 5 5 5 5 4 4 5 e . . 
    . e e 5 5 5 5 5 5 5 5 e e . . . 
    . . e 5 f 5 5 5 5 f 5 e . . . . 
    . . f 5 5 5 4 4 5 5 5 f . f f . 
    . . . 4 5 5 f f 5 5 6 f f 5 f . 
    . . . f 6 6 6 6 6 6 4 f 5 5 f . 
    . . . f 5 5 5 5 5 5 5 4 5 f . . 
    . . . . f 5 4 5 f 5 f f f . . . 
    . . . . . f f f f f f f . . . . 
    `],
200,
true
)
for (let index = 0; index <= 6; index++) {
    doGenerujpodloge(index * 19)
    doGenerujdziure(randint(20, 80), -50, index * 19, randint(100, 200))
}
game.onUpdate(function () {
    if (dziura2.x <= dziura2.z * -1) {
        dziura2.setVelocity(dziura2.vx * -1, 0)
    } else if (dziura2.x >= dziura2.z + scene.screenWidth()) {
        dziura2.setVelocity(dziura2.vx * -1, 0)
    }
    if (ludzik.x <= -5) {
        ludzik.x = 165
    } else if (ludzik.x >= 165) {
        ludzik.x = -5
    }
})
