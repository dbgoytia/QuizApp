# Final Project: Quiz Application with Microservices
# Date: 14-May-2019
# Authors: A01376119 Diego Canizales Bollain Goytia
#          A01375997 Isain Cuadra Rivas
#          A01018322 Arturo Velazquez Rios

require 'faraday'
require 'json'
require 'sinatra'

#Function that will set the headers for each request
before do
   content_type :json
   headers 'Access-Control-Allow-Origin' => '*',
            'Access-Control-Allow-Methods' => ['OPTIONS', 'GET', 'POST'],
            'Access-Control-Allow-Headers' => ['Content-Type', 'Authorization', 'X-PINGOTHER']

end

set :protection, false

#Function that is in charge of getting the scores from a Lambda Function
get '/getScores' do
  URL_LAMBDAS = "https://mbx4dy66a6.execute-api.us-west-2.amazonaws.com/default/scores"
  connection = Faraday.new
  response = connection.get URL_LAMBDAS
  return response.body
end

#Function that is in charge of inserting a new score to the databse using a Lamda Function
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

#Function that will return questions depending on the URL param given using a Lambda Function
# :number Type int. The number of the question
get '/getQuestions/:number' do
  number = params[:number]
  url_lambda = "https://60ozc8b5i3.execute-api.us-west-2.amazonaws.com/default/getQuestions?numberOfQuestions=#{number}"
  connection = Faraday.new
  response = connection.get url_lambda
  return response.body
end


#Function that is in charge of checking the answers given using a Lambda function
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

#Function that is in charge of sending the a message to a telephone with the score
#Using Lambda Functions
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