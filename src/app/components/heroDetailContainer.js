import Vue from 'vue';
import store from 'boot/store';
import * as actions from '../actions';
import HeroDetail from './heroDetail';

const HeroDetailContainer = Vue.extend({
  name: 'HeroDetailContainer',
  data: function data() {
    return {
      heroes: this.$select('app.heroes as heroes'),
      heroId: Number(this.$route.params.id),
    };
  },
  methods: {
    onSaveClick: function onSaveClick(hero) {
      store.dispatch(actions.updateHero(hero));
    },
  },
  render: function render(h) {
    const detailHero = this.heroes.find(hero => hero.id === this.heroId);
    return (
      <HeroDetail hero={detailHero} onSaveClick={this.onSaveClick} />
    );
  },
});

export default HeroDetailContainer;
