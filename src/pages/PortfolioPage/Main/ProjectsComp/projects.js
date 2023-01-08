import imgApiGithub0 from '../../../../assets/images/portfolioPage/api-github-0.png';
import imgApiGithub1 from '../../../../assets/images/portfolioPage/api-github-1.png';
import imgTodoList0 from '../../../../assets/images/portfolioPage/todo-list-0.png';
import imgTodoList1 from '../../../../assets/images/portfolioPage/todo-list-1.png';
import imgTicTacToe0 from '../../../../assets/images/portfolioPage/tic-tac-toe-0.png';
import imgTicTacToe1 from '../../../../assets/images/portfolioPage/tic-tac-toe-1.png';
import imgCalc0 from '../../../../assets/images/portfolioPage/calc-0.png';
import imgCalc1 from '../../../../assets/images/portfolioPage/calc-1.png';
import imgEasyBuy0 from '../../../../assets/images/portfolioPage/easy-buy-0.png';
import imgEasyBuy1 from '../../../../assets/images/portfolioPage/easy-buy-1.png';
import imgMusicPlayer0 from '../../../../assets/images/portfolioPage/musicPlayer-0.png';
import imgMusicPlayer1 from '../../../../assets/images/portfolioPage/musicPlayer-1.png';

const projects = [
  {
    name: 'api-github',
    description:
      'Projeto que consome a api do github. Nela é possível consultar dados dos usuários desde suas informações do perfil até as informações de seus repositórios, como nome do repositório, linguagem predominante e entre outros parâmetros. É notório que informações que poderiam vir a comprometer com a segurança do usuário não são possíveis de consultar pela API.',
    link: 'https://github.com/kevinCaldieraro/api-github',
    imgs: [imgApiGithub0, imgApiGithub1]
  },
  {
    name: 'todo-list',
    description:
      'Todo list criado com ReactJS. O projeto possibilita adicionar uma nova tarefa, marcar como concluída clicando em cima da tarefa ou excluir a mesma.',
    link: 'https://github.com/kevinCaldieraro/todo-list-react',
    imgs: [imgTodoList0, imgTodoList1]
  },
  {
    name: 'tic-tac-toe',
    description:
      'Jogo da velha feito com JavaScript vanilla. O projeto computa o número de vitórias de cada jogador ao final da partida caso ocorra algum ganhador. Quando a partida é dada como encerrada, o botão "reset" é mostrado na tela para que o usuário reinicie o jogo.',
    link: 'https://github.com/kevinCaldieraro/tic-tac-toe',
    imgs: [imgTicTacToe0, imgTicTacToe1]
  },
  {
    name: 'calc',
    description:
      'Calculadora criada com JavaScript vanilla. Nenhum segredo, é uma calculadora. Porém, possui uma feature interessante, um botão de mudar o tema (dark ou light).',
    link: 'https://github.com/kevinCaldieraro/calc',
    imgs: [imgCalc0, imgCalc1]
  },
  {
    name: 'Easy Buy',
    description:
      'Criado com JavaScript vanilla. Esse projeto consiste em ajudar o usuário a organizar sua lista de compras. Após preencher todos os campos e clicar no botão (cadastrar) é criado um elemento na área (Lista de produtos) e é efetuado todas as contas para somar o valor do produto no total. Ademais, há o botão de remover o respectivo item da lista e também o botão de limpar todos os itens da compra.',
    link: 'https://github.com/kevinCaldieraro/supermarketList',
    imgs: [imgEasyBuy0, imgEasyBuy1]
  },
  {
    name: 'musicPlayer',
    description:
      'Player de música criado JavaScript vanilla. Um simples player de música com uma barra de progresso que é possível interagir, além dos botões de avançar, voltar e pausar ou dar play.',
    link: 'https://github.com/kevinCaldieraro/musicPlayer',
    imgs: [imgMusicPlayer0, imgMusicPlayer1]
  }
];

export default projects;
