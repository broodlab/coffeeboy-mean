if (!process.env.COFFEEBOY_PROFILE) {
  throw "The environment variable 'COFFEEBOY_PROFILE' is not set.";
}

export const profile: string = process.env.COFFEEBOY_PROFILE;
