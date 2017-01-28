# -*- mode: ruby -*-
# vi: set ft=ruby :

require 'yaml'
settings = YAML.load_file 'vagrant.yml'

VAGRANTFILE_API_VERSION = "2"

Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|

  config.vm.box = "ubuntu/trusty64"

  config.vm.network "private_network", ip: "192.168.53.100"
  config.vm.network "forwarded_port", guest: 4200, host: 4200
  config.vm.network "forwarded_port", guest: 35729, host: 35729

  if settings['vm']['synced_folder']['type'] == 'rsync'
    config.vm.synced_folder ".", "/vagrant", type: settings['vm']['synced_folder']['type'],
      rsync__exclude: [".git/", "*.sqlite3", "log/", "tmp/", "node_modules", "bower_components"]
  else
    config.vm.synced_folder ".", "/vagrant", type: settings['vm']['synced_folder']['type']
  end

  config.vm.provider "virtualbox" do |vb|
    vb.customize ["modifyvm", :id, "--memory", "1024"]
  end
end