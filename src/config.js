export const AWS_API =
    process.env.REACT_APP_AWS_REPORTS_API ||
    "https://4j0q2uhvn9.execute-api.eu-west-1.amazonaws.com/prod/c2w-lambda-api-clubs-master";
export const AWS_USERS_API =
    process.env.REACT_APP_AWS_USERS_API ||
    "https://04q8z8tigc.execute-api.eu-west-1.amazonaws.com/prod/c2w-lambda-users-master";

export const STRAVA_AUTH_URL =
    process.env.REACT_APP_STRAVA_AUTH_URL || "https://www.strava.com/oauth/authorize";
export const STRAVA_CLIENT_ID = process.env.REACT_APP_STRAVA_CLIENT_ID || "12901";
export const STRAVA_REDIRECT_URL =
    process.env.REACT_APP_STRAVA_REDIRECT_URL || "http://localhost:3000/thank-you";
export const STRAVA_LINK = `${STRAVA_AUTH_URL}?client_id=${STRAVA_CLIENT_ID}&response_type=code&redirect_uri=${STRAVA_REDIRECT_URL}`;
