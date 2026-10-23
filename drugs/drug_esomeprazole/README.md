<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A02B&quot;,&quot;href&quot;:&quot;atc/A02B.md&quot;},{&quot;label&quot;:&quot;esomeprazole&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Esomeprazole_Chung2022_reference&quot;,&quot;label&quot;:&quot;Chung_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_esomeprazole/Esomeprazole_Chung2022_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false}]"></div>

# esomeprazole

- **generic name:** esomeprazole
- **ATC codes:** `A02BC05`, `M01AE52`
- **DrugBank:** [DB00736](https://go.drugbank.com/drugs/DB00736) · **PubChem:** [CID 9568614](https://pubchem.ncbi.nlm.nih.gov/compound/9568614)
- **molar mass:** 345.416 g/mol (C17H19N3O3S) — DrugBank
- **groups:** approved, investigational

## About

Esomeprazole is a proton-pump inhibitor used for acid-related stomach problems such as gastroesophageal reflux disease, peptic and duodenal ulcers, gastritis, esophagitis, and heartburn. It is an approved medicine with an authorised product in the European Union and is widely used for these conditions.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q553223](https://www.wikidata.org/wiki/Q553223) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| esomeprazole | parent | 345.416 | C17H19N3O3S | DrugBank | [9568614](https://pubchem.ncbi.nlm.nih.gov/compound/9568614) | Gebreyesus_2022, Nagase_2020 |

## Start here

> **Chung_2022_reference** — <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span> review reference. [Run it in the simulator](drugs/drug_esomeprazole/Esomeprazole_Chung2022_reference.md?tab=Simulation) · [record](drugs/drug_esomeprazole/Esomeprazole_Chung2022_reference.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## Parameters across studies

| parameter | as named | value | unit | as reported | population | species | status | record |
|---|---|---|---|---|---|---|---|---|
| CL | CL/F | 17.32 | L/h | 17.32 L/h | healthy Japanese male subjects | human | <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--stale">stale</span> | [Nagase_2020_reference](drugs/drug_esomeprazole/Esomeprazole_Nagase2020_reference.md) |
| CL | CL/F | 221 | L/h | 221.0 L/h | review reference | human | <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span> | [Chung_2022_reference](drugs/drug_esomeprazole/Esomeprazole_Chung2022_reference.md) |
| V | V1/F | 121 | L | 121.0 L | review reference | human | <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span> | [Chung_2022_reference](drugs/drug_esomeprazole/Esomeprazole_Chung2022_reference.md) |
| ka | kabs | 0.95 | 1/h | 0.95 h−1 | review reference | human | <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span> | [Chung_2022_reference](drugs/drug_esomeprazole/Esomeprazole_Chung2022_reference.md) |
| ka | kabs | 0.95 | 1/h | 0.95 h−1 | healthy Japanese male subjects | human | <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--stale">stale</span> | [Nagase_2020_reference](drugs/drug_esomeprazole/Esomeprazole_Nagase2020_reference.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. Rejected records are left out.</sub>

<div class="pk-forest-row"><svg class="pk-forest" xmlns="http://www.w3.org/2000/svg" width="560" height="80" viewBox="0 0 560 80" role="img" aria-label="CL across studies"><text x="190" y="14" font-size="12" font-weight="600">CL (L/h, log scale)</text><line x1="190.0" y1="18" x2="190.0" y2="58" stroke="#ddd"/><text x="190.0" y="72" font-size="10" text-anchor="middle">10</text><line x1="365.0" y1="18" x2="365.0" y2="58" stroke="#ddd"/><text x="365.0" y="72" font-size="10" text-anchor="middle">100</text><line x1="540.0" y1="18" x2="540.0" y2="58" stroke="#ddd"/><text x="540.0" y="72" font-size="10" text-anchor="middle">1000</text><text x="184" y="34.0" font-size="11" text-anchor="end">Nagase_2020 · CL/F</text><circle cx="231.7" cy="30.0" r="4" fill="#ef6c00"><title>Nagase_2020 · CL/F: 17.32 L/h</title></circle><text x="184" y="50.0" font-size="11" text-anchor="end">Chung_2022 · CL/F</text><circle cx="425.3" cy="46.0" r="4" fill="#78909c"><title>Chung_2022 · CL/F: 221 L/h</title></circle></svg></div>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="unknown" data-status="Not simulated" data-sim="yes"></span><span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>stale — current check: Not simulated</sub> | [Chung_2022_reference](drugs/drug_esomeprazole/Esomeprazole_Chung2022_reference.md) | ▶ model + simulator | 1-compartment, oral | 3 | Chung TK et al., A population PK-PD model of YH4808, a n…, CPT: pharmacometrics & syst… (2022) | [10.1002/psp4.12839](https://doi.org/10.1002/psp4.12839) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>stale — current check: Needs review</sub><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub> | [Nagase_2020_reference](drugs/drug_esomeprazole/Esomeprazole_Nagase2020_reference.md) | — | 1-compartment (no model) | 2 | Nagase M et al., Population pharmacokinetic analysis of…, Journal of clinical pharmac… (2020) | [10.1111/jcpt.13129](https://doi.org/10.1111/jcpt.13129) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>stale — current check: Rejected</sub><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Gebreyesus_2022_reference](drugs/drug_esomeprazole/Esomeprazole_Gebreyesus2022_reference.md) | — | 1-compartment (no model) | 0 | Gebreyesus MS et al., Population pharmacokinetics of esomepra…, British journal of clinical… (2022) | [10.1111/bcp.15416](https://doi.org/10.1111/bcp.15416) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Andersson_2001_pentagastrin_stimulated_peak_acid_output](drugs/drug_esomeprazole/pd_Andersson_2001_pentagastrin_stimulated_peak_acid_output.md) | pentagastrin-stimulated peak acid output ← esomeprazole · direct sigmoid Emax (Hill) effect | — | Andersson T et al., Pharmacokinetics and pharmacodynamics o…, Alimentary pharmacology & t… (2001) | [10.1046/j.1365-2036.2001.01087.x](https://doi.org/10.1046/j.1365-2036.2001.01087.x) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=esomeprazole).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | `ABCB1` inhibitor/substrate | DrugBank actor |
| distribution | blood-brain barrier | `ABCB1` inhibitor/substrate | DrugBank actor |
| distribution | placenta | `ABCB1` inhibitor/substrate | DrugBank actor |
| distribution | testis | `ABCB1` inhibitor/substrate | DrugBank actor |
| metabolism | liver | `CYP2C19` inhibitor/substrate, `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | `ABCB1` inhibitor/substrate, `SLC22A8` inhibitor | DrugBank actor |
| excretion | liver | `ABCB1` inhibitor/substrate | DrugBank actor |

<sub>Actors without a tissue in the table: ATP4A (inhibitor), ATP4B (modulator), DDAH1 (unknown).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-04 08:58 | 10:37 | 2/1/0 | 1/0/0 | 0/0/0 | 162,968/29,730 | ollama / qwen3.8:27b-mtp-q8_0 | 16 | 13/3 | 7/0 | 0 |

## Coverage

- **PubMed hits:** 29 matched, 16 returned
- **screened:** 13  ·  **relevant:** 4
- **records:** 3  ·  extracted 1  ·  needs review 1  ·  rejected 1  ·  stale 3
- **scholar-agent fallback query used:** not captured

## Full-text requests

_4 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Liu_2016.pdf` | Liu D et al., Pharmacokinetic and Pharmacodynamic Mod…, Journal of clinical pharmac… (2016) | popPK | 10 | [10.1002/jcph.733](https://doi.org/10.1002/jcph.733) | [26970404](https://pubmed.ncbi.nlm.nih.gov/26970404) | The paper describes a population PK study of esomeprazole, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract text. |
| `Nagase_2020.pdf` | Nagase M et al., Population pharmacokinetic analysis of…, Journal of clinical pharmac… (2020) | popPK | 10 | [10.1111/jcpt.13129](https://doi.org/10.1111/jcpt.13129) | [32227647](https://pubmed.ncbi.nlm.nih.gov/32227647) | The paper reports a population PK model for esomeprazole in humans and provides specific numeric values for apparent clearance (CL) across different CYP2C19 phenotypes in the abstract. |
| `Earp_2017.pdf` | Earp JC et al., Esomeprazole FDA Approval in Children W…, Journal of pediatric gastro… (2017) | popPK | 9 | [10.1097/MPG.0000000000001467](https://doi.org/10.1097/MPG.0000000000001467) | [27875488](https://pubmed.ncbi.nlm.nih.gov/27875488) | The paper describes a population PK model for esomeprazole in children and adults, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract text. |
| `Andersson_2001.pdf` | Andersson T et al., Pharmacokinetics and pharmacodynamics o…, Alimentary pharmacology & t… (2001) | popPK | 8 | [10.1046/j.1365-2036.2001.01087.x](https://doi.org/10.1046/j.1365-2036.2001.01087.x) | [11563995](https://pubmed.ncbi.nlm.nih.gov/11563995) | The study reports PK/PD for esomeprazole in humans, but the evidence provided only contains qualitative statements about AUC and PD inhibition percentages, lacking specific numeric values for clearance, volume, or half-life. |

<sub>queue written 2026-10-04 08:49 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Andersson_2001 | relevant | 8 | 2 | The study reports PK/PD for esomeprazole in humans, but the evidence provided only contains qualitative statements about AUC and PD inhibition percentages, lacking specific numeric values for clearance, volume, or half-life. |
| popPK | Boinpally_2023 | irrelevant | 1 | 0 | The study focuses on the pharmacokinetics of atogepant, with esomeprazole serving only as a co-administered agent to test for interactions, and no quantitative PK parameters for esomeprazole are reported. |
| popPK | Chung_2022 | irrelevant | 0 | 0 | The study models the pharmacokinetics of YH4808, with esomeprazole serving only as an active comparator for pharmacodynamic effects. |
| popPK | Earp_2017 | relevant | 9 | 0 | The paper describes a population PK model for esomeprazole in children and adults, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract text. |
| PD | Earp_2017 | not_relevant | 3 | 1 | The paper describes exposure-matching and qualitative similarity of exposure-response relationships but does not provide numeric PD parameters (e.g., Emax, EC50) or a quantitative concentration-effect curve in the provided text. |
| popPK | Kirchheiner_2009_2 | irrelevant | 0 | 0 | The paper is a pharmacodynamic meta-analysis of gastric pH effects and does not report pharmacokinetic parameters (CL, V, ka) for esomeprazole. |
| popPK | Lacy_2017_2 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of cabozantinib, and esomeprazole is only mentioned as a co-administered agent that did not affect cabozantinib levels. |
| popPK | Lee_2025 | relevant | 5 | 4 | The study reports non-compartmental PK parameters (AUC, Cmax, t1/2) for esomeprazole, but lacks compartmental model parameters (CL, V, Q) and specific numeric values for Cmax and t1/2 are not explicitly listed in the provided text. |
| popPK | Litalien_2005 | irrelevant | 0 | 0 | The paper is a review that explicitly states no pharmacokinetic data are available for esomeprazole in children, and it does not report quantitative parameters for esomeprazole. |
| popPK | Liu_2016 | relevant | 10 | 0 | The paper describes a population PK study of esomeprazole, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract text. |
| popPK | Schlachter_2026 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for atogepant, not esomeprazole (which is only mentioned as a concomitant medication). |
| popPK | Simon_2015 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics and pharmacodynamics of clopidogrel, with esomeprazole serving only as a co-administered comparator agent. |
| popPK | Zhang_2025 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of tacrolimus, with esomeprazole serving only as a co-administered drug affecting tacrolimus bioavailability. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Besomeprazole%5D&body=Drug%3A%20esomeprazole%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_esomeprazole/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · newest extraction 2026-10-04 08:49 UTC</sub>
