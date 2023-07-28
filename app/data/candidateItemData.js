import routes from "../navigation/routes";
import colors from "../config/colors";

export default [
  {
    id: 1,
    cardColor: colors.darkGreen,
    icon: {
      name: "trophy-outline",
      color: colors.white,
    },
    text: {
      color: colors.white,
      title: "Agenda",
    },
    route: routes.AGENDA,
  },
  {
    id: 2,
    cardColor: colors.primary,
    icon: {
      name: "office-building",
      color: colors.black,
    },
    text: {
      color: colors.black,
      title: "Blueprint",
    },
    route: routes.BLUEPRINT,
  },
  {
    id: 3,
    cardColor: colors.primary,
    icon: {
      name: "account-plus",
      color: colors.black,
    },
    text: {
      color: colors.black,
      title: "Social Responsibility",
    },
    route: routes.SOCIAL_RESPONSIBILITY,
  },
  {
    id: 4,
    cardColor: colors.darkGreen,
    icon: {
      name: "format-quote-close-outline",
      color: colors.white,
    },
    text: {
      color: colors.white,
      title: "Quotes",
    },
    route: routes.QUOTES,
  },
];
