from clase01.clase01.capa_datos_persona.Usuario import Usuario
from clase01.clase01.capa_datos_persona.usuario_dao import UsuarioDAO
from logger_base import log

opcion = None
while opcion != 5:
    print('Opciones')
    print('1- Listar usuarios')
    print('2- Agregar usuario')
    print('3- Actualizar usuario')
    print('4- Borrar usuario')
    print('5- Salir')

    try:
        opcion = int(input('Ingrese un número del 1-5: '))
    except ValueError:
        log.error('Debes ingresar un número válido entre 1 y 5')
        continue

    if opcion == 1:
        usuarios = UsuarioDAO.seleccionar()
        for usuario in usuarios:
            log.info(usuario)
        print(' ')

    elif opcion == 2:
        try:
            username_var = input('Ingrese su nombre de usuario: ')
            password_var = input('Ingrese su password: ')
            usuario = Usuario(username=username_var, password=password_var)
            usuario_insertado = UsuarioDAO.insertar(usuario)
            log.info(f'Usuario insertado: {usuario_insertado}')
        except Exception as e:
            log.error(f'Error al insertar usuario: {e}')

    elif opcion == 3:
        try:
            id_usuario_var = int(input('Ingrese el id del usuario a modificar: '))
            username_var = input('Ingrese el nombre del usuario a modificar: ')
            password_var = input('Ingrese la contraseña del usuario a modificar: ')
            usuario = Usuario(id_usuario=id_usuario_var, username=username_var, password=password_var)
            usuario_actualizado = UsuarioDAO.actualizar(usuario)
            log.info(f'Usuario modificado: {usuario_actualizado}')
            print(' ')
        except ValueError:
            log.error('Debes ingresar un número válido para el id del usuario')
        except Exception as e:
            log.error(f'Error al actualizar usuario: {e}')

    elif opcion == 4:
        try:
            id_usuario_var = int(input('Ingrese el id del usuario a eliminar: '))
            usuario = Usuario(id_usuario=id_usuario_var)
            usuario_eliminado = UsuarioDAO.eliminar(usuario)
            log.info(f'Usuario eliminado: {usuario_eliminado}')
            print(' ')
        except ValueError:
            log.error('Debes ingresar un número válido para el id del usuario')
        except Exception as e:
            log.error(f'Error al eliminar usuario: {e}')

else:
    print(' ')
    log.info('Salimos de la aplicación, Hasta pronto')
