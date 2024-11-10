import pygame
import sys
import random
import os
from moviepy.editor import VideoFileClip
from personaje import Personaje, Enemigo, Enemigo2,Enemigo3, Explosion
from constantes import SCREEN_WIDTH, SCREEN_HEIGHT, ASSETS_PATH


def mostrar_video_inicial(screen, video_path, musica_path):
    # Cargar y reproducir la canción de fondo
    pygame.mixer.music.load(musica_path)
    pygame.mixer.music.play(-1)  # Reproduce la música en bucle

    # Cargar y reproducir el video
    clip = VideoFileClip(video_path)
    clip = clip.resize((SCREEN_WIDTH, SCREEN_HEIGHT))  # Ajustar tamaño del video
    for frame in clip.iter_frames(fps=24, dtype="uint8"):
        # Convertir el frame de numpy array a una surface de Pygame
        frame_surface = pygame.surfarray.make_surface(frame.swapaxes(0, 1))
        screen.blit(frame_surface, (0, 0))
        pygame.display.flip()

        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                pygame.quit()
                sys.exit()

    # Detener la música al finalizar el video
    pygame.mixer.music.stop()


def main():
    pygame.init()
    screen = pygame.display.set_mode((SCREEN_WIDTH, SCREEN_HEIGHT))
    pygame.display.set_caption('Star Trek Odisea')

    # Definir las rutas al video y la canción
    video_inicial_path = os.path.join(ASSETS_PATH, 'videos', 'star.mp4')
    musica_inicial_path = os.path.join(ASSETS_PATH, 'sounds', 'intro_song.mp3')

    # Mostrar el video inicial y reproducir la canción
    mostrar_video_inicial(screen, video_inicial_path, musica_inicial_path)

    # Cargar el icono del juego
    icon = pygame.image.load(os.path.join(ASSETS_PATH, 'images', '001.jfif'))
    pygame.display.set_icon(icon)

    # Cargar fondos
    fondo2 = pygame.image.load(os.path.join(ASSETS_PATH, 'images', 'fondo2.jfif'))
    fondo2 = pygame.transform.scale(fondo2, (SCREEN_WIDTH, SCREEN_HEIGHT))
    fondo3 = pygame.image.load(os.path.join(ASSETS_PATH, 'images', 'fondo3.jpg'))
    fondo3 = pygame.transform.scale(fondo3, (SCREEN_WIDTH, SCREEN_HEIGHT))
    fondo_actual = fondo2

    # Cargar sonidos
    sonido_laser = pygame.mixer.Sound(os.path.join(ASSETS_PATH, 'sounds', 'laserdis.mp3'))
    sonido_explosion = pygame.mixer.Sound(os.path.join(ASSETS_PATH, 'sounds', 'explosion.mp3'))

    # Configurar la música de fondo en el canal principal
    pygame.mixer.music.load(os.path.join(ASSETS_PATH, 'sounds', 'efectos.mp3'))
    pygame.mixer.music.play(-1)  # Reproduce en bucle

    # Crear un canal adicional para el segundo sonido de fondo
    canal_secundario = pygame.mixer.Channel(1)
    sonido_fondo_adicional = pygame.mixer.Sound(os.path.join(ASSETS_PATH, 'sounds', 'fondo.mp3'))
    canal_secundario.play(sonido_fondo_adicional, loops=-1)  # Reproduce en bucle

    # Configuración del personaje y otros elementos del juego
    personaje = Personaje(SCREEN_WIDTH // 2, SCREEN_HEIGHT // 2)
    enemigos = []
    explosiones = []
    puntos = 0
    nivel = 1

    # Bucle principal del juego
    clock = pygame.time.Clock()
    running = True
    while running:
        # Lógica del juego, manejo de eventos y actualización de pantalla
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                pygame.quit()
                sys.exit()

        keys = pygame.key.get_pressed()
        dx, dy = 0, 0
        if keys[pygame.K_LEFT]:
            dx = -5
        if keys[pygame.K_RIGHT]:
            dx = 5
        if keys[pygame.K_UP]:
            dy = -5
        if keys[pygame.K_DOWN]:
            dy = 5

        personaje.mover(dx, dy)

        if keys[pygame.K_SPACE]:
            personaje.lanzar_laser()
            sonido_laser.play()

        keys = pygame.key.get_pressed()
        if keys[pygame.K_SPACE]:
            personaje.lanzar_laser()
            sonido_laser.play()

        # Actualizar posición de enemigos y manejar colisiones
        for enemigo in enemigos[:]:  # Iterar sobre una copia para eliminar de la lista original
            enemigo.mover()
            if enemigo.rect.top > SCREEN_HEIGHT:
                enemigos.remove(enemigo)

            # Verificar colisiones con láseres
            for laser in personaje.lasers[:]:  # Iterar sobre una copia para eliminar de la lista original
                if enemigo.rect.colliderect(laser.rect):
                    explosiones.append(Explosion(enemigo.rect.centerx, enemigo.rect.centery))
                    enemigos.remove(enemigo)  # Eliminar el enemigo
                    personaje.lasers.remove(laser)  # Eliminar el láser
                    sonido_explosion.play()
                    puntos += 10  # Incrementar el puntajeos
                    break  # Salir del bucle para evitar errores

            if enemigo.rect.colliderect(personaje.shape):
                if not personaje.recibir_dano():
                    running = False  # Terminar el juego si la energía llega a 0

        # Generar enemigos aleatoriamente
        if random.random() < 0.02:
            x = random.randint(0, SCREEN_WIDTH - 50)  # Asegúrate de que el enemigo esté dentro de la pantalla
            tipo_enemigo = random.choice([Enemigo, Enemigo2, Enemigo3])
            enemigo = tipo_enemigo(x, 0)
            enemigos.append(enemigo)

        # Actualizar explosiones
        explosiones = [explosion for explosion in explosiones if explosion.actualizar()]

        # Cambiar el fondo cada 250 puntos
        if puntos > 0 and puntos % 250 == 0:
            if fondo_actual == fondo2:
                fondo_actual = fondo3
            else:
                fondo_actual = fondo2
            puntos += 10  # Aumenta puntos para evitar el cambio de fondo continuo

        # Dibujar fondo y objetos en la pantalla
        screen.blit(fondo_actual, (0, 0))
        personaje.dibujar(screen)
        for enemigo in enemigos:
            enemigo.dibujar(screen)
        for explosion in explosiones:
            explosion.dibujar(screen)

        # Mostrar marcador y nivel
        font = pygame.font.Font(None, 36)
        texto_puntos = font.render(f"Puntos: {puntos}", True, (255, 255, 255))
        texto_nivel = font.render(f"Nivel: {nivel}", True, (255, 255, 255))
        screen.blit(texto_puntos, (10, 50))
        screen.blit(texto_nivel, (10, 90))

        if puntos >= 250:
            nivel += 1
            puntos = 0  # Resetea el puntaje al cambiar de nivel

        pygame.display.flip()
        clock.tick(60)

    # Mostrar mensaje de GAME OVER
    screen.fill((0, 0, 0))

    # Definir fuente
    font_large = pygame.font.Font(None, 74)
    font_small = pygame.font.Font(None, 36)

    # Renderizar textos
    texto_game_over = font_large.render("GAME OVER CAPITAN", True, (255, 0, 0))
    texto_mensaje = font_small.render("Intentalo de nuevo", True, (255, 255, 255))

    # Calcular posiciones para centrar el texto
    pos_x_game_over = SCREEN_WIDTH // 2 - texto_game_over.get_width() // 2
    pos_y_game_over = SCREEN_HEIGHT // 2 - texto_game_over.get_height() // 2 - 20  # Ajusta el margen vertical

    pos_x_mensaje = SCREEN_WIDTH // 2 - texto_mensaje.get_width() // 2
    pos_y_mensaje = SCREEN_HEIGHT // 2 + texto_game_over.get_height() // 2 + 20  # Ajusta el margen vertical

    # Dibujar textos en la pantalla
    screen.blit(texto_game_over, (pos_x_game_over, pos_y_game_over))
    screen.blit(texto_mensaje, (pos_x_mensaje, pos_y_mensaje))

    # Actualizar la pantalla
    pygame.display.flip()
    pygame.time.wait(5000)  # Mostrar GAME OVER durante 5 segundos
    pygame.quit()
    sys.exit()


if __name__ == '__main__':
    main()

