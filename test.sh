echo 'Start of the script!'
if [[ $platform == 'windows-latest' ]]; 
then
  echo $platform
  npm test $category=life $file_path='./output.md'
else
  echo $platform
  npm test --category=life --file_path='./output.md'
fi
echo 'End of the script!'
