// ContactForm.jsx
export default function ContactForm() {
  return (
    <div className="container mx-auto px-4 ">
      <h2 className="text-4xl font-bold mb-6 text-center block text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400 [text-shadow:0px_3px_8px_rgba(255,255,255,0.2)]">
        Contact Me
      </h2>
      <div className="max-w-lg mx-auto bg-slate-900/50 backdrop-blur-sm rounded-xl p-8 border border-slate-800">
        {/* Step 1: CONNECT FORM */}
        <form
          action="https://formsubmit.co/anandchetty5071@gmail.com"
          method="POST"
          className="space-y-4"
        >
          {/* Optional: Disable CAPTCHA */}
          <input type="hidden" name="_captcha" value="false" />

          {/* Step 2: ADD NAME ATTRIBUTES */}
          <div>
            <label
              className="block text-sm font-medium mb-1 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400 [text-shadow:0px_3px_8px_rgba(255,255,255,0.2)]"
              htmlFor="name"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              required
              className="w-full text-slate-300 bg-teal-500/10  px-4 py-2 border border-teal-500/20 rounded-md focus:outline-none "
            />
          </div>

          <div>
            <label
              className="block text-sm font-medium mb-1 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400 [text-shadow:0px_3px_8px_rgba(255,255,255,0.2)]"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              className="w-full text-slate-300 bg-teal-500/10  px-4 py-2 border border-teal-500/20 rounded-md focus:outline-none"
            />
          </div>

          <div>
            <label
              className="block text-sm font-medium mb-1 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400 [text-shadow:0px_3px_8px_rgba(255,255,255,0.2)]"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              name="message"
              rows="5"
              required
              className="w-full text-slate-300 bg-teal-500/10  px-4 py-2 border border-teal-500/20 rounded-md focus:outline-none"
            ></textarea>
          </div>

          {/* Step 3: SUBMIT FORM */}
          <button
            type="submit"
            className="w-full  text-white-500  bg-lime-600/50 p-2 rounded hover:bg-lime-700 hover:text-white  transition-colors duration-200 hover:animate-pulse-once"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
