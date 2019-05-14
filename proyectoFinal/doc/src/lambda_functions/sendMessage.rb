# Final Project: Quiz Application with Microservices
# Date: 14-May-2019
# Authors: A01376119 Diego Canizales Bollain Goytia
#          A01375997 Isain Cuadra Rivas
#          A01018322 Arturo Velazquez Rios

require 'json'
require 'aws-sdk'

  #Function that is set on a Lambda function in AWS used to send message to
  # Parameters::
  #   event:: The event of a request received
  #   context:: The context of the request gotten from the Lambda.
def lambda_handler(event:, context:)
    body = event["body"]
    body = JSON.parse(body)
    tel = body["tel"]
    score = body["score"]

    puts tel

    if tel
        sns = Aws::SNS::Client.new()
        sns.publish(
            phone_number: "+52#{tel}",
            message: "Your score is: #{score}, Congratulations!!!")
        puts 'Message sent'
        {statusCode: 200, body: JSON.generate('Message sent')}
    else
        { statusCode: 404, body: JSON.generate('Verify Parameters') }
    end
end