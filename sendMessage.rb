require 'json'
require 'aws-sdk'

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
