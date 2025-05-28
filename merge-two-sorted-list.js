// Question
// Merge Two Sorted Lists
// You are given the heads of two sorted linked lists list1 and list2.
// Merge the two lists into one sorted list.
// The list should be made by splicing together the nodes of the first two lists.
// Return the head of the merged linked list.




var mergeTwoLists = function (list1, list2) {
    let newLL = new ListNode(-1);
    let temp = newLL;

    let first = list1;
    let second = list2;
    while (first != null || second != null) {
        if (first == null) {
            temp.next = second;
            temp = temp.next;
            second = second.next;
        } else if (second == null) {
            temp.next = first;
            temp = temp.next;
            first = first.next;
        } else {
            if (first.val < second.val) {
                temp.next = first;
                temp = temp.next;
                first = first.next;
            } else if (second.val < first.val) {
                temp.next = second;
                temp = temp.next;
                second = second.next;
            } else {
                temp.next = first;
                temp = temp.next;
                first = first.next;
                temp.next = second;
                temp = temp.next;
                second = second.next
            }
        }
    }
    return newLL.next;
};