<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A03A&quot;,&quot;href&quot;:&quot;atc/A03A.md&quot;},{&quot;label&quot;:&quot;prifinium bromide&quot;}]"></div>

# prifinium bromide

- **generic name:** prifinium bromide
- **ATC codes:** `A03AB18`
- **DrugBank:** [DB13254](https://go.drugbank.com/drugs/DB13254)
- **groups:** experimental

## About

**Description.** Prifinium is an antimuscarinic agent with antispasmodic and antiemetic properties. It may be useful for the treatment of irritable bowel syndrome [A175027].

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-18 09:34 | 0:58 | 0/0/0 | 0/0/0 | 0/0/0 | 8,613/768 | ollama / qwen3.8:27b-mtp-q8_0 | 0 | 0/0 | 0/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=prifinium_bromide) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: CHRM5 (modulator).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 5 matched, 5 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Noguchi_1983.pdf` | Noguchi H et al., Pharmacokinetics of prifinium bromide i…, International journal of cl… (1983) | popPK | 10 | not captured | [6134685](https://pubmed.ncbi.nlm.nih.gov/6134685) | The paper reports quantitative PK parameters (CL, Vss, t1/2) for prifinium bromide in humans with all numeric values explicitly present in the text. |

<sub>queue written 2026-09-18T09:33:55.952184+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Ishikawa_1993 | irrelevant | 0 | 0 | The paper is a clinical case report on the treatment of organophosphorus intoxication and does not report any pharmacokinetic parameters for prifinium bromide. |
| PD | Ishikawa_1993 | not_relevant | 1 | 0 | The text is a qualitative clinical summary describing the efficacy of prifinium bromide in treating chronic organophosphorus intoxication but provides no numeric PD parameters, dose-response data, or concentration-effect analysis. |
| popPK | Ishikawa_1996 | irrelevant | 0 | 0 | The paper is an epidemiological and toxicological study where prifinium bromide is mentioned only as a therapeutic antidote, with no pharmacokinetic parameters reported. |
| PD | Ishikawa_1996 | not_relevant | 0 | 0 | The paper is an epidemiological and pathological study of organophosphorus pesticide toxicity; prifinium bromide is only mentioned as a treatment antidote without any pharmacodynamic modeling, dose-response analysis, or numeric PD parameters. |
| popPK | Kubo_1981 | irrelevant | 0 | 0 | The study is a pharmacological investigation of ganglion blocking activity in animals, and prifinium bromide is used only as a comparator agent with no pharmacokinetic parameters reported. |
| PD | Kubo_1981 | not_relevant | 1 | 0 | The paper focuses on the pharmacological profile of HSR-902, mentioning prifinium bromide only for qualitative potency ranking without providing numeric PD parameters or concentration-effect data for it. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
