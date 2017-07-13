/**
 * Created by Marcus on 21/06/2017.
 */
function Grid(){
    this.grid = [
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
    ];

    this.grid_tesouro_bomba = [
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
    ];

    this.qtd_item_linha  = this.grid.length;
    this.qtd_item_coluna = this.grid[0].length;
    var img_piso = new Image();
    img_piso.src = './img/piso.png';
    this.piso = img_piso;

    var img_piso_2 = new Image();
    img_piso_2.src = './img/piso_2.png';
    this.piso_2 = img_piso_2;

    var img_piso_3 = new Image();
    img_piso_3.src = './img/piso_3.png';
    this.piso_3 = img_piso_3;

    var bomba = new Image();
    bomba.src = './img/bomba.png';
    this.bomba = bomba;

    var tesouro = new Image();
    tesouro.src = './img/tesouro.png';
    this.tesouro = tesouro;

    this.numero_bomba = 15;
    this.numero_tesouro = 15;
    this.pontos = 0;
}

Grid.prototype.addPosicaoRandom = function (valor) {
    var x = Math.floor(Math.random() * this.qtd_item_linha);
    var y = Math.floor(Math.random() * this.qtd_item_coluna);

    if(this.grid_tesouro_bomba[x][y] === 0){
        var linhas = new Array();
        for(var i=0; i<this.qtd_item_linha; i++){
            var colunas = new Array();
            for(var j=0;j<this.qtd_item_coluna; j++){
                if(y == i && x == j){
                    colunas.push(valor);
                }else{
                    colunas.push(this.grid_tesouro_bomba[i][j]);
                }

            }
            linhas.push(colunas)
        }
        this.grid_tesouro_bomba = linhas;
    }else{
        this.addPosicaoRandom(valor);
    }
}

Grid.prototype.ConfigurarGridTesouroBomba = function () {
    for(var i = 0; i < this.numero_bomba; i++){
        this.addPosicaoRandom(4);
    }
    for(var j = 0; j < this.numero_tesouro; j++){
        this.addPosicaoRandom(5);
    }
}

Grid.prototype.desenha = function(contexto){
    for(var x = 0; x < this.qtd_item_linha; x++){
        for(var y = 0; y < this.qtd_item_coluna; y++){
            if(this.grid[x][y] == 1){
                contexto.drawImage(this.piso,y * 32, x * 32);
            }
            if(this.grid[x][y] == 0){
                contexto.drawImage(this.piso_2,y * 32, x * 32);
            }
            if(this.grid[x][y] == 2){
                contexto.drawImage(this.piso_3,y * 32, x * 32);
            }
            if(this.grid[x][y] == 4){
                contexto.drawImage(this.bomba,y * 32, x * 32);
            }
            if(this.grid[x][y] == 5){
                contexto.drawImage(this.tesouro,y * 32, x * 32);
            }
        }
    }
}

Grid.prototype.andar = function (player) {

    var posicao_x_antes  = Math.floor((player.x - 16) / 32);
    var posicao_x_depois = Math.floor((player.x + 16) / 32);
    var posicao_y_antes  = Math.floor((player.y - 16) / 32);
    var posicao_y_depois = Math.floor((player.y + 16) / 32);

    if(player.direcao == 4 && (this.grid[posicao_y_antes][posicao_x_antes] === 1 || this.grid[posicao_y_depois][posicao_x_antes] === 1)){
        player.direcao = 0;
    }else if(player.direcao == 8 && (this.grid[posicao_y_antes][posicao_x_antes] === 1 || this.grid[posicao_y_antes][posicao_x_depois] === 1)){
        player.direcao = 0;
    }else if(player.direcao == 6 && (this.grid[posicao_y_depois][posicao_x_depois] === 1 || this.grid[posicao_y_antes][posicao_x_depois] === 1)){
        player.direcao = 0;
    }else if(player.direcao == 2 && (this.grid[posicao_y_depois][posicao_x_depois] === 1 || this.grid[posicao_y_depois][posicao_x_antes] === 1)){
        player.direcao = 0;
    }
    if(player.direcao !== 0){
        this.atualizaMapa(player.x,player.y,2);
    }
}

Grid.prototype.verificaEmVolta = function(player){
    var bombas = 0;
    var tesouros = 0;
    var x = Math.floor((player.x / 32));
    var y = Math.floor((player.y / 32));

    if(this.grid_tesouro_bomba[y][x] == 4 && this.grid[y][x] != 4){
        this.atualizaMapa(player.x,player.y,4);
        return {fim:true};
    }

    if(this.grid_tesouro_bomba[y][x] == 5 && this.grid[y][x] != 5){
        this.atualizaMapa(player.x,player.y,5);
        this.pontos += this.pontos;
        console.log(this.pontos);
    }

    if(this.grid_tesouro_bomba[y][x+1] == 4 && this.grid[y][x+1] != 4){
        bombas++;
    }

    if(this.grid_tesouro_bomba[y][x-1] == 4 && this.grid[y][x-1] != 4){
        bombas++;
    }
    if(this.grid_tesouro_bomba[y+1][x] == 4 && this.grid[y][x-1] != 4){
        bombas++;
    }
    if(this.grid_tesouro_bomba[y-1][x] == 4 && this.grid[y][x-1] != 4){
        bombas++;
    }

    if(this.grid_tesouro_bomba[y+1][x+1] == 4 && this.grid[y+1][x+1] != 4){
        bombas++;
    }
    if(this.grid_tesouro_bomba[y+1][x-1] == 4 && this.grid[y+1][x-1] != 4){
        bombas++;
    }
    if(this.grid_tesouro_bomba[y-1][x+1] == 4 && this.grid[y-1][x+1] != 4){
        bombas++;
    }
    if(this.grid_tesouro_bomba[y-1][x-1] == 4 && this.grid[y-1][x-1] != 4){
        bombas++;
    }

    if(this.grid_tesouro_bomba[y][x+1] == 5 && this.grid[y][x+1] != 5){
        tesouros++;
    }
    if(this.grid_tesouro_bomba[y][x-1] == 5 && this.grid[y][x-1] != 5){
        tesouros++;
    }
    if(this.grid_tesouro_bomba[y+1][x] == 5 && this.grid[y][x-1] != 5){
        tesouros++;
    }
    if(this.grid_tesouro_bomba[y-1][x] == 5 && this.grid[y][x-1] != 5){
        tesouros++;
    }

    if(this.grid_tesouro_bomba[y+1][x+1] == 5 && this.grid[y+1][x+1] != 5){
        tesouros++;
    }
    if(this.grid_tesouro_bomba[y+1][x-1] == 5 && this.grid[y+1][x-1] != 5){
        tesouros++;
    }
    if(this.grid_tesouro_bomba[y-1][x+1] == 5 && this.grid[y-1][x+1] != 5){
        tesouros++;
    }
    if(this.grid_tesouro_bomba[y-1][x-1] == 5 && this.grid[y-1][x-1] != 5){
        tesouros++;
    }
    return {bombas:bombas, tesouros : tesouros, fim: false}
}

Grid.prototype.atualizaMapa = function(x,y,valor){
    linhas = new Array();
    for(var i=0; i<this.qtd_item_linha; i++){
        colunas = new Array();
        for(var j=0;j<this.qtd_item_coluna; j++){
            if(Math.floor(y/32) == i && Math.floor(x/32) == j){
                colunas.push(valor);
            }else{
                colunas.push(this.grid[i][j]);
            }

        }
        linhas.push(colunas)
    }
    this.grid = linhas;
}