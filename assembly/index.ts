import {
  setOutputJSON,
  log,
  getLocation,
  getTagValue,
  getSourceValue,
  getTimestamp,
  getUserdata,
  getInputBufferAsString,
} from "orbit-sdk-assemblyscript";

import { JSON, JSONEncoder } from "assemblyscript-json";

/**
 * process uplink (device -> SORACOM) message
 */
export function uplink(): i32 {
  // decode input string as JSON string
  let data: JSON.Obj = <JSON.Obj>(JSON.parse(getInputBufferAsString()));

  // create a new encoder which will be used to generate final JSON string
  const encoder = new JSONEncoder();

  let name: string = "";
  const nameOrNull = data.getString("name");
  if (nameOrNull != null) {
    name = nameOrNull.valueOf();
  }
  encoder.setString("name", name);

  // get location information
  const location = getLocation();
  if (location.lat.toString() == "NaN") {
    encoder.setNull("lat");
  } else {
    encoder.setFloat("lat", location.lat);
  }
  if (location.lon.toString() == "NaN") {
    encoder.setNull("lon");
  } else {
    encoder.setFloat("lon", location.lon);
  }

  // get tag value with its name
  const tagname = getTagValue("name");
  encoder.setString("tagname", tagname);
  const tagorg = getTagValue("org");
  encoder.setString("tagorg", tagorg);

  // get source value with its name
  const resourceType = getSourceValue("resourceType");
  encoder.setString("resourceType", resourceType);
  const resourceId = getSourceValue("resourceId");
  encoder.setString("resourceId", resourceId);

  encoder.setInteger("timestamp", getTimestamp());

  // add additional calculation based on device name
  let value: f64 = 0;
  const valueOrNull = data.getNum("value");
  if (valueOrNull != null) {
    value = valueOrNull.valueOf();
  }
  if (name == "sorao") {
    encoder.setFloat("value", value / 100);
  } else if (name == "sorako") {
    encoder.setFloat("value", value * 10);
  } else {
    encoder.setInteger("value", -1);
  }

  encoder.setString("userdata", getUserdata());

  log("Hello Orbit!");

  // set output JSON. Note that we have to wrap result with {}
  setOutputJSON("{" + encoder.toString() + "}");

  // return user defined result code for success
  return 0;
}
