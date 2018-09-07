import {getWinScreen} from "../screens/result-success";


export const showResults = (statistics, gameResult) => {
  // Если игрок проиграл и у него закончилось время, то должна быть выведена фраза: «Время вышло! Вы не успели отгадать все мелодии»;
  if (gameResult.time <= 0) {
    return `Время вышло! Вы не успели отгадать все мелодии`;
  }
  // Если игрок проиграл и у него закончились попытки, то должна быть выведена фраза: «У вас закончились все попытки. Ничего, повезёт в следующий раз!».
  if (gameResult.notes > 3) {
    return `У вас закончились все попытки. Ничего, повезёт в следующий раз!`;
  }

  const playerPoints = gameResult.points;
  const points = statistics.slice();

  points.push(playerPoints);
  points.sort((a, b) => b - a);

  const players = points.length;
  const place = points.indexOf(playerPoints) + 1;
  const rate = (players - place) / players * 100;


  // Если игрок выиграл, то его результат должен быть выведен в виде фразы:
  // Вы заняли i место из t игроков.
  // Это лучше, чем у n% игроков,
  // где i — место, которое занял пользователь, t — общее кол-во игроков, n — процент успеха игрока;
  console.log(`Вы заняли ${place} место из ${players} игроков. Это лучше, чем у ${rate}% игроков.`);
  return `Вы заняли ${place} место из ${players} игроков. Это лучше, чем у ${rate}% игроков.`;
};

