import routes from "../navigation/routes";
import colors from "../config/colors";

export default [
  {
    id: 1,
    cardColor: colors.olive,
    icon: {
      name: "map-check-outline",
      color: colors.white,
    },
    text: {
      color: colors.white,
      title: "Blueprint",
    },
    route: routes.BLUEPRINT_SCREEN,
  },

  {
    id: 4,
    cardColor: colors.darkGreen,
    icon: {
      name: "trophy-award",
      color: colors.white,
    },
    text: {
      color: colors.white,
      title: "Previous Achievements",
    },
    route: routes.PREVIOUS_ACHIEVEMENTS,
  },
];
