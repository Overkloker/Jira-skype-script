javascript:(function () {
  var text = [].slice.call(document.querySelector('tbody').querySelectorAll('.log-issue')).reduce(function (report, tr, i) { return report + (i + 1) + ". " + tr.querySelector('.issuekey a').href + " " + "_" + tr.querySelector('.summary a:last-child').textContent.trim() + "_ " + tr.querySelector('.hours.color-planned').textContent.trim() + " " + ": " + tr.querySelector('.hours.color-sum').textContent.trim() + "\n"; }, "");
  var textarea = document.createElement('textarea');
  textarea.value = text;
  document.body.appendChild(textarea);
  textarea.focus();
  textarea.select();
  document.execCommand('copy');
  window.getSelection().removeAllRanges();
  document.body.removeChild(textarea);
}());