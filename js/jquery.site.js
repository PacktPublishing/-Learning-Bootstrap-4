$(document).ready(function() {

	// TOOLTIPS
	$('[data-toggle="tooltip"]').tooltip();

	$('.specific-tip').tooltip({
		html: true,
  		placement: 'bottom',
  		trigger: 'click'
	});

	// POPOVERS
	$('[data-toggle="popover"]').popover();

	// DYNAMIC POPOVER
	const getAttr = (el, child) => {
  		return $(`.data-${child}`, $(el).attr('data-bind')).html();
	};

	$('.dynamic-popover').popover({
  		html: true,
  		placement: 'bottom',
  		title: function () {
    		return getAttr(this, 'title');
  		},
  		content: function () {
    		return getAttr(this, 'content');
  		}
	});


	// ACCOUNT MODAL VARIATIONS
	$('#account-modal').on('show.bs.modal', function (event) {
  		var $button = $(event.relatedTarget);
  		var $case = $button.data('case');
  		var $modal = $(this);

  		if($case == "register") {
  			$modal.find('#login-case').hide();
  			$modal.find('#register-case').show();
  		} else {
  			$modal.find('#register-case').hide();
  			$modal.find('#login-case').show();
  		}
	});


});
