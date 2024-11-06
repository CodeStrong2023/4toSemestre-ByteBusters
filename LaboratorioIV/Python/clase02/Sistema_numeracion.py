# Profundizando en los sistemas de numeración

# Sistema decimal
a = 10
print("Sistema decimal")
print(f"a: {a}")

# Sistema binario
a = 0b1010
# "0b" hace referencia a un numero binario
print("Sistema binario")
print(f"a: {a}")

# Sistema octal
a = 0o12
# "0o12" hace referencia a el numero 10 en el sistema octal
print("Sistema octal")
print(f"a: {a}")

# Sistema hexadecimal
a = 0xA
# "0xA" hace referencia a el numero 10 en el sistema hexadecimal
print("Sistema octal")
print(f"a: {a}")

# Conversion
# Base decimal
a = int("23", 10)
print("Conversion")
print("Cambiamos el valor")
print("Base decimal")
print(f"a: {a}")

# Base binario
a = int("1010", 2)
b = int("10111", 2)
print("Base binario")
print(f"a: {a}")
print(f"a: {b}")

# Base octal
a = int("27", 8)
print("Base octal")
print(f"a: {a}")

# Base hexadecimal
a = int("A", 16)
print("Base hexadecimal")
print(f"a: {a}")

# Base 5 sus valores son de 0 a 4
a = int("34", 5)
print("Base 5")
print(f"a: {a}")
