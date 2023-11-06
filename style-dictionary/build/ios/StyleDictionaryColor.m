
//
// StyleDictionaryColor.m
//

// Do not edit directly
// Generated on Sun, 05 Nov 2023 20:46:41 GMT


#import "StyleDictionaryColor.h"

@implementation StyleDictionaryColor

+ (UIColor *)color:(StyleDictionaryColorName)colorEnum{
  return [[self values] objectAtIndex:colorEnum];
}

+ (NSArray *)values {
  static NSArray* colorArray;
  static dispatch_once_t onceToken;

  dispatch_once(&onceToken, ^{
    colorArray = @[
[UIColor colorWithRed:0.035f green:0.055f blue:0.204f alpha:1.000f],
[UIColor colorWithRed:0.114f green:0.129f blue:0.267f alpha:1.000f],
[UIColor colorWithRed:0.290f green:0.424f blue:0.969f alpha:1.000f],
[UIColor colorWithRed:0.984f green:0.690f blue:0.251f alpha:1.000f],
[UIColor colorWithRed:0.584f green:0.612f blue:0.694f alpha:1.000f],
[UIColor colorWithRed:0.035f green:0.055f blue:0.204f alpha:1.000f],
[UIColor colorWithRed:0.290f green:0.424f blue:0.969f alpha:1.000f],
[UIColor colorWithRed:0.984f green:0.690f blue:0.251f alpha:1.000f]
    ];
  });

  return colorArray;
}

@end
