# Clash Royale API Wrapper
:package: A Javascript wrapper for Oficial Clash Royale API :video_game: - https://developer.clashroyale.com

[![travis build](https://img.shields.io/travis/chgasparoto/clash-royale-api.svg?style=flat-square)](https://travis-ci.org/chgasparoto/clash-royale-api)
[![codecov coverage](https://img.shields.io/codecov/c/github/chgasparoto/clash-royale-api.svg?style=flat-square)](https://codecov.io/gh/chgasparoto/clash-royale-api)
[![version](https://img.shields.io/npm/v/clash-royale-api.svg?style=flat-square)](https://www.npmjs.com/package/clash-royale-api)
[![downloads](https://img.shields.io/npm/dt/clash-royale-api.svg?style=flat-square)](https://www.npmjs.com/package/clash-royale-api)
[![license](https://img.shields.io/github/license/mashape/apistatus.svg?style=flat-square)](https://github.com/chgasparoto/clash-royale-api/blob/master/LICENSE)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

What things you need to install the software and how to install them

```sh
node -v
node: v6.0.0
```

## Installing

#### Using npm
```sh
npm install --save clash-royale-api
```

#### Using Yarn
```sh
yarn add clash-royale-api
```

## How to use

1. Go to [Clash Royale Developer Website](https://developer.clashroyale.com) to get your Token;
2. You can use your Token injecting directly inside the client constructor or you can use an environment variable to store it;
3. By default `axios` is used to call the API, if you want to use a different HTTP client, you must provide it as the second argument of the client constructor.

#### Importing with Commonjs style

```javascript
const Client = require('clash-royale-api')
```

#### Importing with ES6 modules style

```javascript
import Client from 'clash-royale-api'
```

#### Examples

Using the Token as an environment variable:
1. Create an environment variable with the command: `export CLASH_ROYALE_API_TOKEN=MY_TOKEN`
2. Rename the file `.env.example` to `.env` and set the Token inside it
3. Injecting directly inside the client constructor `const clashroyale = new Client(MY_TOKEN)`

#### Get Clans
```javascript
const clashroyale = new Client()

// Filtering by name
const clans = clashroyale.clans('Awesome Clan')

// Filtering by multiple fields
const filters = {
  name: 'my awesome clan',
  minMembers: 40,
  locationId: 57000038,
  limit: 5
}
const clans = clashroyale.clans(filters)

// Getting the records
clans.then(res => {
  // All records
  console.log(res.all)
}).catch(err => {
  console.error(err)
})
```

#### Get Clan by tag
```javascript
const clashroyale = new Client()

// Filtering by tag, it returns the specific clan data.
const clan = await clashroyale.clan('#1234TAG')
console.log(clan.all)

// Members list
console.log(clan.members)

// Leader
console.log(clan.leader)

// Coleaders
console.log(clan.coleaders)

// Elders
console.log(clan.elders)

```

#### Get Clan Warlog
```javascript
const clashroyale = new Client()

// Filtering by tag, it returns the specific clan data.
const clanWarlog = await clashroyale.clan('#1234TAG', 'warlog')
console.log(clan.all)
```

#### Get Clan Current War
```javascript
const clashroyale = new Client()

// Filtering by tag, it returns the specific clan data.
const clanWarlog = await clashroyale.clan('#1234TAG', 'currentwar')
console.log(clan.all)
```

#### Full API reference
```javascript
const clashroyale = new Client()

// Clans
const clans = await clashroyale.clan(`name:string or filters:object`)
const clan = await clashroyale.clan('#1234TAG')
const clanWarlog = await clashroyale.clan('#1234TAG', 'warlog')
const clanCurrentWar = await clashroyale.clan('#1234TAG', 'currentwar')

// Players
const player = await clashroyale.player('#1234TAG')
const playerUpcomingChests = await clashroyale.player('#1234TAG', 'upcomingchests')
const playerBattleLog = await clashroyale.player('#1234TAG', 'battlelog')

// Tournaments
const tournaments = await clashroyale.tournaments('tournament name')
const tournament = await clashroyale.tournament('#123TAG')
const globalTournaments = await clashroyale.globalTournaments()

// Cards
const cards = await clashroyale.cards()

// Locations
const locations = await clashroyale.locations([`limit:int`])
const location = await clashroyale.location('locationId')
const clansRankingByLocation = await clashroyale.location(123456, 'rankings/clans')
const playersRankingByLocation = await clashroyale.location(123456, 'rankings/players')
const clansWarsRankingByLocation = await clashroyale.location(123456, 'rankings/clanwars')
```

## Running the tests

To run the tests go to the terminal and enter `npm run test`

## TODO
- [x] first version covering all endpoints
- [ ] 100% unit test coverage
- [x] CI/CD with `sematinc-release` integrating with `Travis`, `Github` and `NPM registry`
- [ ] enhanced API for future versions. E.g. `await clashroyale.player('#1234TAG').chests()` for player upcoming chests
- [ ] full API page documentation
- [ ] integration examples

## Contributing

If you want to collaborate, please feel free. I appreciate any help :)

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/chgasparoto/clash-royale-api/tags).

## Authors

* **Cleber Gasparoto** - [Profile](https://github.com/chgasparoto)

See also the list of [contributors](https://github.com/chgasparoto/clash-royale-api/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
