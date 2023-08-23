import "@fontsource/roboto"; // Defaults to weight 400
import "@fontsource/roboto/400.css"; // Specify weight
import "@fontsource/roboto/400-italic.css"; // Specify weight and style
import Review from './components/Review'

function App() {
  

  return (
    <> <div class="link">
    <p>
        by
        <a href="https://github.com/iamhusniddin" target="_blank">
          Husniddin Hamidov
        </a>
      </p>
</div>
      <Review/>
    </>
  )
}

export default App
