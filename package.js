Package.describe({
  name: 'alexche:social-publisher',
  summary: 'facebook and twitter status update library ',
  version: '1.0.2',
  git: 'https://github.com/alxche/social-publisher.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.2.1');
  api.addFiles('main.js');
  api.export('socialPublisher');
});


