<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C08C&quot;,&quot;href&quot;:&quot;atc/C08C.md&quot;},{&quot;label&quot;:&quot;manidipine&quot;}]"></div>

# manidipine

- **generic name:** manidipine
- **ATC codes:** `C08CA11`, `C09BB12`
- **DrugBank:** [DB09238](https://go.drugbank.com/drugs/DB09238) · **PubChem:** [CID 4008](https://pubchem.ncbi.nlm.nih.gov/compound/4008)
- **molar mass:** 610.711 g/mol (C35H38N4O6) — DrugBank
- **groups:** approved, investigational, withdrawn

## About

Manidipine is a dihydropyridine calcium channel blocker used to treat high blood pressure, and is also available in combination with an ACE inhibitor. It is not authorised in the European Union and is used mainly in Asia, particularly Japan.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q72488193](https://www.wikidata.org/wiki/Q72488193) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-13 13:07 | 2:13 | 0/0/0 | 1/1/0 | 0/0/0 | 57,340/2,753 | einfracz / qwen3.8-27b | 6 | 5/5 | 6/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.429). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 1.00).">human + animal</span> | [Zhou_2025_P_gp_ATPase_activity](drugs/drug_manidipine/pd_Zhou_2025_P_gp_ATPase_activity.md) | P-gp ATPase activity ← manidipine · stimulation effect | — | Zhou J et al., Targeting NFAT2 for Reversing the P-gp-…, Cancers (2025) | [10.3390/cancers17203289](https://doi.org/10.3390/cancers17203289) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.6). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by qwen3.8-27b, p(non-human) 1.00).">in vitro</span> | [Katoh_2000_transcellular_transport_of_3H_daunorubicin](drugs/drug_manidipine/pd_Katoh_2000_transcellular_transport_of_3H_daunorubicin.md) | transcellular transport of [3H]daunorubicin ← manidipine · inhibition effect | — | Katoh M et al., Inhibitory potencies of 1,4-dihydropyri…, Pharmaceutical research (2000) | [10.1023/a:1007568811691](https://doi.org/10.1023/a:1007568811691) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=manidipine).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | brain | `CYP2D6` inhibitor | DrugBank actor |
| metabolism | liver | `CYP2B6` inhibitor, `CYP2C19` inhibitor, `CYP2C9` inhibitor, `CYP2D6` inhibitor, `CYP3A4` inhibitor/substrate | DrugBank actor |
| metabolism | lung | `CYP1A1` inhibitor | DrugBank actor |
| metabolism | small intestine | `CYP1A1` inhibitor, `CYP3A4` inhibitor/substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: CACNA1C (blocker), CACNA1C (inhibitor), CACNA1D (inhibitor), CACNA1G (blocker), CACNA1G (inhibitor), CACNA1H (inhibitor), CACNA1I (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 30 matched, 29 returned
- **screened:** 3  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_5 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Stockis_2003.pdf` | Stockis A et al., Pharmacokinetics and tolerability of a…, Arzneimittel-Forschung (2003) | popPK | 8 | [10.1055/s-0031-1297149](https://doi.org/10.1055/s-0031-1297149) | [13677245](https://pubmed.ncbi.nlm.nih.gov/13677245) | The study reports pharmacokinetic parameters for manidipine, but the evidence only provides relative percentage changes (e.g., t1/2 +45%) rather than absolute numeric values for clearance, volume, or half-life. |
| `Correa_2021.pdf` | Correa ITS et al., Bioenergetics impairment of Trypanosoma…, Acta tropica (2021) | pd | 4 | [10.1016/j.actatropica.2020.105768](https://doi.org/10.1016/j.actatropica.2020.105768) | [33245907](https://www.ncbi.nlm.nih.gov/pubmed/33245907) | metadata signals extractable PD data (IC50) |
| `Katoh_2000.pdf` | Katoh M et al., Inhibitory potencies of 1,4-dihydropyri…, Pharmaceutical research (2000) | pd | 4 | [10.1023/a:1007568811691](https://doi.org/10.1023/a:1007568811691) | [11145223](https://www.ncbi.nlm.nih.gov/pubmed/11145223) | metadata signals extractable PD data (IC50) |
| `Qu_1996.pdf` | Qu YL et al., Slow association of positively charged…, General pharmacology (1996) | pd | 4 | [10.1016/0306-3623(95)00085-2](https://doi.org/10.1016/0306-3623(95)00085-2) | [8742511](https://www.ncbi.nlm.nih.gov/pubmed/8742511) | metadata signals extractable PD data (IC50) |
| `Uno_2006.pdf` | Uno T et al., Effect of grapefruit juice on the dispo…, British journal of clinical… (2006) | pgx | 7 | [10.1111/j.1365-2125.2006.02583.x](https://doi.org/10.1111/j.1365-2125.2006.02583.x) | [16669846](https://www.ncbi.nlm.nih.gov/pubmed/16669846) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |

<sub>queue written 2026-10-13T13:06:42.658621+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Amaliah_2025 | irrelevant | 0 | 0 | The paper is a review on ternary solid dispersions and does not mention manidipine or report specific pharmacokinetic parameters for it. |
| PD | Amaliah_2025 | not_relevant | 0 | 0 | The paper is a review of ternary solid dispersions and does not contain specific pharmacodynamic or exposure-response data for manidipine. |
| popPK | Cabré_2026 | irrelevant | 0 | 0 | This is a narrative review on cardiovascular pharmacotherapy that does not report quantitative pharmacokinetic parameters for manidipine. |
| PD | Cabré_2026 | not_relevant | 0 | 0 | The text is a narrative review of cardiovascular pharmacotherapy and does not contain specific data, models, or numeric parameters for manidipine. |
| popPK | Correa_2021 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of manidipine's antiparasitic activity against Trypanosoma cruzi and does not report any pharmacokinetic parameters. |
| popPK | Ghahremanpour_2020 | irrelevant | 0 | 0 | no_text gate: only 81 chars of text extracted (&lt; 400) |
| popPK | Hirata_1992 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of manidipine's effects on cell proliferation and gene expression, reporting no pharmacokinetic parameters. |
| popPK | Ide_1994 | irrelevant | 0 | 0 | The provided evidence contains only software metadata and no scientific content regarding manidipine pharmacokinetics. |
| PD | Ide_1994 | not_relevant | 0 | 0 | The provided text is metadata from a document processing tool (GROBID) and does not contain the scientific content of the paper, nor any information regarding manidipine or pharmacodynamic parameters. |
| popPK | Ikemura_2019 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of CYP2J2 inhibition and does not report pharmacokinetic disposition parameters for manidipine. |
| popPK | Katoh_2000 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of P-glycoprotein inhibition and does not report pharmacokinetic disposition parameters for manidipine. |
| PGx | Katoh_2000 | not_relevant | 0 | 0 | The paper reports in vitro inhibitory potencies of manidipine on P-gp transport and does not investigate the effect of gene variants or genotypes on manidipine's PK or PD. |
| PGx | Katoh_2000_2 | not_relevant | 0 | 0 | The paper investigates CYP enzyme inhibition by dihydropyridines (including manidipine) for drug-drug interaction prediction, but does not report any pharmacogenomic effects (gene variants) on PK/PD parameters. |
| PGx | Maideen_2024 | not_relevant | 0 | 0 | The paper discusses PAXLOVID (nirmatrelvir/ritonavir), not manidipine, and does not report pharmacogenomic effects. |
| popPK | Miah_2026 | irrelevant | 0 | 0 | The paper is a scoping review on dietary effects on blood pressure, containing no pharmacokinetic parameters for manidipine. |
| PD | Miah_2026 | not_relevant | 0 | 0 | The paper is a scoping review on dietary modifications of antihypertensive drug effects and does not report specific pharmacodynamic or exposure-response parameters for manidipine. |
| popPK | Qu_1996 | irrelevant | 0 | 0 | The study is an in-vitro receptor binding assay for amlodipine with manidipine as a comparator, reporting no pharmacokinetic disposition parameters. |
| PD | Qu_1996 | not_relevant | 2 | 2 | The paper reports in vitro binding kinetics (Kd, Bmax) and time-dependent IC50 ratios for receptor association, which are pharmacological binding parameters, not pharmacodynamic exposure-response or dose-response relationships in a physiological context. |
| PGx | Reddy_2021 | not_relevant | 0 | 0 | The paper investigates PXR agonism and CYP3A4 induction, but does not report pharmacogenomic effects on the PK or PD parameters of manidipine itself. |
| popPK | Ren_2022 | irrelevant | 0 | 0 | The paper is a review and tutorial on pharmacodynamic models for drugs with slow reversible binding, and does not report manidipine pharmacokinetic parameters. |
| PD | Ren_2022 | not_relevant | 2 | 0 | The paper is a review/tutorial on slow reversible binding models and does not report PD data or parameters for manidipine. |
| popPK | Satoh_2004 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of manidipine's inhibition of estradiol glucuronidation, not a pharmacokinetic study reporting disposition parameters for manidipine. |
| popPK | Shimada_1996 | irrelevant | 1 | 0 | The study focuses on pharmacodynamics (EC50, Kd) rather than reporting quantitative pharmacokinetic disposition parameters (CL, V, Ka) for manidipine. |
| PD | Shimada_1996 | not_relevant | 0 | 0 | The provided text consists solely of GROBID software version information and processing flags, containing no scientific content, drug data, or pharmacodynamic analysis for manidipine. |
| popPK | Stockis_2003 | relevant | 8 | 2 | The study reports pharmacokinetic parameters for manidipine, but the evidence only provides relative percentage changes (e.g., t1/2 +45%) rather than absolute numeric values for clearance, volume, or half-life. |
| PD | Stockis_2003 | not_relevant | 2 | 1 | The study reports PK parameters and qualitative BP/HR profiles but does not provide numeric PD parameters (e.g., Emax, EC50) or a quantitative exposure-response model. |
| popPK | Tohse_1993 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiological investigation of calcium channel modulation, not a pharmacokinetic study reporting disposition parameters. |
| PGx | Uno_2006 | not_relevant | 0 | 0 | The study investigates the effect of grapefruit juice (a food/drug interaction) on manidipine pharmacokinetics, but it does not report any pharmacogenomic effects or genotype-stratified data. |
| PGx | Yan_2025 | not_relevant | 2 | 0 | The paper investigates the mechanism of manidipine reducing P-gp expression in rheumatoid arthritis models, not how genetic variants affect manidipine's PK/PD. |
| popPK | Zhou_2025 | irrelevant | 0 | 0 | The study focuses on the mechanistic reversal of multidrug resistance and molecular interactions in vitro and in mice, reporting no pharmacokinetic parameters (CL, V, t1/2) for manidipine. |
| PGx | Zhou_2025 | not_relevant | 0 | 0 | The paper reports the mechanism of action of manidipine (reversing P-gp mediated resistance via NFAT2) in cancer cell lines and mice, but does not investigate how human gene variants affect manidipine's pharmacokinetics or pharmacodynamics. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
