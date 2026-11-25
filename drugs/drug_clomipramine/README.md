<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N06A&quot;,&quot;href&quot;:&quot;atc/N06A.md&quot;},{&quot;label&quot;:&quot;clomipramine&quot;}]"></div>

# clomipramine

- **generic name:** clomipramine
- **ATC codes:** `N06AA04`
- **DrugBank:** [DB01242](https://go.drugbank.com/drugs/DB01242) · **PubChem:** [CID 2801](https://pubchem.ncbi.nlm.nih.gov/compound/2801)
- **molar mass:** 314.852 g/mol (C19H23ClN2) — DrugBank
- **groups:** approved, investigational, vet_approved

## About

Clomipramine is a tricyclic antidepressant prescribed for obsessive-compulsive disorder, panic disorder, and pain. The medication is administered orally, typically as a tablet or capsule, while injectable solutions are reserved for specific clinical situations. It appears on the World Health Organization's essential medicines list and is accessible as a generic formulation.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q58713](https://www.wikidata.org/wiki/Q58713), [Wikipedia](https://en.wikipedia.org/wiki/Clomipramine?oldid=1380422146) (CC BY-SA 4.0), DrugBank's routes and dosage forms and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| clomipramine | parent | 314.852 | C19H23ClN2 | DrugBank | [2801](https://pubchem.ncbi.nlm.nih.gov/compound/2801) | Lainesse_2006, Nielsen-Kudsk_1980 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="cat" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (cat), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">cat</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q88 — no SI value to build from</sub> | [Lainesse_2006_reference](drugs/drug_clomipramine/Clomipramine_Lainesse2006_reference.md) | — | 1-compartment (no model) | 8 | Lainesse C et al., Pharmacokinetics of clomipramine and de…, Journal of veterinary pharm… (2006) | [10.1111/j.1365-2885.2006.00742.x](https://doi.org/10.1111/j.1365-2885.2006.00742.x) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Gex-Fabry_2000_reference](drugs/drug_clomipramine/Clomipramine_GexFabry2000_reference.md) | — | general linear (no model) | 0 | Gex-Fabry M et al., Population pharmacokinetics of clomipra…, Therapeutic drug monitoring (2000) | [10.1097/00007691-200012000-00009](https://doi.org/10.1097/00007691-200012000-00009) |
| <span class="pk-rf" hidden data-species="rat" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">rat</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Kurata_1986_reference](drugs/drug_clomipramine/Clomipramine_Kurata1986_reference.md) | — | 1-compartment (no model) | 0 | Kurata K et al., A pharmacokinetic study of clomipramine…, The Japanese journal of psy… (1986) | [10.1111/j.1440-1819.1986.tb03178.x](https://doi.org/10.1111/j.1440-1819.1986.tb03178.x) |
| <span class="pk-rf" hidden data-species="rabbit" data-age="unknown" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rabbit), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">rabbit</span><br><sub>blocking: C5 dimension mismatch on a structural parameter — unit dimension conflicts with…</sub> | [Nielsen-Kudsk_1980_reference](drugs/drug_clomipramine/Clomipramine_NielsenKudsk1980_reference.md) | — | 1-compartment (no model) | 3 | Nielsen-Kudsk F et al., Myocardial pharmacokinetics of amitript…, Acta pharmacologica et toxi… (1980) | [10.1111/j.1600-0773.1980.tb02445.x](https://doi.org/10.1111/j.1600-0773.1980.tb02445.x) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Castaing_2000_dye_leakage](drugs/drug_clomipramine/pd_Castaing_2000_dye_leakage.md) | dye leakage ← clomipramine · direct sigmoid Emax (Hill) effect | — | Castaing M et al., Membrane permeation by multidrug-resist…, The Journal of pharmacy and… (2000) | [10.1211/0022357001773977](https://doi.org/10.1211/0022357001773977) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (other animal), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">other animal</span> | [Di_2014_metamorphosis_rate](drugs/drug_clomipramine/pd_Di_2014_metamorphosis_rate.md) | metamorphosis rate ← clomipramine · inhibition effect | — | Di Poi C et al., Toxicity of five antidepressant drugs o…, Environmental science and p… (2014) | [10.1007/s11356-013-2211-y](https://doi.org/10.1007/s11356-013-2211-y) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (other animal), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">other animal</span> | [Di_2014_percentage_of_normal_larval_development](drugs/drug_clomipramine/pd_Di_2014_percentage_of_normal_larval_development.md) | percentage of normal larval development ← clomipramine · inhibition effect | — | Di Poi C et al., Toxicity of five antidepressant drugs o…, Environmental science and p… (2014) | [10.1007/s11356-013-2211-y](https://doi.org/10.1007/s11356-013-2211-y) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Gruwez_2007_clinical_score_for_depressed_patients](drugs/drug_clomipramine/pd_Gruwez_2007_clinical_score_for_depressed_patients.md) | clinical score for depressed patients ← clomipramine · disease-progression model | — | Gruwez B et al., A kinetic-pharmacodynamic model for cli…, Contemporary clinical trials (2007) | [10.1016/j.cct.2006.09.001](https://doi.org/10.1016/j.cct.2006.09.001) |
| <span class="pk-badge pk-badge--blue">Simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Hrdina_1988_3H_imipramine_binding_sodium_dependent](drugs/drug_clomipramine/pd_Hrdina_1988_3H_imipramine_binding_sodium_dependent.md) | [3H]imipramine binding (sodium-dependent) biomarker turnover ← clomipramine | — | Hrdina PD, Inhibition of sodium-dependent [3H]imip…, European journal of pharmac… (1988) | [10.1016/0014-2999(88)90575-4](https://doi.org/10.1016/0014-2999(88)90575-4) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Li_2018_Kv_current](drugs/drug_clomipramine/pd_Li_2018_Kv_current.md) | voltage-dependent K+ (Kv) channels ← clomipramine · direct sigmoid Emax (Hill) effect | — | Li H et al., Blockade of voltage-dependent K, Journal of pharmacological… (2018) | [10.1016/j.jphs.2018.04.005](https://doi.org/10.1016/j.jphs.2018.04.005) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [López-Valdés_2002_membrane_currents_elicited_by_acetylcholine](drugs/drug_clomipramine/pd_L_pez_Vald_s_2002_membrane_currents_elicited_by_acetylcholin.md) | membrane currents elicited by acetylcholine ← clomipramine · direct Emax (saturable) effect | — | López-Valdés HE et al., Effects of clomipramine on neuronal nic…, European journal of pharmac… (2002) | [10.1016/s0014-2999(02)01556-x](https://doi.org/10.1016/s0014-2999(02)01556-x) |
| <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Apparsundaram_2008_DASB_binding](drugs/drug_clomipramine/pd_Apparsundaram_2008_DASB_binding.md) | [(3)H]DASB binding ← clomipramine · categorical (graded) response model | — | Apparsundaram S et al., Antidepressants targeting the serotonin…, The Journal of pharmacology… (2008) | [10.1124/jpet.108.142315](https://doi.org/10.1124/jpet.108.142315) |
| <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Apparsundaram_2008_S_citalopram_binding](drugs/drug_clomipramine/pd_Apparsundaram_2008_S_citalopram_binding.md) | [(3)H]S-citalopram binding ← clomipramine · categorical (graded) response model | — | Apparsundaram S et al., Antidepressants targeting the serotonin…, The Journal of pharmacology… (2008) | [10.1124/jpet.108.142315](https://doi.org/10.1124/jpet.108.142315) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-23 20:51 | 0:05 | 1/3/0 | 9/0/0 | 0/0/0 | 4,493/171 | einfracz / qwen3.8-27b | 2 | 0/0 | 0/0 | 0 |

## Coverage

- **PubMed hits:** 24 matched, 24 returned
- **screened:** 4  ·  **relevant:** 1
- **records:** 4  ·  extracted 0  ·  needs review 1  ·  rejected 3  ·  stale 0
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abdel-Razaq_2007 | irrelevant | 0 | 0 | In-vitro cell signaling study with no pharmacokinetic parameters for clomipramine. |
| popPK | Apparsundaram_2008 | irrelevant | 0 | 0 | The study is an in-vitro radioligand binding assay investigating the competitive mechanism of SERT inhibitors, not a pharmacokinetic study. |
| PGx | Apparsundaram_2008 | not_relevant | 0 | 0 | The paper describes radioligand binding competition experiments for SERT inhibitors, not the effect of genetic variants on the pharmacokinetics or pharmacodynamics of clomipramine in humans. |
| popPK | Castaing_2000 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of membrane permeation and multidrug resistance modulation, not a pharmacokinetic study, and reports no PK parameters (CL, V, ka, etc.) for clomipramine. |
| PGx | Castaing_2000 | not_relevant | 0 | 0 | The paper investigates the biophysical mechanism of membrane permeation and multidrug resistance reversal by clomipramine in liposomes, not the effect of gene variants on its pharmacokinetics or pharmacodynamics. |
| popPK | Chanut_1994 | irrelevant | 0 | 0 | The study investigates 6-Fluoro-serotonin in vitro, using clomipramine only as a non-specific uptake inhibitor rather than as the subject drug for pharmacokinetic characterization. |
| PD | Chanut_1994 | not_relevant | 0 | 0 | The paper reports IC50/EC50 values for 6-fluoro-serotonin, not for clomipramine, and does not provide a dose-response or exposure-response relationship for clomipramine. |
| PGx | Chanut_1994 | not_relevant | 0 | 0 | The paper investigates the mechanism of 6-Fluoro-serotonin uptake and release, using clomipramine only as a pharmacological probe/inhibitor, and does not report any pharmacogenomic effects on clomipramine's PK or PD parameters. |
| popPK | Di_2014 | irrelevant | 0 | 0 | This is an ecotoxicology study on Pacific oysters measuring developmental toxicity (EC50), not a pharmacokinetic study reporting disposition parameters like CL or Vd for clomipramine. |
| PGx | Di_2014 | not_relevant | 0 | 0 | The paper reports ecotoxicity in Pacific oysters and does not investigate human pharmacogenomics or PK/PD parameters. |
| popPK | Fujita_1997 | irrelevant | 0 | 0 | The study investigates the interaction of clomipramine with a dopamine transporter ligand ([123I]beta-CIT) in rat brains, reporting binding kinetics of the ligand rather than the pharmacokinetic disposition parameters (CL, V, t1/2) of clomipramine itself. |
| PGx | Fujita_1997 | not_relevant | 0 | 0 | The paper investigates the neurochemical interaction between clomipramine and a dopamine ligand in rats, not the effect of a gene variant on clomipramine pharmacokinetics or pharmacodynamics. |
| popPK | Gex-Fabry_2000 | relevant | 10 | 2 | The paper is a population PK study of clomipramine, but the specific numeric parameter values (clearances, V, etc.) are not present in the provided abstract text, only ranges for variability. |
| PGx | Gex-Fabry_2000 | not_relevant | 0 | 0 | The paper develops a population pharmacokinetic model for clomipramine and its metabolites but does not report any analysis or results regarding the influence of specific gene variants, genotypes, or phenotypes on PK parameters. |
| popPK | Gruwez_2007 | relevant | 8 | 2 | The paper describes a kinetic-pharmacodynamic (K-PD) model for clomipramine which inherently involves pharmacokinetic parameters (lag-time, effect kinetics), but the specific numeric values for clearance, volume, or rate constants are not listed in the abstract, only inter-individual variability percentages are reported. |
| PGx | Gruwez_2007 | not_relevant | 0 | 0 | The paper models clomipramine-lithium interaction kinetics and pharmacodynamics but does not report pharmacogenomic effects or gene variants. |
| popPK | Hartmann_2017 | irrelevant | 0 | 0 | The study focuses on anti-trypanosomal activity and trypanothione reductase inhibition of novel compounds, using clomipramine only as a reference inhibitor with no pharmacokinetic data reported. |
| PD | Hartmann_2017 | not_relevant | 0 | 0 | The paper reports IC50 values for new neolignan analogues and mentions clomipramine only as a reference inhibitor with a single IC50 value, without providing a dose-response curve, PK/PD model, or extractable PD parameters for clomipramine. |
| PGx | Hartmann_2017 | not_relevant | 0 | 0 | The paper focuses on the synthesis and anti-trypanosomal activity of diaryl-tetrahydrofuran analogues, and while clomipramine is used as a reference inhibitor for trypanothione reductase, no genetic variants or pharmacogenomic effects on its PK/PD are investigated or reported. |
| popPK | Hrdina_1988 | irrelevant | 0 | 0 | The study reports in vitro binding affinities (Ki, IC50) in rat brain, not pharmacokinetic disposition parameters. |
| PGx | Hrdina_1988 | not_relevant | 0 | 0 | The paper describes in vitro receptor binding and transporter affinity in rat brain, with no mention of genetic variants or human pharmacogenomics. |
| popPK | Komorowski_2012 | irrelevant | 0 | 0 | The study is a behavioral pharmacology experiment in rats investigating antidepressant effects, containing no pharmacokinetic parameter data. |
| PGx | Komorowski_2012 | not_relevant | 0 | 0 | The paper is an animal behavioral study investigating the antidepressant effects of clomipramine and does not report any pharmacogenomic data or PK/PD parameters influenced by gene variants. |
| popPK | Kurata_1986 | relevant | 5 | 3 | The study reports a compartmental PK model for clomipramine in rats, but specific numeric parameter values (CL, V, ka, etc.) are not explicitly listed in the provided evidence, only descriptive kinetics and ratios. |
| PGx | Kurata_1986 | not_relevant | 0 | 0 | The study reports brain-to-plasma distribution and regional kinetics in rats but contains no data on gene variants, genotypes, or pharmacogenomic effects. |
| PGx | Lainesse_2006 | not_relevant | 2 | 0 | The study is an animal (cat) pharmacokinetic study that merely speculates about potential genetic variability, without reporting any specific gene-variant effects. |
| popPK | Li_2018 | irrelevant | 0 | 0 | The study investigates the electrophysiological effect of clomipramine on ion channels in vitro, containing no pharmacokinetic parameters. |
| PGx | Li_2018 | not_relevant | 0 | 0 | The paper investigates the electrophysiological mechanism of clomipramine action on potassium channels in native cells, without reporting any genetic variants or pharmacogenomic effects. |
| popPK | López-Valdés_2002 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiological investigation of receptor binding and channel blocking, reporting IC50 and EC50 values rather than pharmacokinetic disposition parameters like clearance or volume. |
| PGx | López-Valdés_2002 | not_relevant | 0 | 0 | The paper describes the in vitro pharmacological mechanism of clomipramine on nicotinic receptors in Xenopus oocytes and does not report any pharmacogenomic effects (gene variant/genotype) on PK or PD parameters. |
| popPK | Menargues_1990 | irrelevant | 0 | 0 | This is a pharmacodynamic study measuring mydriasis in rats, not a pharmacokinetic study of clomipramine. |
| PGx | Menargues_1990 | not_relevant | 0 | 0 | The paper studies the effect of antidepressant drug administration on receptor sensitivity in rats and does not investigate any genetic variants or genotypes. |
| popPK | Minguez_2014 | irrelevant | 0 | 0 | This is an ecotoxicology study measuring toxicity endpoints (EC50) in aquatic organisms, not a pharmacokinetic study of clomipramine disposition. |
| PGx | Minguez_2014 | not_relevant | 0 | 0 | The paper is an ecotoxicology study assessing the effects of clomipramine on aquatic organisms, not a clinical pharmacogenomics study. |
| popPK | Minguez_2014_2 | irrelevant | 0 | 0 | The study assesses acute ecotoxicity and mode of action in Daphnia magna, not pharmacokinetic disposition parameters. |
| PD | Minguez_2014_2 | not_relevant | 3 | 4 | The paper reports an acute ecotoxicity EC50 for clomipramine in Daphnia magna, which is a toxicological endpoint rather than a pharmacodynamic exposure-response relationship in a clinical or therapeutic context. |
| PGx | Minguez_2014_2 | not_relevant | 0 | 0 | The paper describes ecotoxicological effects of antidepressants on Daphnia magna and does not investigate human pharmacogenomics or PK/PD parameters for clomipramine. |
| popPK | Muraoka_1998 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of receptor signaling and calcium mobilization, reporting no pharmacokinetic parameters (CL, V, etc.) for clomipramine. |
| PGx | Muraoka_1998 | not_relevant | 0 | 0 | The paper investigates drug-induced modulation of receptor signaling in cell lines, not pharmacogenomic effects of genetic variants on clomipramine PK/PD parameters. |
| popPK | Nielsen-Kudsk_1980 | relevant | 4 | 8 | The study reports specific half-life and accumulation values for clomipramine in isolated rabbit hearts, though it lacks a full population PK model with CL/V/Q. |
| PGx | Nielsen-Kudsk_1980 | not_relevant | 0 | 0 | The paper investigates myocardial pharmacokinetics in an animal model without any mention of human gene variants, genotypes, or phenotypes. |
| popPK | Pellegrini_2025 | irrelevant | 0 | 0 | This is a clinical efficacy study of psilocybin in OCD; clomipramine is only mentioned as a first-line treatment, with no PK parameters for it. |
| popPK | Shimizu_1996 | irrelevant | 0 | 0 | This is a mechanistic in-vitro study on 5-HT7 receptors in astrocytes, not a pharmacokinetic study. |
| PD | Shimizu_1996 | not_relevant | 1 | 0 | The paper reports a qualitative effect of clomipramine (mimicking mianserin) but provides no numeric concentration-effect data, EC50, or dose-response parameters for clomipramine itself. |
| PGx | Shimizu_1996 | not_relevant | 0 | 0 | The paper reports an in vitro pharmacological effect of chronic antidepressant exposure on astrocyte cAMP accumulation and does not involve human pharmacogenomics or clomipramine PK/PD parameters. |
| popPK | Simpson_2008 | irrelevant | 0 | 0 | The paper is a statistical analysis of clinical trial outcomes (efficacy) for OCD and does not report any pharmacokinetic parameters for clomipramine. |
| PGx | Simpson_2008 | not_relevant | 0 | 0 | The paper focuses on statistical methods for analyzing clinical trial data in OCD, not on pharmacogenomics or PK/PD parameters of clomipramine. |
| popPK | Yukawa_2002 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of haloperidol, with clomipramine only listed as a co-administered CYP2D6 substrate whose concomitant use did not significantly affect haloperidol clearance. |
| PGx | Yukawa_2002 | not_relevant | 0 | 0 | The study investigates the population pharmacokinetics of haloperidol, not clomipramine, and does not report any pharmacogenomic effects. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bclomipramine%5D&body=Drug%3A%20clomipramine%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_clomipramine/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-23 20:51 UTC</sub>
