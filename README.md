# LiveGames eif-js
*eif-js* fundamentally is a pure js tool for embeding our games and widgets to your site.


## Example
It is designed to have multiple iframes (game, service or widget) on the same page.

``` html
<script type="text/javascript">
  (function(l,i,v,e,t,c,h){
  l['LiveGamesObject']=t;l[t]=l[t]||function(){(l[t].q=l[t].q||[]).push(arguments)},
  l[t].l=1*new Date();c=i.createElement(v),h=i.getElementsByTagName(v)[0];
  c.async=1;c.src=e;h.parentNode.insertBefore(c,h)
  })(window,document,'script','//embed.livegames.io/e-if.js','lg');
  if(lg){
    lg('sign', 'AA.BB.CC'); // User JWT Sign (must be generated at server-side)
    lg('bgColor', '000'); // background color => 'transparent' or hex color char(3)
    // lg('origin', 'https://example.io'); // frame top parent site origin url (default: window.location.origin) (required for fullscreen)
    // lg('exitUrl', '//example.io/livegames'); // if defined, will be used for the exit button on the full screen

	  lg('frames', [ // service definations
		  { // service: 'game'
			  container: 'lgGameContainer', // container of an iframe
			  windowName: 'liveGamesFrame' // windowName a.k.a iframe id
		  }
	  ]);
  }
</script>

```

**Note:** *If there is no element with id **liveGamesRoot** in the page, it will be newly created and added under the body.*
