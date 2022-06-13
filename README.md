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
npm run dev
```
