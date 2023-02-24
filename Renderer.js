class Renderer {

    renderUserData(userInfo) {
        this.renderUsersBasicInfo(userInfo)
        this.renderUserFriends(userInfo.friends)
        this.renderUserQuote(userInfo.quote)
        this.renderUserPokemon(userInfo.pokemon)
        this.renderUserAboutMe(userInfo.aboutMe)
    }

    renderUsersBasicInfo(userInfo) {
        const source = $('#user-basic-info-template').html()
        const template = Handlebars.compile(source)
        const newHTML = template({
            first: userInfo.first,
            last: userInfo.last,
            city: userInfo.city,
            state: userInfo.state,
            picture: userInfo.picture
        })
        $('.user-container').append(newHTML)
    }

    renderUserFriends(friends) {
        const friendsData = {
            friends: friends
        }
        const source = $('#friends-template').html()
        const template = Handlebars.compile(source)
        const newHTML = template(friendsData)
        $('.friends-container').append(newHTML)
    }

    renderUserQuote(userBasicInfo) {
        const source = $('#user-quote-template').html()
        const template = Handlebars.compile(source)
        const newHTML = template({
            quote: userBasicInfo.quote
        })
        $('.quote-container').append(newHTML)
    }

    renderUserPokemon(pokemon) {
        const source = $('#user-pokemon-template').html()
        const template = Handlebars.compile(source)
        const newHTML = template({
            pokemonImage: pokemon.picture,
            pokemonText: pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)
        })
        $('.pokemon-container').append(newHTML)
    }

    renderUserAboutMe(aboutMe) {
        const source = $('#user-about-template').html()
        const template = Handlebars.compile(source)
        const newHTML = template({
            aboutMe: aboutMe
        })
        $('.meat-container').append(newHTML)
    }

}