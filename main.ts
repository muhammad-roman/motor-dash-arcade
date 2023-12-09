scene.onOverlapTile(SpriteKind.Player, assets.tile`whitetile`, function (sprite, location) {
    game.gameOver(true)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (player1.vy == 0) {
        player1.vy = -175
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`mine-1`, function (sprite, location) {
    game.gameOver(false)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`blacktile`, function (sprite, location) {
    game.gameOver(true)
})
let player1: Sprite = null
scene.setBackgroundColor(9)
let gravity = 500
tiles.setCurrentTilemap(tilemap`level-1`)
player1 = sprites.create(assets.image`plane`, SpriteKind.Player)
player1.ay = gravity
scene.cameraFollowSprite(player1)
controller.moveSprite(player1, 100, 0)
