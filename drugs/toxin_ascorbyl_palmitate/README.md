<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Food toxins&quot;,&quot;href&quot;:&quot;toxins/FOOD.md&quot;},{&quot;label&quot;:&quot;Ascorbyl palmitate&quot;}]"></div>

# Ascorbyl palmitate

- **generic name:** Ascorbyl palmitate
- **T3DB:** [T3D4912](http://www.t3db.ca/toxins/T3D4912) · **PubChem:** [CID 54676825](https://pubchem.ncbi.nlm.nih.gov/compound/54676825)

## About

Antioxidant.Ascorbyl palmitate is an ester formed from ascorbic acid and palmitic acid creating a fat-soluble form of vitamin C. In addition to its use as a source of vitamin C, it is also used as an antioxidant food additive (E number E304). Oral supplements of ascorbyl palmitate are less effective, due to the substance breaking down again into its components before being digested. …

- **Category:** Household Toxin, Food Toxin, Synthetic Toxin

<p><small>Toxicology facts: <a href="http://www.t3db.ca/toxins/T3D4912">T3DB T3D4912</a> (free for non-commercial use with attribution), quoted in part; reference markers removed; the description above is T3DB's too.</small></p>

<p><small>Also: CAS 137-66-6</small></p>

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
| 2026-11-17 17:16 | 5:47 | 0/0/0 | 0/0/0 | 0/0/0 | 110,384/3,489 | einfracz / qwen3.8-flash-next | 3 | 0/3 | 3/0 | 0 |

## Coverage

- **PubMed hits:** 16 matched, 16 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Dresser_2002.pdf` | Dresser GK et al., Evaluation of peppermint oil and ascorb…, Clinical pharmacology and t… (2002) | pgx | 7 | [10.1067/mcp.2002.126409](https://doi.org/10.1067/mcp.2002.126409) | [12235445](https://www.ncbi.nlm.nih.gov/pubmed/12235445) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |

<sub>queue written 2026-11-17 17:15 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Battalora_1993 | irrelevant | 0 | 0 | The paper is a pharmacological/tumor promotion study measuring biological outcomes (ODC activity, edema, tumor count) and contains no toxicokinetic parameters (e.g., half-life, clearance, partition coefficients) for ascorbyl palmitate. |
| popPK | Dresser_2002 | irrelevant | 3 | 5 | Ascorbyl palmitate is the subject, but the only numeric kinetic parameter reported (Km/Ki) describes its interaction with the CYP3A4 enzyme to affect a different drug (felodipine), rather than describing the toxicokinetic disposition (e.g., clearance, volume of distribution, half-life) of ascorbyl palmitate itself. |
| PGx | Dresser_2002 | not_relevant | 0 | 0 | The paper investigates the interaction between ascorbyl palmitate and felodipine via CYP3A4, but does not report on genetic variants (pharmacogenomics) affecting the pharmacokinetics or pharmacodynamics of ascorbyl palmitate. |
| popPK | Fathi_2018 | irrelevant | 1 | 8 | The study reports binding affinities (KD) for protein interaction in an in vitro assay, which are not toxicokinetic parameters such as rate constants, clearance, or partition coefficients. |
| popPK | Gopinath_2004 | irrelevant | 2 | 0 | The paper focuses on formulation characterization and drug release kinetics from vesicles, not on in vivo toxicokinetic parameters of ascorbyl palmitate. |
| popPK | Khalil_2021 | irrelevant | 0 | 0 | Ascorbyl palmitate is used merely as a lipid component of the aspasome formulation, while the reported pharmacokinetic and permeation parameters belong to tizanidine. |
| popPK | Lai_2024 | irrelevant | 1 | 0 | Ascorbyl palmitate is used here as a non-active structural component (hydrogel matrix) for a drug delivery system, not as the subject of toxicokinetic parameter extraction; no kinetic parameters for AP itself are reported. |
| popPK | Li_2022 | irrelevant | 0 | 0 | The paper focuses on the physicochemical characterization of ascorbyl palmitate as a surface charge modifier in lipid nanoparticles and drug delivery efficacy, reporting no toxicokinetic parameters (absorption, distribution, metabolism, or excretion rates) for ascorbyl palmitate itself. |
| popPK | Li_2024 | irrelevant | 0 | 0 | The paper reports on the therapeutic efficacy and mechanism of a nanoparticle system containing ascorbyl palmitate, but provides no toxicokinetic parameters such as half-life, clearance, or partition coefficients. |
| popPK | Maslovski_2024 | irrelevant | 0 | 0 | The study reports inhibitory percentages of venom enzymes and lethality neutralization, but no toxicokinetic parameters (e.g., half-life, clearance, absorption rate) for ascorbyl palmitate. |
| popPK | Mottola_2013 | irrelevant | 2 | 7 | The reported parameters are physical chemistry metrics (membrane partition coefficient) for an in vitro model membrane system, not biological toxicokinetic parameters. |
| popPK | Shi_2018 | irrelevant | 2 | 0 | The paper focuses on nanocarrier formulation and synergistic anti-tumor efficacy without reporting quantitative toxicokinetic parameters for ascorbyl palmitate. |
| popPK | Slavova-Kazakova_2021 | irrelevant | 0 | 0 | The paper discusses antioxidant synergy in lipid oxidation systems and computational chemistry, reporting no pharmacokinetic parameters (half-life, clearance, etc.) for ascorbyl palmitate. |
| popPK | Xiao_2021 | irrelevant | 0 | 0 | The paper is a review on immunotherapy and drug delivery systems where ascorbyl palmitate is mentioned only as an abbreviation (AP) in a list, with no toxicokinetic data reported. |
| popPK | Zou_2015 | irrelevant | 0 | 0 | The paper measures oxidative stability of an emulsion in vitro, not toxicokinetic parameters in a biological system. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bascorbyl_palmitate%5D&body=Drug%3A%20ascorbyl_palmitate%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_ascorbyl_palmitate/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
