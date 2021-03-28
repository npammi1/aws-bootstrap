 {
"name": "aws-bootstrap", 
"version": "1.0.0", 
"description": "", 
"main": "server1.js", 
"scripts": {
"start": "node ./node_modules/pm2/bin/pm2 start ./server1.js --name hello_aws --log ../logs/app.log ", 
"stop": "node ./node_modules/pm2/bin/pm2 stop hello_aws", 
"build": "echo 'Building...'" },
"dependencies": { "pm2": "^4.2.0" 
} }