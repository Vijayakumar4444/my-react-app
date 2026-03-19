#include <string>
#include <map>
#include <vector>
#include <cctype>
#include <emscripten.h>

using namespace std;

struct Node {
    map<char, Node*> children;
    vector<int> jobIds;
};

Node* root = new Node();

// ---------------- INSERT ----------------
extern "C" {

EMSCRIPTEN_KEEPALIVE
void insertWord(const char* word, int jobId) {
    Node* node = root;

    for (int i = 0; word[i]; i++) {
        char c = tolower(word[i]);

        if (!node->children[c]) {
            node->children[c] = new Node();
        }

        node = node->children[c];
    }

    node->jobIds.push_back(jobId);
}

// ---------------- MULTI SEARCH ----------------
EMSCRIPTEN_KEEPALIVE
int* searchAll(const char* word, int* size) {

    Node* node = root;

    for (int i = 0; word[i]; i++) {
        char c = tolower(word[i]);

        if (!node->children[c]) {
            *size = 0;
            return NULL;
        }

        node = node->children[c];
    }

    *size = node->jobIds.size();
    return node->jobIds.data();
}

// ---------------- AUTOCOMPLETE ----------------
vector<string> suggestions;

void dfs(Node* node, string current) {

    if (!node->jobIds.empty()) {
        suggestions.push_back(current);
    }

    for (auto &child : node->children) {
        dfs(child.second, current + child.first);
    }
}

EMSCRIPTEN_KEEPALIVE
const char* getSuggestions(const char* prefix) {

    suggestions.clear();

    Node* node = root;

    for (int i = 0; prefix[i]; i++) {
        char c = tolower(prefix[i]);

        if (!node->children[c]) {
            return "";
        }

        node = node->children[c];
    }

    dfs(node, string(prefix));

    static string result = "";
    result.clear();

    int limit = min(5, (int)suggestions.size());

    for (int i = 0; i < limit; i++) {
        result += suggestions[i] + ",";
    }

    return result.c_str();
}

}