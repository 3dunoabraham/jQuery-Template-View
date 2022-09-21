class jQueryTemplateView {
	constructor($container, options, data = null)
	{
		this.$container = $($container);

		this.options = Object.assign({
		}, options);

		this.data = Object.assign({
		}, data);

		let self = this;

		this.requests =
		{
		};

		this.updaters =
		{
		};

		this.watchers =
		{
		};

		this.clickers =
		{
		};

		this.initWatchers();
	}

	initWatchers()
	{
		let self = this;

		this.$container.on('change',"[data-watch]", function(event)
		{
			self.watchers[$(this).data('watch')](event);
		});

		this.$container.on('click',"[data-click]", function(event)
		{
			self.clickers[$(this).data('click')](event);
		});
	}
}

$(document).ready(function(){

	let newjQueryTemplateView = new jQueryTemplateView('#templateViewId', {
	});

});
