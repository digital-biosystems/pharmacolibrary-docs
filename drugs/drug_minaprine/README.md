<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N06A&quot;,&quot;href&quot;:&quot;atc/N06A.md&quot;},{&quot;label&quot;:&quot;minaprine&quot;}]"></div>

# minaprine

- **generic name:** minaprine
- **ATC codes:** `N06AX07`
- **DrugBank:** [DB00805](https://go.drugbank.com/drugs/DB00805) · **PubChem:** [CID 4199](https://pubchem.ncbi.nlm.nih.gov/compound/4199)
- **molar mass:** 298.3828 g/mol (C17H22N4O) — DrugBank
- **groups:** approved

## About

Minaprine is a monoamine oxidase inhibitor antidepressant used for the treatment of depression.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q6863173](https://www.wikidata.org/wiki/Q6863173), [Wikipedia](https://en.wikipedia.org/wiki/Minaprine?oldid=1369618294) (CC BY-SA 4.0) and the WHO ATC classification; not checked by a person.</small>

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
| 2026-11-24 01:14 | 0:04 | 0/0/0 | 0/0/0 | 0/0/0 | 3,771/156 | einfracz / qwen3.8-27b | 0 | 0/0 | 0/0 | 0 |

## Coverage

- **PubMed hits:** 23 matched, 23 returned
- **screened:** 1  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_3 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Du_2006.pdf` | Du HZ et al., 3-Benzidino-6(4-chlorophenyl) pyridazin…, Neuroscience letters (2006) | pd | 4 | [10.1016/j.neulet.2006.03.067](https://doi.org/10.1016/j.neulet.2006.03.067) | [16647816](https://www.ncbi.nlm.nih.gov/pubmed/16647816) | metadata signals extractable PD data (IC50) |
| `Garattini_1984.pdf` | Garattini S et al., Neurochemical effects of minaprine, a n…, Psychopharmacology (1984) | pd | 4 | [10.1007/BF00427775](https://doi.org/10.1007/BF00427775) | [6425901](https://www.ncbi.nlm.nih.gov/pubmed/6425901) | metadata signals extractable PD data (IC50) |
| `Haji-Momenian_2003.pdf` | Haji-Momenian S et al., Comparative molecular field analysis an…, Bioorganic & medicinal chem… (2003) | pgx | 7 | [10.1016/s0968-0896(03)00525-x](https://doi.org/10.1016/s0968-0896(03)00525-x) | [14642599](https://www.ncbi.nlm.nih.gov/pubmed/14642599) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |

<sub>queue written 2026-11-24 01:14 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Allain_1996 | irrelevant | 0 | 0 | The study is a clinical efficacy trial assessing memory and attention outcomes, not a pharmacokinetic study reporting disposition parameters. |
| PD | Allain_1996 | not_relevant | 1 | 0 | The paper reports a clinical trial with a single fixed dose (200 mg/d) and provides only statistical p-values for clinical endpoints, lacking any exposure-response modeling, concentration-effect data, or numeric PD parameters like Emax or EC50. |
| PGx | Allain_1996 | not_relevant | 0 | 0 | The study is a Phase II clinical trial assessing clinical efficacy and tolerability, with no mention of genetic variants or pharmacogenomics. |
| popPK | Cailleux_1982 | irrelevant | 0 | 0 | no_text gate: only 81 chars of text extracted (&lt; 400) |
| PGx | Cailleux_1982 | not_relevant | 0 | 0 | The paper reports standard pharmacokinetics after a single oral dose and does not investigate gene variants or pharmacogenomic effects. |
| popPK | Chico_2009 | irrelevant | 0 | 0 | The study is an in vitro mechanistic analysis of CYP2D6 substrate status and molecular properties, not a study of quantitative pharmacokinetic disposition parameters. |
| PGx | Chico_2009 | not_relevant | 2 | 2 | The paper discusses CYP2D6 substrate status as a determinant of potential metabolic clearance, but focuses on molecular property correlations for drug design rather than reporting specific quantitative pharmacokinetic or pharmacodynamic changes driven by human genotypes. |
| popPK | Contreras_1999 | irrelevant | 0 | 0 | The study is a mechanistic investigation of acetylcholinesterase inhibition (in vitro) and does not report any pharmacokinetic parameters such as clearance, volume, or half-life. |
| PD | Contreras_1999 | not_relevant | 3 | 2 | The text reports a single in vitro IC50 value for minaprine as part of a structure-activity relationship study, but does not provide an exposure-response curve, dose-response analysis, or PK/PD model with derivable PD parameters like Emax or slope. |
| PGx | Contreras_1999 | not_relevant | 0 | 0 | The paper discusses the chemical structure-activity relationship of minaprine derivatives for acetylcholinesterase inhibition and contains no pharmacogenomic data or gene variant effects. |
| popPK | Davi_1985 | relevant | 6 | 0 | The study investigates minaprine pharmacokinetics and metabolism in baboons and notes "slow blood clearance," but provides no quantitative PK parameter values (CL, V, t1/2, etc.) in the evidence provided. |
| PGx | Davi_1985 | not_relevant | 0 | 0 | The study analyzes minaprine metabolism in baboons and does not report any pharmacogenomic effects or gene variants. |
| popPK | Davi_1992 | irrelevant | 4 | 5 | The study is a single-dose radioanalytical (14C) disposition profile reporting Cmax and dose-dependent half-life for a specific animal cohort, but it does not report a population-PK model or full compartmental parameters (CL, V, Q, ka) for minaprine. |
| PD | Davi_1992 | not_relevant | 2 | 1 | The paper reports PK parameters and a qualitative observation of seizures in dogs at a specific dose, but it does not provide a quantitative concentration-effect relationship, dose-response curve, or numeric PD parameters (e.g., EC50, Emax) for minaprine. |
| popPK | Du_2006 | irrelevant | 0 | 0 | no_text gate: only 159 chars of text extracted (&lt; 400) |
| PD | Du_2006 | not_relevant | 0 | 0 | The paper studies the electrophysiological effects of a different compound (3-Benzidino-6(4-chlorophenyl) pyridazine) on rat neurons and does not mention minaprine or report any pharmacodynamic parameters for it. |
| PGx | Du_2006 | not_relevant | 0 | 0 | The paper discusses the electrophysiological effects of a different chemical compound (3-Benzidino-6(4-chlorophenyl) pyridazine) on rat neurons, not minaprine or any pharmacogenomic effect on its PK/PD. |
| popPK | Garattini_1984 | irrelevant | 0 | 0 | no_text gate: only 107 chars of text extracted (&lt; 400) |
| PGx | Garattini_1984 | not_relevant | 0 | 0 | The paper describes neurochemical effects of minaprine on the cholinergic system in rats and does not report any pharmacogenomic effects on PK or PD parameters. |
| popPK | Haji-Momenian_2003 | irrelevant | 0 | 0 | The study is an in-vitro QSAR/CoMFA analysis of CYP2D6 binding affinity, not a pharmacokinetic study reporting disposition parameters for minaprine. |
| PGx | Haji-Momenian_2003 | not_relevant | 0 | 0 | The paper discusses minaprine only as a structural alignment reference for CoMFA modeling of CYP2D6 substrates and does not report pharmacogenomic effects on its PK or PD parameters. |
| popPK | Harel-Dupas_1991 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic study on acetylcholine release and does not report pharmacokinetic parameters. |
| PGx | Harel-Dupas_1991 | not_relevant | 0 | 0 | The paper reports in vitro pharmacological interaction between minaprine and TFMPP in animal synaptosomes, not a pharmacogenomic effect on human PK/PD parameters. |
| popPK | Jouglard_1996 | irrelevant | 0 | 0 | The paper is an epidemiological study on the severity of acute minaprine intoxications based on poison control data, reporting no pharmacokinetic parameters. |
| PD | Jouglard_1996 | not_relevant | 1 | 0 | The paper reports a qualitative association between increased dosage and increased severity (seizures/death) based on poison control data, but provides no numeric PD parameters, concentration-effect curves, or dose-response modeling. |
| PGx | Jouglard_1996 | not_relevant | 0 | 0 | The paper analyzes the clinical severity of intoxications following a dosage change, not the effect of a gene variant on pharmacokinetic or pharmacodynamic parameters. |
| popPK | Kinirons_1993 | irrelevant | 0 | 0 | The study reports pharmacodynamic (psychomotor and cardiovascular) outcomes, not pharmacokinetic parameters (CL, V, etc.) for minaprine. |
| PD | Kinirons_1993 | not_relevant | 2 | 1 | The study reports qualitative psychomotor effects of a single fixed dose compared to placebo and control, but does not provide concentration-effect data, dose-response curves, or numeric PD parameters like Emax or EC50. |
| PGx | Kinirons_1993 | not_relevant | 0 | 0 | The study investigates pharmacodynamics in healthy volunteers and does not report any association between gene variants/genotypes and minaprine's PK/PD parameters. |
| popPK | Lorenzini_1993 | irrelevant | 0 | 0 | The paper reports behavioral effects (active avoidance) of minaprine in rats but does not provide any pharmacokinetic parameters such as clearance or volume. |
| PD | Lorenzini_1993 | not_relevant | 3 | 2 | The paper reports a qualitative dose-response effect (5, 10, 25 mg/kg) on behavioral outcomes but does not provide numeric PD parameters (e.g., EC50, Emax) or a fitted concentration-effect curve. |
| PGx | Lorenzini_1993 | not_relevant | 0 | 0 | The paper describes the pharmacodynamic effects of minaprine on active avoidance behavior in rats, but it does not report any pharmacogenomic findings related to gene variants or genotypes. |
| popPK | Montgomery_1991 | irrelevant | 0 | 0 | The paper is a clinical efficacy study for depression treatment and does not report pharmacokinetic parameters such as clearance or volume. |
| PD | Montgomery_1991 | not_relevant | 3 | 1 | The paper reports a clinical dose-response comparison (200mg vs 300mg) but lacks exposure data (plasma concentrations) and does not provide numeric PD parameters (e.g., EC50, Emax) or a quantitative concentration-effect model. |
| PGx | Montgomery_1991 | not_relevant | 0 | 0 | The paper reports a dose-response relationship in depression but contains no pharmacogenomic analysis or genotype data. |
| popPK | Muramatsu_1990 | irrelevant | 0 | 0 | The paper describes in vitro binding and release mechanisms where minaprine is used as a radioligand, not a study of its pharmacokinetic disposition parameters. |
| PD | Muramatsu_1990 | not_relevant | 3 | 2 | The paper reports in vitro binding IC50s and qualitative attenuation of neurotransmitter release, but does not provide a pharmacodynamic exposure-response model or numeric PD parameters (e.g., Emax, EC50 for effect) for minaprine itself. |
| PGx | Muramatsu_1990 | not_relevant | 0 | 0 | The paper describes in vitro binding and release assays involving minaprine but does not report pharmacogenomic effects (gene variants) on PK or PD parameters. |
| popPK | Nguyen_2025 | irrelevant | 0 | 0 | Minaprine is only mentioned as a candidate therapeutic agent in a bioinformatics/review analysis; no PK parameters for minaprine are reported. |
| popPK | Schumacher_1989 | irrelevant | 0 | 0 | The study focuses on the pharmacological characterization of a novel compound (SR 95639A), with minaprine only mentioned as a structural analog; no pharmacokinetic parameters for minaprine are reported. |
| PD | Schumacher_1989 | not_relevant | 0 | 0 | The paper characterizes a different compound (SR 95639A) and does not report pharmacodynamic or exposure-response data for minaprine. |
| PGx | Schumacher_1989 | not_relevant | 0 | 0 | The paper characterizes a new ligand (SR 95639A) and does not report any pharmacogenomic analysis or genetic effects on minaprine's PK/PD parameters. |
| popPK | Wermuth_1993 | irrelevant | 0 | 0 | The paper focuses on the medicinal chemistry and synthesis of minaprine analogues (muscarinic agonists), not on quantitative pharmacokinetic parameter estimation. |
| PD | Wermuth_1993 | not_relevant | 1 | 1 | The text provides an in vitro IC50 value for receptor binding but does not report an in vivo pharmacodynamic, exposure-response, or dose-response relationship with numeric PD parameters. |
| PGx | Wermuth_1993 | not_relevant | 0 | 0 | The paper describes the structural optimization of minaprine analogues based on receptor affinity and PK properties but does not report any pharmacogenomic effects (gene variants influencing PK/PD). |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bminaprine%5D&body=Drug%3A%20minaprine%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_minaprine/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
