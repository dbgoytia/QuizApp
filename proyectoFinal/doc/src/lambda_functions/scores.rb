# Final Project: Quiz Application with Microservices
# Date: 14-May-2019
# Authors: A01376119 Diego Canizales Bollain Goytia
#          A01375997 Isain Cuadra Rivas
#          A01018322 Arturo Velazquez Rios

require 'json'
require 'aws-sdk-dynamodb'

DYNAMODB = Aws::DynamoDB::Client.new
TABLE = 'scores'

  #Function that is used to send responses to the requests
  # Parameters::
  #   status:: Type int. Used to determined which code status send to the request.
  #   body:: Type object. To attach a body to the response for the request
def make_response(status, body)
  {
    statusCode: status,
    body: JSON.pretty_generate(body)
  }
end

  #Function that is used to sort the items in descending order for scores
  # and ascending order for timestamps
  # Parameters::
  #   items:: Type array. Array made out of Score Objects
def sort_items_by_descending_scores_and_ascending_timestamp(items)
  items.sort! {|a, b| a['timestamp'] <=> b['timestamp']}
  items.sort! {|a, b| b['score'] <=> a['score']}
end

  #Function that will construct the an object with the results from an array
  # of items.
  # Parameters::
  #   items:: type array. Array made out of Score Objects
def make_result_list(items)
  items.map {|item| {
    'initials': item['initials'],
    'timestamp': item['timestamp'],
    'score': item['score'].to_i, # Convert BigDecimal to Integer
    'questions': item['questions'].to_i
  }}
end

  #Function that will get the scores from the Database and transform it to an array of objects
  # Score: initials:string , timestamp:string, score:int , questions: int
def get_scores
  items = DYNAMODB.scan(table_name: TABLE).items
  sort_items_by_descending_scores_and_ascending_timestamp(items)
  make_result_list(items)
end

    #Function that will receive request to get the scores
    # Parameters::
    #   event:: Request to the Lambda Function
def handle_get(event)
  make_response(200, get_scores)
end

  # Function that will be in charge to change the string body into a JSON
  # Parameters::
  #  str:: String that has the convention of a JSON
def parse_body(str)
  begin
    data = JSON.parse(str)
    if data.key?('initials') and data.key?('score')
      data
    else
      nil
    end
  rescue JSON::ParserError
    nil
  end
end

  #Function that is in charge of storing a score into the Database
  # Parameters::
  #   event:: The event of a request received
def store_item(event)
    data = parse_body(event['body'])
    if data
      data['timestamp'] = Time.now.to_s
      DYNAMODB.put_item({
        table_name: TABLE,
        item: data
      })
      true
    else
      false
    end
end

  #Function that is in charge of handleing a new post request
def handle_post
  make_response(201, {message: 'New resource created'})
end

  #Function that is in charge of handleing a bad request and sends a 400 status code
def handle_bad_request
  make_response(400, {message: 'Bad request (invalid input)'})
end

def handle_bad_method(method)
  make_response(405, {message: "Method not supported: #{ method }"})
end

def lambda_handler(event:, context:)
  method = event['httpMethod']
  if method == 'GET'
    handle_get(event)
  elsif method == 'POST'
    result = store_item(event)
    if result
      handle_post
    else
      handle_bad_request
    end
  else
    handle_bad_method(method)
  end
end