require 'sinatra'
require 'mandrill'

get '/' do
	@title= "Home"
	@nav = {"Home" => "/", "About Us" => "/about", "Classes" => "/classes", "Join Us" => "/join_us"}
	erb :home
end

get '/about' do
	@title="About"
	@nav = {"Home" => "/", "About Us" => "/about", "Classes" => "/classes", "Join Us" => "/join_us"}
	erb :about
end

get '/classes' do
	@title="Classes"
	@nav = {"Home" => "/", "About Us" => "/about", "Classes" => "/classes", "Join Us" => "/join_us"}
	erb :classes
end

get '/join_us' do
	@title="Join Us!"
	@nav = {"Home" => "/", "About Us" => "/about", "Classes" => "/classes", "Join Us" => "/join_us"}
 		erb :join_us
end

get '/thanks' do
	@title="Thanks!"
	@nav = {"Home" => "/", "About Us" => "/about", "Classes" => "/classes", "Join Us" => "/join_us"}
	erb :thanks
end

