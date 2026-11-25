<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N04B&quot;,&quot;href&quot;:&quot;atc/N04B.md&quot;},{&quot;label&quot;:&quot;pergolide&quot;}]"></div>

# pergolide

- **generic name:** pergolide
- **ATC codes:** `N04BC02`
- **DrugBank:** [DB01186](https://go.drugbank.com/drugs/DB01186) · **PubChem:** [CID 47811](https://pubchem.ncbi.nlm.nih.gov/compound/47811)
- **molar mass:** 314.488 g/mol (C19H26N2S) — DrugBank
- **groups:** approved, vet_approved, withdrawn

## About

Pergolide is an ergoline-based dopamine agonist used to treat Parkinson's disease and Tourette syndrome. It is administered orally in tablet form. Pergolide is used mainly in veterinary medicine for equine Cushing's syndrome and has been withdrawn from the human market in some countries due to safety concerns.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q415752](https://www.wikidata.org/wiki/Q415752), [Wikipedia](https://en.wikipedia.org/wiki/Pergolide?oldid=1383095352) (CC BY-SA 4.0), DrugBank's routes and dosage forms and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Fici_1997_cAMP](drugs/drug_pergolide/pd_Fici_1997_cAMP.md) | cAMP formation ← pergolide · direct Emax (saturable) effect | — | Fici GJ et al., D1 dopamine receptor activity of anti-p…, Life sciences (1997) | [10.1016/s0024-3205(97)00126-4](https://doi.org/10.1016/s0024-3205(97)00126-4) |
| <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Gardner_1998_35S_GTP_S](drugs/drug_pergolide/pd_Gardner_1998_35S_GTP_S.md) | agonist-stimulated [35S]GTPγS binding ← pergolide · direct Emax (saturable) effect | — | Gardner B et al., Agonist action at D2(long) dopamine rec…, British journal of pharmaco… (1998) | [10.1038/sj.bjp.0701926](https://doi.org/10.1038/sj.bjp.0701926) |
| <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by glm-5.3-flash, p(non-human) 0.90).">in vitro</span> | [Hurst_2003_hERG](drugs/drug_pergolide/pd_Hurst_2003_hERG.md) | hERG K(+) channel block ← pergolide · direct sigmoid Emax (Hill) effect | — | Hurst RS et al., Dopamine receptor agonists differ in th…, European journal of pharmac… (2003) | [10.1016/j.ejphar.2003.09.054](https://doi.org/10.1016/j.ejphar.2003.09.054) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-24 02:41 | 0:03 | 0/0/0 | 0/3/0 | 0/0/0 | 3,815/165 | einfracz / qwen3.8-27b | 5 | 3/2 | 5/0 | 0 |

## Coverage

- **PubMed hits:** 83 matched, 64 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Agúndez_2013 | irrelevant | 0 | 0 | This is a pharmacogenetics review that lists pergolide as a substrate for CYP3A4 but provides no quantitative pharmacokinetic parameters. |
| PGx | Agúndez_2013 | not_relevant | 2 | 0 | The paper mentions CYP3A4 regarding pergolide only as a context for drug-drug interactions (substrates/inhibitors/inducers), not as a genetic variant affecting pharmacokinetics, and it is a review without specific quantitative effect sizes for pergolide. |
| popPK | Arai_2012 | irrelevant | 0 | 0 | The study focuses on the effect of ropinirole on arginine vasopressin levels, using pergolide only as a historical comparator, and does not report pergolide pharmacokinetic parameters. |
| PGx | Arai_2012 | not_relevant | 0 | 0 | The study investigates the pharmacodynamic effect of ropinirole on vasopressin levels and does not involve pergolide, genetic variants, or pharmacogenomics. |
| popPK | Avorn_2005 | irrelevant | 0 | 0 | The study is a clinical case-control analysis of adverse events (somnolence) and contains no pharmacokinetic parameters or models for pergolide. |
| PGx | Avorn_2005 | not_relevant | 0 | 0 | The paper reports an adverse event (somnolence) associated with dopamine agonist use in a clinical population but does not investigate any genetic variants or pharmacogenomic effects on PK/PD parameters. |
| popPK | Bymaster_1986 | irrelevant | 0 | 0 | The study is a pharmacological/in-vitro binding study where pergolide is used only as a radioligand for receptor binding assays, not as the subject of pharmacokinetic analysis. |
| PGx | Bymaster_1986 | not_relevant | 0 | 0 | The paper reports on the pharmacological properties of LY163502, not pergolide, and does not involve pharmacogenomics. |
| PGx | Cacabelos_2017 | not_relevant | 2 | 0 | Review on PD pathogenesis and pharmacogenomics; pergolide only listed as a dopamine agonist with no gene-variant effect on its PK/PD parameters reported. |
| popPK | Carboni_1986 | irrelevant | 0 | 0 | The paper describes a pharmacodynamic study on hypothermia in rats, not a pharmacokinetic study, and reports no disposition parameters for pergolide. |
| PGx | Carboni_1986 | not_relevant | 0 | 0 | The paper studies pharmacological receptor antagonism (D1/D2) on hypothermia, not the effect of a gene variant on pergolide's PK/PD. |
| popPK | Carlson_1986 | irrelevant | 0 | 0 | The paper is a neurophysiological study examining receptor-mediated effects on neuronal firing rates, not a pharmacokinetic study reporting disposition parameters for pergolide. |
| PGx | Carlson_1986 | not_relevant | 0 | 0 | The paper is a neurophysiological study on the mechanism of action of a D-1 antagonist (SCH 23390) and its interaction with dopamine agonists; it does not involve pergolide pharmacogenomics or genotype-based PK/PD variations. |
| popPK | Chen_1997 | irrelevant | 0 | 0 | The study characterizes in vitro dopamine transporter binding where pergolide is used only as a comparator ligand, with no pharmacokinetic parameters measured or reported. |
| PGx | Chen_1997 | not_relevant | 0 | 0 | The paper characterizes in vitro ligand binding to the dopamine transporter and does not investigate the effect of genetic variants on the pharmacokinetics or pharmacodynamics of pergolide. |
| popPK | Clark_1991 | irrelevant | 0 | 0 | The paper investigates the pharmacodynamics and receptor binding profile of 3-PPP, using pergolide only as a reference ligand in functional assays, with no PK parameter reporting. |
| PGx | Clark_1991 | not_relevant | 0 | 0 | The paper focuses on the pharmacodynamics of 3-PPP enantiomers and does not report any pharmacogenomic effects (gene variants/genotypes) on pergolide. |
| popPK | Deleu_2002 | irrelevant | 1 | 0 | This is a general review of Parkinson's disease drugs that mentions pergolide only by name without providing any specific pharmacokinetic parameter values or models. |
| PGx | Deleu_2002 | not_relevant | 0 | 0 | The text is a general review of pharmacokinetic and pharmacodynamic properties of Parkinson's disease drugs, including pergolide, but it does not report any effects of gene variants or genotypes on these parameters. |
| popPK | Dong_2021 | irrelevant | 0 | 0 | The paper focuses on the development of a biosensor (psychLight) for 5-HT2AR and does not report any pharmacokinetic parameters for pergolide. |
| PGx | Dong_2021 | not_relevant | 0 | 0 | The paper describes a biosensor for 5-HT2AR and drug discovery, with no mention of pergolide or any pharmacogenomic effects on PK/PD parameters. |
| popPK | Eaton_2022 | irrelevant | 0 | 0 | This is a population PK study of dabigatran in rabbits, not pergolide; pergolide is not mentioned at all. |
| popPK | Fici_1997 | irrelevant | 0 | 0 | This is an in-vitro pharmacological study measuring receptor activity and cAMP formation, not a pharmacokinetic study reporting disposition parameters. |
| PGx | Fici_1997 | not_relevant | 0 | 0 | The paper describes in vitro pharmacodynamics (cAMP formation) but does not investigate gene variants or pharmacogenomics. |
| popPK | Gardner_1998 | irrelevant | 0 | 0 | This is an in-vitro pharmacodynamic study of receptor binding and G-protein signaling, not a pharmacokinetic study. |
| PGx | Gardner_1998 | not_relevant | 0 | 0 | The paper investigates agonist binding and functional activity at dopamine receptors but does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| popPK | Gundlach_1983 | irrelevant | 0 | 0 | The study is an in-vitro receptor binding experiment assessing affinity and potency, not a pharmacokinetic study of pergolide disposition. |
| PGx | Gundlach_1983 | not_relevant | 0 | 0 | The paper describes in vitro receptor binding properties of pergolide in the presence of GTP, not pharmacogenomic effects on PK or PD parameters in patients. |
| popPK | Hensler_1987 | irrelevant | 0 | 0 | This is an in-vitro pharmacological binding study of dopamine receptors in rabbit retina, containing no pharmacokinetic data for pergolide. |
| PGx | Hensler_1987 | not_relevant | 0 | 0 | The paper describes pharmacological receptor characterization in rabbit retina and does not report any pharmacogenomic effects on pergolide PK or PD parameters. |
| popPK | Herrera-Marschitz_1984 | irrelevant | 0 | 0 | The study is a pharmacodynamic investigation of dopamine receptor mechanisms (rotation behavior) in rats, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| PGx | Herrera-Marschitz_1984 | not_relevant | 0 | 0 | The study investigates receptor pharmacology (D1 vs D2) of pergolide in rats and does not report any pharmacogenomic effects on PK or PD parameters. |
| popPK | Herrera-Marschitz_1984_2 | irrelevant | 0 | 0 | The study is a behavioral pharmacology investigation into dopamine receptor mechanisms in rats, containing no pharmacokinetic data or quantitative disposition parameters for pergolide. |
| PGx | Herrera-Marschitz_1984_2 | not_relevant | 0 | 0 | The paper investigates neuroanatomical mechanisms of drug action in a rodent model using surgical lesions, not human pharmacogenomic variants. |
| popPK | Holford_2006 | irrelevant | 1 | 0 | The paper is a disease progression/pharmacodynamic model focusing on clinical scores (UPDRS) and does not report quantitative pharmacokinetic parameters (CL, V, ka) for pergolide. |
| PGx | Holford_2006 | not_relevant | 0 | 0 | The paper reports clinical pharmacodynamic outcomes (UPDRS) for pergolide but contains no information regarding genetic variants or pharmacogenomics. |
| popPK | Holford_2008 | irrelevant | 0 | 0 | no_text gate: only 84 chars of text extracted (&lt; 400) |
| PGx | Holford_2008 | not_relevant | 0 | 0 | The paper discusses the general impact of disease progression on drug action in Parkinson's but does not report any pharmacogenomic effects of pergolide. |
| popPK | Hurst_2003 | irrelevant | 0 | 0 | The study focuses on electrophysiological effects (hERG channel blocking and cardiac action potential duration) rather than pharmacokinetic disposition parameters like clearance or volume. |
| PGx | Hurst_2003 | not_relevant | 0 | 0 | The paper reports electrophysiological properties of dopamine agonists, not the impact of genetic variants on pergolide's PK or PD parameters. |
| popPK | Jenett-Siems_2004 | irrelevant | 0 | 0 | The study evaluates in vitro antiplasmodial activity and cytotoxicity, not pharmacokinetic parameters. |
| PGx | Jenett-Siems_2004 | not_relevant | 0 | 0 | The paper reports in vitro antiplasmodial activity and cytotoxicity of pergolide derivatives, with no pharmacogenomic or genetic influence on PK/PD parameters. |
| popPK | Jeong_2013 | irrelevant | 0 | 0 | The study investigates in-vitro electrophysiological effects of pergolide on ion channels (IC50, kinetics) rather than pharmacokinetic disposition parameters (CL, Vd, ka). |
| PGx | Jeong_2013 | not_relevant | 0 | 0 | The paper investigates the electrophysiological mechanism of pergolide blocking Kv1.5 channels in CHO cells and contains no data on human gene variants affecting PK or PD. |
| popPK | Kren_2004 | irrelevant | 0 | 0 | The study is an in vitro pharmacological investigation of receptor affinity (pEC50, pA2) in rat tail artery, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| PGx | Kren_2004 | not_relevant | 0 | 0 | The paper investigates the pharmacology of pergolide oligomers in an animal model (rat tail artery) and does not report any human pharmacogenomic effects on PK or PD parameters. |
| popPK | Kvernmo_2008 | irrelevant | 0 | 0 | The paper is a review discussing receptor binding and general pharmacokinetic properties without reporting specific quantitative PK parameters (CL, V, t1/2) for pergolide. |
| PGx | Kvernmo_2008 | not_relevant | 0 | 0 | The text is a general review of dopamine agonist mechanisms and side effects (like fibrosis for pergolide) and does not report pharmacogenomic data linking specific gene variants to PK or PD parameters. |
| popPK | Lange_1998 | irrelevant | 0 | 0 | The paper is a clinical review of dopamine agonists in Parkinson's disease and contains no quantitative pharmacokinetic parameters (CL, V, etc.) for pergolide. |
| PGx | Lange_1998 | not_relevant | 0 | 0 | The paper is a general overview of dopamine agonists in Parkinson's disease and contains no information on pharmacogenomic effects on the PK or PD of pergolide. |
| popPK | Li_2026 | irrelevant | 0 | 0 | The paper is a structural biology study on serotonin 5-HT2A/2B receptors and pergolide is only mentioned historically as a withdrawn drug, with no pharmacokinetic data reported. |
| PGx | Li_2026 | not_relevant | 0 | 0 | The paper describes the structure-based design of new psychedelic analogs and does not mention pergolide or report any pharmacogenomic effects. |
| popPK | Luo_2024 | irrelevant | 0 | 0 | The paper focuses on machine learning algorithms for drug discovery using zebrafish brain activity maps and does not report pharmacokinetic parameters for pergolide. |
| PGx | Luo_2024 | not_relevant | 0 | 0 | The paper focuses on machine learning algorithms for drug discovery and does not investigate the effects of gene variants on the pharmacokinetics or pharmacodynamics of pergolide. |
| popPK | Maggio_2000 | irrelevant | 0 | 0 | The study is an in-vitro cell growth experiment investigating antiproliferative effects, not a pharmacokinetic study reporting disposition parameters for pergolide. |
| PGx | Maggio_2000 | not_relevant | 0 | 0 | The paper describes the antiproliferative effect of pergolide (and other dopamine agonists) on CHO-K1 cells in vitro, with no mention of pharmacogenomics, gene variants, or PK/PD parameters in a human or genetic context. |
| popPK | Malcolm_1997 | irrelevant | 0 | 0 | The paper is a clinical safety/adverse event report on pergolide for cocaine dependence and contains no pharmacokinetic parameters or models. |
| PGx | Malcolm_1997 | not_relevant | 0 | 0 | The paper reports adverse events of pergolide in cocaine dependence but contains no pharmacogenomic analysis or data on gene variants affecting PK/PD parameters. |
| popPK | Martin_1984 | irrelevant | 0 | 0 | The paper describes a pharmacodynamic test for dopamine autoreceptor activation in mice and does not report any pharmacokinetic parameters for pergolide. |
| PGx | Martin_1984 | not_relevant | 0 | 0 | The paper describes a pharmacodynamic test for dopamine autoreceptor activation in mice and does not report any pharmacogenomic effects on pergolide's PK or PD parameters. |
| popPK | Martin_1985 | irrelevant | 0 | 0 | The study focuses on receptor binding and pharmacodynamic selectivity of (+)-PHNO, using pergolide only as a comparator compound, and contains no pharmacokinetic parameters. |
| PGx | Martin_1985 | not_relevant | 0 | 0 | The paper is a pharmacology study comparing receptor binding and in vivo effects of a new drug (PHNO) with pergolide, containing no information on genetic variants or pharmacogenomics. |
| popPK | Maura_1989 | irrelevant | 0 | 0 | The study investigates the mechanism of aspartate release in rat striatal synaptomes and uses pergolide only as a pharmacological probe for D-2 receptors, reporting no pharmacokinetic parameters. |
| PGx | Maura_1989 | not_relevant | 0 | 0 | The paper investigates the pharmacodynamics of pergolide as a D-2 agonist on aspartate release but does not report any pharmacogenomic effects based on gene variants or genotypes. |
| popPK | Peris_1988 | irrelevant | 0 | 0 | The study is a pharmacological investigation of dopamine receptors on glutamate release in rat brain slices, not a pharmacokinetic study of pergolide. |
| PGx | Peris_1988 | not_relevant | 0 | 0 | The paper investigates D-2 receptor pharmacology in rat striatal slices and does not involve genetic variants or pharmacogenomics. |
| popPK | Pezzoli_1995 | irrelevant | 2 | 1 | The text is a clinical review summarizing therapeutic efficacy and mentions a half-life of 27 hours, but it lacks a compartmental pharmacokinetic model or specific quantitative disposition parameters like clearance (CL) or volume (V) required for population PK extraction. |
| PGx | Pezzoli_1995 | not_relevant | 0 | 0 | The paper describes general clinical efficacy and pharmacokinetics of pergolide but contains no information on gene variants or pharmacogenomics. |
| PGx | Rendle_2015 | not_relevant | 0 | 0 | The paper describes standard pharmacokinetics in horses without investigating gene variants or genotypes. |
| popPK | Rinken_1999 | irrelevant | 0 | 0 | The paper is an in-vitro pharmacological study characterizing dopamine receptor signaling, not a pharmacokinetic study of pergolide. |
| PGx | Rinken_1999 | not_relevant | 0 | 0 | The study characterizes the pharmacological potency of pergolide on GTPgammaS binding in rat membranes and does not involve genetic variants or pharmacogenomics. |
| popPK | Schäfer_2020 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of OATP transporter interactions (inhibition/uptake) and does not report population pharmacokinetic parameters like CL, V, or ka for pergolide. |
| PGx | Schäfer_2020 | not_relevant | 0 | 0 | The study investigates in vitro interactions of transporters with drugs, but does not link any specific gene variant or genotype to changes in PK/PD parameters for pergolide. |
| popPK | Ståhle_1990 | irrelevant | 0 | 0 | The study focuses on the pharmacodynamic effects (yawning, exploration) and microdialysis measurement of dopamine levels, not pharmacokinetic disposition parameters for pergolide. |
| PGx | Ståhle_1990 | not_relevant | 0 | 0 | The paper investigates the relationship between behavioral effects (yawning, exploration suppression) and extracellular dopamine levels in rats after administration of dopamine agonists (including pergolide), but it does not report pharmacogenomic effects (gene variants changing PK/PD). |
| popPK | Tadori_2014 | irrelevant | 0 | 0 | This is a review comparing therapeutic concentrations to receptor pharmacology (in vitro), not a study reporting PK disposition parameters (CL, V, t1/2, etc.) for pergolide. |
| PGx | Tadori_2014 | not_relevant | 0 | 0 | The paper is a review correlating plasma concentrations with in vitro pharmacology and does not report any pharmacogenomic effects of gene variants on PK or PD parameters for pergolide. |
| popPK | Uberti_2002 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic analysis of neuroprotection in cell lines and contains no pharmacokinetic data or disposition parameters. |
| PGx | Uberti_2002 | not_relevant | 0 | 0 | The paper investigates the neuroprotective mechanism of pergolide in cell cultures and contains no information regarding gene variants or pharmacogenomics. |
| popPK | Vautier_2008 | irrelevant | 0 | 0 | This is an in-vitro mechanistic study of transporter interactions, not a pharmacokinetic study reporting disposition parameters for pergolide. |
| PGx | Vautier_2008 | not_relevant | 0 | 0 | The study investigates drug-drug interactions involving ABCB1 transporters in a cell model, not the effect of a specific genetic variant/genotype on pharmacokinetics or pharmacodynamics. |
| popPK | Vu_2012 | irrelevant | 0 | 0 | The study is a clinical trial analyzing the progression of Parkinson's disease symptoms and treatment efficacy, not a pharmacokinetic study of pergolide. |
| PGx | Vu_2012 | not_relevant | 0 | 0 | The paper investigates disease progression and drug efficacy in Parkinson's disease but does not mention pergolide, pharmacogenomics, or gene variants. |
| popPK | Watts_1996 | irrelevant | 0 | 0 | The study is a mechanistic in vitro investigation of dopamine D2 receptor signaling and adenylate cyclase sensitization, with no pharmacokinetic parameters for pergolide reported. |
| PGx | Watts_1996 | not_relevant | 0 | 0 | The paper reports receptor pharmacology and mechanistic sensitization in cell lines, not a pharmacogenomic effect on PK or PD parameters in a clinical population. |
| popPK | Wynalda_1997 | irrelevant | 0 | 0 | The study is an in vitro mechanistic assessment of cytochrome P450 inhibition and does not report pharmacokinetic disposition parameters for pergolide. |
| PGx | Wynalda_1997 | not_relevant | 0 | 0 | The paper evaluates drug-induced CYP450 inhibition (drug-drug interaction potential) rather than the effect of genetic variants on pergolide pharmacokinetics or pharmacodynamics. |
| popPK | Youdim_1999 | irrelevant | 0 | 0 | The paper is a mechanistic neuroprotection study comparing iron chelating properties of various dopamine agonists, with no pharmacokinetic parameters reported for pergolide. |
| PGx | Youdim_1999 | not_relevant | 0 | 0 | The paper discusses pergolide only as a comparator in a study of apomorphine and does not report any pharmacogenomic effects on pergolide's PK or PD parameters. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bpergolide%5D&body=Drug%3A%20pergolide%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_pergolide/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
