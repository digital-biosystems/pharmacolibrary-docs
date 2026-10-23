<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A03F&quot;,&quot;href&quot;:&quot;atc/A03F.md&quot;},{&quot;label&quot;:&quot;mosapride&quot;}]"></div>

# mosapride

- **generic name:** mosapride
- **ATC codes:** `A03FA09`
- **DrugBank:** [DB11675](https://go.drugbank.com/drugs/DB11675) · **PubChem:** [CID 119584](https://pubchem.ncbi.nlm.nih.gov/compound/119584)
- **molar mass:** 421.9 g/mol (C21H25ClFN3O3) — DrugBank
- **groups:** investigational

## About

Mosapride is a gastrointestinal agent and serotonin receptor agonist being investigated as a propulsive drug for functional gastrointestinal disorders. It is not authorised in the European Union and remains investigational.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q68566](https://www.wikidata.org/wiki/Q68566) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">in vitro</span> | [Park_2019_5_HT3_receptor_current_peak_amplitude](drugs/drug_mosapride/pd_Park_2019_5_HT3_receptor_current_peak_amplitude.md) | 5-HT3 receptor current peak amplitude ← mosapride · direct sigmoid Emax (Hill) effect | — | Park YS et al., Gastroprokinetic agent, mosapride inhib…, The Korean journal of physi… (2019) | [10.4196/kjpp.2019.23.5.419](https://doi.org/10.4196/kjpp.2019.23.5.419) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=mosapride).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: HTR4 (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-04 14:12 | 1:20 | 0/0/0 | 1/0/0 | 0/0/0 | 42,863/1,479 | ollama / qwen3.8:27b-mtp-q8_0 | 4 | 2/7 | 4/0 | 0 |

## Coverage

- **PubMed hits:** 38 matched, 35 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_7 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Chae_2015.pdf` | Chae JW et al., Determination of influence of food inta…, Journal of veterinary pharm… (2015) | popPK | 10 | [10.1111/jvp.12228](https://doi.org/10.1111/jvp.12228) | [25955782](https://pubmed.ncbi.nlm.nih.gov/25955782) | The study is a population PK analysis of mosapride in dogs, but the specific numeric parameter values are not present in the provided evidence text. |
| `Kim_2020.pdf` | Kim MS et al., Pharmacokinetic analysis of mosapride f…, Journal of veterinary pharm… (2020) | popPK | 10 | [10.1111/jvp.12867](https://doi.org/10.1111/jvp.12867) | [32304239](https://pubmed.ncbi.nlm.nih.gov/32304239) | The study reports quantitative PK parameters (ka, bioavailability) and a compartmental model for mosapride in dogs, but specific values for clearance, volume, and half-life are not explicitly listed in the provided text. |
| `Huang_2011.pdf` | Huang J et al., Pharmacokinetics and bioequivalence stu…, Arzneimittel-Forschung (2011) | popPK | 8 | [10.1055/s-0031-1296184](https://doi.org/10.1055/s-0031-1296184) | [21528641](https://pubmed.ncbi.nlm.nih.gov/21528641) | The study reports quantitative non-compartmental pharmacokinetic parameters (Cmax, AUC, t1/2) for mosapride in humans, with specific numeric values provided in the text. |
| `Mine_1997.pdf` | Mine Y et al., Comparison of effect of mosapride citra…, The Journal of pharmacology… (1997) | pd | 4 | not captured | [9399969](https://www.ncbi.nlm.nih.gov/pubmed/9399969) | metadata signals extractable PD data (IC50) |
| `Sung_2013.pdf` | Sung KW et al., Effect of mosapride on Kv4.3 potassium…, Naunyn-Schmiedeberg's archi… (2013) | pd | 4 | [10.1007/s00210-013-0896-6](https://doi.org/10.1007/s00210-013-0896-6) | [23793103](https://www.ncbi.nlm.nih.gov/pubmed/23793103) | metadata signals extractable PD data (IC50) |
| `Tsubouchi_2018.pdf` | Tsubouchi T et al., The in vitro pharmacology and non-clini…, European journal of pharmac… (2018) | pd | 4 | [10.1016/j.ejphar.2018.02.037](https://doi.org/10.1016/j.ejphar.2018.02.037) | [29501863](https://www.ncbi.nlm.nih.gov/pubmed/29501863) | metadata signals extractable PD data (EC50) |
| `Mushiroda_2000.pdf` | Mushiroda T et al., The involvement of flavin-containing mo…, Drug metabolism and disposi… (2000) | pgx | 7 | not captured | [10997945](https://www.ncbi.nlm.nih.gov/pubmed/10997945) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |

<sub>queue written 2026-10-04T14:11:47.788157+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Beattie_2008 | irrelevant | 0 | 0 | The study is a pharmacodynamic comparison of gastrointestinal activity in animals and does not report pharmacokinetic parameters for mosapride. |
| PD | Beattie_2008 | not_relevant | 3 | 2 | The paper reports qualitative potency rankings and relative fold-differences for mosapride in preclinical models but does not provide specific numeric PD parameters (e.g., ED50, Emax) or concentration-effect curves for mosapride. |
| popPK | Carlsson_1997 | irrelevant | 0 | 0 | The study is an electrophysiological investigation of proarrhythmic potential, not a pharmacokinetic study, and reports no disposition parameters for mosapride. |
| popPK | Chae_2015 | relevant | 10 | 0 | The study is a population PK analysis of mosapride in dogs, but the specific numeric parameter values are not present in the provided evidence text. |
| PD | Chae_2015 | not_relevant | 0 | 0 | The study focuses exclusively on population pharmacokinetics (PK) of mosapride under fasting and fed conditions and does not report any pharmacodynamic (PD) data, exposure-response relationships, or numeric PD parameters. |
| popPK | Gordji-Nejad_2026 | irrelevant | 0 | 0 | The study investigates the cognitive effects of creatine supplementation and does not involve mosapride or any pharmacokinetic parameters. |
| PD | Gordji-Nejad_2026 | not_relevant | 0 | 0 | The paper studies the cognitive effects of creatine, not mosapride, and does not report any pharmacodynamic or exposure-response relationship for mosapride. |
| popPK | Hammad_2018 | relevant | 8 | 2 | The study reports pharmacokinetic data for mosapride, but the evidence only provides relative bioavailability fold-increases (2.44-fold, 4.54-fold) without explicit numeric values for clearance, volume, or half-life. |
| PD | Hammad_2018 | not_relevant | 2 | 1 | The paper reports pharmacodynamic effects (gastric emptying rate) and PK parameters (bioavailability) for different formulations, but it does not provide a concentration-effect or dose-response relationship with numeric PD parameters (e.g., Emax, EC50) or a PK/PD model fit. |
| popPK | Hammad_2020 | irrelevant | 0 | 0 | The study focuses on in-vitro formulation optimization and in-vivo efficacy (motility) of mosapride micelles, without reporting quantitative pharmacokinetic parameters (CL, V, ka) for the drug. |
| PD | Hammad_2020 | not_relevant | 3 | 2 | The paper reports qualitative comparative pharmacodynamic effects (gastrointestinal motility) and formulation optimization, but does not provide numeric PD parameters (Emax, EC50) or a quantitative exposure-response/dose-response model. |
| popPK | Jing_2025 | irrelevant | 0 | 0 | The paper is a pharmacovigilance study on azole antifungals and myopathy, with no mention of mosapride or pharmacokinetic parameters. |
| PD | Jing_2025 | not_relevant | 0 | 0 | The paper is a pharmacovigilance study analyzing adverse event reports (myopathy) for azoles in the FAERS database and does not contain any pharmacokinetic or pharmacodynamic data, exposure-response analysis, or numeric PD parameters for mosapride. |
| PGx | Katoh_2003 | not_relevant | 0 | 0 | The study investigates a drug-drug interaction (mosapride and erythromycin) in healthy volunteers without analyzing genetic variants or pharmacogenomic effects. |
| popPK | Kawachi_2011 | irrelevant | 0 | 0 | The study focuses on the pharmacodynamics of acotiamide, with mosapride serving only as a comparator agent, and no pharmacokinetic parameters for mosapride are reported. |
| PD | Kawachi_2011 | not_relevant | 1 | 0 | The paper focuses on acotiamide; mosapride is used only as a negative control with qualitative "no effect" observations and no numeric PD parameters or concentration-effect data are provided for it. |
| PGx | Kim_2015 | not_relevant | 0 | 0 | The study investigates CYP enzyme induction by mosapride in hepatocytes but does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| popPK | Kojima_2006 | irrelevant | 0 | 0 | The study is a pharmacodynamic investigation of mosapride's effect on defecation reflexes in guinea pigs and does not report any pharmacokinetic parameters. |
| PGx | Mackowiak_2019 | not_relevant | 0 | 0 | The paper identifies mosapride as a CAR agonist affecting glucose metabolism but does not report any pharmacogenomic effects (gene variants) on its PK or PD parameters. |
| popPK | Mine_1997 | irrelevant | 0 | 0 | no_text gate: only 128 chars of text extracted (&lt; 400) |
| PGx | Mushiroda_2000 | not_relevant | 0 | 0 | The study investigates drug-drug interactions (ketoconazole) and enzyme identification, not the effect of genetic variants on pharmacokinetics. |
| popPK | Park_2019 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiology investigation of mosapride's mechanism of action on 5-HT3 receptors, reporting no pharmacokinetic parameters. |
| popPK | Potet_2001 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiology investigation of HERG channel block, not a pharmacokinetic study, and reports no disposition parameters for mosapride. |
| popPK | Shingaki_2016 | irrelevant | 1 | 0 | Mosapride is used as a comparator antiemetic to assess its effect on the pharmacokinetics of the probe drug [(18)F]FDG, not as the subject drug for PK parameter estimation. |
| popPK | Sung_2013 | irrelevant | 0 | 0 | no_text gate: only 70 chars of text extracted (&lt; 400) |
| popPK | Tack_2012 | irrelevant | 0 | 0 | The paper is a systematic review of cardiovascular safety and pharmacology of 5-HT4 agonists, not a primary pharmacokinetic study reporting quantitative disposition parameters for mosapride. |
| PD | Tack_2012 | not_relevant | 2 | 1 | The paper is a systematic review focusing on cardiovascular safety and provides only qualitative summaries or general PK/PD tables without specific numeric PD parameters (e.g., Emax, EC50) for mosapride. |
| popPK | Takada_2022 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for roxadustat, not mosapride. |
| PD | Takada_2022 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (PK) model for roxadustat, not mosapride, and contains no pharmacodynamic (PD) or exposure-response analysis. |
| popPK | Tsubouchi_2018 | irrelevant | 0 | 0 | no_text gate: only 116 chars of text extracted (&lt; 400) |
| PD | Tsubouchi_2018 | not_relevant | 0 | 0 | The paper focuses on a novel 5-HT4 agonist (DSP-6952) and does not report pharmacodynamic or exposure-response data for mosapride. |
| popPK | Yao_2019 | irrelevant | 2 | 0 | The study focuses on the synthesis and evaluation of new mosapride metabolites (R/S-isomers) rather than reporting quantitative PK parameters for mosapride itself, and no numeric values are provided in the evidence. |
| popPK | Yoshida_1993 | irrelevant | 0 | 0 | The study reports pharmacological potency (EC50, ED50) and functional effects, not quantitative pharmacokinetic disposition parameters (CL, V, t1/2). |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>
