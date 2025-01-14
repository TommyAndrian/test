const comments = [
    {
        commentId: 1,
        commentContent: 'Hai',
        replies: [
            {
                commentId: 11, commentContent: 'Hai juga',
                replies: [
                    {
                        commentId: 111,
                        commentContent: 'Haai juga hai jugaa'
                    },
                    {
                        commentId: 112,
                        commentContent: 'Haai juga hai jugaa'
                    }
                ]
            },
            {
                commentId: 12,
                commentContent: 'Hai juga',
                replies: [
                    {
                        commentId: 121,
                        commentContent: 'Haai juga hai jugaa'
                    }
                ]
            }
        ]
    },
    {
        commentId: 2,
        commentContent: 'Halooo'
    }
];

// Fungsi untuk menghitung total komentar, termasuk balasan
function countComments(comments) {
    let totalCount = 0;
    
    // Loop untuk setiap komentar
    comments.forEach(comment => {
        totalCount++; // Hitung komentar utama
        
        // Jika ada balasan, hitung balasan tersebut secara rekursif
        if (comment.replies && comment.replies.length > 0) {
            totalCount += countComments(comment.replies);
        }
    });
    
    return totalCount;
}

// Menampilkan hasil
const totalComments = countComments(comments);
console.log("Total komentar:", totalComments);
