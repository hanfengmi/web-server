module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps : [

    // First application
    {
      name      : 'server',
      script    : 'build/bundle.js',
      env: {
        COMMON_VARIABLE: 'true'
      },
      env_prod: {
        NODE_ENV: 'prod'
      },
      env_dev: {
          NODE_ENV: 'dev'
      },
    },
  ],

  /**
   * Deployment section
   * http://pm2.keymetrics.io/docs/usage/deployment/
   */
  deploy : {
    prod : {
      user : 'root',
      host : '47.98.195.42',
      ref  : 'origin/master',
      repo : 'https://github.com/hanfengmi/web-server.git',
      path : '/var/www/html/webServer',
      'post-deploy' : 'npm install && npm run build && pm2 reload ecosystem.config.js --env prod'
    },
    dev : {
      user : 'root',
      host : '47.98.195.42',
      ref  : 'origin/master',
      repo : 'https://github.com/hanfengmi/web-server.git',
      path : '/var/www/html/webServer',
      'post-deploy' : 'npm install && npm run build && pm2 reload ecosystem.config.js --env dev',
      env  : {
        NODE_ENV: 'dev'
      }
    }
  }
};
