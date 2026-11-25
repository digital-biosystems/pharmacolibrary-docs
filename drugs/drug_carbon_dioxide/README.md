<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V03A&quot;,&quot;href&quot;:&quot;atc/V03A.md&quot;},{&quot;label&quot;:&quot;carbon dioxide&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;CarbonDioxide_Hellinga2023_reference&quot;,&quot;label&quot;:&quot;Hellinga_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_carbon_dioxide/CarbonDioxide_Hellinga2023_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# carbon dioxide

- **generic name:** carbon dioxide
- **ATC codes:** `V03AN02`
- **DrugBank:** [DB09157](https://go.drugbank.com/drugs/DB09157) · **PubChem:** [CID 280](https://pubchem.ncbi.nlm.nih.gov/compound/280)
- **molar mass:** 44.0095 g/mol (CO2) — DrugBank
- **groups:** approved, investigational, vet_approved

## About

Carbon dioxide is a medical gas and a vasodilator agent. It is administered by inhalation in gas or liquid form.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q1997](https://www.wikidata.org/wiki/Q1997), [Wikipedia](https://en.wikipedia.org/wiki/Carbon_dioxide?oldid=1385120994) (CC BY-SA 4.0), DrugBank's routes and dosage forms and the WHO ATC classification; not checked by a person.</small>

## Start here

> **Hellinga_2023_reference** — <span class="pk-badge pk-badge--orange">Needs review</span> review reference. [Run it in the simulator](drugs/drug_carbon_dioxide/CarbonDioxide_Hellinga2023_reference.md?tab=Simulation) · [record](drugs/drug_carbon_dioxide/CarbonDioxide_Hellinga2023_reference.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="unknown" data-status="Needs review" data-sim="yes"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: cross_check_disputed</sub> | [Hellinga_2023_reference](drugs/drug_carbon_dioxide/CarbonDioxide_Hellinga2023_reference.md) | ▶ model + simulator | 2-compartment, IV | 4 | Hellinga M et al., Oral Oxycodone-Induced Respiratory Depr…, Clinical pharmacology and t… (2023) | [10.1002/cpt.2863](https://doi.org/10.1002/cpt.2863) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Kazama_1996_reference](drugs/drug_carbon_dioxide/CarbonDioxide_Kazama1996_reference.md) | — | 1-compartment (no model) | 0 | Kazama T et al., Carbon dioxide output in laparoscopic c…, British journal of anaesthe… (1996) | [10.1093/bja/76.4.530](https://doi.org/10.1093/bja/76.4.530) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Hellinga_2023_VE](drugs/drug_carbon_dioxide/pd_Hellinga_2023_VE.md) | Minute ventilation (ventilatory response to brain tissue carbon dioxide partial pressure) biomarker turnover ← carbon dioxide (brain tissue/effect-site PCO2) | — | Hellinga M et al., Oral Oxycodone-Induced Respiratory Depr…, Clinical pharmacology and t… (2023) | [10.1002/cpt.2863](https://doi.org/10.1002/cpt.2863) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-23 19:41 | 0:03 | 1/1/0 | 1/0/0 | 0/0/0 | 3,869/141 | einfracz / qwen3.8-27b | 7 | 3/4 | 7/0 | 0 |

## Coverage

- **PubMed hits:** 186 matched, 20 returned
- **screened:** 1  ·  **relevant:** 0
- **records:** 2  ·  extracted 0  ·  needs review 1  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Babenco_2000 | irrelevant | 0 | 0 | Carbon dioxide is used as a diagnostic stimulus to measure ventilatory responses to remifentanil, not as the subject drug for pharmacokinetic modeling. |
| PGx | Babenco_2000 | not_relevant | 0 | 0 | The study investigates the pharmacodynamics of remifentanil on carbon dioxide response in healthy volunteers but does not report any pharmacogenomic effects (gene variants/genotypes) on PK or PD parameters. |
| popPK | Bouillon_1999 | irrelevant | 0 | 0 | The study models the pharmacokinetics of alfentanil, and carbon dioxide is used only as a physiologic variable (PaCO2) for pharmacodynamic modeling, not as the subject drug. |
| PGx | Bouillon_1999 | not_relevant | 0 | 0 | The paper reports a PK/PD model for alfentanil's effect on carbon dioxide (PaCO2), but does not report a pharmacogenomic effect on these parameters. |
| popPK | Dholakia_2020 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of midazolam in cats, not carbon_dioxide; carbon dioxide is only measured as a physiologic parameter (end-tidal CO2). |
| PGx | Dholakia_2020 | not_relevant | 0 | 0 | The study focuses on the pharmacokinetics of midazolam in cats and does not investigate any gene variants, genotypes, or phenotypes affecting carbon dioxide parameters. |
| popPK | Grangeat_2023 | irrelevant | 2 | 1 | This is a sensor/modeling paper for a capnometry wristband using convection-diffusion transport equations, not a pharmacokinetic study of carbon dioxide; no CL/V/ka or population-PK parameters are reported, and no numeric disposition values appear in the evidence. |
| popPK | Hellinga_2023 | irrelevant | 3 | 4 | Carbon dioxide is used only as a diagnostic challenge/probe in an oxycodone PK/PD study; the reported CL/V/Q values are oxycodone's, and CO2 model parameters (VTS, Q, τ) are physiological ventilation-model terms, not CO2 disposition PK. |
| popPK | Hoffman_2021 | irrelevant | 0 | 0 | The study investigates the physiological association between carbon dioxide levels and cerebral hemodynamics in premature infants, not the pharmacokinetic disposition parameters of carbon dioxide as a drug. |
| PGx | Hoffman_2021 | not_relevant | 0 | 0 | The paper studies the physiological relationship between carbon dioxide levels and cerebral blood flow in neonates, not the effect of a gene variant on the pharmacokinetics or pharmacodynamics of a drug. |
| popPK | Hughes_2023 | irrelevant | 0 | 0 | This is a respiratory physiology editorial on gas exchange (shunt/dead space) in COVID-19, not a pharmacokinetic study of carbon dioxide disposition; no PK parameters (CL, V, half-life) are reported. |
| popPK | Kang_2021 | irrelevant | 0 | 0 | The study focuses on the pharmacodynamics of sevoflurane, and carbon dioxide is mentioned only as a recorded variable (end-tidal CO2), not as the subject drug for PK parameter estimation. |
| PGx | Kang_2021 | not_relevant | 0 | 0 | The paper models the pharmacodynamic effect of sevoflurane on tidal volume and does not investigate gene variants or their impact on carbon dioxide pharmacokinetics/pharmacodynamics. |
| popPK | Kapke_1980 | irrelevant | 0 | 0 | The paper investigates carbon dioxide metabolism in bacteria (Capnocytophaga ochracea) via enzyme kinetics, not pharmacokinetic parameters (CL, V, ka) for a drug. |
| PGx | Kapke_1980 | not_relevant | 0 | 0 | The paper describes bacterial enzymology and carbon fixation by *Capnocytophaga ochracea*, unrelated to human pharmacogenomics or the pharmacokinetics/pharmacodynamics of carbon dioxide as a therapeutic agent. |
| popPK | Kazama_1996 | irrelevant | 2 | 8 | The study measures carbon dioxide output (physiology/respiration) during laparoscopic surgery and fits a two-compartment model to the *output* kinetics, but does not report pharmacokinetic parameters (CL, Vd) for carbon dioxide as a drug in a PK sense (e.g., plasma clearance). |
| PGx | Kazama_1996 | not_relevant | 0 | 0 | The paper investigates the physiological impact of laparoscopic surgery and anesthesia on carbon dioxide elimination and does not report any pharmacogenomic effects of a specific drug. |
| popPK | Laurence_2003 | irrelevant | 0 | 0 | The paper discusses ozone and ecosystem responses, with carbon dioxide mentioned only as an environmental factor, and contains no pharmacokinetic data. |
| PGx | Laurence_2003 | not_relevant | 0 | 0 | The paper discusses the ecological risk of ozone on natural systems and mentions carbon dioxide as an environmental stressor, not a drug; it contains no pharmacogenomic or PK/PD data. |
| popPK | Lee_2019 | irrelevant | 0 | 0 | The paper describes a pharmacodynamic model relating respiratory rate to end-tidal carbon dioxide (ETCO2) as a clinical endpoint, not the population pharmacokinetics (clearance, volume, etc.) of carbon dioxide as a drug. |
| PGx | Lee_2019 | not_relevant | 0 | 0 | The study models the pharmacodynamic relationship between respiratory rate and end-tidal carbon dioxide (ETCO2), which are physiological variables rather than the pharmacokinetics or pharmacodynamics of a specific administered drug; 'carbon_dioxide' is not a drug in this context. |
| popPK | Lee_2019_2 | irrelevant | 0 | 0 | This is a theoretical/biophysical modeling paper on hemoglobin allostery and the Bohr effect; CO2 is an allosteric ligand, not a dosed drug, and no PK parameters (CL, V, half-life) are reported. |
| popPK | Liu_2023 | irrelevant | 0 | 0 | The paper is a meta-analysis of forage crop growth under environmental stress, not a pharmacokinetic study of carbon dioxide as a drug. |
| PGx | Liu_2023 | not_relevant | 0 | 0 | The paper is an agricultural meta-analysis regarding the effects of drought and elevated CO2 on forage crops, not a pharmacogenomic study. |
| popPK | Mertens_2004 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of propofol, and carbon dioxide is only monitored as an end-tidal measurement, not the subject drug. |
| PGx | Mertens_2004 | not_relevant | 0 | 0 | The paper investigates drug-drug interactions (alfentanil on propofol) rather than pharmacogenomic effects. |
| popPK | Német_2020 | irrelevant | 0 | 0 | In-vitro chemical oscillator study with no pharmacokinetic disposition parameters for carbon dioxide. |
| popPK | OConnor_2025 | irrelevant | 0 | 0 | CO2 appears only as a physiological gas-exchange measure (VCO2, PETCO2), not as a drug with PK parameters. |
| popPK | Scheipers_1975 | irrelevant | 0 | 0 | The study reports gas dissociation curves and buffering properties of blood, not pharmacokinetic disposition parameters for a drug. |
| PGx | Scheipers_1975 | not_relevant | 0 | 0 | The paper describes physiological dissociation curves in duck blood and does not report any pharmacogenomic effects on carbon dioxide parameters. |
| popPK | Yang_2024 | irrelevant | 0 | 0 | The paper is a PK/PD modeling study of naloxone and opioids; carbon dioxide is only used as a physiological variable in the PD model, not the subject drug. |
| PGx | Yang_2024 | not_relevant | 0 | 0 | The paper focuses on pharmacokinetic-pharmacodynamic modeling of naloxone and opioids; it does not report any pharmacogenomic effects or gene variant impacts on PK/PD parameters. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bcarbon_dioxide%5D&body=Drug%3A%20carbon_dioxide%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_carbon_dioxide/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-23 19:41 UTC</sub>
