<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A10B&quot;,&quot;href&quot;:&quot;atc/A10B.md&quot;},{&quot;label&quot;:&quot;bexagliflozin&quot;}]"></div>

# bexagliflozin

- **generic name:** bexagliflozin
- **ATC codes:** `A10BK08`
- **DrugBank:** [DB12236](https://go.drugbank.com/drugs/DB12236) · **PubChem:** [CID 25195624](https://pubchem.ncbi.nlm.nih.gov/compound/25195624)
- **molar mass:** 464.94 g/mol (C24H29ClO7) — DrugBank
- **groups:** approved, investigational

## About

Bexagliflozin is a blood glucose lowering medicine of the gliflozin class, used to treat diabetes. It is an approved drug, though the available sources do not specify how widely it is used.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q27277423](https://www.wikidata.org/wiki/Q27277423) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-04 22:22 | 1:25 | 0/0/0 | 0/0/0 | 0/0/0 | 47,811/1,125 | ollama / qwen3.8:27b-mtp-q8_0 | 7 | 0/6 | 7/0 | 0 |

## popPK records

_not available_

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=bexagliflozin).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` substrate | DrugBank actor |
| absorption | kidney | `ABCB1` substrate | DrugBank actor |
| absorption | liver | `ABCB1` substrate | DrugBank actor |
| absorption | placenta | `ABCB1` substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` substrate | DrugBank actor |
| absorption | testis | `ABCB1` substrate | DrugBank actor |
| metabolism | brain | `CYP2D6` substrate | DrugBank actor |
| metabolism | kidney | `UGT1A9` substrate | DrugBank actor |
| metabolism | liver | `CYP2C8` substrate, `CYP2D6` substrate, `CYP3A4` substrate, `UGT1A1` substrate, `UGT1A9` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate, `UGT1A1` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| — | kidney | `SLC5A2` inhibitor | DrugBank actor |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 12 matched, 26 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Patel_2026.pdf` | Patel Y et al., Pharmacokinetics of Bexagliflozin After…, Journal of veterinary pharm… (2026) | popPK | 10 | [10.1111/jvp.70072](https://doi.org/10.1111/jvp.70072) | [41964569](https://pubmed.ncbi.nlm.nih.gov/41964569) | The study reports quantitative non-compartmental pharmacokinetic parameters (CL, V, t1/2, F) for bexagliflozin in cats, with all numeric values explicitly provided in the text. |
| `Zhang_2020.pdf` | Zhang W et al., Metabolism and disposition of the SGLT2…, Xenobiotica; the fate of fo… (2020) | pgx | 7 | [10.1080/00498254.2019.1654634](https://doi.org/10.1080/00498254.2019.1654634) | [31432741](https://www.ncbi.nlm.nih.gov/pubmed/31432741) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |

<sub>queue written 2026-10-04T22:21:58.927334+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Anderson_2025 | irrelevant | 0 | 0 | The study investigates the cardiometabolic and immunomodulatory effects of AZD1656 in mice and does not report pharmacokinetic parameters for bexagliflozin. |
| popPK | Cheng_2025 | irrelevant | 0 | 0 | The paper studies brensocatib (AZD7986) in a mouse stroke model and does not mention bexagliflozin or report any pharmacokinetic parameters for it. |
| popPK | Cook_2025 | irrelevant | 0 | 0 | The paper is a clinical review of SGLT2 inhibitors in cats and does not report any quantitative pharmacokinetic parameters (CL, V, ka, etc.) for bexagliflozin. |
| popPK | Davies_2010 | irrelevant | 0 | 0 | The paper is a review of ticagrelor, a different drug, and contains no data for bexagliflozin. |
| popPK | Giruzzi_2024 | irrelevant | 0 | 0 | no_text gate: only 13 chars of text extracted (&lt; 400) |
| popPK | Hadd_2023 | irrelevant | 0 | 0 | The study is a clinical trial evaluating safety and efficacy (glucose levels, clinical signs) rather than pharmacokinetic disposition parameters (CL, V, ka). |
| popPK | Juricek_1991 | irrelevant | 0 | 0 | The paper studies the mutagenicity of azido sugars in Salmonella typhimurium and does not involve bexagliflozin or pharmacokinetics. |
| popPK | Li_2024 | irrelevant | 0 | 0 | The paper is a mechanistic immunology study on pulmonary hypertension in mice and does not involve bexagliflozin or pharmacokinetic parameters. |
| popPK | Li_2026 | irrelevant | 0 | 0 | The paper is a study on aggressive variant prostate cancer (AVPC) and does not mention bexagliflozin or report any pharmacokinetic parameters for it. |
| popPK | Mahoney_2025 | irrelevant | 0 | 0 | The paper is a synthetic chemistry study on cycloaddition reactions and does not report any pharmacokinetic parameters for bexagliflozin. |
| popPK | Pop_1989 | irrelevant | 0 | 0 | The paper is a clinical oncology study on squamous cell carcinoma treatment outcomes and contains no pharmacokinetic data for bexagliflozin. |
| popPK | Robertson_2018 | irrelevant | 0 | 0 | The paper discusses nerve sheath tumours and a phase 1 trial of selumetinib, with no mention of bexagliflozin or its pharmacokinetics. |
| popPK | Sato_2025 | irrelevant | 0 | 0 | The paper is a review of targeted therapies for Neurofibromatosis Type 1 and does not contain any pharmacokinetic data for bexagliflozin. |
| popPK | Siegel_2026 | irrelevant | 0 | 0 | The paper studies the hematologic effects of selumetinib, not the pharmacokinetics of bexagliflozin. |
| popPK | Staedt_1989 | irrelevant | 0 | 0 | no_text gate: only 161 chars of text extracted (&lt; 400) |
| PD | Susi_2025 | not_relevant | 1 | 0 | The paper is a clinical review that lists pharmacokinetic parameters (half-life, bioavailability) and qualitative clinical effects for bexagliflozin, but it does not report any numeric pharmacodynamic parameters (e.g., Emax, EC50) or exposure-response curves. |
| popPK | Zeng_2025 | irrelevant | 0 | 0 | The paper investigates the molecular mechanism of METTL16-mediated GPX4 m6A modification in non-small-cell lung cancer resistance to AZD-9291 and contains no data regarding bexagliflozin. |
| PGx | Zhang_2020 | not_relevant | 0 | 0 | The paper describes general metabolism and disposition of bexagliflozin in animals and humans but does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| PD | unknown_2023 | not_relevant | 0 | 0 | The provided text is only a title and does not contain the full paper content, so no numeric PD parameters or exposure-response relationships can be extracted. |
| PD | unknown_2025 | not_relevant | 1 | 0 | The text is a title for a review article on noninsulin drugs for type 2 diabetes and does not contain specific pharmacodynamic data, models, or numeric parameters for bexagliflozin. |
| PD | unknown_2025_2 | not_relevant | 0 | 0 | The provided text is a title regarding semaglutide, not bexagliflozin, and contains no pharmacodynamic data or parameters. |
| PD | unknown_2025_3 | not_relevant | 0 | 0 | The text is a title for a comparison chart of SGLT2 inhibitors and contains no data, analysis, or numeric parameters for bexagliflozin. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
