<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N06A&quot;,&quot;href&quot;:&quot;atc/N06A.md&quot;},{&quot;label&quot;:&quot;moclobemide&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Moclobemide_Gwka2019_reference&quot;,&quot;label&quot;:&quot;G\u0142\u00f3wka_2019_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_moclobemide/Moclobemide_Gwka2019_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false}]"></div>

# moclobemide

- **generic name:** moclobemide
- **ATC codes:** `N06AG02`
- **DrugBank:** [DB01171](https://go.drugbank.com/drugs/DB01171) · **PubChem:** [CID 4235](https://pubchem.ncbi.nlm.nih.gov/compound/4235)
- **molar mass:** 268.739 g/mol (C13H17ClN2O2) — DrugBank
- **groups:** approved, investigational

## About

Moclobemide is an antidepressant that works as a reversible inhibitor of monoamine oxidase A. It is an approved medicine, used in several countries for depression, though it is not authorised centrally in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q421934](https://www.wikidata.org/wiki/Q421934) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| moclobemide | parent | 268.739 | C13H17ClN2O2 | DrugBank | [4235](https://pubchem.ncbi.nlm.nih.gov/compound/4235) | Raaflaub_1984 |

## Start here

> **Główka_2019_reference** — <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span> review reference. [Run it in the simulator](drugs/drug_moclobemide/Moclobemide_Gwka2019_reference.md?tab=Simulation) · [record](drugs/drug_moclobemide/Moclobemide_Gwka2019_reference.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## Parameters across studies

| parameter | as named | value | unit | as reported | population | species | status | record |
|---|---|---|---|---|---|---|---|---|
| CL | CL/F | 67.8 | L/h | 67.8 l/h | review reference | human | <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span> | [Główka_2019_reference](drugs/drug_moclobemide/Moclobemide_Gwka2019_reference.md) |
| V | V/F | 112.8 | L | 112.8 l | review reference | human | <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span> | [Główka_2019_reference](drugs/drug_moclobemide/Moclobemide_Gwka2019_reference.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. Rejected records are left out.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="unknown" data-status="Not simulated" data-sim="yes"></span><span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>stale — current check: Not simulated</sub> | [Główka_2019_reference](drugs/drug_moclobemide/Moclobemide_Gwka2019_reference.md) | ▶ model + simulator | 1-compartment, oral | 3 | Główka FK et al., Bioavailability of moclobemide from two…, Die Pharmazie (2019) | [10.1691/ph.2019.8819](https://doi.org/10.1691/ph.2019.8819) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>stale — current check: Rejected</sub><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub> | [Raaflaub_1984_reference](drugs/drug_moclobemide/Moclobemide_Raaflaub1984_reference.md) | — | 1-compartment (no model) | 6 | Raaflaub J et al., Single-dose pharmacokinetics of the MAO…, Arzneimittel-Forschung (1984) | — |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Birkett_1995_u](drugs/drug_moclobemide/pd_Birkett_1995_u.md) | Utilisation (market uptake) ← moclobemide · direct sigmoid Emax (Hill) effect | model (no simulator) | Birkett DJ et al., Modelling the market uptake of new drug…, British journal of clinical… (1995) | [10.1111/j.1365-2125.1995.tb04565.x](https://doi.org/10.1111/j.1365-2125.1995.tb04565.x) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=moclobemide).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | liver | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| metabolism | brain | `CYP2D6` inhibitor/substrate, `MAOA` inhibitor/target, `MAOB` inhibitor/target | DrugBank actor |
| metabolism | liver | `CYP2C19` inhibitor/substrate, `CYP2C9` substrate, `CYP2D6` inhibitor/substrate, `MAOA` inhibitor/target | DrugBank actor |
| metabolism | platelet | `MAOB` inhibitor/target | DrugBank actor |
| metabolism | small intestine | `MAOA` inhibitor/target | DrugBank actor |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 23:42 | 0:44 | 1/1/0 | 1/0/0 | 0/0/0 | 49,596/2,355 | ollama / glm-5.3-flash | 18 | 3/0 | 2/0 | 0 |

## Coverage

- **PubMed hits:** 9 matched, 9 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 1  ·  needs_review 0  ·  rejected 1  ·  stale 2
- **scholar-agent fallback query used:** True

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Raaflaub_1984.pdf` | Raaflaub J et al., Single-dose pharmacokinetics of the MAO…, Arzneimittel-Forschung (1984) | popPK | 10 | not captured | [6538424](https://pubmed.ncbi.nlm.nih.gov/6538424) | Reports quantitative PK parameters (t½β, Vss, bioavailability, absorption) for moclobemide in humans, though some values are given only as ranges/means in the abstract. |
| `Dingemanse_1996_2.pdf` | Dingemanse J et al., Pharmacokinetic-pharmacodynamic interac…, Clinical neuropharmacology (1996) | popPK | 5 | [10.1097/00002826-199619050-00003](https://doi.org/10.1097/00002826-199619050-00003) | [8889283](https://pubmed.ncbi.nlm.nih.gov/8889283) | Human steady-state PK of moclobemide and its metabolites is the subject, but no numeric parameter values appear in the evidence. |

<sub>queue written 2026-10-06T23:42:30.737659+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Baumann_1996_2 | irrelevant | 0 | 0 | Review of SSRI pharmacokinetics; moclobemide only mentioned as co-medication, no quantitative PK parameters for it. |
| PD | Baumann_1996_2 | not_relevant | 0 | 0 | The text is a review of SSRIs and mentions moclobemide only in the context of drug interactions and safety, without reporting any pharmacodynamic or exposure-response data. |
| popPK | Birkett_1995 | irrelevant | 0 | 0 | This is a drug utilisation/market uptake modelling study, not a pharmacokinetic study; moclobemide is only one of five drugs whose sales trends were modelled. |
| PD | Birkett_1995 | not_relevant | 0 | 0 | The paper applies a sigmoid Emax model to market uptake (utilization over time) data, not pharmacodynamic exposure-response or dose-response relationships. |
| popPK | Boland_2003 | irrelevant | 0 | 0 | In-vitro neuroprotection study of pirlindole; moclobemide is only an ineffective comparator with no PK parameters. |
| PD | Boland_2003 | not_relevant | 0 | 0 | The paper reports that moclobemide was ineffective in the cell survival assay, providing no numeric PD parameters or concentration-effect relationship for the drug. |
| popPK | Cooper_2023 | irrelevant | 0 | 0 | Moclobemide is only a co-ingested risk factor in a serotonin toxicity outcome model; no PK parameters for moclobemide are reported. |
| popPK | Dingemanse_1996 | irrelevant |  |  | no extractable full text |
| popPK | Dingemanse_1996_2 | relevant | 5 | 2 | Human steady-state PK of moclobemide and its metabolites is the subject, but no numeric parameter values appear in the evidence. |
| PD | Dingemanse_1996_2 | not_relevant | 3 | 2 | The study reports qualitative PD interactions and changes in biomarkers (DHPG, serotonin) but does not provide numeric PD parameters (Emax, EC50) or a quantitative concentration-effect model. |
| popPK | Fox_2010 | irrelevant | 2 | 3 | Moclobemide is only a co-administered MAOI-A perturbing a compartmental model of sumatriptan; no moclobemide disposition parameters are reported. |
| popPK | Ginovart_2006 | irrelevant | 1 | 1 | This is a PET receptor-binding study of [11C]-harmine with moclobemide only as a blocking agent; no moclobemide PK parameters (CL, V, ka) are reported. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-06 23:42 UTC</sub>
