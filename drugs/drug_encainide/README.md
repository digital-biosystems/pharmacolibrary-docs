<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C01B&quot;,&quot;href&quot;:&quot;atc/C01B.md&quot;},{&quot;label&quot;:&quot;encainide&quot;}]"></div>

# encainide

- **generic name:** encainide
- **ATC codes:** `C01BC08`
- **DrugBank:** [DB01228](https://go.drugbank.com/drugs/DB01228) · **PubChem:** [CID 48041](https://pubchem.ncbi.nlm.nih.gov/compound/48041)
- **molar mass:** 352.4699 g/mol (C22H28N2O2) — DrugBank
- **groups:** approved, withdrawn

## About

Encainide is a class Ic antiarrhythmic that was used to treat heart rhythm disorders (arrhythmias). It has been withdrawn from the market after studies showed it could increase the risk of death in patients with certain heart arrhythmias.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q514534](https://www.wikidata.org/wiki/Q514534) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-14 23:02 | 13:44 | 0/0/0 | 2/0/0 | 0/0/2 | 406,463/14,535 | ollama / qwen3.8:27b-mtp-q8_0 | 19 | 16/1 | 4/15 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by ollama:gpt-oss:120b (not confirmed, agreement 0.6), einfracz:gpt-oss-120b (not confirmed, agreement 0.6). Primary extraction retained.">cross-check: disputed 0/2</span> <span class="pk-badge pk-badge--species" title="Animal study (cat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">cat</span> | [Follmer_1992_IK](drugs/drug_encainide/pd_Follmer_1992_IK.md) | delayed rectifier current ← encainide · direct linear effect | — | Follmer CH et al., Differential block of cardiac delayed r…, Cardiovascular research (1992) | [10.1093/cvr/26.11.1121](https://doi.org/10.1093/cvr/26.11.1121) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by ollama:gpt-oss:120b (not confirmed, agreement 0.667), einfracz:gpt-oss-120b (not confirmed, agreement 0.667). Primary extraction retained.">cross-check: disputed 0/2</span> <span class="pk-badge pk-badge--species" title="Animal study (rabbit), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">rabbit</span> | [Li_2023_Kv](drugs/drug_encainide/pd_Li_2023_Kv.md) | Kv current ← encainide · direct sigmoid Emax (Hill) effect | — | Li H et al., Encainide, a class Ic anti-arrhythmic a…, The Korean journal of physi… (2023) | [10.4196/kjpp.2023.27.4.399](https://doi.org/10.4196/kjpp.2023.27.4.399) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.75), gpt-oss-120b (not confirmed, agreement 0.75). Primary extraction retained.">cross-check: disputed 0/2</span> | **CYP2D6** | `Q27` · CL/F | metabolism | [Roden_1986](drugs/drug_encainide/pgx_Roden_1986_CYP2D6_Q27.md) | Roden DM et al., Disposition kinetics of encainide and m…, The American journal of car… (1986) | [10.1016/0002-9149(86)90097-4](https://doi.org/10.1016/0002-9149(86)90097-4) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (?, agreement 0.25), gpt-oss-120b (?, agreement 0.25). Primary extraction retained.">cross-check: partial 0/2</span> | **CYP1A2** | `Q27` · CL/F | metabolism | [Vesell_1985](drugs/drug_encainide/pgx_Vesell_1985_CYP1A2_Q27.md) | Vesell ES, Pharmacogenetics and encainide, Hepatology (Baltimore, Md.) (1985) | [10.1002/hep.1840050337](https://doi.org/10.1002/hep.1840050337) |

<details class="pk-legend"><summary>PGx evidence and model availability</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>Phenotype/genotype-specific effect on a named model parameter (θ).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>Gene–drug association without a quantitative parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>CPIC/DPWG-derived estimate, not a primary-paper estimate.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>Adverse-reaction risk allele; no quantitative PK/PD parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>Phenotype-specific browser simulation and downloadable PGx model available.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>PGx model available; browser simulation unavailable.</td></tr></tbody></table></details>

<details class="legend">
<summary>PGx field definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>gene</code></td><td>Associated gene; papers with multiple genes contribute multiple records.</td></tr><tr><td><code>affects</code></td><td>Target PK/PD parameter (Q-code and name); θ scales its baseline value. Q100 denotes a non-parameter association; safety denotes adverse-reaction risk. PA identifiers indicate ClinPGx/PharmGKB guideline-derived records.</td></tr><tr><td><code>mechanism</code></td><td>Metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>Source-paper identifier and full-record link.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=encainide).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | brain | `CYP2D6` metabolism/substrate | DrugBank actor |
| metabolism | liver | `CYP1A2` metabolism, `CYP2D6` metabolism/substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: SCN5A (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 85 matched, 90 returned
- **screened:** 17  ·  **relevant:** 9
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_4 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Funck-Brentano_1989.pdf` | Funck-Brentano C et al., Effect of low dose quinidine on encaini…, The Journal of pharmacology… (1989) | popPK | 10 | not captured | [2496225](https://pubmed.ncbi.nlm.nih.gov/2496225) | The abstract provides specific quantitative values for encainide clearance, nonrenal clearance, and half-life in human subjects. |
| `Wang_1984.pdf` | Wang T et al., Influence of genetic polymorphism on th…, The Journal of pharmacology… (1984) | popPK | 9 | not captured | [6423808](https://pubmed.ncbi.nlm.nih.gov/6423808) | The study reports quantitative PK parameters (bioavailability, half-life) for encainide in humans, but specific values for clearance and volume are not explicitly listed in the provided abstract text. |
| `Follath_1991.pdf` | Follath F, Clinical pharmacology of antiarrhythmic…, Journal of cardiovascular p… (1991) | pd | 4 | not captured | [1723123](https://www.ncbi.nlm.nih.gov/pubmed/1723123) | metadata signals extractable PD data (concentration-effect) |
| `Sheldon_1994.pdf` | Sheldon RS et al., Class I antiarrhythmic drugs: allosteri…, The Journal of pharmacology… (1994) | pd | 4 | not captured | [8301556](https://www.ncbi.nlm.nih.gov/pubmed/8301556) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-10-14T22:58:22.713827+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abi_1989 | irrelevant | 0 | 0 | The paper is a clinical review of class IC antiarrhythmic drugs focusing on pharmacodynamics and toxicity, with no quantitative pharmacokinetic parameters reported. |
| PD | Abi_1989 | not_relevant | 1 | 0 | The text is a qualitative review of class IC antiarrhythmic drugs and does not provide specific numeric PD parameters or concentration-effect data for encainide. |
| PGx | Arcavi_1993 | not_relevant | 2 | 0 | The paper mentions encainide only as an example of a drug with an active metabolite affected by polymorphism, but does not report specific PK/PD data or quantitative effects for encainide. |
| PD | Bergstrand_1986 | not_relevant | 2 | 1 | The paper reports pharmacokinetic parameters and qualitative ECG changes (PR/QRS prolongation) but does not provide a quantitative concentration-effect model or numeric PD parameters (e.g., Emax, EC50) linking exposure to effect. |
| popPK | Boriani_1990 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of propafenone, with encainide mentioned only as a comparator drug in the introduction. |
| PD | Boriani_1990 | not_relevant | 1 | 0 | The paper focuses on propafenone PK/PD correlations with oxidative phenotype; encainide is only mentioned as a drug undergoing oxidative metabolism, with no data or parameters reported for it. |
| popPK | Bottorff_1989 | irrelevant | 0 | 0 | The study investigates the effect of encainide on the pharmacokinetics of antipyrine (a probe drug), not the pharmacokinetic parameters of encainide itself. |
| popPK | Brown_1987 | irrelevant | 0 | 0 | The study evaluates the pharmacodynamics of ACC-9358 in dogs, using encainide only as a comparator drug without reporting its pharmacokinetic parameters. |
| PD | Brown_1987 | not_relevant | 3 | 2 | The paper focuses on ACC-9358 and only provides a qualitative correlation (r-value) for ACC-9358, without reporting specific numeric PD parameters (Emax, EC50) or a dose-response curve for encainide. |
| popPK | Bryson_1993 | irrelevant | 0 | 0 | The paper is a review of propafenone, and encainide is only mentioned as a comparator in a meta-analysis without any specific pharmacokinetic parameters reported. |
| PD | Bryson_1993 | not_relevant | 0 | 0 | The paper is a review of propafenone and does not report any pharmacodynamic or exposure-response data for encainide. |
| PGx | Buchert_1992 | not_relevant | 2 | 0 | The text is a general introduction discussing the potential for pharmacogenomic prediction in antiarrhythmics like encainide but does not report specific experimental data, effect sizes, or quantitative PK/PD changes. |
| popPK | Chase_1987 | irrelevant | 2 | 0 | This is a review article that summarizes general pharmacokinetic properties (bioavailability range) but does not report specific quantitative disposition parameters (CL, V, ka) or a compartmental model for encainide. |
| popPK | Distlerath_1984 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study characterizing a cytochrome P-450 enzyme using encainide as a substrate, and does not report pharmacokinetic disposition parameters (CL, V, t1/2) for encainide. |
| PGx | Distlerath_1984 | not_relevant | 2 | 0 | The paper characterizes a CYP enzyme using encainide as a substrate assay but does not report pharmacogenomic effects on encainide PK/PD parameters. |
| PGx | Distlerath_1985 | not_relevant | 2 | 0 | The paper characterizes the enzyme (CYP2D6) responsible for encainide metabolism but does not report specific pharmacokinetic or pharmacodynamic parameter changes linked to genotypes. |
| popPK | Dorian_1986 | irrelevant | 0 | 0 | no_text gate: only 102 chars of text extracted (&lt; 400) |
| PGx | Eichelbaum_1984 | not_relevant | 2 | 0 | The paper mentions encainide as a substrate affected by the PM phenotype but provides no specific PK/PD data, effect sizes, or quantitative parameters for encainide. |
| popPK | Follath_1991 | irrelevant | 0 | 0 | no_text gate: only 94 chars of text extracted (&lt; 400) |
| PD | Follath_1991 | not_relevant | 1 | 0 | The paper is a review discussing general variability in metabolism and dose requirements for antiarrhythmic drugs, without reporting specific numeric PD parameters or concentration-effect curves for encainide. |
| popPK | Follmer_1992 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiological investigation of ion channel block in cat myocytes, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Fronc_1992 | irrelevant | 2 | 0 | The paper is a case report and literature review that discusses dosing adjustments and qualitative correlations between metabolite concentrations and response, but it does not report quantitative pharmacokinetic parameters (CL, V, ka, etc.) for encainide. |
| PD | Fronc_1992 | not_relevant | 2 | 1 | The text is a case report and literature review that qualitatively mentions the correlation between metabolite concentrations and electrophysiologic response but does not provide specific numeric PD parameters (e.g., EC50, Emax) or a quantitative concentration-effect curve in the provided abstract. |
| PD | Funck-Brentano_1989 | not_relevant | 3 | 2 | The paper reports PK changes and qualitative ECG effects (QRS prolongation) but does not provide numeric PD parameters (e.g., EC50, Emax) or a quantitative concentration-effect curve for encainide. |
| popPK | Furlanello_1987 | irrelevant | 2 | 0 | The paper is a clinical review discussing the pharmacokinetic properties of encainide qualitatively (metabolism, variability) but does not report any quantitative PK parameters (CL, V, t1/2, etc.). |
| popPK | Galimberti_2011 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic assay measuring efficacy and potency (IC50) for calcium wave suppression, not pharmacokinetic disposition parameters. |
| popPK | Gillis_1984 | irrelevant | 2 | 0 | This is a review article that provides only a general qualitative description of encainide's half-life (1-3h) without reporting specific quantitative disposition parameters like clearance, volume of distribution, or compartmental model values. |
| popPK | Gomoll_1986 | irrelevant | 1 | 0 | The paper describes electrophysiology and efficacy in animal models without reporting quantitative pharmacokinetic parameters like clearance or volume. |
| PD | Gomoll_1986 | not_relevant | 3 | 2 | The text provides qualitative efficacy data and relative potency comparisons (e.g., 7-11x quinidine) and specific effective doses (0.67 mg/kg), but it does not report a formal concentration-effect curve, Emax/EC50 parameters, or a PK/PD model fit. |
| popPK | Halvorsen_1991 | irrelevant | 2 | 0 | The study reports qualitative findings (half-lives not different, clearance &lt;10% of creatinine clearance) but lacks specific quantitative PK parameter values (CL, V, ka) for encainide. |
| popPK | Hilleman_1992 | irrelevant | 2 | 0 | The study reports qualitative changes in AUC (e.g., "threefold increase") and detection rates, but does not provide specific quantitative PK parameters like clearance, volume, or half-life. |
| PD | Hilleman_1992 | not_relevant | 1 | 0 | The study reports PK changes (AUC) and a qualitative lack of significant ECG effect, but provides no numeric PD parameters or concentration-effect relationship. |
| popPK | Jones_1995 | irrelevant | 0 | 0 | The paper is a case report on propafenone-induced amnesia and does not report pharmacokinetic parameters for encainide. |
| PGx | Kazierad_1989 | not_relevant | 2 | 5 | The study investigates a drug-drug interaction (diltiazem) and reports PK differences between phenotypes, but does not report a fitted quantitative pharmacogenomic effect size (theta) for the gene variant. |
| popPK | Li_2023 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiology investigation of encainide's effect on potassium channels in rabbit smooth muscle cells, reporting IC50 values for channel blockade rather than pharmacokinetic disposition parameters (CL, V, ka). |
| popPK | Lucas_1990 | irrelevant | 1 | 0 | The paper is a review discussing electrophysiology and general pharmacology without reporting specific quantitative pharmacokinetic parameter values for encainide. |
| popPK | Mann_1990 | irrelevant | 0 | 0 | The paper is a review of moricizine, and encainide is only mentioned as a comparator drug without any pharmacokinetic data provided. |
| popPK | McAllister_1986 | irrelevant | 2 | 0 | The paper describes metabolic phenotyping and qualitative plasma concentration trends but does not report quantitative PK parameters (CL, V, t1/2) for encainide. |
| popPK | Mehvar_2002 | irrelevant | 1 | 0 | The paper is a review discussing stereoselectivity in antiarrhythmics and mentions encainide only in the context of metabolic phenotyping without providing any original quantitative PK parameter values. |
| PD | Mehvar_2002 | not_relevant | 1 | 0 | The text is a qualitative review discussing stereoselectivity in PK and PD generally, without providing specific numeric PD parameters or concentration-effect curves for encainide. |
| popPK | Meyer_1982 | irrelevant | 0 | 0 | The paper is a review discussing genetic polymorphisms in drug metabolism and mentions encainide only as an example of a drug affected by debrisoquine hydroxylase deficiency, without reporting any quantitative pharmacokinetic parameters. |
| PD | Meyer_1982 | not_relevant | 1 | 0 | The text is a general review of pharmacogenetics that mentions encainide as a substrate for debrisoquine hydroxylase but provides no specific pharmacodynamic data, exposure-response curves, or numeric PD parameters. |
| PGx | Meyer_1982 | not_relevant | 2 | 0 | The paper mentions encainide as a substrate affected by debrisoquine hydroxylase polymorphism but provides no specific data, effect sizes, or quantitative PK/PD parameters for encainide. |
| popPK | Morganroth_1986 | irrelevant | 0 | 0 | The study is a clinical efficacy trial focusing on dose-response for arrhythmia suppression and does not report quantitative pharmacokinetic parameters such as clearance, volume, or half-life. |
| PD | Morganroth_1986 | not_relevant | 4 | 2 | The paper reports a qualitative dose-response relationship (10, 25, 50 mg) but the abstract does not provide specific numeric effect values (e.g., % suppression) or concentration data to derive PD parameters like Emax or EC50. |
| popPK | Morganroth_1986_2 | irrelevant | 0 | 0 | The paper is a review of efficacy and safety trials for ventricular arrhythmias and does not report quantitative pharmacokinetic parameters (CL, V, ka, etc.) for encainide. |
| PD | Morganroth_1986_2 | not_relevant | 3 | 2 | The text is a review of clinical trials that mentions defining the lower end of the dose-response curve but does not provide numeric PD parameters (Emax, EC50) or a quantitative concentration-effect relationship. |
| popPK | Pottage_1983 | irrelevant | 1 | 0 | The paper is a qualitative review of clinical profiles and pharmacokinetics without reporting specific quantitative parameter values for encainide. |
| popPK | Roden_1980 | relevant | 4 | 2 | The study reports a half-life range (1.9-3.8 hours) for encainide in humans, but lacks other quantitative disposition parameters like clearance or volume of distribution. |
| popPK | Roden_1988 | irrelevant | 2 | 0 | The paper is a review/abstract discussing qualitative differences in disposition between metabolizer phenotypes but does not provide specific quantitative PK parameter values (CL, V, t1/2) in the evidence. |
| popPK | Sanna_1984 | irrelevant | 1 | 0 | The paper is a general review of antiarrhythmic drugs that mentions encainide but provides no original quantitative pharmacokinetic parameter values. |
| popPK | Sheldon_1994 | irrelevant | 0 | 0 | no_text gate: only 114 chars of text extracted (&lt; 400) |
| PD | Sheldon_1994 | not_relevant | 0 | 0 | The paper focuses on the mechanism of action (allosteric inhibition of batrachotoxinin binding) and does not report pharmacokinetic or pharmacodynamic exposure-response relationships for encainide. |
| popPK | Svensson_1987 | irrelevant | 1 | 0 | The study measures the effect of encainide on the clearance of a probe drug (antipyrine) rather than reporting the pharmacokinetic parameters of encainide itself. |
| popPK | Thale_1985 | irrelevant | 4 | 2 | The study reports a terminal half-life (~75 min) and metabolite concentrations, but lacks explicit clearance, volume of distribution, or compartmental model parameters required for population PK extraction. |
| popPK | Tordjman_1987 | irrelevant | 2 | 0 | The text is a review summary that mentions a half-life but lacks quantitative disposition parameters (CL, V, ka) or a compartmental model. |
| popPK | Turgeon_1990 | irrelevant | 2 | 0 | The study reports plasma concentrations and pharmacodynamic effects (QRS prolongation) but does not provide quantitative disposition parameters such as clearance, volume of distribution, or half-life. |
| PD | Turgeon_1990 | not_relevant | 3 | 2 | The paper reports qualitative changes in QRS prolongation and arrhythmia suppression rates with drug interaction but does not provide a concentration-effect curve, Emax/EC50 parameters, or a formal PK/PD model fit. |
| PGx | Turgeon_1991 | not_relevant | 2 | 5 | The study concludes that the specific genotype (Xba-I RFLP) is unrelated to the phenotypic metabolic activity of encainide, reporting a lack of association rather than a pharmacogenomic effect. |
| PGx | Venkatakrishnan_2000 | not_relevant | 0 | 0 | The paper discusses drug-drug interactions involving antifungals and midazolam/cyclosporin, with no mention of encainide or pharmacogenomic variants. |
| popPK | Wang_1984 | relevant | 9 | 4 | The study reports quantitative PK parameters (bioavailability, half-life) for encainide in humans, but specific values for clearance and volume are not explicitly listed in the provided abstract text. |
| popPK | Woosley_1986 | irrelevant | 0 | 0 | The paper is a general review discussing pharmacokinetic principles in heart failure and mentions encainide only as an example of an agent with minimal myocardial depression, without reporting specific quantitative PK parameters for it. |
| PD | Woosley_1986 | not_relevant | 1 | 0 | The text is a qualitative review discussing general PK changes in CHF and mentions encainide only in the context of minimal myocardial depression without providing any numeric PD parameters or concentration-effect data. |
| popPK | Woosley_1987 | irrelevant | 0 | 0 | The paper is a general review discussing pharmacokinetic principles in CHF and mentions encainide only as an example of an agent with minimal myocardial depression, without reporting any specific quantitative PK parameters for it. |
| PD | Woosley_1987 | not_relevant | 1 | 0 | The text is a qualitative review discussing general PK changes in CHF and mentions encainide only in the context of minimal myocardial depression without providing any numeric PD parameters or concentration-effect data. |
| popPK | Zhou_2009 | irrelevant | 0 | 0 | The paper is a review of CYP2D6 substrates and variants; while it mentions encainide metabolism qualitatively in Supplementary Figure 6, it does not report quantitative pharmacokinetic parameters (CL, V, t1/2) for encainide. |
| PGx | Zhou_2009 | not_relevant | 0 | 0 | The provided text consists only of a title and figure captions without any specific data, tables, or text describing the pharmacokinetic or pharmacodynamic effects of CYP2D6 polymorphisms on encainide. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
