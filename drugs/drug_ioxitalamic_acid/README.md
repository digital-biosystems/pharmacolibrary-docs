<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V08A&quot;,&quot;href&quot;:&quot;atc/V08A.md&quot;},{&quot;label&quot;:&quot;ioxitalamic acid&quot;}]"></div>

# ioxitalamic acid

- **generic name:** ioxitalamic acid
- **ATC codes:** `V08AA05`
- **DrugBank:** [DB13444](https://go.drugbank.com/drugs/DB13444) · **PubChem:** none
- **molar mass:** 643.942 g/mol (C12H11I3N2O5) — DrugBank
- **groups:** approved, withdrawn

## About

Ioxitalamic acid is an iodinated contrast medium used for X-ray imaging. It is administered orally or intravascularly, though it is poorly absorbed by mouth. The drug is no longer used.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q3604532](https://www.wikidata.org/wiki/Q3604532), DrugBank's routes and dosage forms and the WHO ATC classification; not checked by a person.</small>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="unknown" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: C6_cl_magnitude failed (ratio None)</sub> | [Kees_1989_reference](drugs/drug_ioxitalamic_acid/IoxitalamicAcid_Kees1989_reference.md) | — | 1-compartment (no model) | 2 | Kees F et al., Pharmacokinetics of ciprofloxacin in el…, Arzneimittel-Forschung (1989) | — |
| <span class="pk-rf" hidden data-species="rabbit" data-age="unknown" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rabbit), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rabbit</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Morin_1987_reference](drugs/drug_ioxitalamic_acid/IoxitalamicAcid_Morin1987_reference.md) | — | 1-compartment (no model) | 0 | Morin JP et al., [Comparative pharmacokinetics and renal…, Pathologie-biologie (1987) | — |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-24 01:48 | 0:27 | 1/1/0 | 0/0/0 | 0/0/0 | 8,713/2,914 | einfracz / qwen3.8-27b | 1 | 1/0 | 1/0 | 0 |

## Coverage

- **PubMed hits:** 2 matched, 2 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 2  ·  extracted 0  ·  needs review 1  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Morin_1987.pdf` | Morin JP et al., [Comparative pharmacokinetics and renal…, Pathologie-biologie (1987) | popPK | 10 |  | [3320896](https://pubmed.ncbi.nlm.nih.gov/3320896) | The study reports pharmacokinetic parameters (half-life ~45 min, Vd 20-26% BW) for ioxitalamic acid in rabbits. |

<sub>queue written 2026-11-24 01:47 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Kees_1989 | relevant | 8 | 4 | The study reports quantitative pharmacokinetic parameters for ioxitalamic acid (clearance, half-life, volume) in humans, but the detailed numeric values are contained in Table 2 which is not explicitly provided in the evidence text, though some values are mentioned in the results narrative. |
| PGx | Kees_1989 | not_relevant | 0 | 0 | The paper reports the pharmacokinetics of ciprofloxacin and uses ioxitalamic acid only as a renal function marker, with no analysis of pharmacogenomic effects on ioxitalamic acid PK/PD. |
| PGx | Morin_1987 | not_relevant | 0 | 0 | The paper compares pharmacokinetics in rabbits but does not investigate gene variants or pharmacogenomic effects. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bioxitalamic_acid%5D&body=Drug%3A%20ioxitalamic_acid%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_ioxitalamic_acid/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-24 01:47 UTC</sub>
