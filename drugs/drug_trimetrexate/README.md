<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P01A&quot;,&quot;href&quot;:&quot;atc/P01A.md&quot;},{&quot;label&quot;:&quot;trimetrexate&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Trimetrexate_Grochow1989_reference&quot;,&quot;label&quot;:&quot;Grochow_1989_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_trimetrexate/Trimetrexate_Grochow1989_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false}]"></div>

# trimetrexate

- **generic name:** trimetrexate
- **ATC codes:** `P01AX07`
- **DrugBank:** [DB01157](https://go.drugbank.com/drugs/DB01157) · **PubChem:** [CID 5583](https://pubchem.ncbi.nlm.nih.gov/compound/5583)
- **molar mass:** 369.4176 g/mol (C19H23N5O3) — DrugBank
- **groups:** approved

## About

Trimetrexate is a folic acid antagonist used to treat pneumonia caused by Pneumocystis. It is given by intravenous injection. The drug is approved for clinical use.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q126677485](https://www.wikidata.org/wiki/Q126677485), DrugBank's routes and dosage forms and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| trimetrexate | parent | 369.418 | C19H23N5O3 | DrugBank | [5583](https://pubchem.ncbi.nlm.nih.gov/compound/5583) | Grochow_1989, Grochow_1989_2 |

## Start here

> **Grochow_1989_reference** — <span class="pk-badge pk-badge--blue">Simulated</span> patients with advanced solid tumors. [Run it in the simulator](drugs/drug_trimetrexate/Trimetrexate_Grochow1989_reference.md?tab=Simulation) · [record](drugs/drug_trimetrexate/Trimetrexate_Grochow1989_reference.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Simulated" data-sim="yes"></span><span class="pk-badge pk-badge--blue">Simulated</span> | [Grochow_1989_reference](drugs/drug_trimetrexate/Trimetrexate_Grochow1989_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Grochow LB et al., Phase I trial of trimetrexate glucurona…, Journal of the National Can… (1989) | [10.1093/jnci/81.2.124](https://doi.org/10.1093/jnci/81.2.124) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub> | [Grochow_1989_2_reference](drugs/drug_trimetrexate/Trimetrexate_Grochow1989v2_reference.md) | — | general linear (no model) | 1 | Grochow LB et al., A phase I trial of trimetrexate glucuro…, Cancer chemotherapy and pha… (1989) | [10.1007/BF00304765](https://doi.org/10.1007/BF00304765) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Lee_2010_cell_growth_inhibition](drugs/drug_trimetrexate/pd_Lee_2010_cell_growth_inhibition.md) | cell growth inhibition ← trimetrexate · direct Emax (saturable) effect | — | Lee JJ et al., Emax model and interaction index for as…, Frontiers in bioscience (El… (2010) | [10.2741/e116](https://doi.org/10.2741/e116) |
| <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [White_2003_inhibition_of_cancer_cell_growth](drugs/drug_trimetrexate/pd_White_2003_inhibition_of_cancer_cell_growth.md) | inhibition of cancer cell growth ← Trimetrexate, LY309887, and Tomudex · direct sigmoid Emax (Hill) effect | — | White DB et al., A new nonlinear mixture response surfac…, Current drug metabolism (2003) | [10.2174/1389200033489316](https://doi.org/10.2174/1389200033489316) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-24 05:25 | 0:11 | 1/1/0 | 1/1/0 | 0/0/0 | 5,810/1,432 | einfracz / qwen3.8-27b | 1 | 0/0 | 1/0 | 0 |

## Coverage

- **PubMed hits:** 11 matched, 11 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 1  ·  needs review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Lee_2010.pdf` | Lee JJ et al., Emax model and interaction index for as…, Frontiers in bioscience (El… (2010) | pd | 4 | [10.2741/e116](https://doi.org/10.2741/e116) | [20036904](https://www.ncbi.nlm.nih.gov/pubmed/20036904) | metadata signals extractable PD data (Emax) |

<sub>queue written 2026-11-24 05:25 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bram_2006 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on drug resistance mechanisms (ABCG2 efflux) and does not report pharmacokinetic parameters like clearance or volume for trimetrexate. |
| PGx | Bram_2006 | not_relevant | 4 | 5 | The study is an in vitro cellular resistance assay measuring growth inhibition (a functional assay), not a human clinical pharmacokinetic or pharmacodynamic parameter of trimetrexate. |
| PGx | Grochow_1989 | not_relevant | 0 | 0 | The paper reports standard PK/PD pharmacology of trimetrexate but does not investigate or report any gene variant or pharmacogenomic effects. |
| PGx | Grochow_1989_2 | not_relevant | 0 | 0 | The study reports general clinical pharmacology and dose-toxicity correlations but does not investigate or report any pharmacogenomic effects (gene variants) on trimetrexate PK or PD. |
| popPK | Hattinger_2017 | irrelevant | 1 | 0 | The paper is a pharmacogenomics review discussing genetic biomarkers for drug response and toxicity, and does not report quantitative pharmacokinetic parameters (such as clearance, volume, or half-life) for trimetrexate. |
| PGx | Hattinger_2017 | not_relevant | 2 | 0 | The text is a review summary regarding methotrexate and mentions trimetrexate only as a context for second-line therapy, without reporting specific pharmacogenomic effects on trimetrexate's PK/PD parameters. |
| popPK | Hooijberg_2003 | irrelevant | 0 | 0 | This is an in vitro mechanistic study on folate homeostasis where trimetrexate is used as a tool compound (DHFR inhibitor) rather than as the subject of a pharmacokinetic analysis. |
| PGx | Hooijberg_2003 | not_relevant | 0 | 0 | The study investigates MRP-mediated folate homeostasis and the impact of trimetrexate on cellular growth in transfected cells, not the pharmacokinetics or pharmacodynamics of trimetrexate itself. |
| popPK | Lee_2010 | irrelevant | 1 | 0 | The paper describes an in-vitro drug interaction study using an Emax model, not a pharmacokinetic study with disposition parameters like CL, V, or ka. |
| PGx | Lee_2010 | not_relevant | 0 | 0 | The paper reports on drug-drug interaction and folic acid effects on trimetrexate potency, but does not involve any genetic variants or pharmacogenomic factors. |
| popPK | Takemura_1996 | irrelevant | 0 | 0 | The study focuses on the cellular pharmacology and intracellular metabolism of ZD1694 in human leukemia cell lines, using trimetrexate only as a comparator for resistance mechanisms, and contains no population pharmacokinetic parameters for trimetrexate. |
| PGx | Takemura_1996 | not_relevant | 0 | 0 | The paper reports on cell line resistance mechanisms to a different drug (ZD1694) and does not report pharmacogenomic effects on the PK/PD parameters of trimetrexate. |
| popPK | Takemura_2001 | irrelevant | 0 | 0 | The paper discusses in vitro resistance mechanisms and molecular biology of antifolates, containing no pharmacokinetic disposition parameters (CL, V, etc.) for trimetrexate. |
| PGx | Takemura_2001 | not_relevant | 0 | 0 | The paper discusses general antifolate resistance mechanisms (e.g., DHFR amplification) and the design of analogues like trimetrexate to overcome resistance, but it does not report a specific pharmacogenomic effect of a defined human gene variant on a specific PK or PD parameter of trimetrexate. |
| popPK | White_2003 | irrelevant | 0 | 0 | The study is an in vitro cell growth assay focused on response surface modeling of drug synergism, not a pharmacokinetic study reporting disposition parameters for trimetrexate. |
| PGx | White_2003 | not_relevant | 0 | 0 | The paper describes statistical modeling of drug synergism in vitro and does not investigate any pharmacogenomic effects on PK or PD parameters. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Btrimetrexate%5D&body=Drug%3A%20trimetrexate%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_trimetrexate/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-24 05:19 UTC</sub>
