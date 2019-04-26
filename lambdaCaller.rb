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

post '/insertScore' do
  body = JSON.parse(request.body.read)
  if body and body["initials"] and body["questions"] and body["score"]

    initials = body["initials"]
    questions = body["questions"]
    score = body["score"]

    url_lambda = "https://mbx4dy66a6.execute-api.us-west-2.amazonaws.com/default/scores"
    payload = JSON.generate({"initials": initials, "questions": questions, "score": score})
    puts payload
    connection = Faraday.new
    response = connection.post url_lambda, payload
    return response.body
  else
    return JSON.generate({"message": "Verify data"})
  end
end

get '/getQuestions/:number' do
  number = params[:number]
  url_lambda = "https://60ozc8b5i3.execute-api.us-west-2.amazonaws.com/default/getQuestions?numberOfQuestions=#{number}"
  connection = Faraday.new
  response = connection.get url_lambda
  return response.body
end



post '/checkAnswers' do
  body = JSON.parse(request.body.read)
  if body and body["question"] and body["answers"]

    questions = body["question"]
    score = body["answers"]

    url_lambda = "https://jg7zg1x7n6.execute-api.us-west-2.amazonaws.com/default/checkAnswers"
    payload = JSON.generate({"question": questions, "answers": score})
    puts payload
    connection = Faraday.new
    response = connection.post url_lambda, payload
    return response.body
  else
    return JSON.generate({"message": "Verify data"})
  end
end