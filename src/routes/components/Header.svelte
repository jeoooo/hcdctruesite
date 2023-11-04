<div class="box">
	<div class="rectangle">
		<img src="img/app logo.png" alt="" srcset="" width="1080" height="277" />
	</div>
	<div class="rectangle2" />
	<div class="rectangle3" />
	<div class="rectangle4" />
</div>

<style>
	.rectangle {
		width: 100%;
		height: 125px;
		top: 0;
		left: 0;
		background-color: #711019;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.rectangle2 {
		width: 100%;
		height: calc(125px / 1.618);
		top: 0;
		left: 0;
		background-color: #a61524;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.rectangle3 {
		width: 100%;
		height: calc(calc(125px / 1.618) / 1.618);
		top: 0;
		left: 0;
		background-color: #d91c30;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.rectangle4 {
		width: 100%;
		height: calc(calc(calc(125px / 1.618) / 1.618) / 1.618);
		top: 0;
		left: 0;
		background-color: #ff2138;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.rectangle img {
		max-width: 70%;
		max-height: 70%;
		height: auto;
		width: auto;
	}
</style>
