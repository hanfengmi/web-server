module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps : [

    // First application
    {
      name      : 'han-web-SERVER',
      script    : 'server.js',
      env: {
        COMMON_VARIABLE: 'true'
      },
      env_production : {
        NODE_ENV: 'production'
      }
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
      path : '/var/www/html/',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env prod'
    },
    dev : {
      user : 'root',
      host : '47.98.195.42',
      ref  : 'origin/master',
      repo : 'https://github.com/hanfengmi/web-server.git',
      path : '/var/www/html/',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env dev',
      env  : {
        NODE_ENV: 'dev'
      }
    }
  }
};
