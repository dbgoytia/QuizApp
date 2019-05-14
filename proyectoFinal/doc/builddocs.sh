rm -fR doc
rdoc -m README.rdoc -o doc -f hanna src/middle_man/*.rb src/lambda_functions/*.rb README.rdoc
cp -R img doc/files
