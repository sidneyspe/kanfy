export function loadLists() {
  return [
    {
      title: "Tarefas",
      creatable: true,
      cards: [
        {
          id: 1,
          title: "Estudar módulo 01",
          content: "Estudar módulo 01 de NodeJS",
          labels: ["#7159c1"],
          user: "https://api.adorable.io/avatars/285/abott@adorable.png"
        },
        {
          id: 2,
          title: "Criar vídeo para o Youtube",
          content:
            "Criar vídeo para o Youtube ensinando a recriar a interface do Pipefy",
          labels: ["#7159c1"],
          user: "https://api.adorable.io/avatars/285/abott@adorable.png"
        },
        {
          id: 3,
          title: "Estudar módulo 03",
          content: "Estudar módulo 03 de React Native",
          labels: ["#7159c1"],
          user: "https://api.adorable.io/avatars/285/abott@adorable.png"
        },
        {
          id: 4,
          title: 'Gravar Aula "NextJS" ',
          content:
            'Gravar Aula "NextJS: Utilizando server-side rendering com ReactJS"',
          labels: ["#54e1f7"],
          user: "https://api.adorable.io/avatars/285/abott@adorable.png"
        },
        {
          id: 5,
          title: "Gravar testes",
          content: "Gravar testes e deploy ReactJS",
          labels: ["#54e1f7"],
          user: "https://api.adorable.io/avatars/285/abott@adorable.png"
        }
      ]
    },
    {
      title: "Fazendo",
      creatable: false,
      cards: [
        {
          id: 6,
          title: "Recriando clone",
          content: "Recriando clone do Pipefy",
          labels: [],
          user: "https://api.adorable.io/avatars/285/abott@adorable.png"
        }
      ]
    },
    {
      title: "Pausado",
      creatable: false,
      cards: [
        {
          id: 7,
          title: "Gravar sobre Geolocalização",
          content: "Gravar sobre Geolocalização e mapas com React Native",
          labels: ["#7159c1"],
          user: "https://api.adorable.io/avatars/285/abott@adorable.png"
        },
        {
          id: 8,
          title: "Gravar Testes",
          content: "Gravar testes e deploy ReactJS",
          labels: ["#54e1f7"],
          user: "https://api.adorable.io/avatars/285/abott@adorable.png"
        },
        {
          id: 9,
          title: "Ajustes",
          content: "Ajustes na biblioteca unform",
          labels: []
        }
      ]
    },
    {
      title: "Concluído",
      creatable: false,
      done: true,
      cards: [
        {
          id: 10,
          title: "Gravar aula",
          content: "Gravar aula sobre deploy e CI com React Native",
          labels: []
        },
        {
          id: 12,
          title: "Gravar testes",
          content: "Gravar testes e deploy ReactJS",
          labels: ["#54e1f7"]
        },
        {
          id: 13,
          title: "Gravar Aula",
          content:
            'Gravar Aula "Internacionalização de aplicações Node.js, ReactJS e React Native"',
          labels: ["#7159c1"]
        }
      ]
    }
  ];
}
