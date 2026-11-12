<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Animal toxins&quot;,&quot;href&quot;:&quot;toxins/ANIM.md&quot;},{&quot;label&quot;:&quot;Gonyautoxin I&quot;}]"></div>

# Gonyautoxin I

- **generic name:** Gonyautoxin I
- **T3DB:** [T3D4038](http://www.t3db.ca/toxins/T3D4038) · **PubChem:** [CID 46173840](https://pubchem.ncbi.nlm.nih.gov/compound/46173840)

## About

Gonyautoxin I is found in mollusks. Gonyautoxin I is produced by Gonyaulax and Protogonyaulax species and isolated from shellfish. It is a neurotoxin and the causal agent, with Saxitoxin, of shellfish poisoning.

- **Category:** Animal Toxin, Food Toxin, Natural Toxin
- **Mechanism of toxicity:** The gonyautoxin toxicity is caused by the reversibly binding to its receptor site on the voltage-gated sodium channel on excitable cells, thus blocking the influx of Na+ ions and preventing nerve and muscle cells from producing action potentials, therefore, blocking neuronal transmission, which results in a temporary paralysis of muscles. Gonyautoxin paralyzes the injected sphincter reducing anal tone, leaving the other muscles unaffected. …

<p><small>Toxicology facts: <a href="http://www.t3db.ca/toxins/T3D4038">T3DB T3D4038</a> (free for non-commercial use with attribution), quoted in part; reference markers removed; the description above is T3DB's too.</small></p>

<p><small>Also: CAS 60748-39-2</small></p>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (other animal), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">other animal</span> | [Yakehiro_2000_normalized_slope_conductance](drugs/toxin_gonyautoxin_i/pd_Yakehiro_2000_normalized_slope_conductance.md) | normalized slope conductance ← gonyautoxin_i · direct Emax (saturable) effect | — | Yakehiro M et al., An analysis of the variations in potenc…, Molecular pharmacology (2000) | [10.1124/mol.58.4.692](https://doi.org/10.1124/mol.58.4.692) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-10 10:34 | 2:45 | 0/0/0 | 1/0/0 | 0/0/0 | 46,538/2,031 | einfracz / qwen3.8-27b | 1 | 0/1 | 1/0 | 0 |

## Coverage

- **PubMed hits:** 9 matched, 9 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Cho_2014.pdf` | Cho HE et al., Development of a liquid chromatography-…, Biomedical chromatography :… (2014) | popPK | 9 | [10.1002/bmc.3190](https://doi.org/10.1002/bmc.3190) | [24782399](https://pubmed.ncbi.nlm.nih.gov/24782399) | The paper performs a toxicokinetic study of Grayanotoxin I (and III) in rats, but the extracted text contains only method validation parameters and doses, not the actual kinetic values (e.g., t1/2, Cmax, AUC). |

<sub>queue written 2026-11-10 10:33 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Boundy_2021 | irrelevant | 0 | 0 | The paper reports acute toxicity (LD50) and receptor binding data, but does not provide quantitative toxicokinetic parameters such as half-life, clearance, or distribution volume. |
| popPK | Cho_2014 | relevant | 9 | 2 | The paper performs a toxicokinetic study of Grayanotoxin I (and III) in rats, but the extracted text contains only method validation parameters and doses, not the actual kinetic values (e.g., t1/2, Cmax, AUC). |
| popPK | Kikuchi_2015 | irrelevant | 0 | 0 | The paper reports kinetic parameters for ProTx-II, GsMTx-4, and GTx1-15, but does not mention or provide data for gonyautoxin_i. |
| popPK | Ku_1977 | irrelevant | 0 | 0 | The paper describes the mechanism of action and acute electrophysiological effects of grayanotoxins in isolated guinea-pig tissue, but reports no toxicokinetic parameters such as clearance, half-life, or partition coefficients. |
| popPK | Perez_2011 | irrelevant | 0 | 0 | The paper reports in vitro electrophysiological potency (IC50) for sodium channel binding, not toxicokinetic parameters like clearance, half-life, or partition coefficients. |
| PGx | Ramos_2022 | not_relevant | 0 | 0 | The paper describes toxicity and chemoprotection in shrimp and does not report any gene variants or pharmacogenomic effects on pharmacokinetic or pharmacodynamic parameters. |
| popPK | Schrenk_2023 | irrelevant | 0 | 0 | The paper is a risk assessment regarding exposure and health risks, containing no quantitative toxicokinetic parameters (such as half-life, clearance, or partition coefficients) for gonyautoxin_i. |
| popPK | Yakehiro_2000 | irrelevant | 0 | 0 | The paper studies the pharmacodynamics (channel modulation potency/EC50) of grayanotoxin analogs, not the toxicokinetic parameters (absorption, distribution, metabolism, excretion) of gonyautoxin_i. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bgonyautoxin_i%5D&body=Drug%3A%20gonyautoxin_i%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_gonyautoxin_i/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
