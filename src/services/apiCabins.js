import supabase, { supabaseUrl } from './supabase';

export async function getCabins() {
	const { data, error } = await supabase.from('cabins').select('*');

	if (error) {
		console.error(error);
		throw new Error('Cabins could not be reached');
	}

	return data;
}

export async function createEditCabin(newCabin, id) {
	console.log(newCabin, id);
	const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl);

	const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
		'/',
		''
	);

	const imagePath = hasImagePath
		? newCabin.image
		: `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;
	// https://ynjqqejuebcocufsdsnr.supabase.co/storage/v1/object/public/cabin-images/cabin-001.jpg

	let query = supabase.from('cabins');

	// create cabin
	if (!id) query = query.insert([{ ...newCabin, image: imagePath }]);

	// edit
	if (id) query = query.update({ ...newCabin, image: imagePath }).eq('id', id);

	const { data, error } = await query.select().single();
	if (error) {
		console.error(error);
		throw new Error('Cabins could not be created');
	}
	// 2. upload image
	const { error: storageError } = await supabase.storage
		.from('cabin-images')
		.upload(imageName, newCabin.image);
	if (storageError) {
		console.error(error);
		await supabase.from('cabins').delete().eq('id', data.id);

		throw new Error('Cabin image failed to upload');
	}

	return data;
}

export async function deleteCabin(id) {
	const { data, error } = await supabase.from('cabins').delete().eq('id', id);

	if (error) {
		console.error(error);
		throw new Error('Cabins could not be deleted');
	}

	return data;
}
