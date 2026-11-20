<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Industrial and workplace toxins&quot;,&quot;href&quot;:&quot;toxins/IND.md&quot;},{&quot;label&quot;:&quot;Tetrachlorobisphenol A&quot;}]"></div>

# Tetrachlorobisphenol A

- **generic name:** Tetrachlorobisphenol A
- **T3DB:** [T3D3948](http://www.t3db.ca/toxins/T3D3948) · **PubChem:** [CID 6619](https://pubchem.ncbi.nlm.nih.gov/compound/6619)

## About

Tetrachlorobisphenol A is estrogen receptor(ER) alpha agonists, antagonists for androgen receptor(AR), progesterone receptor(PR) antagonists. It exhibits the ability to reverse the ERR inhibition induced by 4-hydroxytamoxifen.

- **Category:** Industrial/Workplace Toxin, Synthetic Toxin

<p><small>Toxicology facts: <a href="http://www.t3db.ca/toxins/T3D3948">T3DB T3D3948</a> (free for non-commercial use with attribution), quoted in part; reference markers removed; the description above is T3DB's too.</small></p>

<p><small>Also: CAS 79-95-8</small></p>

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
| 2026-11-19 17:39 | 4:18 | 0/0/0 | 0/0/0 | 0/0/0 | 73,480/3,024 | einfracz / qwen3.8-flash-next | 3 | 1/1 | 3/0 | 0 |

## Coverage

- **PubMed hits:** 18 matched, 18 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Jurgella_2006.pdf` | Jurgella GF et al., Effects of xenobiotics and steroids on…, General and comparative end… (2006) | pd | 4 | [10.1016/j.ygcen.2006.03.011](https://doi.org/10.1016/j.ygcen.2006.03.011) | [16677648](https://www.ncbi.nlm.nih.gov/pubmed/16677648) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-11-19 17:38 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Cambien_2020 | irrelevant | 0 | 0 | The paper describes an analytical method for measuring tetrachlorobisphenol_a in human plasma but reports no toxicokinetic parameters (rates, volumes, partition coefficients, half-lives). |
| popPK | Cao_2024 | irrelevant | 1 | 2 | The paper reports binding constants between bisphenols and hair keratin, which are binding affinity parameters rather than toxicokinetic parameters like clearance, half-life, or metabolic rate constants for tetrachlorobisphenol_a. |
| popPK | Castro_2020 | irrelevant | 0 | 0 | The substance is tetrabromobisphenol A (TBBPA), not tetrachlorobisphenol A, and the kinetic parameters (half-lives) refer to tetrachlorobisphenol A's chemical analog or chlorinated paraffins, not the target substance. |
| PGx | Hanioka_2024 | not_relevant | 0 | 0 | The study compares interspecies differences and identifies responsible UGT isoforms but does not report effects of human genetic polymorphisms on PK/PD parameters. |
| popPK | Hays_2019 | irrelevant | 1 | 0 | The paper focuses on Tetrabromobisphenol A (TBBPA), not Tetrachlorobisphenol A, and the provided text contains Biomonitoring Equivalents rather than quantitative toxicokinetic parameters for the subject substance. |
| popPK | Kuester_2007 | irrelevant | 0 | 0 | The paper reports kinetic parameters for tetrabromobisphenol A (TBBPA), not tetrachlorobisphenol A (TCBPA). |
| popPK | Liu_2018 | irrelevant | 0 | 0 | The paper investigates tetrabromobisphenol A (TBBPA), not tetrachlorobisphenol A; the requested substance is not present. |
| popPK | Parsons_2019 | irrelevant | 0 | 0 | The paper reports toxicity and gene expression effects of tetrabromobisphenol A (TBBPA) but contains no quantitative toxicokinetic parameters such as half-lives, clearance, or partition coefficients. |
| popPK | Wang_2025 | irrelevant | 0 | 0 | The paper reports enzyme inhibition potency (IC50) for tetrachlorobisphenol A against 5α-reductase, which is a toxicodynamic/pharmacological endpoint, not a toxicokinetic parameter. |
| popPK | Yang_2014 | irrelevant | 1 | 0 | The paper is an exposure/biomonitoring study reporting urinary concentrations of bisphenol analogues, with no toxicokinetic parameters reported for TCBPA. |
| popPK | Zhang_2023 | irrelevant | 2 | 0 | The study reports receptor binding affinity (Ki/IC50 type data) and risk assessment parameters, not toxicokinetic parameters like half-life, clearance, or volume of distribution. |
| popPK | Zheng_2024 | irrelevant | 0 | 0 | The paper focuses on aromatase inhibition (IC50) and in silico property predictions (solubility), reporting no quantitative toxicokinetic parameters (half-life, clearance, etc.) for tetrachlorobisphenol A. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Btetrachlorobisphenol_a%5D&body=Drug%3A%20tetrachlorobisphenol_a%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_tetrachlorobisphenol_a/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
