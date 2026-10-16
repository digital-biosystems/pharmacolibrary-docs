<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L04A&quot;,&quot;href&quot;:&quot;atc/L04A.md&quot;},{&quot;label&quot;:&quot;daclizumab&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Daclizumab_Othman2014_reference&quot;,&quot;label&quot;:&quot;Othman_2014_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_daclizumab/Daclizumab_Othman2014_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# daclizumab

- **generic name:** daclizumab
- **ATC codes:** `L04AA08`, `L04AC01`
- **DrugBank:** [DB00111](https://go.drugbank.com/drugs/DB00111) · **PubChem:** not captured
- **groups:** approved, withdrawn

## About

Daclizumab, a monoclonal antibody immunosuppressant, was used to treat multiple sclerosis and to prevent graft rejection in kidney transplantation. It has been withdrawn from the market, including its authorised products in the European Union, and is no longer in use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q412920](https://www.wikidata.org/wiki/Q412920) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-14 21:27 | 2:48 | 0/2/1 | 0/0/0 | 0/0/0 | 42,077/35,593 | einfracz / qwen3.8-27b | 1 | 1/0 | 1/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.167). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: T3_param_coverage</sub><br><sub>route_to: `engineer`</sub> | [Othman_2014_reference](drugs/drug_daclizumab/Daclizumab_Othman2014_reference.md) | ▶ model + simulator | 1-compartment, IV | 7 | Othman AA et al., Population pharmacokinetics of daclizum…, Clinical pharmacokinetics (2014) | [10.1007/s40262-014-0159-9](https://doi.org/10.1007/s40262-014-0159-9) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.15). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Diao_2016_reference](drugs/drug_daclizumab/Daclizumab_Diao2016_reference.md) | — | 2-compartment (no model) | 8 | Diao L et al., Population Pharmacokinetics of Daclizum…, Clinical pharmacokinetics (2016) | [10.1007/s40262-016-0366-7](https://doi.org/10.1007/s40262-016-0366-7) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (primary re-run, agreement 0.8). Primary extraction retained.">cross-check: partial</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Pescovitz_2008_reference](drugs/drug_daclizumab/Daclizumab_Pescovitz2008_reference.md) | — | 1-compartment (no model) | 0 | Pescovitz MD et al., Safety and pharmacokinetics of daclizum…, Pediatric transplantation (2008) | [10.1111/j.1399-3046.2007.00830.x](https://doi.org/10.1111/j.1399-3046.2007.00830.x) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=daclizumab).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: C1QA (unknown), C1QB (unknown), C1QC (unknown), C1R (unknown), FCGR1A (unknown), FCGR2A (unknown), FCGR2B (unknown), FCGR2C (unknown), FCGR3A (unknown), FCGR3B (unknown), IL2RA (antibody), IL2RB (antibody).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 17 matched, 17 returned
- **screened:** 3  ·  **relevant:** 2
- **records:** 3  ·  extracted 0  ·  needs_review 1  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_5 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Diao_2016.pdf` | Diao L et al., Population Pharmacokinetics of Daclizum…, Clinical pharmacokinetics (2016) | popPK | 10 | [10.1007/s40262-016-0366-7](https://doi.org/10.1007/s40262-016-0366-7) | [26873229](https://pubmed.ncbi.nlm.nih.gov/26873229) | The paper reports detailed population pharmacokinetic parameters for daclizumab including clearance, volumes, and half-life in the abstract. |
| `Othman_2014.pdf` | Othman AA et al., Population pharmacokinetics of daclizum…, Clinical pharmacokinetics (2014) | popPK | 10 | [10.1007/s40262-014-0159-9](https://doi.org/10.1007/s40262-014-0159-9) | [25212703](https://pubmed.ncbi.nlm.nih.gov/25212703) | The study reports quantitative population pharmacokinetic parameters (CL, V, Q, t1/2) for daclizumab in healthy volunteers, with all numeric values present in the abstract. |
| `Pescovitz_2008.pdf` | Pescovitz MD et al., Safety and pharmacokinetics of daclizum…, Pediatric transplantation (2008) | popPK | 8 | [10.1111/j.1399-3046.2007.00830.x](https://doi.org/10.1111/j.1399-3046.2007.00830.x) | [18466432](https://pubmed.ncbi.nlm.nih.gov/18466432) | The study describes a PK analysis with NONMEM, but only reports derived metrics (trough levels, AUC) rather than direct quantitative disposition parameters (CL, V) in the provided text. |
| `Minocha_2016.pdf` | Minocha M et al., Blockade of the High-Affinity Interleuk…, Clinical pharmacokinetics (2016) | pd | 5 | [10.1007/s40262-015-0305-z](https://doi.org/10.1007/s40262-015-0305-z) | [26242380](https://www.ncbi.nlm.nih.gov/pubmed/26242380) | metadata signals extractable PD data (sigmoid) |
| `Tran_2016.pdf` | Tran JQ et al., Therapeutic protein-drug interaction as…, British journal of clinical… (2016) | pgx | 7 | [10.1111/bcp.12936](https://doi.org/10.1111/bcp.12936) | [26991517](https://www.ncbi.nlm.nih.gov/pubmed/26991517) | metadata signals extractable PGX data (CYP1A2, PK/PD-context) |

<sub>queue written 2026-10-14T21:24:42.348857+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Diao_2016_2 | irrelevant | 2 | 0 | The paper reports PK-PD relationships (biomarker occupancy and changes) rather than quantitative pharmacokinetic disposition parameters (CL, V, Q, ka) for daclizumab itself. |
| PGx | Garcia_2007 | not_relevant | 0 | 0 | The study evaluates clinical outcomes (rejection, graft survival) of different immunosuppressive regimens but does not report pharmacokinetic or pharmacodynamic parameters of daclizumab or any pharmacogenomic associations. |
| popPK | Li_2009 | irrelevant | 3 | 0 | The study primarily evaluates a biosimilar (HuCD25mAb) and states that daclizumab parameters are "similar," but does not provide specific quantitative PK values for daclizumab itself in the text. |
| popPK | Minocha_2016 | irrelevant | 0 | 0 | no_text gate: only 174 chars of text extracted (&lt; 400) |
| popPK | Pescovitz_2008 | relevant | 8 | 3 | The study describes a PK analysis with NONMEM, but only reports derived metrics (trough levels, AUC) rather than direct quantitative disposition parameters (CL, V) in the provided text. |
| popPK | Phillips_2016 | irrelevant | 0 | 0 | The paper reports health-related quality of life outcomes and is not a pharmacokinetic study. |
| popPK | Tran_2016 | irrelevant | 0 | 0 | no_text gate: only 143 chars of text extracted (&lt; 400) |
| PGx | Tran_2016 | not_relevant | 0 | 0 | The paper assesses protein-drug interactions (PDI) using a cocktail approach, not pharmacogenomic effects of gene variants on PK/PD parameters. |
| PGx | White_2022 | not_relevant | 0 | 0 | The paper discusses the impact of daclizumab on CYP-mediated drug metabolism (drug-drug interactions), not how a gene variant affects daclizumab's own PK/PD parameters (pharmacogenomics). |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-14 21:26 UTC</sub>
