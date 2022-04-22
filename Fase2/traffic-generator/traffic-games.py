from locust import HttpUser, between, task
import json, random

f = open('games.json')
data = json.load(f)
# http://34.111.25.46:80/Game
class WebsiteUser(HttpUser):
    wait_time = between(1, 4)
    
    @task()
    def Game(self):
        game = random.choice(data['games'])
        resp = self.client.post(f"/Game", json=game)
        print(game)
        print(resp)
        print("-"*20)