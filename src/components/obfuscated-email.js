import React from "react"

const encoded = [97,98,104,105,115,104,101,107,98,97,110,116,104,105,97,64,109,101,46,99,111,109]

function decode() {
  return encoded.map(c => String.fromCharCode(c)).join("")
}

const ObfuscatedEmail = ({ subject, children, ...props }) => (
  <a
    href="#"
    onClick={e => {
      e.preventDefault()
      const params = subject
        ? "?subject=" + encodeURIComponent(subject)
        : ""
      window.location.href = "mailto:" + decode() + params
    }}
    {...props}
  >
    {children}
  </a>
)

export default ObfuscatedEmail
