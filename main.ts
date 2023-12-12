namespace SpriteKind {
    export const Button = SpriteKind.create()
}

scene.onOverlapTile(SpriteKind.Player, assets.tile`
        whitetile
    `, function on_overlap_tile(sprite: Sprite, location: tiles.Location) {
    
    level += 1
    if (level == 5) {
        game.gameOver(true)
    }
    
    startPlaying()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`
        mine-3
    `, function on_overlap_tile2(sprite2: Sprite, location2: tiles.Location) {
    game.gameOver(false)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`
        sonicenemy3
    `, function on_overlap_tile3(sprite3: Sprite, location3: tiles.Location) {
    game.gameOver(false)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function on_a_pressed() {
    if (choose != 0) {
        if (skin_number != 2) {
            if (player1.vy == 0) {
                player1.vy = -190
            }
            
        }
        
        if (skin_number == 2) {
            if (player1.vy == 0) {
                player1.vy = -225
            }
            
        }
        
    }
    
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function on_left_pressed() {
    
    if (spawn) {
        if (facing_right) {
            player1.image.flipX()
            facing_right = false
        }
        
    }
    
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`
        mine-2
    `, function on_overlap_tile4(sprite4: Sprite, location4: tiles.Location) {
    game.gameOver(false)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`
        pacman ghost
    `, function on_overlap_tile5(sprite5: Sprite, location5: tiles.Location) {
    game.gameOver(false)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`
        mine-0
    `, function on_overlap_tile6(sprite6: Sprite, location6: tiles.Location) {
    game.gameOver(false)
})
function startPlaying() {
    
    music.stopAllSounds()
    if (level == 0) {
        music.play(music.createSong(assets.song`
                lvl_0_theme
            `), music.PlaybackMode.LoopingInBackground)
        scene.setBackgroundImage(img`
            ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
        `)
        scene.setBackgroundColor(9)
        gravity = 500
        tiles.setCurrentTilemap(tilemap`
            level-1
        `)
        if (skin_number == 0) {
            player1 = sprites.create(assets.image`
                scooter
            `, SpriteKind.Player)
            controller.moveSprite(player1, 100, 0)
        }
        
        if (skin_number == 1) {
            player1 = sprites.create(assets.image`
                rocket
            `, SpriteKind.Player)
            controller.moveSprite(player1, 150, 0)
        }
        
        if (skin_number == 2) {
            player1 = sprites.create(assets.image`
                helicopter
            `, SpriteKind.Player)
            controller.moveSprite(player1, 90, 0)
        }
        
        player1.ay = gravity
        player1.setPosition(88, 110)
        scene.cameraFollowSprite(player1)
        spawn = true
    }
    
    if (level == 1) {
        music.play(music.createSong(assets.song`
                mario_theme
            `), music.PlaybackMode.LoopingInBackground)
        scene.setBackgroundColor(15)
        tiles.setCurrentTilemap(tilemap`
            level2
        `)
        player1.setPosition(88, 110)
    }
    
    if (level == 2) {
        music.play(music.createSong(assets.song`
                sonic_theme
            `), music.PlaybackMode.LoopingInBackground)
        scene.setBackgroundColor(9)
        tiles.setCurrentTilemap(tilemap`
            level3
        `)
        player1.setPosition(88, 110)
    }
    
    if (level == 3) {
        music.play(music.createSong(assets.song`
                pacman_theme
            `), music.PlaybackMode.LoopingInBackground)
        scene.setBackgroundColor(15)
        tiles.setCurrentTilemap(tilemap`
            level4
        `)
        player1.setPosition(88, 110)
    }
    
    if (level == 4) {
        
    }
    
}

controller.right.onEvent(ControllerButtonEvent.Pressed, function on_right_pressed() {
    
    if (spawn) {
        if (!facing_right) {
            player1.image.flipX()
            facing_right = true
        }
        
    }
    
})
function change_skin() {
    
    pause(500)
    skin_number += 1
    if (skin_number >= 3) {
        skin_number = 0
    }
    
    if (skin_number == 0) {
        show_skin = sprites.create(assets.image`
            scooter
        `, SpriteKind.Button)
    }
    
    if (skin_number == 1) {
        show_skin = sprites.create(assets.image`
            rocket
        `, SpriteKind.Button)
    }
    
    if (skin_number == 2) {
        show_skin = sprites.create(assets.image`
            helicopter
        `, SpriteKind.Button)
    }
    
    show_skin.setPosition(105, 88)
}

scene.onOverlapTile(SpriteKind.Player, assets.tile`
        sonicenemy
    `, function on_overlap_tile7(sprite7: Sprite, location7: tiles.Location) {
    game.gameOver(false)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`
        enemysonic
    `, function on_overlap_tile8(sprite8: Sprite, location8: tiles.Location) {
    game.gameOver(false)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`
        enemigo_1
    `, function on_overlap_tile9(sprite9: Sprite, location9: tiles.Location) {
    game.gameOver(false)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`
        pacman ghost2
    `, function on_overlap_tile10(sprite10: Sprite, location10: tiles.Location) {
    game.gameOver(false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Button, function on_on_overlap(sprite32: Sprite, otherSprite: Sprite) {
    
    if (otherSprite == play_button && controller.A.isPressed()) {
        sprites.destroy(cursor)
        sprites.destroy(play_button)
        sprites.destroy(skin)
        sprites.destroy(show_skin)
        show_intro()
        choose = 1
        startPlaying()
    }
    
    if (otherSprite == skin && controller.A.isPressed()) {
        sprites.destroy(show_skin)
        change_skin()
    }
    
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`
        mine-1
    `, function on_overlap_tile11(sprite22: Sprite, location22: tiles.Location) {
    game.gameOver(false)
})
function show_intro() {
    music.stopAllSounds()
    scene.setBackgroundImage(assets.image`
        intro_image
    `)
    pause(1000)
    music.play(music.createSong(assets.song`
            intro_theme
        `), music.PlaybackMode.UntilDone)
    pause(2000)
}

function show_menu() {
    
    if (choose == 0) {
        music.setVolume(15)
        music.play(music.createSong(assets.song`
                menu_music
            `), music.PlaybackMode.LoopingInBackground)
        scene.setBackgroundImage(assets.image`
            menu_background
        `)
        play_button = sprites.create(assets.image`
            play_button
        `, SpriteKind.Button)
        skin = sprites.create(assets.image`
            skin_button
        `, SpriteKind.Button)
        cursor = sprites.create(assets.image`
            cursor_icon
        `, SpriteKind.Player)
        skin.setPosition(80, 90)
        controller.moveSprite(cursor)
    }
    
}

scene.onOverlapTile(SpriteKind.Player, assets.tile`
        mine-4
    `, function on_overlap_tile12(sprite11: Sprite, location11: tiles.Location) {
    game.gameOver(false)
})
let skin : Sprite = null
let cursor : Sprite = null
let play_button : Sprite = null
let show_skin : Sprite = null
let gravity = 0
let spawn = false
let player1 : Sprite = null
let facing_right = false
let level = 0
let choose = 0
let skin_number = 0
skin_number = 0
choose = 0
level = 0
facing_right = true
show_menu()
