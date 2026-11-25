<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;nelfinavir&quot;}]"></div>

# nelfinavir

- **generic name:** nelfinavir
- **ATC codes:** `J05AE04`
- **DrugBank:** [DB00220](https://go.drugbank.com/drugs/DB00220) · **PubChem:** [CID 64143](https://pubchem.ncbi.nlm.nih.gov/compound/64143)
- **molar mass:** 567.782 g/mol (C32H45N3O4S) — DrugBank
- **groups:** approved, investigational

## About

Nelfinavir is a protease inhibitor used to treat HIV infections. It is taken by mouth in tablet form.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q423366](https://www.wikidata.org/wiki/Q423366), DrugBank's routes and dosage forms, the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| nelfinavir | parent | 567.782 | C32H45N3O4S | DrugBank | [64143](https://pubchem.ncbi.nlm.nih.gov/compound/64143) | Crommentuyn_2006, Hirt_2006, Hirt_2006_2 |
| M8 | metabolite | 583.788 | C32H45N3O5S | PubChem | [475066](https://pubchem.ncbi.nlm.nih.gov/compound/475066) | Hirt_2006, Hirt_2006_2 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="mixed" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q370 — no SI value to build from</sub> | [Hirt_2006_2_reference](drugs/drug_nelfinavir/Nelfinavir_Hirt2006v2_reference.md) | — | parent + metabolite (no model) | 5 | Hirt D et al., Age-related effects on nelfinavir and M…, Antimicrobial agents and ch… (2006) | [10.1128/AAC.50.3.910-916.2006](https://doi.org/10.1128/AAC.50.3.910-916.2006) |
| <span class="pk-rf" hidden data-species="human" data-age="paediatric" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter — unit dimension conflicts with…</sub><br><sub>blocking: C9 clearance/volume outside physiological window (implausible magnitude — unit/…</sub> | [Crommentuyn_2006_reference](drugs/drug_nelfinavir/Nelfinavir_Crommentuyn2006_reference.md) | — | 1-compartment (no model) | 2 | Crommentuyn KM et al., Population pharmacokinetics and pharmac…, The Pediatric infectious di… (2006) | [10.1097/01.inf.0000215242.70300.95](https://doi.org/10.1097/01.inf.0000215242.70300.95) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter — unit dimension conflicts with…</sub> | [Hirt_2006_reference](drugs/drug_nelfinavir/Nelfinavir_Hirt2006_reference.md) | — | parent + metabolite (no model) | 8 | Hirt D et al., Pregnancy-related effects on nelfinavir…, Antimicrobial agents and ch… (2006) | [10.1128/AAC.01596-05](https://doi.org/10.1128/AAC.01596-05) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Jackson_2000_reference](drugs/drug_nelfinavir/Nelfinavir_Jackson2000_reference.md) | — | 1-compartment (no model) | 0 | Jackson KA et al., A population pharmacokinetic analysis o…, Antimicrobial agents and ch… (2000) | [10.1128/AAC.44.7.1832-1837.2000](https://doi.org/10.1128/AAC.44.7.1832-1837.2000) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Gidari_2022_PFU_mL](drugs/drug_nelfinavir/pd_Gidari_2022_PFU_mL.md) | Viral titer (plaque-forming units) of SARS-CoV-2 strain 20A.EU1 ← nelfinavir · direct sigmoid Emax (Hill) effect | — | Gidari A et al., Nelfinavir: An Old Ally in the COVID-19…, Microorganisms (2022) | [10.3390/microorganisms10122471](https://doi.org/10.3390/microorganisms10122471) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Gidari_2022_PFU_mL_2](drugs/drug_nelfinavir/pd_Gidari_2022_PFU_mL_2.md) | Viral titer (plaque-forming units) of SARS-CoV-2 strain B.1.1.7 ← nelfinavir · direct sigmoid Emax (Hill) effect | — | Gidari A et al., Nelfinavir: An Old Ally in the COVID-19…, Microorganisms (2022) | [10.3390/microorganisms10122471](https://doi.org/10.3390/microorganisms10122471) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Gidari_2022_PFU_mL_3](drugs/drug_nelfinavir/pd_Gidari_2022_PFU_mL_3.md) | Viral titer (plaque-forming units) of SARS-CoV-2 strain P.1 ← nelfinavir · direct sigmoid Emax (Hill) effect | — | Gidari A et al., Nelfinavir: An Old Ally in the COVID-19…, Microorganisms (2022) | [10.3390/microorganisms10122471](https://doi.org/10.3390/microorganisms10122471) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Gidari_2022_PFU_mL_4](drugs/drug_nelfinavir/pd_Gidari_2022_PFU_mL_4.md) | Viral titer (plaque-forming units) of SARS-CoV-2 strain B.1.617.2 ← nelfinavir · direct sigmoid Emax (Hill) effect | — | Gidari A et al., Nelfinavir: An Old Ally in the COVID-19…, Microorganisms (2022) | [10.3390/microorganisms10122471](https://doi.org/10.3390/microorganisms10122471) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Xie_2020_Nluc_signal](drugs/drug_nelfinavir/pd_Xie_2020_Nluc_signal.md) | SARS-CoV-2-Nluc luciferase signal (relative, normalized to DMSO control) in A549-hACE2 cells ← nelfinavir · direct sigmoid Emax (Hill) effect | — | Xie X et al., A nanoluciferase SARS-CoV-2 for rapid n…, Nature communications (2020) | [10.1038/s41467-020-19055-7](https://doi.org/10.1038/s41467-020-19055-7) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Pellegrin_2002_failure](drugs/drug_nelfinavir/pd_Pellegrin_2002_failure.md) | Virologic failure ← Nelfinavir · categorical (graded) response model | — | Pellegrin I et al., Virologic response to nelfinavir-based…, AIDS (London, England) (2002) | [10.1097/00002030-200207050-00004](https://doi.org/10.1097/00002030-200207050-00004) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-24 01:28 | 0:05 | 1/3/0 | 6/0/0 | 0/0/0 | 4,110/146 | einfracz / qwen3.8-27b | 8 | 1/7 | 8/0 | 0 |

## Coverage

- **PubMed hits:** 52 matched, 20 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 4  ·  extracted 0  ·  needs review 1  ·  rejected 3  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Arshad_2020 | irrelevant | 0 | 0 | This is a review paper analyzing drug repurposing for SARS-CoV-2 based on existing literature data; it does not report original quantitative population PK parameters (CL, V, ka) for nelfinavir, nor does it provide the specific numeric values in the text (referring instead to external sources or supplementary data not included). |
| PGx | Arshad_2020 | not_relevant | 0 | 0 | The paper analyzes population pharmacokinetics and pharmacodynamic efficacy for drug repurposing but does not report any pharmacogenomic effects (gene variants) on PK/PD parameters. |
| popPK | Burk_2021 | irrelevant | 1 | 1 | In-vitro mechanistic study of nelfinavir's PXR interaction; no PK disposition parameters (CL, V, half-life, population-PK model) reported. |
| popPK | Chan_2013 | irrelevant | 0 | 0 | The paper is an in-vitro virology study assessing antiviral activity of nelfinavir against MERS-CoV and does not report any pharmacokinetic parameters for nelfinavir. |
| PGx | Chan_2013 | not_relevant | 0 | 0 | The paper reports the in vitro antiviral efficacy of nelfinavir (and other drugs) against MERS-CoV, but it does not contain any data on pharmacogenomics (genetic variants) affecting nelfinavir's PK or PD. |
| PGx | Crommentuyn_2006 | not_relevant | 0 | 0 | The study identifies no covariates (including genetic factors) affecting the pharmacokinetics of nelfinavir or its metabolite M8, and reports no pharmacogenomic effects. |
| popPK | Cvetkovic_2003 | irrelevant | 0 | 0 | The paper is a review of lopinavir/ritonavir where nelfinavir is only mentioned as a comparator drug, and no quantitative PK parameters for nelfinavir are reported. |
| PGx | Cvetkovic_2003 | not_relevant | 0 | 0 | The paper is a review of lopinavir/ritonavir and mentions nelfinavir only for comparative efficacy; it does not report pharmacogenomic effects on nelfinavir. |
| popPK | Ford_2004 | irrelevant | 2 | 0 | The study reports non-compartmental AUC values for intracellular/plasma distribution but does not provide compartmental parameters (CL, V, Q) or half-life, which are required for relevance scoring. |
| PGx | Ford_2004 | not_relevant | 2 | 5 | The paper investigates the association between P-glycoprotein expression (a protein phenotype, not a genetic variant) and drug accumulation, and finds no significant relationship, thus not reporting a pharmacogenomic effect. |
| popPK | Francis_2021 | irrelevant | 0 | 0 | Nelfinavir is only a co-administered comparator affecting medroxyprogesterone acetate PK; no nelfinavir disposition parameters are reported. |
| popPK | Gaucher_2004 | irrelevant | 0 | 0 | The study focuses on the synthesis, in vitro stability, and antiviral activity of prodrugs, reporting no in vivo pharmacokinetic parameters (CL, V, etc.) for nelfinavir. |
| PGx | Gaucher_2004 | not_relevant | 0 | 0 | The paper describes the synthesis and in vitro stability of prodrugs; it does not report on gene variants affecting nelfinavir's PK or PD. |
| popPK | Gidari_2022 | irrelevant | 1 | 2 | In-vitro antiviral potency study (EC50/EC90 in Vero E6 cells) with only literature-derived Cmax ratios; no PK disposition parameters (CL, V, half-life, PK model) for nelfinavir are reported. |
| popPK | Hattori_2020 | irrelevant | 0 | 0 | In-vitro antiviral study of SARS-CoV-2 Mpro inhibitors; nelfinavir is only a comparator with EC50/cytotoxicity data, no PK parameters. |
| PGx | Hirt_2006 | not_relevant | 0 | 0 | The study investigates physiological effects of pregnancy and delivery on nelfinavir pharmacokinetics but does not report any pharmacogenomic data (gene variants or genotypes). |
| PGx | Hirt_2006_2 | not_relevant | 0 | 0 | The study focuses on age-related pharmacokinetic changes in children; there is no mention of pharmacogenomic effects on nelfinavir. |
| PGx | Jackson_2000 | not_relevant | 0 | 0 | The study reports a pharmacokinetic analysis of nelfinavir but does not investigate any gene variants or genotypes, focusing instead on clinical covariates like fluconazole use. |
| popPK | Methaneethorn_2014 | irrelevant | 8 | 0 | The study reports a nelfinavir pharmacokinetic model but no quantitative parameter values (CL, V, ka, etc.) are present in the provided evidence. |
| PGx | Methaneethorn_2014 | not_relevant | 0 | 0 | The paper models a drug-drug interaction between simvastatin and nelfinavir, not a pharmacogenomic effect of a gene variant on nelfinavir. |
| popPK | Millán_2005 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of mycophenolate mofetil (MPA), with nelfinavir serving only as a concomitant HAART agent, and no nelfinavir PK parameters are reported. |
| PGx | Millán_2005 | not_relevant | 0 | 0 | The study reports the pharmacokinetics and pharmacodynamics of mycophenolate mofetil in patients treated with nelfinavir, but it does not report any pharmacogenomic effects (gene variants) on the PK/PD of nelfinavir. |
| popPK | Panhard_2007 | irrelevant | 0 | 0 | The study reports population PK parameters for lamivudine, stavudine, and zidovudine; nelfinavir is only mentioned as a co-administered protease inhibitor, with no quantitative PK parameters provided for nelfinavir itself. |
| PGx | Panhard_2007 | not_relevant | 0 | 0 | The study does not report any pharmacogenomic effects (gene variants) on the pharmacokinetic parameters of nelfinavir. |
| popPK | Pellegrin_2002 | relevant | 9 | 2 | The paper describes a population pharmacokinetic analysis of nelfinavir, but the specific quantitative model parameters (CL, V, etc.) are not provided in the evidence, only PK descriptors like Cmin. |
| PGx | Pellegrin_2002 | not_relevant | 0 | 0 | The study analyzes the impact of HIV drug resistance mutations and PK parameters on virologic outcomes; it does not report any human gene variants (pharmacogenomics) affecting nelfinavir PK or PD parameters. |
| popPK | Pfister_2002 | irrelevant | 0 | 0 | The study reports population PK parameters for amprenavir (the subject drug), while nelfinavir is only a co-administered interacting agent. |
| PGx | Pfister_2002 | not_relevant | 0 | 0 | The paper reports pharmacokinetic interactions between drugs, not the effect of a gene variant on PK parameters. |
| popPK | Xie_2020 | irrelevant | 0 | 0 | In vitro antiviral screening study (SARS-CoV-2-Nluc); nelfinavir is only a screened inhibitor with EC50 values, no PK disposition parameters. |
| popPK | Xu_2023 | irrelevant | 3 | 2 | This is an efficacy/clinical study of nelfinavir for COVID-19; only sparse concentration data (Cmax, C5h, trough) appear, with detailed PK values in supplementary tables not provided, and no CL/V/compartmental parameters. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bnelfinavir%5D&body=Drug%3A%20nelfinavir%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_nelfinavir/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-24 01:26 UTC</sub>
