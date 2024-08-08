export function IndexPage() {
  return (
    <html lang="en">
      <head>
        <title>Code You - Web Dev - May 2024 Cohort</title>
        <style
          dangerouslySetInnerHTML={{
            __html: `
            * {
              box-sizing: border-box;
            }
            html {
              height: 100%;
            }
            body {
              font-family: sans-serif;
              margin: 0;
              height: 100%;
            }
            .container {
              display: flex;
              gap: 1rem;
              height: 100%;
            }
            nav {
              flex: 0 1 25%;
              overflow: scroll;
            }
            main {
              display: flex;
              width: 100%;
              flex: 0 1 auto;
            }
            iframe {
              flex: 1 1 auto;
              height: 100%;
              width: 100%;
              border: none;
            }
            ul {
              list-style-type: none;
              margin: 0;
              padding: 0;
            }
            li {
              min-height: 150px;
            }
            a {
              display: flex;
              height: 100%;
              width: 100%;
              border: 1px solid;
              place-content: center;
              place-items: center;
              font-size: 32px;
            }
          `,
          }}
        />
      </head>
      <body>
        <div className="container">
          <nav>
            <ul>
              <li>
                <a href=""></a>
              </li>
            </ul>
          </nav>
          <main>
            <iframe width="100%"></iframe>
          </main>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                const iframe = document.querySelector("iframe");
                iframe.setAttribute("width", \`\${window.innerWidth}\`);
                const links = document.querySelectorAll("a");
                links.forEach((link) => {
                  link.addEventListener("click", (event) => {
                    event.preventDefault();
                    iframe.src = link.href;
                  });
                });
              `,
            }}
          ></script>
        </div>
      </body>
    </html>
  );
}
