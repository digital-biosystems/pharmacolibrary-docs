<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B01A&quot;,&quot;href&quot;:&quot;atc/B01A.md&quot;},{&quot;label&quot;:&quot;triflusal&quot;}]"></div>

# triflusal

- **generic name:** triflusal
- **ATC codes:** `B01AC18`
- **DrugBank:** [DB08814](https://go.drugbank.com/drugs/DB08814) · **PubChem:** [CID 9458](https://pubchem.ncbi.nlm.nih.gov/compound/9458)
- **molar mass:** 248.157 g/mol (C10H7F3O4) — DrugBank
- **groups:** approved, withdrawn

## About

Triflusal is an antiplatelet drug that was used to prevent blood clots in conditions such as stroke. It was approved in some countries but has since been withdrawn and is no longer in general use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q1758668](https://www.wikidata.org/wiki/Q1758668) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-06 01:13 | 2:43 | 0/2/1 | 0/0/0 | 0/0/0 | 37,749/3,296 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 0/1 | 1/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q99, Q305 — no SI value to build fr…</sub><br><sub>route_to: `human_review`</sub> | [Park_2014_estimates_from_final_model](drugs/drug_triflusal/Triflusal_Park2014_estimates_from_final_model.md) | — | parent + metabolite (no model) | 2 | Park SM et al., Population pharmacokinetic and pharmaco…, BMC pharmacology & toxicolo… (2014) | [10.1186/2050-6511-15-75](https://doi.org/10.1186/2050-6511-15-75) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: split column 'description (units)' is a table statistic/structure column, not a…</sub><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Park_2014_description_units](drugs/drug_triflusal/Triflusal_Park2014_description_units.md) | — | parent + metabolite (no model) | 0 | Park SM et al., Population pharmacokinetic and pharmaco…, BMC pharmacology & toxicolo… (2014) | [10.1186/2050-6511-15-75](https://doi.org/10.1186/2050-6511-15-75) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: split column 'shrinkage (%)' is a table statistic/structure column, not a study…</sub><br><sub>route_to: `human_review`</sub> | [Park_2014_shrinkage](drugs/drug_triflusal/Triflusal_Park2014_shrinkage.md) | — | parent + metabolite (no model) | 0 | Park SM et al., Population pharmacokinetic and pharmaco…, BMC pharmacology & toxicolo… (2014) | [10.1186/2050-6511-15-75](https://doi.org/10.1186/2050-6511-15-75) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=triflusal) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| distribution | blood | `ALB` substrate | DrugBank actor |
| metabolism | liver | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: NFKB1 (target), NOS2 (target), PDE10A (target), PTGS1 (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 4 matched, 4 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 3  ·  extracted 0  ·  needs_review 1  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Valle_2005.pdf` | Valle M et al., Access of HTB, main metabolite of trifl…, European journal of clinica… (2005) | popPK | 9 | [10.1007/s00228-004-0887-0](https://doi.org/10.1007/s00228-004-0887-0) | [15711832](https://pubmed.ncbi.nlm.nih.gov/15711832) | The study reports a population PK model for triflusal and its metabolite HTB, but the evidence only provides specific numeric values for HTB (ke0, partition coefficient) and qualitative descriptions for triflusal, lacking explicit numeric CL/V/ka values for the parent drug in the provided text. |
| `Yun_2014.pdf` | Yun HY et al., Semi-mechanistic modelling and simulati…, Basic & clinical pharmacolo… (2014) | popPK | 8 | [10.1111/bcpt.12222](https://doi.org/10.1111/bcpt.12222) | [24612881](https://pubmed.ncbi.nlm.nih.gov/24612881) | The paper describes a semi-mechanistic PK/PD model for triflusal, but the specific numeric parameter values are not present in the provided evidence. |

<sub>queue written 2026-09-06T01:11:14.553676+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Valle_2005 | relevant | 9 | 4 | The study reports a population PK model for triflusal and its metabolite HTB, but the evidence only provides specific numeric values for HTB (ke0, partition coefficient) and qualitative descriptions for triflusal, lacking explicit numeric CL/V/ka values for the parent drug in the provided text. |
| popPK | Yun_2014 | relevant | 8 | 0 | The paper describes a semi-mechanistic PK/PD model for triflusal, but the specific numeric parameter values are not present in the provided evidence. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-09-06 01:13 UTC</sub>
