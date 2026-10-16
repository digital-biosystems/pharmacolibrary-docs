<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C03B&quot;,&quot;href&quot;:&quot;atc/C03B.md&quot;},{&quot;label&quot;:&quot;chlortalidone&quot;}]"></div>

# chlortalidone

- **generic name:** chlortalidone
- **ATC codes:** `C03BA04`, `C03BB04`, `C03EA06`
- **DrugBank:** [DB00310](https://go.drugbank.com/drugs/DB00310) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Chlortalidone is a diuretic and antihypertensive drug used to treat arterial hypertension, congestive heart failure, and fluid retention conditions such as anasarca and nephrotic syndrome, and also nephrogenic diabetes insipidus. It is an approved medicine, available alone or in combination products with potassium-sparing agents or potassium, and is used widely in cardiovascular care.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q425289](https://www.wikidata.org/wiki/Q425289) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| chlortalidone (chlorthalidone) | parent | 338.762 | C14H11ClN2O4S | PubChem | [2732](https://pubchem.ncbi.nlm.nih.gov/compound/2732) | Fleuren_1979 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 17:11 | 7:06 | 0/1/0 | 0/0/0 | 0/0/8 | 141,956/17,674 | ollama / qwen3.8:27b-mtp-q8_0 | 9 | 0/8 | 8/1 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.364), gpt-oss:120b (not confirmed, agreement 0.2). Primary extraction retained.">cross-check: disputed 0/2</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Fleuren_1979_reference](drugs/drug_chlortalidone/Chlortalidone_Fleuren1979_reference.md) | — | 1-compartment (no model) | 2 | Fleuren HL et al., Absolute bioavailability of chlorthalid…, European journal of clinica… (1979) | [10.1007/BF00563556](https://doi.org/10.1007/BF00563556) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (confirmed, agreement 1.0), gpt-oss:120b (?, agreement 0.25). Primary extraction retained.">cross-check: partial 1/2</span> | **CACNA1C** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Armstrong_2022](drugs/drug_chlortalidone/pgx_Armstrong_2022_CACNA1C_Q100.md) | Armstrong ND et al., Genetic Contributors of Efficacy and Ad…, Genes (2022) | [10.3390/genes13071260](https://doi.org/10.3390/genes13071260) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (?, agreement 0.25), gpt-oss:120b (?, agreement 0.25). Primary extraction retained.">cross-check: partial 0/2</span> | **GIMAP1-GIMAP5** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | unknown | [Armstrong_2022](drugs/drug_chlortalidone/pgx_Armstrong_2022_GIMAP1_GIMAP5_Q100.md) | Armstrong ND et al., Genetic Contributors of Efficacy and Ad…, Genes (2022) | [10.3390/genes13071260](https://doi.org/10.3390/genes13071260) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (?, agreement 0.25), gpt-oss:120b (?, agreement 0.25). Primary extraction retained.">cross-check: partial 0/2</span> | **LINC02211-CDH9** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | unknown | [Armstrong_2022](drugs/drug_chlortalidone/pgx_Armstrong_2022_LINC02211_CDH9_Q100.md) | Armstrong ND et al., Genetic Contributors of Efficacy and Ad…, Genes (2022) | [10.3390/genes13071260](https://doi.org/10.3390/genes13071260) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (confirmed, agreement 1.0), gpt-oss:120b (?, agreement 0.25). Primary extraction retained.">cross-check: partial 1/2</span> | **HMGCS2** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Singh_2018](drugs/drug_chlortalidone/pgx_Singh_2018_HMGCS2_Q100.md) | Singh S et al., Genome Wide Association Study Identifie…, Journal of the American Hea… (2018) | [10.1161/JAHA.117.007339](https://doi.org/10.1161/JAHA.117.007339) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (confirmed, agreement 1.0), gpt-oss:120b (?, agreement 0.25). Primary extraction retained.">cross-check: partial 1/2</span> | **DUSP1** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Sá_2018](drugs/drug_chlortalidone/pgx_S_2018_DUSP1_Q100.md) | Sá ACC et al., Blood pressure signature genes and bloo…, BMC medical genomics (2018) | [10.1186/s12920-018-0370-x](https://doi.org/10.1186/s12920-018-0370-x) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0), gpt-oss:120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓ 2/2</span> | **FOS** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Sá_2018](drugs/drug_chlortalidone/pgx_S_2018_FOS_Q100.md) | Sá ACC et al., Blood pressure signature genes and bloo…, BMC medical genomics (2018) | [10.1186/s12920-018-0370-x](https://doi.org/10.1186/s12920-018-0370-x) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0), gpt-oss:120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓ 2/2</span> | **PPP1R15A** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Sá_2018](drugs/drug_chlortalidone/pgx_S_2018_PPP1R15A_Q100.md) | Sá ACC et al., Blood pressure signature genes and bloo…, BMC medical genomics (2018) | [10.1186/s12920-018-0370-x](https://doi.org/10.1186/s12920-018-0370-x) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.5), gpt-oss:120b (?, agreement 0.25). Primary extraction retained.">cross-check: disputed 0/2</span> | **SLC12A3** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | transport | [Xu_2026](drugs/drug_chlortalidone/pgx_Xu_2026_SLC12A3_Q100.md) | Xu C et al., Unmasking of a Heterozygous SLC12A3 Var…, Kidney medicine (2026) | [10.1016/j.xkme.2026.101255](https://doi.org/10.1016/j.xkme.2026.101255) |

<details class="pk-legend"><summary>PGx evidence and model availability</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>Phenotype/genotype-specific effect on a named model parameter (θ).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>Gene–drug association without a quantitative parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>CPIC/DPWG-derived estimate, not a primary-paper estimate.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>Adverse-reaction risk allele; no quantitative PK/PD parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>Phenotype-specific browser simulation and downloadable PGx model available.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>PGx model available; browser simulation unavailable.</td></tr></tbody></table></details>

<details class="legend">
<summary>PGx field definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>gene</code></td><td>Associated gene; papers with multiple genes contribute multiple records.</td></tr><tr><td><code>affects</code></td><td>Target PK/PD parameter (Q-code and name); θ scales its baseline value. Q100 denotes a non-parameter association; safety denotes adverse-reaction risk. PA identifiers indicate ClinPGx/PharmGKB guideline-derived records.</td></tr><tr><td><code>mechanism</code></td><td>Metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>Source-paper identifier and full-record link.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=chlortalidone).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| distribution | blood | `ALB` unknown | DrugBank actor |
| metabolism | liver | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: CA1 (inhibitor), CACNA1C (target), DUSP1 (target), FOS (target), GIMAP1-GIMAP5 (unknown), HMGCS2 (target), LINC02211-CDH9 (unknown), PPP1R15A (target), SLC12A1 (inhibitor), SLC12A3 (transport).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 65 matched, 50 returned
- **screened:** 6  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 1
- **scholar-agent fallback query used:** True

## Full-text requests

_6 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Fleuren_1979.pdf` | Fleuren HL et al., Absolute bioavailability of chlorthalid…, European journal of clinica… (1979) | popPK | 10 | [10.1007/BF00563556](https://doi.org/10.1007/BF00563556) | [421727](https://pubmed.ncbi.nlm.nih.gov/421727) | The study reports quantitative pharmacokinetic parameters including half-lives, bioavailability, and compartmental model descriptions for chlorthalidone in humans. |
| `MacGregor_1985.pdf` | MacGregor TR et al., Chlorthalidone pharmacodynamics in beag…, Journal of pharmaceutical s… (1985) | popPK | 9 | [10.1002/jps.2600740810](https://doi.org/10.1002/jps.2600740810) | [4032269](https://pubmed.ncbi.nlm.nih.gov/4032269) | The study reports a compartmental PK model and bioequivalence for chlortalidone in dogs, but specific numeric parameter values (CL, V, ka) are not present in the provided abstract text. |
| `Pentikis_1996.pdf` | Pentikis HS et al., Bioequivalence: individual and populati…, Pharmaceutical research (1996) | popPK | 9 | [10.1023/a:1016083429903](https://doi.org/10.1023/a:1016083429903) | [8842055](https://pubmed.ncbi.nlm.nih.gov/8842055) | The study analyzes chlorthalidone bioequivalence data using compartmental and population PK models, but the specific numeric parameter values are not present in the provided evidence. |
| `Kumar_2017.pdf` | Kumar Puttrevu S et al., Pharmacokinetic-pharmacodynamic modelin…, Naunyn-Schmiedeberg's archi… (2017) | pd | 5 | [10.1007/s00210-017-1339-6](https://doi.org/10.1007/s00210-017-1339-6) | [28190245](https://www.ncbi.nlm.nih.gov/pubmed/28190245) | metadata signals extractable PD data (pharmacodynamicmodel) |
| `Tsai_2016.pdf` | Tsai MC et al., Population Pharmacokinetics and Exposur…, Journal of clinical pharmac… (2016) | pd | 5 | [10.1002/jcph.684](https://doi.org/10.1002/jcph.684) | [26632101](https://www.ncbi.nlm.nih.gov/pubmed/26632101) | metadata signals extractable PD data (Exposure-Response) |
| `Yang_2022.pdf` | Yang S et al., Genetic variation of pharmacogenomic VI…, Molecular genetics and geno… (2022) | pgx | 5 | [10.1007/s00438-022-01855-9](https://doi.org/10.1007/s00438-022-01855-9) | [35146537](https://www.ncbi.nlm.nih.gov/pubmed/35146537) | metadata signals extractable PGX data (CYP4F2) |

<sub>queue written 2026-10-06T17:04:18.500683+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PD | Angeloni_2016 | not_relevant | 1 | 0 | The paper is a qualitative review of azilsartan and its combinations, providing no numeric pharmacodynamic parameters or exposure-response data for chlortalidone. |
| PGx | Arnett_2005 | not_relevant | 0 | 0 | The study reports null results for the association between ACE genotype and cardiovascular outcomes, not a pharmacokinetic or pharmacodynamic parameter of chlortalidone. |
| PD | Blowey_2016 | not_relevant | 1 | 0 | The text is a general review of diuretics in hypertension and mentions chlorthalidone qualitatively without providing any numeric pharmacodynamic parameters, exposure-response data, or dose-effect curves. |
| PD | Bottino_2026 | not_relevant | 2 | 1 | The paper reports a comparative clinical trial with fixed doses (25 mg vs 50 mg) and qualitative dose-response observations for amiloride, but it does not provide a concentration-effect model, PK/PD fit, or numeric PD parameters (Emax, EC50) for chlortalidone. |
| PD | Carter_2004 | not_relevant | 2 | 1 | The paper is a review that qualitatively states chlorthalidone is 1.5-2.0 times more potent than hydrochlorothiazide but does not provide specific numeric PD parameters (e.g., EC50, Emax) or concentration-effect curves for chlorthalidone itself. |
| PD | Chrysant_2021 | not_relevant | 1 | 0 | The paper is a narrative review comparing the clinical efficacy of chlorthalidone and hydrochlorothiazide, and it does not report any specific pharmacokinetic or pharmacodynamic modeling or numeric PD parameters. |
| PD | Engelhardt_1996 | not_relevant | 0 | 0 | The paper focuses on meloxicam's pharmacology and only qualitatively states that meloxicam did not influence chlorthalidone's diuretic effect, without providing any numeric PD parameters or exposure-response data for chlorthalidone. |
| PGx | Irvin_2010 | not_relevant | 2 | 5 | The study reports pharmacogenomic associations with a clinical outcome (fasting glucose) rather than a direct pharmacokinetic or pharmacodynamic parameter of chlorthalidone. |
| PD | Kendall_1981 | not_relevant | 1 | 0 | The text is an abstract that only qualitatively states that chlorthalidone does not influence metoprolol's beta-blocking action and that plasma levels are similar to monotherapy, without providing any numeric PD parameters, concentration-effect curves, or dose-response data for chlorthalidone. |
| popPK | Kumar_2017 | irrelevant | 0 | 0 | no_text gate: only 159 chars of text extracted (&lt; 400) |
| popPK | MacGregor_1985 | relevant | 9 | 2 | The study reports a compartmental PK model and bioequivalence for chlortalidone in dogs, but specific numeric parameter values (CL, V, ka) are not present in the provided abstract text. |
| popPK | Maggi_1985 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of fenquizone, not chlortalidone, which is only mentioned as a comparator. |
| popPK | Marzo_2000 | irrelevant | 2 | 0 | The study is a bioequivalence trial reporting only relative bioavailability metrics (Cmax, AUC, tmax) for a fixed-dose combination, without providing absolute quantitative disposition parameters (CL, V, ka) for chlortalidone. |
| PD | Marzo_2000 | not_relevant | 1 | 0 | The paper is a bioequivalence study that only qualitatively mentions overlapping pharmacodynamic results (blood pressure) without providing numeric PD parameters or concentration-effect data. |
| PD | McTavish_1990 | not_relevant | 0 | 0 | The paper is a review of cadralazine and only mentions chlorthalidone as a comparator in a qualitative efficacy statement, providing no PD model, exposure-response data, or numeric PD parameters for chlorthalidone. |
| PGx | Mehanna_2017 | not_relevant | 0 | 0 | The paper analyzes blood pressure response based on age and race, not on specific gene variants or genotypes. |
| PGx | Mehanna_2019 | not_relevant | 0 | 0 | The paper investigates plasma renin activity (PRA) as a predictive biomarker for blood pressure response, not a genetic variant or genotype. |
| PD | OReilly_1971 | not_relevant | 0 | 0 | The provided text is only the title of a study and does not contain the full text, data, or numeric PD parameters required to assess the pharmacodynamic relationship. |
| popPK | Pentikis_1996 | relevant | 9 | 0 | The study analyzes chlorthalidone bioequivalence data using compartmental and population PK models, but the specific numeric parameter values are not present in the provided evidence. |
| PD | Reilly_2010 | not_relevant | 1 | 0 | The text is a narrative review providing qualitative dose recommendations for hypertension and nephrolithiasis but does not report any numeric pharmacodynamic parameters (e.g., Emax, EC50) or quantitative exposure-response/dose-response curves for chlortalidone. |
| PGx | Sørensen_2014 | not_relevant | 0 | 0 | The study investigates genetic associations with drug treatment groups (prescription patterns) rather than the effect of genotypes on pharmacokinetic or pharmacodynamic parameters. |
| PGx | Tanner_2011 | not_relevant | 0 | 0 | The paper reports pharmacogenomic associations with clinical cardiovascular outcomes (e.g., CHD, stroke), not pharmacokinetic or pharmacodynamic parameters of chlorthalidone. |
| popPK | Tsai_2016 | irrelevant | 0 | 0 | no_text gate: only 158 chars of text extracted (&lt; 400) |
| popPK | Turgeon_1994 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiology investigation of ion channel block, not a pharmacokinetic study, and chlorthalidone was a comparator with no effect. |
| PD | Turgeon_1994 | not_relevant | 0 | 0 | The study reports that chlortalidone had no effect on IKs current, providing no numeric PD parameters or dose-response relationship for the drug. |
| PD | Turgeon_1995 | not_relevant | 3 | 2 | The paper reports a dose-response study but concludes that chlorthalidone had no protective effect, providing no numeric PD parameters (e.g., EC50, Emax) or derivable concentration-effect curve for the drug. |
| PGx | Yang_2022 | not_relevant | 0 | 0 | The paper reports population allele frequencies for VIP variants and mentions potential associations with chlorthalidone via PharmGKB, but it does not report any measured pharmacokinetic or pharmacodynamic parameters or effect sizes for chlorthalidone. |
| PD | Yoon_2026 | not_relevant | 2 | 1 | The paper is a pharmacovigilance and epidemiological cohort study assessing the risk of glaucoma (an adverse event) associated with drug use, not a pharmacodynamic study modeling the drug's therapeutic effect (e.g., blood pressure reduction) against exposure or dose. |
| PD | Zaiken_2011 | not_relevant | 0 | 0 | The paper is a review of azilsartan medoxomil and does not report any pharmacodynamic or exposure-response analysis for chlortalidone. |
| PD | de_1991 | not_relevant | 0 | 0 | The study reports PK parameter changes (clearance, volume of distribution) of a heparinoid induced by chlorthalidone, but does not report a pharmacodynamic (exposure-response or dose-response) relationship for chlorthalidone itself. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-06 17:04 UTC</sub>
