<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A10B&quot;,&quot;href&quot;:&quot;atc/A10B.md&quot;},{&quot;label&quot;:&quot;saxagliptin&quot;}]"></div>

# saxagliptin

- **generic name:** saxagliptin
- **ATC codes:** `A10BD10`, `A10BD21`, `A10BD25`, `A10BH03`
- **DrugBank:** [DB06335](https://go.drugbank.com/drugs/DB06335) · **PubChem:** [CID 11243969](https://pubchem.ncbi.nlm.nih.gov/compound/11243969)
- **molar mass:** 315.41 g/mol (C18H25N3O2) — DrugBank
- **groups:** approved, investigational

## About

Saxagliptin is a dipeptidyl peptidase-4 inhibitor used to lower blood sugar in adults with type 2 diabetes. It is authorised in the European Union and is available both alone and in fixed oral combination products with other glucose-lowering drugs.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q3121121](https://www.wikidata.org/wiki/Q3121121) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| saxagliptin | parent | 315.41 | C18H25N3O2 | DrugBank | [11243969](https://pubchem.ncbi.nlm.nih.gov/compound/11243969) | Wang_2024 |
| 5-hydroxy saxagliptin | metabolite | 331.416 | C18H25N3O3 | PubChem | [23645678](https://pubchem.ncbi.nlm.nih.gov/compound/23645678) | Wang_2024 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 16:15 | 1:19 | 0/0/1 | 0/0/1 | 0/0/0 | 99,521/3,582 | einfracz / qwen3.8-27b | 11 | 1/10 | 9/2 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">rat</span><br><sub>STALE — current validate: needs_review</sub><br><sub>blocking: C6_cl_magnitude failed (ratio None)</sub><br><sub>route_to: `human_review`</sub> | [Wang_2024_reference](drugs/drug_saxagliptin/Saxagliptin_Wang2024_reference.md) | — | — (no model) | 16 | Wang T et al., Pharmacokinetic/Pharmacodynamic modelli…, BMC pharmacology & toxicolo… (2024) | [10.1186/s40360-024-00757-3](https://doi.org/10.1186/s40360-024-00757-3) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.714). The first reading is what the record holds.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">rat</span> | [Wang_2024_InSAX](drugs/drug_saxagliptin/pd_Wang_2024_InSAX.md) | DPP-4 inhibition ratio ← SAX · direct sigmoid Emax (Hill) effect | — | Wang T et al., Pharmacokinetic/Pharmacodynamic modelli…, BMC pharmacology & toxicolo… (2024) | [10.1186/s40360-024-00757-3](https://doi.org/10.1186/s40360-024-00757-3) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=saxagliptin).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| distribution | blood-brain barrier | `ABCC1` substrate | DrugBank actor |
| distribution | lung | `ABCC1` substrate | DrugBank actor |
| metabolism | kidney | `CYP3A5` substrate | DrugBank actor |
| metabolism | liver | `CYP3A4` substrate, `CYP3A5` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate, `CYP3A5` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | `SLC22A8` substrate | DrugBank actor |
| excretion | liver | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: DPP4 (inhibitor), SLCO4C1 (substrate).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 42 matched, 42 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 1  ·  extracted 0  ·  needs_review 1  ·  rejected 0  ·  stale 1
- **scholar-agent fallback query used:** not captured

## Full-text requests

_9 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Kalliokoski_2010.pdf` | Kalliokoski A et al., SLCO1B1 polymorphism and oral antidiabe…, Basic & clinical pharmacolo… (2010) | pgx | 8 | [10.1111/j.1742-7843.2010.00581.x](https://doi.org/10.1111/j.1742-7843.2010.00581.x) | [20406215](https://www.ncbi.nlm.nih.gov/pubmed/20406215) | metadata signals extractable PGX data (SLCO1B1, PK/PD-context) |
| `Liu_2022.pdf` | Liu Q et al., Effects of 27 CYP3A4 protein variants o…, Fundamental & clinical phar… (2022) | pgx | 8 | [10.1111/fcp.12693](https://doi.org/10.1111/fcp.12693) | [33961299](https://www.ncbi.nlm.nih.gov/pubmed/33961299) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Su_2012.pdf` | Su H et al., Characterization of the in vitro and in…, Drug metabolism and disposi… (2012) | pgx | 8 | [10.1124/dmd.112.045450](https://doi.org/10.1124/dmd.112.045450) | [22496391](https://www.ncbi.nlm.nih.gov/pubmed/22496391) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Ali_2013.pdf` | Ali S et al., Saxagliptin overview: special focus on…, Expert opinion on drug safe… (2013) | pgx | 7 | [10.1517/14740338.2013.741584](https://doi.org/10.1517/14740338.2013.741584) | [23137182](https://www.ncbi.nlm.nih.gov/pubmed/23137182) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Dai_2024.pdf` | Dai GX et al., Differential inhibition of sildenafil a…, Toxicology and applied phar… (2024) | pgx | 7 | [10.1016/j.taap.2024.116934](https://doi.org/10.1016/j.taap.2024.116934) | [38663673](https://www.ncbi.nlm.nih.gov/pubmed/38663673) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Filippatos_2014.pdf` | Filippatos TD et al., The pharmacokinetic considerations and…, Expert opinion on drug meta… (2014) | pgx | 7 | [10.1517/17425255.2014.907274](https://doi.org/10.1517/17425255.2014.907274) | [24746233](https://www.ncbi.nlm.nih.gov/pubmed/24746233) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Gao_2013.pdf` | Gao J et al., Influences of processed rhubarbs on the…, Journal of ethnopharmacology (2013) | pgx | 7 | [10.1016/j.jep.2012.11.030](https://doi.org/10.1016/j.jep.2012.11.030) | [23207062](https://www.ncbi.nlm.nih.gov/pubmed/23207062) | metadata signals extractable PGX data (CYP1A2, PK/PD-context) |
| `Golightly_2012.pdf` | Golightly LK et al., Comparative clinical pharmacokinetics o…, Clinical pharmacokinetics (2012) | pgx | 7 | [10.1007/BF03261927](https://doi.org/10.1007/BF03261927) | [22686547](https://www.ncbi.nlm.nih.gov/pubmed/22686547) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Upreti_2011.pdf` | Upreti VV et al., Effect of rifampicin on the pharmacokin…, British journal of clinical… (2011) | pgx | 7 | [10.1111/j.1365-2125.2011.03937.x](https://doi.org/10.1111/j.1365-2125.2011.03937.x) | [21651615](https://www.ncbi.nlm.nih.gov/pubmed/21651615) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |

<sub>queue written 2026-10-07T16:14:21.879126+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Ali_2013 | not_relevant | 0 | 0 | The text describes general safety, renal/hepatic dosing adjustments, and drug-drug interactions with CYP3A4, but does not report specific pharmacogenomic effects of gene variants on saxagliptin parameters. |
| PD | Anderson_2016 | not_relevant | 1 | 0 | The text is a review abstract that qualitatively summarizes clinical efficacy and PK/PD properties without reporting specific numeric PD parameters or exposure-response models. |
| PGx | Butrovich_2022 | not_relevant | 0 | 0 | The paper focuses on the impact of chronic kidney disease (CKD) on saxagliptin metabolism using a PBPK model, rather than investigating genetic variants (pharmacogenomics). |
| PGx | Dai_2024 | not_relevant | 0 | 0 | The study investigates drug-drug interactions (CYP3A4 inhibition by sildenafil/macitentan), not the impact of a specific gene variant/genotype on pharmacokinetics. |
| PGx | Dave_2011 | not_relevant | 0 | 0 | The text describes general pharmacology, clinical efficacy, and standard dosing adjustments for renal impairment/CYP3A4 inhibitors, but does not report specific gene variants or genotypes affecting saxagliptin PK/PD. |
| PGx | Filippatos_2014 | not_relevant | 0 | 0 | The text is a review of general pharmacokinetic profiles and adverse effects of DPP-4 inhibitors and mentions saxagliptin's CYP3A4 metabolism, but it does not report specific genetic variants or genotypes affecting PK/PD parameters. |
| PGx | Gao_2013 | not_relevant | 0 | 0 | The study investigates drug-herb interactions (processed rhubarbs affecting CYP enzymes) rather than pharmacogenomic effects caused by specific gene variants. |
| popPK | Gibbs_2012 | irrelevant | 0 | 0 | The study is a pharmacodynamic meta-analysis modeling the relationship between DPP-4 inhibition and HbA1c response, not a pharmacokinetic study reporting disposition parameters like CL or V for saxagliptin. |
| PGx | Golightly_2012 | not_relevant | 0 | 0 | The paper discusses the clinical pharmacokinetics of saxagliptin and its CYP3A4 metabolism but does not report the impact of any specific gene variant, genotype, or phenotype on its PK or PD parameters. |
| PGx | Hernández-Lorca_2025 | not_relevant | 5 | 4 | The paper is a narrative review focusing on dietary modulation of CYP3A4; it mentions pharmacogenomics only as a factor influencing variability and does not report specific quantitative effects of gene variants on saxagliptin PK/PD. |
| PGx | Kalliokoski_2010 | not_relevant | 0 | 0 | The paper explicitly states that the liver is not important for the elimination of saxagliptin and concludes that SLCO1B1 polymorphism is unlikely to affect its response, reporting no pharmacogenomic effect on its PK. |
| PGx | Lee_2024 | not_relevant | 0 | 0 | The paper reports a CYP3A-mediated drug-drug interaction (saxagliptin and nicardipine) and does not involve genetic variants or pharmacogenomics. |
| PGx | Li_2021 | not_relevant | 2 | 0 | The paper focuses on a physiological-based PK/PD (PBPK-DO) model for drug-drug interactions (DDI) with CYP3A4 modulators; while the supplementary material mentions a simulation for CYP3A4*22, no specific pharmacogenomic effect size or data for a gene variant's impact on saxagliptin's PK/PD is reported in the provided text. |
| PGx | Mansour_2022 | not_relevant | 0 | 0 | The study investigates a drug-drug interaction (sildenafil) rather than a pharmacogenomic effect. |
| PGx | Patel_2011 | not_relevant | 0 | 0 | The paper reports drug-drug interactions (CYP3A4 inhibitors), not pharmacogenomic effects (gene variants/genotypes). |
| PGx | Pilon_2026 | not_relevant | 5 | 4 | The study identifies genetic associations with PD outcomes (HbA1c/hypoglycemia) but lacks specific fitted effect sizes for PK parameters or defined PD drug response mechanisms. |
| PGx | Scheen_2010 | not_relevant | 0 | 0 | The paper discusses drug-drug interactions mediated by CYP3A4/5 enzymes, not genetic polymorphisms or pharmacogenomic effects. |
| PGx | Sivadas_2024 | not_relevant | 0 | 0 | The paper reports allele frequencies of PGx variants and predicts drug-drug-gene interaction risks in the Indian population, but it does not report measured PK/PD parameter changes for saxagliptin in response to specific genotypes. |
| PGx | Song_2026 | not_relevant | 0 | 0 | The study compares reactive metabolite formation of saxagliptin across different in vitro cell models (HLMs, CHHs, HHOs) without investigating gene variants or genotypes. |
| PGx | Su_2012 | not_relevant | 1 | 0 | The paper reports general PK and metabolism involving CYP3A4/5 and concludes that CYP3A5 genetic polymorphism is unlikely to impact clearance, rather than reporting a specific quantitative pharmacogenomic effect. |
| PGx | Upreti_2011 | not_relevant | 0 | 0 | The study investigates a drug-drug interaction (rifampicin) and does not involve a gene variant, genotype, or phenotype affecting the PK/PD of saxagliptin. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 16:14 UTC</sub>
