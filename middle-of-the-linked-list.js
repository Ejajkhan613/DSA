// Question
// Middle of the Linked List

// Given the head of a singly linked list, return the middle node of the linked list.
// If there are two middle nodes, return the second middle node.


var middleNode = function (head) {
    if (head == null) {
        return new LinkedListNode(1)
    }
    let slow = head;
    let fast = head;
    while (fast != null && fast.next != null) {
        fast = fast.next.next;
        slow = slow.next;
    }

    return slow
};