const apiManager = new APIManager()
const renderer = new Renderer()

const emptyContent = function() {
    $(".user-container").empty()
    $(".quote-container").empty()
    $(".pokemon-container").empty()
    $(".meat-container").empty()
    $(".friends-container").empty()
}

const display = function() {
    emptyContent()
    apiManager.getUserData()
        .then(allUserDataResults => {
            apiManager.addUserData(allUserDataResults)
            renderer.renderUserData(apiManager.data)
            $("#save").show()
        })
}
$("#display").on('click', display)

const saveUser = function() {
    const name = apiManager.data.first + " " + apiManager.data.last
    const userData = { user: apiManager.data }
    const userDataJson = JSON.stringify(userData)
    const nameJson = JSON.stringify(name)
    localStorage.setItem(nameJson, userDataJson)
    $("#cars").append(`<option value=${name}>${name}</option>`)
    $("#save").hide()

}

$("#save").on('click', saveUser)

$("#save").hide()

const loadUser = function() {
    const userName = $('#cars option:selected').text()
    const userNameStringify = JSON.stringify(userName)
    const jsonUserData = localStorage.getItem(userNameStringify)
    const parseUserData = JSON.parse(jsonUserData)
    apiManager.data = parseUserData.user
    emptyContent()
    renderer.renderUserData(apiManager.data)

}

$("#load").on('click', loadUser)