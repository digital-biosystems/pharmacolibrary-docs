<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Food toxins&quot;,&quot;href&quot;:&quot;toxins/FOOD.md&quot;},{&quot;label&quot;:&quot;Hexylresorcinol&quot;}]"></div>

# Hexylresorcinol

- **generic name:** Hexylresorcinol
- **T3DB:** [T3D4855](http://www.t3db.ca/toxins/T3D4855) · **PubChem:** [CID 3610](https://pubchem.ncbi.nlm.nih.gov/compound/3610)
- **groups:** approved

## About

Hexylresorcinol is a food additive for prevention of enzymic browning in shrimp and fruits Hexylresorcinol belongs to the family of Resorcinols. These are compounds containing a resorcinol moiety, which is a benzene ring bearing two hydrocyl groups at positions 1 and 3.

- **Category:** Food Toxin, Synthetic Toxin

<p><small>Toxicology facts: <a href="http://www.t3db.ca/toxins/T3D4855">T3DB T3D4855</a> (free for non-commercial use with attribution), quoted in part; reference markers removed; the description above is T3DB's too.</small></p>

<p><small>Also: CAS 136-77-6</small></p>

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
| 2026-11-18 10:26 | 2:48 | 0/0/0 | 0/0/0 | 0/0/0 | 55,275/1,729 | einfracz / qwen3.8-flash-next | 2 | 1/1 | 2/0 | 0 |

## Coverage

- **PubMed hits:** 5 matched, 7 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Sharifi_2015.pdf` | Sharifi M et al., Effects of 4-hexylresorcinol on the phe…, Insect science (2015) | pd | 5 | [10.1111/1744-7917.12154](https://doi.org/10.1111/1744-7917.12154) | [24995395](https://www.ncbi.nlm.nih.gov/pubmed/24995395) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-11-18 10:26 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Kamnev_2017 | not_relevant | 0 | 0 | The paper focuses on Mössbauer spectroscopy of cobalt complexes with 4-n-hexylresorcinol and does not involve pharmacokinetics, pharmacodynamics, or pharmacogenomics. |
| popPK | Kim_2011 | irrelevant | 0 | 0 | The paper reports on the antitumor efficacy and molecular mechanisms (NF-κB inhibition) of hexylresorcinol in xenograft models, but contains no toxicokinetic parameters such as half-life, clearance, or partition coefficients. |
| popPK | Kraal_1979 | irrelevant | 0 | 0 | The paper reports an in vitro bactericidal efficacy study, providing no quantitative toxicokinetic parameters. |
| popPK | Liu_2023 | irrelevant | 0 | 0 | The paper focuses on the chemical synthesis and food preservation application of pectin modified with 4-hexylresorcinol, containing no toxicokinetic parameters or biological disposition data. |
| popPK | Luna-Acosta_2011 | irrelevant | 0 | 0 | Hexylresorcinol is used solely as a chemical inhibitor in an enzymatic assay in oysters and is not the subject of toxicokinetic modeling. |
| popPK | Sharifi_2015 | irrelevant | 2 | 0 | The paper reports LC50 and IC50 values (toxicity/potency endpoints) rather than quantitative toxicokinetic parameters like half-lives, clearance, or PBPK models. |
| popPK | Sharma_2025 | irrelevant | 3 | 1 | The paper describes an in vivo human study measuring Hexylresorcinol concentrations in saliva over time, which constitutes local exposure/release kinetics rather than systemic toxicokinetics (no plasma concentrations, AUC, half-life, clearance, or volume of distribution are reported); the specific numeric values for these release profiles are not present in the provided text. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bhexylresorcinol%5D&body=Drug%3A%20hexylresorcinol%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_hexylresorcinol/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
