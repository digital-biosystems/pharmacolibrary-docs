<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V08C&quot;,&quot;href&quot;:&quot;atc/V08C.md&quot;},{&quot;label&quot;:&quot;gadopiclenol&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Gadopiclenol_Eto2025_0_025_mmol_kg&quot;,&quot;label&quot;:&quot;Eto_2025_0_025_mmol_kg&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_gadopiclenol/Gadopiclenol_Eto2025_0_025_mmol_kg.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Gadopiclenol_Eto2025_0_05_mmol_kg&quot;,&quot;label&quot;:&quot;Eto_2025_0_05_mmol_kg&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_gadopiclenol/Gadopiclenol_Eto2025_0_05_mmol_kg.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Gadopiclenol_Eto2025_0_1_mmol_kg&quot;,&quot;label&quot;:&quot;Eto_2025_0_1_mmol_kg&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_gadopiclenol/Gadopiclenol_Eto2025_0_1_mmol_kg.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# gadopiclenol

- **generic name:** gadopiclenol
- **ATC codes:** `V08CA12`
- **DrugBank:** [DB17084](https://go.drugbank.com/drugs/DB17084) · **PubChem:** not captured
- **molar mass:** 970.1 g/mol (C35H54GdN7O15) — DrugBank
- **groups:** approved, investigational

## About

Gadopiclenol is a gadolinium-based contrast agent used to improve images in magnetic resonance imaging. It is authorised in the European Union and is a newer agent, so it is not yet widely used.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q114748523](https://www.wikidata.org/wiki/Q114748523) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| gadopiclenol | parent | 970.1 | C35H54GdN7O15 | DrugBank | — | Eto_2025, Jurkiewicz_2022 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 18:16 | 3:20 | 3/1/0 | 0/0/0 | 0/0/0 | 77,357/15,584 | openai / gpt-6-luna | 3 | 0/3 | 3/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Eto_2025_0_025_mmol_kg](drugs/drug_gadopiclenol/Gadopiclenol_Eto2025_0_025_mmol_kg.md) | ▶ model + simulator | 1-compartment, IV | 8 | Eto T et al., Pharmacokinetics and safety of gadopicl…, Japanese journal of radiolo… (2025) | [10.1007/s11604-025-01842-1](https://doi.org/10.1007/s11604-025-01842-1) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Eto_2025_0_05_mmol_kg](drugs/drug_gadopiclenol/Gadopiclenol_Eto2025_0_05_mmol_kg.md) | ▶ model + simulator | 1-compartment, IV | 8 | Eto T et al., Pharmacokinetics and safety of gadopicl…, Japanese journal of radiolo… (2025) | [10.1007/s11604-025-01842-1](https://doi.org/10.1007/s11604-025-01842-1) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Eto_2025_0_1_mmol_kg](drugs/drug_gadopiclenol/Gadopiclenol_Eto2025_0_1_mmol_kg.md) | ▶ model + simulator | 1-compartment, IV | 8 | Eto T et al., Pharmacokinetics and safety of gadopicl…, Japanese journal of radiolo… (2025) | [10.1007/s11604-025-01842-1](https://doi.org/10.1007/s11604-025-01842-1) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Jurkiewicz_2022_reference](drugs/drug_gadopiclenol/Gadopiclenol_Jurkiewicz2022_reference.md) | — | 2-compartment (no model) | 3 | Jurkiewicz E et al., Pharmacokinetics, Safety, and Efficacy…, Investigative radiology (2022) | [10.1097/RLI.0000000000000865](https://doi.org/10.1097/RLI.0000000000000865) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=gadopiclenol) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 4 matched, 4 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 4  ·  extracted 3  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Hao_2019 | irrelevant | 2 | 2 | The study reports Cmax and half-life, but no clearance, volume, or compartmental/population-PK model values. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 18:14 UTC</sub>
