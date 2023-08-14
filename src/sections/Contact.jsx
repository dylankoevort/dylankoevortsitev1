import React, { useState, useRef } from 'react';
import { AiOutlineLinkedin, AiOutlineGithub, AiOutlineInstagram } from 'react-icons/ai';
import { IoLocationOutline } from 'react-icons/io5';
import { BsPhone } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';
import emailjs from '@emailjs/browser';
import { useAlert } from 'react-alert';
import { DotPulse } from '@uiball/loaders';

const Contact = () => {
	const form = useRef();
	const alert = useAlert();
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		message: ''
	});
	const [sendAttempts, setSendAttempts] = useState(0);
	const { name, email, message } = formData;
	const [messageSending, setMessageSending] = useState(false);

	const handleInputChange = (event) => {
		const { name, value } = event.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value
		}));
	};

	const handleSubmitMessage = (e) => {
		e.preventDefault();

		if (messageSending) return;

		if (name === '' || email === '' || message === '') {
			alert.show('Please fill in all fields.', { type: 'info' });
			return;
		}

		setMessageSending(true);

		emailjs.sendForm('service_l279qg9', 'template_8qi0ox5', form.current, 'y_uVT0KTty_yk_mJR').then(
			(result) => {
				setMessageSending(false);
				alert.show('Message sent successfully.', { type: 'success' });

				setFormData({
					name: '',
					email: '',
					message: ''
				});
			},
			(error) => {
				setMessageSending(false);
				if (sendAttempts >= 3) {
					alert.show('There appears to be a problem with the email service used. Try contacting me directly on one of the platforms below.', {
						type: 'error'
					});
					return;
				}

				setSendAttempts(sendAttempts + 1);
				alert.show('Error sending message, please try again.', { type: 'error' });
			}
		);
	};

	return (
		<section id="contact" className="bg-light-whiteOne dark:bg-dark-primary duration-500">
			<div className="max-w-[1540px] mx-auto py-12 px-8 md:px-16">
				<h2 className="text-xl pb-4 text-light-darkGreyThree font-medium">3. Contact</h2>
				<h2 className="text-5xl pb-4 text-light-tertiary font-semibold">Get in touch</h2>
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
					<div className="text-center mx-auto sm:text-left sm:mx-0">
						<ul className="py-4 text-xl font-bold">
							<li className="flex items-center py-2  w-fit">
								<IoLocationOutline size={30} />
								<p className="pl-4 py-2">Cape Town, South Africa</p>
							</li>
							<li>
								<a href="https://wa.me/27736085710" target="_blank" rel="noreferrer" className="flex items-center py-2 w-fit">
									<BsPhone size={30} />
									<p className="pl-4 py-2">+27 73 608 5710</p>
								</a>
							</li>
							<li>
								<a href="mailto:koevortd@gmail.com" target="_blank" rel="noreferrer" className="flex items-center py-2 w-fit">
									<HiOutlineMail size={30} />
									<p className="pl-4 py-2">koevortd@gmail.com</p>
								</a>
							</li>
						</ul>
						<p className="py-2 text-xl font-bold">Or find me on other platforms:</p>
						<div className="max-w-[360px] flex justify-between items-center mt-5 px-2 ml-[20px]">
							<a href="https://www.linkedin.com/in/dylankoevort/" target="_blank" rel="noreferrer">
								<AiOutlineLinkedin size={50} className="hover:scale-125 transition-transform" />
							</a>
							<a href="https://github.com/dylankoevort" target="_blank" rel="noreferrer">
								<AiOutlineGithub size={50} className="hover:scale-125 transition-transform" />
							</a>
							<a href="https://www.instagram.com/dylankoevort/" target="_blank" rel="noreferrer">
								<AiOutlineInstagram size={50} className="hover:scale-125 transition-transform" />
							</a>
						</div>
					</div>
					<div className="sm:-mt-14">
						<p className="font-bold pb-2 pr-2">Send me a message and I'll get back to you:</p>
						<form ref={form} className="mt-4 grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1 gap-4" onSubmit={handleSubmitMessage}>
							<div className="col-span-2 md:col-span-2 lg:col-span-1">
								<label htmlFor="name" className="leading-7 text-sm">
									Name
								</label>
								<input
									type="text"
									id="name"
									name="name"
									value={name}
									className="py-2 px-3 w-full rounded-md text-gray-800 font-bold"
									onChange={(e) => handleInputChange(e)}
								/>
							</div>
							<div className="col-span-2 md:col-span-2 lg:col-span-1">
								<label htmlFor="email" className="leading-7 text-sm">
									Email
								</label>
								<input
									type="email"
									id="email"
									name="email"
									className="py-2 px-3 w-full rounded-md text-gray-800 font-bold"
									value={email}
									onChange={(e) => handleInputChange(e)}
								/>
							</div>
							<div className="col-span-2 h-full">
								<label htmlFor="message" className="leading-7 text-sm">
									Message
								</label>
								<textarea
									type="textarea"
									id="message"
									name="message"
									value={message}
									className="h-full py-2 px-3 w-full rounded-md text-gray-800 font-bold"
									onChange={(e) => handleInputChange(e)}
								></textarea>
							</div>
							<div className="col-span-2 mx-auto mt-[40px]">
								<button
									type="submit"
									className="hover:border-2 hover:dark:border-dark-secondary hover:border-light-secondary bg-light-tertiary h-[40px] w-[159px] py-2 px-4 rounded-lg flex justify-center items-center text-white font-medium"
								>
									{messageSending ? <DotPulse size={40} lineWeight={3.5} speed={1} color="white" className="mx-auto" /> : 'Send message'}
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
