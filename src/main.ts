import './style.css';

// Função para adicionar uma animação de "fade in" aos posts
function animatePosts() {
  const posts = document.querySelectorAll<HTMLElement>('.post');
  posts.forEach((post, index) => {
    post.style.opacity = '0';
    post.style.transform = 'translateY(20px)';
    post.style.transition = `opacity 0.3s ease-out ${index * 0.1}s, transform 0.3s ease-out ${index * 0.1}s`;

    setTimeout(() => {
      post.style.opacity = '1';
      post.style.transform = 'translateY(0)';
    }, 100);
  });
}

// Executa a animação quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', () => {
  animatePosts();
});
