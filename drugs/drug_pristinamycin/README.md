<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01F&quot;,&quot;href&quot;:&quot;atc/J01F.md&quot;},{&quot;label&quot;:&quot;pristinamycin&quot;}]"></div>

# pristinamycin

- **generic name:** pristinamycin
- **ATC codes:** `J01FG01`
- **DrugBank:** [DB13704](https://go.drugbank.com/drugs/DB13704) · **PubChem:** not captured
- **groups:** investigational

## About

Pristinamycin is a streptogramin antibiotic used to treat bacterial infections. It is not an approved medicine in major markets and remains investigational, being used mainly in a few countries such as France.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q423412](https://www.wikidata.org/wiki/Q423412) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-13 11:19 | 8:08 | 0/0/0 | 0/0/0 | 0/0/0 | 249,100/3,753 | ollama / qwen3.8:27b-mtp-q8_0 | 11 | 3/8 | 10/1 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 48 matched, 39 returned
- **screened:** 6  ·  **relevant:** 2
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_3 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Ke_2024.pdf` | Ke T et al., Development of a UHPLC-MS/MS method for…, Journal of pharmaceutical a… (2024) | popPK | 9 | [10.1016/j.jpba.2024.116401](https://doi.org/10.1016/j.jpba.2024.116401) | [39151292](https://pubmed.ncbi.nlm.nih.gov/39151292) | The study reports quantitative PK parameters (t1/2, AUC) for pristinamycin components in beagle dogs, though clearance and volume values are not explicitly listed in the provided text. |
| `Koechlin_1990.pdf` | Koechlin C et al., Single oral dose pharmacokinetics of th…, The Journal of antimicrobia… (1990) | popPK | 9 | [10.1093/jac/25.4.651](https://doi.org/10.1093/jac/25.4.651) | [2112540](https://pubmed.ncbi.nlm.nih.gov/2112540) | The study reports quantitative pharmacokinetic parameters (Tmax, Cmax, half-life) for pristinamycin components in humans, though clearance and volume of distribution are not explicitly listed. |
| `Kramer_2003.pdf` | Kramer BP et al., Artificial regulatory networks and casc…, Biotechnology and bioengine… (2003) | pd | 4 | [10.1002/bit.10731](https://doi.org/10.1002/bit.10731) | [12889021](https://www.ncbi.nlm.nih.gov/pubmed/12889021) | metadata signals extractable PD data (sigmoid) |

<sub>queue written 2026-10-13T11:17:52.438702+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Baklouti_2026 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for amoxicillin, not pristinamycin. |
| popPK | Bearden_2004 | irrelevant | 0 | 0 | The paper focuses on the pharmacokinetics of quinupristin/dalfopristin, and pristinamycin is only mentioned as a metabolite of dalfopristin without specific PK parameters for pristinamycin itself being reported. |
| popPK | Bergeron_1997 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of quinupristin and dalfopristin, not pristinamycin, although pristinamycin is mentioned as a metabolite of dalfopristin. |
| popPK | Bobkova_2025 | irrelevant | 0 | 0 | The paper is a systematic review of in vitro studies on PI3K/AKT/mTOR inhibitors in rheumatoid arthritis synoviocytes and does not involve pristinamycin or pharmacokinetic parameters. |
| popPK | Chant_1995 | irrelevant | 2 | 0 | The paper is a review of quinupristin/dalfopristin (a different drug) and mentions pristinamycin only as a related compound or search term, without providing specific quantitative PK parameters for pristinamycin. |
| popPK | Chevalier_2001 | irrelevant | 0 | 0 | The study investigates quinupristin/dalfopristin, not pristinamycin. |
| popPK | Delgado_2000 | irrelevant | 0 | 0 | The paper is a review of quinupristin-dalfopristin (a different drug) and contains no quantitative pharmacokinetic parameters for pristinamycin. |
| PGx | Girard_2020 | not_relevant | 0 | 0 | The paper describes a drug-drug interaction (colchicine and pristinamycin) and does not report any pharmacogenomic effects on PK or PD parameters. |
| popPK | Goldstein_2005 | irrelevant | 0 | 0 | The study is an in vitro antimicrobial susceptibility assay (MICs) and does not report pharmacokinetic parameters for pristinamycin. |
| popPK | Jauréguiberry_2005 | irrelevant | 0 | 0 | The paper is a clinical retrospective study of leptospirosis symptoms and does not report any pharmacokinetic parameters for pristinamycin. |
| popPK | Johnson_1999 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of quinupristin-dalfopristin, not pristinamycin, although a dalfopristin metabolite is mentioned. |
| popPK | Kim_2002 | irrelevant | 0 | 0 | The study investigates quinupristin-dalfopristin, not pristinamycin. |
| popPK | Kramer_2003 | irrelevant | 0 | 0 | The paper describes artificial gene regulatory networks where pristinamycin is used as a transcriptional repressor inducer, not a study of its pharmacokinetics. |
| popPK | Lebreton_1989 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of pefloxacin and fosfomycin, with pristinamycin mentioned only as a secondary treatment for a specific infection case without any PK data. |
| popPK | Phung-Ba_1995 | irrelevant | 1 | 0 | The study is an in-vitro mechanistic investigation of P-glycoprotein interaction in cell lines and does not report quantitative pharmacokinetic parameters (CL, V, t1/2) for pristinamycin. |
| popPK | Piper_1999 | irrelevant | 0 | 0 | Pristinamycin is used only as a comparator antibiotic in an efficacy study of ketolides, with no pharmacokinetic parameters reported. |
| popPK | Rusu_2026 | irrelevant | 0 | 0 | The paper is a review of pyrrolidine-based antibiotics and does not report quantitative pharmacokinetic parameters for pristinamycin. |
| PGx | Salah-Bey_1995 | not_relevant | 0 | 0 | The paper describes the molecular regulation of a bacterial multidrug resistance gene (ptr) in Streptomyces, not a human pharmacogenomic effect on pristinamycin PK or PD. |
| popPK | Shan_2023 | relevant | 4 | 2 | The study reports AUC values for pristinamycin components in rats, indicating in vivo PK data, but lacks specific clearance, volume, or half-life parameters. |
| popPK | Smith_2022 | irrelevant | 0 | 0 | The paper is a clinical trial protocol for favipiravir and nitazoxanide in COVID-19 and does not study pristinamycin. |
| popPK | Smith_2022_2 | irrelevant | 0 | 0 | The paper is a clinical trial protocol for favipiravir and nitazoxanide in COVID-19 and does not study pristinamycin. |
| popPK | Wingard_1997 | irrelevant | 0 | 0 | The study evaluates the pharmacokinetics of methotrexate in the context of tacrolimus or cyclosporine, mentioning pristinamycin only as a historical comparator for a different drug interaction. |
| popPK | Zang_2026 | irrelevant | 0 | 0 | The paper is a review on viral pathogens and pulmonary fibrosis and does not mention pristinamycin or report any pharmacokinetic parameters. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
