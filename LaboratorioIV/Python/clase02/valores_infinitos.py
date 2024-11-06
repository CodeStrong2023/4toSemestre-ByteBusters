import math # Mostrar si las variables son infinitas
from decimal import Decimal # Otra forma de utilizar los infitos con la clase decimal

# Manejo de valores infinitos
infinito_positivo = float("inf") # Cadena valor infinito
print(f"infinito positivo: {infinito_positivo}")
print(f"¿Es infinto?: {math.isinf(infinito_positivo)}") # Match se utiliza para comprobar que la variable es un infito

infinito_negativo = float("-inf") # Infinito negativo
print(f"infinito negativo: {infinito_negativo}")
print(f"¿Es infinto?: {math.isinf(infinito_negativo)}") # Match se utiliza para comprobar que la variable es un infito

# Modulo match
print("Módulo match")
infinito_positivo = math.inf # Utilizar el modulo math sin float para los valores infinitos
print(f"infinito positivo: {infinito_positivo}")
print(f"¿Es infinto?: {math.isinf(infinito_positivo)}") # Match se utiliza para comprobar que la variable es un infito

infinito_negativo = -math.inf
print(f"infinito negativo: {infinito_negativo}")
print(f"¿Es infinto?: {math.isinf(infinito_negativo)}") # Match se utiliza para comprobar que la variable es un infito

# Modulo decimal
print("Módulo decimal")
infinito_positivo = Decimal("Infinity")
print(f"infinito positivo: {infinito_positivo}")
print(f"¿Es infinto?: {math.isinf(infinito_positivo)}") # Match se utiliza para comprobar que la variable es un infito

infinito_negativo = Decimal("-Infinity")
print(f"infinito negativo: {infinito_negativo}")
print(f"¿Es infinto?: {math.isinf(infinito_negativo)}") # Match se utiliza para comprobar que la variable es un infito

