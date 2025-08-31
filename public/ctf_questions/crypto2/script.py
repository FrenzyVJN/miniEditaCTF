import random

flag = "flag{x0r_1s_r3v3rs1bl3}"

key = random.randint(1, 255)

cipher_bytes = bytes([ord(c) ^ key for c in flag])
cipher_hex = cipher_bytes.hex()

print(f"[*] Random key chosen: {key}")
print(f"[*] Ciphertext (hex): {cipher_hex}")