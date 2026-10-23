<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N04B&quot;,&quot;href&quot;:&quot;atc/N04B.md&quot;},{&quot;label&quot;:&quot;entacapone&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Entacapone_Heikkinen2001_reference&quot;,&quot;label&quot;:&quot;Heikkinen_2001_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_entacapone/Entacapone_Heikkinen2001_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# entacapone

- **generic name:** entacapone
- **ATC codes:** `N04BX02`
- **DrugBank:** [DB00494](https://go.drugbank.com/drugs/DB00494) · **PubChem:** [CID 5281081](https://pubchem.ncbi.nlm.nih.gov/compound/5281081)
- **molar mass:** 305.286 g/mol (C14H15N3O5) — DrugBank
- **groups:** approved, investigational

## About

Entacapone is a COMT inhibitor used to treat Parkinson's disease. It is an approved medicine, authorised in the European Union for Parkinson's disease.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q416444](https://www.wikidata.org/wiki/Q416444) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| entacapone | parent | 305.286 | C14H15N3O5 | DrugBank | [5281081](https://pubchem.ncbi.nlm.nih.gov/compound/5281081) | Heikkinen_2001 |

## Start here

> **Heikkinen_2001_reference** — <span class="pk-badge pk-badge--green">Reproduces paper</span> healthy male volunteers, n = 8. [Run it in the simulator](drugs/drug_entacapone/Entacapone_Heikkinen2001_reference.md?tab=Simulation) · [record](drugs/drug_entacapone/Entacapone_Heikkinen2001_reference.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## Parameters across studies

| parameter | as named | value | unit | as reported | population | n | species | status | record |
|---|---|---|---|---|---|---|---|---|---|
| CL | CL | 49.14 ‡ | L/h | 11.7 ml/min kg(-1) | healthy male volunteers | 8 | human | <span class="pk-badge pk-badge--green">Reproduces paper</span> | [Heikkinen_2001_reference](drugs/drug_entacapone/Entacapone_Heikkinen2001_reference.md) |
| V | V | 5.6 ‡ | L | 0.08 l/kg | healthy male volunteers | 8 | human | <span class="pk-badge pk-badge--green">Reproduces paper</span> | [Heikkinen_2001_reference](drugs/drug_entacapone/Entacapone_Heikkinen2001_reference.md) |
| ka | kabs | 50 | 1/h | 50.0 h-1 | healthy male volunteers | 8 | human | <span class="pk-badge pk-badge--green">Reproduces paper</span> | [Heikkinen_2001_reference](drugs/drug_entacapone/Entacapone_Heikkinen2001_reference.md) |
| F | Fab | 0.25 |  | 25 % | healthy male volunteers | 8 | human | <span class="pk-badge pk-badge--green">Reproduces paper</span> | [Heikkinen_2001_reference](drugs/drug_entacapone/Entacapone_Heikkinen2001_reference.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. ‡ given per kg in the paper; shown for a 70 kg adult. Rejected records are left out.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Reproduces paper" data-sim="yes"></span><span class="pk-badge pk-badge--green">Reproduces paper</span> | [Heikkinen_2001_reference](drugs/drug_entacapone/Entacapone_Heikkinen2001_reference.md) | ▶ model + simulator | 1-compartment, oral | 9 | Heikkinen H et al., Pharmacokinetics of entacapone, a perip…, European journal of clinica… (2001) | [10.1007/s002280000244](https://doi.org/10.1007/s002280000244) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Alqahtani_2015_PD](drugs/drug_entacapone/pd_Alqahtani_2015_PD.md) | PD parameters (COMT inhibition pharmacodynamic response) ← entacapone · inhibition effect | — | Alqahtani S et al., Development of a physiologically based…, Biopharmaceutics & drug dis… (2015) | [10.1002/bdd.1986](https://doi.org/10.1002/bdd.1986) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Forsberg_2002_COMT_inhibition_in_erythrocytes](drugs/drug_entacapone/pd_Forsberg_2002_COMT_inhibition_in_erythrocytes.md) | COMT inhibition in erythrocytes ← entacapone · direct Emax (saturable) effect | — | Forsberg M et al., Pharmacodynamic response of entacapone…, Pharmacology & toxicology (2002) | [10.1034/j.1600-0773.2002.900606.x](https://doi.org/10.1034/j.1600-0773.2002.900606.x) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=entacapone).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| metabolism | brain | `COMT` inhibitor, `CYP2D6` inhibitor | DrugBank actor |
| metabolism | kidney | `COMT` inhibitor, `UGT1A9` substrate | DrugBank actor |
| metabolism | liver | `COMT` inhibitor, `CYP2D6` inhibitor, `UGT1A9` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
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
| 2026-10-06 13:01 | 1:36 | 1/0/0 | 2/0/0 | 0/0/0 | 72,102/10,773 | ollama / glm-5.3-flash | 2 | 1/1 | 1/1 | 0 |

## Coverage

- **PubMed hits:** 11 matched, 11 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 1  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Heikkinen_2001.pdf` | Heikkinen H et al., Pharmacokinetics of entacapone, a perip…, European journal of clinica… (2001) | popPK | 10 | [10.1007/s002280000244](https://doi.org/10.1007/s002280000244) | [11294372](https://pubmed.ncbi.nlm.nih.gov/11294372) | Full PK parameters (Vc, Vss, CL, half-lives, AUC, bioavailability) for entacapone are reported directly in the abstract. |
| `Alqahtani_2015.pdf` | Alqahtani S et al., Development of a physiologically based…, Biopharmaceutics & drug dis… (2015) | popPK | 8 | [10.1002/bdd.1986](https://doi.org/10.1002/bdd.1986) | [26295926](https://pubmed.ncbi.nlm.nih.gov/26295926) | PBPK/PK modeling study of entacapone itself in humans, but no numeric parameter values appear in the provided evidence. |

<sub>queue written 2026-10-06T13:00:18.265923+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Alqahtani_2015 | relevant | 8 | 2 | PBPK/PK modeling study of entacapone itself in humans, but no numeric parameter values appear in the provided evidence. |
| popPK | Forsberg_2002 | irrelevant | 4 | 3 | Rat PK/PD study of entacapone, but evidence reports only bioavailability (F) and Emax/EC50 qualitative findings, not disposition parameters (CL, V, ka); numeric values like EC50 appear not fully provided. |
| popPK | LeWitt_2009 | irrelevant | 3 | 2 | Entacapone is a co-formulated comparator; only levodopa PK values (AUC, Cmax) are reported, no entacapone disposition parameters. |
| popPK | Léger_1998 | irrelevant | 2 | 2 | Entacapone (OR-611) is only a co-administered COMT inhibitor probe; the PK model concerns [18F]FDOPA, not entacapone itself, and no entacapone disposition parameters are given. |
| popPK | Müller_2014 | irrelevant | 0 | 0 | This is a review of rasagiline; entacapone is only mentioned as a comparator with no PK parameters reported. |
| popPK | Rocha_2014 | irrelevant | 2 | 0 | Entacapone is only a comparator arm in a BIA 9-1067 clinical trial; the evidence contains only adverse-event tables with no PK parameters. |
| popPK | Senek_2020 | irrelevant | 2 | 3 | This is a population-PK model of levodopa; entacapone is only a co-infused COMT inhibitor whose effect is a covariate (shift in levodopa CL/F), with no entacapone disposition parameters reported. |
| popPK | Sethi_2021 | irrelevant | 1 | 0 | Clinical outcomes study of levodopa formulations with no PK parameters for entacapone reported. |
| popPK | Trocóniz_1998 | irrelevant | 2 | 2 | The study models levodopa pharmacodynamics with entacapone only as a co-administered modifier; no entacapone disposition parameters (CL, V, ka) are reported. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-06 13:00 UTC</sub>
