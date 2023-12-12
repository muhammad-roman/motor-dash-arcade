@namespace
class SpriteKind:
    Button = SpriteKind.create()

def on_overlap_tile(sprite, location):
    global level
    level += 1
    startPlaying()
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        whitetile
    """),
    on_overlap_tile)

def on_a_pressed():
    if choose != 0:
        if skin_number != 2:
            if player1.vy == 0:
                player1.vy = -190
        if skin_number == 2:
            if player1.vy == 0:
                player1.vy = -225
controller.A.on_event(ControllerButtonEvent.PRESSED, on_a_pressed)

def on_overlap_tile2(sprite4, location3):
    global level
    level += 1
    startPlaying()
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        blacktile
    """),
    on_overlap_tile2)

def on_left_pressed():
    global facing_right
    if spawn:
        if facing_right:
            player1.image.flip_x()
            facing_right = False
controller.left.on_event(ControllerButtonEvent.PRESSED, on_left_pressed)

def startPlaying():
    global gravity, player1, spawn
    music.stop_all_sounds()
    if level == 0:
        music.play(music.create_song(assets.song("""
                lvl_0_theme
            """)),
            music.PlaybackMode.LOOPING_IN_BACKGROUND)
        scene.set_background_image(img("""
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
        """))
        scene.set_background_color(9)
        gravity = 500
        tiles.set_current_tilemap(tilemap("""
            level-1
        """))
        if skin_number == 0:
            player1 = sprites.create(assets.image("""
                scooter
            """), SpriteKind.player)
            controller.move_sprite(player1, 100, 0)
        if skin_number == 1:
            player1 = sprites.create(assets.image("""
                rocket
            """), SpriteKind.player)
            controller.move_sprite(player1, 150, 0)
        if skin_number == 2:
            player1 = sprites.create(assets.image("""
                helicopter
            """), SpriteKind.player)
            controller.move_sprite(player1, 90, 0)
        player1.ay = gravity
        player1.set_position(88, 110)
        scene.camera_follow_sprite(player1)
        spawn = True
    if level == 1:
        music.play(music.create_song(assets.song("""
                mario_theme
            """)),
            music.PlaybackMode.LOOPING_IN_BACKGROUND)
        scene.set_background_color(15)
        tiles.set_current_tilemap(tilemap("""
            level2
        """))
        player1.set_position(88, 110)
    if level == 2:
        music.play(music.create_song(assets.song("""
                sonic_theme
            """)),
            music.PlaybackMode.LOOPING_IN_BACKGROUND)
        scene.set_background_color(9)
        tiles.set_current_tilemap(tilemap("""
            level3
        """))
        player1.set_position(88, 110)
    if level == 3:
        music.play(music.create_song(assets.song("""
                pacman_theme
            """)),
            music.PlaybackMode.LOOPING_IN_BACKGROUND)
        scene.set_background_color(15)
        tiles.set_current_tilemap(tilemap("""
            level4
        """))
        player1.set_position(88, 110)
    if level == 4:
        pass

def on_right_pressed():
    global facing_right
    if spawn:
        if not (facing_right):
            player1.image.flip_x()
            facing_right = True
controller.right.on_event(ControllerButtonEvent.PRESSED, on_right_pressed)

def change_skin():
    global skin_number, show_skin
    pause(500)
    skin_number += 1
    if skin_number >= 3:
        skin_number = 0
    if skin_number == 0:
        show_skin = sprites.create(assets.image("""
            scooter
        """), SpriteKind.Button)
    if skin_number == 1:
        show_skin = sprites.create(assets.image("""
            rocket
        """), SpriteKind.Button)
    if skin_number == 2:
        show_skin = sprites.create(assets.image("""
            helicopter
        """), SpriteKind.Button)
    show_skin.set_position(105, 88)

def on_on_overlap(sprite3, otherSprite):
    global choose
    if otherSprite == play_button and controller.A.is_pressed():
        sprites.destroy(cursor)
        sprites.destroy(play_button)
        sprites.destroy(skin)
        sprites.destroy(show_skin)
        show_intro()
        choose = 1
        startPlaying()
    if otherSprite == skin and controller.A.is_pressed():
        sprites.destroy(show_skin)
        change_skin()
sprites.on_overlap(SpriteKind.player, SpriteKind.Button, on_on_overlap)

def on_overlap_tile3(sprite2, location2):
    game.game_over(False)
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        mine-1
    """),
    on_overlap_tile3)

def show_intro():
    music.stop_all_sounds()
    scene.set_background_image(assets.image("""
        intro_image
    """))
    pause(1000)
    music.play(music.create_song(assets.song("""
            intro_theme
        """)),
        music.PlaybackMode.UNTIL_DONE)
    pause(2000)
def show_menu():
    global play_button, skin, cursor
    if choose == 0:
        music.set_volume(15)
        music.play(music.create_song(assets.song("""
                menu_music
            """)),
            music.PlaybackMode.LOOPING_IN_BACKGROUND)
        scene.set_background_image(assets.image("""
            menu_background
        """))
        play_button = sprites.create(assets.image("""
            play_button
        """), SpriteKind.Button)
        skin = sprites.create(assets.image("""
            skin_button
        """), SpriteKind.Button)
        cursor = sprites.create(assets.image("""
            cursor_icon
        """), SpriteKind.player)
        skin.set_position(80, 90)
        controller.move_sprite(cursor)
skin: Sprite = None
cursor: Sprite = None
play_button: Sprite = None
show_skin: Sprite = None
gravity = 0
spawn = False
player1: Sprite = None
facing_right = False
level = 0
choose = 0
skin_number = 0
skin_number = 0
choose = 0
level = 0
facing_right = True
show_menu()