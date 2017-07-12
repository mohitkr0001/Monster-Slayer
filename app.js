new Vue({
  el:'#game',
  data:{
    playerHealth:60,
    monsterHealth:80,
    isGameStarted:false,
    counter:0
  },
  methods:{
    startGame:function(){
      this.isGameStarted=true;
      this.playerHealth=100;
      this.monsterHealth=100;
      this.counter=0;

    },
    onQuit:function(){
      this.isGameStarted=false;
      this.playerHealth=100;
      this.monsterHealth=100;
      this.counter=0;
    },
    onAttack:function(){
      let damageM=Math.max(Math.ceil(Math.random()*10),3);
      this.monsterHealth-=damageM;


      if(this.monsterHealth<=0){
        alert('You Won');
        this.isGameStarted=false;
      }

      let damageP=Math.max(Math.ceil(Math.random()*15),3);
      this.playerHealth-=damageP;

      if(this.playerHealth<=0){
        alert('You loss');
        this.isGameStarted=false;
      }
    },
    onHeal:function(){
      if(this.playerHealth>=100){
        this.playerHealth=100;
        alert('full health')
        return;
      }
      if(this.counter<5){
      let health=Math.ceil(Math.random()*5);
      this.playerHealth+=health;
      this.counter++;
      }
      else{
        alert('You used all your healing powers');
      }
    },
    onSpAttack:function(){
      let damageM=Math.max(Math.ceil(Math.random()*17),5);
      this.monsterHealth-=damageM;


      if(this.monsterHealth<=0){
        alert('You Won');
        this.isGameStarted=false;
      }

      let damageP=Math.max(Math.ceil(Math.random()*13),3);
      this.playerHealth-=damageP;

      if(this.playerHealth<=0){
        alert('You loss');
        this.isGameStarted=false;
      }
    }

    }


});
