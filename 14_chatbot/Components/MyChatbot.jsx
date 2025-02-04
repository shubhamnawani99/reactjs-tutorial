import ChatBot from 'react-chatbotify'
const MyChatBot = () => {
	const helpOptions = ["What are the contact details of Department of Public Grievances, J&K?", 
        "Where can the grievances be registered/sent?", 
        "How do I lodge the grievance?", 
    ];
    const responseDiv = "ml-4 max-w-7/10 text-white mt-2.5 px-4 py-3.5 rounded-[22px] min-h-[20px] text-[15px] bg-[#491D8D]";
	const flow = {
		start: {
			message: "Welcome to JK Samadhan, how may I help you?",
			transition: {duration: 1000},
			path: "show_options"
		},
		show_options: {
						options: helpOptions,
			path: "process_options"
		},
		prompt_again: {
			message: "Do you need any other help?",
			options: helpOptions,
			path: "process_options"
		},
		unknown_input: {
			message: "Sorry, I do not understand your message 😢! If you require further assistance, you may click on " +
				"the Github option and open an issue there or visit our discord.",
			options: helpOptions,
			path: "process_options"
		},
		process_options: {
			transition: {duration: 0},
			chatDisabled: true,
			path: async (params) => {
				let link = "";
                let msg = "";
				switch (params.userInput) {
				case "What are the contact details of Department of Public Grievances, J&K?":
					msg = <div className={responseDiv}>
                    <div className="space-x-4">
                        <strong>JAMMU:</strong>
                        <ul className="list-disc pl-6 space-y-2">
                        <li><strong>Office Address:</strong> Department of Public Grievances, Civil Secretariat, Jammu - 180001</li>
                        <li><strong>Toll Free Call Centre:</strong> 1905</li>
                        <li><strong>e-Mail:</strong> <a href="mailto:jk-grievance@jk.gov.in" className="text-blue-200">jk-grievance[at]jk[dot]gov[dot]in</a></li>
                        </ul>
                    </div>
                    <div className="space-x-4">
                        <strong>KASHMIR:</strong>
                        <ul className="list-disc pl-6 space-y-2">
                        <li><strong>Office Address:</strong> Department of Public Grievances, Church Lane, Sonwar, Srinagar - 190001</li>
                        <li><strong>Toll Free Call Centre:</strong> 1905</li>
                        <li><strong>e-Mail:</strong> <a href="mailto:jk-grievance@jk.gov.in" className="text-blue-200">jk-grievance[at]jk[dot]gov[dot]in</a></li>
                        </ul>
                    </div>
                  </div>;                  
					break;
				case "Where can the grievances be registered/sent?":   
					msg = <div className={responseDiv}>  
                    <p>Grievances can be registered with the concerned department through:</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Web Portal: <a href="https://samadhan.jk.gov.in" className="text-blue-200">https://samadhan.jk.gov.in</a></li>
                        <li>Mobile Application (Android and iOS)</li>
                        <li>By Post or In-Person</li>
                        <li>Through Toll Free No. 1905</li>
                    </ul>
                  </div>
					break;
				case "How do I lodge the grievance?":
                    msg = <div className={responseDiv}>
                        <p>
                    Grievances can be lodged through:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                    <li>Web Portal: <a href="https://samadhan.jk.gov.in" className="text-blue-200">https://samadhan.jk.gov.in</a></li>
                    <li>Mobile Application (Android and iOS)</li>
                    <li>By Post (no prescribed format, but with Name, Complete Address, and Contact No. of the Applicant)</li>
                    <li>Through Toll Free No. 1905</li>
                    </ul>
                    </div>
					link = "https://react-chatbotify.com/docs/examples/basic_form";
					break;
				default:
					return "unknown_input";
				}
				await params.injectMessage(msg);
				return "repeat"
			},
		},
		repeat: {
			transition: {duration: 1000},
			path: "prompt_again"
		},
	}
	return (
		<ChatBot settings={{chatInput: {disabled: true},header:{title: "JKBot"}, chatHistory: {storageKey: "example_faq_bot"}}} flow={flow}/>
	);
};

export default MyChatBot