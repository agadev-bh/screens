Screens
===================

Screens is a simple pure javascript to display multiple sites on a monitor.

----------

Setup
-------------

Include a iframe on your html.
```html
<iframe id="targetFrame" frameborder="0" src="about:blank" marginwidth="0"></iframe>
```

Include the script located on the dist folder .
```
<script src="screens.js"></script>
```

Call the function passing the urls and the time to rotate the screens.
```
<script type="text/javascript">

document.addEventListener("DOMContentLoaded", function(event) {
	
	var urls = [
		"Url1",
		"Url2",
		"Url3"
	];

	panel(urls, 15); //set the time parameter in seconds

});

</script>
```

See "index.html" file as a example.