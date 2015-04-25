require 'sinatra'
require 'mandrill'

get '/' do
	@title= "Home"
	@nav = {"Home" => "/", "About Us" => "/about", "Classes" => "/classes", "Join Us" => "/join_us"}
	@foot_nav = {"Home" => "/", "About Us" => "/about", "Classes" => "/classes", "Join Us" => "/join_us"}
	erb :home
end

get '/about' do
	@title="About"
	@nav = {"Home" => "/", "About Us" => "/about", "Classes" => "/classes", "Join Us" => "/join_us"}
	@foot_nav = {"Home" => "/", "About Us" => "/about", "Classes" => "/classes", "Join Us" => "/join_us"}
	erb :about
end

get '/classes' do
	@title="Classes"
	@nav = {"Home" => "/", "About Us" => "/about", "Classes" => "/classes", "Join Us" => "/join_us"}
	@foot_nav = {"Home" => "/", "About Us" => "/about", "Classes" => "/classes", "Join Us" => "/join_us"}
	erb :classes
end

get '/join_us' do
	@title="Join Us!"
	@nav = {"Home" => "/", "About Us" => "/about", "Classes" => "/classes", "Join Us" => "/join_us"}
	@foot_nav = {"Home" => "/", "About Us" => "/about", "Classes" => "/classes", "Join Us" => "/join_us"}
	erb :join_us
end

get '/thanks' do
	@title="Thanks!"
	@nav = {"Home" => "/", "About Us" => "/about", "Classes" => "/classes", "Join Us" => "/join_us"}
	@foot_nav = {"Home" => "/", "About Us" => "/about", "Classes" => "/classes", "Join Us" => "/join_us"}
	erb :thanks
end

get '/contact' do
	@title="Contact!"
	@nav = {"Home" => "/", "About Us" => "/about", "Classes" => "/classes", "Join Us" => "/join_us"}
	@foot_nav = {"Home" => "/", "About Us" => "/about", "Classes" => "/classes", "Join Us" => "/join_us"}
	erb :contact
end

post '/join_us' do
	puts params.inspect
	name = params["name"]
	address = params["address"]
	email = params["email"]
	puts "Sending Email!!!"
	m = Mandrill::API.new
	message = {
		:subject=> "New Message",
		:from_name=> "Web ",
		:text=> "New Message: from #{name} | #{address} | #{email}",
		:to=>[
			{
				:email=> email,
				:name=> "Web User"
			}
			],
			:html=>"<html><h1>New Message</h1><h3>from #{name} | #{address} | #{email}</h3></html>",
			:from_email=>"marcelamosken@gmail.com"
			}
			sending = m.messages.send message
			puts sending
			redirect to('/thanks')
end

	post '/contact' do
	puts params.inspect
	email = params["email_user"]
	user_message = params["message"]
	puts "sending email!!!"
	m = Mandrill::API.new
	message = {
		:subject=> "New Message",
		:from_name=> "Web Monitor",
		:text=> "New Message: " + user_message,
		:to=>[
			{
				:email=> email,
				:name=> "Web User"
			}
			],
			:html=>"<html><h1>New Message</h1><h3>#{user_message}</h3></html>",
			:from_email=>"marcelamosken@gmail.com"
			}
			sending = m.messages.send message
			puts sending
			redirect to('/thanks')
end











