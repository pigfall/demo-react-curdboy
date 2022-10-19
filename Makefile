.PHONY: all
# generate all
all:
	cd ../react-curdboy/cmd/react-cbc && go install .
	cd ../demo-kratos-curdboy/ &&  react-cbc --schemaSrcPath=./ent/schema --outputPath="../demo-react-curdboy/src/cdb"
