from argparse import ArgumentParser

from dotenv import find_dotenv, load_dotenv
from werkzeug.serving import run_simple

from api._local import API


def get_options():
    parser = ArgumentParser()
    parser.add_argument(
        "-o", "--host", default="127.0.0.1", help="host name or IP address to bind"
    )
    parser.add_argument(
        "-p", "--port", type=int, default=5000, help="port number to listen"
    )
    parser.add_argument(
        "--no-reload", action="store_true", default=False, help="disable hot reload"
    )
    return parser.parse_args()


def main(options):
    app = API()
    reload_ = not options.no_reload
    run_simple(options.host, options.port, app, use_reloader=reload_)


if __name__ == "__main__":
    load_dotenv(find_dotenv())
    opts = get_options()
    main(opts)
