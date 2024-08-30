document.getElementById('createPost').addEventListener('click', function() {
  const author = document.getElementById('author').value.trim();
  const description = document.getElementById('description').value.trim();

  if (author && description) {
      const postContainer = document.getElementById('posts');

      const postDiv = document.createElement('div');
      postDiv.className = 'post';

      const postAuthor = document.createElement('h3');
      postAuthor.textContent = author;

      const postDescription = document.createElement('p');
      postDescription.textContent = description;

      const postButtons = document.createElement('div');
      postButtons.className = 'post-buttons';

      const editButton = document.createElement('button');
      editButton.textContent = 'Edit';
      editButton.className = 'edit-btn';

      const saveButton = document.createElement('button');
      saveButton.textContent = 'Save';
      saveButton.className = 'save-btn';

      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.className = 'delete-btn';

      editButton.addEventListener('click', function() {
          const newAuthor = prompt('Edit Author:', postAuthor.textContent);
          const newDescription = prompt('Edit Description:', postDescription.textContent);

          if (newAuthor !== null) {
              postAuthor.textContent = newAuthor;
          }
          if (newDescription !== null) {
              postDescription.textContent = newDescription;
          }
      });

      saveButton.addEventListener('click', function() {
          // Save functionality is not needed since we're using prompt for editing
      });

      deleteButton.addEventListener('click', function() {
          postContainer.removeChild(postDiv);
      });

      postButtons.appendChild(editButton);
      postButtons.appendChild(saveButton);
      postButtons.appendChild(deleteButton);

      postDiv.appendChild(postAuthor);
      postDiv.appendChild(postDescription);
      postDiv.appendChild(postButtons);

      postContainer.appendChild(postDiv);

      document.getElementById('author').value = '';
      document.getElementById('description').value = '';
  } else {
      alert("Please fill in both fields.");
  }
});
