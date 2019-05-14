require 'json'
require 'aws-sdk-dynamodb'

def lambda_handler(event:, context:)
    body = event["body"]
    body = JSON.parse(body)
    question = body["question"]
    answers = body["answers"]
    
    if body and question and answers

        # Get Data from database
        dynamodb = Aws::DynamoDB::Client.new
        response = dynamodb.scan(table_name: 'Questions')
        items = response.items
        
        gradedAnswers = Array.new
        gradedAnswersJson = {}
        
        answersDB = Array.new
        
        items.each do |item|
            questionDB = item["question"]
            answersDB = item["answer"]

            if questionDB == question
                puts ">>> Pregunta encontrada >>>"
                puts questionDB
                answers.each do |ans|
                    verifyCorrect = answersDB.include? ans
                    ansGraded = {ans => verifyCorrect}
                    gradedAnswers << ansGraded
                    gradedAnswersJson[ans] = verifyCorrect
                end
                
                
                if answers.count == answersDB.count
                    gradedAnswersJson.each do |key, value|
                        if value == false
                            return { 
                                statusCode: 200, body: JSON.generate({
                                gradedAnswers: gradedAnswersJson,
                                correctAnswers: answersDB,
                                isCorrect: false
                            })}
                        end
                    end
                    
                    return { 
                            statusCode: 200, body: JSON.generate({
                            gradedAnswers: gradedAnswersJson,
                            correctAnswers: answersDB,
                            isCorrect: true
                    })}
                else
                   return { 
                            statusCode: 200, body: JSON.generate({
                            gradedAnswers: gradedAnswersJson,
                            correctAnswers: answersDB,
                            isCorrect: false
                    })}
                end
            end
        end

        return { statusCode: 500, body: JSON.generate("Not question found") }
    else
        return { statusCode: 404, body: JSON.generate("Verify the parameters") }    
    end
    
end
