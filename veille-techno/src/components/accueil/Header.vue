<template>
    <b-navbar toggleable="lg" type="dark" variant="info">
        <b-navbar-brand href="#">Veille</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
                <!-- Navbar dropdowns -->
                <b-nav-item-dropdown text="Langages" right>
                    <b-dropdown-item href="#">Javascript</b-dropdown-item>
                    <b-dropdown-item href="#">PHP</b-dropdown-item>
                    <b-dropdown-item href="#">HTML/CSS</b-dropdown-item>
                    <b-dropdown-item href="#">Autres</b-dropdown-item>
                </b-nav-item-dropdown>
                <b-nav-item href="#">Design</b-nav-item>
                <b-nav-item href="#">Mobile</b-nav-item>
                <b-nav-item href="#">Graphic</b-nav-item>
                <b-nav-item href="#">CMS</b-nav-item>
            </b-navbar-nav>
                

            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
                <b-nav-form>
                    <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
                    <b-button size="sm" class="my-2 my-sm-0" type="submit">Rechercher</b-button>
                </b-nav-form>

                <b-nav-item-dropdown right>
                    <!-- Using 'button-content' slot -->
                    <template v-slot:button-content>
                        <em>Utilisateur</em>
                    </template>
                    <b-dropdown-item href="#">Profil</b-dropdown-item>
                    <b-dropdown-item href="#">Se déconnecter</b-dropdown-item>
                </b-nav-item-dropdown>
            </b-navbar-nav>
        </b-collapse>
    </b-navbar>   
</template>

<script>
export default {
    name: "header"
}
</script>

<style>

</style>