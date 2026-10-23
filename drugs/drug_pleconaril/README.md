<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;pleconaril&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Pleconaril_Kearns1999_reference&quot;,&quot;label&quot;:&quot;Kearns_1999_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_pleconaril/Pleconaril_Kearns1999_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# pleconaril

- **generic name:** pleconaril
- **ATC codes:** `J05AX06`
- **DrugBank:** [DB05105](https://go.drugbank.com/drugs/DB05105) · **PubChem:** [CID 1684](https://pubchem.ncbi.nlm.nih.gov/compound/1684)
- **molar mass:** 381.349 g/mol (C18H18F3N3O3) — DrugBank
- **groups:** investigational

## About

Pleconaril is an antiviral agent that was developed for treating infections caused by picornaviruses, such as the common cold and enteroviral infections. It remains investigational and has not been approved for routine clinical use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q770293](https://www.wikidata.org/wiki/Q770293) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| pleconaril | parent | 381.349 | C18H18F3N3O3 | DrugBank | [1684](https://pubchem.ncbi.nlm.nih.gov/compound/1684) | Abdel-Rahman_1998, Kearns_1999 |

## Start here

> **Kearns_1999_reference** — <span class="pk-badge pk-badge--green">Reproduces paper</span> children aged 2 to 12 years, n = 18. [Run it in the simulator](drugs/drug_pleconaril/Pleconaril_Kearns1999_reference.md?tab=Simulation) · [record](drugs/drug_pleconaril/Pleconaril_Kearns1999_reference.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## Parameters across studies

| parameter | as named | value | unit | as reported | population | n | species | status | record |
|---|---|---|---|---|---|---|---|---|---|
| CL | CL/F | 56.7 ‡ | L/h | 0.81 liters/h/kg | children aged 2 to 12 years | 18 | human | <span class="pk-badge pk-badge--green">Reproduces paper</span> | [Kearns_1999_reference](drugs/drug_pleconaril/Pleconaril_Kearns1999_reference.md) |
| ka | kabs | 0.75 | 1/h | 0.75 1/h | children aged 2 to 12 years | 18 | human | <span class="pk-badge pk-badge--green">Reproduces paper</span> | [Kearns_1999_reference](drugs/drug_pleconaril/Pleconaril_Kearns1999_reference.md) |
| t½ | t1/2z | 5.7 | h | 5.7 h | children aged 2 to 12 years | 18 | human | <span class="pk-badge pk-badge--green">Reproduces paper</span> | [Kearns_1999_reference](drugs/drug_pleconaril/Pleconaril_Kearns1999_reference.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. ‡ given per kg in the paper; shown for a 70 kg adult. Rejected records are left out.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="paediatric" data-status="Reproduces paper" data-sim="yes"></span><span class="pk-badge pk-badge--green">Reproduces paper</span> | [Kearns_1999_reference](drugs/drug_pleconaril/Pleconaril_Kearns1999_reference.md) | ▶ model + simulator | 1-compartment, oral | 8 | Kearns GL et al., Single-dose pharmacokinetics of a pleco…, Antimicrobial agents and ch… (1999) | [10.1128/AAC.43.3.634](https://doi.org/10.1128/AAC.43.3.634) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub> | [Abdel-Rahman_1998_reference](drugs/drug_pleconaril/Pleconaril_AbdelRahman1998_reference.md) | — | 1-compartment (no model) | 2 | Abdel-Rahman SM et al., Single-dose pharmacokinetics of a pleco…, Antimicrobial agents and ch… (1998) | [10.1128/AAC.42.10.2706](https://doi.org/10.1128/AAC.42.10.2706) |
| <span class="pk-rf" hidden data-species="human" data-age="unknown" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Florea_2003_reference](drugs/drug_pleconaril/Pleconaril_Florea2003_reference.md) | — | 1-compartment (no model) | 0 | Florea NR et al., Pleconaril, a novel antipicornaviral ag…, Pharmacotherapy (2003) | [10.1592/phco.23.3.339.32099](https://doi.org/10.1592/phco.23.3.339.32099) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 16:26 | 1:28 | 1/2/0 | 0/0/0 | 0/0/0 | 103,720/3,805 | ollama / glm-5.3-flash | 5 | 1/0 | 5/0 | 0 |

## Coverage

- **PubMed hits:** 41 matched, 41 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 3  ·  extracted 1  ·  needs_review 0  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_3 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Kearns_1999.pdf` | Kearns GL et al., Single-dose pharmacokinetics of a pleco…, Antimicrobial agents and ch… (1999) | popPK | 10 | [10.1128/AAC.43.3.634](https://doi.org/10.1128/AAC.43.3.634) | [10049279](https://pubmed.ncbi.nlm.nih.gov/10049279) | Full compartmental PK parameters (ka, kel, CL/V, Vss, t½) for pleconaril are reported directly in the abstract. |
| `Abdel-Rahman_1999.pdf` | Abdel-Rahman SM et al., Single oral dose escalation pharmacokin…, Journal of clinical pharmac… (1999) | popPK | 9 | [10.1177/00912709922008227](https://doi.org/10.1177/00912709922008227) | [10354965](https://pubmed.ncbi.nlm.nih.gov/10354965) | Human single-dose escalation PK study with two-compartment model and parameters (ka, t1/2, Cl/F, Vdss/F) reported, but the actual numeric values are not included in the evidence (only r² values appear). |
| `Abdel-Rahman_1998.pdf` | Abdel-Rahman SM et al., Single-dose pharmacokinetics of a pleco…, Antimicrobial agents and ch… (1998) | popPK | 8 | [10.1128/AAC.42.10.2706](https://doi.org/10.1128/AAC.42.10.2706) | [9756781](https://pubmed.ncbi.nlm.nih.gov/9756781) | Human single-dose PK of pleconaril with a one-compartment model; AUC and Cmax values are given in the abstract, but CL, V, ka, and half-life values are not shown and may be in tables not provided. |

<sub>queue written 2026-10-07T16:25:26.829137+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abdel-Rahman_1999 | relevant | 9 | 3 | Human single-dose escalation PK study with two-compartment model and parameters (ka, t1/2, Cl/F, Vdss/F) reported, but the actual numeric values are not included in the evidence (only r² values appear). |
| popPK | Arita_2020 | irrelevant | 0 | 0 | This is an in-vitro antiviral compound characterization study; pleconaril is only mentioned for cross-resistance, with no PK parameters. |
| popPK | Bernard_2015 | irrelevant | 0 | 0 | In-vitro antiviral activity study of pleconaril analogues with no pharmacokinetic parameters for pleconaril. |
| popPK | Brown_2005 | irrelevant | 0 | 0 | Medicinal chemistry paper on HRV capsid binders; pleconaril is only a comparator with EC50 values, no PK parameters. |
| PGx | Egorova_2020 | not_relevant | 0 | 0 | Medicinal chemistry SAR study of pleconaril derivatives; no gene variant/genotype effects on PK or PD parameters reported. |
| popPK | Jefferson_2014 | irrelevant | 0 | 0 | This is a Cochrane review of neuraminidase inhibitors (oseltamivir, zanamivir) with no pleconaril PK data or disposition parameters. |
| popPK | Kaiser_2000 | irrelevant | 0 | 0 | In vitro antiviral potency (EC50) study with no pharmacokinetic disposition parameters for pleconaril. |
| popPK | Kim_2017 | irrelevant | 0 | 0 | This is an antiviral drug-discovery/medicinal chemistry paper about novel capsid inhibitors; pleconaril is only mentioned as a docking comparator, with no PK parameters for pleconaril. |
| popPK | Lacroix_2014 | irrelevant | 0 | 0 | This is an antiviral mechanism study of a different compound; pleconaril is only a comparator and no PK parameters are reported. |
| popPK | Lane_2023 | irrelevant | 0 | 0 | Efficacy study of a pleconaril analog in mice; no PK parameters reported. |
| popPK | Le_2025 | irrelevant | 0 | 0 | This is a virology/efficacy study of a different inhibitor (GCA); pleconaril appears only as a combination comparator with no PK parameters. |
| popPK | Ma_2017 | irrelevant | 0 | 0 | Pleconaril is only mentioned as a comparator in an in vitro antiviral study of a different compound; no PK parameters for pleconaril are reported. |
| popPK | Repellin_2026 | irrelevant | 0 | 0 | Pleconaril is only mentioned as a comparator antiviral; no PK parameters for pleconaril are reported. |
| popPK | Smee_2016 | irrelevant | 0 | 0 | In-vitro antiviral susceptibility study with EC50/EC90 values only; no PK disposition parameters for pleconaril. |
| popPK | Yang_2019 | irrelevant | 0 | 0 | The PK model and parameters are for midazolam; pleconaril appears only as a covariate/probe, not the subject drug. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-07 16:25 UTC</sub>
