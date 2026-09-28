<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A16A&quot;,&quot;href&quot;:&quot;atc/A16A.md&quot;},{&quot;label&quot;:&quot;alglucerase&quot;}]"></div>

# alglucerase

- **generic name:** alglucerase
- **ATC codes:** `A16AB01`
- **DrugBank:** [DB00088](https://go.drugbank.com/drugs/DB00088) · **PubChem:** not captured
- **groups:** approved, withdrawn

## About

**Description.** Human Beta-glucocerebrosidase or Beta-D-glucosyl-N-acylsphingosine glucohydrolase E.C. 3.2.1.45. 497 residue protein with N-linked carbohydrates, MW=59.3 kD. Alglucerase is prepared by modification of the oligosaccharide chains of human Beta-glucocerebrosidase. The modification alters the sugar residues at the non-reducing ends of the oligosaccharide chains of the glycoprotein so that they are predominantly terminated with mannose residues. Alglucerase was first approved by the FDA in 1991;[A254816] however, it was later discontinued from the market.

**Indication.** Alglucerase is indicated for use as a long-term enzyme replacement therapy in patients with Type I Gaucher disease who exhibit signs and symptoms that are severe enough to result in moderate-to-severe anemia, thrombocytopenia, bone disease, or significant hepato- or splenomegaly.[L44266]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-26 23:47 | 3:34 | 0/0/0 | 0/0/0 | 0/0/0 | 10,939/647 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 0/1 | 1/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=alglucerase) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: Glucocerebroside (other/unknown).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 8 matched, 8 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Grabowski_2009.pdf` | Grabowski GA et al., Dose-response relationships for enzyme…, Genetics in medicine : offi… (2009) | pd | 4 | [10.1097/GIM.0b013e31818e2c19](https://doi.org/10.1097/GIM.0b013e31818e2c19) | [19265748](https://www.ncbi.nlm.nih.gov/pubmed/19265748) | metadata signals extractable PD data (Emax) |

<sub>queue written 2026-09-26T23:47:15.916498+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Germain_2001 | not_relevant | 2 | 0 | The paper reports a case of neutralizing antibody development associated with a specific GBA genotype, but it does not provide quantitative pharmacokinetic or pharmacodynamic parameter data (e.g., clearance, half-life, AUC) to establish a pharmacogenomic effect size. |
| popPK | Grabowski_2009 | irrelevant | 0 | 0 | The study focuses on dose-response relationships for clinical efficacy (hematological and visceral parameters) rather than pharmacokinetic disposition parameters like clearance or volume. |
| popPK | Hollak_1997 | irrelevant | 0 | 0 | The study investigates metabolic and clinical outcomes (REE, organ volume, blood counts) of alglucerase therapy, not pharmacokinetic parameters. |
| PD | Hollak_1997 | not_relevant | 2 | 1 | The study reports clinical outcomes (organ volume, REE, counts) after a fixed dose of alglucerase but does not provide exposure data (concentrations) or fit a dose-response model to derive numeric PD parameters like Emax or EC50. |
| PGx | Vigan_2014 | not_relevant | 0 | 0 | The study models biomarker response to ERT and explicitly states that genotype (N370S/N370S) had no significant impact on the pharmacodynamic parameters. |
| popPK | Whittington_1992 | irrelevant | 0 | 0 | The paper is a therapeutic review that explicitly states pharmacokinetic information is limited and does not report any quantitative disposition parameters for alglucerase. |
| PD | Whittington_1992 | not_relevant | 1 | 0 | The text is a qualitative review that explicitly states pharmacodynamic information is limited and provides no numeric PD parameters or exposure-response data. |
| PGx | Zimran_1994 | not_relevant | 0 | 0 | The study explicitly states that no correlation was found between genotype and the response to treatment. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
