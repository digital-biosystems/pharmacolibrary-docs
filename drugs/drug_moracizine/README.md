<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C01B&quot;,&quot;href&quot;:&quot;atc/C01B.md&quot;},{&quot;label&quot;:&quot;moracizine&quot;}]"></div>

# moracizine

- **generic name:** moracizine
- **ATC codes:** `C01BG01`
- **DrugBank:** [DB00680](https://go.drugbank.com/drugs/DB00680) · **PubChem:** not captured
- **groups:** approved, withdrawn

## About

Moracizine is a class I antiarrhythmic that was used to treat heart rhythm disorders, including ventricular arrhythmias. It is no longer available, having been withdrawn from the market.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q904071](https://www.wikidata.org/wiki/Q904071) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=moracizine).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | liver | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| metabolism | liver | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: SCN5A (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-08 20:17 | 0:46 | 0/0/0 | 0/0/0 | 0/0/0 | 4,665/435 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 1/0 | 0/1 | 0 |

## Coverage

- **PubMed hits:** 10 matched, 10 returned
- **screened:** 2  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Guo_1993.pdf` | Guo WY et al., [Pharmacokinetics of moracizine and mor…, Zhongguo yao li xue bao = A… (1993) | popPK | 9 | not captured | [8010035](https://pubmed.ncbi.nlm.nih.gov/8010035) | The study reports quantitative PK parameters (Cmax, T1/2, model) for moracizine in humans, but specific clearance (CL) and volume (V) values are not explicitly listed in the text. |
| `Ratner_1992.pdf` | Ratner EI et al., Effect of moracizine and ethacizine on…, Arzneimittel-Forschung (1992) | pd | 4 | not captured | [1326968](https://www.ncbi.nlm.nih.gov/pubmed/1326968) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-10-08T20:17:41.267315+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abdalla_1989 | irrelevant | 0 | 0 | The study focuses on the safety and efficacy of anti-arrhythmic drug combinations (ethmozine, chinidin, etc.) and does not report pharmacokinetic parameters for moracizine. |
| PD | Abdalla_1989 | not_relevant | 1 | 0 | The text describes a qualitative safety and efficacy study of drug combinations without providing any numeric concentration-effect data, dose-response curves, or PD parameters. |
| popPK | Beloborodov_1986 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of ethacizine, not moracizine. |
| popPK | Chan_1989 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of ethmozine, not moracizine. |
| popPK | Mannhold_1990 | irrelevant | 0 | 0 | no_text gate: only 114 chars of text extracted (&lt; 400) |
| PD | Mannhold_1990 | not_relevant | 0 | 0 | The paper investigates the interaction of Class I antiarrhythmics with calmodulin in vitro and does not mention moracizine or report any pharmacodynamic exposure-response relationship for it. |
| popPK | Morganroth_1987 | irrelevant | 0 | 0 | The paper is a clinical efficacy and tolerance study reporting dose-response and side effects, with no pharmacokinetic parameters (CL, V, t1/2) reported. |
| popPK | Ratner_1992 | irrelevant | 0 | 0 | no_text gate: only 116 chars of text extracted (&lt; 400) |
| PD | Ratner_1992 | not_relevant | 0 | 0 | The paper investigates the effect of moracizine on calcium channel receptors and binding proteins in vitro, not a pharmacodynamic exposure-response or dose-response relationship in a biological system with numeric PD parameters. |
| popPK | Rozenshtraukh_1985 | irrelevant | 0 | 0 | The paper studies ethacizin (an analog of ethmozine), not moracizine, and does not report quantitative PK parameters for the target drug. |
| popPK | Vanerio_1992 | irrelevant | 1 | 0 | The text is a clinical review/summary that discusses pharmacodynamics and dosage but does not report quantitative pharmacokinetic parameters (CL, V, t1/2) for moricizine. |
| PD | Vanerio_1992 | not_relevant | 1 | 0 | The text is a qualitative review summarizing general efficacy rates and dosage, lacking any specific concentration-effect data, dose-response curves, or numeric PD parameters. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>
