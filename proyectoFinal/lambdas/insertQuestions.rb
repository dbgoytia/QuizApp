require 'json'
require 'aws-sdk-dynamodb'

def lambda_handler(event:, context:)
    
    dynamodb = Aws::DynamoDB::Client.new
    dynamodb.put_item({
      table_name: 'Questions',
      item: {
        'question' => "Which of the following are desing principles that should be used when implementing the Convention Over Configuration desing patternr?",
        'posibleAnswer' => ["Anticipate needs", "Do or do not there is no try", "Let them say it once", "Only talk to your immediate friends", "Provide a template"],
        'answer' => ["Anticipate needs", "Let them say it once", "Provide a template"],
      }
    })
    dynamodb.put_item({
      table_name: 'Questions',
      item: {
        'question' => "of the following are desing principles that should be used when implementing the Convention Over Configuration desing patternr?",
        'posibleAnswer' => ["Anticipate needs", "Do or do not there is no try", "Let them say it once", "Only talk to your immediate friends", "Provide a template"],
        'answer' => ["Anticipate needs", "Let them say it once", "Provide a template"],
      }
    })
    dynamodb.put_item({
      table_name: 'Questions',
      item: {
        'question' => "the following are desing principles that should be used when implementing the Convention Over Configuration desing patternr?",
        'posibleAnswer' => ["Anticipate needs", "Do or do not there is no try", "Let them say it once", "Only talk to your immediate friends", "Provide a template"],
        'answer' => ["Anticipate needs", "Let them say it once", "Provide a template"],
      }
    })
    dynamodb.put_item({
      table_name: 'Questions',
      item: {
        'question' => "following are desing principles that should be used when implementing the Convention Over Configuration desing patternr?",
        'posibleAnswer' => ["Anticipate needs", "Do or do not there is no try", "Let them say it once", "Only talk to your immediate friends", "Provide a template"],
        'answer' => ["Anticipate needs", "Let them say it once", "Provide a template"],
      }
    })
    dynamodb.put_item({
      table_name: 'Questions',
      item: {
        'question' => "are desing principles that should be used when implementing the Convention Over Configuration desing patternr?",
        'posibleAnswer' => ["Anticipate needs", "Do or do not there is no try", "Let them say it once", "Only talk to your immediate friends", "Provide a template"],
        'answer' => ["Anticipate needs", "Let them say it once", "Provide a template"],
      }
    })
    dynamodb.put_item({
      table_name: 'Questions',
      item: {
        'question' => "desing principles that should be used when implementing the Convention Over Configuration desing patternr?",
        'posibleAnswer' => ["Anticipate needs", "Do or do not there is no try", "Let them say it once", "Only talk to your immediate friends", "Provide a template"],
        'answer' => ["Anticipate needs", "Let them say it once", "Provide a template"],
      }
    })
    dynamodb.put_item({
      table_name: 'Questions',
      item: {
        'question' => "principles that should be used when implementing the Convention Over Configuration desing patternr?",
        'posibleAnswer' => ["Anticipate needs", "Do or do not there is no try", "Let them say it once", "Only talk to your immediate friends", "Provide a template"],
        'answer' => ["Anticipate needs", "Let them say it once", "Provide a template"],
      }
    })
    dynamodb.put_item({
      table_name: 'Questions',
      item: {
        'question' => "that should be used when implementing the Convention Over Configuration desing patternr?",
        'posibleAnswer' => ["Anticipate needs", "Do or do not there is no try", "Let them say it once", "Only talk to your immediate friends", "Provide a template"],
        'answer' => ["Anticipate needs", "Let them say it once", "Provide a template"],
      }
    })
    dynamodb.put_item({
      table_name: 'Questions',
      item: {
        'question' => "should be used when implementing the Convention Over Configuration desing patternr?",
        'posibleAnswer' => ["Anticipate needs", "Do or do not there is no try", "Let them say it once", "Only talk to your immediate friends", "Provide a template"],
        'answer' => ["Anticipate needs", "Let them say it once", "Provide a template"],
      }
    })
    dynamodb.put_item({
      table_name: 'Questions',
      item: {
        'question' => "be used when implementing the Convention Over Configuration desing patternr?",
        'posibleAnswer' => ["Anticipate needs", "Do or do not there is no try", "Let them say it once", "Only talk to your immediate friends", "Provide a template"],
        'answer' => ["Anticipate needs", "Let them say it once", "Provide a template"],
      }
    })
    dynamodb.put_item({
      table_name: 'Questions',
      item: {
        'question' => "used when implementing the Convention Over Configuration desing patternr?",
        'posibleAnswer' => ["Anticipate needs", "Do or do not there is no try", "Let them say it once", "Only talk to your immediate friends", "Provide a template"],
        'answer' => ["Anticipate needs", "Let them say it once", "Provide a template"],
      }
    })
    { statusCode: 200, body: JSON.generate("Inserted") }
end
