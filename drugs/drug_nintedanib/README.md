<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;nintedanib&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Nintedanib_Schmid2018_reference&quot;,&quot;label&quot;:&quot;Schmid_2018_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_nintedanib/Nintedanib_Schmid2018_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Nintedanib_Schmid2018v2_reference&quot;,&quot;label&quot;:&quot;Schmid_2018_2_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_nintedanib/Nintedanib_Schmid2018v2_reference.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

# nintedanib

- **generic name:** nintedanib
- **ATC codes:** `L01EX09`, `L01XE3`
- **DrugBank:** [DB09079](https://go.drugbank.com/drugs/DB09079) · **PubChem:** [CID 9809715](https://pubchem.ncbi.nlm.nih.gov/compound/9809715)
- **molar mass:** 539.6248 g/mol (C31H33N5O4) — DrugBank
- **groups:** approved, investigational

## About

Nintedanib is a protein kinase inhibitor used to treat idiopathic pulmonary fibrosis and other interstitial lung diseases, and also certain lung cancers. It is authorised in the European Union for several fibrotic lung conditions and non-small-cell lung cancer.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q15149723](https://www.wikidata.org/wiki/Q15149723) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| nintedanib | parent | 539.625 | C31H33N5O4 | DrugBank | [9809715](https://pubchem.ncbi.nlm.nih.gov/compound/9809715) | Schmid_2018, Schmid_2018_2 |
| BIBF 1202 | metabolite | 525.609 | C30H31N5O4 | PubChem | [135461425](https://pubchem.ncbi.nlm.nih.gov/compound/135461425) | Schmid_2018_2 |

## Start here

> **Schmid_2018_reference** — <span class="pk-badge pk-badge--green">Reproduces paper</span> patients with idiopathic pulmonary fibrosis, n = 933. [Run it in the simulator](drugs/drug_nintedanib/Nintedanib_Schmid2018_reference.md?tab=Simulation) · [record](drugs/drug_nintedanib/Nintedanib_Schmid2018_reference.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## Parameters across studies

| parameter | as named | value | unit | as reported | population | n | species | status | record |
|---|---|---|---|---|---|---|---|---|---|
| CL | CL/F | 994 | L/h | 994 L/h | patients with idiopathic pulmonary fibrosis | 933 | human | <span class="pk-badge pk-badge--green">Reproduces paper</span> | [Schmid_2018_reference](drugs/drug_nintedanib/Nintedanib_Schmid2018_reference.md) |
| ka | kabs | 0.0814 | 1/h | 0.0814 h-1 | patients with idiopathic pulmonary fibrosis | 933 | human | <span class="pk-badge pk-badge--green">Reproduces paper</span> | [Schmid_2018_reference](drugs/drug_nintedanib/Nintedanib_Schmid2018_reference.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. Rejected records are left out.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="unknown" data-status="Reproduces paper" data-sim="yes"></span><span class="pk-badge pk-badge--green">Reproduces paper</span> | [Schmid_2018_reference](drugs/drug_nintedanib/Nintedanib_Schmid2018_reference.md) | ▶ model + simulator | 1-compartment, oral | 4 | Schmid U et al., Population pharmacokinetics of nintedan…, Pulmonary pharmacology & th… (2018) | [10.1016/j.pupt.2017.11.004](https://doi.org/10.1016/j.pupt.2017.11.004) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="yes"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: T3_output_variable</sub><br><sub>blocking: T3_topology_template</sub> | [Schmid_2018_2_reference](drugs/drug_nintedanib/Nintedanib_Schmid2018v2_reference.md) | ▶ model + simulator | 1-compartment, oral | 5 | Schmid U et al., Population pharmacokinetics of nintedan…, Cancer chemotherapy and pha… (2018) | [10.1007/s00280-017-3452-0](https://doi.org/10.1007/s00280-017-3452-0) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Hartmann_2026_2_FVC](drugs/drug_nintedanib/pd_Hartmann_2026_2_FVC.md) | absolute FVC ← nintedanib · disease-progression model | — | Hartmann S et al., Exposure-Efficacy Meta-Model of Ninteda…, CPT: pharmacometrics & syst… (2026) | [10.1002/psp4.70132](https://doi.org/10.1002/psp4.70132) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Hartmann_2026_2_FVC_Z_score](drugs/drug_nintedanib/pd_Hartmann_2026_2_FVC_Z_score.md) | FVC Z‐score ← nintedanib · disease-progression model | — | Hartmann S et al., Exposure-Efficacy Meta-Model of Ninteda…, CPT: pharmacometrics & syst… (2026) | [10.1002/psp4.70132](https://doi.org/10.1002/psp4.70132) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Hartmann_2026_2_FVC_predicted](drugs/drug_nintedanib/pd_Hartmann_2026_2_FVC_predicted.md) | the response · model not identified | — | Hartmann S et al., Exposure-Efficacy Meta-Model of Ninteda…, CPT: pharmacometrics & syst… (2026) | [10.1002/psp4.70132](https://doi.org/10.1002/psp4.70132) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Hartmann_2026_FVC](drugs/drug_nintedanib/pd_Hartmann_2026_FVC.md) | FVC %predicted ← nintedanib · direct Emax (saturable) effect | model (no simulator) | Hartmann S et al., Population Pharmacokinetics and Exposur…, CPT: pharmacometrics & syst… (2026) | [10.1002/psp4.70135](https://doi.org/10.1002/psp4.70135) |
| <span class="pk-badge pk-badge--red">Rejected</span> | [Hartmann_2026_FVC_2](drugs/drug_nintedanib/pd_Hartmann_2026_FVC_2.md) | FVC Z-score ← nintedanib · direct Emax (saturable) effect | model (no simulator) | Hartmann S et al., Population Pharmacokinetics and Exposur…, CPT: pharmacometrics & syst… (2026) | [10.1002/psp4.70135](https://doi.org/10.1002/psp4.70135) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 03:23 | 5:01 | 1/1/0 | 1/1/0 | 0/0/0 | 132,562/29,432 | openai / gpt-6-luna | 5 | 0/5 | 5/0 | 0 |

## Coverage

- **PubMed hits:** 16 matched, 14 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 1  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_3 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Schmid_2018.pdf` | Schmid U et al., Population pharmacokinetics of nintedan…, Pulmonary pharmacology & th… (2018) | popPK | 10 | [10.1016/j.pupt.2017.11.004](https://doi.org/10.1016/j.pupt.2017.11.004) | [29133080](https://pubmed.ncbi.nlm.nih.gov/29133080) | A population PK model reports numeric nintedanib absorption, clearance, and volume estimates. |
| `Agema_2024.pdf` | Agema BC et al., Clinical implications of nintedanib pha…, Biomedicine & pharmacothera… (2024) | popPK | 9 | [10.1016/j.biopha.2024.117341](https://doi.org/10.1016/j.biopha.2024.117341) | [39191023](https://pubmed.ncbi.nlm.nih.gov/39191023) | A population-PK model was developed, but no numeric disposition parameter values are present in the provided evidence. |
| `Epstein-Shochet_2020.pdf` | Epstein-Shochet G et al., Inhalation: A means to explore and opti…, Pulmonary pharmacology & th… (2020) | popPK | 8 | [10.1016/j.pupt.2020.101933](https://doi.org/10.1016/j.pupt.2020.101933) | [32750409](https://pubmed.ncbi.nlm.nih.gov/32750409) | The study investigates nintedanib pharmacokinetics, but no numeric disposition parameter values are present in the evidence. |

<sub>queue written 2026-10-07T03:18:52.593446+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Agema_2024 | relevant | 9 | 1 | A population-PK model was developed, but no numeric disposition parameter values are present in the provided evidence. |
| popPK | Chioni_2026 | irrelevant | 0 | 0 | This real-world clinical outcomes study reports no quantitative nintedanib pharmacokinetic parameters. |
| popPK | Epstein-Shochet_2020 | relevant | 8 | 1 | The study investigates nintedanib pharmacokinetics, but no numeric disposition parameter values are present in the evidence. |
| popPK | Hartmann_2026 | relevant | 9 | 1 | The paper develops a nintedanib population-PK model, but its parameter estimates are only referenced in Table S5, which is not provided. |
| popPK | Hartmann_2026_2 | irrelevant | 2 | 1 | This is a human exposure–efficacy analysis, not a disposition-PK study; popPK details are only referenced in supporting information not provided. |
| popPK | Kim_2024 | irrelevant | 0 | 0 | This post hoc clinical outcomes analysis reports FVC differences, not nintedanib pharmacokinetic parameters. |
| popPK | Koziar_2024 | irrelevant | 0 | 0 | This human outcomes study reports no quantitative pharmacokinetic disposition parameters for nintedanib. |
| popPK | Lalla_2025 | irrelevant | 0 | 0 | This human cohort reports clinical outcomes and dosing, not nintedanib pharmacokinetic parameters. |
| popPK | Lenz_2019 | irrelevant | 0 | 0 | This is a human quality-of-life study and reports no nintedanib pharmacokinetic parameters. |
| popPK | Raghu_2018 | irrelevant | 0 | 0 | Nintedanib was only allowed as concomitant therapy, and no pharmacokinetic parameters are reported. |
| popPK | Vaskeikina_2026 | irrelevant | 0 | 0 | This is a human efficacy meta-analysis; it reports treatment effects, not nintedanib disposition parameters. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-07 03:19 UTC</sub>
