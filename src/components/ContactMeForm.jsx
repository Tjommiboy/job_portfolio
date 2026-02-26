// ContactForm.jsx
export default function ContactForm() {
  return (
    <div className="container mx-auto px-4 ">
      <h2 className="text-4xl font-bold mb-6 text-center text-[var(--natural-7)] [text-shadow:3px_3px_8px_rgba(255,255,255,0.3)]">
        Contact Me
      </h2>
      <div className="max-w-lg mx-auto p-4 bg-amber-100/80  shadow-md rounded mt-8">
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
            <label className="block text-sm font-medium mb-1" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              name="name"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="message">
              Message
            </label>
            <textarea
              name="message"
              rows="5"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
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
