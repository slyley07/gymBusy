require 'sinatra'
require 'mandrill'

get '/' do
	@title= "Home"
	erb :home
end

get '/about' do
	@title="About"
	erb :about
end

get '/classes' do
	@title="Classes"
	erb :classes
end

get '/join' do
	@title="Join Us!"
 	erb :join_us
end

get '/thanks' do
	@title="Thanks!"
	erb :thanks
end

