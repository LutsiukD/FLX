import * as moviesMock from "../mocks/movies.json";

export function findMovieById(id) {
  return moviesMock.data.find(element => Number(element.id) === Number(id));
}
