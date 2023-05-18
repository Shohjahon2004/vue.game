
const app = {
    data() {
        return {
            title: 'Выберите категорию',
            category: '',
            text: '',
            players: {
                RUST:['kamila','sardor'],
                CSGO :['Asad','tanya'],
                DOTA :['anvar','ktoto'],
            }
        }
        },
        methods: {
            add() {
                if(this.category != '' && this.name != '') {
                    this.players[this.category].push(this.text)
                    this.text = this.category = ''
                }
            }
        }
}

Vue.createApp(app).mount('#app')