<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N06B&quot;,&quot;href&quot;:&quot;atc/N06B.md&quot;},{&quot;label&quot;:&quot;dexmethylphenidate&quot;}]"></div>

# dexmethylphenidate

- **generic name:** dexmethylphenidate
- **ATC codes:** `N06BA11`, `N06BA15`
- **DrugBank:** [DB06701](https://go.drugbank.com/drugs/DB06701) · **PubChem:** [CID 154101](https://pubchem.ncbi.nlm.nih.gov/compound/154101)
- **molar mass:** 233.3062 g/mol (C14H19NO2) — DrugBank
- **groups:** approved, investigational

## About

Dexmethylphenidate is a stimulant medicine used to treat attention deficit hyperactivity disorder. It is an approved drug, related to methylphenidate, and is used in the treatment of ADHD, though it is not authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q1207210](https://www.wikidata.org/wiki/Q1207210) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 00:31 | 4:16 | 0/0/0 | 0/1/0 | 0/0/0 | 152,658/2,442 | ollama / glm-5.3-flash | 10 | 4/1 | 10/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> | [Gomeni_2020_SKAMP](drugs/drug_dexmethylphenidate/pd_Gomeni_2020_SKAMP.md) | Swanson, Kotkin, Agler, M-Flynn, and Pelham combined score ← methylphenidate (d-threo-methylphenidate) · direct sigmoid Emax (Hill) effect | — | Gomeni R et al., Model-Based Approach for Establishing t…, Journal of clinical psychop… (2020) | [10.1097/jcp.0000000000001222](https://doi.org/10.1097/jcp.0000000000001222) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Gomeni_2020_SKAMP_2](drugs/drug_dexmethylphenidate/pd_Gomeni_2020_SKAMP_2.md) | Swanson, Kotkin, Agler, M-Flynn, and Pelham combined score (placebo trajectory) · indirect response — drug stimulates the production of Swanson, Kotkin, Agler, M-Flynn, and Pelham combined score (placebo trajectory) | — | Gomeni R et al., Model-Based Approach for Establishing t…, Journal of clinical psychop… (2020) | [10.1097/jcp.0000000000001222](https://doi.org/10.1097/jcp.0000000000001222) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=dexmethylphenidate) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | liver | <sub>named in DrugBank's ADME text</sub> | prose |
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | liver | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| — | brain | `SLC6A4` inhibitor | DrugBank actor |
| — | platelet | `SLC6A4` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: CES1A1a (substrate), SLC6A2 (inhibitor), SLC6A3 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 36 matched, 35 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Dereschuk_2025 | irrelevant | 0 | 0 | This is an epidemiologic cohort study of URTI risk with stimulant use; no PK parameters for dexmethylphenidate are reported. |
| popPK | Gomeni_2020 | irrelevant | 2 | 3 | The study models methylphenidate (DR/ER-MPH/HLD200); dexmethylphenidate (d-MPH ER) appears only as a comparator with a few cited values (V/F 380 L, kel 0.29 h⁻¹), not as the subject drug, and full parameter tables live in supplemental material. |
| popPK | Kay_2025 | irrelevant | 0 | 0 | This is an fMRI neuroimaging study of methylphenidate's effects on brain connectivity; no PK parameters (CL, V, ka, half-life) are reported. |
| PGx | Law_2022 | not_relevant | 0 | 0 | In vitro metabolism study with no gene variant/genotype effects on dexmethylphenidate PK/PD; dMPH metabolism could not even be characterized. |
| popPK | Parrot_2026 | irrelevant | 0 | 0 | This is a review of nanoparticle PK modeling (MIND framework) with no dexmethylphenidate data or quantitative PK parameters for any specific drug. |
| popPK | Patrick_2016 | irrelevant | 4 | 3 | A bioequivalence/absorption comparison reporting Cmax, AUC, and partial AUC ratios but no disposition PK parameters (CL, V, t½, ka) or PK model; only ratio values are given, not full parameter estimates. |
| PGx | Patrick_2019 | not_relevant | 6 | 2 | Abstract only mentions carboxylesterase variants influencing MPH metabolism without reporting any specific PK/PD effect sizes for dexmethylphenidate. |
| popPK | Qin_2026 | irrelevant | 0 | 0 | This is a FAERS pharmacovigilance disproportionality study of adverse-event signals, not a PK study; dexmethylphenidate is only one of many drugs screened and no PK parameters appear. |
| popPK | Santisteban_2014 | irrelevant | 0 | 0 | This is a sleep/actigraphy study of dexmethylphenidate with no PK parameters or numeric disposition values reported. |
| popPK | Stein_2014 | irrelevant | 0 | 0 | Pharmacogenetic dose-response efficacy study with no PK parameters (no CL, V, ka, half-life, or PK model) reported. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
