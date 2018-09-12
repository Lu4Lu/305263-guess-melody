export default Object.freeze({
  header: {
    logo: `Угадай мелодию`,
  },
  welcome: {
    rulesTitle: `Правила игры`,
    text: `Правила просты:`,
    ruleList: new Set([`За 5 минут нужно ответить на все вопросы.`, `Можно допустить 3 ошибки.`]),
    welcomeText: `Удачи!`
  },
  artist: {
    question: `Кто исполняет эту песню?`,
  },
  modal: {
    title: `Подтверждение`,
    confirm: `Вы уверены что хотите начать игру заново?`
  },
  modalError: {
    title: `Произошла ошибка!`,
    text: `Статус: 404. Пожалуйста, перезагрузите страницу.`
  },
  result: {
    win: `Вы настоящий меломан!`,
    loseReplic: `Какая жалость!`,
    timeLoseReplic: `Увы и ах!`,
    loseStat: `У вас закончились все попытки. Ничего, повезёт в следующий раз!`,
    timeLose: `Время вышло! Вы не успели отгадать все мелодии`,
  },
  buttons: {
    play: `Начать игру`,
    replay: `Сыграть ещё раз`,
    loseReplay: `Попробовать ещё раз`,
    answerSend: `Ответить`,
    modalClose: `Закрыть`,
    modalConfirm: `Ок`,
    modalReject: `Отмена`
  }
});
