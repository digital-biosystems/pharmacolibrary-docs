<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Cigarette toxins&quot;,&quot;href&quot;:&quot;toxins/CIG.md&quot;},{&quot;label&quot;:&quot;Safrole&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Safrole_Fan2021_reference&quot;,&quot;label&quot;:&quot;Fan_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_safrole/Safrole_Fan2021_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# Safrole

- **generic name:** Safrole
- **T3DB:** [T3D4212](http://www.t3db.ca/toxins/T3D4212) · **PubChem:** [CID 5144](https://pubchem.ncbi.nlm.nih.gov/compound/5144)

## About

Safrole is found in anise. Safrole occurs in nutmeg. Banned by FDA for use in food. …

- **Category:** Cigarette Toxin, Pesticide, Food Toxin, Natural Toxin, Plant Toxin
- **Sources and uses:** This is a natural compound that is used as a pesticide.
- **Carcinogenicity:** IARC group 2B, possibly carcinogenic to humans.

<p><small>Toxicology facts: <a href="http://www.t3db.ca/toxins/T3D4212">T3DB T3D4212</a> (free for non-commercial use with attribution), quoted in part; reference markers removed; the description above is T3DB's too.</small></p>

<p><small>Also: CAS 94-59-7 · <a href="https://www.ebi.ac.uk/chebi/searchId.do?chebiId=CHEBI:8994">ChEBI 8994</a></small></p>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| safrole | parent | 162.188 | C10H10O2 | PubChem | [5144](https://pubchem.ncbi.nlm.nih.gov/compound/5144) | Fan_2021 |

## Start here

> **Fan_2021_reference** — <span class="pk-badge pk-badge--orange">Needs review</span> rats, n = 6. [Run it in the simulator](drugs/toxin_safrole/Safrole_Fan2021_reference.md?tab=Simulation) · [record](drugs/toxin_safrole/Safrole_Fan2021_reference.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="rat" data-age="unknown" data-status="Needs review" data-sim="yes"></span><span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span><br><sub>blocking: T1_tmax</sub><br><sub>blocking: T1_t_half_terminal</sub> | [Fan_2021_reference](drugs/toxin_safrole/Safrole_Fan2021_reference.md) | ▶ model + simulator | retention, 1 pool | 5 | Fan Y et al., Pharmacokinetic Study of Safrole and Me…, BioMed research internation… (2021) | [10.1155/2021/6699033](https://doi.org/10.1155/2021/6699033) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (other animal), not measured in people (from an LLM reading of the title and abstract by qwen3.8-flash-next, p(non-human) 1.00).">other animal</span> | [Jung_2007_insecticidal_activity](drugs/toxin_safrole/pd_Jung_2007_insecticidal_activity.md) | insecticidal activity ← safrole · inhibition effect | — | Jung WC et al., Toxicity of Myristica fagrans seed comp…, Journal of medical entomolo… (2007) | [10.1603/0022-2585(2007)44[524:tomfsc]2.0.co;2](https://doi.org/10.1603/0022-2585(2007)44[524:tomfsc]2.0.co;2) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-13 02:03 | 11:14 | 1/0/0 | 1/0/0 | 0/0/0 | 201,017/5,999 | einfracz / qwen3.8-flash-next | 20 | 1/5 | 20/0 | 0 |

## Coverage

- **PubMed hits:** 82 matched, 76 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 1  ·  extracted 0  ·  needs review 1  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Ueng_2004.pdf` | Ueng YF et al., Identification of the main human cytoch…, Chemical research in toxico… (2004) | popPK | 10 | [10.1021/tx030055p](https://doi.org/10.1021/tx030055p) | [15310247](https://pubmed.ncbi.nlm.nih.gov/15310247) | The paper reports quantitative kinetic parameters (Km, Vmax, intrinsic clearance) for safrole metabolism in human liver microsomes. |
| `Usui_2023.pdf` | Usui K et al., Detection of major psychoactive compoun…, Journal of pharmaceutical a… (2023) | popPK | 8 | [10.1016/j.jpba.2023.115565](https://doi.org/10.1016/j.jpba.2023.115565) | [37453146](https://pubmed.ncbi.nlm.nih.gov/37453146) | The paper aims to determine toxicokinetic parameters including biological half-lives for safrole in a human poisoning case, but the specific numeric values for these parameters are not present in the provided evidence. |

<sub>queue written 2026-11-13 02:01 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Chen_2011 | not_relevant | 1 | 0 | The paper discusses general bioactivation and toxicity mechanisms of safrole but does not report any pharmacogenomic effect of gene variants on its PK or PD parameters. |
| PGx | Corrêa_2026 | not_relevant | 0 | 0 | The paper focuses on regulatory risk assessment and in silico modeling of structural analogues (safrole, estragole, methyleugenol) without any study of human genetic variation or pharmacogenomic effects on PK/PD parameters. |
| popPK | Cullen_2020 | irrelevant | 0 | 0 | Safrole is mentioned only once as a negative control agent (safrole-2', 3'-oxide) in a review of dietary polyphenols and atherosclerosis, with no kinetic parameters reported. |
| PGx | Gu_2024 | not_relevant | 0 | 0 | The paper focuses on the antifungal mechanism of Cinnamomum cassia essential oil components via molecular docking and metabolomics; it does not report pharmacogenomic effects on PK or PD parameters for safrole. |
| PGx | Hashizume_2010 | not_relevant | 2 | 2 | The text mentions safrole and CYP2D6 but focuses on genotoxicity (micronucleus induction) using enzyme inhibitors and siRNA, not on pharmacogenomic genotype effects on PK or PD parameters. |
| PGx | Hu_2019 | not_relevant | 2 | 1 | The study investigates CYP1A2-mediated metabolic activation and cytotoxicity using chemical inhibitors and inducers in cell cultures, without analyzing human genetic polymorphisms or pharmacogenomic genotypes. |
| PGx | Huang_2009 | not_relevant | 0 | 0 | The paper discusses in vitro CYP inhibition by mushroom derivatives; safrole is mentioned only as a comparator inhibitor, with no mention of gene variants or pharmacogenomic effects on safrole's PK/PD. |
| popPK | Johnson_2000 | irrelevant | 0 | 0 | The paper reports toxicokinetic data for methyleugenol, not safrole; safrole is mentioned only as a structural comparator. |
| popPK | Murray_2012 | irrelevant | 0 | 0 | The paper is a review of MDP chemicals' toxicological actions (CYP modulation) and mentions safrole only as an example of toxicity, providing no quantitative toxicokinetic parameters. |
| popPK | Paini_2021 | relevant | 6 | 3 | The paper uses existing human PBK models for safrole (from Martati et al. 2016) to build a model for methyleugenol, but the specific numeric parameters for safrole are in supplementary files/external references not provided in the text. |
| PGx | Pedroni_2023 | not_relevant | 2 | 1 | The paper is an in-silico molecular modeling study comparing CYP enzymes across different species (interspecies), not investigating human gene variants or genotypes affecting pharmacokinetic parameters. |
| popPK | Reddy_1990 | irrelevant | 0 | 0 | The paper reports DNA adduct levels, which are biomarkers of exposure/effect, not quantitative toxicokinetic parameters such as half-lives, clearance, or partition coefficients. |
| popPK | Rietjens_2005 | irrelevant | 2 | 0 | The paper is a review of mechanisms of action and does not report quantitative toxicokinetic parameters for safrole. |
| popPK | Schecter_2004 | irrelevant | 1 | 8 | The study reports pharmacokinetic parameters (half-life, serum levels) for methyleugenol, with safrole mentioned only as a structural analog in the introduction. |
| PGx | Ueng_2004 | not_relevant | 2 | 5 | The paper identifies CYP enzymes responsible for safrole metabolism but does not analyze the effect of specific gene variants or genotypes on PK/PD parameters. |
| PGx | Ueng_2005 | not_relevant | 2 | 8 | The study characterizes safrole's inhibition of various CYP enzymes in vitro but does not analyze how human genetic variants (genotypes/phenotypes) alter PK/PD parameters of safrole. |
| PGx | Uno_2013 | not_relevant | 0 | 0 |  |
| popPK | Usui_2023 | relevant | 8 | 2 | The paper aims to determine toxicokinetic parameters including biological half-lives for safrole in a human poisoning case, but the specific numeric values for these parameters are not present in the provided evidence. |
| PGx | Yang_2018 | not_relevant | 0 | 0 | The paper discusses mechanism-based inhibition of CYP1A2 by safrole but does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| PGx | Yang_2026 | not_relevant | 0 | 0 | The paper discusses CYP3A4-mediated metabolic activation and structural differences between methyleugenol and safrole, but does not report any pharmacogenomic effects (gene variants/genotypes) on PK or PD parameters. |
| PGx | Zhou_2007 | not_relevant | 0 | 0 | The text discusses metabolic activation and toxicity pathways of safrole and other compounds, but does not report any pharmacogenomic effects on PK or PD parameters. |
| popPK | unknown_2000 | irrelevant | 0 | 0 | The paper focuses on methyleugenol (a structural analog) and does not provide any quantitative toxicokinetic data or parameters for safrole, which is only mentioned as a comparator. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bsafrole%5D&body=Drug%3A%20safrole%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_safrole/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-13 02:01 UTC</sub>
