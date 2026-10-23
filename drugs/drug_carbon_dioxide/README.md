<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V03A&quot;,&quot;href&quot;:&quot;atc/V03A.md&quot;},{&quot;label&quot;:&quot;carbon dioxide&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;CarbonDioxide_Hellinga2023_reference&quot;,&quot;label&quot;:&quot;Hellinga_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_carbon_dioxide/CarbonDioxide_Hellinga2023_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# carbon dioxide

- **generic name:** carbon dioxide
- **ATC codes:** `V03AN02`
- **DrugBank:** [DB09157](https://go.drugbank.com/drugs/DB09157) · **PubChem:** [CID 280](https://pubchem.ncbi.nlm.nih.gov/compound/280)
- **molar mass:** 44.0095 g/mol (CO2) — DrugBank
- **groups:** approved, investigational, vet_approved

## About

Carbon dioxide is a medical gas used in healthcare, for example to stimulate breathing and as a vasodilator. It is an approved medical gas and is also approved for veterinary use, with some investigational applications.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q1997](https://www.wikidata.org/wiki/Q1997) and the WHO ATC classification; not checked by a person.</small>

## Start here

> **Hellinga_2023_reference** — <span class="pk-badge pk-badge--green">Reproduces paper</span> review reference. [Run it in the simulator](drugs/drug_carbon_dioxide/CarbonDioxide_Hellinga2023_reference.md?tab=Simulation) · [record](drugs/drug_carbon_dioxide/CarbonDioxide_Hellinga2023_reference.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## Parameters across studies

| parameter | as named | value | unit | as reported | population | species | status | record |
|---|---|---|---|---|---|---|---|---|
| CL | CL | 76 | L/h | 76.0 L/h | review reference | human | <span class="pk-badge pk-badge--green">Reproduces paper</span> | [Hellinga_2023_reference](drugs/drug_carbon_dioxide/CarbonDioxide_Hellinga2023_reference.md) |
| V | V1 | 37 | L | 37.0 L | review reference | human | <span class="pk-badge pk-badge--green">Reproduces paper</span> | [Hellinga_2023_reference](drugs/drug_carbon_dioxide/CarbonDioxide_Hellinga2023_reference.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. Rejected records are left out.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="unknown" data-status="Reproduces paper" data-sim="yes"></span><span class="pk-badge pk-badge--green">Reproduces paper</span> | [Hellinga_2023_reference](drugs/drug_carbon_dioxide/CarbonDioxide_Hellinga2023_reference.md) | ▶ model + simulator | 2-compartment, IV | 4 | Hellinga M et al., Oral Oxycodone-Induced Respiratory Depr…, Clinical pharmacology and t… (2023) | [10.1002/cpt.2863](https://doi.org/10.1002/cpt.2863) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Kazama_1996_reference](drugs/drug_carbon_dioxide/CarbonDioxide_Kazama1996_reference.md) | — | 1-compartment (no model) | 0 | Kazama T et al., Carbon dioxide output in laparoscopic c…, British journal of anaesthe… (1996) | [10.1093/bja/76.4.530](https://doi.org/10.1093/bja/76.4.530) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">Rejected</span> | [Hellinga_2023_VE](drugs/drug_carbon_dioxide/pd_Hellinga_2023_VE.md) | Minute ventilation (ventilatory response to brain tissue carbon dioxide partial pressure) biomarker turnover ← carbon dioxide (brain tissue/effect-site PCO2) | — | Hellinga M et al., Oral Oxycodone-Induced Respiratory Depr…, Clinical pharmacology and t… (2023) | [10.1002/cpt.2863](https://doi.org/10.1002/cpt.2863) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 18:35 | 3:31 | 1/1/0 | 0/1/0 | 0/0/0 | 172,110/10,794 | ollama / glm-5.3-flash | 7 | 3/4 | 7/0 | 0 |

## Coverage

- **PubMed hits:** 186 matched, 20 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 2  ·  extracted 1  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Kazama_1996.pdf` | Kazama T et al., Carbon dioxide output in laparoscopic c…, British journal of anaesthe… (1996) | popPK | 8 | [10.1093/bja/76.4.530](https://doi.org/10.1093/bja/76.4.530) | [8652326](https://pubmed.ncbi.nlm.nih.gov/8652326) | Reports a two-compartment kinetic model of absorbed CO2 in humans with numeric time constants (8.2 and 990 min) present in the abstract, though clearance/volume terms are not given. |

<sub>queue written 2026-10-07T18:33:03.904479+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Babenco_2000 | irrelevant | 0 | 0 | CO2 is only a ventilatory-response probe; the PK parameters reported are for remifentanil, not carbon dioxide. |
| popPK | Bouillon_1999 | irrelevant | 2 | 4 | Carbon dioxide is only a measured biomarker (PaCO2) in a PK/PD study of alfentanil; the CO2 elimination rate constant (0.088 min⁻¹) is a pharmacodynamic parameter, not disposition PK of CO2 as the subject drug. |
| popPK | Dholakia_2020 | irrelevant | 0 | 0 | The drug studied is midazolam; carbon dioxide appears only as a monitored physiologic variable (Pe'CO2), not as the subject drug. |
| popPK | Grangeat_2023 | irrelevant | 2 | 1 | This is a sensor/modeling paper for a capnometry wristband using convection-diffusion transport equations, not a pharmacokinetic study of carbon dioxide; no CL/V/ka or population-PK parameters are reported, and no numeric disposition values appear in the evidence. |
| popPK | Hellinga_2023 | irrelevant | 3 | 4 | Carbon dioxide is used only as a diagnostic challenge/probe in an oxycodone PK/PD study; the reported CL/V/Q values are oxycodone's, and CO2 model parameters (VTS, Q, τ) are physiological ventilation-model terms, not CO2 disposition PK. |
| popPK | Hoffman_2021 | irrelevant | 0 | 0 | This is a physiology study of pCO2 effects on cerebral blood flow/autoregulation in preterm infants, not a pharmacokinetic study of carbon dioxide disposition; no CL, V, or PK model parameters are reported. |
| popPK | Hughes_2023 | irrelevant | 0 | 0 | This is a respiratory physiology editorial on gas exchange (shunt/dead space) in COVID-19, not a pharmacokinetic study of carbon dioxide disposition; no PK parameters (CL, V, half-life) are reported. |
| popPK | Kang_2021 | irrelevant | 0 | 0 | This is a pharmacodynamic model of sevoflurane's effect on tidal volume in children; CO2 is only a measured vital sign, not the subject drug, and no CO2 disposition parameters are reported. |
| popPK | Kapke_1980 | irrelevant | 0 | 0 | This is an in-vitro bacterial enzyme kinetics study of PEPCK, not a pharmacokinetic study of carbon dioxide disposition. |
| popPK | Laurence_2003 | irrelevant | 0 | 0 | This is an ecology paper about ozone effects on plants; carbon dioxide is only mentioned as an environmental stressor, with no PK parameters. |
| popPK | Lee_2019 | irrelevant | 2 | 3 | This is a pharmacodynamic (RR–ETCO2) model, not a PK disposition study of carbon dioxide; some numeric parameters (ke0 0.467 min⁻¹, Ce50) appear in text but Table 2 values are not shown. |
| popPK | Lee_2019_2 | irrelevant | 0 | 0 | This is a theoretical/biophysical modeling paper on hemoglobin allostery and the Bohr effect; CO2 is an allosteric ligand, not a dosed drug, and no PK parameters (CL, V, half-life) are reported. |
| popPK | Liu_2023 | irrelevant | 0 | 0 | This is an agricultural meta-analysis of forage crop responses to drought and elevated CO2, with no pharmacokinetic parameters for carbon dioxide. |
| popPK | Mertens_2004 | irrelevant | 0 | 0 | The study models propofol PK; carbon dioxide is only a monitored end-tidal vital sign, not the subject drug. |
| popPK | Német_2020 | irrelevant | 0 | 0 | In-vitro chemical oscillator study with no pharmacokinetic disposition parameters for carbon dioxide. |
| popPK | OConnor_2025 | irrelevant | 0 | 0 | CO2 appears only as a physiological gas-exchange measure (VCO2, PETCO2), not as a drug with PK parameters. |
| popPK | Scheipers_1975 | irrelevant | 1 | 2 | This is an in-vitro blood gas dissociation/buffering study, not a pharmacokinetic study with disposition parameters for carbon dioxide. |
| popPK | Yang_2024 | irrelevant | 0 | 0 | Carbon dioxide appears only as a PD mediator in a ventilation–CO2 linear relationship within a naloxone/opioid PK-PD simulation; no CO2 disposition parameters are reported, and numeric PK values concern naloxone and carfentanil (some in supplementary tables). |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-07 18:33 UTC</sub>
