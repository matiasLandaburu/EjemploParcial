import Vue from 'vue'

Vue.filter('pasarAmayuscula', function(value) {
    return value.toUpperCase()
})
Vue.filter('primeraMayuscula', function(value) {
    return value.charAt(0).toUpperCase() + value.substr(1)
})
Vue.filter('pasarAminuscula', function(value) {
    return value.toLowerCase()
})