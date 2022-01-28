module.exports = {
  async rewrites() {
      return [
        {
          source: '/api/:path*',
          destination: 'https://dev69061.service-now.com/api/now/table/x_682526_page_bu_0_cwig_page_builder/',
        },
      ]
    },
};
