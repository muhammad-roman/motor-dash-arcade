@namespace
class SpriteKind:
    Button = SpriteKind.create()

def on_overlap_tile(sprite, location):
    game.game_over(True)
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        whitetile
    """),
    on_overlap_tile)

def on_a_pressed():
    if choose != 0:
        if player1.vy == 0:
            player1.vy = -175
controller.A.on_event(ControllerButtonEvent.PRESSED, on_a_pressed)

def startPlaying():
    global gravity, player1
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
    player1 = sprites.create(assets.image("""
        plane
    """), SpriteKind.player)
    player1.ay = gravity
    scene.camera_follow_sprite(player1)
    controller.move_sprite(player1, 100, 0)

def on_overlap_tile2(sprite2, location2):
    game.game_over(False)
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        mine-1
    """),
    on_overlap_tile2)

def on_on_overlap(sprite3, otherSprite):
    global choose
    if otherSprite == play_button and controller.A.is_pressed():
        choose = 1
        sprites.destroy(cursor)
        sprites.destroy(play_button)
        startPlaying()
sprites.on_overlap(SpriteKind.player, SpriteKind.Button, on_on_overlap)

def show_menu():
    global play_button, cursor
    if choose == 0:
        scene.set_background_image(assets.image("""
            menu_background
        """))
        play_button = sprites.create(assets.image("""
            play_button
        """), SpriteKind.Button)
        cursor = sprites.create(assets.image("""
            cursor_icon
        """), SpriteKind.player)
        controller.move_sprite(cursor)

def on_overlap_tile3(sprite4, location3):
    game.game_over(True)
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        blacktile
    """),
    on_overlap_tile3)

cursor: Sprite = None
play_button: Sprite = None
gravity = 0
player1: Sprite = None
choose = 0
choose = 0
show_menu()