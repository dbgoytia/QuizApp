require 'faraday'
require 'json'
require 'sinatra'


before do
   content_type :json
   headers 'Access-Control-Allow-Origin' => '*',
            'Access-Control-Allow-Methods' => ['OPTIONS', 'GET', 'POST']
end

set :protection, false


get '/getScores' do
  URL_LAMBDAS = "https://mbx4dy66a6.execute-api.us-west-2.amazonaws.com/default/scores"
  connection = Faraday.new
  response = connection.get URL_LAMBDAS
  return response.body
end

get '/insertScore' do
  url_lambda = "https://mbx4dy66a6.execute-api.us-west-2.amazonaws.com/default/scores"
  payload = {"initials": "MARK", "questions": 5, "score": 99}
  puts "HOLIZ"
  puts payload
  connection = Faraday.new
  response = connection.post url_lambda, payload
  return response.body
end

get '/getQuestions/:number' do
  number = params[:number]
  url_lambda = "https://60ozc8b5i3.execute-api.us-west-2.amazonaws.com/default/getQuestions?numberOfQuestions=#{number}"
  connection = Faraday.new
  response = connection.get url_lambda
  return response.body
end