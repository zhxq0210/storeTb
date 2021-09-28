<template>
    <div>
        <div class="welcome">
            <marquee>欢迎<span>{{Atype}}:{{ID}}</span>来到后台管理系统!!!</marquee>
        </div>
    </div>
</template>
<script>
import {mapActions,mapGetters} from 'vuex'
    export default{
        name:'context',
        data(){
            return {
                Atype:"",
                ID:""
            }
        },
        computed:{
           ...mapGetters(['adminData'])
        },
        methods: {
            ...mapActions(['login']),
            getAdmin(){
                var msg = localStorage.getItem("adData")
                var json = (new Function('return ' + msg))();
                this.ID = json.admins
                if(json.power===0){
                    this.Atype="管理员"
                }else if(json.power===1){
                    this.Atype="超级管理员"
                }
                
            }
        },
        mounted(){
            this.getAdmin()
        }
    }
</script>
<style scoped>
    div{
        width:100%;
        background-repeat: no-repeat;
        background: url("https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1523532154&di=ead1a8bd01a623d532f1757998610d98&imgtype=jpg&er=1&src=http%3A%2F%2Fpic.90sjimg.com%2Fback_pic%2Fqk%2Fback_origin_pic%2F00%2F02%2F28%2F2dcf646ef0e39a28e12663ecfa6f7d4c.jpg");
    }
   marquee{
       position:relative ;
       left:0;
       top:200px;
       padding:2px 5px;
       font-size:24px;
       font-weight:900;
       color:gold;
   }
    span{
        
        color:#fff;
    }
</style>