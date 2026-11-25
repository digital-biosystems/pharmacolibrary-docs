<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N04B&quot;,&quot;href&quot;:&quot;atc/N04B.md&quot;},{&quot;label&quot;:&quot;entacapone&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Entacapone_Heikkinen2001_reference&quot;,&quot;label&quot;:&quot;Heikkinen_2001_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_entacapone/Entacapone_Heikkinen2001_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# entacapone

- **generic name:** entacapone
- **ATC codes:** `N04BX02`
- **DrugBank:** [DB00494](https://go.drugbank.com/drugs/DB00494) · **PubChem:** [CID 5281081](https://pubchem.ncbi.nlm.nih.gov/compound/5281081)
- **molar mass:** 305.286 g/mol (C14H15N3O5) — DrugBank
- **groups:** approved, investigational

## About

Entacapone is a COMT inhibitor used to treat Parkinson's disease. It is administered orally as a tablet and is well absorbed by mouth. It is widely used in combination with other medications and is authorised in the European Union.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q416444](https://www.wikidata.org/wiki/Q416444), [Wikipedia](https://en.wikipedia.org/wiki/Entacapone?oldid=1368193947) (CC BY-SA 4.0), DrugBank's routes and dosage forms, the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| entacapone | parent | 305.286 | C14H15N3O5 | DrugBank | [5281081](https://pubchem.ncbi.nlm.nih.gov/compound/5281081) | Heikkinen_2001 |

## Start here

> **Heikkinen_2001_reference** — <span class="pk-badge pk-badge--orange">Needs review</span> healthy male volunteers. [Run it in the simulator](drugs/drug_entacapone/Entacapone_Heikkinen2001_reference.md?tab=Simulation) · [record](drugs/drug_entacapone/Entacapone_Heikkinen2001_reference.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="yes"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: cross_check_disputed</sub> | [Heikkinen_2001_reference](drugs/drug_entacapone/Entacapone_Heikkinen2001_reference.md) | ▶ model + simulator | 1-compartment, IV | 8 | Heikkinen H et al., Pharmacokinetics of entacapone, a perip…, European journal of clinica… (2001) | [10.1007/s002280000244](https://doi.org/10.1007/s002280000244) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Forsberg_2002_COMT_inhibition_in_erythrocytes](drugs/drug_entacapone/pd_Forsberg_2002_COMT_inhibition_in_erythrocytes.md) | COMT inhibition in erythrocytes ← entacapone · direct Emax (saturable) effect | — | Forsberg M et al., Pharmacodynamic response of entacapone…, Pharmacology & toxicology (2002) | [10.1034/j.1600-0773.2002.900606.x](https://doi.org/10.1034/j.1600-0773.2002.900606.x) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Trocóniz_1998_motor_UPDRS](drugs/drug_entacapone/pd_Troc_niz_1998_motor_UPDRS.md) | motor part of the Unified Parkinson's Disease Rating Scale ← levodopa · direct sigmoid Emax (Hill) effect | — | Trocóniz IF et al., Population pharmacodynamic modeling of…, Clinical pharmacology and t… (1998) | [10.1016/S0009-9236(98)90028-5](https://doi.org/10.1016/S0009-9236(98)90028-5) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-23 21:43 | 0:12 | 1/0/0 | 2/0/0 | 0/0/0 | 6,479/749 | einfracz / qwen3.8-27b | 2 | 1/1 | 1/1 | 0 |

## Coverage

- **PubMed hits:** 11 matched, 11 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs review 1  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Alqahtani_2015 | relevant | 10 | 1 | The study describes a PBPK/PD model for entacapone, but the specific quantitative parameter values (CL, V, etc.) are not provided in the text or tables, only qualitative descriptions of model performance. |
| PGx | Alqahtani_2015 | not_relevant | 0 | 0 | The paper develops a PBPK model to explain entacapone's low bioavailability via first-pass metabolism but does not investigate gene variants or pharmacogenomic effects. |
| popPK | Forsberg_2002 | relevant | 6 | 1 | The study investigates entacapone PK in rats and mentions PK-PD relationships, but the abstract only provides bioavailability (F) and EC50/Emax values, lacking specific CL, V, or half-life parameters. |
| PGx | Forsberg_2002 | not_relevant | 0 | 0 | The study investigates the impact of different formulations and bioavailability on pharmacodynamics in rats, but it does not report any pharmacogenomic effects or genetic variants influencing PK/PD parameters. |
| PGx | Heikkinen_2001 | not_relevant | 0 | 0 | The paper describes population pharmacokinetics of entacapone in healthy volunteers using stable isotope labeling but does not report any gene variant or genotype associations. |
| popPK | LeWitt_2009 | irrelevant | 1 | 0 | The study focuses on the pharmacokinetics of levodopa (L-dopa) and entacapone is only a co-administered adjunct to extend L-dopa effects; no quantitative PK parameters for entacapone itself are reported. |
| PGx | LeWitt_2009 | not_relevant | 0 | 0 | The study compares two levodopa formulations (CL-CR vs CLE) without analyzing genetic variants or pharmacogenomic factors. |
| popPK | Léger_1998 | irrelevant | 1 | 0 | The study measures PK parameters for the tracer [18F]fluorodopa (FDOPA) in the presence of entacapone, not the pharmacokinetic parameters of entacapone itself. |
| PGx | Léger_1998 | not_relevant | 0 | 0 | The study investigates the pharmacodynamic interaction of COMT inhibitors with [18F]fluorodopa in a PET model, rather than how a gene variant affects the PK/PD of entacapone. |
| popPK | Müller_2014 | irrelevant | 0 | 0 | This is a review of rasagiline where entacapone is only mentioned as a comparator drug; no PK parameters for entacapone are reported. |
| PGx | Müller_2014 | not_relevant | 0 | 0 | The paper is a review of rasagiline and does not report pharmacogenomic effects on entacapone PK/PD. |
| popPK | Rocha_2014 | irrelevant | 0 | 0 | The evidence consists solely of adverse event tables (safety data) and contains no pharmacokinetic parameters such as clearance, volume, or half-life. |
| PGx | Rocha_2014 | not_relevant | 0 | 0 | The text details adverse event incidence by drug dose (Entacapone/OPC), not by genotype or phenotype, and contains no pharmacokinetic or pharmacodynamic parameter data. |
| popPK | Senek_2020 | irrelevant | 2 | 3 | This is a population-PK model of levodopa; entacapone is only a co-infused COMT inhibitor whose effect is a covariate (shift in levodopa CL/F), with no entacapone disposition parameters reported. |
| popPK | Sethi_2021 | irrelevant | 0 | 0 | The study is a clinical trial assessing symptom progression in Parkinson's disease and does not report any quantitative pharmacokinetic parameters for entacapone. |
| PGx | Sethi_2021 | not_relevant | 0 | 0 | The study examines the relationship between levodopa formulations and disease progression rates, without investigating the influence of genetic variants on the pharmacokinetics or pharmacodynamics of entacapone. |
| popPK | Trocóniz_1998 | irrelevant | 0 | 0 | The study focuses on the pharmacodynamics of levodopa and its response, not the pharmacokinetic parameters of entacapone itself. |
| PGx | Trocóniz_1998 | not_relevant | 0 | 0 | The study focuses on population pharmacodynamic modeling of levodopa and does not report any genetic variants or pharmacogenomic effects on the PK/PD parameters of entacapone. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bentacapone%5D&body=Drug%3A%20entacapone%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_entacapone/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-23 21:41 UTC</sub>
