

Server Endpoints:

/api/cat

GET - Retrieves the cat that is currently available for adoption. If there are no cats available, returns 404 with message 'Queue empty'

DELETE - Adopts the available cat and removes it from the queue. If there are no cats available, will return 204

/api/dog

GET - Retrieves the dog that is currently available for adoption. If there is no dog available, returns 404 with message 'Queue empty'

DELETE - Adops the available dog and removes it from the queue. If there are no dogs available, will return 204

Techs Used:  Node, Express

