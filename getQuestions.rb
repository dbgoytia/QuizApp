require 'json'
require 'aws-sdk-dynamodb'


def lambda_handler(event:, context:)
   query = event["queryStringParameters"]
    
    
    if query and query["numberOfQuestions"]
        # Array with index of the questions selected
        selectedQuestionsIndex = []
        
        # Array with the questions to return
        selectedQuestions = []
        
        # Get Data from database
        dynamodb = Aws::DynamoDB::Client.new
        response = dynamodb.scan(table_name: 'Questions')
        items = response.items
        
        # number of questions to return
        number = query["numberOfQuestions"].to_i
        
        # Loop to select the quetions
        i = 0
        loop do
          numberQuestion = rand(items.length )
          
          if not (selectedQuestionsIndex.include? numberQuestion)
              i += 1
              selectedQuestionsIndex << numberQuestion
              selectedQuestions << items[numberQuestion]
          end
          
          if i == number
            break
          end
        end
        
        { statusCode: 200, body: JSON.generate(selectedQuestions) }
    else 
        { statusCode: 404, body: JSON.generate("Missing argument") }
    end
end
