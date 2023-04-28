#!/bin/bash
if [ -z "SORACOM_AUTHKEY" ]
then
  echo "No SORACOM_AUTHKEY environment variable supplied"
  exit 1
fi
if [ -z "SORACOM_AUTHKEY_ID" ]
then
  echo "No SORACOM_AUTHKEY_ID environment variable supplied"
  exit 1
fi
if [ -z "SORACOM_SORALET_ID" ]
then
  echo "No SORACOM_SORALET_ID environment variable supplied"
  exit 1
fi
if [ -z "SORACOM_SORALET_FILENAME" ] && [ ! -f "SORACOM_SORALET_FILENAME" ]
then
  echo "No SORACOM_SORALET_FILENAME environment variable supplied or soralet file does not exist"
  exit 1
fi
if [ -z "SORACOM_COVERAGE" ]
then
    SORACOM_COVERAGE="jp"
fi

SORACOM_ARG="--coverage-type $SORACOM_COVERAGE --auth-key-id $SORACOM_AUTH_KEY_ID --auth-key $SORACOM_AUTH_KEY"
x=$(/usr/local/bin/soracom $SORACOM_ARG soralets get --soralet-id "$SORACOM_SORALET_ID" 2>&1)
if [[ $x == "Error"* ]]; then
  /usr/local/bin/soracom $SORACOM_ARG soralets create --soralet-id "$SORACOM_SORALET_ID"
fi

delimiter="$(openssl rand -hex 8)"
echo "result<<${delimiter}" >> "${GITHUB_OUTPUT}"
/usr/local/bin/soracom $SORACOM_ARG soralets upload --soralet-id "$SORACOM_SORALET_ID" --content-type application/octet-stream --body @"$SORACOM_SORALET_FILENAME" 2>&1 | tee -a "${GITHUB_OUTPUT}"
echo "${delimiter}" >> "${GITHUB_OUTPUT}"


