import React from 'react';
import Whitetail from './Whitetail.jpeg';

const BlogPost = ({sharePost}) => {

  const handleShare = (e) => {
    e.preventDefault();
    sharePost();
  }

  return (
    <div className="blog-post">
      <h2>Mid-Atlantic Skiing – A thing of the Past
          <h4>By: Dylan Bortnick</h4>
      </h2>
      
      <img src={Whitetail} alt="Whitetail Ski Resort"/>

      <p>
        Growing up outside of Washington, D.C. skiing was not a super prevalent part of my
        childhood. However, once I was exposed to the nearby mountains in southern Pennsylvania I fell
        in love with the sport. Nothing is better than the rush of cold air against your face as you glide
        down buttery white slopes. In high school, I had the opportunity to go “Big Boy” skiing in
        Colorado and realized that up until that point I had never really left the bunny hill. Even so,
        skiing in the Mid-Atlantic still holds a special place in my heart. It’s great for beginners and
        those who are trying to ease back into it. Unfortunately, due to changing climate patterns, many
        of these mountains might not be skiable for much longer. I fear that so many future generations
        may lose the opportunity to be exposed to skiing.
      </p>
      <p>
            Experiencing skiing in Colorado taught me how much weather conditions affect not only
        one’s ability to learn how to skillfully ski but also how to do so safely. Skiing conditions in the
        Mid-Atlantic are getting worse and worse each year as the level of snowfall decreases. Two of
        the mountains that I frequented growing up were Whitetail and Liberty. Both reside right on the
        boarder of Maryland and Pennsylvania. From 2013-2019 Whitetail averaged around 42 inches of
        snow, and Liberty averaged 35 inches. Since the close of the 2019 season both mountains are
        averaging under 10 inches per year. A lack of snow means a lack of good ski conditions. With
        temperatures teetering around the freezing mark, what little snow that does fall is very slick and
        icy. This makes for very dangerous ski conditions especially for beginners. As a result, many
        resorts have shifted to making man-made snow.
      </p>
      <p>
            Many ski resorts on the East Coast rely on almost 90%+ man-made snow. While this
        man-made snow is serviceable, it is far from ideal. It contains less air and more water causing it
        to be denser and icier when compared to soft and fluffy natural snow. Not only is this less fun to
        ski but it can also be more dangerous. The harder surface hurts a lot more to fall into, and icy
        patches can quickly lead to severe injuries. Although Maryland and Pennsylvania have never
        been able to get the true powder of the Rocky Mountains there has definitely been a considerable
        drop in snow quality over the past 5 years.
      </p>
      <p>
            In addition, making snow is a very expensive and difficult process. Temperatures must be
        low enough to keep the snow from melting overnight, below 28 degrees Fahrenheit, and it
        consumes a massive amount of water and energy to generate. As global temperatures continue to
        rise, Elizabeth Burakowski, a researcher at the University of New Hampshire, expects the entire
        Northeast to have a “50% decline in the days when conditions will be favorable to make snow.”
        Making this snow also requires non-renewable energy sources. The use of these natural resources
        will only increase the rate of global warming.
      </p>
      <p>
            At this pace, many of these mountains will not be able to offer skiing for much longer.
        The cost of producing man-made snow simply won’t be economically viable, especially since
        rising temperatures are also shortening the ski season. In Pennsylvania alone, the ski industry
        provides almost $750 million dollars, and tens of thousands of jobs. In the last 10 years many of
        these local family-owned resorts have been sold to large ski resort conglomerates. Both Whitetail
        and Liberty Mountain were sold twice between 2018-19.
      </p>
      <p>
            The company that now owns the mountains, Vail, owns 37 mountain resorts across the
        United States. Their business model reflects the rapid rate at which places are becoming
        unskiable. Vail offers an “Epic Pass” that allows you to access any of their mountains. If the 
        mountain closest to you has not been able to open, your Epic Pass likely gives you access to an
        open mountain not too far away. This approach helps guarantee Vail profit, without guaranteeing
        skiers that their local mountains will be open.
      </p>
      <p>
            If Global Warming continues to decimate skiing in the Mid-Atlantic region, future
        generations of potential skiers may never be exposed to the sport. While it was never top-notch
        skiing by global standards, I still have fond memories of learning to ski on these mountains with
        my friends and family. My cousins, many of whom are much younger than I, might never be able
        to make those same memories. And even if they do it will likely be a vastly inferior experience.
      </p>
      
      <button type="share" onClick={handleShare}>Share</button>
    </div>

  );
};

export default BlogPost;
