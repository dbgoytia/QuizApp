# Final Project: Quiz Application with Microservices
# Date: 14-May-2019
# Authors: A01376119 Diego Canizales Bollain Goytia
#          A01375997 Isain Cuadra Rivas
#          A01018322 Arturo Velazquez Rios

require 'json'
require 'aws-sdk-dynamodb'

  #Function that is in charge to insert question into the Database
  # Parameters::
  #   event:: The event of a request received
  #   context:: The context of the request gotten from the Lambda.
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