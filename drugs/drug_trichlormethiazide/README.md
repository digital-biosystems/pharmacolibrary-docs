<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C03A&quot;,&quot;href&quot;:&quot;atc/C03A.md&quot;},{&quot;label&quot;:&quot;trichlormethiazide&quot;}]"></div>

# trichlormethiazide

- **generic name:** trichlormethiazide
- **ATC codes:** `C03AA06`, `C03AB06`, `C03EA02`
- **DrugBank:** [DB01021](https://go.drugbank.com/drugs/DB01021) · **PubChem:** [CID 5560](https://pubchem.ncbi.nlm.nih.gov/compound/5560)
- **molar mass:** 380.656 g/mol (C8H8Cl3N3O4S2) — DrugBank
- **groups:** approved, vet_approved

## About

Trichlormethiazide is a thiazide diuretic used to treat high blood pressure, congestive heart failure, nephrotic syndrome, and anasarka. It is an approved drug, including for veterinary use, and is available in plain, potassium-combination, and potassium-sparing combination products.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q2072745](https://www.wikidata.org/wiki/Q2072745) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 17:34 | 1:31 | 0/0/0 | 0/0/0 | 0/0/0 | 51,489/1,552 | ollama / qwen3.8:27b-mtp-q8_0 | 4 | 4/0 | 4/0 | 0 |

## popPK records

_not available_

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=trichlormethiazide).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | blood | `TPMT` inhibitor | DrugBank actor |
| metabolism | liver | `TPMT` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: ATP1A1 (inhibitor), CA1 (inhibitor), CA2 (inhibitor), CA4 (inhibitor), SLC12A1 (blocker), SLC12A3 (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 27 matched, 27 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_3 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Sketris_1981.pdf` | Sketris IS et al., The pharmacokinetics of trichlormethiaz…, European journal of clinica… (1981) | popPK | 8 | [10.1007/BF00542099](https://doi.org/10.1007/BF00542099) | [7286056](https://pubmed.ncbi.nlm.nih.gov/7286056) | The study reports pharmacokinetic parameters (half-life, AUC) for trichlormethiazide in humans, but the specific numeric values are not present in the provided evidence. |
| `Lysaa_1996.pdf` | Lysaa RA et al., Inhibition of human thiopurine methyltr…, European journal of clinica… (1996) | pd | 4 | [10.1007/s002280050038](https://doi.org/10.1007/s002280050038) | [8866635](https://www.ncbi.nlm.nih.gov/pubmed/8866635) | metadata signals extractable PD data (IC50) |
| `Mitchell_2007.pdf` | Mitchell NA et al., Targeting AMPA receptor gating processe…, Biophysical journal (2007) | pd | 4 | [10.1529/biophysj.106.095091](https://doi.org/10.1529/biophysj.106.095091) | [17208968](https://www.ncbi.nlm.nih.gov/pubmed/17208968) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-10-06T17:33:53.168305+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Cabré_2026 | irrelevant | 0 | 0 | The paper is a narrative review of cardiovascular pharmacotherapy and does not report quantitative pharmacokinetic parameters for trichlormethiazide. |
| PD | Cabré_2026 | not_relevant | 0 | 0 | The text is a narrative review of cardiovascular pharmacotherapy and does not contain any specific pharmacodynamic data, exposure-response analysis, or numeric PD parameters for trichlormethiazide. |
| popPK | Deejai_2017 | irrelevant | 0 | 0 | The paper is an in-vitro antiviral study where trichlormethiazide is a screened compound, not a pharmacokinetic study of the drug. |
| popPK | Iwaki_1984 | irrelevant | 0 | 0 | The study focuses on pharmacodynamic effects (hypotension, natriuresis, uric acid retention) and does not report pharmacokinetic parameters such as clearance, volume of distribution, or half-life for trichlormethiazide. |
| popPK | Iwaki_1984_2 | irrelevant | 0 | 0 | The study investigates the renal handling of uric acid in rats using trichlormethiazide as a diuretic agent, rather than reporting pharmacokinetic parameters (CL, V, etc.) for trichlormethiazide itself. |
| popPK | Iwaki_1985 | irrelevant | 0 | 0 | The study investigates the renal handling of uric acid and electrolytes in rats, not the pharmacokinetic disposition parameters (CL, V, ka) of trichlormethiazide itself. |
| popPK | Lennard_2001 | irrelevant | 0 | 0 | The paper is a review of therapeutic drug monitoring for cytotoxic drugs (e.g., methotrexate, mercaptopurine) and does not mention trichlormethiazide or provide any pharmacokinetic parameters for it. |
| PD | Lennard_2001 | not_relevant | 0 | 0 | The text is a general review of therapeutic drug monitoring for cytotoxic drugs and does not mention trichlormethiazide or provide any specific pharmacodynamic data. |
| popPK | Lukeman_1987 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of receptor binding (IC50) and does not report pharmacokinetic disposition parameters for trichlormethiazide. |
| popPK | Lysaa_1996 | irrelevant | 0 | 0 | no_text gate: only 106 chars of text extracted (&lt; 400) |
| PGx | Lysaa_1996 | not_relevant | 0 | 0 | The paper investigates the inhibition of thiopurine methyltransferase by trichlormethiazide, which is a drug-drug interaction study, not a pharmacogenomic study of trichlormethiazide's own PK/PD parameters. |
| popPK | Mitchell_2007 | irrelevant | 0 | 0 | no_text gate: only 81 chars of text extracted (&lt; 400) |
| PD | Mitchell_2007 | not_relevant | 0 | 0 | The paper focuses on AMPA receptor allosteric modulators and mutations, and does not mention trichlormethiazide or report any pharmacodynamic parameters for it. |
| popPK | Mizumoto_1993 | irrelevant | 0 | 0 | The study focuses on the mechanism of action of KW-3902, using trichlormethiazide only as a comparator agent to identify renal tubular sites of action, without reporting PK parameters for trichlormethiazide. |
| popPK | Nagashima_1994 | irrelevant | 0 | 0 | Trichlormethiazide is used only as a comparator diuretic in a renal protection study, with no pharmacokinetic parameters reported. |
| popPK | Nagashima_1995 | irrelevant | 0 | 0 | Trichlormethiazide is used only as a comparator drug in a renal function study, with no pharmacokinetic parameters reported for it. |
| popPK | Shimizu_1986 | irrelevant | 0 | 0 | The study is a renal physiology/pharmacodynamics comparison of diuretic effects (urine production, hemodynamics) in rats, not a pharmacokinetic study reporting disposition parameters for trichlormethiazide. |
| popPK | Shimizu_1989 | irrelevant | 0 | 0 | The study investigates the pharmacodynamic effects (urinary excretion) of trichlormethiazide as a comparator, not its pharmacokinetic parameters. |
| popPK | Shimizu_1991 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of diuretic action on renal tubules, not a pharmacokinetic study, and trichlormethiazide is used only as a comparator agent. |
| popPK | Sketris_1981 | relevant | 8 | 2 | The study reports pharmacokinetic parameters (half-life, AUC) for trichlormethiazide in humans, but the specific numeric values are not present in the provided evidence. |
| popPK | Sugino_1995 | irrelevant | 0 | 0 | The study focuses on the uricosuric mechanism of E5050 in rats, using trichlormethiazide only as a comparator drug without reporting its pharmacokinetic parameters. |
| popPK | Suzuki_1977 | irrelevant | 0 | 0 | The study investigates the diuretic pharmacodynamics and renal clearance of SE-1520, using trichlormethiazide only as a comparator drug without reporting its specific pharmacokinetic parameters (CL, V, ka). |
| popPK | Watanabe_2011 | irrelevant | 1 | 0 | The study is an in vitro mechanistic investigation of transporter kinetics where trichlormethiazide is used as a substrate to validate a scaling model, rather than a pharmacokinetic study reporting quantitative disposition parameters (CL, V, t1/2) for the drug in vivo. |
| popPK | Yamada_1979 | irrelevant | 0 | 0 | The study focuses on endocrine and renal function changes in hypertension patients using trichlormethiazide as a therapeutic agent, without reporting any pharmacokinetic parameters. |
| popPK | Yamagata_1994 | irrelevant | 0 | 0 | The provided evidence contains only software metadata and no scientific content regarding trichlormethiazide pharmacokinetics. |
| popPK | Yao_1994 | irrelevant | 0 | 0 | Trichlormethiazide is used only as a comparator diuretic in a pharmacodynamic study of KW-3902, with no PK parameters reported. |
| popPK | Yao_1994_2 | irrelevant | 0 | 0 | Trichlormethiazide is used only as a comparator agent in a renal toxicity study in rats, with no pharmacokinetic parameters reported. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
