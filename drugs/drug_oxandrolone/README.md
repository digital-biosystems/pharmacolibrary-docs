<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A14A&quot;,&quot;href&quot;:&quot;atc/A14A.md&quot;},{&quot;label&quot;:&quot;oxandrolone&quot;}]"></div>

# oxandrolone

- **generic name:** oxandrolone
- **ATC codes:** `A14AA08`
- **DrugBank:** [DB00621](https://go.drugbank.com/drugs/DB00621) · **PubChem:** [CID 5878](https://pubchem.ncbi.nlm.nih.gov/compound/5878)
- **molar mass:** 306.4397 g/mol (C19H30O3) — DrugBank
- **groups:** approved, investigational

## About

Oxandrolone is an anabolic steroid used to treat failure to thrive. It is an approved drug, but carries a boxed warning and is not authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q420859](https://www.wikidata.org/wiki/Q420859) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-05 10:21 | 0:27 | 0/0/0 | 0/0/0 | 0/0/0 | 21,426/294 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 1/1 | 1/0 | 0 |

## popPK records

_not available_

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=oxandrolone).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| metabolism | liver | `CYP2C9` inhibitor | DrugBank actor |
| — | prostate gland | `AR` target | DrugBank actor |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 39 matched, 19 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Huml_2020.pdf` | Huml L et al., Stanazolol derived ELISA as a sensitive…, Steroids (2020) | pd | 4 | [10.1016/j.steroids.2019.108550](https://doi.org/10.1016/j.steroids.2019.108550) | [31812623](https://www.ncbi.nlm.nih.gov/pubmed/31812623) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-10-05T10:21:37.902242+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bierich_1989 | irrelevant | 0 | 0 | The paper is a review of growth hormone therapy indications and mentions oxandrolone only as a co-administered agent for Turner's syndrome without reporting any pharmacokinetic parameters. |
| PD | Bierich_1989 | not_relevant | 1 | 0 | The text is a general review of growth hormone therapy that mentions oxandrolone only as a qualitative adjunct for Turner's syndrome, without providing any numeric dose-response or concentration-effect data. |
| popPK | Boris_1972 | irrelevant | 0 | 0 | no_text gate: only 81 chars of text extracted (&lt; 400) |
| PD | Boris_1972 | not_relevant | 0 | 0 | The paper studies the anti-ovulatory effects of androgenic steroids in rats and does not report pharmacokinetic or pharmacodynamic modeling for oxandrolone. |
| popPK | Crock_1990 | irrelevant | 0 | 0 | The paper is a clinical study on the efficacy of oxandrolone for height in Turner syndrome and does not report any pharmacokinetic parameters. |
| popPK | De_1983 | irrelevant | 0 | 0 | no_text gate: only 45 chars of text extracted (&lt; 400) |
| PD | De_1983 | not_relevant | 0 | 0 | The paper discusses sex hormones and lipoprotein metabolism generally and does not report any pharmacodynamic or exposure-response data for oxandrolone. |
| popPK | Garg_2011 | irrelevant | 0 | 0 | The paper describes the development and stability of an extemporaneous liquid formulation, not a pharmacokinetic study, and contains no PK parameters. |
| PD | Garg_2011 | not_relevant | 0 | 0 | The paper focuses on the development and stability evaluation of an extemporaneous oral liquid formulation of oxandrolone, containing no pharmacodynamic or exposure-response data. |
| popPK | Gervasio_2000 | irrelevant | 0 | 0 | The study is a clinical trial assessing nutritional and clinical outcomes, not a pharmacokinetic study, and reports no disposition parameters for oxandrolone. |
| PD | Gervasio_2000 | not_relevant | 0 | 0 | The study is a clinical trial comparing fixed-dose oxandrolone to placebo without measuring drug concentrations or modeling exposure-response relationships. |
| popPK | Haeusler_1998 | irrelevant | 0 | 0 | The paper is a review of growth outcomes in Turner syndrome and does not report any pharmacokinetic parameters for oxandrolone. |
| PD | Haeusler_1998 | not_relevant | 1 | 0 | The text is a qualitative review summarizing clinical outcomes; it explicitly states there is no obvious dose-response relationship and provides no numeric PD parameters or concentration-effect data for oxandrolone. |
| popPK | Huml_2020 | irrelevant | 0 | 0 | The paper describes a forensic ELISA assay for detecting anabolic steroids and reports cross-reactivity percentages, not pharmacokinetic parameters for oxandrolone. |
| PD | Huml_2020 | not_relevant | 0 | 0 | The paper describes the development of an ELISA assay for detecting anabolic steroids; the reported IC50 values refer to the analytical sensitivity of the immunoassay, not to the pharmacodynamic response of the drug in a biological system. |
| popPK | Kriström_2023 | irrelevant | 0 | 0 | The study focuses on growth outcomes in Turner syndrome and uses oxandrolone as a co-administered growth promoter, without reporting any pharmacokinetic parameters for oxandrolone. |
| PD | Kriström_2023 | not_relevant | 0 | 0 | The paper focuses on growth hormone dose-response in Turner syndrome; oxandrolone is mentioned only as a co-medication without any specific pharmacodynamic analysis, exposure-response modeling, or numeric PD parameters reported for it. |
| popPK | Linakis_2020 | irrelevant | 0 | 0 | no_text gate: only 167 chars of text extracted (&lt; 400) |
| popPK | Menke_2010 | irrelevant | 0 | 0 | The study is a clinical trial assessing growth outcomes and safety of oxandrolone in Turner syndrome, not a pharmacokinetic study, and reports no PK parameters. |
| popPK | Miller_2009 | irrelevant | 0 | 0 | The paper is a clinical review of oxandrolone's efficacy in thermal injury and does not report any pharmacokinetic parameters. |
| PD | Miller_2009 | not_relevant | 1 | 0 | The text is a qualitative review of clinical outcomes (lean body mass, wound healing) without reporting any numeric concentration-effect data, dose-response curves, or PD parameters. |
| popPK | Namias_2007 | irrelevant | 0 | 0 | The paper is a general review of burn care that mentions oxandrolone's safety and efficacy but provides no pharmacokinetic parameters or quantitative disposition data. |
| popPK | Sas_2014 | irrelevant | 0 | 0 | The paper is a clinical review/recommendation regarding safety and efficacy in Turner syndrome, containing no pharmacokinetic parameters or quantitative disposition data for oxandrolone. |
| PD | Sas_2014 | not_relevant | 2 | 1 | The text is a review summarizing clinical outcomes (height gain) and safety recommendations based on dose ranges, but it does not report a pharmacodynamic model, concentration-effect relationship, or specific numeric PD parameters like Emax or EC50. |
| popPK | Segal_1999 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of antiviral activity and does not report pharmacokinetic parameters for oxandrolone. |
| popPK | Sheffield-Moore_1999 | irrelevant | 0 | 0 | The study investigates muscle protein synthesis and amino acid transport, not the pharmacokinetic disposition parameters (CL, V, ka) of oxandrolone. |
| popPK | Sheffield-Moore_2000 | irrelevant | 0 | 0 | The study investigates muscle protein synthesis rates using stable isotopes, not the pharmacokinetic disposition parameters (CL, V, t1/2) of oxandrolone. |
| popPK | unknown_1997 | irrelevant | 0 | 0 | no_text gate: only 27 chars of text extracted (&lt; 400) |
| PD | unknown_1997 | not_relevant | 0 | 0 | The provided text is only a title and contains no data, analysis, or numeric parameters to derive a pharmacodynamic relationship. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
