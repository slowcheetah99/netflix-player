export default function SelectionMap({ series, films }) {
  return {
    series: [
      {
        title: "Documentaries",
        data: series.filter((item) => item.genre === "documentaries"),
      },
      {
        title: "Children",
        data: series.filter((item) => item.genre === "children"),
      },
      { title: "Crime", data: series.filter((item) => item.genre === "crime") },
      {
        title: "Feel Good",
        data: series.filter((item) => item.genre === "feel-good"),
      },
      {
        title: "Comedies",
        data: series.filter((item) => item.genre === "comedies"),
      },
    ],
    films: [
      {
        title: "Drama Good",
        data: films.filter((item) => item.genre === "drama"),
      },
      {
        title: "Children",
        data: films.filter((item) => item.genre === "children"),
      },
      {
        title: "Suspense",
        data: films.filter((item) => item.genre === "suspense"),
      },
      {
        title: "Romance",
        data: films.filter((item) => item.genre === "romance"),
      },
      {
        title: "Thriller",
        data: films.filter((item) => item.genre === "thriller"),
      },
    ],
  };
}
