const app = Vue.createApp ({
    data() {
        return {
            state:true,
            inputname:'',
            namearray:[],
            error: '',
            showError: false,
            name:'',
            namewinner:'',
            result : ''
        }
    },
    computed:{
        isReady(){
            return this.namearray.length > 1
        }
    },
    methods: {
        addnameToList(){
            const getname = this.inputname;
            if (this.validate(getname)) {
                this.namearray.push(getname)
                this.inputname = ''
                console.log(this.namearray)
            } else {
                console.log('error')
                return this.showError = true
            }
        },
        validate(name){
            // memestikan error tetap kosong
            this.error = '';

            // if untuk memastikan bahwa input tidak boleh kosong
            if (name === '') {
                this.error = 'name empty'
                return false
            }

            // untuk memastikan input tidak ada yang sama
            if (this.namearray.includes(name)) {
                this.error = 'name must be unique'
                return false
            }
            return true
        },
        removeName(index){
            this.namearray.splice(index,1)
        },
        chackWinner(){
            this.rendemPick()
            this.state = false;
        },
        goBack(){
            this.state = true;
            this.namearray = [];
            this.inputname ='';
            this.error = '';
            this.showError= false;
            this.name = '';
            this.namewinner = '';
        },
        rendemPick(){
            this.name = Math.floor(Math.random() * this.namearray.length);
            this.namewinner = this.namearray[this.name]
            if (this.namewinner !== '') {
                while (this.namewinner === this.result) {
                    this.namewinner = this.namearray[this.name]
                }
            }
            this.result = this.namewinner
        }
    },
}).mount('#app')