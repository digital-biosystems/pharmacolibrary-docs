<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L02A&quot;,&quot;href&quot;:&quot;atc/L02A.md&quot;},{&quot;label&quot;:&quot;bicalutamide&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Bicalutamide_Ozaksun2025_reference&quot;,&quot;label&quot;:&quot;Ozaksun_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_bicalutamide/Bicalutamide_Ozaksun2025_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# bicalutamide

- **generic name:** bicalutamide
- **ATC codes:** `L02AE51`, `L02BB03`
- **DrugBank:** [DB01128](https://go.drugbank.com/drugs/DB01128) · **PubChem:** [CID 2375](https://pubchem.ncbi.nlm.nih.gov/compound/2375)
- **molar mass:** 430.373 g/mol (C18H14F4N2O4S) — DrugBank
- **groups:** approved, investigational

## About

Bicalutamide is an antiandrogen medicine used to treat prostate cancer. It is an approved, widely used drug and is included on the WHO list of essential medicines.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q1988832](https://www.wikidata.org/wiki/Q1988832) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| bicalutamide | parent | 430.373 | C18H14F4N2O4S | DrugBank | [2375](https://pubchem.ncbi.nlm.nih.gov/compound/2375) | Ozaksun_2025 |

## Start here

> **Ozaksun_2025_reference** — <span class="pk-badge pk-badge--green">Reproduces paper</span> healthy males, n = 5. [Run it in the simulator](drugs/drug_bicalutamide/Bicalutamide_Ozaksun2025_reference.md?tab=Simulation) · [record](drugs/drug_bicalutamide/Bicalutamide_Ozaksun2025_reference.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## Parameters across studies

| parameter | as named | value | unit | as reported | population | n | species | status | record |
|---|---|---|---|---|---|---|---|---|---|
| V | V/F | 55.95 | L | 55948 mL | healthy males | 5 | human | <span class="pk-badge pk-badge--green">Reproduces paper</span> | [Ozaksun_2025_reference](drugs/drug_bicalutamide/Bicalutamide_Ozaksun2025_reference.md) |
| ka | kabs | 0.0485 | 1/h | 0.0485 1/h | healthy males | 5 | human | <span class="pk-badge pk-badge--green">Reproduces paper</span> | [Ozaksun_2025_reference](drugs/drug_bicalutamide/Bicalutamide_Ozaksun2025_reference.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. Rejected records are left out.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Reproduces paper" data-sim="yes"></span><span class="pk-badge pk-badge--green">Reproduces paper</span> | [Ozaksun_2025_reference](drugs/drug_bicalutamide/Bicalutamide_Ozaksun2025_reference.md) | ▶ model + simulator | 1-compartment, oral | 3 | Ozaksun NT et al., Developing In Vitro-In Vivo Correlation…, Pharmaceutics (2025) | [10.3390/pharmaceutics17091126](https://doi.org/10.3390/pharmaceutics17091126) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.50).">human + animal</span> | [Tsoi_2025_EC50](drugs/drug_bicalutamide/pd_Tsoi_2025_EC50.md) | DOX resistance biomarker turnover ← bicalutamide | — | Tsoi H et al., BQ323636.1 Employs the AR-CCRK Axis to…, Cells (2025) | [10.3390/cells14171341](https://doi.org/10.3390/cells14171341) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=bicalutamide).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | `ABCB1` inhibitor | DrugBank actor |
| distribution | blood-brain barrier | `ABCB1` inhibitor | DrugBank actor |
| distribution | placenta | `ABCB1` inhibitor | DrugBank actor |
| distribution | testis | `ABCB1` inhibitor | DrugBank actor |
| metabolism | brain | `CYP2D6` inhibitor | DrugBank actor |
| metabolism | liver | `CYP2C19` inhibitor, `CYP2C9` inhibitor, `CYP2D6` inhibitor, `CYP3A4` inhibitor/substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inhibitor/substrate | DrugBank actor |
| excretion | kidney | `ABCB1` inhibitor | DrugBank actor |
| excretion | liver | `ABCB1` inhibitor | DrugBank actor |
| — | prostate gland | `AR` target | DrugBank actor |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 21:56 | 0:36 | 1/0/0 | 1/0/0 | 0/0/0 | 69,566/2,170 | einfracz / qwen3.8-27b | 2 | 0/2 | 2/0 | 0 |

## Coverage

- **PubMed hits:** 10 matched, 10 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 1  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Chen_2005 | irrelevant | 0 | 0 | The study focuses on the receptor binding affinities (Ki) and pharmacological effects of DHEA, mentioning bicalutamide only as a qualitative comparator, with no pharmacokinetic parameters reported for bicalutamide. |
| popPK | Colabufo_2008 | irrelevant | 0 | 0 | The study investigates in vitro cytotoxicity and drug transporter mechanisms in cancer cell lines, not pharmacokinetic disposition parameters. |
| popPK | Jamróz_2020 | irrelevant | 0 | 0 | The paper focuses on the preparation and dissolution characterization of 3D-printed tablets (in vitro) and does not report in vivo pharmacokinetic parameters such as clearance, volume, or half-life for bicalutamide. |
| popPK | Ma_2003 | irrelevant | 0 | 0 | The study is an in-vitro cell assay investigating the androgen receptor activity of UV filters, with bicalutamide serving only as a positive control and providing no pharmacokinetic disposition parameters. |
| popPK | Myint_2020 | irrelevant | 0 | 0 | This is a systematic review and meta-analysis of fall and fracture risks, not a pharmacokinetic study, and bicalutamide is only mentioned as a potential control agent. |
| popPK | Ozers_2007 | irrelevant | 0 | 0 | This is an in-vitro mechanistic study of androgen receptor binding that uses bicalutamide as a ligand, not a pharmacokinetic study. |
| popPK | Tsoi_2025 | irrelevant | 0 | 0 | The paper is an in-vitro and in-vivo mechanistic study on breast cancer resistance where bicalutamide is used as an androgen receptor inhibitor tool compound, not as a subject of pharmacokinetic analysis. |
| popPK | Wang_1998 | irrelevant | 0 | 0 | The study is an in-vitro receptor binding assay using bicalutamide as a comparator/positive control, not a pharmacokinetic study. |
| popPK | Xie_2007 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of VIP signaling and androgen receptor transactivation, using bicalutamide only as a tool compound (AR antagonist) rather than characterizing its pharmacokinetics. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-06 21:55 UTC</sub>
