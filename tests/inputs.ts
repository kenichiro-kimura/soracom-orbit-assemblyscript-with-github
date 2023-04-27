import { SoraletPayload } from "./soralet_payload";

const operatorId = "OP1234567890";
const coverageType: "jp" | "g" = "jp";
const soraletId = "yourSoraletId";
const version = 1;
const codeSrn = `srn:soracom:${operatorId}:${coverageType}:Soralet:${soraletId}/${version}`;
const timestamp = 1587532201856;

// add your test cases here
export const inputs: SoraletPayload[] = [
  {
    codeSrn,
    direction: "uplink",
    contentType: "application/json",
    body: JSON.stringify({ value: 23.54, name: "sorao" }),
    source: {
      resourceType: "Subscriber",
      resourceId: "440529999999950",
    },
    tags: {
      name: "test1",
      org: "soracom",
    },
    location: {
      lat: 43.12345,
      lon: 138.112233,
    },
    timestamp,
  },
  {
    codeSrn,
    direction: "uplink",
    contentType: "application/json",
    body: JSON.stringify({ value: 0.12, name: "sorako" }),
    source: {
      resourceType: "Subscriber",
      resourceId: "440109999999951",
    },
    tags: {
      name: "test2",
    },
    timestamp,
  },
  {
    codeSrn,
    direction: "uplink",
    contentType: "application/json",
    body: JSON.stringify({ value: 0.0, name: "sorataro" }),
    source: {
      resourceType: "Subscriber",
      resourceId: "440529999999952",
    },
    tags: {
      name: "test3",
    },
    location: {
      lat: 43.12345,
      lon: 138.112233,
    },
    timestamp,
  },
];
