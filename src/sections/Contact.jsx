import { useState, useRef } from 'react';
import { AiOutlineLinkedin, AiOutlineGithub } from 'react-icons/ai';
import { IoLocationOutline } from 'react-icons/io5';
import { BsPhone } from 'react-icons/bs';
import { HiOutlineMail, HiExternalLink } from 'react-icons/hi';
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
			() => {
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
				console.error(error);
				alert.show('Error sending message, please try again.', { type: 'error' });
			}
		);
	};

	return (
		<section id="contact">
			<div className="max-w-[1540px] mx-auto py-12 px-8 md:px-16">
				<h2 className="text-4xl pb-4 text-light-tertiary font-semibold text-center">Contact</h2>
				<div className="grid grid-cols-1 mx-auto">
					<div className="flex mx-auto mb-6">
						<div className="text-center mx-auto">
							<ul className="text-base sm:text-lg">
								{/* <li className="flex items-center py-2 w-fit">
									<IoLocationOutline size={30} />
									<p className="pl-4 py-2">Cape Town, South Africa</p>
								</li>
								<li>
									<a href="https://wa.me/27736085710" target="_blank" rel="noreferrer" className="flex items-center py-2 w-fit">
										<BsPhone size={30} />
										<p className="pl-4 py-2">+27 73 608 5710</p>
									</a>
								</li> */}
								<li>
									<a href="mailto:koevortd@gmail.com" target="_blank" rel="noreferrer" className="flex items-center py-2 px-2 w-fit">
										<HiOutlineMail size={30} />
										<p className="pl-4 py-2">koevortd@gmail.com</p>
									</a>
								</li>
								<li>
									<a
										href="src/assets/DylanKoevortCV2023.pdf"
										target="_blank"
										rel="noopener noreferrer"
										className="w-[150px] mx-auto flex justify-center items-center gap-1 border-2 rounded-xl px-2 py-1 hover:cursor-pointer hover:bg-[#232323] hover:text-white dark:hover:bg-white dark:hover:text-black ease-in-out duration-300 transition-all"
									>
										Resume
										<HiExternalLink />
									</a>
								</li>
							</ul>
							{/* <p className="py-2 text-lg sm:text-xl font-medium">Or find me on other platforms:</p> */}
							<div className="flex justify-between items-center gap-2 mt-5">
								<a href="https://www.linkedin.com/in/dylankoevort/" target="_blank" rel="noreferrer" aria-label="linkedin.com/in/dylankoevort">
									<button
										type="button"
										className="rounded-2xl border-2 flex items-center p-2 hover:bg-dark-tertiary hover:text-white ease-in-out duration-300 transition-all"
									>
										<AiOutlineLinkedin size={30} />
										<p className="pl-2">LinkedIn</p>
									</button>
								</a>
								<a href="https://github.com/dylankoevort" target="_blank" rel="noreferrer" aria-label="github.com/dylankoevort">
									<button
										type="button"
										className="rounded-2xl border-2 flex items-center p-2 hover:bg-[#232323] hover:text-white dark:hover:bg-white dark:hover:text-black ease-in-out duration-300 transition-all"
									>
										<AiOutlineGithub size={30} />
										<p className="pl-2">GitHub</p>
									</button>
								</a>
							</div>
						</div>
					</div>
					<div className="lg:col-span-2 max-w-[700px] mx-auto px-8 py-4 rounded-3xl bg-slate-100 dark:bg-[#232323]">
						<p className="pb-2 pr-2 text-base sm:text-lg">Send me a message and I&apos;ll get back to you!</p>
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
									className="py-2 px-3 w-full rounded-md text-gray-800 font-bold placeholder:font-light"
									onChange={(e) => handleInputChange(e)}
									autoComplete="off"
									placeholder="Your name"
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
									className="py-2 px-3 w-full rounded-md text-gray-800 font-bold placeholder:font-light"
									value={email}
									onChange={(e) => handleInputChange(e)}
									autoComplete="off"
									placeholder="Your email"
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
									className="h-full py-2 px-3 w-full rounded-md text-gray-800 font-bold placeholder:font-light"
									onChange={(e) => handleInputChange(e)}
									autoComplete="off"
									placeholder="Your message"
								></textarea>
							</div>
							<div className="col-span-2 mx-auto mt-[40px]">
								<button
									type="submit"
									className="bg-light-tertiary 
									py-2 px-4 rounded-lg flex justify-center items-center text-white 
									hover:tracking-[0.4rem] hover:cursor-pointer ease-in-out duration-300 transition-all"
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
