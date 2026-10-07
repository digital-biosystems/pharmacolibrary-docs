<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V08A&quot;,&quot;href&quot;:&quot;atc/V08A.md&quot;},{&quot;label&quot;:&quot;iodamide&quot;}]"></div>

# iodamide

- **generic name:** iodamide
- **ATC codes:** `V08AA03`
- **DrugBank:** [DB08948](https://go.drugbank.com/drugs/DB08948) · **PubChem:** [CID 3723](https://pubchem.ncbi.nlm.nih.gov/compound/3723)
- **molar mass:** 627.9402 g/mol (C12H11I3N2O4) — DrugBank
- **groups:** approved, withdrawn

## About

Iodamide is an iodinated, water-soluble X-ray contrast agent formerly used to visualise body structures during imaging examinations. It has been withdrawn and is no longer in clinical use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q3801333](https://www.wikidata.org/wiki/Q3801333) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| iodamide | parent | 627.94 | C12H11I3N2O4 | DrugBank | [3723](https://pubchem.ncbi.nlm.nih.gov/compound/3723) | Difazio_1978 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 22:10 | 2:49 | 0/1/0 | 0/0/0 | 0/0/0 | 14,994/924 | ollama / glm-5.3-flash | 0 | 0/0 | 0/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Difazio_1978_reference](drugs/drug_iodamide/Iodamide_Difazio1978_reference.md) | — | 1-compartment (no model) | 2 | Difazio LT et al., Pharmacokinetics of iodamide in normal…, Journal of clinical pharmac… (1978) | [10.1002/j.1552-4604.1978.tb01558.x](https://doi.org/10.1002/j.1552-4604.1978.tb01558.x) |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 8 matched, 8 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Difazio_1978.pdf` | Difazio LT et al., Pharmacokinetics of iodamide in normal…, Journal of clinical pharmac… (1978) | popPK | 8 | [10.1002/j.1552-4604.1978.tb01558.x](https://doi.org/10.1002/j.1552-4604.1978.tb01558.x) | [338644](https://pubmed.ncbi.nlm.nih.gov/338644) | Human PK study of iodamide with two-compartment model and half-lives reported in abstract, but full parameter values (CL, V) likely in tables not provided. |

<sub>queue written 2026-10-07T22:08:29.796063+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bourin_1986 | irrelevant | 1 | 0 | The subject drug is ioxaglate; iodamide is only mentioned as a comparator, and no numeric PK values appear in the evidence. |
| popPK | Owen_1981 | irrelevant | 0 | 0 | Clinical urography comparison with no PK disposition parameters or numeric values reported. |
| popPK | Owen_1983 | irrelevant | 0 | 0 | Clinical urography imaging comparison with no PK disposition parameters or numeric CL/V values reported. |
| popPK | Zurth_1984 | relevant | 4 | 3 | Renal clearance of iodamide measured in rabbits with comparative values, but no full PK parameters (CL/V, half-life) and numeric values not shown in the evidence. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 22:08 UTC</sub>
