import React from 'react';
import {Text, StyleSheet} from 'react-native';
import colors from '../theme/colors';

const styles = StyleSheet.create({
  headline: {
    fontFamily: 'Arial',
    fontWeight: '700',
    fontSize: 32,
    color: colors.onBackground,
  },
  title: {
    fontFamily: 'Arial',
    fontWeight: '700',
    fontSize: 24,
    color: colors.onBackground,
  },
  subtitle: {
    fontFamily: 'Arial',
    fontWeight: '700',
    fontSize: 18,
    color: colors.onBackground,
  },
  body: {
    fontFamily: 'Arial',
    fontWeight: '300',
    fontSize: 14,
    color: colors.onBackground,
  },
  quote: {
    fontFamily: 'Arial',
    fontWeight: '300',
    fontSize: 18,
    color: colors.onBackgroundAlternative,
  },
  label: {
    fontFamily: 'Arial',
    fontWeight: '300',
    fontSize: 12,
    color: colors.onBackgroundAlternative,
  },
});

const Headline = ({style, ...props}) => (
  <Text style={[styles.headline, style]} {...props} />
);

const Title = ({style, ...props}) => (
  <Text style={[styles.title, style]} {...props} />
);

const Subtitle = ({style, ...props}) => (
  <Text style={[styles.subtitle, style]} {...props} />
);

const Body = ({style, ...props}) => (
  <Text style={[styles.body, style]} {...props} />
);

const Quote = ({style, ...props}) => (
  <Text style={[styles.quote, style]} {...props} />
);

const Label = ({style, ...props}) => (
  <Text style={[styles.label, style]} {...props} />
);

export {Headline, Title, Subtitle, Body, Quote, Label};
