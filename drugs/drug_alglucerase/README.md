<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A16A&quot;,&quot;href&quot;:&quot;atc/A16A.md&quot;},{&quot;label&quot;:&quot;alglucerase&quot;}]"></div>

# alglucerase

- **generic name:** alglucerase
- **ATC codes:** `A16AB01`
- **DrugBank:** [DB00088](https://go.drugbank.com/drugs/DB00088) · **PubChem:** not captured
- **groups:** approved, withdrawn

## About

Alglucerase is an enzyme replacement therapy that was used to treat Gaucher disease, a condition involving liver and spleen enlargement. It has been withdrawn from the market, having been superseded by a newer version of the enzyme produced by recombinant DNA technology.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q4724257](https://www.wikidata.org/wiki/Q4724257) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-05 10:34 | 0:08 | 0/0/0 | 0/0/0 | 0/0/0 | 2,867/223 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 0/1 | 1/0 | 0 |

## Coverage

- **PubMed hits:** 8 matched, 8 returned
- **screened:** 1  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Grabowski_2009.pdf` | Grabowski GA et al., Dose-response relationships for enzyme…, Genetics in medicine : offi… (2009) | pd | 4 | [10.1097/GIM.0b013e31818e2c19](https://doi.org/10.1097/GIM.0b013e31818e2c19) | [19265748](https://www.ncbi.nlm.nih.gov/pubmed/19265748) | metadata signals extractable PD data (Emax) |

<sub>queue written 2026-10-05T10:34:35.828720+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Germain_2001 | not_relevant | 2 | 0 | The paper reports a case of neutralizing antibody development associated with a specific GBA genotype, but it does not provide quantitative pharmacokinetic or pharmacodynamic parameter data (e.g., clearance, half-life, AUC) to establish a pharmacogenomic effect size. |
| popPK | Grabowski_2009 | irrelevant | 0 | 0 | no_text gate: only 128 chars of text extracted (&lt; 400) |
| popPK | Hollak_1997 | irrelevant | 0 | 0 | The study investigates metabolic and clinical outcomes (REE, organ volume, blood counts) of alglucerase therapy, not pharmacokinetic parameters. |
| PD | Hollak_1997 | not_relevant | 2 | 1 | The study reports clinical outcomes (organ volume, REE, counts) after a fixed dose of alglucerase but does not provide exposure data (concentrations) or fit a dose-response model to derive numeric PD parameters like Emax or EC50. |
| PGx | Vigan_2014 | not_relevant | 2 | 5 | The paper models biomarker response to ERT and tests genotype (N370S/N370S) as a covariate, but the abstract and results indicate that genotype was not a significant covariate (only age, sex, and splenectomy were significant), and it does not report a pharmacokinetic parameter. |
| popPK | Whittington_1992 | irrelevant | 0 | 0 | The paper is a therapeutic review that explicitly states pharmacokinetic information is limited and does not report any quantitative disposition parameters for alglucerase. |
| PD | Whittington_1992 | not_relevant | 1 | 0 | The text is a qualitative review that explicitly states pharmacodynamic information is limited and provides no numeric PD parameters or exposure-response data. |
| PGx | Zimran_1994 | not_relevant | 0 | 0 | The study explicitly states that no correlation was found between genotype and the response to treatment. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>
