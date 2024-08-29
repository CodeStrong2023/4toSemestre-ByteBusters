# Profundizando en el tipo float

# float
a = 3.0
print(f"a: {a}")
print(f"a: {a:.2f}")
# .2f indica la cantidad de decimales a mostrar

# Constructor de tipo float -> recibe enteros y tipo string
a = float(10) # numero entero "int"
b = float("10")
print("Numero entero convertido en tipo float")
print(f"a: {a:.2f}")
print("String convertido en tipo float")
print(f"b: {b:.2f}")

# Notación exponencial (valores positivos o negativos)
a = 3e5 # Simplifica la cantidad de 0
b = 3e50 # No va a mostrar los 50 ceros, solo lo mostrara
c = 3e-5
print("Notación exponencial con valores positivos tipo float")
print(f"a: {a}")
print(f"a: {a:.2f}")
print(f"b: {b}") # Simplificar un numero muy largo
print(f"c: {c:.5f}") # .5f es para visualizar la cantidad de ceros adelante del numero

# Cualquier calculo que incluye un float , todo cambia a float
a = 4.0 + 5 # Flotante + un entero
print("Suma de un flotante y un entero")
print(a)
print(type(a)) # Indica que el resultado es un float
