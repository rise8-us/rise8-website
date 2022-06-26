# rise8-website
Hosted using ApostropheCMS

See additional documentation [here](docs).

## Getting Started
### Prerequisites
#### Install NVM
See additional documentation [here](https://github.com/nvm-sh/nvm).
````shell
brew install nvm
````
#### Install MongoDB on MacOS
See additional documentation [here](https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-os-x/).
```shell
brew tap mongodb/brew
brew update
brew install mongodb-community@5.0
```
#### Install ImageMagick
See additional documentation [here](https://imagemagick.org/script/index.php).
```shell
brew install imagemagick
```
#### Install Azure CLI & Login
See additional documentation [here](https://docs.microsoft.com/en-us/cli/azure/install-azure-cli).
```shell
brew install azure-cli
az login
```

### Add Custom domain to hosts file (optional)
```shell
./scripts/add-hosts-dev-domain
```

```.dotenv
# .env.local
BASE_URL=http://local.rise8.us:3000
```

### Create local dotenv
```shell
cp .env .env.local
# Reach out to repo admins for access to variables
```

### Local Development
```shell
nvm use
npm install
npm run docker:mongo
npm run mongo:sync
npm run azure:sync
npm run dev
```
