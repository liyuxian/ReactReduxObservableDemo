import { PING , PONG  } from "./../types";

export const  ping = () => ({ type : PING});

export const pong = () => ({ type : PONG});