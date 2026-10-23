<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B05X&quot;,&quot;href&quot;:&quot;atc/B05X.md&quot;},{&quot;label&quot;:&quot;magnesium phosphate&quot;}]"></div>

# magnesium phosphate

- **generic name:** magnesium phosphate
- **ATC codes:** `B05XA10`
- **DrugBank:** [DB13862](https://go.drugbank.com/drugs/DB13862) · **PubChem:** not captured
- **molar mass:** 262.858 g/mol (Mg3O8P2) — DrugBank
- **groups:** investigational

## About

Magnesium phosphate is an electrolyte compound classified as an additive for intravenous electrolyte solutions. It is considered investigational and is not an approved medicine in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q6731399](https://www.wikidata.org/wiki/Q6731399) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 00:47 | 0:38 | 0/0/0 | 0/0/0 | 0/0/0 | 14,459/666 | ollama / qwen3.8:27b-mtp-q8_0 | 6 | 0/1 | 6/0 | 0 |

## Coverage

- **PubMed hits:** 19 matched, 17 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Luan_2020.pdf` | Luan RY et al., [Effect of Different Passivating Agents…, Huan jing ke xue= Huanjing… (2020) | pd | 4 | [10.13227/j.hjkx.201906121](https://doi.org/10.13227/j.hjkx.201906121) | [31854950](https://www.ncbi.nlm.nih.gov/pubmed/31854950) | metadata signals extractable PD data (concentrationeffect) |

<sub>queue written 2026-10-06T00:47:11.901081+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Aro_1984 | irrelevant | 0 | 0 | The study investigates the effects of guar gum on cholesterol levels and does not report pharmacokinetic parameters for magnesium phosphate. |
| PD | Aro_1984 | not_relevant | 0 | 0 | The paper studies the effect of guar gum on cholesterol and explicitly states that serum magnesium and phosphate levels were unaffected; it does not report a pharmacodynamic or exposure-response relationship for magnesium phosphate. |
| popPK | Branson_2011 | irrelevant | 0 | 0 | no_text gate: only 39 chars of text extracted (&lt; 400) |
| PD | Branson_2011 | not_relevant | 0 | 0 | The paper discusses oxygen toxicity and does not contain any pharmacodynamic or exposure-response data for magnesium phosphate. |
| popPK | Clarke_2014 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of recombinant parathyroid hormone (rhPTH 1-84), not magnesium phosphate. |
| popPK | Duss_1993 | irrelevant | 0 | 0 | The study investigates the renal handling of electrolytes (including magnesium and phosphate) in response to albuterol, not the pharmacokinetics of magnesium phosphate as a drug. |
| popPK | Hou_2024 | irrelevant | 0 | 0 | The paper describes the development of a magnesium phosphate bone cement material for bone repair and does not report pharmacokinetic parameters for magnesium phosphate as a drug. |
| popPK | Islam_2022 | irrelevant | 0 | 0 | The paper is a review on immune system rejuvenation and does not contain any pharmacokinetic data for magnesium phosphate. |
| PD | Islam_2022 | not_relevant | 0 | 0 | The paper is a general review on immune system rejuvenation and dietary supplements; it does not report any pharmacokinetic or pharmacodynamic modeling, exposure-response analysis, or numeric PD parameters for magnesium phosphate. |
| popPK | Kumar_2019 | irrelevant | 0 | 0 | The paper is a radiation dosimetry study using lithium magnesium phosphate as a dosimeter material, not a pharmacokinetic study of magnesium phosphate as a drug. |
| PD | Kumar_2019 | not_relevant | 0 | 0 | The paper evaluates radiation dosimeters (LiMgPO4:Tb,B) for dental imaging, not the pharmacodynamics of magnesium phosphate as a drug. |
| popPK | Luan_2020 | irrelevant | 0 | 0 | no_text gate: only 139 chars of text extracted (&lt; 400) |
| PD | Luan_2020 | not_relevant | 0 | 0 | The paper discusses heavy metal stabilization in compost, not pharmacodynamics or drug exposure-response relationships. |
| popPK | Maren_1992 | irrelevant | 0 | 0 | The paper is a renal physiology study in fish where magnesium phosphate is mentioned only as a bladder precipitate, not as a subject drug for PK analysis. |
| popPK | Patnaik_2013 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of EZN-2208 (a PEG-SN38 conjugate), not magnesium phosphate. |
| PD | Patnaik_2013 | not_relevant | 0 | 0 | The paper describes a Phase I PK/safety study of EZN-2208 (PEG-SN38), not magnesium phosphate, and does not report any pharmacodynamic or exposure-response modeling. |
| popPK | Raimundo_2013 | irrelevant | 0 | 0 | The study investigates the relationship between ionized calcium and parathyroid hormone levels during citrate-based renal replacement therapy, with no pharmacokinetic modeling or parameter estimation for magnesium phosphate. |
| popPK | Skinner_1991 | irrelevant | 0 | 0 | The paper describes a protocol for assessing nephrotoxicity in children and mentions measuring phosphate levels, but it does not report pharmacokinetic parameters (CL, V, etc.) for magnesium phosphate as a drug. |
| popPK | Trinchieri_2014 | irrelevant | 0 | 0 | The paper discusses the pathophysiology and treatment of urinary stones (struvite/carbonate apatite) and mentions magnesium phosphate crystallization in the context of stone formation, but it is not a pharmacokinetic study of magnesium phosphate as a drug. |
| popPK | Walker_1972 | irrelevant | 0 | 0 | no_text gate: only 99 chars of text extracted (&lt; 400) |
| popPK | Wehl_2022 | irrelevant | 0 | 0 | The paper describes magnesium phosphate as a nanocarrier material for drug delivery in an in-vitro study, not as a subject drug for pharmacokinetic analysis. |
| popPK | unknown_2010 | irrelevant | 0 | 0 | no_text gate: only 39 chars of text extracted (&lt; 400) |
| PD | unknown_2010 | not_relevant | 0 | 0 | The provided text is only a header for a poster session and contains no scientific content, data, or PD parameters. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>
