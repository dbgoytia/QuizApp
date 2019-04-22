require 'faraday'
require 'json'
require 'sinatra'
require 'sinatra/cross_origin'


get '/getScores' do
  URL_LAMBDAS = "https://74js1u1ok0.execute-api.us-west-2.amazonaws.com/default/getScores"
  connection = Faraday.new
  response = connection.get URL_LAMBDAS
  return response.body
end

get '/getQuestions/:number' do
  response.headers['Access-Control-Allow-Origin'] = '*'
  number = params[:number]
  url_lambda = "https://60ozc8b5i3.execute-api.us-west-2.amazonaws.com/default/getQuestions?numberOfQuestions=#{number}"
  connection = Faraday.new
  response = connection.get url_lambda
  return response.body
end

get '/getQuestions/:number' do
  number = params[:number]
  url_lambda = "https://60ozc8b5i3.execute-api.us-west-2.amazonaws.com/default/getQuestions?numberOfQuestions=#{number}"
  connection = Faraday.new
  response = connection.get url_lambda
  return response.body
end