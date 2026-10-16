<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;Relatlimab&quot;}]"></div>

# Relatlimab

- **generic name:** Relatlimab
- **ATC codes:** `L01FY02`
- **DrugBank:** [DB14851](https://go.drugbank.com/drugs/DB14851) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Relatlimab is a monoclonal antibody used as an anticancer agent in combination with another monoclonal antibody. It is an approved drug, though it does not appear to be authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q58315670](https://www.wikidata.org/wiki/Q58315670) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-15 03:06 | 2:35 | 0/3/0 | 0/0/0 | 0/0/0 | 289,274/6,337 | einfracz / qwen3.8-27b | 7 | 0/7 | 7/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.952). Primary extraction retained.">cross-check: partial</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Zhao_2024_1l_melanoma_geo_mean_cv](drugs/drug_relatlimab/Relatlimab_Zhao2024_1l_melanoma_geo_mean_cv.md) | — | 2-compartment (no model) | 8 | Zhao Y et al., Model-Informed Clinical Pharmacology Pr…, Clinical cancer research :… (2024) | [10.1158/1078-0432.CCR-23-2396](https://doi.org/10.1158/1078-0432.CCR-23-2396) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.952). Primary extraction retained.">cross-check: partial</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Zhao_2024_melanoma_1l_prior_io_geo_mean_cv](drugs/drug_relatlimab/Relatlimab_Zhao2024_melanoma_1l_prior_io_geo_mean_cv.md) | — | 2-compartment (no model) | 8 | Zhao Y et al., Model-Informed Clinical Pharmacology Pr…, Clinical cancer research :… (2024) | [10.1158/1078-0432.CCR-23-2396](https://doi.org/10.1158/1078-0432.CCR-23-2396) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.952). Primary extraction retained.">cross-check: partial</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Zhao_2024_prior_io_melanoma_geo_mean_cv](drugs/drug_relatlimab/Relatlimab_Zhao2024_prior_io_melanoma_geo_mean_cv.md) | — | 2-compartment (no model) | 8 | Zhao Y et al., Model-Informed Clinical Pharmacology Pr…, Clinical cancer research :… (2024) | [10.1158/1078-0432.CCR-23-2396](https://doi.org/10.1158/1078-0432.CCR-23-2396) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=relatlimab).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: LAG3 (antibody).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 16 matched, 16 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 3  ·  extracted 0  ·  needs_review 0  ·  rejected 3  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Gopalakrishnan_2024.pdf` | Gopalakrishnan M et al., Project Optimus Elicits the "Holistic"…, Clinical cancer research :… (2024) | pd | 5 | [10.1158/1078-0432.CCR-24-0553](https://doi.org/10.1158/1078-0432.CCR-24-0553) | [38743418](https://www.ncbi.nlm.nih.gov/pubmed/38743418) | metadata signals extractable PD data (PK/PD) |
| `Thomas_2023.pdf` | Thomas B et al., Nivolumab/Relatlimab-rmbw: A Novel Dual…, American journal of therape… (2023) | pd | 5 | [10.1097/MJT.0000000000001680](https://doi.org/10.1097/MJT.0000000000001680) | [37921680](https://www.ncbi.nlm.nih.gov/pubmed/37921680) | metadata signals extractable PD data (exposure-response) |

<sub>queue written 2026-10-15T03:04:07.337423+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bhat_2025 | irrelevant | 1 | 0 | This is a scoping review of model-informed drug development (MIDD) methodologies; while it briefly mentions nivolumab PK in passing, it does not report quantitative PK parameters for relatlimab. |
| popPK | Christenson_2025 | irrelevant | 0 | 0 | This is a clinical efficacy study for colorectal cancer and does not report any pharmacokinetic parameters for relatlimab. |
| popPK | Christenson_2026 | irrelevant | 0 | 0 | The paper studies a combination of copanlisib and nivolumab for colorectal cancer and does not mention relatlimab or report any pharmacokinetic parameters. |
| popPK | Chun_2025 | irrelevant | 0 | 0 | The paper studies a de novo IL-21 mimic (21h10) for cancer immunotherapy and does not report pharmacokinetic parameters for the drug relatlimab. |
| popPK | Cillo_2024 | irrelevant | 0 | 0 | The study investigates immunologic mechanisms and gene expression profiles, not pharmacokinetic disposition parameters. |
| popPK | Gopalakrishnan_2024 | irrelevant | 0 | 0 | no_text gate: only 82 chars of text extracted (&lt; 400) |
| PGx | La-Beck_2024 | not_relevant | 0 | 0 | The paper is a review of immune-related adverse events and management guidelines, mentioning relatlimab only as an approved agent, with no data on pharmacogenomic effects on PK or PD. |
| popPK | Nada_2026 | irrelevant | 0 | 0 | The study focuses on a new small-molecule inhibitor (LAGi-DEL) and uses relatlimab only as a comparator for efficacy, with no PK parameters reported for relatlimab. |
| popPK | Quagliariello_2026 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study of cardiotoxicity using a cell coculture model and does not report pharmacokinetic parameters for relatlimab. |
| popPK | Xie_2025 | irrelevant | 0 | 0 | The paper is a multi-omics bioinformatics study on renal cell carcinoma ribosome biogenesis and does not contain any pharmacokinetic data for relatlimab. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-15 03:04 UTC</sub>
