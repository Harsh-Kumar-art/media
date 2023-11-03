import {GoTrash} from 'react-icons/go';
import Button from './Button';
import {removeUser} from '../store';
import {useThunk} from '../hooks/use-thunk';
import ExpandablePanel from './ExpandablePanel';
import AlbumsList from './AlbumsList';
function UsersListItem({user}){

        const [doRemoveUser, isLoading, error] = useThunk(removeUser);

        const handleClick = ()=>{
            doRemoveUser(user);
        };

        const header = <>
                <Button className="mr-2" loading={isLoading} onClick={handleClick}>
                    <GoTrash />
                </Button>
                {user.name}
           </>

        return (
            <ExpandablePanel header={header}>
                <AlbumsList user={user} />
            </ExpandablePanel>
        )
              
}

export default UsersListItem;