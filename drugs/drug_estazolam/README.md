<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05C&quot;,&quot;href&quot;:&quot;atc/N05C.md&quot;},{&quot;label&quot;:&quot;estazolam&quot;}]"></div>

# estazolam

- **generic name:** estazolam
- **ATC codes:** `N05CD04`
- **DrugBank:** [DB01215](https://go.drugbank.com/drugs/DB01215) · **PubChem:** [CID 3261](https://pubchem.ncbi.nlm.nih.gov/compound/3261)
- **molar mass:** 294.738 g/mol (C16H11ClN4) — DrugBank
- **groups:** approved, illicit, investigational

## About

Estazolam is a triazolobenzodiazepine tranquilizer used for the short-term treatment of insomnia. It is administered orally in tablet or liquid form. The medication is approved for medical use.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q3045264](https://www.wikidata.org/wiki/Q3045264), [Wikipedia](https://en.wikipedia.org/wiki/Estazolam?oldid=1321176505) (CC BY-SA 4.0), DrugBank's routes and dosage forms and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-23 22:58 | 0:05 | 0/0/0 | 0/0/0 | 0/0/0 | 3,694/193 | einfracz / qwen3.8-27b | 0 | 0/0 | 0/0 | 0 |

## Coverage

- **PubMed hits:** 6 matched, 6 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Kozlowski_1988.pdf` | Kozlowski MR, Inhibition of the binding and the behav…, Pharmacology, biochemistry,… (1988) | pd | 4 | [10.1016/0091-3057(88)90426-1](https://doi.org/10.1016/0091-3057(88)90426-1) | [2845442](https://www.ncbi.nlm.nih.gov/pubmed/2845442) | metadata signals extractable PD data (IC50) |
| `Aoshima_2003.pdf` | Aoshima T et al., Effects of the CYP2C19 genotype and cig…, Progress in neuro-psychopha… (2003) | pgx | 8 | [10.1016/S0278-5846(02)00357-3](https://doi.org/10.1016/S0278-5846(02)00357-3) | [12691790](https://www.ncbi.nlm.nih.gov/pubmed/12691790) | metadata signals extractable PGX data (CYP2C19, PK/PD-context) |

<sub>queue written 2026-11-23 22:58 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Aoshima_2003 | irrelevant | 0 | 0 | no_text gate: only 128 chars of text extracted (&lt; 400) |
| popPK | Fang_2025 | irrelevant | 0 | 0 | The paper studies a new amino acid (camptinine) and uses estazolam only as a positive control for anti-anxiety effects, without reporting any pharmacokinetic parameters for estazolam. |
| PGx | Fang_2025 | not_relevant | 0 | 0 | The paper identifies a natural amino acid in tea and compares its physiological effects to estazolam, but it does not report pharmacogenomic effects on estazolam PK/PD. |
| popPK | Kozlowski_1988 | irrelevant | 0 | 0 | no_text gate: only 122 chars of text extracted (&lt; 400) |
| PGx | Kozlowski_1988 | not_relevant | 0 | 0 | The paper investigates the effect of triazolobenzodiazepines on TRH binding and behavioral effects, not pharmacogenomic effects on estazolam PK/PD. |
| popPK | Li_2025_2 | irrelevant | 0 | 0 | This is a neuroimaging and clinical efficacy study for chronic insomnia, reporting no pharmacokinetic parameters for estazolam. |
| PGx | Li_2025_2 | not_relevant | 0 | 0 | The study focuses on neuroimaging markers and gene expression profiles associated with chronic insomnia and treatment response, but does not investigate specific gene variants affecting the pharmacokinetics or pharmacodynamics of estazolam. |
| popPK | Miura_2005 | irrelevant | 2 | 1 | The study reports in-vitro intrinsic metabolic kinetics (Km, Vmax, IC50) rather than in-vivo pharmacokinetic disposition parameters (CL, V, t1/2) for the drug. |
| PGx | Miura_2005 | not_relevant | 0 | 0 | The paper identifies CYP3A4 as the enzyme metabolizing estazolam but does not report any pharmacogenomic study linking specific gene variants (e.g., CYP3A5*3) to changes in pharmacokinetic or pharmacodynamic parameters. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bestazolam%5D&body=Drug%3A%20estazolam%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_estazolam/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
