Dir.foreach('.') do |file|
  name = file

  if name.include?('.png')
    split_name = name.split('-')
    second_part = split_name[-1]
    second_part[0] = second_part[0].upcase

    new_name = split_name[0] + '-' + second_part
    new_name[0] = new_name[0].upcase
    File.rename(name, new_name)
  end
end
