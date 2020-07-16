$(document).ready(function()
{
  update();

  $(window).bind('load', update);

  $(window).bind('scroll', update);

  $(window).bind('resize', update);

  function update()
  {
    stickUnstickNavBar();
  }

  function stickUnstickNavBar()
  {
    var initialNavBarTop = $('.heading').position().top + $('.heading').height();
    var winTop = $(window).scrollTop();
    var navBarPosition = $('nav:first').position();
    var navBarTop = navBarPosition.top;

    if (initialNavBarTop <= winTop - 2)
    {
      stickNavBar();
    }
    else
    {
      unstickNavBar();
    }
  }

  function stickNavBar()
  {
    if ($('nav:first').hasClass('sticky'))
    {
      return;
    }

    var navBarHeight = $('nav:first').height();
    $('nav:first').addClass('sticky');

    moveHeadingBehindFooter();
  }

  function unstickNavBar()
  {
    if (!$('nav:first').hasClass('sticky'))
    {
      return;
    }

    $('nav:first').removeClass('sticky');
    $('.navbar-brand:first').fadeOut();

    moveHeadingInFrontOfFooter();
  }

  function moveHeadingInFrontOfFooter()
  {
    $('.heading').css('z-index', -1);
  }

  function moveHeadingBehindFooter()
  {
    $('.heading').css('z-index', -3);
  }

  function getNavBarHeight()
  {
    var navBarHeight = $('.navbar-toggler:first').height();
    if (navBarHeight == undefined)
    {
      navBarHeight = $('.nav-item:first').height();
    }

    return navBarHeight;
  }
});
