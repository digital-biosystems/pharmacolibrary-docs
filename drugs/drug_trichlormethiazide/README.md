<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C03A&quot;,&quot;href&quot;:&quot;atc/C03A.md&quot;},{&quot;label&quot;:&quot;trichlormethiazide&quot;}]"></div>

# trichlormethiazide

- **generic name:** trichlormethiazide
- **ATC codes:** `C03AA06`, `C03AB06`, `C03EA02`
- **DrugBank:** [DB01021](https://go.drugbank.com/drugs/DB01021) · **PubChem:** [CID 5560](https://pubchem.ncbi.nlm.nih.gov/compound/5560)
- **molar mass:** 380.656 g/mol (C8H8Cl3N3O4S2) — DrugBank
- **groups:** approved, vet_approved

## About

**Description.** A thiazide diuretic with properties similar to those of hydrochlorothiazide. (From Martindale, The Extra Pharmacopoeia, 30th ed, p830)

**Indication.** Used in the treatment of oedema (including that associated with heart failure) and hypertension.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-28 09:33 | 15:48 | 0/0/0 | 0/0/0 | 0/0/0 | 47,956/1,894 | ollama / qwen3.8:27b-mtp-q8_0 | 4 | 4/0 | 4/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=trichlormethiazide) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | blood | `TPMT` inhibitor | DrugBank actor |
| metabolism | liver | `TPMT` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: ATP1A1 (inhibitor), CA1 (inhibitor), CA2 (inhibitor), CA4 (inhibitor), SLC12A1 (blocker), SLC12A3 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 27 matched, 27 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Sketris_1981.pdf` | Sketris IS et al., The pharmacokinetics of trichlormethiaz…, European journal of clinica… (1981) | popPK | 8 | [10.1007/BF00542099](https://doi.org/10.1007/BF00542099) | [7286056](https://pubmed.ncbi.nlm.nih.gov/7286056) | The study reports pharmacokinetic parameters for trichlormethiazide, but the evidence text only provides qualitative comparisons and renal function data, lacking specific numeric values for clearance, volume, or half-life. |
| `Lysaa_1996.pdf` | Lysaa RA et al., Inhibition of human thiopurine methyltr…, European journal of clinica… (1996) | pd | 4 | [10.1007/s002280050038](https://doi.org/10.1007/s002280050038) | [8866635](https://www.ncbi.nlm.nih.gov/pubmed/8866635) | metadata signals extractable PD data (IC50) |
| `Mitchell_2007.pdf` | Mitchell NA et al., Targeting AMPA receptor gating processe…, Biophysical journal (2007) | pd | 4 | [10.1529/biophysj.106.095091](https://doi.org/10.1529/biophysj.106.095091) | [17208968](https://www.ncbi.nlm.nih.gov/pubmed/17208968) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-09-28T09:32:46.305943+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Cabré_2026 | irrelevant | 0 | 0 | The paper is a narrative review of cardiovascular pharmacotherapy and does not report any quantitative pharmacokinetic parameters for trichlormethiazide. |
| PD | Cabré_2026 | not_relevant | 0 | 0 | The text is a narrative review of cardiovascular pharmacotherapy and does not contain any specific pharmacodynamic data, exposure-response analysis, or numeric PD parameters for trichlormethiazide. |
| popPK | Deejai_2017 | irrelevant | 0 | 0 | The paper is an in-vitro antiviral study where trichlormethiazide is a screened compound, not a pharmacokinetic study of the drug. |
| popPK | Iwaki_1984 | irrelevant | 0 | 0 | The study focuses on pharmacodynamic effects (hypotension, natriuresis, uric acid retention) rather than pharmacokinetic disposition parameters like clearance or volume of distribution. |
| popPK | Iwaki_1984_2 | irrelevant | 1 | 0 | The study focuses on the renal handling of uric acid in rats, using trichlormethiazide only as a diuretic agent to induce hemoconcentration, and does not report pharmacokinetic parameters for trichlormethiazide itself. |
| popPK | Iwaki_1985 | irrelevant | 0 | 0 | The study investigates the renal handling of uric acid and electrolytes (clearance of uric acid/inulin) rather than the pharmacokinetic disposition parameters (CL, V, ka) of trichlormethiazide itself. |
| popPK | Lennard_2001 | irrelevant | 0 | 0 | The paper is a review of therapeutic drug monitoring for cytotoxic drugs and does not mention trichlormethiazide or report any pharmacokinetic parameters for it. |
| PD | Lennard_2001 | not_relevant | 0 | 0 | The text is a general review of therapeutic drug monitoring for cytotoxic drugs and does not mention trichlormethiazide or provide any specific pharmacodynamic data. |
| popPK | Lukeman_1987 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of receptor binding (IC50) and does not report pharmacokinetic disposition parameters for trichlormethiazide. |
| popPK | Lysaa_1996 | irrelevant | 0 | 0 | no_text gate: only 106 chars of text extracted (&lt; 400) |
| PGx | Lysaa_1996 | not_relevant | 0 | 0 | The paper investigates the inhibition of thiopurine methyltransferase by trichlormethiazide, which is a drug-drug interaction study, not a pharmacogenomic study of trichlormethiazide's own PK/PD parameters. |
| popPK | Mitchell_2007 | irrelevant | 0 | 0 | no_text gate: only 81 chars of text extracted (&lt; 400) |
| PD | Mitchell_2007 | not_relevant | 0 | 0 | The paper focuses on AMPA receptor allosteric modulators and mutations, and does not mention trichlormethiazide or report any pharmacodynamic parameters for it. |
| popPK | Mizumoto_1993 | irrelevant | 0 | 0 | The study focuses on the mechanism of action of KW-3902, using trichlormethiazide only as a comparator for site of action, and reports no pharmacokinetic parameters for trichlormethiazide. |
| popPK | Nagashima_1994 | irrelevant | 0 | 0 | Trichlormethiazide is used only as a comparator diuretic in a renal protection study, with no pharmacokinetic parameters reported. |
| popPK | Nagashima_1995 | irrelevant | 0 | 0 | Trichlormethiazide is used only as a comparator agent in a renal function study, with no pharmacokinetic parameters reported. |
| popPK | Shimizu_1986 | irrelevant | 0 | 0 | The study is a renal physiology/pharmacodynamics comparison where trichlormethiazide is a comparator agent, and no pharmacokinetic parameters are reported. |
| popPK | Shimizu_1989 | irrelevant | 0 | 0 | The study investigates the pharmacodynamic effects (urinary excretion) of trichlormethiazide as a comparator and does not report any pharmacokinetic parameters. |
| popPK | Shimizu_1991 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of diuretic action on renal tubules, not a pharmacokinetic study, and trichlormethiazide is used only as a comparator agent. |
| popPK | Sketris_1981 | relevant | 8 | 2 | The study reports pharmacokinetic parameters for trichlormethiazide, but the evidence text only provides qualitative comparisons and renal function data, lacking specific numeric values for clearance, volume, or half-life. |
| popPK | Sugino_1995 | irrelevant | 0 | 0 | The study focuses on the uricosuric mechanism of E5050 in rats, using trichlormethiazide only as a comparator for urate excretion effects, and does not report pharmacokinetic parameters for trichlormethiazide. |
| popPK | Suzuki_1977 | irrelevant | 0 | 0 | The study investigates the diuretic pharmacodynamics and renal clearance of SE-1520, using trichlormethiazide only as a comparator drug without reporting its pharmacokinetic parameters. |
| popPK | Watanabe_2011 | irrelevant | 1 | 0 | The study is an in-vitro mechanistic investigation using kidney slices and hepatocytes, not a pharmacokinetic study reporting quantitative disposition parameters (CL, V, etc.) for trichlormethiazide in vivo. |
| popPK | Yamada_1979 | irrelevant | 0 | 0 | The study focuses on endocrine and renal function in hypertension patients using trichlormethiazide as a therapeutic agent, and does not report any pharmacokinetic parameters for the drug. |
| popPK | Yamagata_1994 | irrelevant | 0 | 0 | The provided evidence contains only software metadata and no scientific content regarding trichlormethiazide pharmacokinetics. |
| popPK | Yao_1994 | irrelevant | 0 | 0 | Trichlormethiazide is used only as a comparator diuretic in a pharmacodynamic study of KW-3902, with no PK parameters reported. |
| popPK | Yao_1994_2 | irrelevant | 0 | 0 | The study focuses on the renal protective effects of KW-3902 against gentamicin-induced nephrotoxicity, using trichlormethiazide only as a comparator agent without reporting any pharmacokinetic parameters for it. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
