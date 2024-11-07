import math
from decimal import Decimal

# NaN (Not a Number)
a = float("NaN")
print(f"a: {a}")
b = float("2.0")
print(f"b: {b}")

print("")

# Modulo math
a = float("NaN")
print(f"Es de tipo NaN (Not a Number)?: {math.isnan(a)}")
b = float("2.0")
print(f"Es de tipo NaN (Not a Number)?: {math.isnan(b)}")

print("")

# Modulo decimal
a = Decimal("NaN")
print(f"Es de tipo NaN (Not a Number)?: {math.isnan(a)}")
b = Decimal("2.0")
print(f"Es de tipo NaN (Not a Number)?: {math.isnan(b)}")
