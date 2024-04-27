public static String mirrorString(String str) {

int len = str.length();

char[] chars = new char[len];

for (int i = 0; i < len; i++) {

chars [len 1 i] = str.charAt(i);

}

return new String(chars); }