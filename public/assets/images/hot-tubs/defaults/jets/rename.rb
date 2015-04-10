Dir.foreach('.') do |file|
  name = file

  if name.include?('default')
    File.rename(name, name + '.png')
  end
end
