echo 'Start of the script!'

if [ "$#" -ne 1 ]; then
    echo "No arguments supplied"
fi
echo "$#"
if [[ $platform == 'windows-latest' ]]; 
then
  echo $platform
  npm test -- $category=life $file_path='./output.txt'
else
  echo $platform
  npm test -- 'life' './output.txt'
fi
echo 'End of the script!'
