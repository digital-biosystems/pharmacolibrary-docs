<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A06A&quot;,&quot;href&quot;:&quot;atc/A06A.md&quot;},{&quot;label&quot;:&quot;magnesium citrate&quot;}]"></div>

# magnesium citrate

- **generic name:** magnesium citrate
- **ATC codes:** `A06AD19`, `A12CC04`, `B05CB03`
- **DrugBank:** [DB11110](https://go.drugbank.com/drugs/DB11110) · **PubChem:** [CID 6099959](https://pubchem.ncbi.nlm.nih.gov/compound/6099959)
- **molar mass:** 451.113 g/mol (C12H10Mg3O14) — DrugBank
- **groups:** approved, investigational

## About

Magnesium citrate is used as an osmotic laxative for constipation, as a magnesium mineral supplement, and as an irrigating salt solution. It is an approved medicine and is generally widely available, though it has not been centrally authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q45044](https://www.wikidata.org/wiki/Q45044) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=magnesium_citrate).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | small intestine | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-04 16:10 | 0:31 | 0/0/0 | 0/0/0 | 0/0/0 | 18,374/524 | ollama / qwen3.8:27b-mtp-q8_0 | 0 | 0/0 | 0/0 | 0 |

## Coverage

- **PubMed hits:** 15 matched, 11 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Wilimzig_1996.pdf` | Wilimzig C et al., Increase in magnesium plasma level afte…, European journal of clinica… (1996) | popPK | 8 | [10.1007/BF00226334](https://doi.org/10.1007/BF00226334) | [8857079](https://pubmed.ncbi.nlm.nih.gov/8857079) | The study reports PK parameters (AUC, half-life, compartmental model) for magnesium citrate in humans, but specific clearance and volume values are not explicitly listed in the text. |
| `Bertrand_1997.pdf` | Bertrand L et al., Mutagenesis of charged residues in a co…, The Biochemical journal (1997) | pd | 4 | [10.1042/bj3210609](https://doi.org/10.1042/bj3210609) | [9032444](https://www.ncbi.nlm.nih.gov/pubmed/9032444) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-10-04T16:10:13.654312+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bertrand_1997 | irrelevant | 0 | 0 | The paper is a biochemical study on enzyme mutagenesis where magnesium citrate is used only as an inhibitor to measure IC50 values, not as a subject drug for pharmacokinetic analysis. |
| PD | Bertrand_1997 | not_relevant | 0 | 0 | The paper reports enzyme kinetics (Km, Vmax, IC50) for a mutated protein, not pharmacodynamic exposure-response or dose-response data for a drug in a biological system. |
| popPK | Corkery_2022 | irrelevant | 0 | 0 | The paper is a case report and review regarding 4-Fluoroethylphenidate (4F-EPH), not magnesium_citrate, and contains no pharmacokinetic data. |
| PD | Corkery_2022 | not_relevant | 0 | 0 | The paper is a case report and literature review regarding the first death involving 4-fluoroethylphenidate (4F-EPH) and contains no pharmacodynamic modeling, exposure-response analysis, or numeric PD parameters for magnesium citrate or any other drug. |
| popPK | Engeli_2025 | irrelevant | 0 | 0 | The paper is a review of cannabidiol (CBD) safety and health claims, and does not contain any pharmacokinetic data for magnesium citrate. |
| PD | Engeli_2025 | not_relevant | 0 | 0 | The paper is a review of cannabidiol (CBD) in foods and does not contain any pharmacodynamic or exposure-response data for magnesium citrate. |
| popPK | Gabriel_1984 | irrelevant | 0 | 0 | The paper is an in-vitro enzymology study on isocitrate dehydrogenase activation, not a pharmacokinetic study of magnesium citrate. |
| PD | Gabriel_1984 | not_relevant | 0 | 0 | The paper describes in vitro enzyme kinetics (S0.5 values) for NAD-dependent isocitrate dehydrogenase, not a pharmacodynamic exposure-response relationship for a drug in a biological system. |
| popPK | Gabriel_1985 | irrelevant | 0 | 0 | The paper is an in-vitro enzymology study on bovine heart isocitrate dehydrogenase where magnesium citrate is only mentioned as a non-reversing agent, containing no pharmacokinetic data. |
| PD | Gabriel_1985 | not_relevant | 0 | 0 | The paper describes in vitro enzyme kinetics (IC50/S0.5) for ATP and Calcium, and mentions magnesium citrate only as a non-reversing agent, providing no pharmacodynamic exposure-response or dose-response data for magnesium citrate. |
| popPK | Ranade_2001 | irrelevant | 2 | 0 | The paper is explicitly identified as a review that examines bioavailability and pharmacokinetics, but the provided evidence contains no original quantitative disposition parameters or numeric values for magnesium citrate. |
| PD | Ranade_2001 | not_relevant | 2 | 1 | The text is a review abstract that qualitatively discusses the correlation between magnesium salt structure and pharmacodynamic effects but does not report specific numeric PD parameters or exposure-response data for magnesium citrate. |
| popPK | Wilimzig_1996 | relevant | 8 | 4 | The study reports PK parameters (AUC, half-life, compartmental model) for magnesium citrate in humans, but specific clearance and volume values are not explicitly listed in the text. |
| popPK | unknown_2018 | irrelevant | 0 | 0 | no_text gate: only 83 chars of text extracted (&lt; 400) |
| PD | unknown_2018 | not_relevant | 0 | 0 | The provided text is only a conference header and does not contain any data, analysis, or parameters regarding magnesium citrate pharmacodynamics. |
| popPK | unknown_2019 | irrelevant | 0 | 0 | no_text gate: only 32 chars of text extracted (&lt; 400) |
| PD | unknown_2019 | not_relevant | 0 | 0 | The provided text is only a title/header for conference proceedings and contains no data, analysis, or parameters regarding magnesium citrate pharmacodynamics. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>
