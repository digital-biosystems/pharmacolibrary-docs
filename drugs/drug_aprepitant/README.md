<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A04A&quot;,&quot;href&quot;:&quot;atc/A04A.md&quot;},{&quot;label&quot;:&quot;aprepitant&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Aprepitant_Nijstad2023_reference&quot;,&quot;label&quot;:&quot;Nijstad_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_aprepitant/Aprepitant_Nijstad2023_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false}]"></div>

# aprepitant

- **generic name:** aprepitant
- **ATC codes:** `A04AD12`
- **DrugBank:** [DB00673](https://go.drugbank.com/drugs/DB00673) · **PubChem:** none
- **groups:** approved, investigational

## About

Aprepitant is an antiemetic (an NK1 receptor antagonist) used to prevent nausea and vomiting, including chemotherapy-induced and postoperative nausea and vomiting. It is authorised in the European Union and is widely used, mainly in cancer care to help control vomiting caused by treatment.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q621834](https://www.wikidata.org/wiki/Q621834) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| aprepitant | parent | 534.432 | C23H21F7N4O3 | PubChem | [135413536](https://pubchem.ncbi.nlm.nih.gov/compound/135413536) | Nakade_2008, Nijstad_2023 |

## Start here

> **Nijstad_2023_reference** — <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span> pediatric patients, n = &gt;=49. [Run it in the simulator](drugs/drug_aprepitant/Aprepitant_Nijstad2023_reference.md?tab=Simulation) · [record](drugs/drug_aprepitant/Aprepitant_Nijstad2023_reference.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## Parameters across studies

| parameter | as named | value | unit | as reported | population | n | species | status | record |
|---|---|---|---|---|---|---|---|---|---|
| CL | CL | 5.83 | L/h | 5.83 L/h | pediatric patients | &gt;=49 | human | <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span> | [Nijstad_2023_reference](drugs/drug_aprepitant/Aprepitant_Nijstad2023_reference.md) |
| V | V | 86.8 | L | 86.8 L | pediatric patients | &gt;=49 | human | <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span> | [Nijstad_2023_reference](drugs/drug_aprepitant/Aprepitant_Nijstad2023_reference.md) |
| F | Fab | 0.83 |  | 83 | pediatric patients | &gt;=49 | human | <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span> | [Nijstad_2023_reference](drugs/drug_aprepitant/Aprepitant_Nijstad2023_reference.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. Rejected records are left out.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="mixed" data-status="Not simulated" data-sim="yes"></span><span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>stale — current check: Not simulated</sub> | [Nijstad_2023_reference](drugs/drug_aprepitant/Aprepitant_Nijstad2023_reference.md) | ▶ model + simulator | 1-compartment, IV | 4 | Nijstad AL et al., A simple extemporaneous oral suspension…, Journal of oncology pharmac… (2023) | [10.1177/10781552221089243](https://doi.org/10.1177/10781552221089243) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>stale — current check: Rejected</sub><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub> | [Nakade_2008_reference](drugs/drug_aprepitant/Aprepitant_Nakade2008_reference.md) | — | 1-compartment (no model) | 5 | Nakade S et al., Population pharmacokinetics of aprepita…, Cancer chemotherapy and pha… (2008) | [10.1007/s00280-008-0713-y](https://doi.org/10.1007/s00280-008-0713-y) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=aprepitant).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | `CYP2C19` inhibitor/substrate, `CYP2C9` inducer/inhibitor, `CYP3A4` inducer/inhibitor/substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inducer/inhibitor/substrate | DrugBank actor |

<sub>Actors without a tissue in the table: TACR1 (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-04 13:47 | 4:54 | 1/1/0 | 0/0/0 | 0/0/0 | 64,208/15,509 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 1/0 | 1/0 | 0 |

## Coverage

- **PubMed hits:** 12 matched, 12 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 1  ·  needs review 0  ·  rejected 1  ·  stale 2
- **scholar-agent fallback query used:** not captured

## Full-text requests

_3 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Chain_2020.pdf` | Chain A et al., Modeling and Simulation Analysis of Apr…, The journal of pediatric ph… (2020) | popPK | 10 | [10.5863/1551-6776-25.6.528](https://doi.org/10.5863/1551-6776-25.6.528) | [32839657](https://pubmed.ncbi.nlm.nih.gov/32839657) | The paper describes a population PK model for aprepitant in pediatric patients, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence text. |
| `Nakade_2008.pdf` | Nakade S et al., Population pharmacokinetics of aprepita…, Cancer chemotherapy and pha… (2008) | popPK | 10 | [10.1007/s00280-008-0713-y](https://doi.org/10.1007/s00280-008-0713-y) | [18317761](https://pubmed.ncbi.nlm.nih.gov/18317761) | The paper reports a population pharmacokinetic model for aprepitant with explicit numeric values for CL/F, Vd/F, Ka, and lag time in the abstract. |
| `Shono_2010.pdf` | Shono Y et al., Forecasting in vivo oral absorption and…, European journal of pharmac… (2010) | popPK | 8 | [10.1016/j.ejpb.2010.05.009](https://doi.org/10.1016/j.ejpb.2010.05.009) | [20576487](https://pubmed.ncbi.nlm.nih.gov/20576487) | The study reports a PBPK model for aprepitant in humans, but specific numeric parameter values (CL, V, ka) are not explicitly listed in the provided text, likely residing in figures or supplementary data. |

<sub>queue written 2026-10-04 13:43 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Chain_2020 | relevant | 10 | 0 | The paper describes a population PK model for aprepitant in pediatric patients, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence text. |
| popPK | Imbs_2016 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of pazopanib and cisplatin, with aprepitant mentioned only as a co-administered antiemetic agent potentially causing interaction, not as the subject of PK parameter estimation. |
| popPK | Nijstad_2022 | irrelevant | 2 | 0 | The study focuses on the pharmacokinetics of dexamethasone and the effect of aprepitant on it, rather than reporting quantitative disposition parameters for aprepitant itself. |
| popPK | Shadle_2012 | irrelevant | 2 | 0 | The study is a bioequivalence assessment reporting AUC ratios and P-values, but does not provide quantitative disposition parameters (CL, V, ka, t1/2) for aprepitant. |
| popPK | Shono_2010 | relevant | 8 | 2 | The study reports a PBPK model for aprepitant in humans, but specific numeric parameter values (CL, V, ka) are not explicitly listed in the provided text, likely residing in figures or supplementary data. |
| popPK | Valentin_2023 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of ifosfamide and its metabolites, using aprepitant only as a co-administered agent to test for drug-drug interactions, without reporting PK parameters for aprepitant itself. |
| popPK | de_2005 | irrelevant | 1 | 0 | The study focuses on the pharmacokinetics of cyclophosphamide and thiotepa in the presence of aprepitant, not on the disposition parameters of aprepitant itself. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Baprepitant%5D&body=Drug%3A%20aprepitant%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_aprepitant/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · newest extraction 2026-10-04 13:43 UTC</sub>
