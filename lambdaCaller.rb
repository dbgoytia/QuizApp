require 'faraday'
require 'json'
require 'sinatra'


before do
   content_type :json
   headers 'Access-Control-Allow-Origin' => '*',
            'Access-Control-Allow-Methods' => ['OPTIONS', 'GET', 'POST'],
            'Access-Control-Allow-Headers' => ['Content-Type', 'Authorization']

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
    answers = body["answers"]

    url_lambda = "https://jg7zg1x7n6.execute-api.us-west-2.amazonaws.com/default/checkAnswers"
    payload = JSON.generate({"question": questions, "answers": answers})
    puts payload
    connection = Faraday.new
    response = connection.post url_lambda, payload
    return response.body
  else
    return JSON.generate({"message": "Verify data"})
  end
end


post '/sendMessage' do
  body = JSON.parse(request.body.read)
  if body and body["tel"] and body["score"]

    tel = body["tel"]
    score = body["score"]

    url_lambda = "https://och5m9rys4.execute-api.us-west-2.amazonaws.com/default/sendMessage"
    payload = JSON.generate({"tel": tel, "score": score})
    puts payload
    connection = Faraday.new
    response = connection.post url_lambda, payload
    return response.body
  else
    return JSON.generate({"message": "Verify data"})
  end
end