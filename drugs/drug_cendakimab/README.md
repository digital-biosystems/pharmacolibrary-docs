<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L04A&quot;,&quot;href&quot;:&quot;atc/L04A.md&quot;},{&quot;label&quot;:&quot;cendakimab&quot;}]"></div>

# cendakimab

- **generic name:** cendakimab
- **ATC codes:** `L04AC27`
- **DrugBank:** [DB18427](https://go.drugbank.com/drugs/DB18427) · **PubChem:** not captured
- **groups:** investigational

## About

It remains investigational and is not yet approved for routine clinical use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q123907243](https://www.wikidata.org/wiki/Q123907243) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-14 21:12 | 1:40 | 0/0/0 | 1/0/0 | 0/0/0 | 25,314/33,035 | einfracz / qwen3.8-27b | 1 | 0/1 | 1/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">accepted (caveats)</span> | [Du_2026_DD](drugs/drug_cendakimab/pd_Du_2026_DD.md) | Dysphagia Days ← cendakimab · indirect response — drug inhibits the production of Dysphagia Days | — | Du S et al., Latent Variable Indirect Response Model…, CPT: pharmacometrics & syst… (2026) | [10.1002/psp4.70199](https://doi.org/10.1002/psp4.70199) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 2 matched, 2 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Zhang_2025.pdf` | Zhang P et al., Pharmacokinetic Characterization of Cen…, European journal of drug me… (2025) | popPK | 8 | [10.1007/s13318-025-00949-0](https://doi.org/10.1007/s13318-025-00949-0) | [40374841](https://pubmed.ncbi.nlm.nih.gov/40374841) | The study reports quantitative non-compartmental PK parameters (Cmax, AUC) for cendakimab in humans, but lacks compartmental parameters like clearance (CL) and volume (V). |

<sub>queue written 2026-10-14T21:11:03.843372+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Du_2026 | irrelevant | 2 | 0 | This is a pharmacodynamic/exposure-response (E-R) study for cendakimab, not a pharmacokinetic study, as it explicitly states the population PK model used to generate exposure metrics is "not shown" in this paper. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
