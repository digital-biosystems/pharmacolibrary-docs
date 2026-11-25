<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N06A&quot;,&quot;href&quot;:&quot;atc/N06A.md&quot;},{&quot;label&quot;:&quot;desipramine&quot;}]"></div>

# desipramine

- **generic name:** desipramine
- **ATC codes:** `N06AA01`
- **DrugBank:** [DB01151](https://go.drugbank.com/drugs/DB01151) · **PubChem:** [CID 2995](https://pubchem.ncbi.nlm.nih.gov/compound/2995)
- **molar mass:** 266.3807 g/mol (C18H22N2) — DrugBank
- **groups:** approved

## About

Desipramine is a tricyclic antidepressant used to treat depression. It is given orally as tablets and is well absorbed through the gut. It is no longer a first-line treatment for depression because newer drug classes are safer.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q423288](https://www.wikidata.org/wiki/Q423288), [Wikipedia](https://en.wikipedia.org/wiki/Desipramine?oldid=1328703992) (CC BY-SA 4.0), DrugBank's routes and dosage forms and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| desipramine | parent | 266.381 | C18H22N2 | DrugBank | [2995](https://pubchem.ncbi.nlm.nih.gov/compound/2995) | Asiimwe_2024, Gueorguieva_2010 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: C6_cl_magnitude failed (ratio None)</sub> | [Gueorguieva_2010_reference](drugs/drug_desipramine/Desipramine_Gueorguieva2010_reference.md) | — | 2-compartment (no model) | 5 | Gueorguieva I et al., Desipramine, substrate for CYP2D6 activ…, British journal of clinical… (2010) | [10.1111/j.1365-2125.2010.03731.x](https://doi.org/10.1111/j.1365-2125.2010.03731.x) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C9 clearance/volume outside physiological window (implausible magnitude — unit/…</sub> | [Asiimwe_2024_reference](drugs/drug_desipramine/Desipramine_Asiimwe2024_reference.md) | — | 2-compartment (no model) | 4 | Asiimwe IG et al., Machine-Learning Assisted Screening of…, The AAPS journal (2024) | [10.1208/s12248-024-00934-6](https://doi.org/10.1208/s12248-024-00934-6) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter — unit dimension conflicts with…</sub> | [DeVane_1981_reference](drugs/drug_desipramine/Desipramine_DeVane1981_reference.md) | — | 1-compartment (no model) | 8 | DeVane CL et al., Desipramine and 2-hydroxy-desipramine p…, European journal of clinica… (1981) | [10.1007/BF00558386](https://doi.org/10.1007/BF00558386) |
| <span class="pk-rf" hidden data-species="monkey" data-age="unknown" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (monkey), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">monkey</span><br><sub>blocking: C9 clearance/volume outside physiological window (implausible magnitude — unit/…</sub> | [Raffel_2013_reference](drugs/drug_desipramine/Desipramine_Raffel2013_reference.md) | — | 1-compartment (no model) | 2 | Raffel DM et al., Quantification of cardiac sympathetic n…, Journal of nuclear medicine… (2013) | [10.2967/jnumed.113.120659](https://doi.org/10.2967/jnumed.113.120659) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Argenti_1994_beta_adrenergic_receptor_density](drugs/drug_desipramine/pd_Argenti_1994_beta_adrenergic_receptor_density.md) | cortical beta adrenergic receptor density ← desipramine · direct Emax (saturable) effect | — | Argenti D et al., The pharmacodynamics of desipramine and…, The Journal of pharmacology… (1994) | — |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Ho_2005_Ca2_i](drugs/drug_desipramine/pd_Ho_2005_Ca2_i.md) | [Ca2+]i ← desipramine · direct sigmoid Emax (Hill) effect | — | Ho CM et al., Effect of desipramine on Ca2+ levels an…, Cellular signalling (2005) | [10.1016/j.cellsig.2004.11.005](https://doi.org/10.1016/j.cellsig.2004.11.005) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Jan_2003_Ca_2_i](drugs/drug_desipramine/pd_Jan_2003_Ca_2_i.md) | intracellular Ca(2+) concentration ← desipramine · direct Emax (saturable) effect | — | Jan CR et al., Effect of the antidepressant desipramin…, Pharmacology (2003) | [10.1159/000073663](https://doi.org/10.1159/000073663) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Shin_2018_Kv](drugs/drug_desipramine/pd_Shin_2018_Kv.md) | voltage-dependent K+ (Kv) currents ← desipramine · direct sigmoid Emax (Hill) effect | — | Shin SE et al., Inhibition of the Voltage-Dependent K, Cardiovascular toxicology (2018) | [10.1007/s12012-017-9435-x](https://doi.org/10.1007/s12012-017-9435-x) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Yuen_2017_FST](drugs/drug_desipramine/pd_Yuen_2017_FST.md) | immobility ← desipramine · inhibition effect | — | Yuen E et al., Prediction of human efficacious antidep…, Pharmacology, biochemistry,… (2017) | [10.1016/j.pbb.2017.09.002](https://doi.org/10.1016/j.pbb.2017.09.002) |
| <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (monkey), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">monkey</span> | [Raffel_2013_Ki](drugs/drug_desipramine/pd_Raffel_2013_Ki.md) | net uptake rate constant Ki ← desipramine · direct sigmoid Emax (Hill) effect | — | Raffel DM et al., Quantification of cardiac sympathetic n…, Journal of nuclear medicine… (2013) | [10.2967/jnumed.113.120659](https://doi.org/10.2967/jnumed.113.120659) |
| <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (monkey), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">monkey</span> | [Raffel_2013_Kp](drugs/drug_desipramine/pd_Raffel_2013_Kp.md) | Patlak slope Kp ← desipramine · direct sigmoid Emax (Hill) effect | — | Raffel DM et al., Quantification of cardiac sympathetic n…, Journal of nuclear medicine… (2013) | [10.2967/jnumed.113.120659](https://doi.org/10.2967/jnumed.113.120659) |
| <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Argenti_1994_beta_adrenergic_receptor_density_2](drugs/drug_desipramine/pd_Argenti_1994_beta_adrenergic_receptor_density_2.md) | cortical beta adrenergic receptor density ← desmethyldesipramine · direct Emax (saturable) effect | — | Argenti D et al., The pharmacodynamics of desipramine and…, The Journal of pharmacology… (1994) | — |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-23 19:32 | 0:22 | 1/3/0 | 7/1/0 | 0/0/0 | 6,324/1,225 | einfracz / qwen3.8-27b | 16 | 14/2 | 5/0 | 0 |

## Coverage

- **PubMed hits:** 76 matched, 20 returned
- **screened:** 14  ·  **relevant:** 4
- **records:** 4  ·  extracted 0  ·  needs review 1  ·  rejected 3  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Yuen_2017.pdf` | Yuen E et al., Prediction of human efficacious antidep…, Pharmacology, biochemistry,… (2017) | popPK | 7 | [10.1016/j.pbb.2017.09.002](https://doi.org/10.1016/j.pbb.2017.09.002) | [28888484](https://pubmed.ncbi.nlm.nih.gov/28888484) | The paper describes a population PK/PD analysis for desipramine in mice, but no specific quantitative parameter values (CL, V, etc.) are present in the provided evidence. |

<sub>queue written 2026-11-23 19:31 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Argenti_1994 | irrelevant | 3 | 2 | The study is pharmacodynamic (receptor downregulation) and reports concentration-effect parameters (ED50, EC50, Emax) rather than pharmacokinetic disposition parameters (CL, V, t1/2, ka). |
| PGx | Argenti_1994 | not_relevant | 0 | 0 | The study investigates dose-dependent PK/PD in rats and does not report on the effect of a gene variant or genotype on desipramine's pharmacokinetic or pharmacodynamic parameters. |
| popPK | Baumann_1996 | irrelevant | 1 | 0 | The paper is a review focused on SSRIs, and desipramine is mentioned only as a comparator or substrate in drug interaction studies without original population PK parameter extraction. |
| PGx | Baumann_1996 | not_relevant | 2 | 0 | The paper is a review of SSRI pharmacokinetics and drug-drug interactions; it mentions desipramine only to confirm moderate CYP2D6 inhibition by sertraline, but does not report a specific pharmacogenomic effect (gene variant changing PK/PD) for desipramine. |
| popPK | Baumann_1996_2 | irrelevant | 0 | 0 | The paper is a review of SSRIs and only mentions desipramine in the context of interaction studies with sertraline, without reporting specific pharmacokinetic parameter values for desipramine itself. |
| PGx | Baumann_1996_2 | not_relevant | 1 | 0 | The paper reviews SSRI pharmacokinetics and interactions, mentioning desipramine only to describe moderate CYP2D6 inhibition by sertraline, without reporting a pharmacogenomic effect of a gene variant on desipramine's PK/PD parameters. |
| popPK | Broch_1987 | irrelevant | 0 | 0 | The study focuses on the acute effects of nomifensine on neurotransmitter metabolism in rat brain, using desipramine only as a comparator for metabolic effects, not for pharmacokinetic parameter estimation. |
| PGx | Broch_1987 | not_relevant | 0 | 0 | The study investigates the pharmacodynamic effects of nomifensine and compares them to desipramine in rats, but it does not report any pharmacogenomic effects (gene variants) on desipramine's PK or PD parameters. |
| PGx | Cruz_2014 | not_relevant | 0 | 0 | The paper reports a drug-drug interaction (pharmacokinetic interaction between almorexant and desipramine) rather than a pharmacogenomic effect caused by a gene variant. |
| popPK | Davis_2003 | irrelevant | 0 | 0 | The paper is a review of pain management in the elderly and mentions desipramine only as a preferred adjuvant for neuropathic pain, without providing any pharmacokinetic data for the drug. |
| PGx | Davis_2003 | not_relevant | 0 | 0 | The paper is a general review of pain management in the elderly and mentions desipramine only as a recommended adjuvant, without reporting any pharmacogenomic effects on its PK or PD parameters. |
| PGx | DeVane_1981 | not_relevant | 0 | 0 | The study reports pharmacokinetics in normal volunteers without any genotyping or analysis of gene variants affecting desipramine parameters. |
| popPK | DeVane_1981_2 | relevant | 9 | 0 | The paper describes a population PK study of desipramine in humans with compartmental models, but no specific numeric parameter values (CL, V, t1/2, etc.) are present in the provided evidence text. |
| PGx | DeVane_1981_2 | not_relevant | 0 | 0 | The study reports pharmacokinetic parameters in healthy volunteers but does not investigate any gene variants, genotypes, or genetic phenotypes. |
| popPK | Desmarais_2011 | irrelevant | 0 | 0 | This is a review article on generic substitution issues; it mentions desipramine only in a table of case reports regarding clinical deterioration, with no original quantitative PK parameters reported. |
| PGx | Desmarais_2011 | not_relevant | 0 | 0 | The paper is a review of generic drug substitution issues and does not report pharmacogenomic effects on desipramine pharmacokinetics or pharmacodynamics. |
| popPK | Gareri_2000 | irrelevant | 2 | 0 | The paper is a clinical review of depression in the elderly; while it mentions desipramine's half-life in a summary table, it does not report original quantitative population pharmacokinetic parameters (CL, V, Q, ka) derived from a PK study. |
| PGx | Gareri_2000 | not_relevant | 1 | 0 | The paper is a general review of antidepressants in the elderly and mentions desipramine only as a drug of choice, without reporting specific pharmacogenomic data or effect sizes. |
| popPK | Gillman_2007 | irrelevant | 1 | 2 | This is a review of pharmacology and toxicity that cites general ranges for half-life and volume of distribution in the text, but does not report original quantitative PK parameter estimation or population PK model data for desipramine. |
| PGx | Gillman_2007 | not_relevant | 0 | 0 | The paper discusses general pharmacology and drug interactions, not pharmacogenomic effects. |
| PGx | Gueorguieva_2010 | not_relevant | 2 | 1 | The paper presents a population PK model and study design for desipramine, and mentions metabolizer subgroups, but it does not report a specific fitted pharmacogenomic effect size (e.g., change in clearance per genotype) in the provided text. |
| popPK | Ho_2005 | irrelevant | 0 | 0 | The study is an in vitro mechanistic investigation of calcium levels and cell growth, reporting no pharmacokinetic disposition parameters for desipramine. |
| PGx | Ho_2005 | not_relevant | 0 | 0 | The study investigates the cellular mechanism of desipramine (Ca2+ signaling and apoptosis) in renal tubular cells and does not report any gene variants, genotypes, or pharmacogenomic effects on PK or PD parameters. |
| popPK | Jan_2003 | irrelevant | 0 | 0 | This is an in-vitro mechanistic study on cell signaling and proliferation, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| PGx | Jan_2003 | not_relevant | 0 | 0 | The paper investigates the mechanism of action of desipramine in osteosarcoma cells (calcium flux and proliferation) and does not report any pharmacogenomic effects on PK or PD parameters. |
| popPK | Lancaster_1989 | irrelevant | 2 | 1 | This is a drug monograph/review for lofepramine where desipramine is mentioned only as a major metabolite or comparator, without a dedicated compartmental PK model or specific quantitative disposition parameters (CL, V, Q) for desipramine itself. |
| PGx | Lancaster_1989 | not_relevant | 0 | 0 | The paper describes the general pharmacology and pharmacokinetics of lofepramine and its metabolite desipramine but does not report any genetic variants or genotypes affecting their PK or PD parameters. |
| popPK | Mosaddeghi_1989 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of phosphatidylinositol hydrolysis, not a pharmacokinetic study reporting disposition parameters. |
| PGx | Mosaddeghi_1989 | not_relevant | 0 | 0 | The study investigates the mechanism of action of desipramine (and other inhibitors) on in vitro biochemical signaling pathways, without examining the impact of genetic variants on desipramine's PK or PD parameters. |
| popPK | Mu_2020 | irrelevant | 0 | 0 | Desipramine is only used as a NET-blocking probe in a PET tracer ([11C]mHED) kinetic study in mice; no PK parameters of desipramine itself are reported. |
| popPK | Pancrazio_1998 | irrelevant | 0 | 0 | This is an in-vitro electrophysiology study examining the inhibition of sodium channels by desipramine, not a pharmacokinetic study. |
| PGx | Pancrazio_1998 | not_relevant | 0 | 0 | The paper reports in vitro pharmacodynamic effects of desipramine on sodium channels but does not involve gene variants or pharmacogenomics. |
| popPK | Raffel_2013 | irrelevant | 0 | 0 | Desipramine is used only as a pharmacological NET inhibitor to modify radiotracer kinetics, not as the subject drug for PK parameter estimation. |
| PGx | Raffel_2013 | not_relevant | 0 | 0 | The paper investigates the kinetics of a radiotracer (11C-GMO) using desipramine as a pharmacological tool to block the transporter, and it does not report any genetic variants or pharmacogenomic effects on desipramine's PK or PD. |
| popPK | Saivin_1998 | irrelevant | 0 | 0 | The paper is a pharmacokinetic review of acamprosate, and desipramine is only mentioned as a co-administered drug in interaction studies with no PK parameters reported for it. |
| PGx | Saivin_1998 | not_relevant | 0 | 0 | The paper discusses the pharmacokinetics of acamprosate and mentions that it does not influence the kinetics of desipramine, but it does not report on how genetic variants affect desipramine's PK or PD. |
| popPK | Sallee_1990 | relevant | 6 | 3 | The paper is a review that summarizes pharmacokinetic parameters for desipramine, including ranges and specific cited values in text and a partial table, but lacks a single original experimental dataset or complete population model values. |
| popPK | Shin_2018 | irrelevant | 0 | 0 | The study is an in vitro mechanistic investigation of desipramine's effect on ion channels, not a pharmacokinetic study reporting disposition parameters. |
| PGx | Shin_2018 | not_relevant | 0 | 0 | The paper describes the direct pharmacological effect of desipramine on ion channels in an ex vivo cell preparation, not a pharmacogenomic effect on PK or PD parameters. |
| popPK | Sistovaris_1983 | irrelevant | 1 | 0 | The study is a method validation for imipramine where desipramine is analyzed as a metabolite, and no quantitative pharmacokinetic parameters (clearance, volume, etc.) are reported in the provided evidence. |
| PGx | Sistovaris_1983 | not_relevant | 0 | 0 | The paper describes a chromatographic method for measuring drug levels in a small group of volunteers but does not investigate gene variants or pharmacogenomic effects. |
| popPK | Sudhir_1990 | irrelevant | 0 | 0 | The study examines venous reactivity in dogs and uses desipramine only as a diagnostic agent to assess neuronal uptake, reporting no pharmacokinetic parameters for desipramine. |
| PGx | Sudhir_1990 | not_relevant | 0 | 0 | The paper describes vascular reactivity in canine renovascular hypertension and uses desipramine only as a functional probe for neuronal uptake; it does not investigate genetic variants or pharmacogenomic effects on desipramine PK/PD. |
| popPK | Tamayo_1992 | relevant | 9 | 4 | The study reports population PK parameters for desipramine (metabolite) including elimination constant, but clearance and volume values are not explicitly listed in the abstract, likely residing in tables not provided. |
| PGx | Tamayo_1992 | not_relevant | 0 | 0 | The study describes population pharmacokinetics of imipramine and desipramine in children but does not report any genetic variants, genotypes, or phenotypes influencing these parameters. |
| popPK | Tyagi_2010 | irrelevant | 0 | 0 | The paper focuses on mirabegron, and desipramine is only used as a probe/co-administered drug to demonstrate CYP2D6 inhibition, not as the subject of PK modeling. |
| PGx | Tyagi_2010 | not_relevant | 0 | 0 | The paper describes a drug-drug interaction (CYP2D6 inhibition by mirabegron) affecting desipramine PK, not a pharmacogenomic effect based on patient genotype. |
| popPK | Weiner_1981 | relevant | 7 | 2 | Study describes an open one-compartment PK model for desipramine in humans, but specific numeric parameter values (CL, V, ka, t1/2) are not present in the provided text. |
| PGx | Weiner_1981 | not_relevant | 0 | 0 | The paper evaluates the pharmacokinetic linearity of desipramine but does not report on gene variants or pharmacogenomic effects. |
| popPK | Yuen_2017 | relevant | 7 | 0 | The paper describes a population PK/PD analysis for desipramine in mice, but no specific quantitative parameter values (CL, V, etc.) are present in the provided evidence. |
| PGx | Yuen_2017 | not_relevant | 0 | 0 | The paper focuses on translating mouse FST data to human doses using PK/PD modeling, but does not investigate any gene variants, genotypes, or phenotypes (pharmacogenomics). |
| popPK | Zimmer_1990 | irrelevant | 0 | 0 | The paper is a review of drug interactions with moclobemide; desipramine is only mentioned as a comparator in a tyramine challenge test, with no quantitative PK parameters (CL, V, ka) reported. |
| PGx | Zimmer_1990 | not_relevant | 0 | 0 | The paper reviews drug-drug interactions with moclobemide, not pharmacogenomic variants affecting desipramine's PK or PD. |
| popPK | von_1995 | irrelevant | 0 | 0 | The study is a pharmacological investigation of P2-purinoceptors in rat heart atria, where desipramine is used solely as an uptake inhibitor to block reuptake of radiolabeled noradrenaline, not as a subject drug for PK parameter estimation. |
| PGx | von_1995 | not_relevant | 0 | 0 | The study investigates purinoceptor-mediated inhibition of noradrenaline release and uses desipramine solely as an uptake blocker, not as the primary drug of interest for pharmacogenomic analysis. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bdesipramine%5D&body=Drug%3A%20desipramine%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_desipramine/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-23 11:43 UTC</sub>
