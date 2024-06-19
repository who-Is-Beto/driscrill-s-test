type Messages = typeof import("@/locales/en.json");
type EsMessages = typeof import("@/locales/es.json");

declare interface IntlMessages extends Messages, EsMessages {}
