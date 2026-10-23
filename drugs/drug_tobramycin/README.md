<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01G&quot;,&quot;href&quot;:&quot;atc/J01G.md&quot;},{&quot;label&quot;:&quot;tobramycin&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Tobramycin_Malehorn2026_reference&quot;,&quot;label&quot;:&quot;Malehorn_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tobramycin/Tobramycin_Malehorn2026_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# tobramycin

- **generic name:** tobramycin
- **ATC codes:** `J01GB01`, `S01AA12`
- **DrugBank:** [DB00684](https://go.drugbank.com/drugs/DB00684) · **PubChem:** [CID 36294](https://pubchem.ncbi.nlm.nih.gov/compound/36294)
- **molar mass:** 467.5145 g/mol (C18H37N5O9) — DrugBank
- **groups:** approved, investigational

## About

Tobramycin is an aminoglycoside antibiotic used to treat bacterial infections, including Pseudomonas infections, pneumonia, urinary tract infections, and lung problems in cystic fibrosis. It is approved and authorised in the European Union, mainly for cystic fibrosis and respiratory tract infections, and is also used in eye preparations.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q1758380](https://www.wikidata.org/wiki/Q1758380) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Start here

> **Malehorn_2026_reference** — <span class="pk-badge pk-badge--green">Reproduces paper</span> review reference. [Run it in the simulator](drugs/drug_tobramycin/Tobramycin_Malehorn2026_reference.md?tab=Simulation) · [record](drugs/drug_tobramycin/Tobramycin_Malehorn2026_reference.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## Parameters across studies

| parameter | as named | value | unit | as reported | population | species | status | record |
|---|---|---|---|---|---|---|---|---|
| CL | CL | 7 ‡ | L/h | 0.1 L/h/kg | review reference | human | <span class="pk-badge pk-badge--green">Reproduces paper</span> | [Malehorn_2026_reference](drugs/drug_tobramycin/Tobramycin_Malehorn2026_reference.md) |
| V | V1/F | 18.9 ‡ | L | 0.27 L/kg | review reference | human | <span class="pk-badge pk-badge--green">Reproduces paper</span> | [Malehorn_2026_reference](drugs/drug_tobramycin/Tobramycin_Malehorn2026_reference.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. ‡ given per kg in the paper; shown for a 70 kg adult. Rejected records are left out.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="unknown" data-status="Reproduces paper" data-sim="yes"></span><span class="pk-badge pk-badge--green">Reproduces paper</span> | [Malehorn_2026_reference](drugs/drug_tobramycin/Tobramycin_Malehorn2026_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Malehorn EN et al., Pharmacokinetic analysis of conventiona…, Pediatric research (2026) | [10.1038/s41390-026-05158-2](https://doi.org/10.1038/s41390-026-05158-2) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Aarons_1989_reference](drugs/drug_tobramycin/Tobramycin_Aarons1989_reference.md) | — | 1-compartment (no model) | 0 | Aarons L et al., Population pharmacokinetics of tobramyc…, British journal of clinical… (1989) | [10.1111/j.1365-2125.1989.tb05431.x](https://doi.org/10.1111/j.1365-2125.1989.tb05431.x) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Mouton_2005_FEV1](drugs/drug_tobramycin/pd_Mouton_2005_FEV1.md) | forced expiratory volume during the first second ← tobramycin · direct Emax (saturable) effect | — | Mouton JW et al., Pharmacodynamics of tobramycin in patie…, Diagnostic microbiology and… (2005) | [10.1016/j.diagmicrobio.2005.02.011](https://doi.org/10.1016/j.diagmicrobio.2005.02.011) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Mouton_2005_FVC](drugs/drug_tobramycin/pd_Mouton_2005_FVC.md) | forced vital capacity ← tobramycin · direct Emax (saturable) effect | — | Mouton JW et al., Pharmacodynamics of tobramycin in patie…, Diagnostic microbiology and… (2005) | [10.1016/j.diagmicrobio.2005.02.011](https://doi.org/10.1016/j.diagmicrobio.2005.02.011) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Roychowdhury_2023_Relative_Biovolume](drugs/drug_tobramycin/pd_Roychowdhury_2023_Relative_Biovolume.md) | Relative Biovolume ← tobramycin · delayed effect through transit (transduction) compartments | — | Roychowdhury S et al., Pharmacodynamic Model of the Dynamic Re…, Biomedicines (2023) | [10.3390/biomedicines11082316](https://doi.org/10.3390/biomedicines11082316) |
| <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Data from bacteria, fungi or plants, not measured in people (from an LLM reading of the title and abstract by qwen3.8-27b, p(non-human) 1.00).">other organism</span> | [Lee_2023_resp](drugs/drug_tobramycin/pd_Lee_2023_resp.md) | net growth rate of bacteria biomarker turnover ← tobramycin | — | Lee EB et al., A Pharmacodynamic Study of Aminoglycosi…, Pharmaceuticals (Basel, Swi… (2023) | [10.3390/ph17010027](https://doi.org/10.3390/ph17010027) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 11:45 | 3:46 | 1/1/0 | 2/0/1 | 0/0/0 | 213,253/11,036 | einfracz / qwen3.8-27b | 16 | 3/5 | 8/0 | 0 |

## Coverage

- **PubMed hits:** 155 matched, 20 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 2  ·  extracted 1  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_7 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Duong_2023.pdf` | Duong A et al., Tobramycin a Priori Dosing Regimens Bas…, Therapeutic drug monitoring (2023) | popPK | 10 | [10.1097/FTD.0000000000001091](https://doi.org/10.1097/FTD.0000000000001091) | [36917735](https://pubmed.ncbi.nlm.nih.gov/36917735) | The paper evaluates population PK models for tobramycin in critically ill patients but the evidence provided does not contain any specific numeric parameter values (CL, V, etc.). |
| `Hennig_2013_2.pdf` | Hennig S et al., Population pharmacokinetics of tobramyc…, Clinical pharmacokinetics (2013) | popPK | 10 | [10.1007/s40262-013-0036-y](https://doi.org/10.1007/s40262-013-0036-y) | [23420517](https://pubmed.ncbi.nlm.nih.gov/23420517) | The paper describes a population PK study of tobramycin, but no numeric parameter values (e.g., CL, V, typical estimates, variability) are present in the provided abstract. |
| `Xie_2021.pdf` | Xie F et al., Pharmacokinetic/pharmacodynamic evaluat…, The Journal of antimicrobia… (2021) | popPK | 10 | [10.1093/jac/dkab164](https://doi.org/10.1093/jac/dkab164) | [34096596](https://pubmed.ncbi.nlm.nih.gov/34096596) | The study reports a population PK model for tobramycin in humans, but the specific numeric parameter estimates (CL, V, Q, etc.) are not included in the provided text evidence. |
| `Sou_2020.pdf` | Sou T et al., Model-Informed Drug Development in Pulm…, Molecular pharmaceutics (2020) | popPK | 9 | [10.1021/acs.molpharmaceut.9b00968](https://doi.org/10.1021/acs.molpharmaceut.9b00968) | [31951139](https://pubmed.ncbi.nlm.nih.gov/31951139) | The paper describes a PKPD study of tobramycin in rats, but the specific quantitative parameter values are not listed in the provided abstract evidence. |
| `de_1997.pdf` | de Hoog M et al., Tobramycin population pharmacokinetics…, Clinical pharmacology and t… (1997) | popPK | 8 | [10.1016/S0009-9236(97)90117-X](https://doi.org/10.1016/S0009-9236(97)90117-X) | [9357390](https://pubmed.ncbi.nlm.nih.gov/9357390) | The study is a population PK analysis for tobramycin in neonates, but the specific numeric parameter values (CL, V) are not listed in the abstract, likely appearing in tables or supplementary data not provided here. |
| `Geller_2002.pdf` | Geller DE et al., Pharmacokinetics and bioavailability of…, Chest (2002) | popPK | 6 | [10.1378/chest.122.1.219](https://doi.org/10.1378/chest.122.1.219) | [12114362](https://pubmed.ncbi.nlm.nih.gov/12114362) | The study reports PK parameters for tobramycin, but specific quantitative values for clearance, volume, and half-life are not provided in the text, only bioavailability, concentrations, and model type. |
| `Valero_2019.pdf` | Valero A et al., Susceptibility of Pseudomonas aeruginos…, Enfermedades infecciosas y… (2019) | popPK | 5 | [10.1016/j.eimc.2019.02.009](https://doi.org/10.1016/j.eimc.2019.02.009) | [31005313](https://pubmed.ncbi.nlm.nih.gov/31005313) | The study focuses on antimicrobial susceptibility and PK/PD outcomes (CFR) via simulation, but the specific quantitative PK parameter values (CL, V, etc.) for tobramycin are not reported in the provided evidence. |

<sub>queue written 2026-10-07T11:42:23.788878+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Alghanem_2019 | irrelevant | 2 | 0 | This is a Monte Carlo simulation study that uses a cited external population model to evaluate dosing regimens; it does not report original quantitative PK parameters (CL, V, etc.) for tobramycin itself, only the resulting simulated concentrations and AUCs. |
| popPK | Cheng_2021 | irrelevant | 0 | 0 | The paper is a systematic review summarizing approaches to external evaluation of PK models and does not report original quantitative PK parameters for tobramycin. |
| popPK | Duong_2023 | relevant | 10 | 0 | The paper evaluates population PK models for tobramycin in critically ill patients but the evidence provided does not contain any specific numeric parameter values (CL, V, etc.). |
| popPK | Geller_2002 | relevant | 6 | 1 | The study reports PK parameters for tobramycin, but specific quantitative values for clearance, volume, and half-life are not provided in the text, only bioavailability, concentrations, and model type. |
| popPK | Hennig_2013_2 | relevant | 10 | 0 | The paper describes a population PK study of tobramycin, but no numeric parameter values (e.g., CL, V, typical estimates, variability) are present in the provided abstract. |
| popPK | Mishra_2024 | irrelevant | 2 | 0 | The paper describes an LC-MS/MS method development and mentions that PK-PD modeling was performed in rabbits, but no specific quantitative PK parameter values (CL, V, t1/2) for tobramycin are provided in the extracted evidence. |
| popPK | Mouton_2005 | irrelevant | 2 | 0 | The study focuses on pharmacodynamic indices (AUC/MIC, Peak/MIC, T&gt;MIC) and their correlation with efficacy, rather than reporting specific quantitative disposition parameters (CL, V, half-life) for the PK model. |
| popPK | Roychowdhury_2023 | irrelevant | 0 | 0 | The paper presents a pharmacodynamic (PD) model of bacterial biofilm killing by tobramycin in an in-vitro flow cell system, not a pharmacokinetic (PK) study reporting disposition parameters for a host organism. |
| popPK | Sou_2020 | relevant | 9 | 2 | The paper describes a PKPD study of tobramycin in rats, but the specific quantitative parameter values are not listed in the provided abstract evidence. |
| popPK | Valero_2019 | irrelevant | 5 | 0 | The study focuses on antimicrobial susceptibility and PK/PD outcomes (CFR) via simulation, but the specific quantitative PK parameter values (CL, V, etc.) for tobramycin are not reported in the provided evidence. |
| popPK | Wu_2024 | irrelevant | 2 | 1 | The study models GFR maturation and applies it to predict concentrations, but does not report specific quantitative pharmacokinetic parameters (CL, V, etc.) for tobramycin itself in the provided text. |
| popPK | Xie_2021 | relevant | 10 | 0 | The study reports a population PK model for tobramycin in humans, but the specific numeric parameter estimates (CL, V, Q, etc.) are not included in the provided text evidence. |
| popPK | de_1997 | relevant | 8 | 2 | The study is a population PK analysis for tobramycin in neonates, but the specific numeric parameter values (CL, V) are not listed in the abstract, likely appearing in tables or supplementary data not provided here. |
| popPK | de_2018 | irrelevant | 2 | 0 | This is a review article discussing the general clinical applications of population PK models for antibiotics, without providing specific quantitative PK parameter values for tobramycin. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-07 11:42 UTC</sub>
