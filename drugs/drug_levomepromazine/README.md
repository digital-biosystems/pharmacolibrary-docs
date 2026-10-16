<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05A&quot;,&quot;href&quot;:&quot;atc/N05A.md&quot;},{&quot;label&quot;:&quot;levomepromazine&quot;}]"></div>

# levomepromazine

- **generic name:** levomepromazine
- **ATC codes:** `N05AA02`
- **DrugBank:** [DB01403](https://go.drugbank.com/drugs/DB01403) · **PubChem:** not captured
- **groups:** approved

## About

Levomepromazine is a phenothiazine antipsychotic used for conditions such as pain and anxiety disorder. It is an approved medicine, though it is not listed as authorised by the European Medicines Agency, so its availability appears limited to certain countries.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q417204](https://www.wikidata.org/wiki/Q417204) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-14 20:44 | 0:24 | 0/0/0 | 1/0/0 | 0/0/1 | 27,309/2,581 | einfracz / qwen3.8-27b | 4 | 0/4 | 4/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (fish), not measured in people (from an LLM reading of the title and abstract by glm-5.3-flash, p(non-human) 1.00).">fish</span> | [Pihlaja_2024_BFCOD](drugs/drug_levomepromazine/pd_Pihlaja_2024_BFCOD.md) | benzyloxy-4-trifluoromethylcoumarin-O-debenzyloxylation (BFCOD) biomarker turnover ← levomepromazine | — | Pihlaja TLM et al., Comparative in vitro hepatic clearances…, Aquatic toxicology (Amsterd… (2024) | [10.1016/j.aquatox.2024.107048](https://doi.org/10.1016/j.aquatox.2024.107048) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (fish), not measured in people (from an LLM reading of the title and abstract by glm-5.3-flash, p(non-human) 1.00).">fish</span> | [Pihlaja_2024_EROD](drugs/drug_levomepromazine/pd_Pihlaja_2024_EROD.md) | 7-ethoxyresorufin-O-deethylation (EROD) biomarker turnover ← levomepromazine | — | Pihlaja TLM et al., Comparative in vitro hepatic clearances…, Aquatic toxicology (Amsterd… (2024) | [10.1016/j.aquatox.2024.107048](https://doi.org/10.1016/j.aquatox.2024.107048) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (?, agreement 0.25). Primary extraction retained.">cross-check: partial</span> | **CYP2D6** | `Q27` · CL/F | metabolism | [Butwicka_2014](drugs/drug_levomepromazine/pgx_Butwicka_2014_CYP2D6_Q27.md) | Butwicka A et al., Neuroleptic malignant syndrome in an ad…, European journal of pediatr… (2014) | [10.1007/s00431-013-2208-z](https://doi.org/10.1007/s00431-013-2208-z) |

<details class="pk-legend"><summary>PGx evidence and model availability</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>Phenotype/genotype-specific effect on a named model parameter (θ).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>Gene–drug association without a quantitative parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>CPIC/DPWG-derived estimate, not a primary-paper estimate.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>Adverse-reaction risk allele; no quantitative PK/PD parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>Phenotype-specific browser simulation and downloadable PGx model available.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>PGx model available; browser simulation unavailable.</td></tr></tbody></table></details>

<details class="legend">
<summary>PGx field definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>gene</code></td><td>Associated gene; papers with multiple genes contribute multiple records.</td></tr><tr><td><code>affects</code></td><td>Target PK/PD parameter (Q-code and name); θ scales its baseline value. Q100 denotes a non-parameter association; safety denotes adverse-reaction risk. PA identifiers indicate ClinPGx/PharmGKB guideline-derived records.</td></tr><tr><td><code>mechanism</code></td><td>Metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>Source-paper identifier and full-record link.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=levomepromazine).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | liver | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| metabolism | brain | `CYP2D6` inhibitor/metabolism/substrate | DrugBank actor |
| metabolism | liver | `CYP2D6` inhibitor/metabolism/substrate, `CYP2E1` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: ADRA1A (target), ADRA1B (target), ADRA1D (target), ADRA2A (target), ADRA2B (target), ADRA2C (target), CHRM1 (target), CHRM2 (target), CHRM3 (target), CHRM4 (target), CHRM5 (target), DRD1 (target), DRD2 (target), DRD3 (target), DRD4 (target), DRD5 (target), HRH1 (target), HTR2A (target), HTR2C (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 57 matched, 57 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_16 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `ter_2003.pdf` | ter Horst PG et al., Simultaneous determination of levomepro…, Journal of chromatography.… (2003) | popPK | 10 | [10.1016/s1570-0232(03)00253-8](https://doi.org/10.1016/s1570-0232(03)00253-8) | [12798199](https://pubmed.ncbi.nlm.nih.gov/12798199) | The text explicitly reports quantitative pharmacokinetic parameters (Vd and CL) for levomepromazine in human plasma. |
| `El_2004.pdf` | El Ela AA et al., Identification of P-glycoprotein substr…, The Journal of pharmacy and… (2004) | pd | 5 | [10.1211/0022357043969](https://doi.org/10.1211/0022357043969) | [15285840](https://www.ncbi.nlm.nih.gov/pubmed/15285840) | metadata signals extractable PD data (IC50) |
| `Pihlaja_2024.pdf` | Pihlaja TLM et al., Comparative in vitro hepatic clearances…, Aquatic toxicology (Amsterd… (2024) | pd | 5 | [10.1016/j.aquatox.2024.107048](https://doi.org/10.1016/j.aquatox.2024.107048) | [39146846](https://www.ncbi.nlm.nih.gov/pubmed/39146846) | metadata signals extractable PD data (IC50) |
| `Koski_2003.pdf` | Koski A et al., Interaction of alcohol and drugs in fat…, Human & experimental toxico… (2003) | pd | 4 | [10.1191/0960327103ht324oa](https://doi.org/10.1191/0960327103ht324oa) | [12774892](https://www.ncbi.nlm.nih.gov/pubmed/12774892) | metadata signals extractable PD data (concentration-effect) |
| `Bagli_1995.pdf` | Bagli M et al., Bioequivalence and absolute bioavailabi…, International journal of cl… (1995) | pgx | 8 | not captured | [8963481](https://www.ncbi.nlm.nih.gov/pubmed/8963481) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Gram_1993.pdf` | Gram LF et al., Citalopram: interaction studies with le…, Therapeutic drug monitoring (1993) | pgx | 8 | not captured | [8451775](https://www.ncbi.nlm.nih.gov/pubmed/8451775) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Park_2026.pdf` | Park Y et al., Association between CYP2D6 and CYP2C19…, The lancet. Psychiatry (2026) | pgx | 8 | [10.1016/S2215-0366(26)00238-5](https://doi.org/10.1016/S2215-0366(26)00238-5) | [42716055](https://www.ncbi.nlm.nih.gov/pubmed/42716055) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Syvälahti_1997.pdf` | Syvälahti EK et al., Citalopram causes no significant altera…, The Journal of internationa… (1997) | pgx | 8 | [10.1177/030006059702500104](https://doi.org/10.1177/030006059702500104) | [9027670](https://www.ncbi.nlm.nih.gov/pubmed/9027670) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Vandel_1995.pdf` | Vandel S et al., Fluvoxamine and fluoxetine: interaction…, Pharmacological research (1995) | pgx | 8 | [10.1016/1043-6618(95)80088-3](https://doi.org/10.1016/1043-6618(95)80088-3) | [8685072](https://www.ncbi.nlm.nih.gov/pubmed/8685072) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Basińska-Ziobroń_2015.pdf` | Basińska-Ziobroń A et al., Inhibition of human cytochrome P450 iso…, Pharmacological reports : PR (2015) | pgx | 7 | [10.1016/j.pharep.2015.04.005](https://doi.org/10.1016/j.pharep.2015.04.005) | [26481538](https://www.ncbi.nlm.nih.gov/pubmed/26481538) | metadata signals extractable PGX data (CYP1A2, PK/PD-context) |
| `Daniel_2005.pdf` | Daniel WA et al., Inhibition of rat liver CYP2D in vitro…, European neuropsychopharmac… (2005) | pgx | 7 | [10.1016/j.euroneuro.2004.05.008](https://doi.org/10.1016/j.euroneuro.2004.05.008) | [15572279](https://www.ncbi.nlm.nih.gov/pubmed/15572279) | metadata signals extractable PGX data (CYP2D, PK/PD-context) |
| `Davies_2010.pdf` | Davies SJ et al., Characterisation of zuclopenthixol meta…, Acta psychiatrica Scandinav… (2010) | pgx | 7 | [10.1111/j.1600-0447.2010.01619.x](https://doi.org/10.1111/j.1600-0447.2010.01619.x) | [20946203](https://www.ncbi.nlm.nih.gov/pubmed/20946203) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Kornhuber_2006.pdf` | Kornhuber J et al., Region specific distribution of levomep…, Journal of neural transmiss… (2006) | pgx | 7 | [10.1007/s00702-005-0331-3](https://doi.org/10.1007/s00702-005-0331-3) | [15997416](https://www.ncbi.nlm.nih.gov/pubmed/15997416) | metadata signals extractable PGX data (Cyp2D6, PK/PD-context) |
| `LLerena_2003.pdf` | LLerena A et al., Determination of risperidone and 9-hydr…, Journal of chromatography.… (2003) | pgx | 7 | [10.1016/s1570-0232(02)00661-x](https://doi.org/10.1016/s1570-0232(02)00661-x) | [12450541](https://www.ncbi.nlm.nih.gov/pubmed/12450541) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Ieiri_2003.pdf` | Ieiri I et al., A CYP2D6 phenotype-genotype mismatch in…, Pharmacopsychiatry (2003) | pgx | 5 | [10.1055/s-2003-43049](https://doi.org/10.1055/s-2003-43049) | [14571354](https://www.ncbi.nlm.nih.gov/pubmed/14571354) | metadata signals extractable PGX data (CYP2D6) |
| `Vevelstad_2009.pdf` | Vevelstad M et al., O-demethylation of codeine to morphine…, European journal of clinica… (2009) | pgx | 5 | [10.1007/s00228-009-0640-9](https://doi.org/10.1007/s00228-009-0640-9) | [19308365](https://www.ncbi.nlm.nih.gov/pubmed/19308365) | metadata signals extractable PGX data (CYP2D6) |

<sub>queue written 2026-10-14T20:44:06.488066+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Bagli_1995 | not_relevant | 5 | 5 | The study explicitly reports that CYP2D6 phenotypes did not show a significant correlation with levomepromazine pharmacokinetic parameters, indicating no major pharmacogenomic effect for this drug/metabolism pathway. |
| PGx | Balant-Gorgia_1986 | not_relevant | 0 | 0 | The paper reports pharmacokinetics of clomipramine affected by genetic polymorphism and levomepromazine, but does not report pharmacogenomic effects on levomepromazine itself. |
| PGx | Basińska-Ziobroń_2015 | not_relevant | 0 | 0 | The paper is an in vitro drug-drug interaction study investigating CYP inhibition by levomepromazine, not a pharmacogenomic study of levomepromazine's PK/PD. |
| PGx | Belančić_2024 | not_relevant | 2 | 1 | The paper reports a clinical case of therapeutic failure and subsequent dose adjustment based on pharmacogenetic testing, but it does not report a quantified pharmacokinetic or pharmacodynamic effect size attributable to a specific gene variant for levomepromazine. |
| PGx | Brøsen_1991 | not_relevant | 0 | 0 | The paper studies the metabolism of imipramine and mentions levomepromazine only as a competitive inhibitor in an in vitro assay, not as a drug whose pharmacokinetics are modulated by a genetic variant. |
| PGx | Butwicka_2014 | not_relevant | 2 | 0 | The paper is a case report describing an adverse event (NMS) in a CYP2D6 poor metabolizer and does not report quantitative PK or PD parameter changes for levomepromazine. |
| PGx | Danek_2021 | not_relevant | 0 | 0 | The study investigates drug-induced CYP3A4 enzyme induction in vitro, not a pharmacogenomic effect (gene variant) on the PK or PD of levomepromazine. |
| PGx | Daniel_2001 | not_relevant | 0 | 10 | The paper investigates CYP enzyme inhibition by levomepromazine, which does not constitute a pharmacogenomic effect on the drug's own PK or PD. |
| PGx | Daniel_2005 | not_relevant | 1 | 1 | The study investigates pharmacodynamic interactions (CYP2D inhibition) of levomepromazine in rats but does not report a gene variant or genotype influencing levomepromazine pharmacokinetics or pharmacodynamics. |
| PGx | Davies_2010 | not_relevant | 0 | 0 | The study investigates drug-drug interactions (CYP inhibitors/inducers) on zuclopenthixol, not the effect of gene variants (pharmacogenomics) on levomepromazine. |
| PGx | Gervasini_2013 | not_relevant | 0 | 0 | The paper assesses the in vitro enzyme inhibitory potential of levomepromazine, but does not report any pharmacogenomic effects of gene variants on its PK or PD parameters. |
| PGx | Gram_1993 | not_relevant | 0 | 10 | The study investigates drug-drug interactions in a population restricted to extensive metabolizers and does not report pharmacogenomic effects of a specific gene variant on levomepromazine parameters. |
| PGx | Jerling_1994 | not_relevant | 0 | 0 | The paper studies drug-drug interactions (levomepromazine affecting amitriptyline/nortriptyline PK) and does not report pharmacogenomic effects on levomepromazine itself. |
| popPK | Järvinen_2024 | irrelevant | 0 | 0 | The study is an in-vitro cytotoxicity/toxicology assay in rainbow trout cells and does not report pharmacokinetic parameters (CL, V, t1/2, etc.) for levomepromazine. |
| popPK | Kornhuber_2006 | irrelevant | 0 | 0 | no_text gate: only 66 chars of text extracted (&lt; 400) |
| PGx | Kornhuber_2006 | not_relevant | 0 | 0 | The paper describes the regional distribution of levomepromazine in the human brain but does not report any pharmacogenomic analysis or gene-variant specific effects on PK/PD parameters. |
| popPK | Kornhuber_2006_2 | irrelevant | 1 | 0 | The study focuses on the pharmacokinetics of amantadine, and levomepromazine is only mentioned as a comparator without providing quantitative PK data for it. |
| PGx | LLerena_2003 | not_relevant | 0 | 0 | The paper focuses on a method for determining risperidone and its metabolite, and mentions a case involving levomepromazine only in the context of side effects, but does not report a pharmacogenomic effect of a gene variant on the PK/PD of levomepromazine. |
| PGx | Mannheimer_2008 | not_relevant | 0 | 0 | The paper focuses on the pharmacokinetics of risperidone and investigates drug-drug interactions with CYP2D6 inhibitors (including levomepromazine) rather than pharmacogenomic effects on levomepromazine. |
| PGx | Park_2026 | not_relevant | 0 | 0 | The study focuses on venlafaxine, and levomepromazine is only mentioned as a strong CYP2D6 inhibitor used to exclude participants, not as the subject of the pharmacogenomic analysis. |
| PGx | Syvälahti_1997 | not_relevant | 0 | 0 | The paper investigates a drug-drug interaction (citalopram) and found no significant changes in levomepromazine levels, nor does it report specific pharmacogenomic effect sizes for CYP2D6 genotypes on levomepromazine PK. |
| PGx | Takei_2024 | not_relevant | 0 | 0 | The paper reports a case of fatal drug-drug interaction involving CYP2D6 inhibition but does not report any effect of a genetic variant, genotype, or phenotype on the PK/PD of levomepromazine. |
| PGx | Vandel_1995 | not_relevant | 0 | 0 | The study reports a drug-drug interaction (SSRI inhibition of CYP2D6) rather than a genetic variant effect, and specifically states there was no significant change in levomepromazine plasma levels. |
| PGx | Vevelstad_2009 | not_relevant | 0 | 0 | The study reports how a CYP2D6 genotype affects the PK of codeine (a victim drug) under levomepromazine (the perpetrator), rather than how a genotype affects the PK/PD of levomepromazine itself. |
| PGx | Wójcikowski_2014 | not_relevant | 2 | 0 | The paper identifies the CYP enzymes responsible for levomepromazine metabolism in vitro (CYP3A4, CYP1A2) but does not report a pharmacogenomic effect of a specific human genetic variant/genotype/phenotype on a PK or PD parameter. |
| PGx | Yoshimura_2000 | not_relevant | 0 | 0 | The paper reports a drug-drug interaction (levomepromazine inhibiting fluvoxamine metabolism) and does not report how a genetic variant or genotype affects the PK or PD parameters of levomepromazine. |
| popPK | Yukawa_2002 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for haloperidol, while levomepromazine is only mentioned as a concomitant drug (CYP 2D6 substrate) that did not significantly affect the model. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
