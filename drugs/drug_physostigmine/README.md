<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;S01E&quot;,&quot;href&quot;:&quot;atc/S01E.md&quot;},{&quot;label&quot;:&quot;physostigmine&quot;}]"></div>

# physostigmine

- **generic name:** physostigmine
- **ATC codes:** `S01EB05`, `V03AB19`
- **DrugBank:** [DB00981](https://go.drugbank.com/drugs/DB00981) · **PubChem:** [CID 5983](https://pubchem.ncbi.nlm.nih.gov/compound/5983)
- **molar mass:** 275.3461 g/mol (C15H21N3O2) — DrugBank
- **groups:** approved

## About

Physostigmine is a cholinesterase inhibitor used as a miotic to treat glaucoma and as an antidote. It remains an approved medicine, used mainly in ophthalmology for glaucoma and in antidote preparations.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q410595](https://www.wikidata.org/wiki/Q410595) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| physostigmine | parent | 275.346 | C15H21N3O2 | DrugBank | [5983](https://pubchem.ncbi.nlm.nih.gov/compound/5983) | Somani_1987, Somani_1989 |

## Parameters across studies

| parameter | as named | value | unit | as reported | population | species | status | record |
|---|---|---|---|---|---|---|---|---|
| CL | CL | 80.9 | L/h | 80.9 L/h | rats | rat | <span class="pk-badge pk-badge--orange">Needs review</span> | [Somani_1989_reference](drugs/drug_physostigmine/Physostigmine_Somani1989_reference.md) |
| ka | kabs | 6 | 1/h | 0.1 min-1 | rats | rat | <span class="pk-badge pk-badge--orange">Needs review</span> | [Somani_1989_reference](drugs/drug_physostigmine/Physostigmine_Somani1989_reference.md) |
| t½ | t1/2z | 0.5567 | h | 33.4 min | rats | rat | <span class="pk-badge pk-badge--orange">Needs review</span> | [Somani_1989_reference](drugs/drug_physostigmine/Physostigmine_Somani1989_reference.md) |
| F | Fab | 0.02 |  | 0.02 F | rats | rat | <span class="pk-badge pk-badge--orange">Needs review</span> | [Somani_1989_reference](drugs/drug_physostigmine/Physostigmine_Somani1989_reference.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. Rejected records are left out.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="rat" data-age="unknown" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub> | [Somani_1989_reference](drugs/drug_physostigmine/Physostigmine_Somani1989_reference.md) | — | 1-compartment (no model) | 8 | Somani SM, Pharmacokinetics and pharmacodynamics o…, Biopharmaceutics & drug dis… (1989) | [10.1002/bdd.2510100208](https://doi.org/10.1002/bdd.2510100208) |
| <span class="pk-rf" hidden data-species="rat" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span><br><sub>blocking: C9 clearance/volume outside physiological window (implausible magnitude — unit/…</sub> | [Somani_1987_reference](drugs/drug_physostigmine/Physostigmine_Somani1987_reference.md) | — | 1-compartment (no model) | 5 | Somani SM et al., Pharmacokinetics and pharmacodynamics o…, Drug metabolism and disposi… (1987) | — |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Patil_1992_contraction_of_isolated_irides](drugs/drug_physostigmine/pd_Patil_1992_contraction_of_isolated_irides.md) | contraction of isolated irides ← physostigmine · stimulation effect | — | Patil PN, Reactivity of human iris-sphincter to m…, Naunyn-Schmiedeberg's archi… (1992) | [10.1007/BF00168733](https://doi.org/10.1007/BF00168733) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Pinder_2019_AChE](drugs/drug_physostigmine/pd_Pinder_2019_AChE.md) | acetylcholinesterase (AChE) activity ← physostigmine · direct sigmoid Emax (Hill) effect | — | Pinder N et al., Continuous infusion of physostigmine in…, Biomedicine & pharmacothera… (2019) | [10.1016/j.biopha.2019.109318](https://doi.org/10.1016/j.biopha.2019.109318) |
| <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Somani_1991_percentage_change_in_cholinesterase_activity_in_brain](drugs/drug_physostigmine/pd_Somani_1991_percentage_change_in_cholinesterase_activity_in_.md) | percentage change in cholinesterase activity in brain ← plasma physostigmine · delayed effect through an effect compartment | — | Somani SM et al., Physiological pharmacokinetic and pharm…, Drug metabolism and disposi… (1991) | — |
| <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Somani_1991_percentage_change_in_cholinesterase_activity_in_brain_2](drugs/drug_physostigmine/pd_Somani_1991_percentage_change_in_cholinesterase_activity_in_.md) | percentage change in cholinesterase activity in brain ← brain physostigmine · delayed effect through an effect compartment | — | Somani SM et al., Physiological pharmacokinetic and pharm…, Drug metabolism and disposi… (1991) | — |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=physostigmine).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | blood | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| — | blood | `ACHE` inhibitor | DrugBank actor |
| — | neuromuscular junction | `ACHE` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: CHRNA4 (target), CHRNB2 (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 19:27 | 7:17 | 1/1/0 | 2/1/0 | 0/0/0 | 446,764/16,492 | einfracz / qwen3.8-27b | 9 | 1/7 | 9/0 | 0 |

## Coverage

- **PubMed hits:** 391 matched, 93 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 2  ·  extracted 0  ·  needs review 1  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_6 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Lukey_1990.pdf` | Lukey BJ et al., Pharmacokinetics of physostigmine intra…, Journal of pharmaceutical s… (1990) | popPK | 10 | [10.1002/jps.2600790910](https://doi.org/10.1002/jps.2600790910) | [2273462](https://pubmed.ncbi.nlm.nih.gov/2273462) | The paper reports quantitative pharmacokinetic parameters (Vd, CL, t1/2) for physostigmine in guinea pigs with values explicitly stated in the text. |
| `Pinder_2019.pdf` | Pinder N et al., Continuous infusion of physostigmine in…, Biomedicine & pharmacothera… (2019) | popPK | 10 | [10.1016/j.biopha.2019.109318](https://doi.org/10.1016/j.biopha.2019.109318) | [31398669](https://pubmed.ncbi.nlm.nih.gov/31398669) | The study is a population pharmacokinetic modeling study of physostigmine in humans, but the specific numeric parameter values (CL, V, Q, etc.) are not provided in the evidence, only summary statistics like steady-state concentration and EC50. |
| `Somani_1987.pdf` | Somani SM et al., Pharmacokinetics and pharmacodynamics o…, Drug metabolism and disposi… (1987) | popPK | 10 |  | [2891478](https://pubmed.ncbi.nlm.nih.gov/2891478) | The study reports quantitative PK parameters (clearance, volume, half-lives) for physostigmine in rats directly in the abstract. |
| `Somani_1989.pdf` | Somani SM, Pharmacokinetics and pharmacodynamics o…, Biopharmaceutics & drug dis… (1989) | popPK | 10 | [10.1002/bdd.2510100208](https://doi.org/10.1002/bdd.2510100208) | [2706318](https://pubmed.ncbi.nlm.nih.gov/2706318) | The paper reports quantitative pharmacokinetic parameters for physostigmine in rats, including clearance, absorption rate constant, elimination rate constant, and half-lives, all of which are explicitly stated in the text. |
| `Somani_1991.pdf` | Somani SM et al., Physiological pharmacokinetic and pharm…, Drug metabolism and disposi… (1991) | popPK | 9 |  | [1680633](https://pubmed.ncbi.nlm.nih.gov/1680633) | The paper describes a physiological PK model of physostigmine in rats, but the specific numeric parameter values are not present in the provided abstract text. |
| `Benita_1989.pdf` | Benita S et al., Micronized emulsion for controlled rele…, Drug design and delivery (1989) | popPK | 5 |  | [2765107](https://pubmed.ncbi.nlm.nih.gov/2765107) | The study reports pharmacodynamic/pharmacokinetic profile descriptors (Tmax, AUC, T20) and in vitro release characteristics but does not provide quantitative disposition parameters (CL, V, ka) for physostigmine. |

<sub>queue written 2026-10-07 19:25 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abdalla_2024 | irrelevant | 0 | 0 | The study focuses on the in vitro cholinesterase inhibitory activity of paeoniflorin, with physostigmine used only as a reference inhibitor; no pharmacokinetic parameters for physostigmine are reported. |
| popPK | Alberts_1995 | irrelevant | 0 | 0 | The study is an in vitro mechanistic investigation of muscarinic receptor subtypes in guinea pig bladder tissue, using eserine (physostigmine) only as a tool compound, and reports no pharmacokinetic parameters. |
| popPK | Bachoo_1994 | irrelevant | 0 | 0 | The study is a physiological investigation of synaptic transmission in cat ganglia using eserine (physostigmine) as a pharmacological agent, with no pharmacokinetic parameters reported. |
| popPK | Benita_1989 | irrelevant | 5 | 0 | The study reports pharmacodynamic/pharmacokinetic profile descriptors (Tmax, AUC, T20) and in vitro release characteristics but does not provide quantitative disposition parameters (CL, V, ka) for physostigmine. |
| popPK | Buccafusco_1988 | irrelevant | 0 | 0 | The study investigates the pharmacodynamic effects of choline analogs on blood pressure and receptor binding, using physostigmine only as a pharmacological probe, and contains no PK parameters for physostigmine. |
| popPK | Büyükafşar_2003 | irrelevant | 0 | 0 | The study investigates Rho/Rho-kinase signaling in mouse gastric fundus smooth muscle and does not report pharmacokinetic parameters for physostigmine. |
| PGx | Calaf_2021 | not_relevant | 0 | 0 | The study investigates the carcinogenic potential of pesticides and eserine (physostigmine) in a rat mammary gland model, focusing on cancer development mechanisms rather than pharmacogenomic effects on PK/PD parameters. |
| popPK | Cook_1987 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of cholinoreceptors where physostigmine is used only as a non-specific anticholinesterase agent, with no PK parameters reported. |
| popPK | DAgostino_2000 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of muscarinic receptor subtypes in human detrusor strips, where physostigmine is used only as a functional tool drug, not for PK parameter estimation. |
| popPK | Fisher_1991 | irrelevant | 0 | 0 | The study is a pharmacological/behavioral investigation of AF102B where physostigmine is used only as a comparator agent, and no pharmacokinetic parameters for physostigmine are reported. |
| popPK | Galli_1992 | irrelevant | 0 | 0 | The study is an in vitro mechanistic investigation of enzyme protection and does not report any pharmacokinetic disposition parameters for physostigmine. |
| popPK | Ghayur_2007 | irrelevant | 0 | 0 | The paper is an in-vitro pharmacological study using physostigmine only as a standard cholinomimetic comparator to test betel nut extract activity on isolated tissues, reporting no PK parameters. |
| popPK | González-Coloma_2004 | irrelevant | 0 | 0 | The paper is a toxicology study testing the antifeedant and toxic effects of norditerpenoid alkaloids (including physostigmine) on insects, and does not report any pharmacokinetic parameters. |
| popPK | Grillner_1999 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiology paper using physostigmine as a tool compound (AChE inhibitor), not a pharmacokinetic study, and no PK parameters are reported. |
| popPK | Hartvig_1991 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of 9-amino-1,2,3,4-tetrahydroacridine (THA), not physostigmine, which is only mentioned as a comparator for duration of effect and half-life. |
| popPK | Hillmer_2016 | irrelevant | 0 | 0 | Physostigmine is used only as a pharmacological challenge agent to alter acetylcholine levels for PET imaging quantification, not as the subject of a pharmacokinetic study. |
| popPK | Horie_2003 | irrelevant | 0 | 0 | The study is an in vitro pharmacological investigation of urotensin II effects on guinea-pig ileum, where physostigmine is used only as a cholinesterase inhibitor tool to enhance cholinergic response, not for PK modeling. |
| popPK | Hrvat_2020 | irrelevant | 0 | 0 | The paper is a review of chemical warfare nerve agent poisoning and cholinesterase inhibition, not a pharmacokinetic study of physostigmine, and contains no PK parameters for the subject drug. |
| popPK | Jackson_2002 | irrelevant | 0 | 0 | The study investigates the pharmacological mechanism of physostigmine on nicotinic receptors in insect neurons and does not report any pharmacokinetic disposition parameters. |
| popPK | Jon_2025 | irrelevant | 0 | 0 | The paper is a review of donepezil delivery systems and only mentions physostigmine as a comparator with a general statement about its poor pharmacokinetic profile without reporting specific quantitative parameters. |
| PGx | Kobayashi_2012 | not_relevant | 0 | 0 | The paper focuses on phenacetin metabolism and methemoglobinemia mechanisms, not physostigmine or its pharmacogenomics. |
| popPK | Korth_1987 | irrelevant | 0 | 0 | The paper is an in-vitro pharmacological study on guinea-pig heart tissue using physostigmine as a diagnostic agent to prevent acetylcholine hydrolysis, not a pharmacokinetic study. |
| PGx | Mae_2000 | not_relevant | 0 | 0 | The paper focuses on the metabolism of rifalazil, not physostigmine, and does not report pharmacogenomic effects. |
| popPK | Marino_1997 | irrelevant | 0 | 0 | The study is a mechanistic in-vitro analysis of muscarinic modulation of noradrenaline release in guinea-pig tissue, not a pharmacokinetic study of physostigmine. |
| popPK | Minami_1989 | irrelevant | 0 | 0 | The study is a pharmacological investigation of endothelium-derived relaxing factor (EDRF) release in dog arteries where physostigmine is used as an enzymatic inhibitor/comparator, not a PK subject. |
| popPK | Morrisett_1987 | irrelevant | 0 | 0 | The study is a neuropharmacological investigation of seizure induction and lithium potentiation, not a pharmacokinetic study reporting disposition parameters for physostigmine. |
| popPK | Morton_1997 | irrelevant | 0 | 0 | This is an in-vitro electrophysiological study using physostigmine as a mechanistic tool (cholinesterase inhibitor) to modulate synaptic responses, not a pharmacokinetic study reporting disposition parameters. |
| popPK | OGara_1999 | irrelevant | 0 | 0 | The study is a pharmacological characterization of leech pharynx contractile responses to cholinergic agents, with no PK disposition parameters or population models for physostigmine. |
| popPK | Olivera_1999 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation using physostigmine only as a non-specific inhibitor to block acetylcholinesterase effects on receptor binding, with no pharmacokinetic parameters reported. |
| popPK | Patil_1992 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of iris contraction to muscarinic drugs and physostigmine, reporting potency (EC50) rather than pharmacokinetic disposition parameters. |
| popPK | Patil_2002 | irrelevant | 0 | 0 | The study investigates the mechanism of vascular relaxation (pharmacodynamics) in isolated rat aorta, not the pharmacokinetics of physostigmine. |
| popPK | Pinder_2019 | relevant | 10 | 2 | The study is a population pharmacokinetic modeling study of physostigmine in humans, but the specific numeric parameter values (CL, V, Q, etc.) are not provided in the evidence, only summary statistics like steady-state concentration and EC50. |
| PGx | Pinheiro_2025 | not_relevant | 0 | 0 | The paper compares physostigmine only as a reference drug for binding affinity and inhibition assays in a leishmaniasis study and does not report any pharmacogenomic effects on its pharmacokinetic or pharmacodynamic parameters. |
| PGx | Ramirez_2021 | not_relevant | 0 | 0 | The paper investigates the pharmacogenomics of rociletinib, not physostigmine. |
| popPK | Rendón-von_2005 | irrelevant | 0 | 0 | The study focuses on pesticide toxicity and cholinesterase biomarkers in mosquitofish, with no pharmacokinetic analysis of physostigmine. |
| popPK | Scuvée-Moreau_1998 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of receptor function in rat brain slices, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Shafer_1998 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of neostigmine, not physostigmine. |
| popPK | Somani_1991 | relevant | 9 | 1 | The paper describes a physiological PK model of physostigmine in rats, but the specific numeric parameter values are not present in the provided abstract text. |
| PGx | Talesa_2001 | not_relevant | 0 | 0 | The paper describes acetylcholinesterase forms in mussels and mentions sensitivity to physostigmine (eserine) as an inhibitor in vitro, but it does not report pharmacogenomic effects on PK or PD parameters of the drug in a clinical or human context. |
| PGx | Temeyer_2014 | not_relevant | 0 | 0 | The paper investigates insecticide resistance in sand fly acetylcholinesterase, not human pharmacogenomics or the pharmacokinetics/dynamics of physostigmine. |
| popPK | Tovchiga_2025 | irrelevant | 0 | 0 | The paper is a review on the effects of uric acid on Alzheimer's disease and does not report pharmacokinetic parameters for physostigmine. |
| popPK | Valli_2011 | irrelevant | 0 | 0 | The study focuses on the in vitro anticholinesterasic and anthelmintic activities of new compounds, using physostigmine only as a positive control without reporting any pharmacokinetic parameters. |
| popPK | Winter_2016 | irrelevant | 0 | 0 | The study is an in-vitro/in-ex-vivo mechanistic study of cardiac electrophysiology, not a pharmacokinetic study, and does not report disposition parameters like CL or V. |
| popPK | Yamada_1990 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of dopamine release where physostigmine is used as a tool drug (cholinesterase inhibitor) to test cholinergic modulation, not a pharmacokinetic study of physostigmine. |
| popPK | Zhang_2025 | irrelevant | 0 | 0 | The study investigates the protective effects of anticholinergic/anticholinesterase drugs against snake venom in mice and does not involve the drug physostigmine or report any pharmacokinetic parameters. |
| PGx | Zhao_1999 | not_relevant | 0 | 0 | The study investigates the metabolism of rokitamycin, using physostigmine only as an inhibitor in an in vitro assay, and does not report pharmacogenomic effects on the PK/PD of physostigmine itself. |
| popPK | da_2013 | irrelevant | 0 | 0 | The paper is a functional pharmacology study on rat testicular capsule contraction where physostigmine is used as a probe agent (cholinesterase inhibitor) and no pharmacokinetic parameters are reported. |
| popPK | unknown_2020 | irrelevant | 0 | 0 | The paper is a collection of abstracts/posters regarding Alzheimer's disease clinical trials and does not mention physostigmine or report any pharmacokinetic parameters for it. |
| popPK | van_1998 | irrelevant | 0 | 0 | The paper is an in-vitro electrophysiology study of nicotinic receptors in insect neurons, not a pharmacokinetic study. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bphysostigmine%5D&body=Drug%3A%20physostigmine%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_physostigmine/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · newest extraction 2026-10-07 19:25 UTC</sub>
