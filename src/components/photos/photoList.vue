<template>
    <div>
        <div id="slider" class="mui-slider">
			<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
				<div class="mui-scroll">
					<router-link  class="mui-control-item mui-active" to="/item1mobile" data-wid="tab-top-subpage-1.html">
						推荐
					</router-link>
					<router-link  class="mui-control-item" to="/item2mobile" data-wid="tab-top-subpage-2.html">
						热点
					</router-link>
					<router-link  class="mui-control-item" to="/item3mobile" data-wid="tab-top-subpage-3.html">
						北京
					</router-link>
					<router-link  class="mui-control-item" to="/item4mobile" data-wid="tab-top-subpage-4.html">
						社会
					</router-link>
					<router-link  class="mui-control-item" to="/item5mobile" data-wid="tab-top-subpage-5.html">
						娱乐
					</router-link>
					<router-link  class="mui-control-item" to="/item6mobile" data-wid="tab-top-subpage-6.html">
						科技
					</router-link>
				</div>
			</div>
		</div>
    </div>
</template>


<script>
export default {
    
}
</script>

<style lang="scss" scoped>

</style>