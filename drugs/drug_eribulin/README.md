<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01X&quot;,&quot;href&quot;:&quot;atc/L01X.md&quot;},{&quot;label&quot;:&quot;eribulin&quot;}]"></div>

# eribulin

- **generic name:** eribulin
- **ATC codes:** `L01XX41`
- **DrugBank:** [DB08871](https://go.drugbank.com/drugs/DB08871) · **PubChem:** [CID 73425383](https://pubchem.ncbi.nlm.nih.gov/compound/73425383)
- **molar mass:** 729.908 g/mol (C40H59NO11) — DrugBank
- **groups:** approved, investigational

## About

Eribulin is an anticancer medicine used to treat breast cancer and a type of soft-tissue sarcoma called liposarcoma. It is authorised in the European Union and used as an antineoplastic agent for these cancers.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q408717](https://www.wikidata.org/wiki/Q408717) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 20:43 | 0:16 | 0/0/0 | 1/0/0 | 0/0/0 | 14,099/1,288 | einfracz / qwen3.8-27b | 1 | 0/1 | 1/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> | [van_2013_ANC](drugs/drug_eribulin/pd_van_2013_ANC.md) | absolute neutrophil counts ← eribulin · disease-progression model | — | van Hasselt JG et al., Population pharmacokinetic-pharmacodyna…, British journal of clinical… (2013) | [10.1111/bcp.12143](https://doi.org/10.1111/bcp.12143) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=eribulin) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: TUBB1 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 6 matched, 6 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Majid_2014.pdf` | Majid O et al., Population pharmacometric analyses of e…, Journal of clinical pharmac… (2014) | popPK | 10 | [10.1002/jcph.315](https://doi.org/10.1002/jcph.315) | [24771603](https://pubmed.ncbi.nlm.nih.gov/24771603) | The paper describes a population PK model for eribulin and reports specific variability percentages, but the primary numeric disposition parameters (CL, V, Q) are not explicitly listed in the provided evidence. |
| `van_2013.pdf` | van Hasselt JG et al., Population pharmacokinetic-pharmacodyna…, British journal of clinical… (2013) | popPK | 8 | [10.1111/bcp.12143](https://doi.org/10.1111/bcp.12143) | [23601153](https://pubmed.ncbi.nlm.nih.gov/23601153) | The paper describes a population PK model for eribulin but explicitly states the PK parameters were from a "previously developed model" and only reports numeric values for the PD (neutropenia) parameters in the provided text. |

<sub>queue written 2026-10-06T20:43:32.027151+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Ideno_2026 | irrelevant | 4 | 1 | This is a methodological paper on a covariate screening tool (SCOUT) using eribulin PK/PD data, but it does not report the original population PK parameter estimates (CL, V, Q) in the main text or evidence provided. |
| popPK | Kasai_2023 | irrelevant | 1 | 0 | The study focuses on a pharmacodynamic model for eribulin-induced myelosuppression (neutropenia) and does not report pharmacokinetic parameters (CL, V, ka). |
| popPK | Majid_2014 | relevant | 10 | 2 | The paper describes a population PK model for eribulin and reports specific variability percentages, but the primary numeric disposition parameters (CL, V, Q) are not explicitly listed in the provided evidence. |
| popPK | Reda_2022 | irrelevant | 2 | 0 | The study focuses on the pharmacodynamics of eribulin (neutropenia) and the optimization of G-CSF dosing, not on the quantitative pharmacokinetic parameters (CL, V, Q) of eribulin itself. |
| popPK | van_2013 | relevant | 8 | 3 | The paper describes a population PK model for eribulin but explicitly states the PK parameters were from a "previously developed model" and only reports numeric values for the PD (neutropenia) parameters in the provided text. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
