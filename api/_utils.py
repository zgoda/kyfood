import json
from collections import namedtuple
from functools import wraps

from werkzeug.exceptions import MethodNotAllowed
from werkzeug.wrappers import Response as WResponse


class Response(WResponse):
    default_mimetype = "application/json"
    access_control_allow_headers = ["Content-Type", "Authorization"]


Error = namedtuple("Error", ["code", "description"])


def require_method(methods):
    def super_wrapped(func):
        @wraps(func)
        def wrapped(*args, **kw):
            request = args[0]
            if request.method not in methods:
                msg = f"method {request.method} not in allowed {methods}"
                raise MethodNotAllowed(response=Response(json.dumps({"message": msg})))

        return wrapped

    return super_wrapped
