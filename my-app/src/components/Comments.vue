<template>
  <div class="container">
    <button class="back-button" @click="goBack">Return to Home</button>

    <div class="comments-container">
      <div class="comment-form">
        <h2>Leave a Comment</h2>
        <form @submit.prevent="submitComment" id="commentForm">
          <input type="text" id="name" v-model="name" placeholder="Your Name" required>
          <textarea id="comment" v-model="comment" placeholder="Your Comment" rows="4" required></textarea>
          <button type="submit" class="submit-btn">Submit Comment</button>
          <div v-if="submissionStatus" class="status-message">
            {{ submissionStatus }}
          </div>
        </form>
      </div>

      <div class="comment-list" id="commentList">
        <div v-for="comment in comments" :key="comment.id" class="comment">
          <div class="comment-header">
            <span class="comment-name">{{ comment.name }}</span>
            <span class="comment-date">{{ formatDate(comment.created_at) }}</span>
          </div>
          <p>{{ comment.comment }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { supabase } from '../lib/supabaseClient';

const router = useRouter();
const name = ref('');
const comment = ref('');
const submissionStatus = ref(null);
const comments = ref([]);
const tableName = 'comments';
const goBack = () => {
  router.push('/');
};

function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });
}

async function submitComment() {
  submissionStatus.value = "Submitting...";
  try {
    const { error } = await supabase
      .from(tableName)
      .insert([{ name: name.value, comment: comment.value }]);

    if (error) throw error;

    submissionStatus.value = "Comment submitted successfully!";
    name.value = '';
    comment.value = '';
    await getComments();
  } catch (err) {
    console.error("Error submitting comment:", err);
    submissionStatus.value = "Error submitting comment. Please try again.";
  }
}

async function getComments() {
  try {
    const { data, error } = await supabase
      .from(tableName)
      .select('*')
      .order('created_at', { ascending: false });

    if (error) throw error;

    comments.value = data;
  } catch (err) {
    console.error("Error fetching comments:", err);
    submissionStatus.value = "Error loading comments.";
  }
}

onMounted(() => {
  getComments();
});
</script>

<style scoped>
.container {
  padding: 30px;
  max-width: 700px;
  margin: 30px auto;
  background: #f8f8f8;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.back-button {
  background-color: #3498db;
  color: white;
  border: none;
  padding: 12px 20px;
  border-radius: 6px;
  cursor: pointer;
  margin-bottom: 20px;
  display: inline-block;
  font-size: 16px;
  transition: background-color 0.3s ease;
}

.back-button:hover {
  background-color: #2980b9;
}

.comments-container {
  display: flex;
  flex-direction: column;
}

.comment-form {
  background: white;
  padding: 25px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
}

.comment-form h2 {
  margin-bottom: 20px;
  color: #333;
}

.comment-form input,
.comment-form textarea {
  width: calc(100% - 22px);
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
}

.submit-btn {
  background: #2ecc71;
  color: white;
  border: none;
  padding: 12px 20px;
  cursor: pointer;
  border-radius: 6px;
  margin-top: 10px;
  font-size: 16px;
  transition: background-color 0.3s ease;
}

.submit-btn:hover {
  background: #27ae60;
}

.status-message {
  margin-top: 15px;
  font-weight: 600;
  color: #333;
  text-align: center;
}

.comment-list {
  margin-top: 20px;
}

.comment {
  background: #f0f8ff;
  padding: 15px;
  border-radius: 8px;
  margin-bottom: 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.comment-header {
  display: flex;
  justify-content: space-between;
  font-weight: 600;
  margin-bottom: 10px;
  color: #555;
}

.comment-name {
  color: #3498db;
}

.comment-date {
  font-size: 0.9em;
  color: #777;
}

.comment p {
  margin: 0;
  color: #333;
}
</style>