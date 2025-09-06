#let the user put the commit message
read -p "Enter the commit message: " message        



#add git commond to push the changes to the remote repository
git add .
git commit -m "$message"
git push

#add git commond to pull the changes from the remote repository