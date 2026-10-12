# Pharmacolibrary
v26.09 (built {{built_at}})

Literature-derived **pharmacokinetic (PK), pharmacodynamic (PD), and pharmacogenomic (PGx)** knowledge base.

## Contents

- **Drug profiles:** identifiers, ATC classification, synonyms, brands, EU regulatory status,
  and extracted records.
- **Population PK:** disposition and absorption parameters, source units, SI-normalised values,
  covariate relationships, and interindividual variability.
- **PD:** exposure–response models, biomarkers, drivers, and parameter estimates.
- **PGx:** genotype or phenotype effects on PK/PD parameters and adverse-reaction risk.
- **Models:** Modelica, MATLAB, SimBiology, SBML, CellML, and FMI downloads where available;
  each archive includes source code, a simulation script, and documentation.
- **Simulation:** browser-based simulations for supported models.
- **Toxicology:** toxicokinetic and toxicodynamic records, listed separately from drugs.
  Coverage is under development.

## Data provenance

Literature is retrieved from PubMed and available full-text sources. Extraction follows
*relevance assessment → screening → localisation → transcription → interpretation → validation*.
Parameter estimates retain source labels and units and undergo consistency and plausibility checks.

Status badges indicate curation, validation, and review outcomes. Source references,
inferred values, and secondary-source substitutions are identified in each record.

| Status | Definition |
|---|---|
| **curated** | Human-authored or verified reference record |
| **extracted** | Accepted extraction with applicable validation checks passed |
| **needs review** | Incomplete, inconsistent, or unresolved extraction |
| **rejected** | Unaccepted record; displayed values remain unverified |
| **stale** | Review predates the current extraction |

Record tabs: **Information** (parameters and provenance), **Models** (downloads), and
**Simulation** (browser-based execution).

## Limitations

These machine-extracted records are research resources, not clinically validated models
or medical advice. Verify estimates and model assumptions against the cited primary sources.
