
//
// StyleDictionaryColor.h
//

// Do not edit directly
// Generated on Sun, 05 Nov 2023 20:46:41 GMT


#import <UIKit/UIKit.h>

typedef NS_ENUM(NSInteger, StyleDictionaryColorName) {
ColorBlack,
ColorDark,
ColorPrimary,
ColorYellow,
ColorBody,
ColorFontBase,
ColorFontSecondary,
ColorFontTertiary
};

@interface StyleDictionaryColor : NSObject
+ (NSArray *)values;
+ (UIColor *)color:(StyleDictionaryColorName)color;
@end
