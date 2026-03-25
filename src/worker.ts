type AssetBinding = {
  fetch(input: Request | URL | string, init?: RequestInit): Promise<Response>;
};

const worker = {
  async fetch(request: Request, env: { ASSETS: AssetBinding }) {
    const url = new URL(request.url);

    if (
      request.method === "GET" &&
      !url.pathname.endsWith("/") &&
      !url.pathname.includes(".")
    ) {
      url.pathname = `${url.pathname}/`;
      return env.ASSETS.fetch(new Request(url, request));
    }

    return env.ASSETS.fetch(request);
  },
};

export default worker;
