<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;asunaprevir&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Asunaprevir_Osawa2018_reference&quot;,&quot;label&quot;:&quot;Osawa_2018_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_asunaprevir/Asunaprevir_Osawa2018_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Asunaprevir_Zhu2018_reference&quot;,&quot;label&quot;:&quot;Zhu_2018_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_asunaprevir/Asunaprevir_Zhu2018_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false}]"></div>

# asunaprevir

- **generic name:** asunaprevir
- **ATC codes:** `J05AP06`, `J05AP58`
- **DrugBank:** [DB11586](https://go.drugbank.com/drugs/DB11586) · **PubChem:** [CID 16076883](https://pubchem.ncbi.nlm.nih.gov/compound/16076883)
- **molar mass:** 748.286 g/mol (C35H46ClN5O9S) — DrugBank
- **groups:** approved, withdrawn

## About

Asunaprevir is an antiviral protease inhibitor that was used to treat hepatitis C virus infections. It is no longer in use, having been withdrawn from the market.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q4811881](https://www.wikidata.org/wiki/Q4811881) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| asunaprevir | parent | 748.286 | C35H46ClN5O9S | DrugBank | [16076883](https://pubchem.ncbi.nlm.nih.gov/compound/16076883) | Osawa_2018, Zhu_2018 |

## Start here

> **Osawa_2018_reference** — <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span> Japanese adults with chronic HCV genotype 1 infection, n = 265. [Run it in the simulator](drugs/drug_asunaprevir/Asunaprevir_Osawa2018_reference.md?tab=Simulation) · [record](drugs/drug_asunaprevir/Asunaprevir_Osawa2018_reference.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## Parameters across studies

| parameter | as named | value | unit | as reported | population | n | species | status | record |
|---|---|---|---|---|---|---|---|---|---|
| CL | CL/F | 50.8 | L/h | 50.8 L/h | adults with chronic HCV infection | 1239 | human | <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span> | [Zhu_2018_reference](drugs/drug_asunaprevir/Asunaprevir_Zhu2018_reference.md) |
| V | V1/F | 47.6 | L | 47.6 L | adults with chronic HCV infection | 1239 | human | <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span> | [Zhu_2018_reference](drugs/drug_asunaprevir/Asunaprevir_Zhu2018_reference.md) |
| ka | kabs | 0.484 | 1/h | 0.484 1/h | adults with chronic HCV infection | 1239 | human | <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span> | [Zhu_2018_reference](drugs/drug_asunaprevir/Asunaprevir_Zhu2018_reference.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. Rejected records are left out.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Not simulated" data-sim="yes"></span><span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>stale — current check: Not simulated</sub> | [Osawa_2018_reference](drugs/drug_asunaprevir/Asunaprevir_Osawa2018_reference.md) | ▶ model + simulator | 1-compartment, oral | 3 | Osawa M et al., Population Pharmacokinetic Analysis for…, Journal of clinical pharmac… (2018) | [10.1002/jcph.1274](https://doi.org/10.1002/jcph.1274) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Not simulated" data-sim="yes"></span><span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>stale — current check: Not simulated</sub> | [Zhu_2018_reference](drugs/drug_asunaprevir/Asunaprevir_Zhu2018_reference.md) | ▶ model + simulator | 2-compartment, oral | 7 (+2 cov.) | Zhu L et al., Population Pharmacokinetic Analysis of…, Infectious diseases and the… (2018) | [10.1007/s40121-018-0197-y](https://doi.org/10.1007/s40121-018-0197-y) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=asunaprevir).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | liver | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| absorption | small intestine | `ABCB1` inhibitor/substrate, `SLCO2B1` inhibitor/substrate | DrugBank actor |
| distribution | blood-brain barrier | `ABCB1` inhibitor/substrate | DrugBank actor |
| distribution | placenta | `ABCB1` inhibitor/substrate | DrugBank actor |
| distribution | testis | `ABCB1` inhibitor/substrate | DrugBank actor |
| metabolism | brain | `CYP2D6` inhibitor/substrate | DrugBank actor |
| metabolism | kidney | `CYP3A5` inducer/substrate | DrugBank actor |
| metabolism | liver | `CYP2A6` substrate, `CYP2B6` substrate, `CYP2C19` substrate, `CYP2C9` substrate, `CYP2D6` inhibitor/substrate, `CYP3A4` inducer/substrate, `CYP3A5` inducer/substrate, `SLCO1B1` inhibitor/substrate, `SLCO1B3` inhibitor, `SLCO2B1` inhibitor/substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inducer/substrate, `CYP3A5` inducer/substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | `ABCB1` inhibitor/substrate | DrugBank actor |
| excretion | liver | `ABCB1` inhibitor/substrate | DrugBank actor |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 15:19 | 2:09 | 2/0/0 | 0/0/0 | 0/0/0 | 80,525/14,030 | ollama / glm-5.3-flash | 6 | 0/3 | 6/0 | 0 |

## Coverage

- **PubMed hits:** 14 matched, 14 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 2  ·  needs review 0  ·  rejected 0  ·  stale 2
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Osawa_2019.pdf` | Osawa M et al., Population Pharmacokinetic Analysis of…, Clinical pharmacology in dr… (2019) | popPK | 9 | [10.1002/cpdd.649](https://doi.org/10.1002/cpdd.649) | [30629858](https://pubmed.ncbi.nlm.nih.gov/30629858) | Population PK model of asunaprevir (2-compartment, covariates on clearance) in HCV-infected subjects, but no numeric parameter values (CL, V, Q) appear in the evidence. |

<sub>queue written 2026-10-07 15:17 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Osawa_2019 | relevant | 9 | 2 | Population PK model of asunaprevir (2-compartment, covariates on clearance) in HCV-infected subjects, but no numeric parameter values (CL, V, Q) appear in the evidence. |
| popPK | Ueno_2018 | irrelevant | 3 | 2 | This is an exposure-response (efficacy) analysis; ASV popPK parameters (CL, V) are only referenced as being from a prior/separate popPK model (Osawa manuscript) and no ASV PK parameter values appear in the evidence. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Basunaprevir%5D&body=Drug%3A%20asunaprevir%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_asunaprevir/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · newest extraction 2026-10-07 15:17 UTC</sub>
