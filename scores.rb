require 'json'
require 'aws-sdk-dynamodb'

DYNAMODB = Aws::DynamoDB::Client.new
TABLE = 'scores'

def make_response(status, body)
  {
    statusCode: status,
    body: JSON.pretty_generate(body)
  }
end

def sort_items_by_descending_scores_and_ascending_timestamp(items)
  items.sort! {|a, b| a['timestamp'] <=> b['timestamp']}
  items.sort! {|a, b| b['score'] <=> a['score']}
end

def make_result_list(items)
  items.map {|item| {
    'initials': item['initials'],
    'timestamp': item['timestamp'],
    'score': item['score'].to_i, # Convert BigDecimal to Integer
    'questions': item['questions'].to_i
  }}
end

def get_scores
  items = DYNAMODB.scan(table_name: TABLE).items
  sort_items_by_descending_scores_and_ascending_timestamp(items)
  make_result_list(items)
end

def handle_get(event)
  make_response(200, get_scores)
end

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

def handle_post
  make_response(201, {message: 'New resource created'})
end

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