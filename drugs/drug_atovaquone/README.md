<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P01A&quot;,&quot;href&quot;:&quot;atc/P01A.md&quot;},{&quot;label&quot;:&quot;atovaquone&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Atovaquone_CherkaouiRbati2023_reference&quot;,&quot;label&quot;:&quot;Cherkaoui-Rbati_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_atovaquone/Atovaquone_CherkaouiRbati2023_reference.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Atovaquone_McGready2003_reference&quot;,&quot;label&quot;:&quot;McGready_2003_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_atovaquone/Atovaquone_McGready2003_reference.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

# atovaquone

- **generic name:** atovaquone
- **ATC codes:** `P01AX06`, `P01BB51`
- **DrugBank:** [DB01117](https://go.drugbank.com/drugs/DB01117) · **PubChem:** [CID 74989](https://pubchem.ncbi.nlm.nih.gov/compound/74989)
- **molar mass:** 366.837 g/mol (C22H19ClO3) — DrugBank
- **groups:** approved, investigational

## About

Atovaquone is an naphthoquinone antiprotozoal medication used to prevent and treat pneumonia caused by Pneumocystis jirovecii, malaria, and babesiosis. It is given by mouth as tablets or a liquid suspension. It is sold under the brand name Mepron and is used in combination with other drugs for specific infections.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q418179](https://www.wikidata.org/wiki/Q418179), [Wikipedia](https://en.wikipedia.org/wiki/Atovaquone?oldid=1384716073) (CC BY-SA 4.0), DrugBank's routes and dosage forms and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| atovaquone | parent | 366.837 | C22H19ClO3 | DrugBank | [74989](https://pubchem.ncbi.nlm.nih.gov/compound/74989) | Hussein_1997, McGready_2003 |
| cycloguanil | metabolite | — (mass units only) | — | — | — | — |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="unknown" data-status="Rejected" data-sim="yes"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: paper_subject_is_other_drug</sub> | [Cherkaoui-Rbati_2023_reference](drugs/drug_atovaquone/Atovaquone_CherkaouiRbati2023_reference.md) | ▶ model + simulator | 2-compartment, IV | 5 | Cherkaoui-Rbati MH et al., A pharmacokinetic-pharmacodynamic model…, CPT: pharmacometrics & syst… (2023) | [10.1002/psp4.12875](https://doi.org/10.1002/psp4.12875) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Hussein_1997_reference](drugs/drug_atovaquone/Atovaquone_Hussein1997_reference.md) | — | 1-compartment (no model) | 0 | Hussein Z et al., Population pharmacokinetics of atovaquo…, Clinical pharmacology and t… (1997) | [10.1016/S0009-9236(97)90132-6](https://doi.org/10.1016/S0009-9236(97)90132-6) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="yes"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: T3_output_variable</sub><br><sub>blocking: T3_topology_template</sub> | [McGready_2003_reference](drugs/drug_atovaquone/Atovaquone_McGready2003_reference.md) | ▶ model + simulator | 1-compartment, oral | 3 | McGready R et al., The pharmacokinetics of atovaquone and…, European journal of clinica… (2003) | [10.1007/s00228-003-0652-9](https://doi.org/10.1007/s00228-003-0652-9) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Na-Bangchang_2005_reference](drugs/drug_atovaquone/Atovaquone_NaBangchang2005_reference.md) | — | parent + metabolite (no model) | 0 | Na-Bangchang K et al., The pharmacokinetics and pharmacodynami…, European journal of clinica… (2005) | [10.1007/s00228-005-0969-7](https://doi.org/10.1007/s00228-005-0969-7) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Batiha_2019_RFU](drugs/drug_atovaquone/pd_Batiha_2019_RFU.md) | Growth inhibition of B. bovis (relative fluorescence units) ← atovaquone · inhibition effect | — | Batiha GE et al., Evaluation of the inhibitory effect of…, Tropical medicine and health (2019) | [10.1186/s41182-019-0171-8](https://doi.org/10.1186/s41182-019-0171-8) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Batiha_2019_RFU_2](drugs/drug_atovaquone/pd_Batiha_2019_RFU_2.md) | Growth inhibition of B. bigemina (relative fluorescence units) ← atovaquone · inhibition effect | — | Batiha GE et al., Evaluation of the inhibitory effect of…, Tropical medicine and health (2019) | [10.1186/s41182-019-0171-8](https://doi.org/10.1186/s41182-019-0171-8) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Batiha_2019_RFU_3](drugs/drug_atovaquone/pd_Batiha_2019_RFU_3.md) | Growth inhibition of B. divergens (relative fluorescence units) ← atovaquone · inhibition effect | — | Batiha GE et al., Evaluation of the inhibitory effect of…, Tropical medicine and health (2019) | [10.1186/s41182-019-0171-8](https://doi.org/10.1186/s41182-019-0171-8) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Batiha_2019_RFU_4](drugs/drug_atovaquone/pd_Batiha_2019_RFU_4.md) | Growth inhibition of B. caballi (relative fluorescence units) ← atovaquone · inhibition effect | — | Batiha GE et al., Evaluation of the inhibitory effect of…, Tropical medicine and health (2019) | [10.1186/s41182-019-0171-8](https://doi.org/10.1186/s41182-019-0171-8) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Batiha_2019_RFU_5](drugs/drug_atovaquone/pd_Batiha_2019_RFU_5.md) | Growth inhibition of T. equi (relative fluorescence units) ← atovaquone · inhibition effect | — | Batiha GE et al., Evaluation of the inhibitory effect of…, Tropical medicine and health (2019) | [10.1186/s41182-019-0171-8](https://doi.org/10.1186/s41182-019-0171-8) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Smith_2023_ratiometric_lum](drugs/drug_atovaquone/pd_Smith_2023_ratiometric_lum.md) | ratiometric lum ← atovaquone · direct sigmoid Emax (Hill) effect | — | Smith D et al., A High-Throughput Amenable Dual Lucifer…, Analytical chemistry (2023) | [10.1021/acs.analchem.2c02174](https://doi.org/10.1021/acs.analchem.2c02174) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-23 19:04 | 0:06 | 0/4/0 | 6/0/0 | 0/0/0 | 3,940/181 | einfracz / qwen3.8-27b | 6 | 0/6 | 6/0 | 0 |

## Coverage

- **PubMed hits:** 31 matched, 17 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 4  ·  extracted 0  ·  needs review 0  ·  rejected 4  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Batiha_2019 | irrelevant | 0 | 0 | This is an in-vitro/in-vivo efficacy study of ivermectin against Babesia/Theileria; atovaquone is only a comparator drug with IC50 values, no PK disposition parameters. |
| popPK | Cella_2012_2 | irrelevant | 2 | 0 | The provided evidence describes a model-based simulation study but does not contain any specific quantitative PK parameter values for atovaquone. |
| PGx | Cella_2012_2 | not_relevant | 1 | 0 | The paper discusses population PK and covariates like ethnicity and body weight, but does not report specific gene variants or genotypes affecting PK/PD parameters. |
| popPK | Cherkaoui-Rbati_2023 | irrelevant | 0 | 0 | The PK/PD model and parameters (CL, Q1, EC50) all pertain to DSM265, not atovaquone, which is only mentioned as a comparator prophylactic. |
| popPK | Dipanjan_2017 | irrelevant | 0 | 0 | The paper is a narrative review on drug resistance strategies for malaria and contains no original quantitative pharmacokinetic parameter values (CL, V, ka, etc.) for atovaquone. |
| PGx | Dipanjan_2017 | not_relevant | 0 | 0 | The paper is a review of triple combination therapy strategies for malaria resistance and does not report any pharmacogenomic data or specific gene variant effects on atovaquone PK/PD. |
| popPK | El-Saber_2020 | irrelevant | 0 | 0 | This is an in-vitro/in-vivo antiparasitic efficacy study; atovaquone is only a reference drug with IC50 values, no PK disposition parameters. |
| popPK | Hussein_1996 | irrelevant | 0 | 0 | The paper reports population pharmacokinetic parameters for proguanil, while atovaquone is only mentioned as a concomitantly administered agent in the therapy regimen. |
| PGx | Hussein_1997 | not_relevant | 1 | 2 | The paper reports pharmacokinetic differences based on race/ethnicity rather than specific gene variants or genotypes. |
| popPK | Lütgendorf_2006 | irrelevant | 0 | 0 | This is an in-vitro pharmacodynamic study measuring antimalarial synergy (FIC indices) in Plasmodium falciparum, containing no pharmacokinetic parameters (CL, V, ka, etc.) for atovaquone. |
| PGx | Lütgendorf_2006 | not_relevant | 0 | 0 | The paper reports pharmacodynamic drug-drug interactions in P. falciparum in vitro, not pharmacogenomic effects on PK or PD parameters. |
| PGx | McGready_2003 | not_relevant | 0 | 0 | The paper reports PK parameters in pregnant women but does not analyze or report any pharmacogenomic variants or genetic effects on these parameters. |
| popPK | McGready_2006 | irrelevant | 1 | 0 | The study focuses on the pharmacokinetics of dihydroartemisinin, with atovaquone serving only as a co-administered drug. |
| PGx | McGready_2006 | not_relevant | 0 | 0 | The paper reports the pharmacokinetics of dihydroartemisinin (DHA) in pregnant women and does not investigate the effects of gene variants or genotypes on atovaquone. |
| PGx | Na-Bangchang_2005 | not_relevant | 0 | 0 | The study investigates the impact of pregnancy status on pharmacokinetics, not the effect of gene variants or genotypes. |
| popPK | Niu_2024 | irrelevant | 0 | 0 | This is a natural-product/malaria transmission study; atovaquone is only mentioned as a comparator for EC50, with no PK parameters for atovaquone. |
| popPK | Smith_2023 | irrelevant | 0 | 0 | The paper is an in vitro pharmacodynamic study measuring Toxoplasma bradyzoite viability using a luciferase assay, and atovaquone is used only as a test compound to validate the assay, with no PK parameters reported. |
| PGx | Smith_2023 | not_relevant | 0 | 0 | The paper describes a cell-based assay for Toxoplasma gondii bradyzoite viability and does not investigate human pharmacogenomics or pharmacokinetics/pharmacodynamics. |
| popPK | Stevens_2019 | irrelevant | 1 | 0 | The paper describes in vitro efficacy and mechanism of action in AML cell lines and xenograft models without reporting quantitative PK parameters for atovaquone. |
| PGx | Stevens_2019 | not_relevant | 0 | 0 | The paper describes the pharmacodynamic mechanism of atovaquone in AML cells but does not report any pharmacogenomic effects (genetic variants) on its pharmacokinetics or pharmacodynamics. |
| popPK | Thapar_2003 | irrelevant | 0 | 0 | The study is an in-vitro pharmacodynamic analysis of antimalarial synergy, not a pharmacokinetic study, and reports no disposition parameters. |
| PGx | Thapar_2003 | not_relevant | 0 | 0 | The paper investigates drug-drug interactions in vitro, not the effect of a gene variant on PK/PD. |
| popPK | Yang_2020 | irrelevant | 0 | 0 | The paper is an in vitro antiviral screening study reporting EC50 values, not a pharmacokinetic study, and provides no PK parameters for atovaquone. |
| PGx | Yang_2020 | not_relevant | 0 | 0 | The paper reports drug screening for anti-coronavirus activity but does not report any gene variant effects on the PK/PD of atovaquone. |
| popPK | Zhou_2026 | irrelevant | 0 | 0 | The paper is a veterinary pharmacodynamics/anthelmintic efficacy study in fish, reporting EC50 and therapeutic index, but containing no quantitative pharmacokinetic disposition parameters (CL, V, t1/2, etc.) for atovaquone. |
| PGx | Zhou_2026 | not_relevant | 0 | 0 | The paper reports efficacy and safety of atovaquone against parasites in fish but contains no data on human genetic variants affecting PK or PD parameters. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Batovaquone%5D&body=Drug%3A%20atovaquone%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_atovaquone/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-23 18:59 UTC</sub>
