<template>
	<div class="alert alert--{{ type }}" 
	v-show="show"
	transition="fade"
	>
		<slot></slot>

		<span class="alert__close"
					v-show="important"
					@click="show = false"
		>
			x
		</span>
	</div>
</template>

<script>
	export default {

			props: {
				type: { default: 'info' },
				timeout: { default: 3000 },
				important: {
					type: Boolean,
					default: true
				}
			},

			data() {
				return { show: true };
			},

			ready() {

				if (!this.important) {
					setTimeout( 
						() => this.show = false,
						this.timeout 
					);
				}

			}
	}
</script>

<style lang="scss">

	.alert {
		padding: 10px;
		position: relative;

		&--info {
			background-color: gray;
		}

		&--success {
			background-color: green;
			color: white;
		}

		&__close {
			position: absolute;
			top: 10px;
			right: 10px;
		}
	}

	.fade-transition {
		transition: opacity 1s ease;
	}

	.fade-leave {
		opacity: 0;
	}
</style>