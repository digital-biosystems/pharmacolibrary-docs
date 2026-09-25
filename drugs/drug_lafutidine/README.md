<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A02B&quot;,&quot;href&quot;:&quot;atc/A02B.md&quot;},{&quot;label&quot;:&quot;lafutidine&quot;}]"></div>

# lafutidine

- **generic name:** lafutidine
- **ATC codes:** `A02BA08`
- **DrugBank:** [DB12770](https://go.drugbank.com/drugs/DB12770)
- **groups:** investigational

## About

**Description.** Lafutidine has been investigated in Peptic Ulcer, Community-acquired Pneumonia, and Gastroesophageal Reflux Disease (GERD).

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-18 05:28 | 1:31 | 0/0/0 | 0/1/0 | 0/0/0 | 24,309/1,011 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 1/0 | 1/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> | [Ikawa_2007](drugs/drug_lafutidine/pd_Ikawa_2007_pH.md) | Ikawa K et al., Pharmacokinetic and pharmacodynamic pro…, Biological & pharmaceutical… (2007) | [10.1248/bpb.30.1003](https://doi.org/10.1248/bpb.30.1003) |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 8 matched, 8 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Dewan_2010.pdf` | Dewan B et al., An open-label, randomized, cross-over b…, World journal of gastrointe… (2010) | popPK | 8 | [10.4292/wjgpt.v1.i5.112](https://doi.org/10.4292/wjgpt.v1.i5.112) | [21577305](https://pubmed.ncbi.nlm.nih.gov/21577305) | The study reports quantitative non-compartmental pharmacokinetic parameters (Cmax, AUC, t1/2, tmax) for lafutidine, which are sufficient to derive clearance and volume metrics. |
| `Hagiwara_2007.pdf` | Hagiwara T et al., Improvement in symptoms after H2-recept…, World journal of gastroente… (2007) | pgx | 5 | [10.3748/wjg.v13.i28.3836](https://doi.org/10.3748/wjg.v13.i28.3836) | [17657838](https://www.ncbi.nlm.nih.gov/pubmed/17657838) | metadata signals extractable PGX data (CYP2C19) |
| `Shimatani_2003.pdf` | Shimatani T et al., Effect of omeprazole 10 mg on intragast…, Alimentary pharmacology & t… (2003) | pgx | 5 | [10.1046/j.1365-2036.2003.01804.x](https://doi.org/10.1046/j.1365-2036.2003.01804.x) | [14653835](https://www.ncbi.nlm.nih.gov/pubmed/14653835) | metadata signals extractable PGX data (CYP2C19) |

<sub>queue written 2026-09-18T05:28:11.054449+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Hagiwara_2007 | not_relevant | 0 | 0 | The paper compares clinical outcomes of lafutidine vs lansoprazole and mentions CYP2C19 polymorphisms only to state that lafutidine's activity is unaffected, without reporting any pharmacogenomic data or PK/PD parameters. |
| popPK | Ikawa_2006 | irrelevant | 2 | 0 | The study focuses on peptide release correlations and only mentions a one-compartmental model without reporting specific quantitative PK parameters like clearance or volume. |
| PGx | Isomoto_2003 | not_relevant | 0 | 0 | The study reports that CYP2C19 genotype had no significant influence on the clinical outcome (H. pylori eradication rate), but it does not report specific pharmacokinetic or pharmacodynamic parameters (e.g., AUC, Cmax, pH levels) or quantitative effect sizes for the drug. |
| PGx | Shimatani_2003 | not_relevant | 0 | 0 | The paper reports that lafutidine's pharmacodynamic effect (acid suppression) was not influenced by CYP2C19 genotype, meaning no pharmacogenomic effect was observed for the drug in question. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
