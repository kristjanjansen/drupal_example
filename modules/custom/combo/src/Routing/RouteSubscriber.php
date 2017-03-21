<?php

namespace Drupal\combo\Routing;

use Drupal\Core\Routing\RouteSubscriberBase;
use Symfony\Component\Routing\RouteCollection;

/**
 * Class RouteSubscriber.
 *
 * @package Drupal\combo\Routing
 * Listens to the dynamic route events.
 */
class RouteSubscriber extends RouteSubscriberBase {

  /**
   * {@inheritdoc}
   */
  protected function alterRoutes(RouteCollection $collection) {
    /* @var Route $route */
    foreach ($collection as $route_name => $route) {
      if (strpos($route->getPath(), '/user') === 0) {
        $route->setOption('_admin_route', TRUE);
      }
    }
  }
  
}
