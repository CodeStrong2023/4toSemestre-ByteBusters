
# dar formato a un str

nombre = "Ariel"
edad = 28
mensaje_con_formato = "Mi Nombre es %s y tengo %d años" % (nombre, edad)
print(mensaje_con_formato)

# creamos una tupla
persona = ("carla", "gomez", 5000.00)
mensaje_con_formato = "Hola %s %s. Tu sueldo es de %.2f"% persona
print(mensaje_con_formato)

persona = ("carla", "gomez", 5000.00)
mensaje_con_formato = "Hola %s %s. Tu sueldo es de %.2f"# % persona
print(mensaje_con_formato % persona)

# parte 1 place holder

nombre = "Juan"
edad = 19
sueldo = 3000
# mensaje_con_formato = "Nombre {} Edad {} Sueldo {:.2f}".format(nombre, edad, sueldo)
# print(mensaje_con_formato)

# mensaje = "Nombre {0} Edad {1} Sueldo {2:.2f}".format(nombre, edad, sueldo)
# print(mensaje)

print("")

mensaje = "Nombre {n} Edad {e} Sueldo {s:.2f}".format(n=nombre, e=edad, s=sueldo)
print(mensaje)

print("")

diccionario = {"nombre": "ivan", "edad": 55, "sueldo": 3456.00}
mensaje = "Nombre {persona[nombre]} Edad {persona[edad]} Sueldo {persona[sueldo]}".format(persona=diccionario)
print(mensaje)
