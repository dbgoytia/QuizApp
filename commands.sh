# First test locally...
git clone git@yourrepo.git
cd yourrepo
bundle
heroku local # Will run a ruby instance on port 8080

# Then deploy to heroku
heroku create # if you haven't already.
git push heroku dsl:master # Becase we're using a different branch than master
# navigate to deployed URL.