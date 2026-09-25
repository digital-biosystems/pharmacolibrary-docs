<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A03F&quot;,&quot;href&quot;:&quot;atc/A03F.md&quot;},{&quot;label&quot;:&quot;clebopride&quot;}]"></div>

# clebopride

- **generic name:** clebopride
- **ATC codes:** `A03FA06`
- **DrugBank:** [DB13511](https://go.drugbank.com/drugs/DB13511)
- **groups:** investigational

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-18 11:53 | 2:19 | 0/0/0 | 0/0/0 | 0/0/0 | 53,140/1,470 | ollama / qwen3.8:27b-mtp-q8_0 | 2 | 0/2 | 2/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=clebopride) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| target | blood | `ACHE` inhibitor | DrugBank actor |
| target | neuromuscular junction | `ACHE` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: DRD2 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 13 matched, 13 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Tan_2010.pdf` | Tan Z et al., Development and validation of a LC-MS/M…, Journal of chromatography.… (2010) | popPK | 10 | [10.1016/j.jchromb.2010.06.006](https://doi.org/10.1016/j.jchromb.2010.06.006) | [20598654](https://pubmed.ncbi.nlm.nih.gov/20598654) | The paper describes a PK study for clebopride, but the provided evidence contains only analytical method validation details and lacks any quantitative PK parameter values (e.g., CL, V, t1/2). |
| `Horton_1988.pdf` | Horton RW et al., The interaction of substituted benzamid…, British journal of pharmaco… (1988) | pd | 4 | [10.1111/j.1476-5381.1988.tb11643.x](https://doi.org/10.1111/j.1476-5381.1988.tb11643.x) | [2850059](https://www.ncbi.nlm.nih.gov/pubmed/2850059) | metadata signals extractable PD data (IC50) |
| `Schuurkes_1985.pdf` | Schuurkes JA et al., A comparative study on the effects of d…, Japanese journal of pharmac… (1985) | pd | 4 | [10.1254/jjp.39.123](https://doi.org/10.1254/jjp.39.123) | [4087563](https://www.ncbi.nlm.nih.gov/pubmed/4087563) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-09-18T11:53:06.548639+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Horton_1988 | irrelevant | 0 | 0 | no_text gate: only 90 chars of text extracted (&lt; 400) |
| PD | Horton_1988 | not_relevant | 0 | 0 | The paper discusses in vitro binding of substituted benzamides to benzodiazepine sites and does not report any pharmacodynamic or exposure-response data for clebopride. |
| popPK | Kim_2007 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiological safety assessment (hERG/Purkinje fiber) and does not report pharmacokinetic disposition parameters for clebopride. |
| popPK | Moore_1990 | irrelevant | 0 | 0 | The study is a behavioral pharmacology experiment in mice where clebopride is used as a D-2 antagonist, not a pharmacokinetic study of clebopride. |
| PD | Moore_1990 | not_relevant | 1 | 0 | The paper focuses on the pharmacology of apomorphine and NPA; clebopride is only mentioned as a D-2 antagonist used to reverse hypothermia, with no dose-response curve or numeric PD parameters reported for clebopride itself. |
| popPK | Mortensen_1992 | irrelevant | 0 | 0 | The paper is an in-vitro antibacterial susceptibility study, not a pharmacokinetic study, and reports no PK parameters for clebopride. |
| PD | Mortensen_1992 | not_relevant | 1 | 1 | The paper reports in vitro antibacterial susceptibility (MIC/IC50) of bacteria to neuroleptics, which is a pharmacological activity assay, not a pharmacodynamic (exposure-response) relationship for the drug's clinical effect in a biological system. |
| popPK | Niznik_1985 | irrelevant | 0 | 0 | The paper is a mechanistic study on photoaffinity labeling of dopamine receptors, not a pharmacokinetic study, and reports no disposition parameters for clebopride. |
| popPK | Rouaz_2021 | irrelevant | 0 | 0 | The paper is a review of excipients in pediatric formulations and does not contain any pharmacokinetic data or parameters for clebopride. |
| PD | Rouaz_2021 | not_relevant | 0 | 0 | The paper is a review of excipients in paediatric formulations and does not contain any pharmacodynamic or exposure-response data for clebopride. |
| popPK | Schuurkes_1985 | irrelevant | 0 | 0 | no_text gate: only 146 chars of text extracted (&lt; 400) |
| popPK | Segura_1981 | irrelevant | 0 | 0 | no_text gate: only 79 chars of text extracted (&lt; 400) |
| popPK | Tack_2012 | irrelevant | 0 | 0 | The paper is a systematic review of cardiovascular safety and pharmacology of 5-HT4 agonists, not a primary pharmacokinetic study reporting quantitative disposition parameters for clebopride. |
| PD | Tack_2012 | not_relevant | 2 | 1 | The paper is a systematic review focused on cardiovascular safety and provides only qualitative summaries or general tables of pharmacodynamics without reporting specific numeric PD parameters (e.g., Emax, EC50) or exposure-response curves for clebopride. |
| popPK | Tan_2010 | relevant | 10 | 0 | The paper describes a PK study for clebopride, but the provided evidence contains only analytical method validation details and lacks any quantitative PK parameter values (e.g., CL, V, t1/2). |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
