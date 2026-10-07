<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A02B&quot;,&quot;href&quot;:&quot;atc/A02B.md&quot;},{&quot;label&quot;:&quot;ilaprazole&quot;}]"></div>

# ilaprazole

- **generic name:** ilaprazole
- **ATC codes:** `A02BC11`
- **DrugBank:** [DB11964](https://go.drugbank.com/drugs/DB11964) · **PubChem:** [CID 214351](https://pubchem.ncbi.nlm.nih.gov/compound/214351)
- **molar mass:** 366.44 g/mol (C19H18N4O2S) — DrugBank
- **groups:** investigational

## About

Ilaprazole is a proton-pump inhibitor developed as an anti-ulcer drug for acid-related disorders such as peptic ulcer and gastro-oesophageal reflux disease. It is considered investigational and is not authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q15051261](https://www.wikidata.org/wiki/Q15051261) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| ilaprazole | parent | 366.44 | C19H18N4O2S | DrugBank | [214351](https://pubchem.ncbi.nlm.nih.gov/compound/214351) | Jia_2021, Yu_2023 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 19:30 | 1:09 | 0/2/0 | 0/1/0 | 0/0/0 | 78,678/5,401 | einfracz / qwen3.8-27b | 3 | 0/3 | 3/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Jia_2021_reference](drugs/drug_ilaprazole/Ilaprazole_Jia2021_reference.md) | — | 2-compartment (no model) | 3 | Jia R et al., Accelerating Development of Benziamidaz…, Pharmaceutics (2021) | [10.3390/pharmaceutics13030392](https://doi.org/10.3390/pharmaceutics13030392) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--orange" title="a second model re-read this paper; the two readings agree on 0.0 of the compared fields. The first reading is what the record holds.">cross-check: partial</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Yu_2023_reference](drugs/drug_ilaprazole/Ilaprazole_Yu2023_reference.md) | — | 2-compartment (no model) | 3 (+2 cov.) | Yu M et al., Population pharmacokinetic modeling of…, Frontiers in pharmacology (2023) | [10.3389/fphar.2023.1306222](https://doi.org/10.3389/fphar.2023.1306222) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> | [Jia_2021_pH](drugs/drug_ilaprazole/pd_Jia_2021_pH.md) | intra-gastric pH ← ilaprazole · indirect response — drug inhibits the production of intra-gastric pH | — | Jia R et al., Accelerating Development of Benziamidaz…, Pharmaceutics (2021) | [10.3390/pharmaceutics13030392](https://doi.org/10.3390/pharmaceutics13030392) |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 4 matched, 4 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 0  ·  needs_review 0  ·  rejected 2  ·  stale 1
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Leis_2021 | irrelevant | 0 | 0 | The paper investigates ilaprazole as an antiviral agent (inhibiting viral budding in cell culture) and reports EC50 values for viral release, not pharmacokinetic disposition parameters (CL, V, half-life). |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 19:29 UTC</sub>
