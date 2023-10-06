export const VEVENT_KEYS = [
  "SUMMARY",
  "UID",
  "CREATED",
  "LAST-MODIFIED",
  "DTSTAMP",
  "DTSTART",
  "LOCATION",
  "DESCRIPTION",
  "CATEGORIES",
  "RRULE",
  "ALARM",
  "TRANSP",
  "URL",
  "DTEND",
  "DURATION",
  "GEO",
  "CLASS",
  "ORGANIZER",
  "PRIORITY",
  "SEQ",
  "STATUS",
  "ATTACH",
  "RECURRENCE-ID",
  "ATTENDEE",
  "COMMENT",
] as const;
export type VEventKeys = typeof VEVENT_KEYS;
export type VEventKey = VEventKeys[number];

export const VEVENT_OBJECT_KEYS = [
  "summary",
  "uid",
  "created",
  "lastModified",
  "stamp",
  "start",
  "location",
  "description",
  "categories",
  "recurrenceRule",
  "alarm",
  "timeTransparent",
  "url",
  "end",
  "duration",
  "geo",
  "class",
  "organizer",
  "priority",
  "sequence",
  "status",
  "attach",
  "recurrenceId",
  "attendee",
  "comment",
] as const;

export type VEventObjectKeys = typeof VEVENT_OBJECT_KEYS;
export type VEventObjectKey = VEventObjectKeys[number];

export const VEVENT_TO_OBJECT_KEYS: Record<VEventKey, VEventObjectKey> = {
  "LAST-MODIFIED": "lastModified",
  ALARM: "alarm",
  CATEGORIES: "categories",
  CREATED: "created",
  DESCRIPTION: "description",
  DTSTAMP: "stamp",
  DTSTART: "start",
  LOCATION: "location",
  RRULE: "recurrenceRule",
  SUMMARY: "summary",
  UID: "uid",
  TRANSP: "timeTransparent",
  URL: "url",
  DTEND: "end",
  DURATION: "duration",
  GEO: "geo",
  CLASS: "class",
  ORGANIZER: "organizer",
  PRIORITY: "priority",
  SEQ: "sequence",
  STATUS: "status",
  ATTACH: "attach",
  "RECURRENCE-ID": "recurrenceId",
  ATTENDEE: "attendee",
  COMMENT: "comment",
};

export const VEVENT_TO_KEYS: Record<VEventObjectKey, VEventKey> = {
  alarm: "ALARM",
  categories: "CATEGORIES",
  created: "CREATED",
  description: "DESCRIPTION",
  lastModified: "LAST-MODIFIED",
  location: "LOCATION",
  recurrenceRule: "RRULE",
  stamp: "DTSTAMP",
  start: "DTSTART",
  summary: "SUMMARY",
  uid: "UID",
  timeTransparent: "TRANSP",
  url: "URL",
  end: "DTEND",
  duration: "DURATION",
  geo: "GEO",
  class: "CLASS",
  organizer: "ORGANIZER",
  priority: "PRIORITY",
  sequence: "SEQ",
  status: "STATUS",
  attach: "ATTACH",
  recurrenceId: "RECURRENCE-ID",
  attendee: "ATTENDEE",
  comment: "COMMENT",
};
