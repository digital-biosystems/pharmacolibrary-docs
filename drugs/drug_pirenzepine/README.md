<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A02B&quot;,&quot;href&quot;:&quot;atc/A02B.md&quot;},{&quot;label&quot;:&quot;pirenzepine&quot;}]"></div>

# pirenzepine

- **generic name:** pirenzepine
- **ATC codes:** `A02BX03`
- **DrugBank:** [DB00670](https://go.drugbank.com/drugs/DB00670) · **PubChem:** [CID 4848](https://pubchem.ncbi.nlm.nih.gov/compound/4848)
- **molar mass:** 351.4023 g/mol (C19H21N5O2) — DrugBank
- **groups:** approved, withdrawn

## About

Pirenzepine is a muscarinic antagonist that was used as an anti-ulcer drug to treat peptic ulcer and other acid-related stomach disorders. It has been withdrawn and is no longer in use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q419550](https://www.wikidata.org/wiki/Q419550) and the WHO ATC classification; not checked by a person.</small>

## Parameters across studies

| parameter | as named | value | unit | as reported | population | n | species | status | record |
|---|---|---|---|---|---|---|---|---|---|
| CL | CL | 15.8 | L/h | 263.4 ml/min | healthy volunteers | 12 | human | <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--stale">stale</span> | [Vergin_1986_reference](drugs/drug_pirenzepine/Pirenzepine_Vergin1986_reference.md) |
| V | V | 17.85 ‡ | L | 0.255 l/kg | healthy volunteers | 12 | human | <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--stale">stale</span> | [Vergin_1986_reference](drugs/drug_pirenzepine/Pirenzepine_Vergin1986_reference.md) |
| t½ | t1/2z | 7.7 | h | 7.7 h | healthy volunteers | 12 | human | <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--stale">stale</span> | [Vergin_1986_reference](drugs/drug_pirenzepine/Pirenzepine_Vergin1986_reference.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. ‡ given per kg in the paper; shown for a 70 kg adult. Rejected records are left out.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>stale — current check: Needs review</sub><br><sub>blocking: C6_cl_magnitude failed (ratio None)</sub> | [Vergin_1986_reference](drugs/drug_pirenzepine/Pirenzepine_Vergin1986_reference.md) | — | 1-compartment (no model) | 3 | Vergin H et al., Pharmacokinetics and bioequivalence of…, Arzneimittel-Forschung (1986) | — |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>stale — current check: Rejected</sub><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Vergin_1989_reference](drugs/drug_pirenzepine/Pirenzepine_Vergin1989_reference.md) | — | 1-compartment (no model) | 0 | Vergin H et al., Effect of an aluminium-hydroxide contai…, Arzneimittel-Forschung (1989) | — |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=pirenzepine).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: CHRM1 (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-04 11:16 | 0:27 | 1/1/0 | 0/0/0 | 0/0/0 | 12,510/779 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 1/0 | 1/0 | 0 |

## Coverage

- **PubMed hits:** 204 matched, 14 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 0  ·  needs_review 1  ·  rejected 1  ·  stale 2
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Vergin_1986.pdf` | Vergin H et al., Pharmacokinetics and bioequivalence of…, Arzneimittel-Forschung (1986) | popPK | 10 | not captured | [3790194](https://pubmed.ncbi.nlm.nih.gov/3790194) | The abstract explicitly reports quantitative pharmacokinetic parameters (half-life, volume of distribution, and clearance) for pirenzepine in humans. |
| `Vergin_1989.pdf` | Vergin H et al., Effect of an aluminium-hydroxide contai…, Arzneimittel-Forschung (1989) | popPK | 9 | not captured | [2751741](https://pubmed.ncbi.nlm.nih.gov/2751741) | The study reports quantitative PK parameters (AUC, Cmax, half-life) for pirenzepine in humans, but specific values for clearance (CL) and volume (V) are not explicitly listed in the provided text, only derived metrics and half-life. |

<sub>queue written 2026-10-04T11:16:26.567373+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Deppermann_1989 | irrelevant | 1 | 0 | Pirenzepine is a co-administered drug used to test interactions with antibiotics, and no quantitative PK parameters (CL, V, etc.) for pirenzepine itself are reported. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-04 11:16 UTC</sub>
