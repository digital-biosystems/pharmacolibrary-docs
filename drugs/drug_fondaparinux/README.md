<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B01A&quot;,&quot;href&quot;:&quot;atc/B01A.md&quot;},{&quot;label&quot;:&quot;fondaparinux&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Fondaparinux_Michalikov2022_reference&quot;,&quot;label&quot;:&quot;Michali\u010dkov\u00e1_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_fondaparinux/Fondaparinux_Michalikov2022_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false}]"></div>

# fondaparinux

- **generic name:** fondaparinux
- **ATC codes:** `B01AX05`
- **DrugBank:** [DB00569](https://go.drugbank.com/drugs/DB00569) · **PubChem:** [CID 49852292](https://pubchem.ncbi.nlm.nih.gov/compound/49852292)
- **molar mass:** 1508.263 g/mol (C31H53N3O49S8) — DrugBank
- **groups:** approved, investigational

## About

Fondaparinux is an antithrombotic drug used to treat and prevent blood clots, including pulmonary embolism, thrombosis, thrombophlebitis, and phlebitis. It is an approved antithrombotic, classified among other antithrombotic agents, and has also been studied investigationally.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q27077698](https://www.wikidata.org/wiki/Q27077698) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| fondaparinux | parent | 1508.26 | C31H53N3O49S8 | DrugBank | [49852292](https://pubchem.ncbi.nlm.nih.gov/compound/49852292) | Michaličková_2022 |

## Start here

> **Michaličková_2022_reference** — <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span> dialysis-dependent chronic kidney disease patients, n = ??. [Run it in the simulator](drugs/drug_fondaparinux/Fondaparinux_Michalikov2022_reference.md?tab=Simulation) · [record](drugs/drug_fondaparinux/Fondaparinux_Michalikov2022_reference.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## Parameters across studies

| parameter | as named | value | unit | as reported | population | n | species | status | record |
|---|---|---|---|---|---|---|---|---|---|
| CL | CL | 0.05289 | L/h | 0.05289 L/h | dialysis-dependent chronic kidney disease patients | ?? | human | <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span> | [Michaličková_2022_reference](drugs/drug_fondaparinux/Fondaparinux_Michalikov2022_reference.md) |
| V | V | 5.55 | L | 5.55 L | dialysis-dependent chronic kidney disease patients | ?? | human | <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span> | [Michaličková_2022_reference](drugs/drug_fondaparinux/Fondaparinux_Michalikov2022_reference.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. Rejected records are left out.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Not simulated" data-sim="yes"></span><span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>stale — current check: Not simulated</sub> | [Michaličková_2022_reference](drugs/drug_fondaparinux/Fondaparinux_Michalikov2022_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Michaličková D et al., Population pharmacokinetics-pharmacodyn…, European journal of clinica… (2022) | [10.1007/s00228-021-03201-1](https://doi.org/10.1007/s00228-021-03201-1) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">in vitro</span> | [Chang_2016_coagulation_activity](drugs/drug_fondaparinux/pd_Chang_2016_coagulation_activity.md) | coagulation activity ← fondaparinux · direct sigmoid Emax (Hill) effect | — | Chang JB et al., A novel, rapid method to compare the th…, Scientific reports (2016) | [10.1038/srep29387](https://doi.org/10.1038/srep29387) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=fondaparinux).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: F10 (inhibitor), SERPINC1 (potentiator).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 18:09 | 0:39 | 1/0/0 | 1/0/0 | 0/0/0 | 33,957/2,343 | einfracz / qwen3.8-27b | 3 | 1/2 | 3/0 | 0 |

## Coverage

- **PubMed hits:** 18 matched, 18 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 1  ·  needs_review 0  ·  rejected 0  ·  stale 1
- **scholar-agent fallback query used:** not captured

## Full-text requests

_7 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Delavenne_2010.pdf` | Delavenne X et al., Population pharmacokinetics of fondapar…, Thrombosis and haemostasis (2010) | popPK | 10 | [10.1160/TH10-02-0127](https://doi.org/10.1160/TH10-02-0127) | [20539905](https://pubmed.ncbi.nlm.nih.gov/20539905) | The paper describes a population pharmacokinetic study of fondaparinux in humans, but the evidence provided contains only a qualitative abstract without specific numeric parameter values (CL, V, etc.). |
| `Delavenne_2012.pdf` | Delavenne X et al., Pharmacokinetics of fondaparinux 1.5 mg…, European journal of clinica… (2012) | popPK | 10 | [10.1007/s00228-012-1263-0](https://doi.org/10.1007/s00228-012-1263-0) | [22447298](https://pubmed.ncbi.nlm.nih.gov/22447298) | The study is a population PK analysis of fondaparinux in humans, but the specific numeric parameter estimates (CL, V, ka, etc.) are not listed in the abstract, only predicted exposure differences. |
| `Hanada_2018.pdf` | Hanada K et al., Population pharmacokinetics and pharmac…, International journal of cl… (2018) | popPK | 10 | [10.5414/CP203169](https://doi.org/10.5414/CP203169) | [29595122](https://pubmed.ncbi.nlm.nih.gov/29595122) | The abstract describes a population PK study of fondaparinux in humans and mentions that clearance and volume were significant parameters, but the specific numeric values for these parameters are not provided in the evidence. |
| `Michaličková_2022.pdf` | Michaličková D et al., Population pharmacokinetics-pharmacodyn…, European journal of clinica… (2022) | popPK | 10 | [10.1007/s00228-021-03201-1](https://doi.org/10.1007/s00228-021-03201-1) | [34414464](https://pubmed.ncbi.nlm.nih.gov/34414464) | The paper reports a population PK model for fondaparinux in humans with explicit numeric values for clearance (0.05289 L/h) and volume of distribution (5.55 L) in the abstract/results. |
| `Hester_2014.pdf` | Hester W et al., Thromboprophylaxis with fondaparinux in…, Thrombosis research (2014) | popPK | 8 | [10.1016/j.thromres.2013.11.019](https://doi.org/10.1016/j.thromres.2013.11.019) | [24508189](https://pubmed.ncbi.nlm.nih.gov/24508189) | The study is a pharmacokinetic study of fondaparinux in humans, but the abstract only describes the parameters (clearance, volume, absorption) qualitatively without providing the specific numeric values. |
| `Becattini_2012.pdf` | Becattini C et al., Old and new oral anticoagulants for ven…, Thrombosis research (2012) | pgx | 7 | [10.1016/j.thromres.2011.12.014](https://doi.org/10.1016/j.thromres.2011.12.014) | [22264937](https://www.ncbi.nlm.nih.gov/pubmed/22264937) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Lieu_2002.pdf` | Lieu C et al., Fondaparinux sodium is not metabolised…, Clinical pharmacokinetics (2002) | pgx | 7 | [10.2165/00003088-200241002-00003](https://doi.org/10.2165/00003088-200241002-00003) | [12383041](https://www.ncbi.nlm.nih.gov/pubmed/12383041) | metadata signals extractable PGX data (CYP1A2, PK/PD-context) |

<sub>queue written 2026-10-07T18:09:01.775202+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Becattini_2012 | not_relevant | 0 | 0 | The paper is a general review of oral anticoagulants and mentions fondaparinux only regarding the limitation of parenteral administration, without discussing specific gene variants or pharmacogenomic effects on its PK/PD. |
| popPK | Buyue_2012 | irrelevant | 0 | 0 | The study reports in vitro pharmacodynamic potency (EC50) of fondaparinux, not pharmacokinetic disposition parameters. |
| popPK | Chang_2016 | irrelevant | 0 | 0 | This is an in-vitro pharmacodynamic study measuring Hill coefficients and dose-response relationships, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | Delavenne_2010 | relevant | 10 | 2 | The paper describes a population pharmacokinetic study of fondaparinux in humans, but the evidence provided contains only a qualitative abstract without specific numeric parameter values (CL, V, etc.). |
| popPK | Delavenne_2012 | relevant | 10 | 3 | The study is a population PK analysis of fondaparinux in humans, but the specific numeric parameter estimates (CL, V, ka, etc.) are not listed in the abstract, only predicted exposure differences. |
| popPK | Hanada_2018 | relevant | 10 | 1 | The abstract describes a population PK study of fondaparinux in humans and mentions that clearance and volume were significant parameters, but the specific numeric values for these parameters are not provided in the evidence. |
| popPK | Hester_2014 | relevant | 8 | 0 | The study is a pharmacokinetic study of fondaparinux in humans, but the abstract only describes the parameters (clearance, volume, absorption) qualitatively without providing the specific numeric values. |
| PGx | Lieu_2002 | not_relevant | 0 | 0 | The study investigates in vitro hepatic metabolism and CYP inhibition but does not report any pharmacogenomic effects (gene variants/genotypes) on PK or PD parameters. |
| popPK | Michaličková_2022_2 | irrelevant | 0 | 0 | The provided text is an erratum correcting citation references in a table and does not contain any original pharmacokinetic data or parameter values for fondaparinux. |
| PGx | Peixoto_2020 | not_relevant | 1 | 1 | The paper focuses on drug-drug interactions with antineoplastic agents, not pharmacogenomic variants affecting fondaparinux. |
| popPK | Turpie_2009 | irrelevant | 3 | 0 | The paper describes a PK simulation and clinical efficacy analysis but does not report original quantitative PK parameters (CL, V, ka) for fondaparinux in the provided text. |
| PGx | Weitz_2010 | not_relevant | 0 | 0 | The text only mentions fondaparinux to describe the general drawbacks of parenteral anticoagulants in comparison to new oral agents, without detailing any pharmacogenomic effects on its pharmacokinetics or pharmacodynamics. |
| PGx | Weitz_2011 | not_relevant | 0 | 0 | The text only mentions fondaparinux in the context of current limitations to justify the development of new oral anticoagulants, without reporting any pharmacogenomic effects on its PK or PD parameters. |
| popPK | Zufferey_2018 | irrelevant | 3 | 0 | This is a clinical outcomes/simulation study focused on bleeding risk rather than a primary pharmacokinetic study, and it lacks any specific PK parameter values (CL, V, etc.) in the evidence. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-07 18:09 UTC</sub>
