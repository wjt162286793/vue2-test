export const mixinTest = {
    data(){
        return{
            mixinvalue:'混入的默认值',
            numVal:666,
            objVal:{
                name:'王惊涛',
                age:28
            },
            value:'mixin的值'
        }
    },
    methods:{
        changeValue(){
            this.objVal.age ++
            console.log(this.comVal,'组件本身的一个值')
        }
    }
}
