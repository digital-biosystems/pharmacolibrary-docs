<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01M&quot;,&quot;href&quot;:&quot;atc/J01M.md&quot;},{&quot;label&quot;:&quot;gatifloxacin&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Gatifloxacin_Wu2024_reference&quot;,&quot;label&quot;:&quot;Wu_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_gatifloxacin/Gatifloxacin_Wu2024_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# gatifloxacin

- **generic name:** gatifloxacin
- **ATC codes:** `J01MA16`, `S01AE06`
- **DrugBank:** [DB01044](https://go.drugbank.com/drugs/DB01044) · **PubChem:** [CID 5379](https://pubchem.ncbi.nlm.nih.gov/compound/5379)
- **molar mass:** 375.3941 g/mol (C19H22FN3O4) — DrugBank
- **groups:** approved, investigational, withdrawn

## About

Gatifloxacin is a fluoroquinolone antibiotic used against bacterial infections such as pneumonia, sinusitis, urinary tract infections, gonorrhea, and conjunctivitis. It has been withdrawn for systemic use because of serious side effects, though ophthalmic preparations may still be available in some countries.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q2365016](https://www.wikidata.org/wiki/Q2365016) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| gatifloxacin | parent | 375.394 | C19H22FN3O4 | DrugBank | [5379](https://pubchem.ncbi.nlm.nih.gov/compound/5379) | Ambrose_2007, Peloquin_2008, Rubino_2007 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-14 23:09 | 6:41 | 1/1/3 | 1/0/0 | 0/0/0 | 363,189/32,971 | einfracz / qwen3.8-27b | 19 | 3/16 | 18/1 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.353). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Wu_2024_reference](drugs/drug_gatifloxacin/Gatifloxacin_Wu2024_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Wu RL et al., Determination of Nemonoxacin in Small V…, Drug design, development an… (2024) | [10.2147/DDDT.S476173](https://doi.org/10.2147/DDDT.S476173) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.2). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: disposition incomplete — volume from this paper; review-gap-filled from other p…</sub><br><sub>route_to: `human_review`</sub> | [Peloquin_2008_reference](drugs/drug_gatifloxacin/Gatifloxacin_Peloquin2008_reference.md) | — | 1-compartment (no model) | 6 | Peloquin CA et al., Population pharmacokinetics of levoflox…, Antimicrobial agents and ch… (2008) | [10.1128/AAC.01036-07](https://doi.org/10.1128/AAC.01036-07) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q27, Q76 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [Rubino_2007_final](drugs/drug_gatifloxacin/Gatifloxacin_Rubino2007_final.md) | — | 1-compartment (no model) | 4 | Rubino CM et al., Population pharmacokinetic model for ga…, Antimicrobial agents and ch… (2007) | [10.1128/AAC.00685-06](https://doi.org/10.1128/AAC.00685-06) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q27 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [Rubino_2007_final_population_mean_final_estimate](drugs/drug_gatifloxacin/Gatifloxacin_Rubino2007_final_population_mean_final_estimate.md) | — | 1-compartment (no model) | 3 | Rubino CM et al., Population pharmacokinetic model for ga…, Antimicrobial agents and ch… (2007) | [10.1128/AAC.00685-06](https://doi.org/10.1128/AAC.00685-06) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.125). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Ambrose_2007_reference](drugs/drug_gatifloxacin/Gatifloxacin_Ambrose2007_reference.md) | — | 1-compartment (no model) | 0 | Ambrose PG et al., Pharmacokinetics-pharmacodynamics of ga…, Antimicrobial agents and ch… (2007) | [10.1128/AAC.00251-07](https://doi.org/10.1128/AAC.00251-07) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by qwen3.8-27b, p(non-human) 0.95).">in vitro</span> | [Tasso_2011_Streptococcus_pneumoniae_bacterial_count](drugs/drug_gatifloxacin/pd_Tasso_2011_Streptococcus_pneumoniae_bacterial_count.md) | Streptococcus pneumoniae bacterial count biomarker turnover ← gatifloxacin | — | Tasso L et al., Pharmacokinetic/pharmacodynamic modelli…, International journal of an… (2011) | [10.1016/j.ijantimicag.2011.05.015](https://doi.org/10.1016/j.ijantimicag.2011.05.015) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=gatifloxacin).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| distribution | blood | `ALB` other/unknown | DrugBank actor |
| metabolism | liver | `CYP1A2` inhibitor | DrugBank actor |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 197 matched, 91 returned
- **screened:** 20  ·  **relevant:** 2
- **records:** 5  ·  extracted 1  ·  needs_review 3  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_4 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Niki_2008.pdf` | Niki Y et al., Evaluation of clinical dosage of gatifl…, Journal of infection and ch… (2008) | popPK | 9 | [10.1007/s10156-008-0625-0](https://doi.org/10.1007/s10156-008-0625-0) | [18709533](https://pubmed.ncbi.nlm.nih.gov/18709533) | The study performs population PK analysis for gatifloxacin in humans and reports AUC/Cmax, but specific compartmental parameters (CL, V, Q, ka) are likely in figures/supplementary material not provided. |
| `Peloquin_2008.pdf` | Peloquin CA et al., Population pharmacokinetics of levoflox…, Antimicrobial agents and ch… (2008) | popPK | 9 | [10.1128/AAC.01036-07](https://doi.org/10.1128/AAC.01036-07) | [18070980](https://pubmed.ncbi.nlm.nih.gov/18070980) | Study reports population PK for gatifloxacin in humans, but numeric values are only medians for V and t1/2 (missing CL/ka/Q), and full population model estimates are likely in tables not fully detailed in the text. |
| `Rubino_2007_2.pdf` | Rubino CM et al., Pharmacokinetics and pharmacodynamics o…, Diagnostic microbiology and… (2007) | popPK | 9 | [10.1016/j.diagmicrobio.2007.04.015](https://doi.org/10.1016/j.diagmicrobio.2007.04.015) | [17875453](https://pubmed.ncbi.nlm.nih.gov/17875453) | The study performs a population PK analysis for gatifloxacin in children, but the abstract only provides qualitative comparisons to adult exposure and does not list specific numeric parameter values like CL or V, which are likely in the full text or tables not provided. |
| `Smythe_2013.pdf` | Smythe W et al., Evaluation of initial and steady-state…, Antimicrobial agents and ch… (2013) | popPK | 9 | [10.1128/AAC.00479-13](https://doi.org/10.1128/AAC.00479-13) | [23774436](https://pubmed.ncbi.nlm.nih.gov/23774436) | The paper describes a population PK study for gatifloxacin in humans and reports specific exposure metrics (median AUC, % change), but likely lacks the explicit compartmental parameter values (CL, V, ka) required for full extraction. |

<sub>queue written 2026-10-14T23:03:47.201349+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Allen_2004 | irrelevant | 0 | 0 | This is an in vitro pharmacodynamic study testing the efficacy of fluoroquinolones against S. aureus, not a pharmacokinetic study of gatifloxacin. |
| popPK | Ambrose_2001 | irrelevant | 2 | 0 | This is a pharmacodynamic study using pre-existing PK models to calculate exposure (AUC) for response analysis, rather than reporting new quantitative PK parameter values (CL, V, ka) for gatifloxacin. |
| popPK | Ambrose_2003 | irrelevant | 3 | 0 | The paper uses a pre-existing population PK model to estimate exposure (AUC) in specific patient groups rather than deriving new quantitative PK parameters (CL, V, Q, ka) for gatifloxacin in this study. |
| popPK | Ba_2006 | irrelevant | 0 | 1 | The study describes an in vitro pharmacokinetic-pharmacodynamic model simulating human plasma profiles, which the instructions explicitly classify as "in-vitro/mechanistic only" and therefore low relevance, despite the presence of simulated PK values. |
| PGx | Becnel_2009 | not_relevant | 0 | 0 | The paper compares MICs of different fluoroquinolones in bacterial isolates, which is a measure of antimicrobial susceptibility (microbiology), not a human pharmacogenomic effect on PK or PD parameters. |
| popPK | Blanc_2018 | irrelevant | 0 | 0 | The study focuses on the spatial distribution of fluoroquinolones in rabbit TB lesions and does not report population pharmacokinetic parameters (CL, V, etc.) for gatifloxacin. |
| popPK | Blondeau_2004 | irrelevant | 0 | 0 | The paper is a review of the mutant prevention concentration (MPC) concept and in vitro resistance mechanisms, not a pharmacokinetic study reporting quantitative disposition parameters for gatifloxacin. |
| popPK | Bulitta_2009 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of cefuroxime axetil, not gatifloxacin. |
| popPK | Chigutsa_2012 | irrelevant | 0 | 0 | The study focuses on ofloxacin, not gatifloxacin. |
| popPK | Cottagnoud_2004 | irrelevant | 0 | 0 | The study investigates daptomycin, not gatifloxacin, and does not report pharmacokinetic parameters for gatifloxacin. |
| popPK | Davies_2018 | irrelevant | 0 | 0 | The paper is a study protocol for MDR-TB patients involving levofloxacin and moxifloxacin; gatifloxacin is only mentioned in the introduction regarding MIC resistance data and is not a subject drug for PK parameter extraction. |
| popPK | Ebisu_2003 | irrelevant | 1 | 0 | The study is an in vitro PK/PD investigation using a model to assess bactericidal activity, not a clinical or animal pharmacokinetic study reporting disposition parameters (CL, V, ka) for gatifloxacin. |
| popPK | Fu_2024 | irrelevant | 0 | 0 | The paper is a review of antimicrobial pharmacokinetics in the elderly and does not report any data for gatifloxacin. |
| popPK | Fukuda_2009 | irrelevant | 2 | 2 | The study reports only the maximum aqueous concentration (AQCmax) for gatifloxacin as part of a comparative efficacy assessment, without providing full quantitative disposition parameters like clearance or volume for a PK model. |
| PGx | Garrison_2003 | not_relevant | 0 | 0 | The study reports the effects of *bacterial* gene mutations (QRDR) on drug activity, not human pharmacogenomic variants affecting PK or PD parameters. |
| popPK | Gorle_2009 | irrelevant | 0 | 0 | The paper is a formulation and in-vivo/in-vitro release kinetics study of ocular inserts, not a pharmacokinetic study reporting disposition parameters like CL, V, or population PK models. |
| popPK | Hurtado_2014 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for levofloxacin, not gatifloxacin. |
| popPK | Jauréguiberry_2005 | irrelevant | 0 | 0 | The paper is a clinical retrospective study on the presentation of leptospirosis and contains no pharmacokinetic data or parameters for gatifloxacin. |
| popPK | Kozai_2017 | irrelevant | 0 | 0 | no_text gate: only 177 chars of text extracted (&lt; 400) |
| popPK | Landersdorfer_2009 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of gemifloxacin, not gatifloxacin. |
| popPK | Lister_2002 | irrelevant | 1 | 0 | This is an in vitro pharmacodynamics study measuring antimicrobial efficacy (viable counts/eradication) rather than quantitative population pharmacokinetic parameters (CL, V, Q). |
| popPK | Lorenzutti_2021 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of marbofloxacin in goats, not gatifloxacin. |
| popPK | Maier_2021 | irrelevant | 0 | 0 | The paper is an in-vitro study on the effects of antibiotics on gut microbiota and does not report any pharmacokinetic parameters for gatifloxacin. |
| popPK | Mikamo_2006 | irrelevant | 2 | 1 | The study reports clinical efficacy and AUC/MIC ratios for 4 patients but does not provide standard PK parameters like clearance (CL), volume (V), or half-life. |
| popPK | Moczygemba_2004 | irrelevant | 1 | 0 | The study is a pharmacodynamic comparison where gatifloxacin is one of several comparator drugs, and no quantitative PK parameters (CL, V, etc.) for gatifloxacin are reported in the evidence. |
| popPK | Nicolau_2003 | irrelevant | 0 | 0 | The study focuses on the pharmacodynamics of BMS-284756, not the pharmacokinetics of gatifloxacin. |
| popPK | Niki_2008 | relevant | 9 | 2 | The study performs population PK analysis for gatifloxacin in humans and reports AUC/Cmax, but specific compartmental parameters (CL, V, Q, ka) are likely in figures/supplementary material not provided. |
| popPK | Noreddin_2005 | irrelevant | 3 | 0 | This is a pharmacodynamic simulation study using previously described models; it reports probabilities of target attainment and qualitative PK changes, but does not provide the specific quantitative PK parameter values (CL, V, etc.) for gatifloxacin. |
| PGx | Ohno_2007 | not_relevant | 0 | 0 | The paper presents a method for predicting CYP3A4-mediated drug interactions using gatifloxacin as an inhibitor, but does not report pharmacogenomic effects of gene variants on gatifloxacin's PK/PD parameters. |
| PGx | Park_2014 | not_relevant | 0 | 0 | The paper investigates the effects of fluoroquinolone resistance on the metabolism of bacterial strains, not pharmacogenomic effects on drug PK/PD in humans. |
| popPK | Peloquin_2008 | relevant | 9 | 4 | Study reports population PK for gatifloxacin in humans, but numeric values are only medians for V and t1/2 (missing CL/ka/Q), and full population model estimates are likely in tables not fully detailed in the text. |
| popPK | Rubino_2007_2 | relevant | 9 | 1 | The study performs a population PK analysis for gatifloxacin in children, but the abstract only provides qualitative comparisons to adult exposure and does not list specific numeric parameter values like CL or V, which are likely in the full text or tables not provided. |
| popPK | Rustomjee_2008 | irrelevant | 0 | 0 | The study assesses the sterilizing activity of the drug on *M. tuberculosis* colony counts, not the pharmacokinetic disposition parameters (CL, V, etc.) of gatifloxacin itself. |
| popPK | Savic_2015 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of rifampin and levofloxacin, and gatifloxacin is mentioned only as a comparator drug in a cited adult trial. |
| popPK | Seifert_2019 | irrelevant | 1 | 0 | The study uses published PK models to predict treatment response in TB and does not report new quantitative PK parameter values for gatifloxacin. |
| PGx | Seifert_2019 | not_relevant | 0 | 0 | The paper investigates bacterial genetic variants (M. tuberculosis gyrA SNPs), not host pharmacogenomics. |
| PGx | Shams_2005 | not_relevant | 0 | 0 | The paper is a clinical guideline discussing fluoroquinolone selection based on antibacterial activity and general pharmacokinetics, but it does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| popPK | Smythe_2013 | relevant | 9 | 4 | The paper describes a population PK study for gatifloxacin in humans and reports specific exposure metrics (median AUC, % change), but likely lacks the explicit compartmental parameter values (CL, V, ka) required for full extraction. |
| popPK | Tasso_2011 | irrelevant | 2 | 0 | The study reports in vitro PK/PD parameters (EC50, kmax) rather than in vivo quantitative pharmacokinetic disposition parameters (CL, V, ka) for gatifloxacin. |
| popPK | Thwaites_2011 | irrelevant | 4 | 0 | The study provides only AUC ratios for CSF penetration and not the specific PK parameters (CL, V, Q, ka) or compartmental model values for gatifloxacin. |
| popPK | Van_2004 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for garenoxacin, not gatifloxacin. |
| popPK | Wan_2021 | irrelevant | 0 | 0 | The study investigates the toxicological effects of gatifloxacin on the cyanobacterium Microcystis aeruginosa (in vitro/aquatic ecotoxicology) and does not report any pharmacokinetic disposition parameters such as clearance, volume, or half-life. |
| popPK | Wang_2020 | irrelevant | 0 | 0 | The study investigates the population pharmacokinetics of delamanid, not gatifloxacin, which is only mentioned as a concomitant medication in the background regimen. |
| popPK | Wu_2024 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of nemonoxacin in rats, where gatifloxacin is used only as an internal standard for the analytical method. |
| popPK | Wu_2025 | irrelevant | 0 | 0 | The study is a clinical trial protocol for anti-tuberculosis drugs (rifapentine and moxifloxacin), and gatifloxacin is only mentioned as a drug in the exclusion criteria, not as the subject of pharmacokinetic analysis. |
| popPK | Xue_2023 | irrelevant | 0 | 0 | The study focuses on warfarin pharmacokinetics and pharmacodynamics; gatifloxacin is only mentioned as a comparator antibiotic associated with INR increases, not as the subject of PK modeling. |
| PGx | Zhanel_2003 | not_relevant | 0 | 0 | The study characterizes bacterial resistance mechanisms (genotypic and phenotypic) in S. pneumoniae, not human host pharmacogenomics affecting drug PK/PD. |
| PGx | Zhang_2008 | not_relevant | 0 | 0 | The study examines in vitro CYP450 inhibition by gatifloxacin, not the effect of a gene variant on gatifloxacin's pharmacokinetics or pharmacodynamics. |
| popPK | Zhang_2017 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of danofloxacin in chickens, with gatifloxacin used only as a comparator for antibiotic susceptibility testing (MIC determination). |
| popPK | Zimmerman_2017 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of ethambutol (EMB), not gatifloxacin, which is only mentioned in the discussion as a comparator drug. |
| popPK | Zinner_2001 | irrelevant | 1 | 1 | This is an in vitro pharmacodynamic study that simulates pharmacokinetics but does not report measured quantitative disposition parameters (CL, V, ka) for the drug. |
| popPK | Zvada_2012 | irrelevant | 0 | 0 | The study reports population pharmacokinetics for moxifloxacin, not the target drug gatifloxacin. |
| popPK | Zvada_2014 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of moxifloxacin and ofloxacin, not gatifloxacin. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-14 23:03 UTC</sub>
