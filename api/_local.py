from werkzeug.exceptions import HTTPException, NotFound
from werkzeug.routing import Map, Rule
from werkzeug.utils import ImportStringError, import_string
from werkzeug.wrappers import Request, Response


class API:

    def __init__(self):
        self.url_map = Map([
            Rule('/<name>', endpoint='func'),
        ])

    def dispatch_request(self, request: Request) -> Response:
        adapter = self.url_map.bind_to_environ(request.environ)
        try:
            _, values = adapter.match()
            try:
                func_name = values['name']
                import_name = f'api.{func_name}:api_func'
                handler = import_string(import_name)
            except ImportStringError as e:
                raise NotFound(e)
            return handler(request)
        except HTTPException as e:
            return e

    def wsgi_app(self, environ, start_response):
        request = Request(environ)
        response = self.dispatch_request(request)
        return response(environ, start_response)

    def __call__(self, environ, start_response):
        return self.wsgi_app(environ, start_response)
