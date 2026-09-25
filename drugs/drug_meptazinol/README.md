<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02A&quot;,&quot;href&quot;:&quot;atc/N02A.md&quot;},{&quot;label&quot;:&quot;meptazinol&quot;}]"></div>

# meptazinol

- **generic name:** meptazinol
- **ATC codes:** `N02AX05`
- **DrugBank:** [DB13478](https://go.drugbank.com/drugs/DB13478)
- **groups:** experimental

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-08-27 21:24 | 4:24 | 0/0/0 | 0/1/0 | 0/0/0 | 33,992/1,793 | ollama / qwen3.8:27b-mtp-q8_0 | 2 | 1/1 | 2/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> | [Xie_2017](drugs/drug_meptazinol/pd_Xie_2017_AChE_inhibition.md) | Xie Q et al., Pharmacophore-based design and discover…, Journal of enzyme inhibitio… (2017) | [10.1080/14756366.2016.1265521](https://doi.org/10.1080/14756366.2016.1265521) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Xie_2017](drugs/drug_meptazinol/pd_Xie_2017_A_42_levels.md) | Xie Q et al., Pharmacophore-based design and discover…, Journal of enzyme inhibitio… (2017) | [10.1080/14756366.2016.1265521](https://doi.org/10.1080/14756366.2016.1265521) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=meptazinol) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | blood | `BCHE` inhibitor | DrugBank actor |
| metabolism | liver | `BCHE` inhibitor | DrugBank actor |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 18 matched, 16 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Meyer_2019.pdf` | Meyer MJ et al., Opioids as Substrates and Inhibitors of…, Journal of medicinal chemis… (2019) | pd | 5 | [10.1021/acs.jmedchem.9b01301](https://doi.org/10.1021/acs.jmedchem.9b01301) | [31597043](https://www.ncbi.nlm.nih.gov/pubmed/31597043) | metadata signals extractable PD data (IC50) |
| `Spiegel_1984.pdf` | Spiegel K et al., Meptazinol: a novel Mu-1 selective opio…, The Journal of pharmacology… (1984) | pd | 4 | not captured | [6141283](https://www.ncbi.nlm.nih.gov/pubmed/6141283) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-08-27T21:23:11.971260+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Gabka_1982 | irrelevant | 0 | 0 | The study is a pharmacodynamic dose-response analysis using pain thresholds, not a pharmacokinetic study, and reports no disposition parameters (CL, V, ka, etc.) for meptazinol. |
| popPK | Xie_2017 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on meptazinol carbamate derivatives for Alzheimer's disease, reporting in-vitro enzyme kinetics and toxicity, but contains no pharmacokinetic disposition parameters (CL, V, etc.) for meptazinol. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
