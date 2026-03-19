#include <vector>
#include <emscripten.h>
using namespace std;

// ================= JOB STRUCT =================
struct Job {
    int id;
    int salary;

    Job(int i = 0, int s = 0) : id(i), salary(s) {}

    bool operator>(const Job& other) const {
        return salary > other.salary;
    }
};

// ================= YOUR LEFTIST HEAP (UNCHANGED) =================
template <typename T>
class LeftistHeap {
private:
    struct LeftistNode {
        T element;
        LeftistNode* left;
        LeftistNode* right;
        int npl;

        LeftistNode(const T& x, LeftistNode* lt = nullptr, LeftistNode* rt = nullptr, int np = 0)
            : element(x), left(lt), right(rt), npl(np) {}
    };

    LeftistNode* root;

public:
    LeftistHeap() {
        root = nullptr;
    }

    bool isEmpty() const {
        return root == nullptr;
    }

    const T& findMax() const {
        if (isEmpty())
            throw "Underflow";
        return root->element;
    }

    void makeEmpty() {
        reclaimMemory(root);
        root = nullptr;
    }

    void insert(const T& x) {
        root = merge(new LeftistNode(x), root);
    }

    void deleteMax() {
        if (isEmpty())
            throw "Underflow";

        LeftistNode* oldRoot = root;
        root = merge(root->left, root->right);
        delete oldRoot;
    }
    
    void mergeWith(LeftistHeap &rhs) {
        if (this == &rhs) return;
        root = merge(root, rhs.root);
        rhs.root = nullptr;
    }

private:

    LeftistNode* merge(LeftistNode* h1, LeftistNode* h2) {
        if (h1 == nullptr) return h2;
        if (h2 == nullptr) return h1;

        if (h1->element > h2->element)
            return merge1(h1, h2);
        else
            return merge1(h2, h1);
    }

    LeftistNode* merge1(LeftistNode* h1, LeftistNode* h2) {
        if (h1->left == nullptr)
            h1->left = h2;
        else {
            h1->right = merge(h1->right, h2);

            if (h1->left->npl < h1->right->npl)
                swapChildren(h1);

            h1->npl = h1->right->npl + 1;
        }
        return h1;
    }

    void swapChildren(LeftistNode* t) {
        LeftistNode* temp = t->left;
        t->left = t->right;
        t->right = temp;
    }

    void reclaimMemory(LeftistNode* t) {
        if (t != nullptr) {
            reclaimMemory(t->left);
            reclaimMemory(t->right);
            delete t;
        }
    }
};

// ================= GLOBAL DATA =================
LeftistHeap<Job> heapHigh;
LeftistHeap<Job> heapLow;
vector<Job> jobs;

// ================= EXPORTED FUNCTIONS =================
extern "C" {

// Reset everything
EMSCRIPTEN_KEEPALIVE
void clearJobs() {
    jobs.clear();
    heapHigh.makeEmpty();
    heapLow.makeEmpty();
}

// Add job from React
EMSCRIPTEN_KEEPALIVE
void addJob(int id, int salary) {
    jobs.push_back(Job(id, salary));
}

// Build heap for salary > 100k
EMSCRIPTEN_KEEPALIVE
void buildHighHeap() {
    heapHigh.makeEmpty();

    for (auto &job : jobs) {
        if (job.salary > 100000)
            heapHigh.insert(job);
    }
}

// Build heap for salary <= 100k
EMSCRIPTEN_KEEPALIVE
void buildLowHeap() {
    heapLow.makeEmpty();

    for (auto &job : jobs) {
        if (job.salary <= 100000)
            heapLow.insert(job);
    }
}

// Merge both heaps
EMSCRIPTEN_KEEPALIVE
void mergeHeaps() {
    heapHigh.mergeWith(heapLow);
}

// Extract max salary
EMSCRIPTEN_KEEPALIVE
int extractMaxSalary() {
    if (heapHigh.isEmpty()) return -1;

    int val = heapHigh.findMax().salary;
    heapHigh.deleteMax();
    return val;
}

}