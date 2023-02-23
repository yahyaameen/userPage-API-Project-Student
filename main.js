const apiManager = new APIManager()
const renderer = new Renderer()
const display = function() {
    $(".user-container").empty()
    $(".quote-container").empty()
    $(".pokemon-container").empty()
    $(".meat-container").empty()
    $(".friends-container").empty()
    apiManager.getUserData()
        .then(allUserDataResults => {
            apiManager.addUserData(allUserDataResults)
            renderer.renderUserData(apiManager.data)
        })
}
$("#display").on('click', display)