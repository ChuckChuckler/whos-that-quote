import { email } from 'better-auth';
import { sql } from 'drizzle-orm';
import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const users = sqliteTable("users", {
	id: text("id").primaryKey().$defaultFn(() => crypto.randomUUID()),
	username: text("usernme").notNull(),
	email: text("email").notNull().unique(),
	createdSets: text("created_sets").$type<string[]>().default(sql`(json_array())`)
});

export const sets = sqliteTable("sets",{
	id: text("id").primaryKey().$defaultFn(()=>crypto.randomUUID()),
	setName: text("name").notNull(),
	setDesc: text("desc").notNull(),
});

export const quote = sqliteTable("quotes",{
	id:integer("id").primaryKey({ autoIncrement:true }),
	parentSet: text("parent").notNull().references(()=> sets.id, {onDelete:"cascade"}),
	quote: text("quote").notNull(),
	speaker: text("speaker").notNull()
});