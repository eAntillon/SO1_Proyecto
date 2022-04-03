from locust import HttpUser, between, task
import json, random

f = open('games.json')
data = json.load(f)

class WebsiteUser(HttpUser):
    wait_time = between(2, 5)
    
    # def on_start(self):
    #     self.client.post("/login", {
    #         "username": "test_user",
    #         "password": ""
    #     })
    
    @task
    def index(self):
        self.client.get("/")
    @task(3)
    def getInfo(self):
        game = random.choice(data['games'])
        self.client.post(f"/getInfo", json=game)