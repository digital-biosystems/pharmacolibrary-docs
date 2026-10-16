<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C07A&quot;,&quot;href&quot;:&quot;atc/C07A.md&quot;},{&quot;label&quot;:&quot;celiprolol&quot;}]"></div>

# celiprolol

- **generic name:** celiprolol
- **ATC codes:** `C07AB08`
- **DrugBank:** [DB04846](https://go.drugbank.com/drugs/DB04846) · **PubChem:** [CID 2663](https://pubchem.ncbi.nlm.nih.gov/compound/2663)
- **molar mass:** 379.501 g/mol (C20H33N3O4) — DrugBank
- **groups:** approved, investigational, withdrawn

## About

Celiprolol is a selective beta blocker used to treat high blood pressure and heart rhythm problems. It has been withdrawn from the market and is no longer in general use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q420586](https://www.wikidata.org/wiki/Q420586) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-14 20:40 | 0:43 | 0/0/0 | 0/0/0 | 0/0/2 | 32,925/1,449 | einfracz / qwen3.8-27b | 2 | 1/1 | 2/0 | 0 |

## popPK records

_not available_

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> | **ABCB1** | `Q32` · Cmax | transport | [Hirvensalo_2022](drugs/drug_celiprolol/pgx_Hirvensalo_2022_ABCB1_Q32.md) | Hirvensalo P et al., Pharmacogenomics of celiprolol - eviden…, Clinical and translational… (2022) | [10.1111/cts.13159](https://doi.org/10.1111/cts.13159) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> | **SLCO1A2** | `Q32` · Cmax | transport | [Hirvensalo_2022](drugs/drug_celiprolol/pgx_Hirvensalo_2022_SLCO1A2_Q32.md) | Hirvensalo P et al., Pharmacogenomics of celiprolol - eviden…, Clinical and translational… (2022) | [10.1111/cts.13159](https://doi.org/10.1111/cts.13159) |

<details class="pk-legend"><summary>PGx evidence and model availability</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>Phenotype/genotype-specific effect on a named model parameter (θ).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>Gene–drug association without a quantitative parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>CPIC/DPWG-derived estimate, not a primary-paper estimate.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>Adverse-reaction risk allele; no quantitative PK/PD parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>Phenotype-specific browser simulation and downloadable PGx model available.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>PGx model available; browser simulation unavailable.</td></tr></tbody></table></details>

<details class="legend">
<summary>PGx field definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>gene</code></td><td>Associated gene; papers with multiple genes contribute multiple records.</td></tr><tr><td><code>affects</code></td><td>Target PK/PD parameter (Q-code and name); θ scales its baseline value. Q100 denotes a non-parameter association; safety denotes adverse-reaction risk. PA identifiers indicate ClinPGx/PharmGKB guideline-derived records.</td></tr><tr><td><code>mechanism</code></td><td>Metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>Source-paper identifier and full-record link.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=celiprolol).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` transport, `SLCO1A2` transport | PGx paper |
| absorption | kidney | `ABCB1` transport | PGx paper |
| absorption | liver | `ABCB1` transport | PGx paper |
| absorption | placenta | `ABCB1` transport | PGx paper |
| absorption | small intestine | `ABCB1` transport, `SLCO1A2` transport | PGx paper |
| absorption | testis | `ABCB1` transport | PGx paper |
| metabolism | brain | `CYP2D6` substrate | DrugBank actor |
| metabolism | liver | `CYP2D6` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: ADRA2A (target), ADRA2B (target), ADRA2C (target), ADRB1 (target), ADRB2 (target), ADRB3 (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 63 matched, 63 returned
- **screened:** 2  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_12 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Ieiri_2012.pdf` | Ieiri I et al., Microdosing clinical study: pharmacokin…, Journal of clinical pharmac… (2012) | popPK | 9 | [10.1177/0091270011408612](https://doi.org/10.1177/0091270011408612) | [21593283](https://pubmed.ncbi.nlm.nih.gov/21593283) | The paper describes a population PK analysis of celiprolol in humans and reports specific AUC values in the abstract, but does not explicitly provide standard PK parameter values like CL or Vd in the extracted text. |
| `Lipka_1995.pdf` | Lipka E et al., Celiprolol double-peak occurrence and g…, Journal of pharmacokinetics… (1995) | popPK | 9 | [10.1007/BF02354285](https://doi.org/10.1007/BF02354285) | [8834196](https://pubmed.ncbi.nlm.nih.gov/8834196) | The study explicitly reports a population pharmacokinetic model (two-compartment) for celiprolol in dogs, but the abstract provided does not contain the specific numeric parameter values (CL, V, Q, etc.). |
| `Hauck_1994.pdf` | Hauck RW et al., Pharmacological actions of the selectiv…, British journal of pharmaco… (1994) | pd | 5 | [10.1111/j.1476-5381.1994.tb17098.x](https://doi.org/10.1111/j.1476-5381.1994.tb17098.x) | [7858847](https://www.ncbi.nlm.nih.gov/pubmed/7858847) | metadata signals extractable PD data (IC50) |
| `West_2025.pdf` | West MA et al., Significance of gut breast cancer resis…, Drug metabolism and disposi… (2025) | pd | 5 | [10.1016/j.dmd.2025.100056](https://doi.org/10.1016/j.dmd.2025.100056) | [40220705](https://www.ncbi.nlm.nih.gov/pubmed/40220705) | metadata signals extractable PD data (IC50) |
| `Jasper_1988.pdf` | Jasper JR et al., Molecular mechanism of beta-adrenergic…, FASEB journal : official pu… (1988) | pd | 4 | [10.1096/fasebj.2.13.2901994](https://doi.org/10.1096/fasebj.2.13.2901994) | [2901994](https://www.ncbi.nlm.nih.gov/pubmed/2901994) | metadata signals extractable PD data (EC50) |
| `Lima_1996.pdf` | Lima JJ, Relationship between beta adrenoceptor…, Journal of receptor and sig… (1996) | pd | 4 | [10.3109/10799899609039956](https://doi.org/10.3109/10799899609039956) | [8968966](https://www.ncbi.nlm.nih.gov/pubmed/8968966) | metadata signals extractable PD data (EC50) |
| `Ohlstein_1998.pdf` | Ohlstein EH et al., Carvedilol inhibits endothelin-1 biosyn…, Journal of molecular and ce… (1998) | pd | 4 | [10.1006/jmcc.1997.0582](https://doi.org/10.1006/jmcc.1997.0582) | [9500873](https://www.ncbi.nlm.nih.gov/pubmed/9500873) | metadata signals extractable PD data (IC50) |
| `Yue_1992.pdf` | Yue TL et al., Carvedilol, a new beta-adrenoceptor ant…, European journal of pharmac… (1992) | pd | 4 | [10.1016/0014-2999(92)90130-v](https://doi.org/10.1016/0014-2999(92)90130-v) | [1355437](https://www.ncbi.nlm.nih.gov/pubmed/1355437) | metadata signals extractable PD data (IC50) |
| `Yue_1994.pdf` | Yue TL et al., Carvedilol, a new vasodilating beta adr…, Cardiovascular research (1994) | pd | 4 | [10.1093/cvr/28.3.400](https://doi.org/10.1093/cvr/28.3.400) | [7909721](https://www.ncbi.nlm.nih.gov/pubmed/7909721) | metadata signals extractable PD data (IC50) |
| `Kashihara_2017.pdf` | Kashihara Y et al., Small-Dosing Clinical Study: Pharmacoki…, Journal of pharmaceutical s… (2017) | pgx | 8 | [10.1016/j.xphs.2017.03.010](https://doi.org/10.1016/j.xphs.2017.03.010) | [28322941](https://www.ncbi.nlm.nih.gov/pubmed/28322941) | metadata signals extractable PGX data (ABCG2, PK/PD-context) |
| `Huang_2008.pdf` | Huang J et al., Effect of pluronic F68 block copolymer…, International journal of ph… (2008) | pgx | 7 | [10.1016/j.ijpharm.2007.12.028](https://doi.org/10.1016/j.ijpharm.2007.12.028) | [18242899](https://www.ncbi.nlm.nih.gov/pubmed/18242899) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `de_2024.pdf` | de Vries M et al., Evaluation of the Clinical Drug-Drug In…, Clinical pharmacology in dr… (2024) | pgx | 7 | [10.1002/cpdd.1408](https://doi.org/10.1002/cpdd.1408) | [38752475](https://www.ncbi.nlm.nih.gov/pubmed/38752475) | metadata signals extractable PGX data (CYP450, PK/PD-context) |

<sub>queue written 2026-10-14T20:39:38.437351+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Alvarez-Guerra_1997 | irrelevant | 0 | 0 | The study is a pharmacodynamic investigation of adrenoceptor effects in rats and does not report any pharmacokinetic parameters such as clearance, volume, or half-life. |
| popPK | Caruso_1985 | irrelevant | 0 | 0 | no_text gate: only 69 chars of text extracted (&lt; 400) |
| popPK | Caruso_1986 | irrelevant | 0 | 0 | The study reports pharmacodynamic effects (heart rate, blood pressure, RPP) rather than pharmacokinetic parameters (CL, V, ka, etc.). |
| popPK | Chen_2018 | irrelevant | 0 | 0 | The paper is a review of fruit juice-drug interactions and mentions celiprolol only as a drug with decreased bioavailability due to orange juice, without providing specific quantitative PK parameters. |
| PD | Chen_2018 | not_relevant | 1 | 0 | The paper is a review of food-drug interactions and mentions celiprolol only in the context of decreased bioavailability (PK interaction) with orange juice, without providing any pharmacodynamic data, exposure-response curves, or numeric PD parameters. |
| PGx | Chen_2018 | not_relevant | 1 | 1 | The paper reviews food-drug interactions (juice) and mentions genetic polymorphism only as a general factor, without reporting specific pharmacogenomic data or fitted effect sizes for celiprolol. |
| popPK | Dunn_1995 | irrelevant | 0 | 0 | The paper is a clinical review of pharmacological properties and efficacy, containing no quantitative pharmacokinetic parameters (CL, V, t1/2) for celiprolol. |
| PD | Dunn_1995 | not_relevant | 1 | 0 | The text is a qualitative review of clinical efficacy and pharmacological properties, containing no numeric PD parameters, concentration-effect curves, or dose-response data. |
| PGx | Engman_2001 | not_relevant | 0 | 0 | The paper uses celiprolol merely as a P-glycoprotein substrate to test cell lines, and does not report any gene-specific effect on the pharmacokinetics or pharmacodynamics of celiprolol. |
| popPK | Greenblatt_2009 | irrelevant | 1 | 0 | The paper is a review discussing drug interactions and bioavailability qualitatively without reporting quantitative pharmacokinetic parameters (CL, V, etc.) for celiprolol. |
| PD | Greenblatt_2009 | not_relevant | 1 | 0 | The text is a review discussing qualitative bioavailability changes of celiprolol due to OATP inhibition by fruit juices, without reporting any numeric pharmacodynamic parameters or concentration-effect relationships. |
| popPK | Hauck_1994 | irrelevant | 0 | 0 | no_text gate: only 144 chars of text extracted (&lt; 400) |
| popPK | Huang_2008 | irrelevant | 1 | 0 | The study is an in-vitro mechanistic investigation of transport and metabolism, not a pharmacokinetic study reporting quantitative disposition parameters for celiprolol. |
| PD | Huang_2008 | not_relevant | 0 | 0 | The paper investigates the effect of an excipient (Pluronic F68) on in vitro transport and metabolism, not the pharmacodynamic exposure-response relationship of the drug celiprolol itself. |
| PGx | Huang_2008 | not_relevant | 0 | 0 | The paper investigates the effect of Pluronic F68 on P-gp and CYP3A4, not the pharmacogenomics of celiprolol. |
| popPK | Ieiri_2012 | relevant | 9 | 2 | The paper describes a population PK analysis of celiprolol in humans and reports specific AUC values in the abstract, but does not explicitly provide standard PK parameter values like CL or Vd in the extracted text. |
| popPK | Jankovic_2014 | irrelevant | 2 | 0 | This is a review article discussing celiprolol only as an under-investigated example, without providing any original quantitative pharmacokinetic parameter values. |
| PGx | Jankovic_2014 | not_relevant | 2 | 1 | This paper is a general review of β1-blockers that identifies celiprolol as under-investigated, but it does not present specific pharmacogenomic PK data for it. |
| popPK | Jasper_1988 | irrelevant | 0 | 0 | no_text gate: only 96 chars of text extracted (&lt; 400) |
| PD | Jasper_1988 | not_relevant | 0 | 0 | The paper discusses the molecular mechanism of beta-blockers with ISA but does not report specific pharmacokinetic or pharmacodynamic data, exposure-response relationships, or numeric PD parameters for celiprolol. |
| popPK | Jasper_1990 | irrelevant | 0 | 0 | The study focuses on the pharmacodynamics of carteolol and its metabolite, mentioning celiprolol only as a comparator for intrinsic sympathomimetic activity without reporting any pharmacokinetic parameters. |
| PD | Jasper_1990 | not_relevant | 0 | 0 | The paper focuses on the pharmacodynamics of carteolol and its metabolite, mentioning celiprolol only as a qualitative comparator for intrinsic sympathomimetic activity without providing any numeric PD parameters or exposure-response data for celiprolol. |
| PGx | Kashihara_2017 | not_relevant | 0 | 0 | The study reports that SLCO2B1*3 genotype had no effect on celiprolol PK and ABCG2 variants were not associated with celiprolol PK. |
| PGx | Lilja_2004 | not_relevant | 1 | 5 | The study reports a significant negative result, finding no association between MDR1 polymorphisms and the degree of the drug interaction. |
| popPK | Lima_1996 | irrelevant | 0 | 0 | no_text gate: only 145 chars of text extracted (&lt; 400) |
| PD | Lima_1996 | not_relevant | 0 | 0 | The provided text is only a title and does not contain the full text, data, or numeric parameters required to assess PD relationships for celiprolol. |
| popPK | Lipka_1995 | relevant | 9 | 0 | The study explicitly reports a population pharmacokinetic model (two-compartment) for celiprolol in dogs, but the abstract provided does not contain the specific numeric parameter values (CL, V, Q, etc.). |
| popPK | Marchetti_2016 | irrelevant | 0 | 0 | The paper studies a novel hybrid anticancer drug, and celiprolol is only mentioned as a comparator for efflux transporter permeability, not as the subject of a PK study. |
| PD | Marchetti_2016 | not_relevant | 0 | 0 | The paper focuses on a novel hybrid anti-tubulin drug; celiprolol is mentioned only as a reference compound for efflux transporter permeability studies, with no PD or exposure-response analysis performed for it. |
| PGx | Marchetti_2016 | not_relevant | 0 | 0 | The paper reports drug design for a novel anticancer hybrid; celiprolol is only used as a reference for efflux transporter permeability, not for a pharmacogenomic analysis of its PK/PD. |
| popPK | McAuley_1997 | irrelevant | 0 | 0 | The study is a validation of blood pressure measurement devices using celiprolol as a pharmacodynamic agent, and it does not report any pharmacokinetic parameters for celiprolol. |
| PD | McAuley_1997 | not_relevant | 1 | 0 | The paper uses celiprolol only as a pharmacodynamic intervention to validate a blood pressure measurement device (Finapres) and reports no concentration-effect or dose-response analysis or numeric PD parameters. |
| PGx | Methaneethorn_2025 | not_relevant | 0 | 0 | The paper discusses pharmacokinetic interactions with fruit juice, not the effect of gene variants or genotypes. |
| popPK | Milne_1991 | irrelevant | 1 | 0 | The paper is a review of pharmacodynamic and pharmacokinetic properties but the provided evidence contains no quantitative PK parameter values (CL, V, t1/2, etc.). |
| PD | Milne_1991 | not_relevant | 2 | 1 | The text is a qualitative review summarizing therapeutic efficacy and general pharmacodynamic properties without providing specific numeric PD parameters, concentration-effect curves, or formal PK/PD modeling data. |
| popPK | Morales_2014 | irrelevant | 0 | 0 | The paper is a systematic review and meta-analysis of respiratory safety in asthma, not a pharmacokinetic study, and contains no PK parameters for celiprolol. |
| PD | Morales_2014 | not_relevant | 3 | 2 | The paper is a meta-analysis reporting pooled mean effects and a qualitative mention of a dose-response relationship, but it does not provide specific numeric PD parameters (e.g., EC50, Emax) or an extractable concentration-effect curve for celiprolol. |
| popPK | Neve_1985 | irrelevant | 0 | 0 | In-vitro receptor binding study with no pharmacokinetic disposition parameters for celiprolol. |
| popPK | Ohlstein_1998 | irrelevant | 0 | 0 | no_text gate: only 97 chars of text extracted (&lt; 400) |
| PD | Ohlstein_1998 | not_relevant | 0 | 0 | The paper investigates carvedilol, not celiprolol, and focuses on endothelin-1 biosynthesis in cell culture rather than a pharmacodynamic exposure-response relationship for the target drug. |
| popPK | Riddell_1987 | irrelevant | 1 | 0 | The paper is a review article that summarizes pharmacodynamic and pharmacokinetic properties qualitatively but does not provide specific quantitative PK parameter values (e.g., CL, V, t1/2) in the provided evidence. |
| PD | Riddell_1987 | not_relevant | 2 | 1 | The text is a qualitative review summarizing general pharmacodynamic properties and therapeutic efficacy comparisons without providing specific numeric PD parameters (e.g., EC50, Emax) or concentration-effect data. |
| popPK | Sauvaget_2010 | irrelevant | 0 | 0 | The study is a pharmacodynamic assessment of vasodilation in rat aorta and does not report any pharmacokinetic parameters for celiprolol. |
| popPK | Schliep_1984 | irrelevant | 0 | 0 | The study focuses on the beta-adrenoceptor selectivity of bisoprolol, with celiprolol serving only as a comparator agent, and no pharmacokinetic parameters are reported. |
| PD | Schliep_1984 | not_relevant | 1 | 1 | The paper focuses on bisoprolol and only provides a single selectivity ratio for celiprolol without detailed dose-response curves or numeric PD parameters for celiprolol. |
| popPK | Silke_1986 | irrelevant | 0 | 0 | The study reports hemodynamic and cardiac function parameters, not pharmacokinetic disposition parameters (CL, V, ka, etc.) for celiprolol. |
| PD | Silke_1986 | not_relevant | 5 | 2 | The paper describes a dose-response study with specific doses and qualitative hemodynamic changes, but the provided text does not contain the numeric data points or fitted parameters (Emax, EC50) required to derive a quantitative PD relationship. |
| popPK | Silke_1986_2 | irrelevant | 0 | 0 | The study focuses on hemodynamic effects (cardiac performance) rather than pharmacokinetic disposition parameters. |
| PD | Silke_1986_2 | not_relevant | 4 | 2 | The paper describes a comparative dose-response study with qualitative hemodynamic outcomes (e.g., increased cardiac index) but does not provide numeric PD parameters (Emax, EC50) or quantitative concentration-effect curves in the provided text. |
| popPK | Silke_1997 | irrelevant | 0 | 0 | The study focuses on heart-rate variability and pharmacodynamic effects of celiprolol, not pharmacokinetic parameters. |
| popPK | Sung_1993 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of carvedilol's antiproliferative effects, with celiprolol serving only as a comparator agent and no pharmacokinetic parameters reported. |
| PD | Sung_1993 | not_relevant | 0 | 0 | The paper reports that celiprolol stimulated DNA synthesis at a single concentration (10 µM) but does not provide a concentration-response curve or numeric PD parameters (e.g., EC50, Emax) for celiprolol. |
| PGx | Tanaka_2013 | not_relevant | 1 | 0 | The study investigates a drug-drug interaction (grapefruit juice vs. celiprolol) in healthy volunteers, not a pharmacogenomic effect based on a gene variant or genotype. |
| popPK | Taylor_1986 | irrelevant | 0 | 0 | The text is a pharmacodynamic review discussing hemodynamic effects and lacks any quantitative pharmacokinetic parameters for celiprolol. |
| PD | Taylor_1986 | not_relevant | 1 | 0 | The text is a qualitative review of the pharmacological mechanisms of beta-blockers and celiprolol, containing no numeric PD parameters, concentration-effect data, or dose-response curves. |
| popPK | Taylor_1988 | irrelevant | 0 | 0 | The text is a qualitative review of pharmacological properties and does not report any quantitative pharmacokinetic parameters for celiprolol. |
| PD | Taylor_1988 | not_relevant | 1 | 0 | The text is a qualitative review of the ideal pharmacological profile of beta-blockers and mentions celiprolol's properties without providing any numeric PD parameters, concentration-effect data, or dose-response curves. |
| popPK | Taylor_1989 | irrelevant | 0 | 0 | The text is a qualitative review of celiprolol's clinical benefits and risk factor reversal, containing no quantitative pharmacokinetic parameters. |
| PD | Taylor_1989 | not_relevant | 1 | 0 | The text is a qualitative review of celiprolol's pharmacodynamic benefits and risk factor reversal, containing no numeric PD parameters, concentration-effect data, or dose-response curves. |
| popPK | West_2025 | irrelevant | 0 | 0 | The study focuses on rosuvastatin drug-drug interactions and transporter characterization, with celiprolol mentioned only as a comparator substrate for OATP2B1 without any PK parameters reported. |
| PD | West_2025 | not_relevant | 0 | 0 | The paper focuses on rosuvastatin drug-drug interactions and transporter kinetics (OATP2B1/BCRP), with no pharmacodynamic or exposure-response analysis for celiprolol. |
| PGx | Yu_2017 | not_relevant | 1 | 1 | The paper discusses drug-drug interactions (DDIs) involving celiprolol as an OATP substrate but does not report pharmacogenomic effects (gene variant-specific) on its PK parameters. |
| popPK | Yue_1992 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of antioxidant properties, not a pharmacokinetic study, and celiprolol is only a comparator. |
| PD | Yue_1992 | not_relevant | 0 | 0 | The paper focuses on the antioxidant properties of carvedilol; celiprolol is only mentioned as a comparator with no specific numeric PD parameters or dose-response curve provided for it. |
| popPK | Yue_1992_2 | irrelevant | 0 | 0 | no_text gate: only 136 chars of text extracted (&lt; 400) |
| PD | Yue_1992_2 | not_relevant | 0 | 0 | The paper studies carvedilol, not celiprolol, and focuses on neutrophil superoxide release rather than a pharmacodynamic exposure-response relationship for the target drug. |
| popPK | Yue_1994 | irrelevant | 0 | 0 | no_text gate: only 173 chars of text extracted (&lt; 400) |
| PD | Yue_1994 | not_relevant | 0 | 0 | The paper focuses on the endothelial protective effects of carvedilol, not celiprolol, and does not report any pharmacodynamic or exposure-response parameters for the target drug. |
| PGx | de_2024 | not_relevant | 0 | 0 | The paper studies drug-drug interactions of Pritelivir on celiprolol PK, not the effect of a gene variant/genotype on celiprolol PK/PD. |
| popPK | van_1990 | irrelevant | 0 | 0 | The paper is a pharmacological review discussing the mechanism of hybrid antihypertensive drugs and does not report any quantitative pharmacokinetic parameters for celiprolol. |
| PD | van_1990 | not_relevant | 1 | 0 | The text is a qualitative review describing the pharmacological classification of hybrid antihypertensive agents and does not provide any numeric PD parameters or exposure-response data for celiprolol. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
