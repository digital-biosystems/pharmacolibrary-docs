# Pharmacolibrary

A pharmaceutical knowledge base of **pharmacokinetic (PK), pharmacodynamic (PD) and
pharmacogenomic (PGx) parameters extracted from the published literature**, one page per drug,
with the numbers linked back to the paper and table they came from — and, where a model could
be built, a simulatable model to download.

## What you will find here

- **A page per drug.** Identity (ATC codes, synonyms, brands, DrugBank/PharmGKB ids, EU market
  status), then the records extracted for it.
- **Population-PK records** — clearance, volumes, intercompartmental clearance, absorption,
  their units and canonical SI values, the covariate model, and the variability terms, each row
  carrying the label as printed in the paper and how it was matched to the parameter ontology.
- **PD records** — the exposure–response model: family (sigmoid Emax, indirect turnover …),
  the driver it is fitted against, the biomarker, and the parameters.
- **PGx records** — the gene, the phenotype, the parameter it shifts, and by how much.
- **Downloadable models.** Where the parameters supported one, the record page's *Models* tab
  offers the same model as Modelica, MATLAB (plain and SimBiology), SBML and CellML — each
  archive holding the model source, a script that simulates it, and a README.
- **Toxins.** The same pipeline applied to toxicokinetics and toxicodynamics, listed separately
  in the sidebar because a toxin has no ATC code and the question asked of it is exposure
  rather than therapy.

## Where the numbers come from

Each drug's literature is retrieved from PubMed, full text is fetched where it is openly
available, and every paper passes through a fixed sequence of stages — *relevance → screen →
locate → transcribe → interpret → validate*. Values are read from the paper's own tables rather
than summarised, then checked for internal consistency (does the reported clearance agree with
volume and half-life?) and plausibility before a record is accepted.

Nothing here is hand-typed, and nothing is invented: a value that could not be traced to a
table, or that failed its checks, is marked rather than quietly dropped. The status badge on
every record says which it is.

## How to read a record

| badge | meaning |
|---|---|
| **curated** | a human authored or confirmed these values |
| **extracted** | the pipeline accepted the record and its checks passed |
| **needs review** | extracted, but a check failed or a value looks implausible |
| **rejected** | the record was not accepted; values are suppressed |
| **stale** | the reviewer's verdict predates the latest re-run of the paper |

Each record page has three tabs: **Information** (the parameters and their provenance),
**Models** (the downloadable bundles), and **Simulation** (an in-browser run, coming).

## Please read this before using a value

These records are a **machine extraction of published parameters**, useful as a starting point
and as a map of what the literature reports. They are not clinically validated, not a
substitute for the primary paper, and not medical advice. Every page links its source: check
there before relying on a number.

## Getting around

The sidebar lists the curated panels first, then the toxins, then every drug with a page
arranged by its ATC class. The table below is the extraction ledger — what has been processed,
how much full text was obtained, and how many records came out of it.
