<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V03A&quot;,&quot;href&quot;:&quot;atc/V03A.md&quot;},{&quot;label&quot;:&quot;rasburicase&quot;}]"></div>

# rasburicase

- **generic name:** rasburicase
- **ATC codes:** `V03AF07`
- **DrugBank:** [DB00049](https://go.drugbank.com/drugs/DB00049) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Rasburicase is used to treat hyperuricemia, particularly as a detoxifying agent during antineoplastic treatment. It is authorised in the European Union and is mainly used in hospital settings for chemotherapy-related hyperuricemia.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q3088229](https://www.wikidata.org/wiki/Q3088229) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 18:59 | 0:17 | 0/0/0 | 0/1/0 | 0/0/0 | 20,726/858 | ollama / glm-5.3-flash | 10 | 2/0 | 2/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:gpt-oss-120b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span> | [Cai_2014_2_C_urate_p](drugs/drug_rasburicase/pd_Cai_2014_2_C_urate_p.md) | changes in plasma uric acid ← uricase (recombinant urate oxidase) · indirect response — drug stimulates the production of changes in plasma uric acid | — | Cai NF et al., Pharmacodynamic analysis of intravenous…, Acta pharmacologica Sinica (2014) | [10.1038/aps.2014.81](https://doi.org/10.1038/aps.2014.81) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=rasburicase).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: Uric acid (metabolizer).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 3 matched, 3 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Cai_2014_2 | irrelevant | 3 | 5 | The subject drug is a new E. coli-derived recombinant uricase, not rasburicase (rasburicase is only cited as a comparator); AUC and half-life values appear but CL/V and full PK parameters are in Table 1, which is not provided. |
| popPK | Jackson_2019 | irrelevant | 0 | 0 | This is a population-PK study of dexamethasone; rasburicase appears only as a covariate for dex clearance, with no rasburicase PK parameters reported. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
