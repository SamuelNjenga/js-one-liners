// Copy to clipboard
const browserEnv = require("browser-env");

browserEnv(["navigator"])
  .clipboard.writeText("This is the text to be copied")
  .then(
    () => {
      console.log("Content copied to clipboard");
      /* Resolved - text copied to clipboard successfully */
    },
    () => {
      console.error("Failed to copy");
      /* Rejected - text failed to copy to the clipboard */
    }
  );

//8.43
