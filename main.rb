require 'sinatra'
require 'mandrill'

get '/' do
	erb :home
end

get '/about' do
	erb :about
end

get '/classes' do
	erb :classes
end

get '/join_us' do
 erb :join
end

get '/thanks' do
	erb :thanks
end

