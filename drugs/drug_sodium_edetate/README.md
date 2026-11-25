<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;S01X&quot;,&quot;href&quot;:&quot;atc/S01X.md&quot;},{&quot;label&quot;:&quot;sodium edetate&quot;}]"></div>

# sodium edetate

- **generic name:** sodium edetate
- **ATC codes:** `S01XA05`
- **DrugBank:** [DB13404](https://go.drugbank.com/drugs/DB13404) · **PubChem:** none
- **molar mass:** 380.17 g/mol (C10H12N2Na4O8) — DrugBank
- **groups:** investigational

## About

Sodium edetate is a chelating agent used in ophthalmological treatments. It is administered as a solution. The drug is currently investigational.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q27284152](https://www.wikidata.org/wiki/Q27284152), [Wikipedia](https://en.wikipedia.org/wiki/Tetrasodium_EDTA?oldid=1380008257) (CC BY-SA 4.0), DrugBank's routes and dosage forms and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">Rejected</span> | [Durand_2002_clearance](drugs/drug_sodium_edetate/pd_Durand_2002_clearance.md) | renal clearance · direct linear effect | — | Durand E et al., The basics of renal imaging and functio…, The quarterly journal of nu… (2002) | — |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-24 05:00 | 0:03 | 0/0/0 | 0/1/0 | 0/0/0 | 4,442/159 | einfracz / qwen3.8-27b | 9 | 1/8 | 8/1 | 0 |

## Coverage

- **PubMed hits:** 1458 matched, 31 returned
- **screened:** 1  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `De_2004.pdf` | De Rosemond SJ et al., Wastewater treatment polymers identifie…, Environmental toxicology an… (2004) | pd | 4 | [10.1897/03-609](https://doi.org/10.1897/03-609) | [15379002](https://www.ncbi.nlm.nih.gov/pubmed/15379002) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-11-24 05:00 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Alestig_1984 | irrelevant | 0 | 0 | The study focuses on ceftazidime; EDTA is used only as a diagnostic agent to measure glomerular filtration rate, not as the subject drug for PK analysis. |
| PGx | Alestig_1984 | not_relevant | 0 | 0 | The paper discusses ceftazidime and renal function, not sodium edetate, and reports no genetic variants. |
| popPK | Batts_1989 | irrelevant | 0 | 0 | The study is an in-vitro investigation of mucociliary clearance in frogs using EDTA as a preservative, not a pharmacokinetic study of sodium edetate disposition. |
| PGx | Batts_1989 | not_relevant | 0 | 0 | The paper investigates the effect of preservatives like EDTA on mucociliary clearance in an animal model and does not involve pharmacogenomics or the drug sodium edetate. |
| popPK | Becker_1994 | irrelevant | 0 | 0 | The study uses 51Cr-EDTA only as a diagnostic marker to assess renal function (GFR), not as the subject drug for pharmacokinetic parameter estimation. |
| PGx | Becker_1994 | not_relevant | 0 | 0 | The paper discusses the use of 51Cr-EDTA as a diagnostic marker for renal function and the effects of diet and ACE inhibitors, but does not investigate pharmacogenomic effects on the PK/PD of sodium edetate as a drug. |
| popPK | Bouvet_2006 | irrelevant | 0 | 0 | The study evaluates the pharmacokinetics of 51Cr-EDTA (a radiolabeled tracer) for GFR estimation, not the pharmacokinetics of the therapeutic drug sodium edetate (CaNa2EDTA). |
| PGx | Bouvet_2006 | not_relevant | 0 | 0 | The paper focuses on pharmacokinetics of 51Cr-EDTA for GFR estimation and does not report any genetic variants or pharmacogenomic effects. |
| popPK | Canevarolo_2026 | irrelevant | 0 | 0 | The paper is a genomic and epigenomic analysis of multiple myeloma and does not involve sodium_edetate or any pharmacokinetic studies. |
| PGx | Canevarolo_2026 | not_relevant | 0 | 0 | The paper analyzes genomic and epigenomic changes in multiple myeloma disease progression and multidrug resistance, but it does not report pharmacokinetic or pharmacodynamic parameters for sodium edetate. |
| popPK | De_2004 | irrelevant | 0 | 0 | The paper investigates the toxicity of wastewater treatment polymers in an aquatic environment and does not study the pharmacokinetics of sodium edetate in a biological subject. |
| PGx | De_2004 | not_relevant | 0 | 0 | The paper investigates environmental toxicity of diamond mine effluent polymers in *Ceriodaphnia dubia* and does not study pharmacogenomics or the pharmacokinetics/pharmacodynamics of sodium_edetate. |
| popPK | Durand_2002 | irrelevant | 0 | 0 | The paper is a review of renal imaging techniques where EDTA is mentioned only as a diagnostic radiotracer, not as the subject drug for PK modeling. |
| PGx | Durand_2002 | not_relevant | 0 | 0 | The paper is a review on renal imaging techniques using radiotracers and does not report pharmacogenomic effects on the PK/PD of sodium_edetate. |
| popPK | Francis_1983 | irrelevant | 0 | 0 | The study focuses on calcium malabsorption and vitamin D; 51Cr EDTA is used solely as a diagnostic agent for measuring glomerular filtration rate (renal function), not for characterizing the pharmacokinetics of sodium edetate. |
| PGx | Francis_1983 | not_relevant | 0 | 0 | The study examines calcium absorption and vitamin D levels in the elderly, with no data on pharmacogenomics or PK/PD of sodium edetate. |
| popPK | Gopi_2017 | irrelevant | 0 | 0 | The paper investigates phospholipid levels in rat striatum in a Parkinson's disease model and does not study the pharmacokinetics of sodium edetate. |
| PGx | Gopi_2017 | not_relevant | 0 | 0 | The paper investigates phospholipid levels in a rat model of Parkinson's disease induced by rotenone and does not involve the drug sodium edetate or any pharmacogenomic effects. |
| popPK | Hällgren_1978 | irrelevant | 0 | 0 | The study measures serum gastrin levels to assess kidney function, using 51Cr-EDTA only as a diagnostic probe for GFR, not for sodium_edetate pharmacokinetics. |
| PGx | Hällgren_1978 | not_relevant | 0 | 0 | The paper studies the relationship between kidney function and serum gastrin levels, using 51Cr-EDTA only for GFR estimation, not for pharmacogenomic PK/PD analysis of the drug sodium edetate. |
| popPK | Iwata_1998 | irrelevant | 0 | 0 | The paper uses [51Cr]-EDTA as a marker for gastric mucosal permeability (blood-to-lumen clearance) in a physiological study of nitric oxide, not as a study of the pharmacokinetics of sodium edetate. |
| PGx | Iwata_1998 | not_relevant | 0 | 0 | The paper investigates the role of nitric oxide in gastric mucosal injury in rats and does not report pharmacogenomic effects on the PK/PD of sodium_edetate. |
| popPK | Kanwar_1994 | irrelevant | 0 | 0 | The study uses EDTA only as a tracer to assess intestinal permeability, not as a subject of pharmacokinetic analysis. |
| PGx | Kanwar_1994 | not_relevant | 0 | 0 | The paper investigates the pathophysiology of ischemia-reperfusion injury in the intestine, not pharmacogenomics or the PK/PD of sodium edetate as a therapeutic agent. |
| popPK | Kim_2026 | irrelevant | 0 | 0 | This is an in vitro physicochemical stability study of ropivacaine and dexamethasone formulations, where edetate is only an excipient and no PK parameters for sodium edetate are reported. |
| PGx | Kim_2026 | not_relevant | 0 | 0 | The paper is an in vitro study on the physicochemical stability of ropivacaine and dexamethasone mixtures and does not report any pharmacogenomic effects on the PK/PD of sodium edetate or the studied drugs. |
| popPK | Messa_1994 | irrelevant | 0 | 0 | The study investigates the relationship between parathyroid hormone and calcium, using sodium EDTA as a tool to induce hypocalcemia for the stimulus, but does not report pharmacokinetic parameters for sodium EDTA itself. |
| PGx | Messa_1994 | not_relevant | 0 | 0 | The paper uses sodium edetate as a stimulus to test parathyroid hormone secretion, but does not study the pharmacokinetics or pharmacodynamics of sodium edetate itself, nor does it report any pharmacogenomic effects. |
| popPK | Moura_2025 | irrelevant | 0 | 0 | This is a medicinal chemistry/anticancer study of carnosic acid derivatives with no PK parameters for sodium edetate. |
| popPK | Nishiyama_2014 | irrelevant | 0 | 0 | The paper describes the metal-dependence of a catalytic antibody's mechanism and uses EDTA as an inhibitor, but does not report pharmacokinetic parameters for sodium edetate. |
| PGx | Nishiyama_2014 | not_relevant | 0 | 0 | The paper studies the effect of EDTA on the catalytic activity of an antibody construct, not the effect of a gene variant on the pharmacokinetics or pharmacodynamics of sodium edetate. |
| popPK | Nyberg_1987 | irrelevant | 1 | 0 | This study uses EDTA as a diagnostic probe to measure glomerular filtration rate in diabetic patients, rather than characterizing the pharmacokinetic parameters of EDTA itself. |
| PGx | Nyberg_1987 | not_relevant | 0 | 0 | The paper is a clinical study on diabetic nephropathy and uses 51Cr-EDTA as a renal clearance marker to measure GFR, not to study the pharmacokinetics or pharmacodynamics of the drug sodium edetate in the context of pharmacogenomics. |
| popPK | Paller_1988 | irrelevant | 0 | 0 | The study focuses on the role of iron chelators (deferoxamine and EDTA-FeCl3) in post-ischemic renal injury in rats, not the pharmacokinetic parameters of sodium edetate. |
| PGx | Paller_1988 | not_relevant | 0 | 0 | The paper reports a study on rat renal injury and the use of deferoxamine, not a pharmacogenomic study of sodium edetate PK/PD parameters in humans. |
| popPK | Peters_1994 | irrelevant | 1 | 2 | The study investigates the extravascular-to-plasma concentration ratio (Ce/Ci) and protein binding of radio-labeled EDTA, not standard population pharmacokinetic parameters (CL, V, ka, t1/2) for sodium edetate. |
| PGx | Peters_1994 | not_relevant | 0 | 0 | The paper investigates the pharmacokinetics of renal agents (including EDTA) but does not mention gene variants, genotypes, or pharmacogenomic effects. |
| popPK | Phelps_2013 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for myo-inositol, not sodium edetate. |
| PGx | Phelps_2013 | not_relevant | 0 | 0 | The paper investigates the pharmacokinetics of myo-inositol, not sodium_edetate, and contains no genetic data. |
| popPK | Pillai_2015 | irrelevant | 0 | 0 | The study evaluates the pharmacokinetics of oseltamivir (and its metabolite oseltamivir carboxylate), not sodium edetate. |
| PGx | Pillai_2015 | not_relevant | 0 | 0 | The paper studies the pharmacokinetics of oseltamivir in pregnancy, not sodium edetate, and does not report pharmacogenomic effects. |
| popPK | Ravenstijn_2012 | irrelevant | 0 | 0 | This is a population PK study of L-DOPA (levodopa) in rats, not sodium edetate; sodium edetate/EDTA appears only as an HPLC mobile-phase and antioxidant reagent, and no sodium edetate PK parameters are reported. |
| popPK | Rouaz_2021 | irrelevant | 0 | 0 | Review of paediatric excipients with no PK parameters for sodium edetate; no numeric disposition values present. |
| popPK | Salahudeen_1989 | irrelevant | 0 | 0 | The study uses 51Cr-EDTA as a diagnostic marker to measure Glomerular Filtration Rate (GFR) in humans, not as a subject drug for population pharmacokinetic parameter estimation (CL, V, etc.). |
| PGx | Salahudeen_1989 | not_relevant | 0 | 0 | The study investigates hypertension in primary hyperparathyroidism using 51Cr-EDTA as a marker for renal function; it does not involve pharmacogenomics or the pharmacokinetics/pharmacodynamics of sodium edetate. |
| popPK | Shaw_1991 | irrelevant | 0 | 0 | The paper studies magnesium transport in rat placenta using 51Cr-EDTA only as a passive paracellular diffusional marker, not as the subject of pharmacokinetic analysis. |
| PGx | Shaw_1991 | not_relevant | 0 | 0 | The study reports placental transport mechanisms and does not report a pharmacogenomic effect on the PK/PD of sodium edetate. |
| popPK | Simeoli_2024 | irrelevant | 0 | 0 | This is a population-PK study of budesonide; sodium edetate is only an excipient in the formulation, with no PK data for it. |
| popPK | Skinner_1994 | irrelevant | 0 | 0 | The study uses EDTA as a diagnostic marker to measure glomerular filtration rate (GFR), not to characterize the pharmacokinetic parameters (CL, V, etc.) of the drug itself. |
| PGx | Skinner_1994 | not_relevant | 0 | 0 | The paper evaluates the accuracy of GFR estimation formulas using 51Cr-EDTA clearance as a reference standard, and does not investigate pharmacogenomic effects on PK or PD. |
| popPK | Vasović_2026 | irrelevant | 0 | 0 | A narrative review of oral peptide delivery technologies with no sodium edetate PK data or quantitative disposition parameters. |
| popPK | Willems_2009 | irrelevant | 0 | 0 | Sodium edetate is used only as a marker for measuring renal clearance (GFR), not as the subject drug for PK parameter estimation. |
| PGx | Willems_2009 | not_relevant | 0 | 0 | The paper evaluates Cystatin C as a renal marker and does not report pharmacogenomic effects on the PK/PD of sodium edetate. |
| popPK | Zingmark_2004 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for the monoclonal antibody ATM-027, not for sodium_edetate. |
| PGx | Zingmark_2004 | not_relevant | 0 | 0 | The paper models the PK/PD of the monoclonal antibody ATM-027, not sodium edetate, and does not report any pharmacogenomic effects. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bsodium_edetate%5D&body=Drug%3A%20sodium_edetate%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_sodium_edetate/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
