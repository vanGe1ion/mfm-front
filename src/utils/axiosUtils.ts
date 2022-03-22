import axios from "axios";

export const axiosGet = async (
  getPath: string,
  params: Object,
  success: (data: any) => void
) => {
  await axios
    .get(getPath, { params })
    .then((response) => {
      if (response.data.error)
        console.log(
          "Запрос вернул ответ с ошибкой: " + response.data.error.info
        );
      else success(response.data);
    })
    .catch((error) =>
      console.log("Ошибка запроса к внешнему ресурсу: " + error)
    );
};
