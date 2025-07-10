<form
  name="contact"
  method="POST"
  data-netlify="true"
  class="needs-validation"
  netlify-honeypot="bot-field"
  action="/thank-you.html"
>
  <input type="hidden" name="form-name" value="contact" />

  <p>
    <label>
      Your Name: <input type="text" name="name" required />
    </label>
  </p>

  <p>
    <label>
      Your Email: <input type="email" name="email" required />
    </label>
  </p>

  <p>
    <label>
      Message: <textarea name="message" required></textarea>
    </label>
  </p>

  <p style="display:none;">
    <label>
      Don’t fill this out if you’re human: <input name="bot-field" />
    </label>
  </p>

  <p>
    <button type="submit">Send</button>
  </p>
</form>;
