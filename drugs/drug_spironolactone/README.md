<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C03D&quot;,&quot;href&quot;:&quot;atc/C03D.md&quot;},{&quot;label&quot;:&quot;spironolactone&quot;}]"></div>

# spironolactone

- **generic name:** spironolactone
- **ATC codes:** `C03DA01`
- **DrugBank:** [DB00421](https://go.drugbank.com/drugs/DB00421) · **PubChem:** [CID 5833](https://pubchem.ncbi.nlm.nih.gov/compound/5833)
- **molar mass:** 416.573 g/mol (C24H32O4S) — DrugBank
- **groups:** approved, investigational

## About

Spironolactone is a diuretic used to treat fluid build-up caused by heart failure, liver scarring, or kidney disease, and is also used for high blood pressure and hyperaldosteronism. It is widely used and appears on the WHO essential medicines list, with an authorised product in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q422188](https://www.wikidata.org/wiki/Q422188) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| spironolactone | parent | 416.573 | C24H32O4S | DrugBank | [5833](https://pubchem.ncbi.nlm.nih.gov/compound/5833) | Lass_2024 |
| 7 alphathiomethylspironolactone | metabolite | 388.6 | — | the paper | — | Lass_2024 |
| canrenone | metabolite | 340.5 | — | the paper | — | Lass_2024 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-28 14:57 | 8:49 | 0/0/2 | 0/0/0 | 0/0/0 | 124,257/22,172 | ollama / qwen3.8:27b-mtp-q8_0 | 2 | 1/1 | 2/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.125). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: C6_cl_magnitude failed (ratio None)</sub><br><sub>route_to: `human_review`</sub> | [Lass_2024_value_1](drugs/drug_spironolactone/Spironolactone_Lass2024_value_1.md) | — | general linear (no model) | 2 | Lass J et al., Pharmacokinetics of oral spironolactone…, European journal of clinica… (2024) | [10.1007/s00228-023-03599-w](https://doi.org/10.1007/s00228-023-03599-w) |
| <span class="pk-badge pk-badge--orange">built, not shipped</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.125). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: model_quarantined: CLelim[central] left at base-class defaults</sub><br><sub>route_to: `scholar`</sub> | [Lass_2024_value_2](drugs/drug_spironolactone/Spironolactone_Lass2024_value_2.md) | held back | 1-compartment general linear | 2 | Lass J et al., Pharmacokinetics of oral spironolactone…, European journal of clinica… (2024) | [10.1007/s00228-023-03599-w](https://doi.org/10.1007/s00228-023-03599-w) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=spironolactone) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inducer, `SLCO1A2` inhibitor | DrugBank actor |
| absorption | kidney | `ABCB1` inducer | DrugBank actor |
| absorption | liver | `ABCB1` inducer | DrugBank actor |
| absorption | placenta | `ABCB1` inducer | DrugBank actor |
| absorption | small intestine | `ABCB1` inducer, `SLCO1A2` inhibitor | DrugBank actor |
| absorption | testis | `ABCB1` inducer | DrugBank actor |
| distribution | blood | `ALB` binder, `ORM1` binder | DrugBank actor |
| metabolism | liver | `CYP2C8` inhibitor | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | `ABCC2` inducer | DrugBank actor |
| excretion | liver | `ABCB11` substrate, `ABCC2` inducer | DrugBank actor |
| excretion | small intestine | `ABCC2` inducer | DrugBank actor |
| — | adrenal gland | `CYP11B1` inducer | DrugBank actor |
| — | prostate gland | `AR` target | DrugBank actor |

<sub>Actors without a tissue in the table: CACNA1C (inhibitor), CYP11B2 (inhibitor), ESR1 (target), NR1I2 (target), NR3C1 (target), NR3C2 (target), PGR (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 46 matched, 20 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 0  ·  needs_review 2  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abdel_2020 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of digoxin, with spironolactone mentioned only as a covariate for co-administration. |
| popPK | Yukawa_2001 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of digoxin, with spironolactone serving only as a covariate for drug-drug interaction, not as the subject drug. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-09-28 14:49 UTC</sub>
