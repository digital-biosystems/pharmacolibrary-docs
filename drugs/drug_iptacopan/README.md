<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L04A&quot;,&quot;href&quot;:&quot;atc/L04A.md&quot;},{&quot;label&quot;:&quot;iptacopan&quot;}]"></div>

# iptacopan

- **generic name:** iptacopan
- **ATC codes:** `L04AJ08`
- **DrugBank:** [DB16200](https://go.drugbank.com/drugs/DB16200) · **PubChem:** none
- **molar mass:** 422.525 g/mol (C25H30N2O4) — DrugBank
- **groups:** approved, investigational

## About

Iptacopan is a complement inhibitor used to treat paroxysmal nocturnal hemoglobinuria. It is an approved medicine authorised in the European Union, with further uses still under investigation.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q76803684](https://www.wikidata.org/wiki/Q76803684) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## popPK records

_not available_

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=iptacopan).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| distribution | blood | `ALB` binder, `ORM1` binder | DrugBank actor |
| metabolism | brain | `CYP2D6` substrate | DrugBank actor |
| metabolism | liver | `CYP2C8` substrate, `CYP2D6` substrate, `UGT1A1` substrate, `UGT1A3` substrate | DrugBank actor |
| metabolism | small intestine | `UGT1A1` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: CFB (inhibitor), UGT1A8 (substrate).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 23:56 | 0:32 | 0/0/0 | 0/0/0 | 0/0/0 | 8,503/299 | einfracz / qwen3.8-27b | 1 | 0/1 | 1/0 | 0 |

## Coverage

- **PubMed hits:** 6 matched, 6 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Baltcheva_2026.pdf` | Baltcheva I et al., Randomised, phase 1 evaluation of the s…, British journal of pharmaco… (2026) | popPK | 7 | [10.1111/bph.70339](https://doi.org/10.1111/bph.70339) | [41701988](https://pubmed.ncbi.nlm.nih.gov/41701988) | The study reports population PK parameters for iptacopan in humans, but the provided text only lists the half-life range (18.4-25.0 h) and lacks specific numeric values for clearance (CL), volume (V), or absorption rate (ka). |

<sub>queue written 2026-10-06 23:56 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Baltcheva_2026 | relevant | 7 | 2 | The study reports population PK parameters for iptacopan in humans, but the provided text only lists the half-life range (18.4-25.0 h) and lacks specific numeric values for clearance (CL), volume (V), or absorption rate (ka). |
| PGx | James_2023 | not_relevant | 0 | 0 | The paper describes the ADME and PK properties of iptacopan in healthy volunteers but does not report any pharmacogenomic effects or gene variant associations. |
| PGx | Niazi_2026 | not_relevant | 0 | 0 | The paper discusses iptacopan only in the context of therapeutic alternatives to biologics, but does not report any pharmacogenomic effects on its PK or PD parameters. |
| PGx | Versino_2025 | not_relevant | 0 | 0 | This is a review article on clinical management and patient profiling for PNH that mentions iptacopan's mechanism but does not report pharmacogenomic studies linking gene variants to its pharmacokinetic or pharmacodynamic parameters. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Biptacopan%5D&body=Drug%3A%20iptacopan%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_iptacopan/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09</sub>
