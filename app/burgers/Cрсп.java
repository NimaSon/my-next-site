import java.nio.file.*;
import java.util.*;
import java.util.regex.*;

public class Main {
    public static void main(String[] args) throws Exception {
        String text = Files.readString(Path.of("input.txt"));

        // здесь твой код
        Pattern p = Pattern.compile("[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,}");
Matcher m = p.matcher(text);

while (m.find()) {
    System.out.println(m.group());
}

Pattern p = Pattern.compile("([A-Za-z0-9._%+-]+)@[A-Za-z0-9.-]+\\.[A-Za-z]{2,}");
Matcher m = p.matcher(text);

String longest = "";
while (m.find()) {
    String login = m.group(1);
    if (login.length() > longest.length()) longest = login;
}
System.out.println("Самый длинный логин: " + longest);

String[] sentences = text.split("[.!?]");
String longestSentence = "";

for (String s : sentences) {
    if (s.trim().length() > longestSentence.length()) {
        longestSentence = s.trim();
    }
}

System.out.println("Самое длинное предложение:\n" + longestSentence);

Pattern p = Pattern.compile("(\\d{1,3}(?:\\.\\d{1,3}){3})(.*)");
Matcher m = p.matcher(text);

while (m.find()) {
    System.out.println("IP: " + m.group(1) + " | Данные: " + m.group(2).trim());
}

Pattern p = Pattern.compile("\\b\\d{2}\\.\\d{2}\\.\\d{4}\\b");
Matcher m = p.matcher(text);

while (m.find()) {
    System.out.println(m.group());
}

Pattern p = Pattern.compile("Author:\\s*(.+)");
Matcher m = p.matcher(text);

Map<String, Integer> count = new HashMap<>();

while (m.find()) {
    String author = m.group(1).trim();
    count.put(author, count.getOrDefault(author, 0) + 1);
}

count.forEach((author, c) -> 
    System.out.println(author + " — " + c + " сообщений"));

    String noBrackets = text.replaceAll("\\([^)]*\\)", "");
System.out.println(noBrackets);

Pattern p = Pattern.compile(
        "[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,}"  // email
);
Matcher m = p.matcher(text);

while (m.find()) {
    System.out.println(m.group());
}

Pattern p = Pattern.compile("Author:\\s*(.+)");
Matcher m = p.matcher(text);

Map<String, Integer> count = new HashMap<>();

while (m.find()) {
    String author = m.group(1).trim();
    count.put(author, count.getOrDefault(author, 0) + 1);
}

String bestAuthor = null;
int max = 0;

for (var entry : count.entrySet()) {
    if (entry.getValue() > max) {
        bestAuthor = entry.getKey();
        max = entry.getValue();
    }
}

System.out.println("Больше всего писем отправил: " + bestAuthor +
                   " (" + max + ")");
    }
}
