<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L04A&quot;,&quot;href&quot;:&quot;atc/L04A.md&quot;},{&quot;label&quot;:&quot;daclizumab&quot;}]"></div>

# daclizumab

- **generic name:** daclizumab
- **ATC codes:** `L04AA08`, `L04AC01`
- **DrugBank:** [DB00111](https://go.drugbank.com/drugs/DB00111) · **PubChem:** not captured
- **groups:** approved, withdrawn

## About

Daclizumab, a monoclonal antibody immunosuppressant, was used to treat multiple sclerosis and to prevent graft rejection in kidney transplantation. It has been withdrawn from the market, including its authorised products in the European Union, and is no longer in use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q412920](https://www.wikidata.org/wiki/Q412920) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub> | [Othman_2014_reference](drugs/drug_daclizumab/Daclizumab_Othman2014_reference.md) | — | 1-compartment (no model) | 5 | Othman AA et al., Population pharmacokinetics of daclizum…, Clinical pharmacokinetics (2014) | [10.1007/s40262-014-0159-9](https://doi.org/10.1007/s40262-014-0159-9) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub> | [Diao_2016_reference](drugs/drug_daclizumab/Daclizumab_Diao2016_reference.md) | — | 2-compartment (no model) | 7 | Diao L et al., Population Pharmacokinetics of Daclizum…, Clinical pharmacokinetics (2016) | [10.1007/s40262-016-0366-7](https://doi.org/10.1007/s40262-016-0366-7) |
| <span class="pk-rf" hidden data-species="human" data-age="paediatric" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Pescovitz_2008_reference](drugs/drug_daclizumab/Daclizumab_Pescovitz2008_reference.md) | — | 1-compartment (no model) | 0 | Pescovitz MD et al., Safety and pharmacokinetics of daclizum…, Pediatric transplantation (2008) | [10.1111/j.1399-3046.2007.00830.x](https://doi.org/10.1111/j.1399-3046.2007.00830.x) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 00:07 | 1:12 | 0/2/1 | 0/0/0 | 0/0/0 | 31,450/3,496 | einfracz / qwen3.8-27b | 1 | 1/0 | 1/0 | 0 |

## Coverage

- **PubMed hits:** 17 matched, 17 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 3  ·  extracted 0  ·  needs_review 1  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_6 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Diao_2016.pdf` | Diao L et al., Population Pharmacokinetics of Daclizum…, Clinical pharmacokinetics (2016) | popPK | 10 | [10.1007/s40262-016-0366-7](https://doi.org/10.1007/s40262-016-0366-7) | [26873229](https://pubmed.ncbi.nlm.nih.gov/26873229) | The paper reports specific quantitative population pharmacokinetic parameters (CL, V, half-life, bioavailability) for daclizumab in the abstract. |
| `Othman_2014.pdf` | Othman AA et al., Population pharmacokinetics of daclizum…, Clinical pharmacokinetics (2014) | popPK | 10 | [10.1007/s40262-014-0159-9](https://doi.org/10.1007/s40262-014-0159-9) | [25212703](https://pubmed.ncbi.nlm.nih.gov/25212703) | The paper reports a population pharmacokinetic model for daclizumab in healthy volunteers with specific numeric values for clearance, volume of distribution, and bioavailability provided in the text. |
| `Pescovitz_2008.pdf` | Pescovitz MD et al., Safety and pharmacokinetics of daclizum…, Pediatric transplantation (2008) | popPK | 8 | [10.1111/j.1399-3046.2007.00830.x](https://doi.org/10.1111/j.1399-3046.2007.00830.x) | [18466432](https://pubmed.ncbi.nlm.nih.gov/18466432) | The study reports quantitative PK exposure metrics (AUC/trough levels) and uses a NONMEM population model for daclizumab in humans, although specific structural model parameters (CL, V) are not explicitly listed in the text snippet. |
| `Li_2009.pdf` | Li J et al., Two doses of humanized anti-CD25 antibo…, mAbs (2009) | popPK | 6 | [10.4161/mabs.1.1.7399](https://doi.org/10.4161/mabs.1.1.7399) | [20046574](https://pubmed.ncbi.nlm.nih.gov/20046574) | The study reports PK modeling (one-compartment) for daclizumab but provides no specific numeric parameter values (CL, V, t1/2) for daclizumab in the evidence, only qualitative similarity to the comparator. |
| `Minocha_2016.pdf` | Minocha M et al., Blockade of the High-Affinity Interleuk…, Clinical pharmacokinetics (2016) | pd | 5 | [10.1007/s40262-015-0305-z](https://doi.org/10.1007/s40262-015-0305-z) | [26242380](https://www.ncbi.nlm.nih.gov/pubmed/26242380) | metadata signals extractable PD data (sigmoid) |
| `Tran_2016.pdf` | Tran JQ et al., Therapeutic protein-drug interaction as…, British journal of clinical… (2016) | pgx | 7 | [10.1111/bcp.12936](https://doi.org/10.1111/bcp.12936) | [26991517](https://www.ncbi.nlm.nih.gov/pubmed/26991517) | metadata signals extractable PGX data (CYP1A2, PK/PD-context) |

<sub>queue written 2026-10-07T00:07:08.258056+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Diao_2016_2 | irrelevant | 0 | 0 | no_text gate: only 49 chars of text extracted (&lt; 400) |
| PGx | Garcia_2007 | not_relevant | 0 | 0 | The paper reports on the efficacy and safety of immunosuppressive regimens in kidney transplant recipients, but it does not investigate genetic variants or pharmacogenomic effects on pharmacokinetic or pharmacodynamic parameters of daclizumab. |
| popPK | Li_2009 | relevant | 6 | 1 | The study reports PK modeling (one-compartment) for daclizumab but provides no specific numeric parameter values (CL, V, t1/2) for daclizumab in the evidence, only qualitative similarity to the comparator. |
| popPK | Minocha_2016 | irrelevant | 0 | 0 | no_text gate: only 174 chars of text extracted (&lt; 400) |
| popPK | Phillips_2016 | irrelevant | 0 | 0 | The paper focuses on patient-reported outcomes and health-related quality of life in a clinical trial, reporting no pharmacokinetic parameters. |
| popPK | Tran_2016 | irrelevant | 0 | 0 | no_text gate: only 143 chars of text extracted (&lt; 400) |
| PGx | Tran_2016 | not_relevant | 1 | 2 | The paper focuses on protein-drug interactions and process comparison, not pharmacogenomic effects of gene variants. |
| PGx | White_2022 | not_relevant | 0 | 0 | The paper is a review of drug-drug interactions and does not report any pharmacogenomic effects (gene variants) on daclizumab's PK/PD. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-07 00:07 UTC</sub>
