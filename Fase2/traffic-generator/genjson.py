
import random

for i in range(60):
    print('{"game_id": %s, "players": %s},' % (random.randint(1, 5), random.randint(10, 40)))