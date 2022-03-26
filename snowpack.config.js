/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: '/',
    src: '/_dist_',
  },
  buildOptions: {
    out: 'docs',
    metaUrlPath: 'snowpack',
    baseUrl: 'https://nicolasarevalo.github.io/avoccados-project',
  },
}
