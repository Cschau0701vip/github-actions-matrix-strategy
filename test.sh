echo 'Start of the script!'

if [ "$#" -ne 1 ]; then
    echo "No arguments supplied"
fi
echo "$#"
if [[ $1 == 'windows-latest' ]]; 
then
  echo $1
  npm test -- $category=life $file_path='./output.txt' $1 $2 $3
else
  echo $1
  npm test -- 'life' './output.txt' $1 $2 $3
fi
echo 'End of the script!'
