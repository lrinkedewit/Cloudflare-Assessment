const html = `<!DOCTYPE html>
<body>
  <h1>Hello World</h1>
  <p>This markup was generated by a Cloudflare Worker. And here is a change!</p>
</body>`;

// just "name" was not working as a constant so I changed it to "name1" for the interim
const name1 = "Leonoor";
const quote = "Success is not a destination; it is a journey we must constantly pursue.";

async function handleRequest(request) {
  return new Response(html, {
    headers: {
      'content-type': 'text/html;charset=UTF-8',
      'set-cookie': name1, 
      'set-cookie': quote
    },
  });
}

addEventListener('fetch', event => {
  console.log(document.cookie);

  return event.respondWith(handleRequest(event.request));
});

// attempt at adding an expiration date
function display() { 
  var now = new Date();
  var time = now.getTime();
  var expireTime = time + 1000*36000;
  now.setTime(expireTime);
  document.cookie = 'cookie=ok;expires='+now.toUTCString()+';path=/';
  //console.log(document.cookie);  // 'Wed, 31 Oct 2012 08:50:17 UTC'
}
