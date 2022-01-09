import { ColorsGroupsI } from "types/colors";

export const colorsData: ColorsGroupsI[] = [
  {
    title: "ОСНОВНЫЕ ЦВЕТА",
    colorsGroups: [
      {
        title: "Цвета меню",
        subtitle: "Оформление меню",
        description: "Настройте цвета меню",
        colors: [
          {
            label: "background",
            title: "Фон меню",
            description: "Цвет заливки основного фона",
          },
          {
            label: "sectionText",
            title: "Текст раздела",
            description: "Цвет текста разделов главного меню",
          },
          {
            label: "marker",
            title: "Маркер",
            description: "Цвет выбранного раздела меню",
          },
          {
            label: "sectionIcon",
            title: "Иконка раздела",
            description: "Цвет иконки в главном меню",
          },
        ],
      },
      {
        title: "Базовые элементы",
        subtitle: "Базовые элементы",
        description: "Цвета крупных элементов интерфейса",
        colors: [
          {
            label: "titleAndText",
            title: "Заголовок и текст",
            description: "Отличит заголовки от текста",
          },
          {
            label: "tags",
            title: "Метки",
            description: "Подписи полей ввода и таблиц",
          },
          {
            label: "icons",
            title: "Иконки",
            description: "Цвета иконок",
          },
          {
            label: "workspace",
            title: "Рабочая область",
            description: "Фон базовых элементов",
          },
        ],
      },
    ],
  },
  {
    title: "ДОПОЛНИТЕЛЬНЫЕ ЦВЕТА",
    colorsGroups: [
      {
        title: "Цвета уведомлений",
        subtitle: "Уведомления",
        description: "Цвета всплывающих подсказок",
        colors: [
          {
            label: "success",
            title: "Успех",
            description: "При положительном результате",
          },
          {
            label: "danger",
            title: "Опасность",
            description: "Ограничит возможности",
          },
          {
            label: "warning",
            title: "Предупреждение",
            description: "Для предупредительных сообщений",
          },
          {
            label: "info",
            title: "Информационный",
            description: "Донесет материал",
          },
        ],
      },
    ],
  },
];
