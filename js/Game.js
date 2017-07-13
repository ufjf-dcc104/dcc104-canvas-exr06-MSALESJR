/**
 * Created by Marcus on 21/06/2017.
 */
var level  = null;
var tela = null;
var contexto = null;
var atual    = new Date();
var anterior = new Date();
var dt       = 0;

var dt_total = 0;
var grid = null;

var player_1 = null;

var player_1_img = new Image();
player_1_img.src = './img/player_1.png';

function init(){
    tela = document.getElementById('tela');
    contexto = tela.getContext('2d');

    player_1 = new Player();
    player_1.x = 387;
    player_1.y = 160;
    player_1.tag = 'player_1';
    player_1.img = player_1_img;

    grid = new Grid();
    grid.ConfigurarGridTesouroBomba();
    level = new Level();
    level.init(grid, player_1);
    requestAnimationFrame(drawFrame);
    initControls();
}

function drawFrame(){
    requestAnimationFrame(drawFrame);
    atual = new Date();
    dt = (atual  - anterior) / 1000 ;
    dt_total += dt;
    contexto.clearRect(0,0, tela.width, tela.height);
    grid.andar(player_1);
    var obj = grid.verificaEmVolta(player_1);
    level.desenha(contexto, dt);
    anterior = atual;

    if(obj.fim){
        alert("Fim de Jogo");
        location.reload();
    }
    if(120 - dt_total == 0){
        alert("Fim de Jogo, o tempo acabou !");
        location.reload();
    }

    if(grid.pontos == grid.numero_tesouro){
        alert("Parabens, voce ganhou!");
        location.reload();
    }

    contexto.fillStyle = 'yellow';
    contexto.font="20px Georgia";
    contexto.fillText("Bombas : " + obj.bombas,32,25);

    contexto.font="20px Georgia";
    contexto.fillText("Tesouro : " + obj.tesouros,585,25);

    contexto.fillStyle = '#fff';
    contexto.font="20px Georgia";
    contexto.fillText("Tempo Restante : "+( 120 - Math.floor(dt_total)),305,25);
}

function initControls() {
    document.addEventListener('keydown', function(e){
        switch(e.keyCode){
            /*** Controle player 1 **/
            case 37 :
                player_1.direcao = 4;
                break;
            case 38 :
                player_1.direcao = 8;
                break;
            case 39 :
                player_1.direcao = 6;
                break;
            case 40 :
                player_1.direcao = 2;
                break;
        }
    });

    document.addEventListener('keyup', function(e){
        switch(e.keyCode){
            /*** Controle player 1 **/
            case 37 :
            case 38 :
            case 39 :
            case 40 :
                player_1.direcao = 0;
                break;
        }
    });
}
