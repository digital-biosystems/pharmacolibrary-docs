<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;G03A&quot;,&quot;href&quot;:&quot;atc/G03A.md&quot;},{&quot;label&quot;:&quot;Norgestrel&quot;}]"></div>

# Norgestrel

- **generic name:** Norgestrel
- **ATC codes:** `G03AA06`, `G03FA10`, `G03FB01`
- **DrugBank:** [DB09389](https://go.drugbank.com/drugs/DB09389) · **PubChem:** [CID 4542](https://pubchem.ncbi.nlm.nih.gov/compound/4542)
- **molar mass:** 312.453 g/mol (C21H28O2) — DrugBank
- **groups:** approved

## About

Norgestrel is a progestogen used in hormonal contraceptives, typically combined with an estrogen. It is an approved drug, used widely as an oral contraceptive.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q126677816](https://www.wikidata.org/wiki/Q126677816) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| norgestrel | parent | 312.453 | C21H28O2 | DrugBank | [4542](https://pubchem.ncbi.nlm.nih.gov/compound/4542) | Uniyal_1976 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 09:01 | 3:30 | 0/1/0 | 0/0/0 | 0/0/0 | 146,897/2,900 | einfracz / qwen3.8-27b | 6 | 0/5 | 6/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.857). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Uniyal_1976_reference](drugs/drug_norgestrel/Norgestrel_Uniyal1976_reference.md) | — | 1-compartment (no model) | 2 | Uniyal JP et al., Disappearance of (14,15-3H)d,1-norgestr…, Acta endocrinologica (1976) | [10.1530/acta.0.0820851](https://doi.org/10.1530/acta.0.0820851) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=norgestrel).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |
| — | adipose tissue | `CYP19A1` inhibitor | DrugBank actor |
| — | liver | `SRD5A1` inhibitor | DrugBank actor |
| — | ovary | `CYP19A1` inhibitor | DrugBank actor |
| — | prostate gland | `AR` target, `SRD5A1` inhibitor | DrugBank actor |
| — | skin | `SRD5A1` inhibitor | DrugBank actor |
| — | testis | `CYP19A1` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: PGR (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 91 matched, 36 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_8 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Uniyal_1976.pdf` | Uniyal JP et al., Disappearance of (14,15-3H)d,1-norgestr…, Acta endocrinologica (1976) | popPK | 10 | [10.1530/acta.0.0820851](https://doi.org/10.1530/acta.0.0820851) | [947291](https://pubmed.ncbi.nlm.nih.gov/947291) | The text explicitly reports quantitative pharmacokinetic parameters for norgestrel including half-lives (38.8 min, 45.18 h), metabolic clearance (458.5 l/24 h), and a two-compartment model analysis in humans. |
| `Zimmerman_2004.pdf` | Zimmerman JJ, Exposure-response relationships and dru…, The AAPS journal (2004) | pd | 5 | [10.1208/aapsj060428](https://doi.org/10.1208/aapsj060428) | [15760093](https://www.ncbi.nlm.nih.gov/pubmed/15760093) | metadata signals extractable PD data (Exposure-response) |
| `Yamasaki_2002.pdf` | Yamasaki K et al., Comparison of reporter gene assay and i…, Toxicology (2002) | pd | 4 | [10.1016/s0300-483x(01)00505-4](https://doi.org/10.1016/s0300-483x(01)00505-4) | [11750080](https://www.ncbi.nlm.nih.gov/pubmed/11750080) | metadata signals extractable PD data (EC50) |
| `Ahire_2017.pdf` | Ahire D et al., Metabolite Identification, Reaction Phe…, Drug metabolism and disposi… (2017) | pgx | 7 | [10.1124/dmd.116.073940](https://doi.org/10.1124/dmd.116.073940) | [28283499](https://www.ncbi.nlm.nih.gov/pubmed/28283499) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Cicali_2022.pdf` | Cicali B et al., Development of a Translational Exposure…, Clinical pharmacology and t… (2022) | pgx | 7 | [10.1002/cpt.2690](https://doi.org/10.1002/cpt.2690) | [35723889](https://www.ncbi.nlm.nih.gov/pubmed/35723889) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Simonson_2004.pdf` | Simonson SG et al., The effect of rosuvastatin on oestrogen…, British journal of clinical… (2004) | pgx | 7 | [10.1046/j.1365-2125.2003.02015.x](https://doi.org/10.1046/j.1365-2125.2003.02015.x) | [14998424](https://www.ncbi.nlm.nih.gov/pubmed/14998424) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Trapnell_2007.pdf` | Trapnell CB et al., Absence of effect of oral rifaximin on…, The Annals of pharmacothera… (2007) | pgx | 7 | [10.1345/aph.1H395](https://doi.org/10.1345/aph.1H395) | [17284510](https://www.ncbi.nlm.nih.gov/pubmed/17284510) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Laine_2003.pdf` | Laine K et al., A screening study on the liability of e…, Pharmacology & toxicology (2003) | pgx | 5 | not captured | [12899669](https://www.ncbi.nlm.nih.gov/pubmed/12899669) | metadata signals extractable PGX data (CYP2C9) |

<sub>queue written 2026-10-07T09:00:53.194032+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Ahire_2017 | not_relevant | 0 | 0 | The paper studies 17-deacetylnorgestimate (a metabolite of norgestimate), not norgestrel, and focuses on metabolite identification and DDI predictions rather than pharmacogenomics. |
| popPK | Asada_2021 | irrelevant | 0 | 0 | The paper is a computational linguistics study on drug-drug interaction extraction using neural networks and contains no pharmacokinetic data for norgestrel. |
| PGx | Bifano_2014 | not_relevant | 0 | 0 | The study investigates the effect of drug-drug interaction (daclatasvir) on norgestrel PK, not the effect of a gene variant or genotype. |
| popPK | Chen_2024 | irrelevant | 0 | 0 | The study is a model-based meta-analysis of breakthrough bleeding (a pharmacodynamic endpoint) for combined oral contraceptives and does not report pharmacokinetic parameters (CL, V, etc.) for norgestrel, which is not even among the four progestins modeled in the final analysis. |
| PGx | Cicali_2022 | not_relevant | 0 | 0 | The paper focuses on drug-drug interactions and CYP3A4 metabolism of levonorgestrel and drospirenone, not on pharmacogenomic effects on norgestrel. |
| popPK | Goggin_2004 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of Emfilermin (r-hLIF), not norgestrel. |
| popPK | Jeng_1992 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of estrogenic potential and cell proliferation, not a pharmacokinetic study, and reports no disposition parameters like clearance or volume for norgestrel. |
| PGx | Laine_2003 | not_relevant | 0 | 0 | The paper investigates the in vitro inhibition of CYP enzymes by sex steroids, not the pharmacogenomic influence on norgestrel PK/PD parameters. |
| popPK | Lu_2010 | irrelevant | 0 | 0 | The study focuses on the interaction of methadone with CYP19 (aromatase) in vitro, and does not contain any pharmacokinetic data or mention of norgestrel. |
| popPK | Markiewicz_1992 | irrelevant | 0 | 0 | The study is an in-vitro pharmacodynamic assessment of estrogenic activity, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Markiewicz_1994 | irrelevant | 0 | 0 | The study is an in vitro bioassay evaluating hormonal potency (EC50) and mechanism, not pharmacokinetic disposition parameters (CL, V, t1/2). |
| popPK | Rose_2016 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for FE 999049 (recombinant FSH), not norgestrel; norgestrel is only mentioned as a component of the contraceptive used for pituitary suppression. |
| PGx | Simonson_2004 | not_relevant | 0 | 0 | The study reports a drug-drug interaction (rosuvastatin) affecting norgestrel PK, but does not involve any gene variants, genotypes, or pharmacogenomic factors. |
| popPK | Srinivasan_2021 | irrelevant | 0 | 0 | The paper is a pharmacoeconomic Markov model analyzing the cost of unintended pregnancies due to drug-drug interactions with oral contraceptives; it does not report any quantitative pharmacokinetic parameters (CL, V, Q, etc.) for norgestrel. |
| PGx | Trapnell_2007 | not_relevant | 0 | 0 | The paper reports a drug-drug interaction study with rifaximin and contains no data on genetic variants or pharmacogenomics. |
| popPK | Vogel_2024 | irrelevant | 0 | 0 | The paper is a wastewater surveillance study that mentions norgestrel only as a detected contaminant among many others, without reporting any pharmacokinetic parameters. |
| popPK | Yamasaki_2002 | irrelevant | 0 | 0 | This is a comparative study of reporter gene and uterotrophic assays for estrogenic activity, not a pharmacokinetic study of norgestrel. |
| popPK | Zimmerman_2004 | irrelevant | 0 | 0 | The study focuses on sirolimus pharmacokinetics, and norgestrel is only listed as a co-administered drug in a non-interacting group without any norgestrel-specific PK parameters. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 09:00 UTC</sub>
