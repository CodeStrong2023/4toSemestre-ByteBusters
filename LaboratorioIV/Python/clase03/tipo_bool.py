
# Bool contiene los valores de true y false
# los tipos numericos, es false para el 0, true para los demas valores

valor = 0
resultado = bool(valor)
print(f"valor: {valor}, resultado: {resultado}")

print("")

valor = 15
resultado = bool(valor)
print(f"valor: {valor}, resultado: {resultado}")

print("")

# tipo string -> FALSE "" | TRUE para los demas valores
valor = ""
resultado = bool(valor)
print(f"valor: {valor}, resultado: {resultado}")
valor = "Hola"
resultado = bool(valor)
print(f"valor: {valor}, resultado: {resultado}")

print("")

# tipo colecciones -> FALSE para colec vacias | TRUE para las demas colec
#Lista
valor = []
resultado = bool(valor)
print(f"valor de una lista vacia: {valor}, resultado: {resultado}")
valor = [2, 3, 4]
resultado = bool(valor)
print(f"valor de una lista con elementos: {valor}, resultado: {resultado}")

print("")

#Tupla
valor = ()
resultado = bool(valor)
print(f"valor de una tupla vacia: {valor}, resultado: {resultado}")
valor = (2,)
resultado = bool(valor)
print(f"valor de una tupla con elementos: {valor}, resultado: {resultado}")

print("")

#Diccionario
valor = {}
resultado = bool(valor)
print(f"valor de un diccionario vacio: {valor}, resultado: {resultado}")
valor = {"Nombre":"Juan", "Apellido":"Ruiz"}
resultado = bool(valor)
print(f"valor de un diccionario con elementos: {valor}, resultado: {resultado}")

print("")

# Sentencias de control con bool
if bool(""):
    print("Regresa verdadero")
else:
    print("Regresa falso")

if "holaa":
    print("Regresa verdadero")
else:
    print("Regresa falso")

print("")

# ciclos
variable = 3
while variable:
    print("Regresa verdadero")
    break
else:
    print("Regresa falso")

variable = 0
while variable:
    print("Regresa verdadero")
    break
else:
    print("Regresa falso")

