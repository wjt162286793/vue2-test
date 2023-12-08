export default{
    data(){
        return{
            extendVal:'extend的值',
            obj:{
                name:'wangjingtao',
                age:18
            }
        }
    },
    methods:{
        changeVal(){
            this.value ++
        },
        add(){
            this.obj.age++
        }
    }
}