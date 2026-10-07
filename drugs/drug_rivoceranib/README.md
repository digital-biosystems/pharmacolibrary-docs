<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;rivoceranib&quot;}]"></div>

# rivoceranib

- **generic name:** rivoceranib
- **ATC codes:** `L01EK05`
- **DrugBank:** [DB14765](https://go.drugbank.com/drugs/DB14765) · **PubChem:** not captured
- **molar mass:** 397.482 g/mol (C24H23N5O) — DrugBank
- **groups:** investigational

## About

Rivoceranib (apatinib) is an investigational anticancer drug, a VEGFR tyrosine kinase inhibitor being studied as an antineoplastic agent. It is not authorised in the European Union and remains under investigation.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q27262801](https://www.wikidata.org/wiki/Q27262801) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| rivoceranib | parent | 397.482 | C24H23N5O | DrugBank | — | Yu_2017, Zuo_2024 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 06:38 | 2:51 | 0/0/3 | 0/0/0 | 0/0/0 | 73,393/13,705 | openai / gpt-6-luna | 2 | 0/2 | 2/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q321 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [Yu_2017_reference](drugs/drug_rivoceranib/Rivoceranib_Yu2017_reference.md) | — | 1-compartment (no model) | 3 | Yu M et al., Population Pharmacokinetic and Covariat…, Clinical pharmacokinetics (2017) | [10.1007/s40262-016-0427-y](https://doi.org/10.1007/s40262-016-0427-y) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q27 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [Zuo_2024_estimated_value](drugs/drug_rivoceranib/Rivoceranib_Zuo2024_estimated_value.md) | — | 1-compartment (no model) | 2 | Zuo L et al., Establishment and validation of a popul…, BMC cancer (2024) | [10.1186/s12885-024-13118-4](https://doi.org/10.1186/s12885-024-13118-4) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: disposition incomplete — only volume extracted — the engineer needs clearance/e…</sub><br><sub>route_to: `human_review`</sub> | [Zuo_2024_parametric](drugs/drug_rivoceranib/Rivoceranib_Zuo2024_parametric.md) | — | 1-compartment (no model) | 1 | Zuo L et al., Establishment and validation of a popul…, BMC cancer (2024) | [10.1186/s12885-024-13118-4](https://doi.org/10.1186/s12885-024-13118-4) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=rivoceranib) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: KDR (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 7 matched, 7 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 3  ·  extracted 0  ·  needs_review 3  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Sachar_2021.pdf` | Sachar M et al., Absence of ethnic difference on single-…, Fundamental & clinical phar… (2021) | popPK | 10 | [10.1111/fcp.12619](https://doi.org/10.1111/fcp.12619) | [33098705](https://pubmed.ncbi.nlm.nih.gov/33098705) | Human rivoceranib PK study reports compartmental analysis, but no numeric parameter values are provided. |
| `Yang_2023.pdf` | Yang XM et al., Population pharmacokinetics and pharmac…, British journal of clinical… (2023) | popPK | 10 | [10.1111/bcp.15665](https://doi.org/10.1111/bcp.15665) | [36662574](https://pubmed.ncbi.nlm.nih.gov/36662574) | The human population-PK study reports no numeric disposition parameter values in the provided evidence. |
| `Yu_2017.pdf` | Yu M et al., Population Pharmacokinetic and Covariat…, Clinical pharmacokinetics (2017) | popPK | 10 | [10.1007/s40262-016-0427-y](https://doi.org/10.1007/s40262-016-0427-y) | [27379402](https://pubmed.ncbi.nlm.nih.gov/27379402) | Apatinib (rivoceranib) popPK model reports numeric CL/F and volume estimates. |

<sub>queue written 2026-10-07T06:36:17.355082+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Liu_2022 | irrelevant | 1 | 0 | The model reports nifedipine parameters; apatinib is the interacting co-drug, and its input data are only referenced in a table not provided. |
| popPK | Qiu_2017 | irrelevant | 0 | 0 | This is an in-vitro study of MDR reversal agents, with apatinib only a comparator and no rivoceranib disposition parameters reported. |
| popPK | Sachar_2021 | relevant | 10 | 1 | Human rivoceranib PK study reports compartmental analysis, but no numeric parameter values are provided. |
| popPK | Xu_2022 | irrelevant | 0 | 0 | This review discusses apatinib (rivoceranib) only as a co-treatment and provides no quantitative rivoceranib PK values. |
| popPK | Yang_2023 | relevant | 10 | 0 | The human population-PK study reports no numeric disposition parameter values in the provided evidence. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 06:36 UTC</sub>
