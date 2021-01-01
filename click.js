	
			var labelArray = [<b:if cond='data:post.labels'><b:loop values='data:post.labels' var='label'>&quot;<data:label.name/>&quot;<b:if cond='data:label.isLast != &quot;true&quot;'>, </b:if></b:loop></b:if>];
			var relatedPostConfig = {
			homePage: &quot;<data:blog.homepageUrl/>&quot;,
			widgetTitle: &quot;&lt;div class=&#39;label-line-c&#39;&gt;&lt;h4&gt;Related Posts&lt;/h4&gt;&lt;/div&gt;&quot;,
			numPosts: 4,
			summaryLength: 370,
			titleLength: &quot;auto&quot;,
			thumbnailSize: 250,
			noImage: &quot;//1.bp.blogspot.com/-lbF_-uMhOUk/XsPnhv8SPxI/AAAAAAAAJRQ/O7KqrfJdN8wqJyyCbarikKFLO29lHMg1wCLcBGAsYHQ/s1600/Screenshot_2020-05-19-21-02-44-1.png&quot;,
			containerId: &quot;related-post-<data:post.id/>&quot;,
			newTabLink: false,
			moreText: &quot;Read More&quot;,
			widgetStyle: 3,
			callBack: function() {}
			};
	

					
