<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;duvelisib&quot;}]"></div>

# duvelisib

- **generic name:** duvelisib
- **ATC codes:** `L01EM04`
- **DrugBank:** [DB11952](https://go.drugbank.com/drugs/DB11952) · **PubChem:** [CID 50905713](https://pubchem.ncbi.nlm.nih.gov/compound/50905713)
- **molar mass:** 416.87 g/mol (C22H17ClN6O) — DrugBank
- **groups:** approved, investigational

## About

Duvelisib is a protein kinase inhibitor used to treat chronic lymphocytic leukemia and follicular lymphoma when other treatments have failed. It is administered orally in capsule form and is well absorbed by mouth. It is no longer available in the European Union, where its products have been withdrawn.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q27077129](https://www.wikidata.org/wiki/Q27077129), [Wikipedia](https://en.wikipedia.org/wiki/Duvelisib?oldid=1384988878) (CC BY-SA 4.0), DrugBank's routes and dosage forms, the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [McLeod_2019_CD63](drugs/drug_duvelisib/pd_McLeod_2019_CD63.md) | rat blood basophil (CD63) activation ← Duvelisib · inhibition effect | — | McLeod RL et al., Characterizing Pharmacokinetic-Pharmaco…, The Journal of pharmacology… (2019) | [10.1124/jpet.118.252551](https://doi.org/10.1124/jpet.118.252551) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-23 21:38 | 0:03 | 0/0/0 | 1/0/0 | 0/0/0 | 3,526/156 | einfracz / qwen3.8-27b | 14 | 6/3 | 13/1 | 0 |

## Coverage

- **PubMed hits:** 35 matched, 33 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Balakrishnan_2015 | irrelevant | 0 | 0 | This is an in-vitro mechanistic study of IPI-145 (duvelisib) focusing on cell viability and signaling pathways, with no pharmacokinetic parameter reporting. |
| PGx | Balakrishnan_2015 | not_relevant | 0 | 0 | The paper describes the preclinical effects of IPI-145 (duvelisib) on CLL cell signaling and apoptosis but does not investigate the impact of host gene variants or genotypes on the drug's pharmacokinetics or pharmacodynamics. |
| popPK | Bhingarkar_2024 | irrelevant | 0 | 0 | This immunology study reports no quantitative duvelisib disposition parameters, and no such values are provided in supplementary material or figures. |
| popPK | Flinn_2018 | irrelevant | 2 | 1 | The study only reports qualitative PK descriptors (Tmax, half-life range) without quantitative disposition parameters like clearance, volume, or intercompartmental clearance. |
| PGx | Flinn_2018 | not_relevant | 0 | 0 | The paper describes general pharmacokinetics and pharmacodynamics of duvelisib in a Phase 1 trial but does not investigate gene variants or genotypes. |
| popPK | García-Cansino_2026 | irrelevant | 0 | 0 | The paper reports ecotoxicity and environmental stability data for aquatic organisms, not pharmacokinetic disposition parameters for humans or animals. |
| PGx | García-Cansino_2026 | not_relevant | 0 | 0 | The paper focuses on the environmental ecotoxicity of duvelisib in aquatic systems and does not report any pharmacogenomic effects on human PK or PD parameters. |
| PGx | Goldwaser_2022 | not_relevant | 0 | 0 | Reports duvelisib inhibition of CYP2C9 in vitro, not an effect of a gene variant, genotype, or phenotype on a duvelisib PK/PD parameter. |
| popPK | Kunieda_2025 | irrelevant | 0 | 0 | The study focuses on the PK of zandelisib in mice, using duvelisib only as a comparator for in vitro binding kinetics (SPR/BRET) without reporting quantitative in vivo disposition parameters (CL, V, etc.) for duvelisib. |
| PGx | Kunieda_2025 | not_relevant | 0 | 0 | The paper studies the pharmacology and crystal structure of zandelisib, using duvelisib only as a comparative control for binding kinetics, and does not report any pharmacogenomic effects. |
| popPK | Mahajan_2026 | irrelevant | 2 | 0 | The study focuses on in-vitro characterization and general PK metrics (AUC, MRT) for a nanocapsule formulation without reporting specific compartmental PK parameters (CL, V) or quantitative values in the provided text. |
| PGx | Mahajan_2026 | not_relevant | 0 | 0 | The paper describes the pharmacokinetics of a novel nanocapsule delivery system, not the effect of a genetic variant on drug response. |
| popPK | McKeown_2024 | irrelevant | 0 | 0 | Duvelisib is mentioned only as background; the paper reports no duvelisib pharmacokinetic parameters. |
| popPK | McLeod_2019 | irrelevant | 1 | 0 | Duvelisib has an in-vitro IC50 value, but no quantitative disposition parameters; the reported PK profiling is for another inhibitor. |
| popPK | OBrien_2018 | relevant | 3 | 0 | The study includes pharmacokinetic assessment in a Phase 1 trial of duvelisib, but specific numeric disposition parameters (CL, V, etc.) are not present in the provided abstract evidence. |
| PGx | OBrien_2018 | not_relevant | 0 | 0 | The paper reports Phase 1 safety and efficacy results but does not investigate the impact of specific genetic variants or genotypes on the pharmacokinetic or pharmacodynamic parameters of duvelisib. |
| popPK | Sanchez-Rodriguez_2024 | irrelevant | 0 | 0 | This human Alzheimer's disease modeling study reports no duvelisib pharmacokinetic parameters. |
| popPK | Smith_2024 | irrelevant | 0 | 0 | This review reports no quantitative duvelisib disposition parameters, and no such values appear in the provided evidence. |
| PGx | Wang_2021 | not_relevant | 0 | 0 | Duvelisib is used only as an internal standard; the study examines CYP3A4 inhibitor effects on alpelisib, not pharmacogenomic effects on duvelisib. |
| popPK | Willemsen-Seegers_2017 | irrelevant | 0 | 0 | The study focuses on in-vitro surface plasmon resonance binding kinetics and does not report pharmacokinetic disposition parameters for duvelisib. |
| PGx | Willemsen-Seegers_2017 | not_relevant | 0 | 0 | The paper investigates in vitro target residence time and selectivity, not pharmacogenomic effects on PK/PD parameters. |
| popPK | Yue_2019 | irrelevant | 0 | 0 | The paper focuses on the medicinal chemistry and pharmacokinetics of parsaclisib (INCB050465), mentioning duvelisib only as a structural comparator. |
| PGx | Yue_2019 | not_relevant | 0 | 0 | The paper describes the discovery and preclinical pharmacokinetics of parsaclisib, not duvelisib, and does not report pharmacogenomic effects. |
| popPK | Zhao_2026 | irrelevant | 0 | 0 | This is a human-treatment network meta-analysis; duvelisib is only mentioned as background, with no pharmacokinetic parameters reported. |
| popPK | Zhong_2026 | irrelevant | 3 | 1 | The paper describes a methodological framework for exposure-response analysis using duvelisib as an exemplar case but does not report specific quantitative pharmacokinetic parameter values (CL, V, etc.) in the provided evidence. |
| PGx | Zhong_2026 | not_relevant | 0 | 0 | The paper focuses on dose modification adjustments in exposure-response analysis, not on the impact of genetic variants on PK/PD. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bduvelisib%5D&body=Drug%3A%20duvelisib%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_duvelisib/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
