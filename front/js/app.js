class App {
    constructor() {


        this.$kanapWrapper = document.querySelector('.items')
        this.kanapApi = new Api('http://localhost:3000/api/products')
    }


    async main() {
        const kanapsData = await this.kanapApi.get()

        const Kanaps = kanapsData.map(items => new KanapFactory(items))

        console.log(Kanaps)

        Kanaps.forEach(items => {
            const Template = new KanapCard(items)
            this.$kanapWrapper.appendChild(
                Template.createKanapCard()
            )
        })
    }
}

const app = new App()
app.main()