{{#speakers}}
<div class='speaker' id='{{lastname}}'>
  <div class='name'>{{firstname}} {{lastname}} <a href='{{smurl}}' class='{{smtype}}'>{{smhandle}}</a></div>
  <div class='talk'>
    <div class='title'>{{title}}</div>
    {{{body.tohtml}}}
  </div>
  <div class='bio'>
    <div class='title'>Meet {{firstname}}</div>
    {{{bio.tohtml}}}
  </div>
</div>
{{/speakers}}