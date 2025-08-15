import { _posts } from 'src/_mock';
import { CONFIG } from 'src/config-global';

import { TaskView } from 'src/sections/tasks/view';

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <title>{`Blog - ${CONFIG.appName}`}</title>

      <TaskView posts={_posts} />
    </>
  );
}
