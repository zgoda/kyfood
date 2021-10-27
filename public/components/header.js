export function Header() {
  return (
    <header class="navigation">
      <nav class="container">
        <a href="/">
          <h1>Home</h1>
        </a>
        <ul class="float-right">
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/error">Error</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
