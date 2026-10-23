<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;G03D&quot;,&quot;href&quot;:&quot;atc/G03D.md&quot;},{&quot;label&quot;:&quot;hydroxyprogesterone&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Hydroxyprogesterone_AlKofahi2021_reference&quot;,&quot;label&quot;:&quot;Al-Kofahi_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_hydroxyprogesterone/Hydroxyprogesterone_AlKofahi2021_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# hydroxyprogesterone

- **generic name:** hydroxyprogesterone
- **ATC codes:** `G03DA03`, `G03FA02`
- **DrugBank:** [DB14570](https://go.drugbank.com/drugs/DB14570) · **PubChem:** none
- **molar mass:** 330.4611 g/mol (C21H30O3) — DrugBank
- **groups:** investigational

## About

Hydroxyprogesterone (17α-hydroxyprogesterone) is a progestogen steroid that has been used or studied for conditions such as endometriosis, amenorrhea, and uterine cancer. It is currently considered investigational and is not an approved medicine in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q175901](https://www.wikidata.org/wiki/Q175901) and the WHO ATC classification; not checked by a person.</small>

## Start here

> **Al-Kofahi_2021_reference** — <span class="pk-badge pk-badge--orange">Needs review</span> review reference. [Run it in the simulator](drugs/drug_hydroxyprogesterone/Hydroxyprogesterone_AlKofahi2021_reference.md?tab=Simulation) · [record](drugs/drug_hydroxyprogesterone/Hydroxyprogesterone_AlKofahi2021_reference.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## Parameters across studies

| parameter | as named | value | unit | as reported | population | species | status | record |
|---|---|---|---|---|---|---|---|---|
| CL | CL/F | 11.7 | L/h | 11.7 L/h | review reference | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Al-Kofahi_2021_reference](drugs/drug_hydroxyprogesterone/Hydroxyprogesterone_AlKofahi2021_reference.md) |
| V | V/F | 17 | L | 17.0 L | review reference | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Al-Kofahi_2021_reference](drugs/drug_hydroxyprogesterone/Hydroxyprogesterone_AlKofahi2021_reference.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. Rejected records are left out.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="unknown" data-status="Needs review" data-sim="yes"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: unreported model parameter default(s): ka</sub> | [Al-Kofahi_2021_reference](drugs/drug_hydroxyprogesterone/Hydroxyprogesterone_AlKofahi2021_reference.md) | ▶ model + simulator | 1-compartment, oral | 2 | Al-Kofahi M et al., An integrated PK-PD model for cortisol…, British journal of clinical… (2021) | [10.1111/bcp.14470](https://doi.org/10.1111/bcp.14470) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Sharma_2016_reference](drugs/drug_hydroxyprogesterone/Hydroxyprogesterone_Sharma2016_reference.md) | — | 1-compartment (no model) | 0 | Sharma S et al., Population pharmacokinetics of 17α-hydr…, British journal of clinical… (2016) | [10.1111/bcp.12990](https://doi.org/10.1111/bcp.12990) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=hydroxyprogesterone).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 08:44 | 3:12 | 1/1/0 | 0/0/0 | 0/0/0 | 146,316/11,138 | einfracz / qwen3.8-27b | 5 | 1/4 | 5/0 | 0 |

## Coverage

- **PubMed hits:** 22 matched, 18 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 2  ·  extracted 0  ·  needs review 1  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_4 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Della_2019.pdf` | Della Torre M et al., Pharmacokinetics of 17 alpha hydroxypro…, American journal of obstetr… (2019) | popPK | 10 | [10.1016/j.ajogmf.2019.100051](https://doi.org/10.1016/j.ajogmf.2019.100051) | [33345841](https://pubmed.ncbi.nlm.nih.gov/33345841) | This is a population pharmacokinetic study of 17-alpha hydroxyprogesterone caproate in humans, but the specific numeric parameter estimates (clearance, volume, ka) are not provided in the text evidence. |
| `Sharma_2016.pdf` | Sharma S et al., Population pharmacokinetics of 17α-hydr…, British journal of clinical… (2016) | popPK | 9 | [10.1111/bcp.12990](https://doi.org/10.1111/bcp.12990) | [27133963](https://pubmed.ncbi.nlm.nih.gov/27133963) | The paper reports a population pharmacokinetic study of 17α-hydroxyprogesterone caproate (17-OHPC), the primary prodrug/metabolite system for hydroxyprogesterone therapy, with specific numeric parameter values (CL/F, V/F) explicitly provided in the abstract. |
| `Shaik_2016.pdf` | Shaik IH et al., Route of administration and formulation…, Xenobiotica; the fate of fo… (2016) | popPK | 8 | [10.3109/00498254.2015.1057547](https://doi.org/10.3109/00498254.2015.1057547) | [26153441](https://pubmed.ncbi.nlm.nih.gov/26153441) | The study reports PK parameters for 17-hydroxyprogesterone caproate in rats, providing specific half-life and bioavailability values, but lacks other quantitative parameters like CL or V in the text. |
| `Melin_2020.pdf` | Melin J et al., Pharmacokinetic/Pharmacodynamic Evaluat…, The Journal of clinical end… (2020) | popPK | 5 | [10.1210/clinem/dgaa071](https://doi.org/10.1210/clinem/dgaa071) | [32052005](https://pubmed.ncbi.nlm.nih.gov/32052005) | The study models 17-hydroxyprogesterone (17-OHP) as a biomarker/metabolite response to hydrocortisone (the parent drug) in a PK/PD framework, but no numeric PK parameter values for 17-OHP itself (e.g., clearance, volume) are present in the evidence. |

<sub>queue written 2026-10-07 08:42 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Al-Kofahi_2021 | irrelevant | 2 | 2 | The study focuses on cortisol pharmacokinetics and 17-hydroxyprogesterone pharmacodynamics in CAH, not the pharmacokinetics of the drug hydroxyprogesterone (19-nor-17-alpha-hydroxyprogesterone caproate). |
| popPK | Della_2019 | relevant | 10 | 3 | This is a population pharmacokinetic study of 17-alpha hydroxyprogesterone caproate in humans, but the specific numeric parameter estimates (clearance, volume, ka) are not provided in the text evidence. |
| popPK | Evans_2021 | irrelevant | 0 | 0 | The study measures 17α-hydroxyprogesterone levels as a biomarker in an observational pain/immune study but does not report pharmacokinetic parameters (CL, V, etc.) for hydroxyprogesterone or any specific hydroxyprogesterone compound. |
| popPK | Lawrence_2026 | irrelevant | 0 | 0 | The study analyzes growth patterns (height, weight, BMI) in children with Congenital Adrenal Hyperplasia and treats 17-hydroxyprogesterone merely as a disease control biomarker, reporting no pharmacokinetic parameters for the drug itself. |
| popPK | Lenasi_2002 | irrelevant | 0 | 0 | The paper reports in vitro binding and G-protein activation data for progesterone (not hydroxyprogesterone) in a fungus, with no pharmacokinetic disposition parameters. |
| popPK | Liu_2024 | irrelevant | 0 | 0 | The study is an in vitro receptor binding/activation assay and does not report pharmacokinetic parameters for hydroxyprogesterone. |
| popPK | Luconi_1998 | irrelevant | 0 | 0 | The study investigates receptor binding and intracellular signaling of progesterone and its analogs in sperm, reporting Kd and EC50 values, but does not report pharmacokinetic disposition parameters (CL, V, ka, t1/2) for hydroxyprogesterone. |
| popPK | McMaster_2008 | irrelevant | 0 | 0 | This is an in-vitro mechanistic study measuring gene transcription (IL-6 luciferase activity) in cell lines, not a pharmacokinetic study of hydroxyprogesterone disposition. |
| popPK | Melin_2020 | relevant | 5 | 0 | The study models 17-hydroxyprogesterone (17-OHP) as a biomarker/metabolite response to hydrocortisone (the parent drug) in a PK/PD framework, but no numeric PK parameter values for 17-OHP itself (e.g., clearance, volume) are present in the evidence. |
| popPK | Pannuti_1982 | irrelevant | 0 | 0 | The study reports pharmacokinetics for medroxyprogesterone acetate (MAP), not hydroxyprogesterone; while MAP is a derivative, it is a distinct chemical entity with different absorption/metabolism kinetics, and no hydroxyprogesterone data are provided. |
| popPK | Pijnenburg-Kleizen_2015 | irrelevant | 0 | 0 | This is an in-vitro mechanistic study assessing receptor binding and transactivation, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | Shaik_2016 | relevant | 8 | 3 | The study reports PK parameters for 17-hydroxyprogesterone caproate in rats, providing specific half-life and bioavailability values, but lacks other quantitative parameters like CL or V in the text. |
| popPK | Simons_2021 | irrelevant | 0 | 0 | The paper is a study protocol for a long-term neurodevelopmental follow-up of children exposed to 17α-hydroxyprogesterone in utero, and does not report any pharmacokinetic parameters (e.g., clearance, volume, half-life). |
| popPK | van_2012 | irrelevant | 0 | 0 | The study is an in vitro investigation of antifungal effects on steroidogenesis, not a pharmacokinetic study of hydroxyprogesterone disposition. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bhydroxyprogesterone%5D&body=Drug%3A%20hydroxyprogesterone%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_hydroxyprogesterone/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · newest extraction 2026-10-07 08:42 UTC</sub>
