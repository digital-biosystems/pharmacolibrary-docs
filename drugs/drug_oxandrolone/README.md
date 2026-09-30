<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A14A&quot;,&quot;href&quot;:&quot;atc/A14A.md&quot;},{&quot;label&quot;:&quot;oxandrolone&quot;}]"></div>

# oxandrolone

- **generic name:** oxandrolone
- **ATC codes:** `A14AA08`
- **DrugBank:** [DB00621](https://go.drugbank.com/drugs/DB00621) · **PubChem:** [CID 5878](https://pubchem.ncbi.nlm.nih.gov/compound/5878)
- **molar mass:** 306.4397 g/mol (C19H30O3) — DrugBank
- **groups:** approved, investigational

## About

**Description.** A synthetic hormone with anabolic and androgenic properties.

**Indication.** Use to promote weight gain after weight loss following extensive surgery.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-26 18:10 | 7:44 | 0/0/0 | 0/0/0 | 0/0/0 | 39,144/1,971 | ollama / qwen3.8:27b-mtp-q8_0 | 2 | 1/1 | 2/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=oxandrolone) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | kidney | <sub>“…Renal…”</sub> | prose |
| metabolism | liver | `CYP2C9` inhibitor | DrugBank actor |
| target | prostate gland | `AR` target | DrugBank actor |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 39 matched, 19 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Linakis_2020.pdf` | Linakis MW et al., Stability of Oxandrolone in Medium-Chai…, The journal of pediatric ph… (2020) | popPK | 9 | [10.5863/1551-6776-25.3.220](https://doi.org/10.5863/1551-6776-25.3.220) | [32265605](https://pubmed.ncbi.nlm.nih.gov/32265605) | The study reports pharmacokinetics for oxandrolone, but the specific numeric disposition parameters (CL, V, etc.) are not present in the provided abstract text, only bioavailability. |
| `Huml_2020.pdf` | Huml L et al., Stanazolol derived ELISA as a sensitive…, Steroids (2020) | pd | 4 | [10.1016/j.steroids.2019.108550](https://doi.org/10.1016/j.steroids.2019.108550) | [31812623](https://www.ncbi.nlm.nih.gov/pubmed/31812623) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-09-26T18:09:49.547634+00:00</sub>

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
| popPK | Linakis_2020 | relevant | 9 | 2 | The study reports pharmacokinetics for oxandrolone, but the specific numeric disposition parameters (CL, V, etc.) are not present in the provided abstract text, only bioavailability. |
| popPK | Menke_2010 | irrelevant | 0 | 0 | The study is a clinical trial assessing growth outcomes and safety of oxandrolone in Turner syndrome, not a pharmacokinetic study, and reports no PK parameters. |
| popPK | Miller_2009 | irrelevant | 0 | 0 | The paper is a clinical review of oxandrolone's efficacy in thermal injury and does not report any pharmacokinetic parameters. |
| PD | Miller_2009 | not_relevant | 1 | 0 | The text is a qualitative review of clinical outcomes (lean body mass, wound healing) without reporting any numeric concentration-effect data, dose-response curves, or PD parameters. |
| popPK | Namias_2007 | irrelevant | 0 | 0 | The paper is a review of burn care that mentions oxandrolone's safety and efficacy but does not report any pharmacokinetic parameters or quantitative disposition data. |
| popPK | Sas_2014 | irrelevant | 0 | 0 | The paper is a clinical review/recommendation regarding safety and efficacy in Turner syndrome, containing no pharmacokinetic parameters or quantitative disposition data for oxandrolone. |
| PD | Sas_2014 | not_relevant | 2 | 1 | The text is a review summarizing clinical outcomes (height gain) and safety recommendations based on dose ranges, but it does not report a pharmacodynamic model, concentration-effect relationship, or specific numeric PD parameters like Emax or EC50. |
| popPK | Segal_1999 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of antiviral activity and does not report pharmacokinetic parameters for oxandrolone. |
| popPK | Sheffield-Moore_1999 | irrelevant | 0 | 0 | The study focuses on muscle protein synthesis and amino acid transport, not pharmacokinetic disposition parameters (CL, V, t1/2) for oxandrolone. |
| popPK | Sheffield-Moore_2000 | irrelevant | 0 | 0 | The study investigates muscle protein synthesis and breakdown using stable isotopes, not pharmacokinetic disposition parameters for oxandrolone. |
| popPK | unknown_1997 | irrelevant | 0 | 0 | no_text gate: only 27 chars of text extracted (&lt; 400) |
| PD | unknown_1997 | not_relevant | 0 | 0 | The provided text is only a title and contains no data, analysis, or numeric parameters to derive a pharmacodynamic relationship. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
