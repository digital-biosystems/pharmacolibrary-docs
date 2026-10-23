<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J02A&quot;,&quot;href&quot;:&quot;atc/J02A.md&quot;},{&quot;label&quot;:&quot;itraconazole&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Itraconazole_Comisar2025_reference&quot;,&quot;label&quot;:&quot;Comisar_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_itraconazole/Itraconazole_Comisar2025_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# itraconazole

- **generic name:** itraconazole
- **ATC codes:** `J02AC02`
- **DrugBank:** [DB01167](https://go.drugbank.com/drugs/DB01167) · **PubChem:** [CID 55283](https://pubchem.ncbi.nlm.nih.gov/compound/55283)
- **molar mass:** 705.633 g/mol (C35H38Cl2N8O4) — DrugBank
- **groups:** approved, investigational

## About

Itraconazole is an antifungal medicine used to treat a range of fungal infections, including aspergillosis, candidiasis, histoplasmosis, blastomycosis, onychomycosis, and other mycoses. It is an approved, widely used systemic antifungal and appears on the WHO list of essential medicines, though it carries a boxed warning.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q411229](https://www.wikidata.org/wiki/Q411229) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| fosravuconazole | metabolite | 547.473 | C23H20F2N5O5PS | PubChem | [9807507](https://pubchem.ncbi.nlm.nih.gov/compound/9807507) | Chu_2025 |
| hydroxyitraconazole | metabolite | 721.64 | C35H38Cl2N8O5 | PubChem | [108222](https://pubchem.ncbi.nlm.nih.gov/compound/108222) | Chu_2025 |
| itraconazole, hydroxyitraconazole | metabolite | 705.641 | C35H38Cl2N8O4 | PubChem | [55283](https://pubchem.ncbi.nlm.nih.gov/compound/55283) | Chu_2025 |
| ravuconazole | metabolite | 437.468 | C22H17F2N5OS | PubChem | [467825](https://pubchem.ncbi.nlm.nih.gov/compound/467825) | Chu_2025 |

## Start here

> **Comisar_2025_reference** — <span class="pk-badge pk-badge--green">Reproduces paper</span> review reference. [Run it in the simulator](drugs/drug_itraconazole/Itraconazole_Comisar2025_reference.md?tab=Simulation) · [record](drugs/drug_itraconazole/Itraconazole_Comisar2025_reference.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## Parameters across studies

| parameter | as named | value | unit | as reported | population | species | status | record |
|---|---|---|---|---|---|---|---|---|
| CL | CL/F | 24.1 | L/h | 24.1 L/h | review reference | human | <span class="pk-badge pk-badge--green">Reproduces paper</span> | [Comisar_2025_reference](drugs/drug_itraconazole/Itraconazole_Comisar2025_reference.md) |
| V | V1/F | 114 | L | 114.0 L | review reference | human | <span class="pk-badge pk-badge--green">Reproduces paper</span> | [Comisar_2025_reference](drugs/drug_itraconazole/Itraconazole_Comisar2025_reference.md) |
| ka | kabs | 3.86 | 1/h | 3.86 h−1 | review reference | human | <span class="pk-badge pk-badge--green">Reproduces paper</span> | [Comisar_2025_reference](drugs/drug_itraconazole/Itraconazole_Comisar2025_reference.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. Rejected records are left out.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="unknown" data-status="Reproduces paper" data-sim="yes"></span><span class="pk-badge pk-badge--green">Reproduces paper</span> | [Comisar_2025_reference](drugs/drug_itraconazole/Itraconazole_Comisar2025_reference.md) | ▶ model + simulator | 2-compartment, oral | 5 | Comisar CM et al., Population Pharmacokinetic Modeling of…, CPT: pharmacometrics & syst… (2025) | [10.1002/psp4.70051](https://doi.org/10.1002/psp4.70051) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub> | [Chu_2025_reference](drugs/drug_itraconazole/Itraconazole_Chu2025_reference.md) | — | general linear (no model) | 8 (+2 cov.) | Chu WY et al., Pharmacokinetics and Pharmacodynamics o…, The Journal of infectious d… (2025) | [10.1093/infdis/jiaf279](https://doi.org/10.1093/infdis/jiaf279) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Varghese_2022_SFV_Nluc](drugs/drug_itraconazole/pd_Varghese_2022_SFV_Nluc.md) | SFV-Nluc replication ← itraconazole · direct sigmoid Emax (Hill) effect | — | Varghese FS et al., Posaconazole inhibits multiple steps of…, Antiviral research (2022) | [10.1016/j.antiviral.2021.105223](https://doi.org/10.1016/j.antiviral.2021.105223) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=itraconazole).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | `ABCB1` inhibitor, `ABCG2` inhibitor, `SLCO2B1` inhibitor | DrugBank actor |
| distribution | blood | `ALB` binder | DrugBank actor |
| distribution | blood-brain barrier | `ABCB1` inhibitor, `ABCG2` inhibitor | DrugBank actor |
| distribution | mammary gland | `ABCG2` inhibitor | DrugBank actor |
| distribution | placenta | `ABCB1` inhibitor | DrugBank actor |
| distribution | testis | `ABCB1` inhibitor, `ABCG2` inhibitor | DrugBank actor |
| metabolism | kidney | `CYP3A5` inhibitor | DrugBank actor |
| metabolism | liver | `CYP2B6` inhibitor, `CYP2E1` inhibitor, `CYP3A4` inhibitor/substrate, `CYP3A5` inhibitor, `CYP3A7` inhibitor, `SLCO2B1` inhibitor | DrugBank actor |
| metabolism | lung | `CYP1A1` inducer | DrugBank actor |
| metabolism | small intestine | `CYP1A1` inducer, `CYP3A4` inhibitor/substrate, `CYP3A5` inhibitor | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | `ABCB1` inhibitor | DrugBank actor |
| excretion | liver | `ABCB1` inhibitor, `ABCG2` inhibitor | DrugBank actor |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 12:36 | 5:21 | 1/1/0 | 1/0/0 | 0/0/0 | 236,771/18,379 | einfracz / qwen3.8-27b | 10 | 2/8 | 10/0 | 0 |

## Coverage

- **PubMed hits:** 76 matched, 20 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 2  ·  extracted 1  ·  needs review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Fuhr_2022 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of felodipine (a CYP3A4 substrate), where itraconazole is used only as a perpetrator drug for drug-drug interaction modeling, not as the subject drug. |
| popPK | Hagihara_2011 | irrelevant | 2 | 0 | The study reports pharmacokinetic descriptors (AUC, Cmax, Cmin) rather than standard disposition parameters like clearance, volume of distribution, or half-life, and the specific numeric values for these descriptors are not provided in the evidence text. |
| popPK | Iga_2017 | irrelevant | 1 | 0 | The paper is a review of DDI prediction methods where itraconazole is mentioned as a perpetrator/inhibitor (comparator) for other drugs like midazolam, not as the subject drug for which PK parameters are being reported. |
| popPK | Jaminion_2020 | irrelevant | 1 | 0 | Itraconazole is used only as a co-administered inhibitor for a DDI study on basmisanil, with no report of itraconazole's own quantitative disposition parameters. |
| popPK | Jansen_2023 | relevant | 10 | 2 | The paper describes a population PK model for itraconazole, but the specific numeric parameter estimates are in Table 2 which is not included in the provided evidence. |
| popPK | Junkert_2024 | irrelevant | 0 | 0 | The study is a scoping review of ciprofloxacin pharmacokinetics, and itraconazole is only mentioned as a co-administered drug interaction. |
| popPK | Varghese_2022 | irrelevant | 0 | 0 | The study is an in-vitro virology investigation of posaconazole's antiviral mechanism; itraconazole is only a comparative agent, and no pharmacokinetic parameters are reported. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bitraconazole%5D&body=Drug%3A%20itraconazole%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_itraconazole/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · newest extraction 2026-10-07 12:32 UTC</sub>
