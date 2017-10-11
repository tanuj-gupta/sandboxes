def lambda_handler(event, context):
    print("In Lambda Handler")

    resp = {
            "statusCode": 200,
            "headers": {
                "Access-Control-Allow-Origin": "*",
                },
            "body": "Tanuj Gupta"
        }

    return resp
