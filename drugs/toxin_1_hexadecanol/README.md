<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Food toxins&quot;,&quot;href&quot;:&quot;toxins/FOOD.md&quot;},{&quot;label&quot;:&quot;1-Hexadecanol&quot;}]"></div>

# 1-Hexadecanol

- **generic name:** 1-Hexadecanol
- **T3DB:** [T3D4863](http://www.t3db.ca/toxins/T3D4863) · **PubChem:** [CID 2682](https://pubchem.ncbi.nlm.nih.gov/compound/2682)
- **groups:** approved

## About

Cetyl alcohol, also known as 1-hexadecanol and palmityl alcohol, is a solid organic compound and a member of the alcohol class of compounds. Its chemical formula is CH315OH. At room temperature, cetyl alcohol takes the form of a waxy white solid or flakes. …

- **Category:** Household Toxin, Industrial/Workplace Toxin, Food Toxin, Synthetic Toxin

<p><small>Toxicology facts: <a href="http://www.t3db.ca/toxins/T3D4863">T3DB T3D4863</a> (free for non-commercial use with attribution), quoted in part; reference markers removed; the description above is T3DB's too.</small></p>

<p><small>Also: CAS 36653-82-4 · <a href="https://www.ebi.ac.uk/chebi/searchId.do?chebiId=CHEBI:16125">ChEBI 16125</a></small></p>

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
| 2026-11-15 15:52 | 4:17 | 0/0/0 | 0/0/0 | 0/0/0 | 131,161/3,534 | einfracz / qwen3.8-flash-next | 8 | 3/3 | 8/0 | 0 |

## Coverage

- **PubMed hits:** 23 matched, 23 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Gayathiri_2024.pdf` | Gayathiri E et al., Multitargeted pharmacokinetics, molecul…, Journal of biomolecular str… (2024) | pgx | 7 | [10.1080/07391102.2023.2243335](https://doi.org/10.1080/07391102.2023.2243335) | [37534448](https://www.ncbi.nlm.nih.gov/pubmed/37534448) | metadata signals extractable PGX data (CYP2C19, PK/PD-context) |

<sub>queue written 2026-11-15 15:51 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Carvalho_2010 | irrelevant | 0 | 0 | The paper focuses on drug delivery systems for zidovudine (AZT) and characterizes surfactants chemically/physically, with no toxicokinetic parameters for 1-hexadecanol. |
| popPK | Dastidar_2019 | irrelevant | 0 | 0 | The substance 1-hexadecanol (cetyl alcohol) acts solely as a carrier vehicle for Paclitaxel, and the reported pharmacokinetic parameters (bioavailability) belong to Paclitaxel, not the alcohol itself. |
| popPK | Gayathiri_2024 | irrelevant | 2 | 8 | The reported values are qualitative/quantitative predictions from in silico ADMET screening (BBB penetration, GI absorption, enzyme inhibition) rather than measured toxicokinetic parameters (e.g., half-life, clearance, PK profiles) in a biological system. |
| PGx | Gayathiri_2024 | not_relevant | 0 | 0 | The paper identifies 1-hexadecanol as a CYP2C19/CYP2D6 inhibitor in silico, but reports no pharmacogenomic effect of a specific gene variant on a PK or PD parameter of the drug. |
| popPK | He_2019 | irrelevant | 1 | 2 | 1-hexadecanol appears only as a formulation excipient (phospholipid component) for an insulin study, not as the subject of toxicokinetic analysis; no kinetic parameters for hexadecanol are reported. |
| popPK | Ikhlas_2026 | irrelevant | 0 | 0 | The paper reports on in vitro anticancer activity and receptor binding of 1-hexadecanol but contains no quantitative toxicokinetic parameters (e.g., ADME, half-lives, clearance). |
| popPK | Kim_1994 | irrelevant | 0 | 0 | The extracted evidence contains only GrobID metadata headers and no scientific content, data, or text from the paper itself. |
| popPK | Kim_1994_2 | irrelevant | 0 | 0 | The provided text contains only metadata from the document processing software (GROBID) and lacks any scientific content or experimental data. |
| PGx | Mireles_2026 | not_relevant | 0 | 0 | The paper studies bacterial metabolism and adaptive laboratory evolution of P. putida for plastic degradation, not human pharmacogenomics of 1-hexadecanol as a drug. |
| popPK | Nordéus_2014 | irrelevant | 0 | 0 | The paper reports chemical concentrations and behavioral responses of flies to 1-hexadecanol but contains no toxicokinetic parameters (rates, coefficients, half-lives) for 1-hexadecanol disposition in the animals. |
| popPK | Qin_2018 | irrelevant | 0 | 0 | The paper focuses on the pharmacokinetics of pregabalin formulations, with 1-hexadecanol (cetyl alcohol) mentioned only as a non-drug excipient/vehicle and no kinetic parameters reported for it. |
| popPK | Qureshi_2017 | irrelevant | 1 | 0 | The paper focuses on docetaxel pharmacokinetics using lipid nanoparticles; 1-hexadecanol is not mentioned, and no kinetic parameters for it are present. |
| popPK | Sachs_1999 | irrelevant | 0 | 0 | The paper focuses on Tyloxapol and Cetyl Alcohol, not 1-hexadecanol, and mentions no pharmacokinetic parameters for 1-hexadecanol. |
| popPK | Sang_2019 | irrelevant | 0 | 0 | 1_hexadecanol appears only as a chemical component (linker) in a nanoparticle formulation and is not the subject of toxicokinetic study. |
| popPK | Xing_2019 | irrelevant | 0 | 0 | Hexadecanol is a structural component of the prodrug moeixitecan, but the pharmacokinetic parameters reported (AUC, Cmax) are for the therapeutic agent SN38, not for hexadecanol itself. |
| popPK | Yehia_2018 | irrelevant | 0 | 0 | The paper focuses entirely on the formulation and pharmacokinetics of lornoxicam in rabbits; 1-hexadecanol (cetyl alcohol) is only used as an excipient/component and no kinetic parameters for it are reported. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5B1_hexadecanol%5D&body=Drug%3A%201_hexadecanol%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_1_hexadecanol/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
