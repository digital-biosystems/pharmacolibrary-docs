<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A16A&quot;,&quot;href&quot;:&quot;atc/A16A.md&quot;},{&quot;label&quot;:&quot;apraglutide&quot;}]"></div>

# apraglutide

- **generic name:** apraglutide
- **ATC codes:** `A16AX27`
- **DrugBank:** [DB18084](https://go.drugbank.com/drugs/DB18084) · **PubChem:** not captured
- **groups:** investigational

## About

Apraglutide is an investigational drug in the alimentary tract and metabolism category, being studied for gastrointestinal conditions. It is not yet approved; it remains under clinical investigation and is not in general use.

<small>⚠️ **Unverified** — written by `glm-5.3-flash` from general knowledge (no Wikidata entry found) and the WHO ATC classification; not checked by a person.</small>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>stale — current check: Rejected</sub><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Bolognani_2023_reference](drugs/drug_apraglutide/Apraglutide_Bolognani2023_reference.md) | — | 1-compartment (no model) | 0 | Bolognani F et al., Characterization of the Pharmacokinetic…, The Journal of pharmacology… (2023) | [10.1124/jpet.123.001582](https://doi.org/10.1124/jpet.123.001582) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-05 10:56 | 0:37 | 0/1/0 | 0/0/0 | 0/0/0 | 18,011/834 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 0/1 | 1/0 | 0 |

## Coverage

- **PubMed hits:** 11 matched, 8 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 1
- **scholar-agent fallback query used:** True

## Full-text requests

_3 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Bolognani_2023.pdf` | Bolognani F et al., Characterization of the Pharmacokinetic…, The Journal of pharmacology… (2023) | popPK | 10 | [10.1124/jpet.123.001582](https://doi.org/10.1124/jpet.123.001582) | [37316329](https://pubmed.ncbi.nlm.nih.gov/37316329) | The study reports quantitative PK parameters (clearance and volume of distribution) for apraglutide in healthy humans, with specific numeric ranges provided in the abstract. |
| `Hargrove_2020.pdf` | Hargrove DM et al., Pharmacological Characterization of Apr…, The Journal of pharmacology… (2020) | popPK | 9 | [10.1124/jpet.119.262238](https://doi.org/10.1124/jpet.119.262238) | [32075870](https://pubmed.ncbi.nlm.nih.gov/32075870) | The abstract provides specific quantitative PK parameters (clearance and half-life) for apraglutide in rats, monkeys, and minipigs. |
| `Greig_2026.pdf` | Greig G et al., Pharmacokinetics and Safety of Single-D…, Clinical pharmacology in dr… (2026) | popPK | 8 | [10.1002/cpdd.70006](https://doi.org/10.1002/cpdd.70006) | [41545784](https://pubmed.ncbi.nlm.nih.gov/41545784) | The study reports quantitative PK parameters (Cmax, AUC) for apraglutide in humans, but lacks compartmental model parameters (CL, V, t1/2) and full concentration-time data. |

<sub>queue written 2026-10-05T10:56:11.478916+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Greig_2024 | irrelevant | 4 | 2 | The study reports summary PK metrics (Cmax, AUC) but lacks compartmental parameters (CL, V, t1/2) required for population PK modeling. |
| PD | Hargrove_2020 | not_relevant | 3 | 1 | The text describes PK parameters and qualitatively states that apraglutide has greater in vivo pharmacodynamic activity (intestinal growth) than other peptides, but it does not provide numeric PD parameters (e.g., Emax, EC50) or an explicit concentration-effect curve in the provided text. |
| popPK | Nordell_2026 | relevant | 8 | 2 | The paper is a PK study including apraglutide, but specific numeric parameter values for apraglutide are located in Table S1 (supplementary material) which is not provided in the evidence. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-05 10:56 UTC</sub>
