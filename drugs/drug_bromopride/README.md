<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A03F&quot;,&quot;href&quot;:&quot;atc/A03F.md&quot;},{&quot;label&quot;:&quot;bromopride&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Bromopride_LachiSilva2020_reference&quot;,&quot;label&quot;:&quot;Lachi-Silva_2020_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_bromopride/Bromopride_LachiSilva2020_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false}]"></div>

# bromopride

- **generic name:** bromopride
- **ATC codes:** `A03FA04`
- **DrugBank:** [DB09018](https://go.drugbank.com/drugs/DB09018) · **PubChem:** [CID 2446](https://pubchem.ncbi.nlm.nih.gov/compound/2446)
- **molar mass:** 344.247 g/mol (C14H22BrN3O2) — DrugBank
- **groups:** investigational

## About

Bromopride is a dopamine antagonist antiemetic and propulsive drug used to treat indigestion and other functional gastrointestinal problems. It is not approved in major markets such as the European Union or the United States and is considered investigational, though it has been used in some countries, mainly in Latin America.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q1958189](https://www.wikidata.org/wiki/Q1958189) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| bromopride | parent | 344.247 | C14H22BrN3O2 | DrugBank | [2446](https://pubchem.ncbi.nlm.nih.gov/compound/2446) | Lachi-Silva_2020 |

## Start here

> **Lachi-Silva_2020_reference** — <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span> healthy adults. [Run it in the simulator](drugs/drug_bromopride/Bromopride_LachiSilva2020_reference.md?tab=Simulation) · [record](drugs/drug_bromopride/Bromopride_LachiSilva2020_reference.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## Parameters across studies

| parameter | as named | value | unit | as reported | population | species | status | record |
|---|---|---|---|---|---|---|---|---|
| CL | CL | 46.8 | L/h | 46.8 L/h | healthy adults | human | <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span> | [Lachi-Silva_2020_reference](drugs/drug_bromopride/Bromopride_LachiSilva2020_reference.md) |
| V | V | 230 | L | 230 l | healthy adults | human | <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span> | [Lachi-Silva_2020_reference](drugs/drug_bromopride/Bromopride_LachiSilva2020_reference.md) |
| ka | kabs | 0.08 | 1/h | 0.08 h - 1 | healthy adults | human | <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span> | [Lachi-Silva_2020_reference](drugs/drug_bromopride/Bromopride_LachiSilva2020_reference.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. Rejected records are left out.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Not simulated" data-sim="yes"></span><span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>stale — current check: Not simulated</sub> | [Lachi-Silva_2020_reference](drugs/drug_bromopride/Bromopride_LachiSilva2020_reference.md) | ▶ model + simulator | 1-compartment, oral | 5 | Lachi-Silva L et al., Population pharmacokinetics of orally a…, European journal of pharmac… (2020) | [10.1016/j.ejps.2019.105081](https://doi.org/10.1016/j.ejps.2019.105081) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=bromopride).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: DRD2 (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-04 13:38 | 2:16 | 1/0/0 | 0/0/0 | 0/0/0 | 19,927/5,933 | ollama / qwen3.8:27b-mtp-q8_0 | 0 | 0/0 | 0/0 | 0 |

## Coverage

- **PubMed hits:** 6 matched, 6 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 1  ·  extracted 1  ·  needs review 0  ·  rejected 0  ·  stale 1
- **scholar-agent fallback query used:** not captured

## Full-text requests

_3 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Brodie_1986.pdf` | Brodie RR et al., Pharmacokinetics and bioavailability of…, Biopharmaceutics & drug dis… (1986) | popPK | 10 | [10.1002/bdd.2510070302](https://doi.org/10.1002/bdd.2510070302) | [3730521](https://pubmed.ncbi.nlm.nih.gov/3730521) | The abstract explicitly reports quantitative pharmacokinetic parameters (clearance, volume of distribution, half-life) for bromopride in human subjects. |
| `Jung_1982.pdf` | Jung L et al., [Bromopride: pharmacokinetics in dogs (…, Arzneimittel-Forschung (1982) | popPK | 10 |  | [7201828](https://pubmed.ncbi.nlm.nih.gov/7201828) | The study reports pharmacokinetic parameters for bromopride in dogs, but the specific numeric values are not present in the provided evidence. |
| `Lachi-Silva_2020.pdf` | Lachi-Silva L et al., Population pharmacokinetics of orally a…, European journal of pharmac… (2020) | popPK | 10 | [10.1016/j.ejps.2019.105081](https://doi.org/10.1016/j.ejps.2019.105081) | [31669384](https://pubmed.ncbi.nlm.nih.gov/31669384) | The paper reports a population pharmacokinetic model for bromopride with explicit numeric values for clearance, volume of distribution, and absorption parameters in the abstract. |

<sub>queue written 2026-10-04 13:36 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PD | Blanes_1991 | not_relevant | 0 | 0 | The paper reports in vitro transdermal permeation parameters (Kp, lag time, flux), which are physicochemical/transport properties, not pharmacodynamic exposure- or dose-response relationships. |
| PD | Brodie_1986 | not_relevant | 0 | 0 | The paper reports only pharmacokinetic parameters (clearance, volume, half-life, bioavailability) and dose-proportional plasma concentrations, with no pharmacodynamic or exposure-response data. |
| popPK | Jung_1982 | relevant | 10 | 0 | The study reports pharmacokinetic parameters for bromopride in dogs, but the specific numeric values are not present in the provided evidence. |
| PD | Lachi-Silva_2020 | not_relevant | 0 | 0 | The paper reports population pharmacokinetic (PK) parameters only and does not contain any pharmacodynamic (PD) or exposure-response data. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bbromopride%5D&body=Drug%3A%20bromopride%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_bromopride/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · newest extraction 2026-10-04 13:36 UTC</sub>
