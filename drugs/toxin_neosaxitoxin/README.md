<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Animal toxins&quot;,&quot;href&quot;:&quot;toxins/ANIM.md&quot;},{&quot;label&quot;:&quot;Neosaxitoxin&quot;}]"></div>

# Neosaxitoxin

- **generic name:** Neosaxitoxin
- **T3DB:** [T3D4023](http://www.t3db.ca/toxins/T3D4023) · **PubChem:** [CID 104753](https://pubchem.ncbi.nlm.nih.gov/compound/104753)
- **groups:** investigational

## About

Neosaxitoxin is produced by Protogonyaulax and found in shellfish. Neosaxitoxin has been shown to exhibit anesthetic function. Neosaxitoxin belongs to the family of Saxitoxins, Gonyautoxins, and Derivatives. …

- **Category:** Animal Toxin, Food Toxin, Natural Toxin
- **Mechanism of toxicity:** Neosaxitoxin (NSTX) blocks the extracellular portion, the outer vestibule, of some voltage gated sodium channels in a very powerful and reversible manner, without affection of other ion channels. NSTX and other site 1 blockers (i.e., tetrodotoxin and saxitoxin) have high affinity (very low dissociation constant) and high specificity for Nav channels ("Voltage gated", also called "voltage sensitive" and "voltage dependant" sodium channel also known as "VGSCs" or "Nav channel"). …

<p><small>Toxicology facts: <a href="http://www.t3db.ca/toxins/T3D4023">T3DB T3D4023</a> (free for non-commercial use with attribution), quoted in part; reference markers removed; the description above is T3DB's too.</small></p>

<p><small>Also: CAS 64296-20-4</small></p>

## popPK records

_not available_

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-11 15:10 | 4:08 | 0/0/0 | 0/0/0 | 0/0/0 | 38,025/1,811 | einfracz / qwen3.8-27b | 0 | 0/0 | 0/0 | 0 |

## Coverage

- **PubMed hits:** 9 matched, 9 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Lobo_2015.pdf` | Lobo K et al., A Phase 1, Dose-escalation, Double-blin…, Anesthesiology (2015) | popPK | 7 | [10.1097/ALN.0000000000000831](https://doi.org/10.1097/ALN.0000000000000831) | [26275090](https://pubmed.ncbi.nlm.nih.gov/26275090) | The paper reports peak plasma concentrations for neosaxitoxin in humans, but lacks full kinetic parameters like half-life or clearance in the provided text. |

<sub>queue written 2026-11-11 15:10 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Boundy_2021 | irrelevant | 0 | 0 | The study measures acute toxicity (LD50) of decarbamoyl gonyautoxin 1&4, not toxicokinetic parameters for neosaxitoxin, which is only mentioned as a metabolite present in gut contents. |
| popPK | Loizides_2014 | irrelevant | 0 | 0 | The paper is a clinical review of local anaesthetic wound infiltration where neosaxitoxin is mentioned only as a comparator agent in a trial, with no toxicokinetic parameters reported for it. |
| popPK | Mahmood_1986 | irrelevant | 0 | 0 | The paper describes the isolation and identification of toxins (including neosaxitoxin) from cyanobacteria and reports an LD50, but provides no quantitative toxicokinetic parameters (half-life, clearance, partition coefficients, etc.) for neosaxitoxin. |
| popPK | Rodríguez-Navarro_2011 | irrelevant | 0 | 0 | The paper is a clinical trial reporting pain scores and safety outcomes, not quantitative toxicokinetic parameters (e.g., half-life, clearance, Cmax) for neosaxitoxin. |
| popPK | Smith_2001 | irrelevant | 0 | 0 | The paper describes bacterial biotransformation of PSTs in isolation (likely in vitro or enrichment cultures) and does not report quantitative toxicokinetic parameters (e.g., half-lives, rate constants, partition coefficients) for neosaxitoxin within a host organism. |
| popPK | Templin_2015 | irrelevant | 0 | 0 | The paper reports pharmacodynamic efficacy and toxicity endpoints (LD50, block duration) rather than quantitative toxicokinetic parameters (half-life, clearance, partition coefficients). |
| popPK | Zhang_2013 | irrelevant | 2 | 0 | The paper reports neurotoxicity mechanisms (apoptosis/necrosis) and LD50 in zebrafish for a mixture of aphantoxins, but contains no quantitative kinetic parameters (half-life, clearance, etc.) for neosaxitoxin. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bneosaxitoxin%5D&body=Drug%3A%20neosaxitoxin%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_neosaxitoxin/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
