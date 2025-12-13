#!/usr/bin/env python3
# -*- coding: utf-8 -*-

# Read the first line from both CSV files
with open('директ-импорт-главная.csv', 'rb') as f:
    header1_bytes = f.readline()
    
with open('директ-импорт-promo.csv', 'rb') as f:
    header2_bytes = f.readline()

# Convert to strings
header1 = header1_bytes.decode('utf-8').strip()
header2 = header2_bytes.decode('utf-8').strip()

# Split by tab
columns1 = header1.split('\t')
columns2 = header2.split('\t')

print(f"File 1 columns: {len(columns1)}")
print(f"File 2 columns: {len(columns2)}")
print()

# Find "Тип объявления" column
target = "Тип объявления"

for i, (col1, col2) in enumerate(zip(columns1, columns2)):
    if target in col1 or target in col2:
        print(f"Column {i}: '{col1}' vs '{col2}'")
        print(f"  Length: {len(col1)} vs {len(col2)}")
        print(f"  Equal: {col1 == col2}")
        print(f"  Bytes (file 1): {col1.encode('utf-8')}")
        print(f"  Bytes (file 2): {col2.encode('utf-8')}")
        print(f"  Hex (file 1): {col1.encode('utf-8').hex()}")
        print(f"  Hex (file 2): {col2.encode('utf-8').hex()}")
        print()
        
        # Character by character
        for j, (c1, c2) in enumerate(zip(col1, col2)):
            if c1 != c2:
                print(f"  Difference at position {j}:")
                print(f"    File 1: '{c1}' (ord={ord(c1)}, hex={hex(ord(c1))})")
                print(f"    File 2: '{c2}' (ord={ord(c2)}, hex={hex(ord(c2))})")

print("\n=== FULL COMPARISON ===")
if header1 == header2:
    print("Headers are IDENTICAL")
else:
    print("Headers are DIFFERENT")
    print(f"Length: {len(header1)} vs {len(header2)}")
