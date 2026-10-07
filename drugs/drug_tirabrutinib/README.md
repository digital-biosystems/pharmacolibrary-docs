<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;tirabrutinib&quot;}]"></div>

# tirabrutinib

- **generic name:** tirabrutinib
- **ATC codes:** `L01EL06`
- **DrugBank:** [DB15227](https://go.drugbank.com/drugs/DB15227) · **PubChem:** not captured
- **molar mass:** 454.49 g/mol (C25H22N6O3) — DrugBank
- **groups:** investigational

## About

Tirabrutinib is an investigational Bruton's tyrosine kinase inhibitor, a type of cancer drug. It is not yet an approved medicine and remains under clinical investigation.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q27283239](https://www.wikidata.org/wiki/Q27283239) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| tirabrutinib | parent | 454.49 | C25H22N6O3 | DrugBank | — | Meng_2022 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 08:23 | 2:32 | 0/1/0 | 1/0/0 | 0/0/0 | 47,264/13,517 | openai / gpt-6-luna | 1 | 0/1 | 1/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Meng_2022_reference](drugs/drug_tirabrutinib/Tirabrutinib_Meng2022_reference.md) | — | 1-compartment (no model) | 0 | Meng A et al., Semi-Mechanistic PK/PD Modeling and Sim…, Clinical pharmacology and t… (2022) | [10.1002/cpt.2439](https://doi.org/10.1002/cpt.2439) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Meng_2022_TJC68](drugs/drug_tirabrutinib/pd_Meng_2022_TJC68.md) | TJC68 ← tirabrutinib · direct linear effect | — | Meng A et al., Semi-Mechanistic PK/PD Modeling and Sim…, Clinical pharmacology and t… (2022) | [10.1002/cpt.2439](https://doi.org/10.1002/cpt.2439) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Meng_2022_fBTK](drugs/drug_tirabrutinib/pd_Meng_2022_fBTK.md) | free BTK ← tirabrutinib · indirect response — drug stimulates the loss of free BTK | — | Meng A et al., Semi-Mechanistic PK/PD Modeling and Sim…, Clinical pharmacology and t… (2022) | [10.1002/cpt.2439](https://doi.org/10.1002/cpt.2439) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Meng_2022_hsCRP](drugs/drug_tirabrutinib/pd_Meng_2022_hsCRP.md) | hsCRP ← tirabrutinib · direct linear effect | — | Meng A et al., Semi-Mechanistic PK/PD Modeling and Sim…, Clinical pharmacology and t… (2022) | [10.1002/cpt.2439](https://doi.org/10.1002/cpt.2439) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Meng_2022_tBTK](drugs/drug_tirabrutinib/pd_Meng_2022_tBTK.md) | total BTK ← tirabrutinib · indirect response — drug stimulates the production of total BTK | — | Meng A et al., Semi-Mechanistic PK/PD Modeling and Sim…, Clinical pharmacology and t… (2022) | [10.1002/cpt.2439](https://doi.org/10.1002/cpt.2439) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=tirabrutinib) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: BTK (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 1 matched, 1 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 08:21 UTC</sub>
