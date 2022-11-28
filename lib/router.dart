import 'package:amazon_clone_tutorial_praksa/features/auth/screens/auth_screen.dart';
import 'package:amazon_clone_tutorial_praksa/features/home/screens/home_screen.dart';
import 'package:flutter/material.dart';

Route<dynamic> generateRoute(routeSettings) {
  switch (routeSettings) {
    case AuthScreen.routeName:
      return MaterialPageRoute(
        settings: routeSettings,
        builder: (_) => const AuthScreen(),
      );

    case HomeScreen.routeName:
      return MaterialPageRoute(
        settings: routeSettings,
        builder: (_) => const HomeScreen(),
      );
    default:
      return MaterialPageRoute(
        settings: routeSettings,
        builder: (_) => const Scaffold(
          body: Center(
            child: Text('Screen do not exist!'),
          ),
        ),
      );
  }
}
