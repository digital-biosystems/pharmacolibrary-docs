<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02A&quot;,&quot;href&quot;:&quot;atc/N02A.md&quot;},{&quot;label&quot;:&quot;dextropropoxyphene, combinations excl. psycholeptics&quot;}]"></div>

# dextropropoxyphene, combinations excl. psycholeptics

- **generic name:** dextropropoxyphene, combinations excl. psycholeptics
- **ATC codes:** `N02AC54`
- **DrugBank:** not captured
- **groups:** not captured

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-08-27 16:13 | 17:32 | 0/0/0 | 0/0/0 | 0/0/0 | 62,181/9,987 | ollama / qwen3.8:27b-mtp-q8_0 | 7 | 0/0 | 6/1 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 63 matched, 62 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_7 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Wu_1994.pdf` | Wu C et al., Interaction between ethanol and opioids…, Human & experimental toxico… (1994) | pd | 4 | [10.1177/096032719401300301](https://doi.org/10.1177/096032719401300301) | [7909674](https://www.ncbi.nlm.nih.gov/pubmed/7909674) | metadata signals extractable PD data (EC50) |
| `Wu_1997.pdf` | Wu C et al., Membrane toxicity of opioids measured b…, Toxicology (1997) | pd | 4 | [10.1016/s0300-483x(96)03547-0](https://doi.org/10.1016/s0300-483x(96)03547-0) | [9020197](https://www.ncbi.nlm.nih.gov/pubmed/9020197) | metadata signals extractable PD data (IC50) |
| `Somogyi_2004.pdf` | Somogyi AA et al., CYP3A4 mediates dextropropoxyphene N-de…, Xenobiotica; the fate of fo… (2004) | pgx | 8 | [10.1080/00498250400008371](https://doi.org/10.1080/00498250400008371) | [15764408](https://www.ncbi.nlm.nih.gov/pubmed/15764408) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Yin_2010.pdf` | Yin OQ et al., CYP3A5 but not CYP2D6 polymorphism cont…, Journal of clinical pharmac… (2010) | pgx | 8 | [10.1177/0091270009359006](https://doi.org/10.1177/0091270009359006) | [20133509](https://www.ncbi.nlm.nih.gov/pubmed/20133509) | metadata signals extractable PGX data (CYP3A5, PK/PD-context) |
| `Raungrut_2010.pdf` | Raungrut P et al., In vitro-in vivo extrapolation predicts…, The Journal of pharmacology… (2010) | pgx | 7 | [10.1124/jpet.110.167916](https://doi.org/10.1124/jpet.110.167916) | [20484152](https://www.ncbi.nlm.nih.gov/pubmed/20484152) | metadata signals extractable PGX data (UGT2B4, PK/PD-context) |
| `Spina_1996.pdf` | Spina E et al., Clinically significant pharmacokinetic…, Clinical pharmacokinetics (1996) | pgx | 7 | [10.2165/00003088-199631030-00004](https://doi.org/10.2165/00003088-199631030-00004) | [8877250](https://www.ncbi.nlm.nih.gov/pubmed/8877250) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Spigset_1997.pdf` | Spigset O et al., Seizures and myoclonus associated with…, Acta psychiatrica Scandinav… (1997) | pgx | 5 | [10.1111/j.1600-0447.1997.tb09933.x](https://doi.org/10.1111/j.1600-0447.1997.tb09933.x) | [9395157](https://www.ncbi.nlm.nih.gov/pubmed/9395157) | metadata signals extractable PGX data (CYP2D6) |

<sub>queue written 2026-08-27T16:07:30.321920+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abernethy_1985 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for benzodiazepines (diazepam, alprazolam, lorazepam) as the subject drugs, while propoxyphene is only a co-administered interacting agent. |
| PGx | Bonnet_2003 | not_relevant | 0 | 0 | The paper is a review of moclobemide's therapeutic use and does not report pharmacogenomic effects on dextropropoxyphene. |
| PGx | Cottrill_2021 | not_relevant | 0 | 0 | The paper reports genotype-phenotype classifications (e.g., poor/intermediate metabolizer) and prevalence in a cohort, but does not report measured changes in specific pharmacokinetic or pharmacodynamic parameters (e.g., AUC, Cmax, pain scores adjusted for genotype) for dextropropoxyphene. |
| PGx | Kerry_1994 | not_relevant | 0 | 0 | The paper studies the metabolism of dextromethorphan, not dextropropoxyphene; dextropropoxyphene is only mentioned as an inhibitor of CYP2D6. |
| popPK | Murphy_2005 | irrelevant | 0 | 0 | The paper is a review that discusses dextropropoxyphene qualitatively (noting increased concentrations and prolonged metabolite half-life in renal failure) but does not report specific quantitative PK parameter values (CL, V, ka) for the drug. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
