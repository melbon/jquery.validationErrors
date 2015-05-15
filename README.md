# jquery.validationErrors
This plugin prevents native browser error messages and shows custom ones. Also you can use "pattern" attribute on input fields with regex validation without any additional libraries.
## Install
```javascript
<script src="jquery.min.js"></script>
<script src="../jquery.validationErrors.min.js"></script>
```
or 
```javascript
bower install validation-errors
```
## Usage
```javascript
$(selector).validationErrors();
```
## Configuration
#####type
set error types 
```javascript
default: "inline"
options: "inline" / "block"
```
#####position
set errors list  position
note: only used when type: "block"
```javascript
default: "after"
options: "after" / "before"
```
#####keypress
validate input on keypress event
note: only used when type: "inline"
```javascript
default: false
options: boolean / true or false
```
#####ajaxPost
is form will be submited via ajax
```javascript
default: true
options: boolean / true or false
```
#####onSubmit
will be executed when the form is filling correctly and be submited
```javascript
default: {}
options: function
```
## Demo
<a href="http://codepen.io/mel/full/eNzONE" target="_blank">codepen.io/mel/full/eNzONE</a>
## License
@author Mario Vidov <br />
@url <a href="http://vidov.it" target="_blank">www.vidov.it</a> <br />
@twitter  <a href="http://twitter.com/MarioVidov" target="_blank">MarioVidov</a> <br />
MIT license