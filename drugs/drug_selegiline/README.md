<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N04B&quot;,&quot;href&quot;:&quot;atc/N04B.md&quot;},{&quot;label&quot;:&quot;selegiline&quot;}]"></div>

# selegiline

- **generic name:** selegiline
- **ATC codes:** `N04BD01`
- **DrugBank:** [DB01037](https://go.drugbank.com/drugs/DB01037) · **PubChem:** [CID 26757](https://pubchem.ncbi.nlm.nih.gov/compound/26757)
- **molar mass:** 187.286 g/mol (C13H17N) — DrugBank
- **groups:** approved, vet_approved

## About

Selegiline is a monoamine oxidase B inhibitor used as an anti-Parkinson drug. It is an approved human medicine and is also approved for veterinary use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q47495783](https://www.wikidata.org/wiki/Q47495783) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 14:31 | 7:17 | 0/0/0 | 0/1/0 | 0/0/3 | 59,698/2,854 | ollama / glm-5.3-flash | 6 | 6/0 | 5/1 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.5). Primary extraction retained.">cross-check: disputed</span> | [Mahmood_1998_MAO_B_inhibition](drugs/drug_selegiline/pd_Mahmood_1998_MAO_B_inhibition.md) | inhibition of platelet MAO-B activity ← selegiline · delayed effect through an effect compartment | — | Mahmood I, Is 10 milligrams selegiline essential a…, Therapeutic drug monitoring (1998) | [10.1097/00007691-199812000-00024](https://doi.org/10.1097/00007691-199812000-00024) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (?, agreement 0.25). Primary extraction retained.">cross-check: partial</span> | **CYP2B6** | `Q3` · CLint | formation | [Puttrevu_2020](drugs/drug_selegiline/pgx_Puttrevu_2020_CYP2B6_Q3.md) | Puttrevu SK et al., Physiologically Based Pharmacokinetic M…, Pharmaceutics (2020) | [10.3390/pharmaceutics12100942](https://doi.org/10.3390/pharmaceutics12100942) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (?, agreement 0.25). Primary extraction retained.">cross-check: partial</span> | **CYP2D6** | `Q3` · CLint | metabolism | [Puttrevu_2020](drugs/drug_selegiline/pgx_Puttrevu_2020_CYP2D6_Q3.md) | Puttrevu SK et al., Physiologically Based Pharmacokinetic M…, Pharmaceutics (2020) | [10.3390/pharmaceutics12100942](https://doi.org/10.3390/pharmaceutics12100942) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (?, agreement 0.25). Primary extraction retained.">cross-check: partial</span> | **CYP3A4** | `Q3` · CLint | formation | [Puttrevu_2020](drugs/drug_selegiline/pgx_Puttrevu_2020_CYP3A4_Q3.md) | Puttrevu SK et al., Physiologically Based Pharmacokinetic M…, Pharmaceutics (2020) | [10.3390/pharmaceutics12100942](https://doi.org/10.3390/pharmaceutics12100942) |

<details class="pk-legend"><summary>PGx evidence and model availability</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>Phenotype/genotype-specific effect on a named model parameter (θ).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>Gene–drug association without a quantitative parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>CPIC/DPWG-derived estimate, not a primary-paper estimate.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>Adverse-reaction risk allele; no quantitative PK/PD parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>Phenotype-specific browser simulation and downloadable PGx model available.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>PGx model available; browser simulation unavailable.</td></tr></tbody></table></details>

<details class="legend">
<summary>PGx field definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>gene</code></td><td>Associated gene; papers with multiple genes contribute multiple records.</td></tr><tr><td><code>affects</code></td><td>Target PK/PD parameter (Q-code and name); θ scales its baseline value. Q100 denotes a non-parameter association; safety denotes adverse-reaction risk. PA identifiers indicate ClinPGx/PharmGKB guideline-derived records.</td></tr><tr><td><code>mechanism</code></td><td>Metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>Source-paper identifier and full-record link.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 70 matched, 50 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_14 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Rohatagi_1997_2.pdf` | Rohatagi S et al., Integrated pharmacokinetic and metaboli…, Biopharmaceutics & drug dis… (1997) | popPK | 9 | [10.1002/(sici)1099-081x(199710)18:7&lt;567::aid-bdd49&gt;3.0.co;2-7](https://doi.org/10.1002/(sici)1099-081x(199710)18:7<567::aid-bdd49>3.0.co;2-7) | [9330778](https://pubmed.ncbi.nlm.nih.gov/9330778) | A compartmental PK-metabolic model of selegiline and its metabolites in humans is described, but the abstract reports only fit statistics (R²=0.98, MSC=3.4) without numeric CL/V/ka values, which likely reside in tables/figures not provided. |
| `Mahmood_1998.pdf` | Mahmood I, Is 10 milligrams selegiline essential a…, Therapeutic drug monitoring (1998) | popPK | 6 | [10.1097/00007691-199812000-00024](https://doi.org/10.1097/00007691-199812000-00024) | [9853994](https://pubmed.ncbi.nlm.nih.gov/9853994) | A PK-PD model for selegiline was developed in humans, but no numeric parameter values (CL, V, Emax, EC50, ke0) appear in the provided evidence. |
| `Rohatagi_1997.pdf` | Rohatagi S et al., Pharmacokinetic evaluation of a selegil…, Biopharmaceutics & drug dis… (1997) | popPK | 6 | [10.1002/(sici)1099-081x(199711)18:8&lt;665::aid-bdd47&gt;3.0.co;2-a](https://doi.org/10.1002/(sici)1099-081x(199711)18:8<665::aid-bdd47>3.0.co;2-a) | [9373724](https://pubmed.ncbi.nlm.nih.gov/9373724) | Human PK study of selegiline with compartmental analysis, but only the formation-absorption rate constant ratios (1.57±1.04, 0.61±0.54) are given; full CL/V parameters likely in figures/tables not provided. |
| `Finberg_1985.pdf` | Finberg JP et al., Reduced peripheral presynaptic adrenoce…, British journal of pharmaco… (1985) | pd | 4 | [10.1111/j.1476-5381.1985.tb16140.x](https://doi.org/10.1111/j.1476-5381.1985.tb16140.x) | [2985158](https://www.ncbi.nlm.nih.gov/pubmed/2985158) | metadata signals extractable PD data (EC50) |
| `Laine_2001.pdf` | Laine K et al., CYP2C19 polymorphism is not important f…, European journal of clinica… (2001) | pgx | 8 | [10.1007/s002280100289](https://doi.org/10.1007/s002280100289) | [11417445](https://www.ncbi.nlm.nih.gov/pubmed/11417445) | metadata signals extractable PGX data (CYP2C19, PK/PD-context) |
| `Scheinin_1998.pdf` | Scheinin H et al., CYP2D6 polymorphism is not crucial for…, Clinical pharmacology and t… (1998) | pgx | 8 | [10.1016/S0009-9236(98)90071-6](https://doi.org/10.1016/S0009-9236(98)90071-6) | [9797797](https://www.ncbi.nlm.nih.gov/pubmed/9797797) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Wang_2008.pdf` | Wang H et al., CYP2B6: new insights into a historicall…, Current drug metabolism (2008) | pgx | 8 | [10.2174/138920008785821710](https://doi.org/10.2174/138920008785821710) | [18781911](https://www.ncbi.nlm.nih.gov/pubmed/18781911) | metadata signals extractable PGX data (CYP2B6, PK/PD-context) |
| `Chang_2009.pdf` | Chang SY et al., Further assessment of 17alpha-ethinyl e…, Drug metabolism and disposi… (2009) | pgx | 7 | [10.1124/dmd.109.026997](https://doi.org/10.1124/dmd.109.026997) | [19454483](https://www.ncbi.nlm.nih.gov/pubmed/19454483) | metadata signals extractable PGX data (CYP1A1, PK/PD-context) |
| `Guay_2006.pdf` | Guay DR, Rasagiline (TVP-1012): a new selective…, The American journal of ger… (2006) | pgx | 7 | [10.1016/j.amjopharm.2006.12.001](https://doi.org/10.1016/j.amjopharm.2006.12.001) | [17296539](https://www.ncbi.nlm.nih.gov/pubmed/17296539) | metadata signals extractable PGX data (CYP1A2, PK/PD-context) |
| `Kivistö_2001.pdf` | Kivistö KT et al., Selegiline pharmacokinetics are unaffec…, European journal of clinica… (2001) | pgx | 7 | [10.1007/s002280100278](https://doi.org/10.1007/s002280100278) | [11372588](https://www.ncbi.nlm.nih.gov/pubmed/11372588) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Mitchell_1997.pdf` | Mitchell PB, Drug interactions of clinical significa…, Drug safety (1997) | pgx | 7 | [10.2165/00002018-199717060-00005](https://doi.org/10.2165/00002018-199717060-00005) | [9429838](https://www.ncbi.nlm.nih.gov/pubmed/9429838) | metadata signals extractable PGX data (CYP1A2, PK/PD-context) |
| `Nomoto_2005.pdf` | Nomoto M et al., [Inter- and intraindividual pharmacokin…, Rinsho shinkeigaku = Clinic… (2005) | pgx | 7 | not captured | [16447756](https://www.ncbi.nlm.nih.gov/pubmed/16447756) | metadata signals extractable PGX data (COMT, PK/PD-context) |
| `Walsky_2006.pdf` | Walsky RL et al., Evaluation of 227 drugs for in vitro in…, Journal of clinical pharmac… (2006) | pgx | 7 | [10.1177/0091270006293753](https://doi.org/10.1177/0091270006293753) | [17101742](https://www.ncbi.nlm.nih.gov/pubmed/17101742) | metadata signals extractable PGX data (CYP2B6, PK/PD-context) |
| `Watanabe_2010.pdf` | Watanabe T et al., Functional characterization of 26 CYP2B…, Pharmacogenetics and genomi… (2010) | pgx | 5 | [10.1097/FPC.0b013e32833bba0e](https://doi.org/10.1097/FPC.0b013e32833bba0e) | [20517174](https://www.ncbi.nlm.nih.gov/pubmed/20517174) | metadata signals extractable PGX data (CYP2B6) |

<sub>queue written 2026-10-06T14:30:24.399768+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Agúndez_2013 | not_relevant | 5 | 2 | Abstract only mentions CYP2B6/selegiline as a potential gene/drug pairing without reporting any PK/PD parameter effect sizes. |
| PGx | Benetton_2007 | not_relevant | 3 | 5 | In vitro enzyme phenotyping with correlation analysis, not a gene variant/genotype effect on in vivo PK/PD parameters. |
| PGx | Cacabelos_2017 | not_relevant | 2 | 3 | Review table only lists gene names associated with selegiline metabolism; no variant effect on a PK/PD parameter is reported. |
| PGx | Chang_2009 | not_relevant | 2 | 3 | Paper studies EE inhibition of CYPs in vitro; selegiline only mentioned as a CYP2B6 substrate, no gene variant effect on its PK/PD reported. |
| PGx | De_2012 | not_relevant | 0 | 0 | Review of ADHD pharmacotherapy with no gene variant/genotype effects on selegiline or any PK/PD parameters reported. |
| PGx | Di_2009 | not_relevant | 2 | 1 | Selegiline is mentioned only as a mechanism-based inhibitor of CYP2A6; no gene variant effect on selegiline PK/PD is reported. |
| popPK | Dingemanse_1996 | irrelevant | 3 | 1 | Selegiline is co-administered as one arm of an interaction study; PK parameters reported are for moclobemide and its metabolites, not selegiline, and no numeric selegiline values appear in the evidence. |
| PGx | Erickson_2007 | not_relevant | 0 | 0 | Selegiline is used only as a metabolic inhibitor tool for bicifadine; no gene variant effect on selegiline PK/PD is reported. |
| popPK | Finberg_1985 | irrelevant | 0 | 0 | no_text gate: only 106 chars of text extracted (&lt; 400) |
| popPK | Glezer_2003 | irrelevant | 1 | 1 | This is a pharmacodynamic study of metabolites' sympathomimetic effects in rat vas deferens, not a PK study of selegiline disposition; no CL/V/ka/half-life values. |
| PGx | Guay_2006 | not_relevant | 0 | 0 | Review of rasagiline (not selegiline) PK/PD; no gene variant effects on selegiline parameters reported. |
| PGx | Kahma_2021 | not_relevant | 0 | 0 | In vitro CYP inhibition assay; selegiline only used as a TDI probe, no gene variant effect on PK/PD. |
| PGx | Kivistö_2001 | not_relevant | 2 | 3 | This is a drug–drug interaction study (itraconazole/CYP3A4 inhibition), not a pharmacogenomic variant/genotype effect on selegiline PK/PD. |
| PGx | Kálmán_2003 | not_relevant | 3 | 2 | Reports APOE genotype effect on clinical response (efficacy scales), not on a PK or PD parameter of selegiline. |
| PGx | Lecht_2007 | not_relevant | 0 | 0 | Paper reviews rasagiline PK/PD; no gene variant/genotype effects on selegiline PK or PD parameters are reported. |
| PGx | Lee_2019 | not_relevant | 0 | 0 | Paper is a computational drug repositioning study; selegiline is only a predicted anti-AD candidate, with no gene variant effect on any PK/PD parameter reported. |
| popPK | Mahmood_1998 | relevant | 6 | 2 | A PK-PD model for selegiline was developed in humans, but no numeric parameter values (CL, V, Emax, EC50, ke0) appear in the provided evidence. |
| PGx | Mitchell_1997 | not_relevant | 1 | 1 | Selegiline is only mentioned as a serotonin syndrome risk with SSRIs; no gene variant effect on its PK/PD is reported. |
| popPK | Müller_2014 | irrelevant | 1 | 0 | This is a review of rasagiline for Parkinson's disease with no original PK parameters for selegiline reported. |
| popPK | Nomoto_2005 | irrelevant | 1 | 0 | A narrative review of PK variability in Parkinson's drugs; selegiline is only mentioned qualitatively with no quantitative disposition parameters. |
| PGx | Nomoto_2005 | not_relevant | 2 | 3 | Selegiline metabolism via CYP2D6/3A4 is mentioned, but only drug interactions affecting bioavailability are reported, with no gene variant/genotype effect on PK/PD parameters. |
| PGx | Palacharla_2018 | not_relevant | 3 | 5 | Reports fm,CYP2B6 for selegiline in vitro, but no gene variant/genotype effect on PK/PD parameters. |
| PGx | Riederer_2018 | not_relevant | 0 | 0 | Narrative review mentions ABCB1 transporter conceptually but reports no gene variant effect on selegiline PK/PD parameters. |
| popPK | Rohatagi_1997 | relevant | 6 | 4 | Human PK study of selegiline with compartmental analysis, but only the formation-absorption rate constant ratios (1.57±1.04, 0.61±0.54) are given; full CL/V parameters likely in figures/tables not provided. |
| popPK | Rohatagi_1997_2 | relevant | 9 | 3 | A compartmental PK-metabolic model of selegiline and its metabolites in humans is described, but the abstract reports only fit statistics (R²=0.98, MSC=3.4) without numeric CL/V/ka values, which likely reside in tables/figures not provided. |
| PGx | Schnoll_2006 | not_relevant | 1 | 1 | Selegiline is only mentioned briefly as a possible treatment; no gene variant or PK/PD parameter data reported. |
| popPK | Schwengber_2017 | irrelevant | 1 | 1 | In vitro transdermal release study of selegiline from carbon nanotube buckypapers, not a pharmacokinetic disposition study; no CL/V/ka values present. |
| PGx | Shaik_2017 | not_relevant | 0 | 0 | Paper describes MAO enzyme inhibition by chemical inhibitors, not genetic variants affecting selegiline PK/PD. |
| PGx | Taavitsainen_2000 | not_relevant | 2 | 5 | In vitro enzyme kinetics and chemical inhibition of CYPs; no gene variant/genotype/phenotype effect on selegiline PK/PD reported. |
| PGx | Walsky_2006 | not_relevant | 1 | 1 | In vitro CYP2B6 inhibition study with no gene variant/genotype effect on selegiline PK/PD parameters. |
| PGx | Wang_2008 | not_relevant | 3 | 1 | Selegiline is only mentioned as a CYP2B6 substrate; no variant-specific PK/PD effect data are reported. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
