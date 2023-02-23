class APIManager {
    constructor() {
        this.data = {}
    }

    getUserData() {
        let userInfoPromise = this.getUsersBasicInfo()
        let userQuotePromise = this.getUserQuote()
        let userPokemonPromise = this.getUserPokemon()
        let userAboutMePromise = this.getUserAboutMe()
        return Promise.all([userInfoPromise, userQuotePromise,
            userPokemonPromise, userAboutMePromise
        ])
    }

    getUsersBasicInfo() {
        return $.get('https://randomuser.me/api/?results=7')
    }

    getUserQuote() {
        return $.get('https://api.kanye.rest')
    }

    getUserPokemon() {
        const POKEMONS_NUMBER = 949
        const pokemonRandomNumber = Math.floor(Math.random() * POKEMONS_NUMBER) + 1
        return $.get(`https://pokeapi.co/api/v2/pokemon/${pokemonRandomNumber}`)
    }

    getUserAboutMe() {
        return $.get('https://baconipsum.com/api/?type=meat-and-filler')
    }

    addUserData(allUserDataResults) {
        let [userInfoData, userQuoteData,
            userPokemonData, userAboutMeData
        ] = allUserDataResults
        this.addUserBasicInfo(userInfoData)
        this.addUserQuote(userQuoteData)
        this.addUserPokemon(userPokemonData)
        this.addUserAboutMe(userAboutMeData)
    }

    addUserBasicInfo(usersInfo) {
        const usersArray = usersInfo.results
        const mainUser = usersArray[0]
        this.addMainUser(mainUser)
        this.addUserFriends(usersArray)
    }
    addMainUser(mainUser) {
        this.data.first = mainUser.name.first
        this.data.last = mainUser.name.last
        this.data.city = mainUser.location.city
        this.data.state = mainUser.location.state
        this.data.picture = mainUser.picture.medium
    }
    addUserFriends(usersArray) {
        this.data.friends = []
        for (let i = 1; i < usersArray.length; i++) {
            let friend = {}
            friend.first = usersArray[i].name.first
            friend.last = usersArray[i].name.last
            this.data.friends.push(friend)
        }
    }

    addUserQuote(userQuote) {
        this.data.quote = userQuote
    }

    addUserPokemon(pokemon) {
        this.data.pokemon = { name: pokemon.name, picture: pokemon.sprites.front_default }
    }

    addUserAboutMe(aboutMe) {
        this.data.aboutMe = aboutMe[0]
    }
}