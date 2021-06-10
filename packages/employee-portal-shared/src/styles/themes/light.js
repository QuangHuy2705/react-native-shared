import base from './base';

export const colors = {
  primary: '#00CA9D',
  secondary: '#5F5D70',
  success: '#4BB543',
  warning: '#F18939',
  error: '#E44141',
  tuna: '#35343D',
  midGray: '#5F5D70',
  white: '#FFFFFF',
  outrageousOrange: '#F15A22',
  wildWatermelon: '#ff6677',
  mountainMeadow: '#19cb86',
  burningOrange: '#fe6f3d',
  scooter: '#43c7d7',
  sandyBrown: '#f1a758',
  dimmed: '#828282'
};


export default {
  ...base,
  colors: {
    ...colors,
    dimmed: colors.midGray,
    icon: colors.tuna,
    text: colors.tuna,
    heading: colors.tuna,
    sideBar: colors.tuna,
  },

  colorStyles: {
    primary: colors.primary,
    warning: colors.warning,
    dimmed: colors.dimmed,
  },

  // Variants
  constainers: {
    default: {
      backgroundColor: colors.white,
    },
    primary: {
      backgroundColor: colors.primary,
    },
  },

  texts: {
    sucesss: {
      color: colors.sucesss
    },
    warning: {
      color: colors.warning
    },
    error: {
      color: colors.error
    },
    active: {
      color: colors.primary
    },
    dimmed: {
      color: colors.dimmed,
    },
    white: {
      color: colors.white,
    },
    outrageousOrangeBig: {
      fontSize: 13,
      color: colors.white
    }
  },

  buttons: {
    primary: {
      color: colors.white,
      backgroundColor: colors.primary,
    },
    secondary: {
      color: colors.white,
      backgroundColor: colors.secondary,
    },
    outrageousOrangeBig: {
      color: colors.white,
      backgroundColor: colors.outrageousOrange,
      borderRadius: 56,
      paddingVertical: 17,
    }
  },

  paper: {
    primary: {
      backgroundColor: colors.primary,
    },
    secondary: {
      backgroundColor: colors.secondary,
    },
    red: {
      backgroundColor: colors.wildWatermelon,
    },
    green: {
      backgroundColor: colors.mountainMeadow,
    },
    blue: {
      backgroundColor: colors.scooter,
    },
    orange: {
      backgroundColor: colors.burningOrange,
    },
    yellow: {
      backgroundColor: colors.sandyBrown,
    },
  },

  input: {
    sucesss: {
      borderColor: colors.sucesss,
      color: colors.sucesss,
    },
    warning: {
      borderColor: colors.warning,
      color: colors.warning
    },
    error: {
      borderColor: colors.error,
      color: colors.error
    },
    active: {
      borderColor: colors.primary,
      color: colors.primary
    },
    dimmed: {
      borderColor: colors.dimmed,
      color: colors.dimmed,
    },
  }
};
