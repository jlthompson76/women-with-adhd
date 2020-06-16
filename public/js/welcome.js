// Women with ADHD Website Welcome Message
//
// This function runs when the Women with ADHD homepage (views/pages/index.ejs) is loaded and creates the opening animation, followed by the entire welcome message being displayed.

function websiteWelcome() {
  let welcomeMessage = ["<p>Are you a woman with diagnosed ADHD, or <br>do you suspect that you might have ADHD but aren't sure?</p>", "<p>Do you struggle with time management, <br>procrastination, and perfectionism?</p>", "<p>With setting priorities and being productive?</p> <p>Getting started on tasks? Finishing tasks?</p>", "<p>Are you easily distracted? Forgetful? Bored?</p> <p>Find it difficult to focus and concentrate?</p>", "<p>Do you have trouble staying organized?</p> <p>Are you surrounded by lots of clutter and piles?</p>", "<p>Do you often feel overwhelmed and exhausted, <br>trying to stay on top of things?</p>","<p>Have too much to do but end up not doing anything <br>because you don't even know where to start?</p>", "<p>Do you feel things intensely and sometimes <br>have trouble regulating your emotions?</p>", "<p>Are you intelligent and creative, but <br>feel like you haven't lived up to your potential?</p>", "<p>Living with Attention Deficit/Hyperactivity Disorder <br>can be a challenge...</p>", "<p>but, when successfully managed and treated, <br>it can also be a <span style=\"color:#fe0000\">strength</span> and a <span style=\"color:#fe0000\">superpower</span>.</p>","<div class='final-message'><p>Are you a woman with diagnosed ADHD, or do you suspect that you might have ADHD but aren't sure?</p> <p>Do you struggle with time management, procrastination, and perfectionism? With setting priorities and being productive? Getting started on tasks? Finishing tasks? Are you easily distracted? Forgetful? Bored? Find it difficult to focus and concentrate?</p> <p>Do you have trouble staying organized? Do you live with lots of clutter and piles of papers? Do you often feel overwhelmed and exhausted, trying to stay on top of things? Have too much to do but end up not doing anything because you don't even know where to start?</p> <p>Do you feel things intensely and sometimes have trouble regulating your emotions? Are you smart and creative, but feel like you haven't lived up to your potential?</p> <p>Living with Attention Deficit/Hyperactivity Disorder can be a challenge...but, if successfully managed and treated, it can also be a <span style=\"color:#fe0000\">strength</span> and a <span style=\"color:#fe0000\">superpower</span>.</p>"];
  
  let i = 0;
  let element = document.querySelector(".welcome-text");
  let welcome = setInterval(animateMessage, 5000);

  function animateMessage() {
    element.innerHTML = welcomeMessage[i];
    i++;
    if (i >= welcomeMessage.length) {
      i = 0;
      clearInterval(welcome);
    }
  }
}