<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;pleconaril&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Pleconaril_Kearns1999_reference&quot;,&quot;label&quot;:&quot;Kearns_1999_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_pleconaril/Pleconaril_Kearns1999_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# pleconaril

- **generic name:** pleconaril
- **ATC codes:** `J05AX06`
- **DrugBank:** [DB05105](https://go.drugbank.com/drugs/DB05105) · **PubChem:** [CID 1684](https://pubchem.ncbi.nlm.nih.gov/compound/1684)
- **molar mass:** 381.349 g/mol (C18H18F3N3O3) — DrugBank
- **groups:** investigational

## About

Pleconaril is an investigational antiviral drug being developed to prevent asthma exacerbations and common cold symptoms caused by picornavirus respiratory infections. It is administered orally or intranasally to treat infections caused by viruses in the Picornaviridae family. Pleconaril is currently an investigational medication that has not yet been authorized for general use.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q770293](https://www.wikidata.org/wiki/Q770293), [Wikipedia](https://en.wikipedia.org/wiki/Pleconaril?oldid=1328745875) (CC BY-SA 4.0) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| pleconaril | parent | 381.349 | C18H18F3N3O3 | DrugBank | [1684](https://pubchem.ncbi.nlm.nih.gov/compound/1684) | Abdel-Rahman_1998, Florea_2003, Kearns_1999 |

## Start here

> **Kearns_1999_reference** — <span class="pk-badge pk-badge--orange">Needs review</span> children aged 2 to 12 years, n = 18. [Run it in the simulator](drugs/drug_pleconaril/Pleconaril_Kearns1999_reference.md?tab=Simulation) · [record](drugs/drug_pleconaril/Pleconaril_Kearns1999_reference.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="unknown" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: disposition incomplete — only volume extracted — the engineer needs clearance/e…</sub> | [Florea_2003_reference](drugs/drug_pleconaril/Pleconaril_Florea2003_reference.md) | — | 1-compartment (no model) | 4 | Florea NR et al., Pleconaril, a novel antipicornaviral ag…, Pharmacotherapy (2003) | [10.1592/phco.23.3.339.32099](https://doi.org/10.1592/phco.23.3.339.32099) |
| <span class="pk-rf" hidden data-species="human" data-age="paediatric" data-status="Needs review" data-sim="yes"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: cross_check_disputed</sub> | [Kearns_1999_reference](drugs/drug_pleconaril/Pleconaril_Kearns1999_reference.md) | ▶ model + simulator | 1-compartment, oral | 8 | Kearns GL et al., Single-dose pharmacokinetics of a pleco…, Antimicrobial agents and ch… (1999) | [10.1128/AAC.43.3.634](https://doi.org/10.1128/AAC.43.3.634) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub> | [Abdel-Rahman_1998_reference](drugs/drug_pleconaril/Pleconaril_AbdelRahman1998_reference.md) | — | 1-compartment (no model) | 2 | Abdel-Rahman SM et al., Single-dose pharmacokinetics of a pleco…, Antimicrobial agents and ch… (1998) | [10.1128/AAC.42.10.2706](https://doi.org/10.1128/AAC.42.10.2706) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-24 03:23 | 0:04 | 2/1/0 | 0/0/0 | 0/0/0 | 4,014/178 | einfracz / qwen3.8-27b | 5 | 4/1 | 5/0 | 0 |

## Coverage

- **PubMed hits:** 41 matched, 41 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 3  ·  extracted 0  ·  needs review 2  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Abdel-Rahman_1998 | not_relevant | 0 | 0 | The study investigates the effect of food on pleconaril pharmacokinetics but does not involve any genetic variants or pharmacogenomic analysis. |
| popPK | Abdel-Rahman_1999 | relevant | 10 | 2 | The study is a PK trial of pleconaril in humans, but the specific numeric values for CL, V, and ka are not provided in the text, only statistical comparisons and qualitative descriptions. |
| PGx | Abdel-Rahman_1999 | not_relevant | 0 | 0 | The study evaluates dose-dependent pharmacokinetics in healthy adults but does not examine the effects of any gene variants, genotypes, or phenotypes on pleconaril PK or PD parameters. |
| popPK | Arita_2020 | irrelevant | 0 | 0 | The study characterizes a new compound (avoenin) from avocado and uses pleconaril only as a comparator for cross-resistance, without reporting any pharmacokinetic parameters. |
| PGx | Arita_2020 | not_relevant | 0 | 0 | The paper identifies a new compound (avoenin) and its mechanism of action; it does not report pharmacogenomic effects on pleconaril PK or PD parameters. |
| popPK | Bernard_2015 | irrelevant | 0 | 0 | The study is an in-vitro antiviral assay investigating the efficacy of pleconaril-analogues, not a pharmacokinetic study of pleconaril. |
| PGx | Bernard_2015 | not_relevant | 0 | 0 | The paper reports in vitro antiviral activity of chemical analogues against viruses, not human pharmacogenomic effects on pleconaril PK or PD parameters. |
| popPK | Brown_2005 | irrelevant | 0 | 0 | The paper describes the synthesis and in-vitro antiviral activity of new compounds compared to pleconaril, with no pharmacokinetic or disposition parameters reported. |
| PGx | Brown_2005 | not_relevant | 0 | 0 | The paper focuses on the synthesis of new antiviral compounds and their efficacy against rhinovirus; it does not report pharmacogenomic effects on the PK/PD of pleconaril. |
| popPK | Choi_2010 | irrelevant | 0 | 0 | The study evaluates the antiviral efficacy of a natural compound (orobol 7-O-D-glucoside) against rhinoviruses, with pleconaril mentioned only as a comparator for antiviral activity, not as the subject of a pharmacokinetic study. |
| PGx | Choi_2010 | not_relevant | 0 | 0 | The paper studies the antiviral activity of a plant compound (orobol 7-O-D-glucoside) against rhinoviruses and does not report any pharmacogenomic effects on the PK or PD of pleconaril. |
| popPK | Egorova_2020 | irrelevant | 1 | 0 | The study focuses on the antiviral activity and structure-activity relationships of novel pleconaril derivatives, reporting IC50 values and qualitative bioavailability data in mice, but it does not provide quantitative population pharmacokinetic parameters (CL, V, etc.) for pleconaril. |
| PGx | Egorova_2020 | not_relevant | 0 | 0 | The paper discusses the synthesis of novel drug derivatives and their antiviral potency, not the impact of human gene variants on pleconaril's pharmacokinetics or pharmacodynamics. |
| PGx | Florea_2003 | not_relevant | 0 | 0 | The abstract discusses general pharmacokinetics and clinical applications but contains no information regarding gene variants or pharmacogenomics. |
| popPK | Garifullin_2023 | irrelevant | 0 | 0 | The paper reports in vitro antiviral activity (IC50) and synthesis, with no pharmacokinetic parameters for pleconaril. |
| PGx | Garifullin_2023 | not_relevant | 0 | 0 | The paper reports the antiviral activity of a novel nucleoside analogue against viruses, with Pleconaril mentioned only as a standard control; it does not investigate pharmacogenomic effects on its PK or PD parameters. |
| popPK | Ge_2014 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on the antiviral activity of jiadifenoic acid C against coxsackievirus, where pleconaril is only mentioned as a reference for a resistant virus variant, and no pharmacokinetic parameters are reported. |
| PGx | Ge_2014 | not_relevant | 0 | 0 | The paper reports the antiviral activity of jiadifenoic acids C against Coxsackievirus B3 and its resistance to pleconaril, but it does not report any pharmacogenomic effects (gene variants/genotypes) on the pharmacokinetics or pharmacodynamics of pleconaril. |
| popPK | Jefferson_2014 | irrelevant | 0 | 0 | The paper reviews neuraminidase inhibitors (oseltamivir and zanamivir) for influenza and contains no information or pharmacokinetic data for pleconaril. |
| PGx | Jefferson_2014 | not_relevant | 0 | 0 | The paper reviews neuraminidase inhibitors (oseltamivir and zanamivir) and does not mention pleconaril or any pharmacogenomic effects. |
| popPK | Kaiser_2000 | irrelevant | 0 | 0 | The paper reports in vitro antiviral activity (EC50) against rhinovirus, not pharmacokinetic disposition parameters. |
| PGx | Kaiser_2000 | not_relevant | 0 | 0 | The paper reports in vitro antiviral activity against viruses, not human pharmacogenomic effects on PK/PD parameters. |
| PGx | Kearns_1999 | not_relevant | 0 | 0 | The study examines pharmacokinetics in pediatric patients based on age, but does not report any association between gene variants or genotypes and PK/PD parameters. |
| popPK | Kim_2017 | irrelevant | 0 | 0 | The paper is a preclinical in-vitro antiviral screening study of novel benzothiophene derivatives where pleconaril is only mentioned as a reference for molecular docking, with no PK parameters reported. |
| PGx | Kim_2017 | not_relevant | 0 | 0 | The paper describes the in vitro potency of novel antiviral compounds against rhinoviruses and compares their mechanism to pleconaril, but does not report any pharmacokinetic or pharmacodynamic parameters modulated by a gene variant or genotype. |
| popPK | Lacroix_2014 | irrelevant | 0 | 0 | The study is an in-vitro investigation of a different compound (LPCRW_0005) with pleconaril only mentioned as a mechanistic comparator, containing no pharmacokinetic data. |
| PGx | Lacroix_2014 | not_relevant | 0 | 0 | The paper describes a new antiviral compound and its resistance mutations in the virus, not human pharmacogenomics or PK/PD parameters of pleconaril. |
| popPK | Lane_2023 | irrelevant | 0 | 0 | The paper describes the efficacy of a pleconaril analog in mouse models and does not report pharmacokinetic parameters for pleconaril. |
| PGx | Lane_2023 | not_relevant | 0 | 0 | The paper describes the efficacy and mechanism of a pleconaril analog in mouse models and does not report any pharmacogenomic effects on pharmacokinetic or pharmacodynamic parameters. |
| popPK | Le_2025 | irrelevant | 0 | 0 | The study focuses on a new inhibitor (GCA) for EV-D68, and pleconaril is only used as a comparator in combination studies without any PK parameter reporting. |
| PGx | Le_2025 | not_relevant | 0 | 0 | The paper reports a new antiviral (GCA) inhibiting enterovirus D68 and its synergy with pleconaril, but it does not investigate how human genetic variants affect the pharmacokinetics or pharmacodynamics of pleconaril. |
| popPK | Ma_2017 | irrelevant | 0 | 0 | The study is an in vitro mechanistic investigation of a new antiviral compound where pleconaril is only mentioned as a structural comparator or for combination synergy, with no PK data reported. |
| PGx | Ma_2017 | not_relevant | 0 | 0 | The paper reports viral genotype mutations conferring resistance to a new compound, not human pharmacogenomic variants affecting the PK/PD of pleconaril. |
| popPK | Makarov_2015 | irrelevant | 0 | 0 | The study characterizes a novel compound (OBR-5-340) in mice, and pleconaril is used only as a reference drug for antiviral activity and resistance, with no pharmacokinetic parameters reported for pleconaril. |
| PGx | Makarov_2015 | not_relevant | 0 | 0 | The paper reports the discovery and characterization of a novel antiviral compound (OBR-5-340) and compares its activity against viruses resistant to pleconaril, but it does not report pharmacogenomic effects (human gene variants influencing drug response) on PK or PD parameters for pleconaril. |
| popPK | Repellin_2026 | irrelevant | 0 | 0 | The paper focuses on the antiviral efficacy of 27-hydroxycholesterol in cell models and pleconaril is mentioned only as a comparator with no PK data provided. |
| PGx | Repellin_2026 | not_relevant | 0 | 0 | The paper focuses on the delivery and antiviral efficacy of 27-hydroxycholesterol, mentioning pleconaril only as a comparative agent for resistance, with no pharmacogenomic data reported. |
| popPK | Schmidtke_2005 | irrelevant | 0 | 0 | The study is an in-vitro antiviral susceptibility analysis of Coxsackievirus B3 to pleconaril and does not report any pharmacokinetic parameters. |
| PGx | Schmidtke_2005 | not_relevant | 0 | 1 | The study focuses on viral resistance to pleconaril, not on a human genetic variant affecting the drug's pharmacokinetics or pharmacodynamics. |
| popPK | Sioofy-Khojine_2020 | irrelevant | 0 | 0 | The study is an in-vitro antiviral efficacy screen measuring effective concentrations (EC50) in A549 cells, not a pharmacokinetic study reporting disposition parameters like CL, V, or ka. |
| PGx | Sioofy-Khojine_2020 | not_relevant | 0 | 0 | The paper is a preclinical in vitro study assessing antiviral efficacy and does not report any pharmacogenomic effects or human pharmacokinetic/pharmacodynamic parameters. |
| popPK | Smee_2016 | irrelevant | 0 | 0 | The paper reports in-vitro antiviral susceptibility (EC50/EC90) data, not pharmacokinetic parameters for pleconaril. |
| PGx | Smee_2016 | not_relevant | 0 | 0 | The paper reports in vitro antiviral susceptibility of enteroviruses to pleconaril but does not report pharmacokinetic or pharmacodynamic parameters modulated by host gene variants or genotypes. |
| popPK | Stoyanova_2015 | irrelevant | 1 | 0 | The study reports efficacy and toxicity outcomes (mortality, survival, resistance) in mice, but does not contain quantitative pharmacokinetic parameters (CL, V, t1/2) for pleconaril. |
| PGx | Stoyanova_2015 | not_relevant | 0 | 0 | The study evaluates the efficacy of a drug combination in an animal model and does not investigate the impact of genetic variants on pleconaril's PK or PD parameters. |
| popPK | Stoyanova_2020 | irrelevant | 0 | 0 | The paper is an in vivo efficacy study in mice focusing on viral inhibition and toxicity, with no quantitative pharmacokinetic parameters (CL, V, t1/2) for pleconaril reported. |
| PGx | Stoyanova_2020 | not_relevant | 0 | 0 | The study investigates a novel drug administration scheme for enterovirus infections in mice and does not report any pharmacogenomic effects on pleconaril PK or PD. |
| popPK | Stoyanova_2025 | irrelevant | 0 | 0 | The paper is an in-vivo antiviral efficacy study in mice measuring survival and viral resistance, containing no pharmacokinetic parameters (CL, V, ka) for pleconaril. |
| PGx | Stoyanova_2025 | not_relevant | 0 | 0 | The paper evaluates antiviral efficacy in mice but does not investigate the impact of human genetic variants on the pharmacokinetics or pharmacodynamics of pleconaril. |
| popPK | Volobueva_2020 | irrelevant | 0 | 0 | This is a medicinal chemistry and in-vitro antiviral activity study (synthesis and IC50/CC50) of pleconaril analogues, not a pharmacokinetic study. |
| PGx | Volobueva_2020 | not_relevant | 0 | 0 | The paper reports the synthesis and antiviral activity of novel pleconaril analogs, not the pharmacogenomics of pleconaril itself. |
| popPK | Yang_2019 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of midazolam, using pleconaril only as a CYP3A4 inhibitor covariate to adjust midazolam clearance rather than reporting pleconaril's own disposition parameters. |
| PGx | Yang_2019 | not_relevant | 0 | 0 | The paper focuses on midazolam PK and does not report any gene variant or genotype effects on pharmacokinetic or pharmacodynamic parameters of pleconaril. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bpleconaril%5D&body=Drug%3A%20pleconaril%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_pleconaril/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-24 03:20 UTC</sub>
