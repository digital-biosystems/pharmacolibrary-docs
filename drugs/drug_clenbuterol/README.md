<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;R03A&quot;,&quot;href&quot;:&quot;atc/R03A.md&quot;},{&quot;label&quot;:&quot;clenbuterol&quot;}]"></div>

# clenbuterol

- **generic name:** clenbuterol
- **ATC codes:** `R03AC14`, `R03CC13`, `R03CC63`
- **DrugBank:** [DB01407](https://go.drugbank.com/drugs/DB01407) · **PubChem:** [CID 2783](https://pubchem.ncbi.nlm.nih.gov/compound/2783)
- **molar mass:** 277.19 g/mol (C12H18Cl2N2O) — DrugBank
- **groups:** approved, investigational, vet_approved

## About

Clenbuterol is a selective beta-2-adrenoreceptor agonist used to treat asthma and chronic obstructive pulmonary disease. It is given by mouth in the form of tablets, syrups, or solutions. It is approved for veterinary use and is used in medicine for breathing disorders.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q223412](https://www.wikidata.org/wiki/Q223412), [Wikipedia](https://en.wikipedia.org/wiki/Clenbuterol?oldid=1375817608) (CC BY-SA 4.0), DrugBank's routes and dosage forms and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-23 20:16 | 0:03 | 0/0/0 | 0/0/0 | 0/0/0 | 3,640/155 | einfracz / qwen3.8-27b | 6 | 2/0 | 6/0 | 0 |

## Coverage

- **PubMed hits:** 83 matched, 47 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Brusasco_1978 | irrelevant | 0 | 0 | The study is a dose-response pharmacodynamic assessment of bronchodilation (FEV1, Raw, sGaw) and does not report any pharmacokinetic parameters such as clearance, volume, or half-life. |
| PGx | Brusasco_1978 | not_relevant | 0 | 0 | The paper reports a standard dose-response study in a clinical population without any genetic variants, genotyping, or pharmacogenomic analysis. |
| popPK | Brès_1985 | irrelevant | 2 | 0 | This is a review article discussing the metabolic pathways of beta-adrenergic agonists; it mentions renal clearance percentage for clenbuterol but lacks quantitative population-PK parameters like CL, V, or ka, and values are not in a usable format. |
| PGx | Brès_1985 | not_relevant | 0 | 0 | The paper discusses general metabolic pathways and variability for beta-agonists but does not report specific pharmacogenomic associations (gene variant to PK/PD parameter) for clenbuterol. |
| popPK | Couet_1989 | relevant | 9 | 0 | The study is a human PK trial for clenbuterol, but the specific quantitative parameter values are not present in the provided abstract/evidence. |
| PGx | Couet_1989 | not_relevant | 0 | 0 | The study investigates the bioavailability and PK of a drug combination in healthy volunteers but does not involve any genetic variants, genotypes, or pharmacogenomic analysis. |
| popPK | Dave_1998 | relevant | 5 | 0 | The study applies a two-compartment model to cattle data, but the text abstract provided does not contain the specific numeric parameter values (CL, V, ka, etc.) which are likely in the full results or tables not included in the evidence. |
| PGx | Dave_1998 | not_relevant | 0 | 0 | The paper investigates pharmacokinetics of clenbuterol in cattle based on dosing regimens, but does not report any pharmacogenomic effects or genetic variants. |
| popPK | Disse_1987 | irrelevant | 0 | 0 | The paper is a review of ambroxol's pharmacology where clenbuterol is only mentioned as a comparator agent, and no pharmacokinetic parameters for clenbuterol are reported. |
| PGx | Disse_1987 | not_relevant | 0 | 0 | The paper reviews ambroxol and mentions clenbuterol only as a secondary bronchodilator in an animal model, with no report of pharmacogenomic effects on PK or PD parameters. |
| popPK | Green_1983 | irrelevant | 0 | 0 | This is an in vitro receptor binding study examining 5-HT2 receptor interactions, not a pharmacokinetic study reporting disposition parameters for clenbuterol. |
| PGx | Green_1983 | not_relevant | 0 | 0 | The paper examines receptor binding interactions in rats and does not report pharmacogenomic effects on PK/PD parameters for clenbuterol. |
| popPK | Hagedorn_1995 | irrelevant | 2 | 0 | The study focuses on the development and validation of an ELISA assay for detection limits, not on quantitative population pharmacokinetic modeling or parameter estimation. |
| PGx | Hagedorn_1995 | not_relevant | 0 | 0 | The paper describes the development and validation of analytical methods for detecting clenbuterol in horses and does not report any pharmacogenomic effects on pharmacokinetic or pharmacodynamic parameters. |
| popPK | Hill_1998 | irrelevant | 0 | 0 | The study investigates antibodies against beta2-adrenoceptors and their functional activity, not the pharmacokinetics of clenbuterol. |
| PGx | Hill_1998 | not_relevant | 0 | 0 | The paper investigates the functional activity of antibodies on the beta2-adrenoceptor, not the effect of human gene variants on the pharmacokinetics or pharmacodynamics of clenbuterol. |
| PGx | Hostrup_2022 | not_relevant | 3 | 2 | Review discussing beta2-agonist effects on body composition generally; no gene variant effect on clenbuterol PK/PD parameters reported. |
| popPK | Hudman_2000 | irrelevant | 0 | 0 | This is an in-vitro pharmacodynamic study of muscle contraction, not a pharmacokinetic study. |
| PGx | Hudman_2000 | not_relevant | 0 | 0 | The paper investigates the pharmacodynamics of clenbuterol on rat detrusor muscle in vitro but does not report any pharmacogenomic effects based on genetic variants or genotypes. |
| popPK | Huveneers-Oorsprong_1997 | irrelevant | 0 | 0 | The study reports in vitro cytotoxicity (IC50) values for clenbuterol in pig hepatocytes, not quantitative pharmacokinetic disposition parameters. |
| PGx | Huveneers-Oorsprong_1997 | not_relevant | 0 | 0 | The paper reports in vitro cytotoxicity comparisons between pig and rat hepatocytes, not the effect of a specific gene variant or genotype on a pharmacokinetic or pharmacodynamic parameter. |
| popPK | Iizuka_1998 | irrelevant | 0 | 0 | This is a pharmacodynamic study comparing the effects of GS-332 and clenbuterol on rat urinary bladder, with no pharmacokinetic parameters reported for clenbuterol. |
| PGx | Iizuka_1998 | not_relevant | 0 | 0 | The paper compares the pharmacodynamic effects of a new drug (GS-332) against clenbuterol but does not investigate the impact of genetic variants or genotypes on clenbuterol's PK/PD. |
| popPK | Ji_2020 | irrelevant | 0 | 0 | The study focuses on the metabolic effects of apolipoprotein R on obesity in mice, and clenbuterol is only mentioned historically as an agent that reduced adipose tissue, with no pharmacokinetic data provided. |
| PGx | Ji_2020 | not_relevant | 2 | 5 | The study investigates the mechanism by which apoR mediates clenbuterol-induced fat reduction via lipolysis, but it does not report changes in clenbuterol's pharmacokinetic or pharmacodynamic parameters based on genotype in a pharmacogenomic context. |
| popPK | Kahl_1989 | irrelevant | 0 | 0 | The study investigates the pharmacodynamic effect of clenbuterol on acute-phase globulin levels, not its pharmacokinetic parameters. |
| PGx | Kahl_1989 | not_relevant | 0 | 0 | The study investigates the pharmacodynamic effects of clenbuterol on alpha 2-acute phase globulin levels in rats but does not report any pharmacogenomic effects (gene variants/genotypes) on PK or PD parameters. |
| popPK | Ke_2013 | irrelevant | 0 | 0 | The study focuses on acute cardiovascular toxicity and hemodynamic responses (blood pressure, ECG) in rabbits, and does not report any quantitative pharmacokinetic parameters such as clearance, volume of distribution, or half-life. |
| PGx | Ke_2013 | not_relevant | 0 | 0 | The paper reports acute cardiovascular toxicity of clenbuterol in rabbits but does not investigate any gene variant, genotype, or pharmacogenomic effect on PK/PD parameters. |
| popPK | Lee_2018 | irrelevant | 0 | 0 | The paper describes the generation of an antibody for detection and reports IC50 values for binding affinity, not pharmacokinetic parameters like clearance or volume. |
| PGx | Lee_2018 | not_relevant | 0 | 0 | The paper reports the development of an anti-salbutamol antibody for doping control, not a pharmacogenomic effect on PK/PD. |
| popPK | Liu_2010 | irrelevant | 0 | 0 | The study describes the production of an antibody for clenbuterol detection and does not report any pharmacokinetic parameters. |
| PGx | Liu_2010 | not_relevant | 0 | 0 | The paper describes the production of a reagent for detection and does not report pharmacogenomic effects on PK/PD. |
| popPK | Liu_2019 | irrelevant | 0 | 0 | The paper describes a receptor binding assay for detecting clenbuterol residues in pork and does not report any pharmacokinetic parameters for the drug. |
| PGx | Liu_2019 | not_relevant | 0 | 0 | The paper describes the expression of a recombinant beta-2 adrenergic receptor for use as a biosensor to detect drug residues in food; it does not report pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of clenbuterol in humans. |
| popPK | Lu_2020 | irrelevant | 0 | 0 | The paper describes the construction and functional analysis of a recombinant antibody (scFv) for detecting clenbuterol, not a pharmacokinetic study. |
| PGx | Lu_2020 | not_relevant | 0 | 0 | The paper describes the construction of an antibody for detecting clenbuterol, not the effect of genetic variants on clenbuterol pharmacokinetics or pharmacodynamics. |
| popPK | Mazzanti_2003 | irrelevant | 0 | 0 | The study is a pharmacodynamic comparison of new compounds against clenbuterol using in-vitro guinea pig tissues, reporting no pharmacokinetic parameters. |
| PGx | Mazzanti_2003 | not_relevant | 0 | 0 | The paper studies pharmacodynamic effects of new compounds vs clenbuterol in guinea pigs, without reporting any human gene variant/genotype effects on clenbuterol PK/PD. |
| popPK | McElroy_1988 | irrelevant | 0 | 0 | The study investigates the pharmacodynamic discriminative stimulus properties of clenbuterol, not its pharmacokinetic disposition parameters. |
| PGx | McElroy_1988 | not_relevant | 0 | 0 | The study investigates the behavioral pharmacology and receptor interactions of clenbuterol in rats, but it does not report on genetic variants or pharmacogenomic effects on PK/PD parameters. |
| popPK | Meng_2010 | irrelevant | 0 | 0 | The paper describes the development of an immunoassay (ELISA) for detection of salbutamol and clenbuterol residues, not a pharmacokinetic study with disposition parameters. |
| PGx | Meng_2010 | not_relevant | 0 | 0 | The paper describes the development of an ELISA assay for salbutamol detection using a clenbuterol conjugate as a coating antigen, and contains no pharmacogenomic data or PK/PD analysis. |
| popPK | Mersmann_1987 | irrelevant | 0 | 0 | The paper reports acute metabolic/pharmacodynamic effects (lipolysis) rather than pharmacokinetic parameters such as clearance or volume. |
| PGx | Mersmann_1987 | not_relevant | 0 | 0 | The paper investigates the acute metabolic effects of adrenergic agents in swine and contains no mention of gene variants, genotypes, or pharmacogenomics. |
| popPK | Nials_1993 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of potency and duration of action, not a pharmacokinetic study with disposition parameters. |
| PGx | Nials_1993 | not_relevant | 0 | 0 | The paper describes pharmacological properties of beta-agonists in a tissue model but does not investigate the effect of genetic variants on the PK or PD parameters of clenbuterol. |
| popPK | ODonnell_1985 | irrelevant | 0 | 0 | The study investigates in vitro receptor pharmacology and N-protein coupling in rat cerebral cortex, not the pharmacokinetic disposition (clearance, volume, half-life) of clenbuterol. |
| PGx | ODonnell_1985 | not_relevant | 0 | 0 | The paper reports on beta-adrenergic receptor desensitization (PD) following repeated clenbuterol administration, but it contains no information regarding genetic variants, genotypes, or pharmacogenomics. |
| popPK | Orcutt_1989 | irrelevant | 0 | 0 | The study is a mechanistic investigation of lipogenesis and lipolysis in adipocytes, not a pharmacokinetic study, and contains no disposition parameters for clenbuterol. |
| PGx | Orcutt_1989 | not_relevant | 0 | 0 | The paper describes the physiological effects of clenbuterol on lipid metabolism in mice but does not report any influence of gene variants or genotypes on PK or PD parameters. |
| popPK | Pan_2006 | irrelevant | 0 | 0 | The study is an in-vitro immunology paper characterizing a single-chain Fv antibody for clenbuterol detection, reporting no pharmacokinetic parameters such as clearance or half-life. |
| PGx | Pan_2006 | not_relevant | 0 | 0 | The paper describes the development of an antibody for detecting clenbuterol and does not report any pharmacogenomic effects on its PK or PD parameters. |
| popPK | Roozendaal_2002 | irrelevant | 0 | 0 | The paper is a neuropharmacological study on memory consolidation in rats where clenbuterol is used as a beta-adrenoceptor agonist to test receptor interactions, not as a subject drug for pharmacokinetic parameter estimation. |
| PGx | Roozendaal_2002 | not_relevant | 0 | 0 | The paper investigates neuropharmacological mechanisms in animal models and does not report pharmacogenomic effects on PK or PD parameters. |
| popPK | Scola_2004 | irrelevant | 0 | 0 | The study is a mechanistic investigation of receptor desensitization and intrinsic activity, not a pharmacokinetic study, and contains no PK parameters for clenbuterol. |
| PGx | Scola_2004 | not_relevant | 0 | 0 | The paper studies receptor pharmacology (intrinsic activity and desensitization) and contains no data on gene variants or genotypes affecting PK or PD parameters. |
| popPK | Shelver_2004 | irrelevant | 0 | 0 | The study focuses on the development of an immunoassay (ELISA) for zilpaterol, not the pharmacokinetics of clenbuterol. |
| PGx | Shelver_2004 | not_relevant | 0 | 0 | The paper describes the development of an ELISA assay for zilpaterol and does not report any pharmacogenomic effects on PK or PD parameters for clenbuterol. |
| popPK | Törneke_1997 | irrelevant | 0 | 0 | The study reports pharmacodynamic EC50 values for muscle relaxation in vitro, not pharmacokinetic parameters such as clearance or half-life. |
| PGx | Törneke_1997 | not_relevant | 0 | 0 | The paper is a pharmacodynamic study in equine tracheal muscle and does not report genetic variants or pharmacogenomic effects on the pharmacokinetic or pharmacodynamic parameters of clenbuterol. |
| popPK | Törneke_1998 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological comparison of receptor binding and muscle relaxation, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| PGx | Törneke_1998 | not_relevant | 0 | 0 | The paper compares in vitro pharmacodynamics of different drugs but reports no pharmacogenomic effects (gene variants) on PK or PD parameters. |
| popPK | Vietmeier_2007 | irrelevant | 0 | 0 | The study is an in vitro/ex vivo analysis of airway reactivity where clenbuterol is used as a diagnostic agent to verify tissue viability, not as the subject of pharmacokinetic modeling. |
| PGx | Vietmeier_2007 | not_relevant | 0 | 0 | The study evaluates an in vitro method for equine airway reactivity and does not report pharmacogenomic effects on clenbuterol PK/PD parameters. |
| popPK | Wang_2015 | irrelevant | 0 | 0 | The study focuses on immunological detection of ractopamine, and clenbuterol is only mentioned as a non-reactive comparator, with no pharmacokinetic parameters reported. |
| PGx | Wang_2015 | not_relevant | 0 | 0 | The paper describes the development of antibodies for ractopamine detection and does not report pharmacogenomic effects on clenbuterol pharmacokinetics or pharmacodynamics. |
| popPK | Xu_2007 | irrelevant | 0 | 0 | This is a study on an immunoassay (ELISA) for residue detection, not a pharmacokinetic study; it reports no disposition parameters like clearance, volume, or half-life. |
| PGx | Xu_2007 | not_relevant | 0 | 0 | The paper describes the validation and application of an ELISA assay for detecting clenbuterol residues, containing no information about gene variants or their impact on pharmacokinetics/pharmacodynamics. |
| popPK | Xu_2022 | irrelevant | 0 | 0 | This is an analytical method development study (immunosensor) for drug detection, not a pharmacokinetic study, and reports no disposition parameters (CL, V, t1/2, etc.). |
| PGx | Xu_2022 | not_relevant | 0 | 0 | The paper describes a method for detecting beta-2-adrenergic agonists using an immunosensor and does not investigate pharmacogenomics or genetic effects on PK/PD parameters. |
| popPK | Yang_2015 | relevant | 8 | 1 | The paper reports a pharmacokinetic study of clenbuterol in humans using a compartmental model, but specific numeric parameter values (CL, V, T1/2) are not provided in the evidence. |
| PGx | Yang_2015 | not_relevant | 0 | 0 | The paper reports standard pharmacokinetics in healthy volunteers but does not investigate or report the effect of any genetic variant, genotype, or phenotype on the PK or PD parameters of clenbuterol. |
| popPK | Zhang_2006 | irrelevant | 0 | 0 | The paper describes a detection method (lateral flow test strip) for clenbuterol residues, not a pharmacokinetic study reporting disposition parameters. |
| PGx | Zhang_2006 | not_relevant | 0 | 0 | The paper describes an analytical method for detecting drug residues and does not report any pharmacogenomic effects on PK/PD parameters. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bclenbuterol%5D&body=Drug%3A%20clenbuterol%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_clenbuterol/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
