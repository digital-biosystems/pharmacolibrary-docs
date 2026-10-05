<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A14A&quot;,&quot;href&quot;:&quot;atc/A14A.md&quot;},{&quot;label&quot;:&quot;oxymetholone&quot;}]"></div>

# oxymetholone

- **generic name:** oxymetholone
- **ATC codes:** `A14AA05`
- **DrugBank:** [DB06412](https://go.drugbank.com/drugs/DB06412) · **PubChem:** [CID 5281034](https://pubchem.ncbi.nlm.nih.gov/compound/5281034)
- **molar mass:** 332.484 g/mol (C21H32O3) — DrugBank
- **groups:** approved, illicit

## About

Oxymetholone is an androgenic anabolic steroid used to treat anemia. It is an approved medicine, though it is also used illicitly, and is not authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q420864](https://www.wikidata.org/wiki/Q420864) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-05 10:22 | 0:30 | 0/0/0 | 0/0/0 | 0/0/0 | 26,035/128 | ollama / qwen3.8:27b-mtp-q8_0 | 2 | 1/1 | 2/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=oxymetholone) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| distribution | blood | `ALB` unknown | DrugBank actor |
| metabolism | brain | `CYP2D6` inhibitor, `MAOA` inducer | DrugBank actor |
| metabolism | kidney | `CYP3A5` inhibitor | DrugBank actor |
| metabolism | liver | `CYP2D6` inhibitor, `CYP3A4` inhibitor, `CYP3A5` inhibitor, `CYP3A7` inhibitor, `MAOA` inducer | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inhibitor, `CYP3A5` inhibitor, `MAOA` inducer | DrugBank actor |
| — | liver | `SRD5A1` activator/substrate | DrugBank actor |
| — | prostate gland | `AR` activator/target, `SRD5A1` activator/substrate | DrugBank actor |
| — | skin | `SRD5A1` activator/substrate | DrugBank actor |

<sub>Actors without a tissue in the table: CYP3A43 (inhibitor), SHBG (unknown).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 11 matched, 10 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Huml_2020.pdf` | Huml L et al., Stanazolol derived ELISA as a sensitive…, Steroids (2020) | pd | 4 | [10.1016/j.steroids.2019.108550](https://doi.org/10.1016/j.steroids.2019.108550) | [31812623](https://www.ncbi.nlm.nih.gov/pubmed/31812623) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-10-05T10:22:01.275626+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Azen_1977 | irrelevant | 0 | 0 | The paper is a clinical case report on hematologic response to oxymetholone therapy and does not report any pharmacokinetic parameters. |
| PD | Azen_1977 | not_relevant | 3 | 1 | The text describes a qualitative correlation between oxymetholone dosage and blood counts in three patients but does not provide specific numeric dose-response parameters, concentration-effect curves, or quantitative PD model fits. |
| popPK | Boris_1972 | irrelevant | 0 | 0 | no_text gate: only 81 chars of text extracted (&lt; 400) |
| PD | Boris_1972 | not_relevant | 0 | 0 | The paper studies the anti-ovulatory effects of androgenic steroids in rats and does not report pharmacokinetic or pharmacodynamic modeling, exposure-response relationships, or numeric PD parameters for oxymetholone. |
| popPK | Brenner_1975 | irrelevant | 0 | 0 | no_text gate: only 70 chars of text extracted (&lt; 400) |
| PD | Brenner_1975 | not_relevant | 0 | 0 | The provided text is only a title and does not contain the full text, data, or numeric parameters required to assess a pharmacodynamic relationship. |
| popPK | Cervantes_2000 | irrelevant | 0 | 0 | The study evaluates the clinical efficacy of danazol for anemia in myelofibrosis and does not report any pharmacokinetic parameters for oxymetholone. |
| PD | Cervantes_2000 | not_relevant | 0 | 0 | The paper reports clinical response rates for danazol in myelofibrosis and mentions oxymetholone only as background context, providing no pharmacodynamic modeling, concentration-effect data, or numeric PD parameters for oxymetholone. |
| popPK | Fürstenberger_2012 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on enzyme inhibition (11b-HSD2) and does not report pharmacokinetic disposition parameters for oxymetholone. |
| popPK | Hast_1976 | irrelevant | 0 | 0 | The paper is a clinical study on the efficacy of oxymetholone in treating anaemia and does not report any pharmacokinetic parameters. |
| PD | Hast_1976 | not_relevant | 0 | 0 | The paper reports clinical outcomes (remission and survival rates) for a fixed high-dose regimen but does not provide concentration-effect data, dose-response curves, or numeric PD parameters. |
| popPK | Huml_2020 | irrelevant | 0 | 0 | The paper describes an ELISA assay for detecting anabolic steroids and reports cross-reactivity percentages, not pharmacokinetic parameters for oxymetholone. |
| PD | Huml_2020 | not_relevant | 0 | 0 | The paper describes the development of an ELISA assay for detecting anabolic steroids; the reported IC50 values refer to the analytical sensitivity of the immunoassay, not to a pharmacodynamic exposure-response relationship for oxymetholone. |
| popPK | Khan_2012 | irrelevant | 0 | 0 | The paper is a study on the microbial transformation and in-vitro biological activity of oxymetholone metabolites, containing no pharmacokinetic data. |
| popPK | Pavlatos_2001 | irrelevant | 2 | 0 | This is a review article that summarizes pharmacokinetics but does not provide original quantitative disposition parameters or specific numeric values in the evidence. |
| popPK | Tomoda_1999 | irrelevant | 0 | 0 | The study focuses on the hemodynamic effects of oxymetholone on left ventricular dimensions in heart failure, not on pharmacokinetic parameters. |
| PD | Tomoda_1999 | not_relevant | 2 | 1 | The text provides only a qualitative summary of the study's conclusion regarding the effect of oxymetholone on left ventricular dimensions, without reporting any numeric PD parameters, dose-response curves, or exposure-response data. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
