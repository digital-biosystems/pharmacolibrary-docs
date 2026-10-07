<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01M&quot;,&quot;href&quot;:&quot;atc/J01M.md&quot;},{&quot;label&quot;:&quot;gatifloxacin&quot;}]"></div>

# gatifloxacin

- **generic name:** gatifloxacin
- **ATC codes:** `J01MA16`, `S01AE06`
- **DrugBank:** [DB01044](https://go.drugbank.com/drugs/DB01044) · **PubChem:** [CID 5379](https://pubchem.ncbi.nlm.nih.gov/compound/5379)
- **molar mass:** 375.3941 g/mol (C19H22FN3O4) — DrugBank
- **groups:** approved, investigational, withdrawn

## About

Gatifloxacin is a fluoroquinolone antibiotic used against bacterial infections such as pneumonia, sinusitis, urinary tract infections, gonorrhea, and conjunctivitis. It has been withdrawn for systemic use because of serious side effects, though ophthalmic preparations may still be available in some countries.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q2365016](https://www.wikidata.org/wiki/Q2365016) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 12:24 | 22:02 | 0/0/0 | 1/0/0 | 0/0/0 | 180,883/2,489 | einfracz / qwen3.8-27b | 18 | 3/13 | 18/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Tasso_2011_bactericidal_activity](drugs/drug_gatifloxacin/pd_Tasso_2011_bactericidal_activity.md) | bactericidal activity ← gatifloxacin · direct Emax (saturable) effect | — | Tasso L et al., Pharmacokinetic/pharmacodynamic modelli…, International journal of an… (2011) | [10.1016/j.ijantimicag.2011.05.015](https://doi.org/10.1016/j.ijantimicag.2011.05.015) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=gatifloxacin) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| distribution | blood | `ALB` other/unknown | DrugBank actor |
| metabolism | liver | `CYP1A2` inhibitor | DrugBank actor |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 197 matched, 91 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Becnel_2009 | not_relevant | 1 | 5 | The study analyzes bacterial resistance and MICs of fluoroquinolones, not the effect of human genetic variants on drug pharmacokinetics or pharmacodynamics. |
| PGx | Garrison_2003 | not_relevant | 0 | 0 | The paper investigates bacterial genetic mutations (resistance mechanisms) and their effect on antibiotic efficacy, not human host pharmacogenomic variants affecting drug PK or PD parameters. |
| popPK | Kozai_2017 | irrelevant | 0 | 0 | no_text gate: only 177 chars of text extracted (&lt; 400) |
| PGx | Ohno_2007 | not_relevant | 0 | 0 | The paper focuses on a framework for predicting CYP3A4-mediated drug interactions using AUC changes and does not report pharmacogenomic effects (gene variants) on PK or PD parameters. |
| PGx | Park_2014 | not_relevant | 0 | 0 | The paper studies the impact of fluoroquinolone resistance selection on the metabolic and susceptibility phenotypes of Clostridium perfringens, not human pharmacogenomics or PK/PD parameters of gatifloxacin. |
| PGx | Seifert_2019 | not_relevant | 0 | 0 | The paper investigates M. tuberculosis gyrA SNPs and their effect on drug susceptibility (MIC) and dosing, not human host pharmacogenomics (e.g., CYP450 variants) affecting gatifloxacin PK/PD. |
| PGx | Shams_2005 | not_relevant | 0 | 0 | The paper discusses general fluoroquinolone pharmacokinetics, resistance mechanisms, and clinical guidelines for lower respiratory tract infections, but does not report any pharmacogenomic effects or genotype-specific changes in PK/PD parameters for gatifloxacin. |
| PGx | Vanwert_2008 | not_relevant | 1 | 5 | The study investigates Oat3 knockout in mice and transporter inhibition, reporting no human genetic variants or pharmacogenomic effects for gatifloxacin. |
| PGx | Zhanel_2003 | not_relevant | 0 | 0 | The paper focuses on bacterial gene variants causing fluoroquinolone resistance, not on patient (host) pharmacogenomic effects on PK or PD parameters for gatifloxacin. |
| PGx | Zhang_2008 | not_relevant | 0 | 0 | The paper investigates drug-drug interactions (CYP inhibition) of gatifloxacin and others, but does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
