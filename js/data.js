import {getRandomInt} from "./utils";

export const QuestionType = {
  ARTIST: `artist`,
  GENRE: `genre`
};

const tracks = [
  {
    artist: `Kevin MacLeod`,
    name: `Long Stroll`,
    image: `https://yt3.ggpht.com/-fkDeGauT7Co/AAAAAAAAAAI/AAAAAAAAAAA/dkF5ZKkrxRo/s900-c-k-no-mo-rj-c0xffffff/photo.jpg`,
    src: `https://www.youtube.com/audiolibrary_download?vid=91624fdc22fc54ed`,
    genre: `Jazz`
  },
  {
    artist: `Jingle Punks`,
    name: `In the Land of Rhinoplasty`,
    image: `https://i.vimeocdn.com/portrait/992615_300x300`,
    src: `https://www.youtube.com/audiolibrary_download?vid=dc3b4dc549becd6b`,
    genre: `Rock`
  },
  {
    artist: `Audionautix`,
    name: `Travel Light`,
    image: `http://4.bp.blogspot.com/-kft9qu5ET6U/VPFUBi9W-MI/AAAAAAAACYM/UxXilXKYwOc/s1600/audionautix%2BHalf%2BSize.jpg`,
    src: `https://www.youtube.com/audiolibrary_download?vid=a127d9b7de8a17cf`,
    genre: `Country`
  },
  {
    artist: `Riot`,
    name: `	Level Plane`,
    image: `https://i.ytimg.com/vi/jzgM3m8Vp1k/maxresdefault.jpg`,
    src: `https://www.youtube.com/audiolibrary_download?vid=dfb828f40096184c`,
    genre: `R&B`
  },
  {
    artist: `Jingle Punks`,
    name: `Lucky Day`,
    image: `https://i.vimeocdn.com/portrait/992615_300x300`,
    src: `https://www.youtube.com/audiolibrary_download?vid=bcbe5be936a32fb1`,
    genre: `Pop`
  },
  {
    artist: `Quincas Moreira`,
    name: `Firefly`,
    image: `http://www.atribuna.com.br/fileadmin/_processed_/csm_Quincas-Moreira-Foto-Divulgacao_76d1a8b00e.jpg`,
    src: `https://www.youtube.com/audiolibrary_download?vid=79100e44c826e2f7`,
    genre: `Electronic`
  }
];

// levels
export const questionsMockData = [
  {
    questionTitle: `Выберите ${tracks[0].genre} треки`,
    tracks: {
      answer1: {
        audio: tracks[4].src,
        isCorrect: true
      },
      answer2: {
        audio: tracks[2].src,
        isCorrect: true
      },
      answer3: {
        audio: tracks[1].src,
        isCorrect: false
      },
      answer4: {
        audio: tracks[0].src,
        isCorrect: true
      }
    },
    type: QuestionType.GENRE
  },

  {
    questionTitle: `Выберите ${tracks[1].genre} треки`,
    audio: tracks[2].src,
    answers: {
      answer1: {
        avatar: tracks[0].image,
        name: tracks[0].name,
        isCorrect: true
      },
      answer2: {
        avatar: tracks[1].image,
        name: tracks[1].name,
        isCorrect: false
      },
      answer3: {
        avatar: tracks[2].image,
        name: tracks[2].name,
        isCorrect: false},
    },
    type: QuestionType.ARTIST
  },
  {
    questionTitle: `Выберите ${tracks[2].genre} треки`,
    audio: tracks[2].src,
    answers: {
      answer1: {
        avatar: tracks[2].image,
        name: tracks[2].name,
        isCorrect: false
      },
      answer2: {
        avatar: tracks[1].image,
        name: tracks[1].name,
        isCorrect: true
      },
      answer3: {
        avatar: tracks[2].image,
        name: tracks[2].name,
        isCorrect: true},
    },
    type: QuestionType.ARTIST
  },
  {
    questionTitle: `Выберите ${tracks[3].genre} треки`,
    tracks: {
      answer1: {
        audio: tracks[4].src,
        isCorrect: true
      },
      answer2: {
        audio: tracks[2].src,
        isCorrect: true
      },
      answer3: {
        audio: tracks[1].src,
        isCorrect: false
      },
      answer4: {
        audio: tracks[0].src,
        isCorrect: true
      }
    },
    type: QuestionType.GENRE
  },
];

export const Time = {
  FAST: 30,
  MAX: 300
};

export const MAX_QUESTIONS = 10;

export const MAX_ERRORS = 3;


// const shuffleArray = (arr) => {
//   for (let i = arr.length; i > 0; i--) {
//     [arr[i - 1], arr[getRandomInt(i)]] = [arr[getRandomInt(i)], arr[i - 1]];
//   }
//   return arr;
// };

export const initialState = {
  time: Time.MAX / 60,
  notes: 3,
  questions: questionsMockData,
  level: 1,
  answers: []
};
