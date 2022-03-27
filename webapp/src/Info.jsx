import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const Info = () => {
  return (
    <Container sx={{mt: 2, mb: 2}} maxWidth="md">
      <Typography variant="h4" component="h1" gutterBottom>Information</Typography>
      <Typography variant="body1" paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc elementum hendrerit sem eget
        blandit. Phasellus eu sapien ornare, faucibus erat euismod, mattis magna. Aenean hendrerit
        est ac elit efficitur luctus. Ut laoreet, eros eu euismod commodo, est magna pellentesque
        velit, vitae porttitor dui erat ac orci. Nunc id faucibus lacus, in gravida ante. Morbi
        eleifend nulla ex, ultricies commodo ex venenatis id. Maecenas tincidunt sagittis nisi,
        sollicitudin pulvinar nulla molestie in. Nulla eu nulla purus. Quisque at ornare diam. Sed
        nec ultrices odio, nec euismod mi. Mauris laoreet scelerisque risus nec tempor. Interdum et
        malesuada fames ac ante ipsum primis in faucibus. Phasellus porttitor ornare lacus, in
        consectetur ante egestas quis. Vestibulum facilisis tortor quis nisi ultrices, at laoreet
        nisl ultricies. Donec ac iaculis est. Ut quis diam viverra, egestas nunc eu, molestie magna.
      </Typography>
      <Typography variant="h5" component="h2" gutterBottom>Curabitur rhoncus</Typography>
      <Typography variant="body1" paragraph>
        Curabitur rhoncus eleifend velit, id mattis leo ullamcorper vitae. Praesent consequat, augue
        a dapibus lobortis, nisl lacus scelerisque elit, id placerat turpis quam quis lectus.
        Vivamus placerat varius lorem ut tristique. Aenean aliquet mauris eu consequat bibendum.
        Praesent ac nisi eget turpis vestibulum tincidunt. Cras lacinia eu enim sed tristique.
        Praesent vehicula neque rutrum eros sollicitudin ultrices. Pellentesque a condimentum mi.
        Vestibulum tristique non felis vitae ornare. Aliquam erat volutpat. Aliquam id sodales
        velit.
      </Typography>
      <Typography variant="body1" paragraph>
        Mauris iaculis egestas tortor elementum suscipit. Cras eget magna nulla. Aliquam
        condimentum, nisl eu mollis tristique, ipsum eros pulvinar massa, id varius quam dolor at
        sapien. Mauris vel massa ut massa hendrerit pulvinar id in nisl. Nam sapien lacus, venenatis
        et ornare a, egestas sed ipsum. Proin lacus urna, pharetra non cursus quis, rutrum ac justo.
        Duis ultricies volutpat dui nec congue. Maecenas a auctor sem, nec sollicitudin erat.
        Suspendisse porta, ligula quis vehicula facilisis, sem nunc sagittis velit, a congue augue
        neque ut arcu. Nunc commodo quis est in lacinia. Ut ac aliquam leo, eu convallis leo. In
        placerat lobortis eros vitae faucibus. Integer dui nibh, malesuada vitae feugiat in, luctus
        nec elit. Duis scelerisque non eros a sagittis. Suspendisse commodo elementum egestas.
      </Typography>
    </Container>
  );
};

export default Info;
